from fastapi import APIRouter

from app.core.config import setting

router = APIRouter(prefix="/blockwall", tags=["blockwall"])


@router.get("")
def blockwall() -> dict:
    return {"enabled": bool(setting("BLOCKWALL_KEY"))}
