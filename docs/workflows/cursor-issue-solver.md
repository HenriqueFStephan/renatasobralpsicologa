# Cursor issue solver

Secret `CURSOR_API_KEY`. `GITHUB_TOKEN` vem do Actions.

Roda quando um issue recebe a etiqueta `solve`, ou quando um comentário começa com `[CORRECTION]`. Pull requests são ignorados. Não há workflow semanal e comentários `[POST]` não disparam nada.

O job sobe um cloud agent da Cursor. Complexidade 1–3 commita no branch base. Complexidade 4–5 abre um pull request e deixa aberto.

O Cursor GitHub App precisa estar instalado neste repositório.
