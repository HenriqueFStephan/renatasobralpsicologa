# Deploy

Este site usa a instância Lightsail que já serve stephan.net.br (`54.232.149.254`). Não crie outra. O bootstrap não apaga os sites nginx que já existem. Se a porta 8000 estiver ocupada, a API da Renata escuta em 8001 e grava isso em `/opt/renata/api.port`.

Quem opera aponta o DNS e emite o certificado. Os scripts preparam a máquina e publicam o build.

1. Repositório: https://github.com/HenriqueFStephan/renatasobralpsicologa — código em `main`.
2. Entre na instância como `ubuntu`, copie `scripts/bootstrap_lightsail.sh` e rode: `sudo bash bootstrap_lightsail.sh`.
3. DNS, na zona Lightsail do domínio: registro A de `renatasobralpsicologa.com.br` e de `www` para `54.232.149.254`. Nada além disso. A zona já está nos nameservers Amazon; em 29 set 2026 o apex ainda não tinha registro A e `www` não existia.
4. O workflow pede o certificado na primeira publicação, quando o DNS já aponta para a instância. O comando manual, se precisar repetir: `sudo certbot --nginx -d renatasobralpsicologa.com.br -d www.renatasobralpsicologa.com.br`.
5. No GitHub, Actions secrets: `LIGHTSAIL_HOST` (o IP ou o hostname), `LIGHTSAIL_SSH_KEY` (chave privada do usuário `ubuntu`), `CURSOR_API_KEY`.
6. No servidor, edite `/opt/renata/debt.txt`. Valores só deste projeto, nunca copiados de outro:
   - `GITHUB_REPO` — `owner/nome`
   - `GITHUB_STUDIO_TOKEN` — PAT fine-grained com Issues e Contents
   - `STUDIO_ACCESS_TOKEN` — uma senha que você inventa
   - `BLOCKWALL_KEY` — vazio para o site público; preenchido só na manutenção
7. Instale o Cursor GitHub App neste repositório. Sem isso o solver de issues não enxerga o código.

O workflow **Deploy site to Lightsail** publica o site quando `main` muda em `frontend/`, `backend/`, no script de deploy ou no próprio workflow.
