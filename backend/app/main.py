from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.blockwall import router as blockwall_router
from app.api.v1.studio import router as studio_router

app = FastAPI(title="Renata Sobral")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://127.0.0.1:4200",
        "https://renatasobralpsicologa.com.br",
        "https://www.renatasobralpsicologa.com.br",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _status() -> dict:
    return {"status": "ok"}


@app.get("/health")
def health() -> dict:
    return _status()


@app.get("/api/v1/status")
def status() -> dict:
    return _status()


app.include_router(blockwall_router, prefix="/api/v1")
app.include_router(studio_router, prefix="/api/v1")
