# TODO · Implementação do Handbook OIAA

## Norte do produto

Construir um handbook digital para as equipes de IA do Colégio Verum estudarem e
consultarem durante a OIAA. O material deve desenvolver autonomia: explicar conceitos,
orientar observação, propor perguntas e apoiar o registro de decisões sem fornecer
respostas, código de submissão, configuração vencedora ou estratégia pronta para os
desafios.

## Princípios editoriais

- Ensinar processo e interpretação, nunca a solução de um desafio.
- Fazer o estudante observar evidências antes de sugerir uma decisão.
- Relacionar termos do glossário à situação em que eles aparecem no percurso.
- Usar exemplos neutros, sintéticos ou diferentes dos casos da competição quando houver
  risco de antecipar uma resposta.
- Indicar claramente a fronteira entre ajuda permitida, autoria da equipe e condutas que
  a OIAA não permite.
- Priorizar linguagem direta, exemplos curtos e leitura confortável no celular.

## Arquitetura de informação

```text
/
├── Comece aqui
│   ├── Como usar este handbook
│   ├── O que é permitido: autoria, tutor e IA generativa
│   ├── Preparação: plataforma, Colab, cópia no Drive e organização do time
│   └── Checklist antes de começar
├── Percurso
│   ├── /explorar
│   ├── /configurar
│   ├── /modelar
│   ├── /avaliar
│   └── /registrar-e-entregar
├── Trilhas
│   ├── /trilhas/tabular
│   ├── /trilhas/visao-computacional
│   └── /trilhas/linguagem-natural
├── Consulta rápida
│   ├── /glossario
│   ├── /metricas
│   ├── /matriz-de-confusao
│   ├── /diario-de-experimento
│   └── /checklists
└── /materiais
    └── Links para o guia oficial, os notebooks e as competições
```

As páginas de “Consulta rápida” devem resumir e apontar para o conteúdo canônico do
percurso. Métricas e matriz de confusão são ensinadas em profundidade em “Avaliar”; suas
rotas de consulta não devem manter uma segunda explicação divergente.

## Fundação técnica

- [x] Criar o frontend em `web/`.
- [x] Alinhar o runtime ao objetivo definido: frontend migrado para Next.js App Router
  nativo, com build compatível com a Vercel.
- [x] Definir tokens de cor:
  - `#031721`: base escura e texto em superfícies claras.
  - `#FFFFFF`: superfícies claras e texto em fundos escuros.
  - `#F7B02E`: destaque, chamadas e pontos de atenção.
  - `#41988B`: ação, progresso e estados de apoio.
- [x] Criar a tela inicial com o percurso, consulta rápida e autoria.
- [ ] Ajustar a identidade visual definitiva: tipografia, favicon e logo Verum caso os
  arquivos de marca sejam disponibilizados.
- [x] Criar layout compartilhado com cabeçalho, navegação, rodapé e indicador da página
  atual.
- [x] Criar menu móvel acessível, com foco visível e fechamento por teclado.
- [x] Definir metadados por página e título consistente para compartilhamento.
- [x] Garantir responsividade em celular, tablet e desktop.
- [x] Garantir contraste, navegação por teclado, estrutura de títulos e texto principal
  com tamanho mínimo de leitura confortável.

## Modelo de conteúdo reutilizável

- [x] Criar uma fonte de conteúdo estruturada para páginas, blocos de leitura, perguntas,
  cards de atenção, checklists e tabelas de trade-off.
- [ ] Decidir e configurar o formato editorial: MDX para textos longos e TypeScript/JSON
  para conteúdo repetível como glossário, trilhas e trade-offs.
- [x] Criar componentes reutilizáveis:
  - `PageHeader`: contexto, título e resumo da página.
  - `Callout`: conceito, dica, atenção e regra.
  - `QuestionList`: perguntas para debate em equipe.
  - `Checklist`: itens marcáveis apenas no navegador.
  - `TradeoffTable`: opção, o que é, funciona bem quando, pode dar problema quando,
    o que observar e exemplo neutro.
  - `ExperimentLog`: tabela copiável do diário de experimento.
  - `GlossaryTerm`: termo, definição curta, tags e links relacionados.
  - `TrailBadge`: Tabular, Visão Computacional ou Linguagem Natural.
  - `NextStep`: ligação contextual para a próxima etapa do percurso.
