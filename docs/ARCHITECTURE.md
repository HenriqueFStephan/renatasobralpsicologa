# Arquitetura

O navegador pede o HTML estático ao nginx. Chamadas de `/api/v1` no mesmo host vão para o FastAPI em 127.0.0.1. Na instância compartilhada com stephan.net.br a porta fica em `/opt/renata/api.port`: 8000, ou 8001 se 8000 já estiver em uso.

| Peça | Onde |
| --- | --- |
| Páginas públicas, post, studio, manutenção | `frontend/src/app` |
| Rotas | `frontend/src/app/app.routes.ts` |
| HTTP | `frontend/src/app/core/api.service.ts` |
| API, `/health`, `/api/v1/status` | `backend/app/main.py` |
| Studio | `backend/app/api/v1/studio.py` |
| Manutenção (`BLOCKWALL_KEY`) | `backend/app/api/v1/blockwall.py` |
| `debt.txt` e `backend/.env` | `backend/app/core/config.py` |
| Bootstrap da instância | `scripts/bootstrap_lightsail.sh` |
| Deploy no servidor | `scripts/deploy_lightsail_remote.sh` |
| Actions | `.github/workflows/` |

Produção: `https://renatasobralpsicologa.com.br` e `www`. O build grava `apiUrl` como `/api/v1`.
