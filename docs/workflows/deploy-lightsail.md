# Deploy site to Lightsail

Dispara no push em `main` (frontend, backend, o script remoto ou este workflow) e em `workflow_dispatch`.

Node 18, `npm ci`, `npm run build:ci` com `NG_APP_API_URL=/api/v1`. Envia `site.tgz` e `api.tgz` por SSH e roda `scripts/deploy_lightsail_remote.sh` como root.

Secrets: `LIGHTSAIL_HOST`, `LIGHTSAIL_SSH_KEY`. Se `BLOCKWALL_KEY` não existir, o job segue e não mexe no `debt.txt`. Se existir, só essa linha é trocada e a API reinicia.