- [ ] Usar dados fictícios em exemplos visuais de métricas e matriz de confusão.
- [ ] Criar uma convenção para citar o material oficial sem duplicar nem substituir suas
  regras.

## Rastreabilidade com os notebooks de 2026

Cada seletor que o estudante encontra nos notebooks precisa ter uma explicação no
handbook. A explicação deve dizer o que a escolha controla, em quais situações ela pode
ajudar, quais problemas pode introduzir e que evidência observar depois do teste. Ela não
deve indicar um valor ou uma combinação “melhor”.

### Seletores comuns

| Seletor no notebook | Onde explicar | Cobertura esperada |
| --- | --- | --- |
| Tamanho da validação | Configurar | Trade-off entre quantidade para treino e estabilidade da avaliação; estratificação |
| Modelo escolhido | Modelar + página da trilha | Hipóteses de cada família, limitações, custo e sinais a observar |
| Variável/característica | Explorar | Tipo da variável, pergunta que ela permite fazer e leitura do gráfico |
| Tipo de gráfico | Explorar | O que revela, o que esconde e quando a comparação pode enganar |

### Dados tabulares

| Seletor | Opções/faixa expostas | Conteúdo obrigatório |
| --- | --- | --- |
| `tipo_de_grafico` | Boxplot, histograma, violino, barras de média, barras de proporção e dispersão | Guia de escolha por tipo de variável e pergunta |
| `tamanho_da_validacao` | 10% a 40% | Quantidade de treino versus confiança na estimativa |
| `modelo_escolhido` | Árvore de Decisão, Floresta Aleatória e Regressão Logística | Tabela de trade-offs sem recomendação |
| `profundidade` | 2 a 24 | Complexidade, subajuste e sobreajuste |
| `n_arvores` | 50 a 600 | Estabilidade, ganho marginal e custo computacional |

### Visão computacional

| Seletor | Opções/faixa expostas | Conteúdo obrigatório |
| --- | --- | --- |
| `material` | papel, papelão, plástico, vidro e metal | Inspeção visual por classe sem inferir a resposta do teste |
| `caracteristica` e `segundo_descritor` | cor, variação, brilho, contraste, bordas, saturação e área reluzente | Significado visual e limites de cada descritor |
| `tipo_de_grafico` | boxplot, histograma, violino, barras de média, dispersão e galeria por faixa | Leitura quantitativa e qualitativa dos descritores |
| `tamanho_da_validacao` | 10% a 40% | Quantidade de treino versus confiança na estimativa |
| `conjunto_de_caracteristicas` | todas, somente cor, somente brilho e textura | Seleção de características, redundância e perda de sinal |
| `modelo_escolhido` | Regressão Logística, Floresta Aleatória e SVM | Tabela de trade-offs sem recomendação |
| `padronizar` | ligado/desligado | Sensibilidade à escala e prevenção de vazamento com pipeline |
| `forca_C` | 0,01 a 20 | Regularização, ajuste e interação com o restante da configuração |

### Linguagem natural

| Seletor | Opções/faixa expostas | Conteúdo obrigatório |
| --- | --- | --- |
| `tipo` e `quantidade` | classe a inspecionar e 3 a 12 avaliações | Amostragem exploratória e cuidado com conclusões a partir de poucos casos |
| `variavel` | tamanho, negação, adversativa, recomendação, entrega, caixa alta e exclamação | Sinais superficiais, sobreposição entre classes e hipótese |
| `tipo_de_grafico` | histograma, boxplot, violino, proporções e termos frequentes | O que cada visão mostra e o risco de frequência não implicar poder preditivo |
| `tamanho_da_validacao` | 10% a 40% | Quantidade de treino versus confiança na estimativa |
| `max_palavras` | 200 a 50.000 | Cobertura do vocabulário, ruído, memória e custo |
| `ngramas` | unigramas, até bigramas e até trigramas | Contexto local, dimensionalidade e raridade |
| `min_df` | 1 a 20 | Exclusão de termos raros, ruído e perda de sinais úteis |
| `modelo_escolhido` | Regressão Logística, SVM Linear e Naive Bayes | Tabela de trade-offs sem recomendação |
| `forca_C` | 0,01 a 20 | Regularização em modelos lineares e ausência de efeito no Naive Bayes |
| `sua_mensagem` | texto livre | Explicar previsão em caso novo e por que um exemplo isolado não valida o modelo |

