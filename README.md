# Handbook OIAA · Colégio Verum

Material de estudo e consulta para as equipes do Colégio Verum que participam da
Olimpíada de Inteligência Artificial Aplicada (OIAA). O projeto será publicado em
`handbook.verumakers.com.br` como uma aplicação frontend em Next.js, hospedada na
Vercel.

## Propósito

Este repositório existe para ajudar estudantes a compreender os desafios, desenvolver
autonomia no uso dos notebooks e tomar decisões técnicas justificadas. O handbook deve
ser útil tanto na preparação quanto durante o trabalho da equipe: uma explicação clara
quando há tempo para estudar e uma referência rápida quando surge uma dúvida.

O conteúdo é de apoio pedagógico. Ele não contém respostas, código de submissão,
configurações vencedoras, nem estratégias prontas para os desafios da competição. Cada
equipe deve investigar, testar, interpretar os resultados e produzir sua própria solução.

## O que o handbook deve ensinar

- Como ler um problema de classificação em dados tabulares, imagens e textos.
- Como usar um notebook: executar células na ordem correta, interpretar erros e salvar
  uma cópia de trabalho.
- Como conduzir um experimento: explorar, formular hipótese, configurar, modelar,
  avaliar e registrar a próxima decisão.
- Como interpretar F1-macro, métricas de apoio e matriz de confusão.
- Como documentar testes e justificar uma escolha no relatório.
- Como usar tutoria e IA generativa com autoria, entendimento e transparência.

## Princípios de tutoria

Como tutores, podemos explicar conceitos, fazer perguntas que orientem a investigação,
ajudar a interpretar resultados e apoiar a organização do time. Não executamos a solução
no lugar dos estudantes, não fornecemos respostas para as lacunas dos cadernos e não
compartilhamos soluções ou estratégias entre equipes.

Se uma ferramenta de IA generativa for usada, a equipe deve verificar o que recebeu,
adaptar com entendimento e registrar no relatório a ferramenta, a finalidade e suas
decisões. A autoria da entrega é sempre da equipe.

## Desafios da Fase 1 · 2026

| Trilha | Desafio | Tipo de dado | Classes |
| --- | --- | --- | --- |
| Dados tabulares | Operação Farol | Tabela de estudantes | baixo, médio, alto |
| Visão computacional | Missão Recomeço | Imagens convertidas em descritores | papel, plástico, vidro, metal |
| Linguagem natural | Operação Voz do Cliente | Avaliações em texto | satisfeito, insatisfeito |

Os três desafios usam F1-macro como métrica oficial. O guia também reforça que o
relatório faz parte da avaliação: registrar hipóteses, configurações, resultados e a
leitura dos erros é tão importante quanto testar modelos.

## Materiais disponíveis hoje

- [`data/docs/Guia_Desafios_Fase1_OIAA2026.pdf`](data/docs/Guia_Desafios_Fase1_OIAA2026.pdf):
  guia oficial da Fase 1, com regras, fluxo da plataforma, avaliação, autoria e glossário.
- [`data/notebooks/`](data/notebooks/): notebooks de cada trilha, nas edições 2025 e 2026.
  Os de 2026 correspondem aos desafios atuais; os de 2025 servem como material histórico
  e de comparação de formato.
- [`data/README.md`](data/README.md): links das competições na plataforma Kaggle.

### Notebooks de 2026

| Arquivo | Conteúdo técnico de referência |
| --- | --- |
| [`ML-1a-fase-2026.ipynb`](data/notebooks/ML-1a-fase-2026.ipynb) | Árvore de decisão, floresta aleatória e regressão logística |
| [`CV-1a-fase-2026.ipynb`](data/notebooks/CV-1a-fase-2026.ipynb) | Descritores visuais, padronização, regressão logística, floresta aleatória e SVM |
| [`NLP-1a-fase-2026.ipynb`](data/notebooks/NLP-1a-fase-2026.ipynb) | TF-IDF, regressão logística, SVM linear e Naive Bayes multinomial |

## Direção inicial do produto

A primeira versão da aplicação pode organizar o conteúdo em quatro áreas: **Comece aqui**
(regras e preparação), **Trilhas** (tabular, visão e NLP), **Laboratório** (ciclo de
experimentos e leitura de métricas) e **Consulta rápida** (glossário, checklist e modelo
de registro). Cada página deve priorizar explicações, exemplos neutros e perguntas que
levem o estudante a pensar - nunca uma receita de resposta para o desafio.

## Estrutura atual

```text
data/
├── docs/       # documentos de referência da OIAA
└── notebooks/  # cadernos de 2025 e 2026
```

## Próximos passos

1. Definir a arquitetura editorial e o mapa de páginas do handbook.
2. Transformar os conceitos comuns dos três notebooks em conteúdo próprio e reutilizável.
3. Criar a aplicação Next.js com navegação, busca e leitura confortável em celular.
4. Revisar cada página para garantir aderência às regras de autoria da OIAA.
5. Configurar publicação na Vercel para `handbook.verumakers.com.br`.
