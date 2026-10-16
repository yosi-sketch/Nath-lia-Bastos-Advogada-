# Luana Oliveira — Advogada

Site institucional em português da Dra. Luana Oliveira, em Caratinga, MG, com atendimento on-line em todo o Brasil. Apresenta inventário, usucapião, regularização de imóveis e consultoria imobiliária e registral, com detalhes em diálogos, apresentação profissional, avaliações, FAQ e contato.

## Desenvolvimento

Instalar dependências com `npm install`. Iniciar com `npm run dev -- --port 3005`. Prévia em [localhost:3005](http://localhost:3005).

Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide. Consulte `node_modules/next/dist/docs` antes de alterar APIs do Next, conforme `AGENTS.md`. Nome do pacote: `luana-oliveira-advocacia`.

Comandos de verificação disponíveis: `npm run lint -- app`, `node node_modules/typescript/bin/tsc --noEmit` e `npm run build`. Build, lint e TypeScript passaram. Verificações no navegador confirmaram imagens, CTAs, menu móvel, FAQ, quatro diálogos e navegação por teclado, sem erros de console.

## Marca e conteúdo

Paleta quantizada em passos de 16 a partir dos pixels opacos dos anexos: logo dourado `#e0c090`, champagne `#f0d0a0`, ouro suave `#d0b080`, luz `#fff0d0` e ouro envelhecido `#b09060`; arte Sobre vinho `#501020` e bege `#d0c0b0`. São amostras de origem; os tokens finais, incluindo tons derivados para contraste, estão em `app/globals.css` e `DESIGN.md`. O cabeçalho usa vinho escuro, e o logo do rodapé fica diretamente sobre vinho.

Títulos Cormorant Garamond, com pesos 400/500/600 carregados, e leitura Lato, com pesos 400/700 carregados, via `next/font/google` e `display: swap`. A classe de títulos usa peso 400. O código também solicita pesos 500/600 em alguns controles Lato; a documentação registra esse estado sem alterar a interface.

Dados e links em app/lib/brand.ts. Página e diálogos em app/page.tsx. Metadados e fontes em app/layout.tsx. CTA compartilhado em app/components/GlowingButton.tsx.

- WhatsApp e telefone: (33) 98739-4137 / 5533987394137.
- Endereço: Rua Raul Soares, 134 — Centro, Caratinga — MG, 35300-020.
- Instagram: [@luanaoliadv](https://www.instagram.com/luanaoliadv/).
- Google: nota 5,0 e 43 avaliações do material enviado, sem atualização ao vivo; [perfil com CID 785740618994194925](https://www.google.com/maps?cid=785740618994194925).
- Atuação: inventário, usucapião, regularização de imóveis e consultoria imobiliária e registral.
- Experiência: oito anos de trabalho em Cartório de Registro de Imóveis.
- Formação: pós-graduação em Direito Imobiliário pela PUC Minas e em Direito Notarial e Registral pela Doctum.
- Apresentação: princípios cristãos, respeito e atenção às pessoas; atendimento presencial e on-line nacional.
- Avaliações: trechos literais de Marcos Vinícius, Alessandra Moreira e Sergio Luiz Moreira.

E-mail, número OAB e domínio não foram informados. Horários não são exibidos no site. Configurar `NEXT_PUBLIC_SITE_URL` com o domínio real para habilitar imagens sociais nos metadados. Não apresentar a experiência em cartório como tempo de advocacia.

## Assets

| Arquivo | Dimensões | Uso |
| --- | --- | --- |
| public/luana-oliveira-logo.png | 2172 × 724 | Cabeçalho, rodapé e metadados |
| public/luana-oliveira-retrato.png | 340 × 510 | Retrato principal |
| public/luana-oliveira-sobre.png | 510 × 510 | Arte de apresentação profissional |

Cópias binárias integrais dos anexos: os hashes SHA-256 e dimensões de cada fonte foram conferidos contra o destino. Proveniência em `.impeccable/asset-origins.json`, incluindo `sourceSha256`, `sha256` e `identicalToSource`. Otimização em tempo de exibição por `next/image`, sem alteração dos originais.

## Documentação

`PRODUCT.md` reúne fatos e limites. `DESIGN.md` e `.impeccable/design.json` registram os tokens e componentes implementados, mantendo o schemaVersion 2 do sidecar. `.impeccable/luana-oliveira-direction.md` registra a direção aplicada. Capturas desktop, mobile e completa em outputs/luana-desktop.jpg, outputs/luana-mobile.jpg e outputs/luana-full.jpg. Responsividade conferida em 320, 390, 768, 1024 e 1440px; revisão visual independente: ship, sem problemas materiais no escopo avaliado.