### Referência histórica de 2025

- [ ] Tratar `train_size`/`train_ratio` como versões anteriores do mesmo trade-off entre
  treino e avaliação.
- [ ] Tratar `normalize_ids` e `normalize_ratings` como exemplos históricos de
  transformação e escala, sem misturá-los aos seletores da edição de 2026.
- [ ] Identificar visualmente conteúdo histórico para o aluno não tentar reproduzir uma
  interface ou atividade que mudou.

## Página: Comece aqui

- [ ] Explicar o objetivo do handbook e a diferença entre estudar, consultar e receber
  uma solução.
- [ ] Criar o quadro “o tutor pode / o tutor não pode”.
- [ ] Criar o quadro “uso responsável de IA generativa”:
  - explicar conceitos e revisar entendimento: permitido;
  - copiar sem entender ou apresentar conteúdo de terceiros como próprio: não permitido;
  - registrar ferramenta, objetivo, verificação e decisão da equipe no relatório.
- [ ] Explicar o fluxo da plataforma: login, abertura do notebook, cópia no Drive,
  execução em ordem, geração de arquivos e submissão.
- [ ] Criar checklist “Antes de abrir o notebook”.
- [ ] Criar checklist “Antes de enviar”.
- [ ] Explicar os papéis rotativos de equipe: ler e interpretar, operar o notebook,
  registrar; deixar explícito que todos devem compreender a entrega final.

## Página: Explorar

### Objetivo

Fazer o estudante entender o problema, reconhecer o tipo de dado, identificar classes,
observar distribuição e transformar curiosidade em hipótese verificável.

### Conteúdo

- [ ] Explicar caso, característica, classe e classificação.
- [ ] Explicar diferença entre variável contínua e categórica.
- [ ] Ensinar a escolher uma leitura visual adequada:
  - barras para categorias e proporções;
  - barras de média para comparar médias, incluindo o significado da barra de erro;
  - histograma para distribuição e sobreposição;
  - boxplot para comparar centro, dispersão e pontos fora da curva;
  - dispersão para relações e interações entre duas características;
  - violino como complemento do boxplot;
  - galeria por faixa para confrontar um descritor numérico com as imagens reais;
  - termos frequentes por classe, ressaltando que frequência não prova poder preditivo.
- [ ] Criar tabela de trade-offs dos gráficos.
- [ ] Criar bloco sobre desbalanceamento de classes e por que acurácia isolada pode
  enganar.
- [ ] Criar bloco sobre associação versus causalidade.
- [ ] Criar bloco sobre viés de coleta e representatividade dos dados.
- [ ] Criar perguntas de equipe:
  - quais são as classes e estão equilibradas?
  - que característica parece separar grupos?
  - há sobreposição ou exceções?
  - existe uma combinação de características que merece um teste?
- [ ] Criar o primeiro trecho do diário: hipótese e evidência observada.

## Página: Configurar

### Objetivo

Ensinar a transformar uma hipótese em um experimento justo, comparável e registrável.

### Conteúdo

- [ ] Explicar conjuntos de treino, validação e teste sem revelar dados ou resultados.
- [ ] Explicar estratificação e `stratify=y`.
- [ ] Explicar hiperparâmetro versus parâmetro.
- [ ] Explicar por que mudar uma variável por vez facilita a interpretação.
- [ ] Explicar que a validação estima desempenho; ela não é a resposta da competição.
- [ ] Explicar o compromisso entre complexidade, subajuste e sobreajuste.
- [ ] Criar tabela de trade-offs:
  - tamanho da validação;
  - estratificação;
  - profundidade de árvore;
  - número de árvores;
  - mínimo de exemplos por folha;
  - pesos de classe;
  - força de regularização `C` e, no SVM com kernel RBF, sua interação com `gamma`;
  - padronização;
  - conjunto de descritores, quando a trilha for Visão;
  - limite de vocabulário, `min_df` e n-gramas, quando a trilha for NLP.
