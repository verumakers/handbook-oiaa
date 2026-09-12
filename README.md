# Handbook OIAA · Colégio Verum

Material de estudo e consulta para as equipes do Colégio Verum na Olimpíada de
Inteligência Artificial Aplicada (OIAA). Este repositório reúne fontes oficiais e uma
aplicação web em Next.js. A intenção é publicá-la na Vercel, com
`handbook.verumakers.com.br`; o deploy e o domínio ainda precisam ser configurados.

## Propósito e limite pedagógico

O handbook ajuda estudantes a compreender os desafios, ganhar autonomia nos notebooks
e justificar decisões técnicas com evidências. Ele serve tanto para estudar com calma
quanto para consultar um conceito durante o trabalho da equipe.

Não contém respostas de lacunas, código de submissão, dados ou saídas reais dos
desafios, configurações vencedoras ou estratégias prontas. A equipe investiga, testa,
interpreta e produz a própria entrega. Tutores podem explicar conceitos, fazer
perguntas, ajudar a interpretar resultados e organizar o processo; não resolvem o
desafio no lugar das equipes nem compartilham estratégias entre elas.

Ferramentas de IA generativa podem apoiar explicação e revisão de entendimento, mas a
equipe deve verificar o conteúdo, decidir com compreensão e registrar no relatório a
ferramenta, a finalidade e a própria decisão. A autoria da entrega permanece da equipe.

## Conteúdo da primeira versão

- **Comece aqui:** propósito, fluxo de trabalho, papéis de equipe, autoria e checklists.
- **Percurso:** Explorar → Configurar → Modelar → Avaliar → Registrar e entregar.
  Cada etapa combina conceitos, perguntas, trade-offs, diário e links de avanço.
- **Trilhas:** dados tabulares (Operação Farol), visão computacional (Missão Recomeço)
  e linguagem natural (Operação Voz do Cliente).
- **Consulta rápida:** glossário pesquisável, métricas, matriz de confusão, diário e
  checklists que apontam para o conteúdo aprofundado.
- **Materiais:** guia oficial, notebooks atuais, referências históricas e plataformas.

As tabelas de trade-off apresentam o que cada opção controla, quando pode ser útil,
quando pode introduzir um problema e o que observar — nunca uma escolha ideal para a
competição.

## Desafios da Fase 1 · 2026

| Trilha | Desafio | Tipo de dado | Classes de referência |
| --- | --- | --- | --- |
| Dados tabulares | Operação Farol | Tabela de estudantes | baixo, médio, alto |
| Visão computacional | Missão Recomeço | Imagens convertidas em descritores | papel, papelão, plástico, vidro, metal |
| Linguagem natural | Operação Voz do Cliente | Avaliações em texto | satisfeito, insatisfeito |

O guia oficial e a plataforma são a fonte de verdade para regras, prazos, formatos,
limites de submissão e atualizações da edição.

## Estrutura

```text
data/
├── docs/       # guia oficial da OIAA
├── notebooks/  # notebooks de 2025 (histórico) e 2026 (referência atual)
└── README.md   # links das competições
web/
├── app/        # rotas e estilos globais do Next.js App Router
├── components/ # shell, páginas e blocos editoriais reutilizáveis
├── lib/        # conteúdo estruturado por etapa e trilha
└── public/     # ativos estáticos
TODO.md         # escopo, rastreabilidade e critérios de aceite da v1
```

Os notebooks de 2026 são referências da edição atual. Os de 2025 aparecem somente como
histórico, identificados como tal para não confundirem os controles da edição atual.

## Desenvolvimento local

Requer Node.js `>=22.13.0`.

```bash
cd web
npm install
npm run dev
```

Outros comandos:

```bash
cd web
npm run lint
npm run build
npm run start
```

O lint usa Oxlint e ignora exclusivamente o boilerplate não utilizado de
`components/ui/` e `hooks/use-mobile.ts`; os arquivos efetivamente usados pelo
handbook continuam auditados.

## Fluxo editorial

1. Consulte o guia e o notebook da edição atual antes de escrever ou revisar conteúdo.
2. Explique processo, conceito e leitura de evidência; não sintetize uma solução do
   desafio.
3. Use exemplos inventados ou de outro contexto ao ensinar métricas, gráficos e
   trade-offs.
4. Vincule termos ao glossário e mantenha métricas e matriz de confusão aprofundadas em
   **Avaliar**, para evitar versões divergentes.
5. Faça uma revisão pedagógica, de acessibilidade e de responsividade antes de publicar.

## Publicação planejada

Na Vercel, importe este repositório e configure **Root Directory** como `web`. Depois,
conecte o domínio `handbook.verumakers.com.br` conforme o acesso e o DNS da Verum.
Essas etapas externas não estão concluídas neste repositório.

## Fontes disponíveis

- [`data/docs/Guia_Desafios_Fase1_OIAA2026.pdf`](data/docs/Guia_Desafios_Fase1_OIAA2026.pdf)
- [`data/notebooks/`](data/notebooks/)
- [`data/README.md`](data/README.md)
