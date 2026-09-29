# Onde mexer

- Rotas: `frontend/src/app/app.routes.ts`. Uma feature por página pública, mais o post, o studio e a parede de manutenção.
- HTTP só em `frontend/src/app/core/api.service.ts`.
- Texto das páginas públicas: templates em `frontend/src/app/pages/`. Posts em `frontend/src/app/content/posts.ts`.
- Chrome do site (menu, Instagram, rodapé): `frontend/src/app/layout/shell.component.ts`.
- Barra de cookies: `frontend/src/app/layout/cookie-bar.component.ts`.
- `/studio` não entra no menu. Página em `frontend/src/app/pages/studio/`. API em `backend/app/api/v1/studio.py`.
- Parede de manutenção: `frontend/src/app/pages/maintenance/` e `backend/app/api/v1/blockwall.py`.
- Issues do solver usam a etiqueta `solve`.