- [ ] Indicar quando um seletor não se aplica ao modelo escolhido, para evitar que o aluno
  atribua a ele uma mudança que não produziu efeito.
- [ ] Criar modelo de plano de experimento: hipótese, mudança, medida observada e
  critério para manter/descartar.

## Página: Modelar

### Objetivo

Fazer o estudante compreender o notebook e a referência técnica antes de alterar uma
lacuna ou opção disponível.

### Conteúdo

- [ ] Explicar célula de texto, célula de código, execução sequencial e saída.
- [ ] Criar guia de leitura de erros: localizar a célula, reler a mensagem, conferir
  execução anterior, corrigir e reexecutar a partir do ponto necessário.
- [ ] Explicar `fit`, `predict`, argumentos nomeados e a interface do scikit-learn.
- [ ] Explicar a estrutura `if` / `elif` / `else` usada para construir o modelo escolhido,
  sem preencher as lacunas dos notebooks.
- [ ] Explicar pipeline, `fit_transform` e `transform` como formas de evitar vazamento.
- [ ] Criar tabela de trade-offs de modelos, sem recomendar um para um desafio:
  - regressão logística;
  - árvore de decisão;
  - floresta aleatória;
  - SVM;
  - Naive Bayes Multinomial;
  - com observações específicas por tipo de dado quando necessário.
- [ ] Criar bloco “Como ler uma referência técnica”: nome exato da classe, parâmetros,
  valores padrão e efeito esperado de uma mudança.
- [ ] Explicar reprodutibilidade e o papel de `random_state=42`, sem apresentá-lo como
  hiperparâmetro a otimizar.
- [ ] Criar bloco “O que não fazer”: preencher lacunas sem compreensão, pular células,
  ajustar dados de teste e copiar código de terceiros.

## Página: Avaliar

### Objetivo

Ensinar que resultado não é apenas um número: é evidência para decidir o próximo teste.

### Conteúdo

- [ ] Explicar acurácia, precisão, revocação, F1 e F1-macro.
- [ ] Criar tabela de trade-offs de métricas:
  - o que cada métrica responde;
  - quando ajuda;
  - quando não basta;
  - qual pergunta fazer em seguida.
- [ ] Criar visualização interativa ou estática didática de uma matriz de confusão com
  números fictícios e destaque de linha, coluna, diagonal e erros.
- [ ] Explicar falso positivo e falso negativo com exemplos neutros.
- [ ] Explicar classe crítica e assimetria de custo: a mesma quantidade de erros pode ter
  consequências diferentes dependendo da direção da confusão.
- [ ] Explicar como ler o `classification_report` classe por classe.
- [ ] Criar bloco sobre comparação entre treino e validação para identificar sinais de
  sobreajuste e subajuste.
- [ ] Criar blocos específicos de diagnóstico usados nos notebooks:
  - Tabular: importância de características ou magnitude de coeficientes, sempre como
    associação e não causalidade;
  - Visão: galeria qualitativa de imagens classificadas incorretamente;
  - NLP: precisão e revocação da classe crítica e termos com maior peso no modelo.
- [ ] Criar perguntas de equipe:
  - qual classe apresenta mais erros?
  - qual confusão se repete?
  - o resultado confirma ou contraria a hipótese?
  - o que mudaríamos na próxima rodada e por quê?
- [ ] Criar trecho final do diário: resultado, leitura da matriz e próximo teste.

## Página: Registrar e entregar

- [ ] Criar uma explicação prática de relatório: hipótese, configuração, resultados,
  erros, decisão e justificativa final.
- [ ] Criar tabela de diário copiável:

  | Hipótese | Alteração | Resultado | O que a matriz mostrou | Próximo teste |
  | --- | --- | --- | --- |
  | | | | | |

- [ ] Mostrar diferença entre justificativa genérica e justificativa baseada em evidência,
  sem usar resultados dos desafios.
- [ ] Mapear as perguntas de relatório realmente cobradas nos notebooks para conteúdos do
  handbook:
  - Tabular: escolha do modelo/configuração, sinais relevantes e restrições de uso;
  - Visão: escolha de descritores, confusões entre materiais e regime autônomo/assistivo;
  - NLP: vazamento, termos associados, restrição de uso e degradação temporal.
