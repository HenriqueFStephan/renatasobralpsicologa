# Dra. Renata Sobral

Site público de Dra. Renata Sobral, psicóloga. Angular no navegador, FastAPI atrás do nginx, os dois na mesma instância Lightsail. Sem WordPress.

## Local

Python 3.11 e Node 18.

```bash
python -m venv venv
venv\Scripts\activate
pip install -r backend/requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

O comando do uvicorn roda com o diretório de trabalho `backend/`.

Em outro terminal:

```bash
cd frontend
npm ci
npm start
```

O site abre em http://localhost:4200. A API de desenvolvimento é http://localhost:8000/api/v1.

`/studio` não aparece no menu. No localhost a página abre sem senha. Criar um issue fica em ensaio até `GITHUB_STUDIO_TOKEN` existir em `debt.txt` (veja `debt.txt.example`).

Deploy: [docs/DEPLOY.md](docs/DEPLOY.md).
