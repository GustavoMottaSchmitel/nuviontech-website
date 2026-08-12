# NuvionTech — site institucional 2026

Reconstrução completa do site institucional da NuvionTech. O projeto posiciona o estúdio em três frentes — landing pages, sistemas sob medida e automação/IA — e usa quatro projetos reais como prova de trabalho.

## Stack

- Next.js 16.3 / React 19
- TypeScript
- Tailwind CSS 4 como pipeline, com direção visual autoral em CSS
- Fontes locais Archivo e Manrope
- Playwright para QA visual responsivo

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run qa:visual
```

`qa:visual` espera uma build de produção ativa em `http://127.0.0.1:3011`. Para usar outra URL, defina `QA_BASE_URL`.

Exemplo local:

```bash
npm run build
npm run start -- --hostname 127.0.0.1 --port 3011
# em outro terminal
npm run qa:visual
```

## Rotas

- `/`
- `/projetos`
- `/projetos/ata-crm`
- `/projetos/ata-ponto`
- `/projetos/ata-seguranca`
- `/projetos/ata-acesso`
- `/servicos/landing-pages`
- `/servicos/sistemas-sob-medida`
- `/servicos/automacao-e-ia`
- `/sobre`
- `/contato`
- `/privacidade`

O projeto também gera `robots.txt`, `sitemap.xml`, manifest, ícone e imagem Open Graph.

## Conteúdo e dados

Conteúdo compartilhado, links e cases ficam em `data/site.ts`. Não publique claims de resultado, depoimentos, prazos ou disponibilidade sem validação documental.

Os screenshots atuais dos projetos são provas visuais dos sites no ar. Confirme autorização do cliente e recapture as URLs se houver atualizações antes da publicação.

## Publicação

Esta reconstrução foi feita no branch `rebuild/nuvion-site-2026`. O DNS existente não foi alterado. Antes do deploy:

1. revisar o site local;
2. confirmar autorização de uso dos cases ATA;
3. confirmar se haverá e-mail institucional;
4. conectar o projeto ao provedor atual;
5. publicar primeiro em preview;
6. somente depois promover para produção, preservando os registros de e-mail e DNS.

Analytics e pixels não foram ativados sem IDs e consentimento. A política de privacidade reflete esse estado.
