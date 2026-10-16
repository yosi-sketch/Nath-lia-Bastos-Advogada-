# Santos Advocacia — Dra. Marcela Santos

Site institucional com identidade dourada extraída do logo original. Cinzel nos títulos e Lato nos textos. Áreas confirmadas: Direito Previdenciário, Trabalhista, Civil e do Consumidor. Sede em Formiga, MG, e atendimento em todo o Brasil.

## Desenvolvimento

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4. Instale com npm install e inicie com npm run dev -- --port 3006. Prévia: http://localhost:3006. Leia AGENTS.md e os guias locais do Next.js antes de alterar APIs.

## Organização

- app/lib/brand.ts: dados, mensagens e depoimentos.
- app/page.tsx: seções, quatro diálogos, menu e FAQ.
- app/globals.css: tema Tailwind 4, foco e movimento.
- app/layout.tsx: Cinzel/Lato, metadados e favicon do logo.
- app/components/GlowingButton.tsx: CTA dourado compartilhado.
- PRODUCT.md: fatos e fontes; DESIGN.md e .impeccable/design.json: sistema visual.

## Contatos e conteúdo

WhatsApp/telefone: (37) 99929-3550. Instagram: @marcelasantosadv. Endereço: Rua Silviano Brandão — Centro, Formiga — MG, 35570-112. Número do imóvel, e-mail, OAB e domínio não informados. Configurar NEXT_PUBLIC_SITE_URL somente com o domínio real; sem essa variável, imagens sociais são omitidas.

Google: 5,0 e 24 avaliações do material fornecido, sem integração ao vivo. Depoimentos literais de Emyrlaine Silva, Pâmela Lima e Rinaldo Victor. Link para o perfil com CID 15075427671493642874.

## Assets

public/marcela-santos-logo.png (2172 × 724) e public/marcela-santos-retrato.png (666 × 842), cópias integrais dos anexos. Hashes comparados com os originais em .impeccable/asset-origins.json. Logo sem recoloração e retrato sem corte permanente.

## Validação

Build de produção, lint e verificação do diff aprovados. Navegador sem avisos/erros. Larguras 320, 390, 527, 768, 1024 e 1440px sem rolagem horizontal. Quatro imagens carregadas; quatro diálogos com WhatsApp contextual, Escape, foco contido e restaurado, fundo inert e bloqueio de rolagem. Menu móvel fecha por seleção/Escape; FAQ validado. Revisão visual independente: ship.

Contrastes: CTA 9,09:1; texto principal 14,95:1; secundário 6,16:1; bronze sobre marfim 6,41:1. Evidências em outputs/santos-*.png e .impeccable/review/santos-qa.json. Documentação final conferida diretamente pelo agente principal.
