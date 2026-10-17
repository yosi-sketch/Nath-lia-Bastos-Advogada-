# Nathália Bastos — Advocacia e Consultoria Jurídica

Site institucional de advocacia bancária em Patrocínio, MG. Identidade baseada no logo enviado: champanhe, bronze, preto quente e marfim. Marcellus nos títulos e Manrope na leitura. Hero, processo, avaliações e rodapé em preto quente, alternados com marfim.

## Desenvolvimento

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4. Instale com npm install e execute npm run dev -- --port 3011. Prévia: http://localhost:3011. Leia AGENTS.md e os guias locais do Next.js antes de alterar APIs.

## Organização

- app/lib/brand.ts: dados institucionais e links de contato, localização e avaliações.
- app/page.tsx: seções, quatro diálogos, menu e FAQ.
- app/globals.css: configuração Tailwind 4 por @theme, tipografia, foco e movimento.
- app/layout.tsx: fontes, metadados e favicon atual.
- app/components/GlowingButton.tsx: botão de contato compartilhado.
- PRODUCT.md: fatos, fontes e limites do conteúdo.
- DESIGN.md e .impeccable/design.json: sistema visual e componentes.

## Contatos e avaliações

WhatsApp/telefone: (34) 99165-9554. Instagram: @nathaliabastos.adv. Sede: Av. Rui Barbosa, 621, Edifício Vila Rica, sala 403, 4º andar, Centro, Patrocínio — MG, CEP 38740-012.

O perfil Google foi consultado em 17/10/2026: nota 5,0 e 14 avaliações, das quais doze têm texto. Esses doze relatos estão no site, com autoria e trechos literais de até 25 palavras por autor. Seis aparecem inicialmente; o botão Ver mais exibe os outros seis. Nota e contagem sem atualização automática. E-mail, OAB e domínio não informados. Configurar NEXT_PUBLIC_SITE_URL somente com o domínio real; sem essa variável, imagens sociais são omitidas.

## Assets

Os três anexos foram copiados integralmente para public: nathalia-bastos-logo.png (1942 × 809), nathalia-bastos-retrato.png (287 × 510) e nathalia-bastos-escritorio.png (558 × 510). Origem e integridade em .impeccable/asset-origins.json. O retrato tem resolução reduzida e contém uma marca no canto superior; o arquivo permanece original. A imagem de parede é apresentada como identidade visual.

## Validação

npm run lint e npm run build. O lint exclui ferramentas externas da skill e arquivos temporários de revisão. Evidências visuais e funcionais em .impeccable/review/, pasta local ignorada pelo Git.
