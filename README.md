# Rocha Advocacia — Dra. Shirley Rocha

Site institucional em português da Rocha Advocacia, em Sete Lagoas, MG, com foco em Direito Previdenciário e Trabalhista. Inclui apresentação profissional, serviços em linhas com detalhes em diálogos, processo de atendimento, FAQ, avaliações e contato.

## Desenvolvimento

Instalar dependências com `npm install` e iniciar com `npm run dev -- --port 3005`. A prévia fica em [localhost:3005](http://localhost:3005) quando o servidor estiver ativo.

Pacote `rocha-advocacia`: Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide. Ler AGENTS.md e os guias em node_modules/next/dist/docs antes de alterar código Next.js.

Validação fornecida pelo principal: npm run build, npm run lint -- app e tsc --noEmit concluídos com exit 0; navegador de produção sem errors/warnings; larguras 320, 390, 527, 768, 1024 e 1440px sem overflow horizontal; imagens carregadas; menu móvel fecha por seleção; FAQ abre/fecha; quatro modais com WhatsApp contextual, Escape, foco inicial, ciclo Tab/Shift+Tab, retorno de foco e remoção de inert/scroll lock. Revisão independente: ship. Evidências em .impeccable/review/qa-results.json e, na mesma pasta, desktop.png, mobile.png, user-527.png, desktop-hero.png e mobile-hero.png. Esta passagem documentou esses resultados; não os executou.

Contrastes informados pelo principal: CTA 10,91:1; texto 15,19:1; secundário 6,53:1; grafite 13,27:1. Nenhuma medição foi refeita nesta passagem.

## Marca e implementação

Marcellus (peso 400) nos títulos e Source Sans 3 na leitura, via next/font/google com display swap. As amostras opacas do logo, quantizadas em passos de 16, são #800010, #202020, #303030, #707070 e #c0c0c0. O tema inclui tons derivados de vermelho e neutros em app/globals.css; DESIGN.md registra os tokens usados.

Cabeçalho branco; hero claro com H1 à esquerda e retrato à direita no desktop, empilhados no celular; CTA vermelho; serviços em linhas; processo grafite; rodapé grafite com logo sobre branco. A seção Sobre reutiliza o logo original. A assinatura de movimento é a revelação do retrato por clip-path, com duração de 1s e alternativa para movimento reduzido.

| Fonte | Responsabilidade |
| --- | --- |
| app/page.tsx | Seções, quatro serviços, FAQ, menu e diálogos |
| app/globals.css | Tema Tailwind 4, cores, foco e movimento |
| app/layout.tsx | Fontes, idioma pt-BR, metadados e imagem social |
| app/components/GlowingButton.tsx | CTA plano vermelho, tamanhos sm/md/lg |
| app/lib/brand.ts | Identidade, contatos, mensagens e depoimentos |

Os quatro temas implementados são Direito Previdenciário, Planejamento previdenciário, Direito Trabalhista e Direito Civil e Contratos. Civil/Contratos é respaldado pela lista literal de serviços fornecida pelo usuário (“Litígio civil” e “Litígio de contratos”), transcrita em PRODUCT.md. A apresentação institucional mantém o foco Previdenciário/Trabalhista do briefing.

O código inclui menu móvel com Escape e fechamento por seleção, FAQ com details/summary e diálogos com nome acessível, foco inicial no fechamento, ciclo Tab/Shift+Tab, Escape, retorno de foco, fundo inert e bloqueio de rolagem. Os fluxos constam do QA aprovado pelo principal, conforme o registro acima.

## Dados fornecidos

- WhatsApp: [(31) 97173-1592](https://wa.me/5531971731592), conforme link fornecido no Instagram. CTAs acrescentam mensagem; diálogos incluem o assunto.
- Telefone cadastral: [(31) 97173-1591](tel:+5531971731591).
- Instagram: [@rochaadvocaciaa](https://www.instagram.com/rochaadvocaciaa/).
- Endereço: Rua Luiz Privat, 29A — Centro, Sete Lagoas — MG, 35700-001.
- Google: nota 5,0/5 e 35 avaliações do material fornecido, sem integração ao vivo. O link implementado abre uma busca no Maps por nome e endereço; não identifica um perfil por CID.
- Relatos: trechos literais de Rogerio Pontes, Fabienne Alves e Fernanda Lopes Mourão, em app/lib/brand.ts e transcritos em PRODUCT.md.

OAB, e-mail, domínio, horários, anos de experiência e credenciais não foram informados; tampouco alcance nacional do atendimento. Não acrescentar esses dados. Configurar NEXT_PUBLIC_SITE_URL somente com o domínio real, quando disponível; sem ele, as imagens sociais são omitidas. Com ele, o logo é usado em Open Graph e Twitter.

## Assets

| Arquivo | Dimensões | Uso |
| --- | --- | --- |
| public/rocha-advocacia-logo.png | 1983 × 793 | Cabeçalho, Sobre, rodapé e imagem social condicional |
| public/shirley-rocha-retrato.png | 1230 × 1278 | Retrato no hero |

Os originais foram copiados integralmente. .impeccable/asset-origins.json registra origem, dimensões, sha256, sourceSha256 e identicalToSource: true para ambos. Esta passagem leu esse registro; não refez a validação dos hashes. next/image trata a exibição responsiva, preservando os arquivos originais e suas proporções; o clip-path é uma revelação temporária.

## Documentação

- PRODUCT.md: fatos, público, limites e fontes.
- DESIGN.md: tokens em frontmatter e sistema visual observado.
- .impeccable/design.json: sidecar schemaVersion 2, com metadados, movimento, breakpoints e exemplos HTML/CSS independentes.
- .impeccable/rocha-advocacia-direction.md: direção de superfície definida pelo briefing e registrada conforme a implementação.

Resultados de execução, navegador, contraste e revisão visual foram fornecidos pelo principal. Esta passagem alterou apenas a documentação e não repetiu os checks.