- [ ] Criar checklist de arquivos e submissão, ressaltando prazo e hora do servidor.
- [ ] Criar lembrete sobre limite/intervalo de submissões conforme regras oficiais.
- [ ] Criar checklist de autoria e declaração de uso de IA generativa no relatório.

## Trilhas de estudo

Cada trilha deve reaproveitar o percurso comum e explicar o que muda naquele tipo de
dado. Nenhuma trilha deve recomendar uma combinação de modelo/parâmetro para a
competição.

### Dados tabulares · Operação Farol

- [ ] Explicar linhas, colunas, características e variável-alvo.
- [ ] Criar guia de leitura de variáveis numéricas e categóricas.
- [ ] Explicar interações entre características com exemplo sintético.
- [ ] Explicar importância de características e coeficientes como pistas de associação,
  não como prova de causa.
- [ ] Criar tabela de trade-offs para árvore, floresta aleatória e regressão logística.
- [ ] Explicar como reconhecer sinais de sobreajuste em árvores sem prescrever valor de
  hiperparâmetro.
- [ ] Criar seção sobre custo assimétrico, variáveis socialmente sensíveis, profecia
  autorrealizável, acesso à lista, prazo de validade e responsabilidade pela decisão.

### Visão computacional · Missão Recomeço

- [ ] Explicar que o notebook converte imagens em descritores numéricos.
- [ ] Explicar brilho, contraste, saturação, bordas e textura em linguagem acessível.
- [ ] Explicar por que padronização é importante para modelos baseados em distância e não
  altera a lógica de árvores.
- [ ] Criar tabela de trade-offs para padronização, regressão logística, floresta e SVM.
- [ ] Incluir trade-offs de seleção de descritores e da força `C`; explicar que `C` e
  `gamma` não devem ser interpretados isoladamente no SVM RBF.
- [ ] Ensinar análise qualitativa dos erros pela galeria, procurando condições recorrentes
  de captura em vez de apenas contar erros.
- [ ] Criar bloco de cautela sobre deslocamento de domínio: iluminação, câmera ou contexto
  diferentes podem alterar o desempenho.
- [ ] Criar seção sobre regime assistivo/autônomo, critérios de mudança de regime e
  participação das pessoas afetadas na decisão de implantação.

### Linguagem natural · Operação Voz do Cliente

- [ ] Explicar texto livre, tokenização conceitual e representação vetorial.
- [ ] Explicar TF, IDF e TF-IDF com um exemplo inventado e pequeno.
- [ ] Explicar matriz esparsa, vocabulário, unigramas, bigramas e saco de palavras.
- [ ] Explicar os trade-offs de `max_palavras`, `min_df` e n-gramas, incluindo memória,
  dimensionalidade, termos raros e perda de contexto.
- [ ] Explicar `fit_transform` no treino e `transform` na validação/teste.
- [ ] Criar tabela de trade-offs para TF-IDF, n-gramas, regressão logística, SVM linear e
  Naive Bayes Multinomial.
- [ ] Criar bloco sobre ruído de rótulos e por que texto e rótulo podem não parecer
  perfeitamente alinhados.
- [ ] Criar seção sobre procedência do rótulo, viés linguístico, distribuição de erros
  entre grupos, restrições de finalidade e monitoramento de deriva sem rótulo imediato.

## Glossário completo

### Estrutura e navegação

- [ ] Criar página de glossário com busca local por termo e definição.
- [ ] Criar filtros por etapa: Fundamentos, Explorar, Configurar, Modelar, Avaliar e
  Responsabilidade.
- [ ] Criar filtros por trilha: Comum, Tabular, Visão e NLP.
- [ ] Em cada termo, exibir “onde aparece”, “termos relacionados” e link para a página
  que o usa.
- [ ] Usar o conteúdo já levantado como base inicial e revisar definições para evitar
  afirmações absolutas ou dependentes de um desafio específico.

### Termos a publicar na primeira versão

- [ ] Fundamentos: classificação, característica, classe, modelo, generalização, ruído,
  aprendizado supervisionado, associação e causalidade, viés, viés de coleta, LGPD.
