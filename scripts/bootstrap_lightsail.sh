#!/bin/bash
# One-time setup on the Ubuntu Lightsail instance that already serves stephan.net.br.
# Read it, then run as root: sudo bash bootstrap_lightsail.sh
# Does not remove other nginx sites and does not replace /opt/renata/debt.txt.
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx curl ca-certificates python3 python3-venv python3-pip
if apt-cache show python3.11 >/dev/null 2>&1; then
  apt-get install -y python3.11 python3.11-venv
  PY=python3.11
else
  PY=python3
fi

mkdir -p /var/www/renata /opt/renata/backend
if [ ! -d /opt/renata/venv ]; then
  "$PY" -m venv /opt/renata/venv
fi

if [ ! -f /opt/renata/debt.txt ]; then
  cat >/opt/renata/debt.txt <<'EOF'
BLOCKWALL_KEY=
GITHUB_REPO=
GITHUB_STUDIO_TOKEN=
STUDIO_ACCESS_TOKEN=
EOF
  chmod 600 /opt/renata/debt.txt
fi

API_PORT=8000
if ss -ltn '( sport = :8000 )' | grep -q LISTEN; then
  API_PORT=8001
fi
printf '%s\n' "$API_PORT" >/opt/renata/api.port

cat >/etc/systemd/system/renata-api.service <<EOF
[Unit]
Description=Renata Sobral API
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/opt/renata/backend
EnvironmentFile=/opt/renata/debt.txt
ExecStart=/opt/renata/venv/bin/uvicorn app.main:app --host 127.0.0.1 --port ${API_PORT}
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

cat >/etc/nginx/sites-available/renata <<EOF
server {
    listen 80;
    server_name renatasobralpsicologa.com.br www.renatasobralpsicologa.com.br;
    root /var/www/renata;
    index index.html;
    client_max_body_size 25m;

    location /api/v1/ {
        proxy_pass http://127.0.0.1:${API_PORT};
        proxy_set_header Host \$host;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

ln -sfn /etc/nginx/sites-available/renata /etc/nginx/sites-enabled/renata
nginx -t
systemctl daemon-reload
systemctl enable renata-api
systemctl reload nginx

echo "Bootstrap finished. API port ${API_PORT}. Other nginx sites were left in place."
echo "DNS: A record for renatasobralpsicologa.com.br and www to this instance IP. Nothing else."
echo "After DNS answers, install TLS by hand:"
echo "  apt-get install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d renatasobralpsicologa.com.br -d www.renatasobralpsicologa.com.br"
