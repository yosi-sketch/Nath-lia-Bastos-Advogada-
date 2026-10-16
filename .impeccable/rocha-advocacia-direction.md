# Página institucional Rocha Advocacia

Modo: Persuade. Superfície: rota /, implementada em app/page.tsx. Caminho: code-led. Direção escolhida pelo briefing fornecido, registrada a partir do código; nenhuma nova escolha estética foi submetida nesta passagem de documentação.

## Direction contract

THESIS: apresentar a Dra. Shirley Rocha com clareza e proximidade, explicar a atuação previdenciária e trabalhista e facilitar o primeiro contato em Sete Lagoas.

OWN-WORLD: preservar integralmente foto e logo originais. Vermelho e grafites do logo, superfícies claras e prata como apoio. Amostras opacas quantizadas do logo: #800010, #202020, #303030, #707070 e #c0c0c0. Marcellus nos títulos e Source Sans 3 na leitura. Tokens implementados em app/globals.css e documentados em DESIGN.md.

STORY: reconhecer a profissional, localizar um assunto, conhecer a proposta de atendimento e suas etapas, esclarecer dúvidas iniciais, ler relatos fornecidos e entrar em contato. Ordem observada: hero, informações de atendimento, atuação, Sobre, processo, FAQ, avaliações, contato, chamada final e rodapé.

FIRST VIEWPORT: cabeçalho branco com logo integral; hero claro; H1 “Seus direitos merecem atenção. Sua história, respeito.” à esquerda e retrato à direita no desktop. No celular, texto seguido do retrato. CTA vermelho “Converse com a Dra. Shirley”, atalho para atuação e localização Sete Lagoas · Minas Gerais. Retrato com legenda identificando Dra. Shirley Rocha e Direito Previdenciário e Trabalhista.

FORM: serviços em linhas com divisórias e botão de detalhes. Código apresenta Direito Previdenciário, Planejamento previdenciário, Direito Trabalhista e Direito Civil e Contratos; este último é respaldado pelos serviços “Litígio civil” e “Litígio de contratos” da lista literal fornecida pelo usuário. O foco institucional permanece Previdenciário/Trabalhista. Sobre com logo original; processo em grafite; FAQ nativo; relatos em três colunas a partir de md; contato com painel de endereço; chamada final vermelha e rodapé grafite com logo sobre branco. Diálogos em painel inferior no celular e centralizados a partir de sm.

MOTION: assinatura CSS signature-reveal no retrato, clip-path de inset(0 0 12% 0) a inset(0), por 1s, cubic-bezier(0.16, 1, 0.3, 1). É revelação temporária, sem recorte permanente do arquivo. prefers-reduced-motion desativa essa animação e reduz outras durações; MotionConfig usa reducedMotion="user". Os blocos editoriais motion usam initial={false}; não descrever o conteúdo como oculto até rolar. Menu de 220ms, diálogo de 240ms e transições do CTA de 200ms conforme fontes.

FINISH: Validação fornecida pelo principal: npm run build, npm run lint -- app e tsc --noEmit concluídos com exit 0; navegador de produção sem errors/warnings; larguras 320, 390, 527, 768, 1024 e 1440px sem overflow horizontal; imagens carregadas; menu móvel fecha por seleção; FAQ abre/fecha; quatro modais com WhatsApp contextual, Escape, foco inicial, ciclo Tab/Shift+Tab, retorno de foco e remoção de inert/scroll lock. Revisão independente: ship. Evidências em .impeccable/review/qa-results.json e, na mesma pasta, desktop.png, mobile.png, user-527.png, desktop-hero.png e mobile-hero.png. Esta passagem documentou esses resultados; não os executou.

Contrastes informados pelo principal: CTA 10,91:1; texto 15,19:1; secundário 6,53:1; grafite 13,27:1. Nenhuma medição foi refeita nesta passagem.

## Evidências e limites

Nome: Rocha Advocacia; profissional: Dra. Shirley Rocha. Foco: Previdenciário/Trabalhista. WhatsApp 5531971731592 conforme link fornecido no Instagram, distinto do telefone cadastral 5531971731591. Instagram @rochaadvocaciaa, https://www.instagram.com/rochaadvocaciaa/. Endereço: Rua Luiz Privat, 29A — Centro, Sete Lagoas — MG, 35700-001.

Nota 5,0/5 e 35 avaliações conforme material fornecido, sem atualização ao vivo. Rogerio Pontes, Fabienne Alves e Fernanda Lopes Mourão são os autores dos trechos literais mantidos em app/lib/brand.ts e transcritos em PRODUCT.md. O destino reviews é o mesmo de maps: busca por nome e endereço, sem CID específico.

Não foram informados OAB, e-mail, domínio, horários, anos de experiência, formação, outras credenciais ou atendimento nacional. O logo original contém sua assinatura completa; preservá-la não autoriza acrescentar alegações ao conteúdo.

## Assets e integridade

Logo public/rocha-advocacia-logo.png, PNG 1983 × 793; retrato public/shirley-rocha-retrato.png, PNG 1230 × 1278. .impeccable/asset-origins.json registra cópia binária integral dos anexos, sem edição, com hashes de origem/destino iguais e identicalToSource: true. Esta passagem leu o manifesto, sem recalcular hashes. O logo é exibido sobre branco no cabeçalho e rodapé, e sobre neutro claro na seção Sobre.

## Fontes e estado

Fontes: app/page.tsx, app/globals.css, app/layout.tsx, app/components/GlowingButton.tsx, app/lib/brand.ts, package.json e .impeccable/asset-origins.json. DESIGN.md registra o sistema observado; .impeccable/design.json usa schemaVersion 2 para extensões e exemplos autônomos, sem copiar primitivas para um grupo tokens.

Foco visível, skip link, menu, FAQ e controle de foco dos diálogos estão presentes no código. A confirmação funcional e das seis larguras pertence ao QA aprovado pelo principal, sem nova execução nesta passagem. H1: 2.6/3.5/3.8rem (base/sm/lg); divisória do rodapé: rgb(192 192 192 / 25%).
