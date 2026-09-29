"""Hidden studio: gate the page and open a GitHub issue labeled solve."""

from __future__ import annotations

import base64
import json
import urllib.error
import urllib.request
from datetime import datetime, timezone

from fastapi import APIRouter, File, Form, Header, HTTPException, UploadFile

from app.core.config import setting

router = APIRouter(prefix="/studio", tags=["studio"])


def _token_required() -> str:
    expected = setting("STUDIO_ACCESS_TOKEN")
    return expected


@router.get("/gate")
def gate() -> dict:
    return {
        "accessRequired": bool(setting("STUDIO_ACCESS_TOKEN")),
        "dryRun": not bool(setting("GITHUB_STUDIO_TOKEN")),
    }


def _check_access(studio_token: str | None) -> None:
    expected = _token_required()
    if not expected:
        return
    if not studio_token or studio_token != expected:
        raise HTTPException(status_code=401, detail="Token de acesso inválido.")


def _github(method: str, path: str, token: str, body: dict | None = None) -> tuple[int, dict | list | str]:
    data = None if body is None else json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        f"https://api.github.com{path}",
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "renata-studio",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode("utf-8")
            return resp.status, json.loads(raw) if raw else {}
    except urllib.error.HTTPError as exc:
        raw = exc.read().decode("utf-8", "replace")
        try:
            parsed = json.loads(raw) if raw else {}
        except json.JSONDecodeError:
            parsed = raw
        return exc.code, parsed


def _ensure_branch(repo: str, token: str) -> None:
    status, _ = _github("GET", f"/repos/{repo}/git/ref/heads/studio-attachments", token)
    if status == 200:
        return
    status, repo_info = _github("GET", f"/repos/{repo}", token)
    if status != 200 or not isinstance(repo_info, dict):
        raise HTTPException(status_code=502, detail="Não foi possível ler o repositório no GitHub.")
    default_branch = repo_info.get("default_branch") or "main"
    status, ref = _github("GET", f"/repos/{repo}/git/ref/heads/{default_branch}", token)
    if status != 200 or not isinstance(ref, dict):
        raise HTTPException(status_code=502, detail="Não foi possível ler o branch padrão.")
    sha = ref["object"]["sha"]
    status, created = _github(
        "POST",
        f"/repos/{repo}/git/refs",
        token,
        {"ref": "refs/heads/studio-attachments", "sha": sha},
    )
    if status not in (201, 422):
        raise HTTPException(status_code=502, detail=f"Não foi possível criar o branch studio-attachments: {created}")


def _ensure_label(repo: str, token: str) -> None:
    status, _ = _github("GET", f"/repos/{repo}/labels/solve", token)
    if status == 200:
        return
    _github(
        "POST",
        f"/repos/{repo}/labels",
        token,
        {"name": "solve", "color": "0e8a16", "description": "Cursor issue solver"},
    )


async def _store_attachments(repo: str, token: str, files: list[UploadFile]) -> list[str]:
    if not files:
        return []
    _ensure_branch(repo, token)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S")
    links: list[str] = []
    for index, upload in enumerate(files, start=1):
        name = (upload.filename or f"arquivo-{index}").replace("\\", "/").split("/")[-1]
        safe = "".join(ch if ch.isalnum() or ch in "._-" else "-" for ch in name) or f"arquivo-{index}"
        path = f"studio/{stamp}/{index:02d}-{safe}"
        payload = await upload.read()
        status, result = _github(
            "PUT",
            f"/repos/{repo}/contents/{path}",
            token,
            {
                "message": f"studio attachment {index:02d} {safe}",
                "content": base64.b64encode(payload).decode("ascii"),
                "branch": "studio-attachments",
            },
        )
        if status not in (200, 201) or not isinstance(result, dict):
            raise HTTPException(status_code=502, detail=f"Falha ao guardar o anexo {safe}.")
        html_url = (result.get("content") or {}).get("html_url") or f"https://github.com/{repo}/blob/studio-attachments/{path}"
        links.append(html_url)
    return links


@router.post("/issues")
async def create_issue(
    title: str = Form(...),
    body: str = Form(""),
    attachments: list[UploadFile] | None = File(None),
    x_studio_token: str | None = Header(default=None, alias="X-Studio-Token"),
) -> dict:
    _check_access(x_studio_token)
    title = title.strip()
    if not title:
        raise HTTPException(status_code=400, detail="Informe um título.")
    files = [item for item in (attachments or []) if item.filename]
    names = [item.filename or "" for item in files]
    github_token = setting("GITHUB_STUDIO_TOKEN")
    repo = setting("GITHUB_REPO")
    if not github_token:
        return {
            "dryRun": True,
            "issue": {
                "title": title,
                "body": body,
                "labels": ["solve"],
                "attachments": names,
            },
        }
    if not repo or "/" not in repo:
        raise HTTPException(status_code=500, detail="GITHUB_REPO não está configurado.")
    links = await _store_attachments(repo, github_token, files)
    issue_body = body.strip()
    if links:
        lines = [issue_body, "", "Anexos:"] if issue_body else ["Anexos:"]
        for index, (name, link) in enumerate(zip(names, links), start=1):
            lines.append(f"{index}. [{name}]({link})")
        issue_body = "\n".join(lines)
    _ensure_label(repo, github_token)
    status, created = _github(
        "POST",
        f"/repos/{repo}/issues",
        github_token,
        {"title": title, "body": issue_body, "labels": ["solve"]},
    )
    if status not in (200, 201) or not isinstance(created, dict):
        raise HTTPException(status_code=502, detail=f"Não foi possível abrir o issue: {created}")
    return {
        "dryRun": False,
        "number": created.get("number"),
        "url": created.get("html_url"),
        "attachments": links,
    }
