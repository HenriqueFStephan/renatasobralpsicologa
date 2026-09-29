"""Read debt.txt and backend/.env. Neither file is committed."""

from __future__ import annotations

import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[3]
BACKEND_DIR = Path(__file__).resolve().parents[2]
SERVER_DEBT = Path("/opt/renata/debt.txt")
LOCAL_DEBT = REPO_ROOT / "debt.txt"
ENV_FILE = BACKEND_DIR / ".env"


def _apply_file(path: Path, override: bool) -> None:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return
    for raw in text.splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if override or key not in os.environ:
            os.environ[key] = value


def load_settings() -> None:
    _apply_file(ENV_FILE, override=False)
    debt = SERVER_DEBT if SERVER_DEBT.is_file() else LOCAL_DEBT
    _apply_file(debt, override=True)


load_settings()


def setting(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()