- [ ] Explorar: acurácia, desbalanceamento de classes, histograma, boxplot, violino,
  dispersão, interação, variável categórica e variável contínua.
- [ ] Configurar: treino, validação, teste, estratificação, hiperparâmetro, parâmetro,
  `class_weight`, `max_depth`, `max_features`, `min_samples_leaf`, `n_estimators`,
  `C`, `gamma`, `min_df`, `ngram_range`, subajuste e sobreajuste.
- [ ] Modelar: Jupyter, argumento nomeado, `fit`, `predict`, pipeline, scikit-learn,
  regressão logística, árvore, floresta aleatória, SVM e Naive Bayes.
- [ ] Avaliar: precisão, revocação, F1, F1-macro, falso positivo, falso negativo e matriz
  de confusão.
- [ ] NLP: TF, IDF, TF-IDF, matriz esparsa, n-grama, saco de palavras, `fit_transform`,
  `transform` e vazamento de dados.
- [ ] Contexto real: deriva conceitual, deslocamento de domínio e problema adversarial.
- [ ] Interpretação e governança: classe crítica, custo assimétrico, importância de
  características, coeficiente, regime assistivo, regime autônomo, procedência do rótulo,
  reprodutibilidade e monitoramento.

## Materiais e referências

- [ ] Criar página de materiais com links organizados para guia oficial, plataformas e
  notebooks de 2025 e 2026.
- [ ] Identificar notebooks de 2026 como referência atual e os de 2025 como histórico.
- [ ] Incluir avisos de que a cópia de trabalho deve ser criada no Drive conforme o guia.
- [ ] Não embutir respostas de lacunas ou saídas de execução dos notebooks no handbook.

## Interações úteis, sem extrapolar o escopo

- [ ] Adicionar busca no glossário.
- [ ] Adicionar filtro de trilha e etapa nas tabelas de termos.
- [ ] Permitir marcar checklists e manter a marcação apenas no navegador.
- [ ] Permitir copiar o modelo do diário de experimento para área de transferência.
- [ ] Adicionar navegação “anterior / próxima etapa” ao final das páginas.
- [ ] Adicionar sumário com âncoras em páginas longas.
- [ ] Não adicionar ranking, simulador de solução, upload de dados ou executor de código.

## Ordem recomendada de implementação

1. [x] Alinhar o runtime com Next.js App Router e o destino Vercel.
2. [ ] Layout compartilhado, menu móvel e estrutura de rotas.
3. [ ] Página “Comece aqui” e checklists de autoria/preparação.
4. [ ] Páginas profundas de Explorar, Configurar, Modelar e Avaliar.
5. [ ] Diário de experimento, página de relatório e entrega.
6. [ ] Glossário pesquisável e links contextuais para os termos.
7. [ ] Páginas específicas de Tabular, Visão e NLP.
8. [ ] Página de materiais e referências.
9. [ ] Revisão pedagógica com foco em não revelar soluções.
10. [ ] Revisão de acessibilidade, responsividade e conteúdo em celular.
11. [ ] Build de produção, configuração da Vercel com `web/` como raiz e domínio
    `handbook.verumakers.com.br`.

## Critérios para considerar a primeira versão pronta

- [ ] Um aluno consegue encontrar a explicação de uma etapa do ciclo sem conhecer o
  vocabulário técnico previamente.
- [ ] Um aluno consegue entender o que observar antes de testar uma configuração.
- [ ] O diário de experimento permite transformar uma rodada de notebook em registro de
  relatório.
- [ ] As três trilhas explicam suas diferenças sem sugerir a solução do desafio.
- [ ] O glossário encontra e contextualiza os termos mais difíceis.
- [ ] O conteúdo deixa explícito o limite de autoria e uso responsável de IA generativa.
- [ ] Todo seletor de configuração de 2026 tem uma explicação e uma tabela de trade-off,
  sem indicar resposta ou valor ideal.
- [ ] Toda métrica, diagnóstico e pergunta de relatório exibidos nos notebooks de 2026
  aponta para uma seção correspondente do handbook.
- [ ] Os controles de 2025 aparecem apenas como referência histórica e não confundem o
  percurso atual.
- [ ] O site funciona bem em celular e pode ser publicado pela Vercel.
