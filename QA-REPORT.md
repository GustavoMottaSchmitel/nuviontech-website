# QA — reconstrução NuvionTech

Data: 12/08/2026

## Verificações aprovadas

- `npm run lint`
- `npm run typecheck`
- `npm run build` — 19 páginas geradas
- `npm audit` — 0 vulnerabilidades em produção e desenvolvimento
- Axe em 12 rotas — 0 violações de acessibilidade e 0 erros de console
- rotas institucionais, cases, serviços e arquivos SEO respondendo `200`
- screenshots em 320, 390, 768, 1024 e 1440 px
- zero overflow horizontal nos cinco breakpoints
- zero imagem quebrada nas rotas inspecionadas
- zero erro de console nas capturas automatizadas
- home, case, serviço e sobre inspecionados em mobile
- menu mobile, foco, semântica e `prefers-reduced-motion` implementados
- case ATA Segurança preservado como regressão explícita em 320 e 1440 px
- imagens de cases recarregadas após scroll para impedir falsos mockups vazios no QA
- retorno de foco, trap de teclado, `Escape`, scroll lock e fechamento por navegação validados no menu mobile
- ícone e imagem Open Graph renderizados com o símbolo oficial, sem dependência de URL local
- aproximadamente 28 MB de assets antigos e sem uso removidos do pacote público
- fontes locais convertidas de TTF para WOFF2, reduzindo o payload bruto de cerca de 805 KB para 99 KB
- metadados Open Graph e Twitter específicos em páginas institucionais, serviços e cases

As evidências visuais estão em `qa/responsive/`. O script está em `scripts/visual-qa.mjs`.

## Decisões de privacidade

- nenhum formulário próprio nesta versão;
- nenhum analytics, pixel ou tracker ativado sem configuração autorizada;
- política de privacidade publicada em `/privacidade`;
- contato externo identificado como WhatsApp/Instagram.

## Pendências externas à implementação

- confirmar autorização para exibir nomes e capturas dos quatro cases ATA;
- confirmar um e-mail institucional antes de adicioná-lo ao site;
- definir provedor/preview e autorização de deploy;
- preservar os registros DNS e de e-mail existentes ao publicar.

Essas pendências não bloqueiam a revisão local, mas bloqueiam a promoção segura para produção.
