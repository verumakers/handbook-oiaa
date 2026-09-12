import type { NextStepContent, Question, TradeoffRow, Trail } from '@/lib/editorial-content';

export type TrailContent = {
  trail: Trail;
  concepts: { title: string; text: string }[];
  selectorGuide: { title: string; text: string }[];
  tradeoffs: TradeoffRow[];
  diagnostics: { title: string; text: string }[];
  governance: { title: string; text: string }[];
  reportQuestions: { title: string; question: string; guidance: string }[];
  questions: Question[];
  nextStep: NextStepContent;
};

const commonValidation = 'O tamanho da validação separa mais ou menos casos para estimar o desempenho. Uma fatia menor deixa mais dados para treino; uma maior pode tornar a estimativa menos dependente de poucos casos. A comparação precisa preservar as proporções das classes quando isso for relevante.';

export const tabularTrailContent: TrailContent = {
  trail: 'tabular',
  concepts: [
    { title: 'Uma tabela descreve casos', text: 'Cada linha representa um caso; cada coluna registra uma característica observada. A variável-alvo é a coluna que contém a classe a prever. Antes de modelar, confirmem o que cada coluna mede, sua unidade e quando foi registrada.' },
    { title: 'Numéricas e categóricas pedem leituras diferentes', text: 'Uma variável numérica permite investigar distribuição, escala e valores fora do padrão. Uma categórica organiza grupos ou rótulos. Histogramas, boxplots e dispersão ajudam nas numéricas; contagens, proporções e barras ajudam nas categóricas.' },
    { title: 'Interações são hipóteses', text: 'Às vezes, uma característica só parece relevante junto de outra. Em um exemplo inventado, tempo de estudo e faltas podem contar uma história diferente quando vistos separadamente ou cruzados. Isso sugere uma hipótese para comparar; não demonstra uma causa.' },
    { title: 'Explicação não é causalidade', text: 'Importância de características e coeficientes mostram como um modelo específico usou associações nos dados. Eles podem orientar a investigação, mas não provam que uma coluna causa o resultado nem que a regra será justa fora da amostra.' },
  ],
  selectorGuide: [
    { title: 'Gráficos disponíveis', text: 'Boxplot, histograma e violino ajudam a olhar distribuição; barras de média resumem grupos e precisam de contexto sobre a barra de erro; barras de proporção comparam categorias; dispersão cruza duas variáveis numéricas. Escolham pela pergunta e anotem o que a visualização esconde.' },
    { title: 'Validação e estratificação', text: `${commonValidation} No notebook, o seletor expõe de 10% a 40%; a faixa é uma oportunidade de observar o compromisso, não um valor indicado pelo handbook.` },
    { title: 'Profundidade e número de árvores', text: 'Profundidade (de 2 a 24 no seletor) controla quão detalhadas podem ser as regras de uma árvore. Número de árvores (de 50 a 600) é usado por uma floresta, não por árvore única ou regressão logística. As faixas são controles de estudo, não receitas; ambos pedem comparação registrada.' },
  ],
  tradeoffs: [
    { option: 'Árvore de decisão', whatItIs: 'Modelo que aprende regras em sequência a partir das colunas.', worksWellWhen: 'Há interesse em inspecionar regras e relações não lineares como hipótese.', canBeProblematicWhen: 'Regras detalhadas passam a refletir particularidades ou ruído do treino.', observe: 'Diferença entre treino e validação, folhas muito específicas e erros por classe.', neutralExample: 'Classificar tipos fictícios de empréstimo de biblioteca por prazo e categoria.' },
    { option: 'Floresta aleatória', whatItIs: 'Conjunto de árvores cujas previsões são combinadas.', worksWellWhen: 'A equipe quer comparar a estabilidade de uma árvore isolada com várias variações.', canBeProblematicWhen: 'Custo e complexidade dificultam a leitura, ou mais árvores são tratadas como ganho garantido.', observe: 'Tempo, estabilidade entre execuções e padrões da matriz de confusão.', neutralExample: 'Separar espécies inventadas de plantas por medidas registradas em tabela.' },
    { option: 'Regressão logística', whatItIs: 'Modelo linear que combina características para estimar classes.', worksWellWhen: 'A relação linear é uma hipótese útil e a interpretação de coeficientes é feita com cautela.', canBeProblematicWhen: 'Interações ou relações não lineares são assumidas como capturadas automaticamente.', observe: 'Escala das colunas, desempenho por classe e estabilidade dos coeficientes no contexto.', neutralExample: 'Organizar inscrições fictícias em categorias administrativas.' },
    { option: 'Profundidade da árvore', whatItIs: 'Limite para a quantidade de decisões encadeadas em uma árvore.', worksWellWhen: 'É tratado como controle de complexidade numa comparação de uma variável por vez.', canBeProblematicWhen: 'Uma árvore memoriza divisões muito específicas ou fica simples demais para os sinais observados.', observe: 'Desempenho de treino versus validação, tamanho das folhas e confusões recorrentes.', neutralExample: 'Regras para agrupar cartões fictícios por duas medidas numéricas.' },
    { option: 'Número de árvores', whatItIs: 'Quantidade de árvores combinadas em uma floresta aleatória.', worksWellWhen: 'É comparado somente quando a família floresta está em uso e o custo também é observado.', canBeProblematicWhen: 'É mudado junto de outros controles ou aplicado a um modelo que não o utiliza.', observe: 'Tempo de execução, recursos e variação da avaliação com o restante fixo.', neutralExample: 'Várias árvores para classificar registros sintéticos de hábitos de leitura.' },
  ],
  diagnostics: [
    { title: 'Sinais de sobreajuste', text: 'Um resultado muito melhor no treino que na validação é um sinal para investigar. Procurem regras muito específicas, grupos pequenos e erros que mudam de padrão fora do treino. O diagnóstico não vem de um valor isolado de hiperparâmetro.' },
    { title: 'Erros têm contexto', text: 'Leiam a matriz por linha e coluna, voltem aos casos e perguntem se falta uma característica, se há dado mal medido ou se a classe contém situações heterogêneas.' },
  ],
  governance: [
    { title: 'Custo assimétrico e variáveis sensíveis', text: 'Falso positivo e falso negativo podem afetar pessoas de modos diferentes. Antes de usar colunas socialmente sensíveis — ou substitutos delas — perguntem quem pode ser prejudicado, se a coleta é legítima e se a decisão pode ser contestada.' },
    { title: 'Cuidado com profecias autorrealizáveis', text: 'Uma previsão usada para distribuir oportunidades pode alterar os próprios dados futuros: quem recebe menos acesso pode ter menos chance de produzir o resultado esperado. Esse ciclo não é prova de que a previsão era justa.' },
    { title: 'Limites de uso', text: 'Uma lista, um prazo de validade e uma pessoa responsável tornam explícitos quem pode acessar o resultado, até quando ele vale e quem responde por erros ou revisão. Uma saída de modelo não transfere responsabilidade.' },
  ],
  reportQuestions: [
    { title: 'Escolha de modelo e configuração', question: 'Que família e que configurações foram usadas, e qual evidência orientou essa decisão?', guidance: 'Descrevam a hipótese, a comparação controlada e o que as medidas e os erros mostraram; não transformem um número em justificativa universal.' },
    { title: 'Sinais relevantes', question: 'Quais características pareceram relevantes e quais são os limites dessa leitura?', guidance: 'Tratem importâncias e coeficientes como associações do modelo, indicando escala, dados disponíveis e ausência de prova causal.' },
    { title: 'Restrições de uso', question: 'Em que contexto a aplicação seria inadequada ou exigiria revisão?', guidance: 'Relacionem a resposta aos impactos dos erros, representatividade, acesso e responsabilidade pela decisão.' },
  ],
  questions: [
    { id: 'tabular-column-origin', question: 'O que cada coluna mede, e ela estaria disponível no momento real da decisão?', hint: 'Uma coluna registrada depois do resultado pode criar vazamento.' },
    { id: 'tabular-interaction', question: 'Há uma combinação de duas características que merece uma hipótese?', hint: 'Usem dispersão ou comparação por grupos antes de atribuir significado.' },
    { id: 'tabular-error-impact', question: 'Para quem cada tipo de erro teria consequência?', hint: 'A resposta ajuda a interpretar a matriz além da acurácia.' },
  ],
  nextStep: { href: '/explorar', label: 'Percurso comum', title: 'Volte a Explorar para formular uma hipótese', description: 'A trilha mostra o que muda na tabela; o percurso comum organiza a observação, a configuração e o registro da equipe.' },
};

export const visionTrailContent: TrailContent = {
  trail: 'visao-computacional',
  concepts: [
    { title: 'Imagem vira medidas', text: 'O notebook não “enxerga” como uma pessoa: ele transforma imagens em descritores numéricos. Esses números podem resumir cor, brilho, contraste, bordas, textura ou área reluzente. Eles preservam parte da imagem e deixam outra parte de fora.' },
    { title: 'Descritores são pistas visuais', text: 'Brilho resume intensidade de luz; contraste, diferenças entre regiões; saturação, intensidade da cor; bordas, transições marcadas; textura, variação local; área reluzente, regiões muito claras. Um descritor pode variar por iluminação ou câmera, não só pelo material.' },
    { title: 'Olhar casos e números juntos', text: 'A galeria por faixa aproxima um descritor numérico das imagens reais. Ela ajuda a verificar se valores semelhantes correspondem a condições visuais semelhantes, sem concluir que o descritor separa sozinho as classes.' },
  ],
  selectorGuide: [
    { title: 'Classes e inspeção', text: 'Papel, papelão, plástico, vidro e metal são classes para inspeção visual. Observem amostras de cada grupo, equilíbrio de quantidade, fundo, iluminação e enquadramento; não tentem inferir como casos ocultos serão classificados.' },
    { title: 'Descritores e gráficos', text: 'Cor, variação, brilho, contraste, bordas, saturação e área reluzente podem ser comparados com boxplot, histograma, violino, barras de média ou dispersão. A galeria por faixa acrescenta a verificação qualitativa que um resumo numérico não oferece.' },
    { title: 'Divisão e seleção de características', text: `${commonValidation} No notebook, a validação expõe de 10% a 40%. O seletor de conjunto de características permite comparar todas, somente cor ou somente brilho e textura como hipóteses sobre sinal, redundância e perda de informação.` },
  ],
  tradeoffs: [
    { option: 'Padronização', whatItIs: 'Transformação que coloca descritores em escala comparável a partir do treino.', worksWellWhen: 'O modelo é sensível à escala e a transformação é ajustada só no treino, idealmente em pipeline.', canBeProblematicWhen: 'Dados de validação ou teste entram no ajuste, ou o efeito é atribuído a árvores que não usam distância do mesmo modo.', observe: 'Origem do ajuste, escalas antes/depois e desempenho por classe.', neutralExample: 'Descritores sintéticos de fotos de frutas feitas com câmeras diferentes.' },
    { option: 'Regressão logística', whatItIs: 'Modelo linear aplicado aos descritores numéricos.', worksWellWhen: 'Uma fronteira linear é uma hipótese plausível e a escala é considerada quando necessária.', canBeProblematicWhen: 'A interpretação ignora que descritores correlacionados e escala mudam os coeficientes.', observe: 'Padronização, erros por classe e estabilidade da leitura dos pesos.', neutralExample: 'Categorias inventadas de objetos por contraste e saturação.' },
    { option: 'Floresta aleatória', whatItIs: 'Conjunto de árvores que combina regras sobre descritores.', worksWellWhen: 'A equipe quer investigar padrões não lineares sem confundir importância com causalidade.', canBeProblematicWhen: 'A galeria é ignorada e o modelo é tomado como explicação da imagem.', observe: 'Padrões de erro, custo, importância como pista e casos incorretos.', neutralExample: 'Materiais fictícios fotografados em fundos variados.' },
    { option: 'SVM', whatItIs: 'Família que separa classes por uma fronteira entre descritores.', worksWellWhen: 'A escala e a variante usada são documentadas antes da comparação.', canBeProblematicWhen: 'A leitura usa parâmetros fora da variante disponível ou atribui causalidade à fronteira.', observe: 'Padronização, confusões por classe e coerência entre treino e validação.', neutralExample: 'Imagens inventadas de formas geométricas com brilho variável.' },
    { option: 'Conjunto de descritores', whatItIs: 'Escolha entre todas as medidas, somente cor ou somente brilho e textura.', worksWellWhen: 'A escolha testa uma hipótese explícita sobre informação útil e redundância.', canBeProblematicWhen: 'A remoção de medidas perde sinal importante ou é escolhida sem olhar imagens e erros.', observe: 'Mudanças por classe, galeria de erros e relação com a hipótese inicial.', neutralExample: 'Fotos sintéticas de folhas sob iluminação variada.' },
    { option: 'Força C', whatItIs: 'Controle de regularização em modelos que o expõem, como regressão logística e variantes de SVM. O seletor apresenta de 0,01 a 20.', worksWellWhen: 'É interpretada como parte do compromisso entre simplicidade e adaptação ao treino.', canBeProblematicWhen: 'É tratada como seletor do Naive Bayes ou de floresta, ou lida isoladamente em SVM RBF.', observe: 'Treino versus validação, escala e demais controles aplicáveis.', neutralExample: 'Separação de amostras visuais inventadas em duas classes.' },
    { option: 'C e gamma no SVM RBF', whatItIs: 'Controles distintos da regularização e do alcance de influência nessa variante de SVM.', worksWellWhen: 'A variante RBF está realmente em uso e os dois são registrados como escolhas relacionadas.', canBeProblematicWhen: 'Um valor é interpretado sozinho, ou gamma é mencionado para SVM linear.', observe: 'Variante do SVM, escala dos descritores e padrão de generalização.', neutralExample: 'Nuvens de pontos sintéticas com fronteiras curvas.' },
  ],
  diagnostics: [
    { title: 'Galeria de erros', text: 'Não contem somente erros. Abram exemplos incorretos e procurem condições recorrentes: reflexo, sombra, fundo, enquadramento, distância, objeto amassado ou mistura de materiais. Uma hipótese visual deve voltar para a comparação registrada.' },
    { title: 'Deslocamento de domínio', text: 'Uma mudança de iluminação, câmera, resolução, contexto ou forma de captura pode alterar descritores e desempenho. Resultados em imagens do treino não garantem comportamento em outro local ou dispositivo.' },
  ],
  governance: [
    { title: 'Assistivo ou autônomo', text: 'No regime assistivo, uma pessoa interpreta ou decide com apoio da saída. No autônomo, o sistema age sem revisão caso a caso. A mudança de regime pede evidências, critérios de segurança, canais de contestação e responsabilidades explícitas.' },
    { title: 'Pessoas afetadas participam', text: 'Quem trabalha com a triagem ou recebe sua consequência pode revelar falhas que uma métrica não mostra. A implantação deve ouvir essas pessoas antes de definir objetivo, revisão humana e condições de interrupção.' },
  ],
  reportQuestions: [
    { title: 'Escolha de descritores', question: 'Que descritores foram considerados e que evidência sustentou a comparação?', guidance: 'Expliquem o que cada medida resume, o que pode confundir sua leitura e o que a galeria mostrou.' },
    { title: 'Confusões entre materiais', question: 'Quais confusões apareceram e que condições visuais podem estar relacionadas?', guidance: 'Voltem às imagens incorretas; não atribuam uma causa sem casos e evidências que a sustentem.' },
    { title: 'Regime de uso', question: 'A decisão deveria ser assistiva ou autônoma, e sob quais condições?', guidance: 'Considerem impacto do erro, revisão humana, contestação, monitoramento e participação de pessoas afetadas.' },
  ],
  questions: [
    { id: 'vision-description', question: 'Qual descritor parece variar por condição de captura, não apenas pela classe?', hint: 'Compare imagens antes de interpretar um resumo numérico.' },
    { id: 'vision-scale', question: 'O modelo escolhido é sensível à escala dos descritores?', hint: 'Confiram o notebook e se a transformação foi ajustada apenas no treino.' },
    { id: 'vision-regime', question: 'Quem revisaria um erro se essa saída fosse usada fora do desafio?', hint: 'A resposta separa desempenho técnico de responsabilidade prática.' },
  ],
  nextStep: { href: '/avaliar', label: 'Percurso comum', title: 'Avalie erros por classe e por imagem', description: 'A trilha aponta o que observar nas imagens; a etapa Avaliar organiza métricas, matriz de confusão e próximos testes.' },
};

export const nlpTrailContent: TrailContent = {
  trail: 'linguagem-natural',
  concepts: [
    { title: 'Texto precisa de representação', text: 'Texto livre tem ordem, contexto e ambiguidade. Para o modelo, ele é convertido em números: tokenização é a ideia de separar unidades de texto, e vetorização cria uma coluna para cada termo ou sequência considerada no vocabulário.' },
    { title: 'TF-IDF em um exemplo pequeno', text: 'Em avaliações inventadas, se “pontual” aparece muitas vezes em uma única mensagem, o TF cresce nela. Se “pontual” aparece em quase todas as mensagens, o IDF reduz seu destaque. TF-IDF combina as duas ideias: frequência no texto e raridade no conjunto.' },
    { title: 'Matriz esparsa e saco de palavras', text: 'O vocabulário pode gerar muitas colunas, mas cada texto usa poucas: por isso a matriz é esparsa. Com unigramas, a representação costuma tratar o texto como saco de palavras, preservando presença e frequência, não toda a ordem e sentido.' },
  ],
  selectorGuide: [
    { title: 'Amostragem e sinais superficiais', text: 'Os seletores de tipo/classe e quantidade mostram de 3 a 12 avaliações para inspeção. Tamanho, negação, adversativa, recomendação, entrega, caixa alta e exclamação são pistas superficiais: podem sugerir hipótese, mas podem se sobrepor entre classes e não substituem leitura de contexto.' },
    { title: 'Visões do texto', text: 'Histograma, boxplot e violino ajudam em medidas numéricas; proporções comparam categorias; termos frequentes revelam vocabulário recorrente. Frequência não prova poder preditivo e uma palavra pode mudar de sentido conforme a frase.' },
    { title: 'Vocabulário, n-gramas e divisão', text: `${commonValidation} No notebook, a validação expõe de 10% a 40%, max_palavras de 200 a 50.000, min_df de 1 a 20 e unigramas, até bigramas ou até trigramas. Esses controles alteram a representação antes do modelo; comparem cobertura, raridade, memória, dimensão e contexto local sem procurar uma configuração universal.` },
    { title: 'Caso novo', text: 'O campo de texto livre permite observar uma previsão em um exemplo novo. Uma única saída é ilustração do comportamento daquele modelo e daquela representação; não valida qualidade, justiça ou generalização.' },
  ],
  tradeoffs: [
    { option: 'TF-IDF', whatItIs: 'Representação que pondera frequência do termo no texto e raridade no conjunto.', worksWellWhen: 'A equipe precisa transformar textos em números e interpreta termos como pistas, não vereditos.', canBeProblematicWhen: 'A importância de uma palavra é confundida com causa, intenção ou sentido completo.', observe: 'Vocabulário, termos frequentes, casos de contexto oposto e matriz esparsa.', neutralExample: 'Bilhetes inventados de uma feira escolar.' },
    { option: 'Limite de vocabulário (`max_palavras`)', whatItIs: 'Quantidade máxima de termos mantidos na representação; o seletor expõe de 200 a 50.000.', worksWellWhen: 'A comparação registra cobertura, memória e custo além das métricas.', canBeProblematicWhen: 'Termos raros úteis ficam fora, ou um vocabulário amplo adiciona ruído e custo sem leitura.', observe: 'Dimensão da matriz, tempo e exemplos de termos incluídos ou excluídos.', neutralExample: 'Comentários fictícios sobre atividades culturais.' },
    { option: 'Frequência mínima (`min_df`)', whatItIs: 'Número mínimo de documentos em que um termo precisa aparecer para entrar no vocabulário; o seletor expõe de 1 a 20.', worksWellWhen: 'A equipe quer investigar ruído de ocorrências isoladas sem esquecer possíveis sinais raros.', canBeProblematicWhen: 'A remoção descarta contexto relevante ou é usada como correção automática.', observe: 'Termos filtrados, distribuição de classes, dimensão e erros associados.', neutralExample: 'Mensagens inventadas de uma central de eventos.' },
    { option: 'N-gramas', whatItIs: 'Sequências de uma ou mais palavras; o seletor oferece unigramas, até bigramas e até trigramas.', worksWellWhen: 'Contexto local pode ser uma hipótese útil e há registro do aumento de dimensionalidade.', canBeProblematicWhen: 'Sequências raras ocupam memória, ou a ordem parcial é tomada como entendimento completo.', observe: 'Cobertura, raridade, tamanho da matriz, tempo e exemplos no contexto.', neutralExample: 'Frases fictícias sobre reservas de livros.' },
    { option: 'Regressão logística', whatItIs: 'Modelo linear que combina pesos das colunas de texto.', worksWellWhen: 'A representação está documentada e coeficientes são lidos como associações condicionais ao modelo.', canBeProblematicWhen: 'Pesos são interpretados como opinião, intenção ou causalidade dos autores.', observe: 'Escala/representação, desempenho por classe e exemplos de contexto contrário.', neutralExample: 'Classificar recados sintéticos como informativos ou pedidos.' },
    { option: 'SVM linear', whatItIs: 'Modelo linear que busca uma fronteira entre classes na representação vetorial.', worksWellWhen: 'A equipe compara uma família linear com representação e avaliação registradas.', canBeProblematicWhen: 'C ou a escolha do modelo é tratada como explicação do texto, ou parâmetros de outra variante são aplicados.', observe: 'F1 por classe, matriz e coerência dos erros com textos reais.', neutralExample: 'Mensagens fictícias de confirmação e cancelamento.' },
    { option: 'Naive Bayes Multinomial', whatItIs: 'Classificador probabilístico baseado nas contagens ou pesos dos termos.', worksWellWhen: 'A hipótese probabilística é adequada para comparação e suas limitações são registradas.', canBeProblematicWhen: 'Independência entre termos é entendida como descrição completa da linguagem, ou C é atribuído a ele.', observe: 'Erros por classe, termos e contexto, sem presumir que C produz efeito neste modelo.', neutralExample: 'Avaliações inventadas de oficinas culturais.' },
    { option: 'Força C', whatItIs: 'Controle de regularização disponível em alguns modelos lineares, como regressão logística e SVM linear; o seletor expõe de 0,01 a 20.', worksWellWhen: 'É interpretado junto com representação, dados e divisão, e apenas onde se aplica.', canBeProblematicWhen: 'É aplicado mentalmente ao Naive Bayes ou escolhido sem comparar erros e generalização.', observe: 'Treino versus validação, F1 por classe e estabilidade da leitura dos erros.', neutralExample: 'Separar textos sintéticos de convites e avisos.' },
  ],
  diagnostics: [
    { title: 'A transformação aprende no treino', text: 'fit_transform ajusta vocabulário e pesos de IDF usando o treino e já o transforma. transform apenas aplica essa transformação já aprendida à validação ou teste. Incluir esses conjuntos no ajuste deixa a estimativa otimista por vazamento.' },
    { title: 'Rótulos podem conter ruído', text: 'Um texto e seu rótulo podem não parecer perfeitamente alinhados: há ambiguidade, erro de anotação, contexto ausente e discordância humana. Não tratem cada aparente incoerência como defeito do modelo sem investigar a procedência do rótulo.' },
  ],
  governance: [
    { title: 'Procedência, linguagem e grupos', text: 'Registrem quem produziu os rótulos, com qual regra e em que contexto. Variações linguísticas, dialetos e estilos podem fazer a distribuição de erros pesar mais sobre alguns grupos. A avaliação deve procurar esse padrão e abrir espaço para revisão.' },
    { title: 'Finalidade e deriva', text: 'Um texto fornecido para uma finalidade não deve ser reutilizado sem base legítima e transparência. Linguagem, produto e comportamento mudam ao longo do tempo; quando não há rótulo imediato, monitorem sinais indiretos, amostras revisadas e condições para pausar ou reavaliar o sistema.' },
  ],
  reportQuestions: [
    { title: 'Vazamento', question: 'Como a equipe garantiu que a representação de texto não aprendeu com validação ou teste?', guidance: 'Descrevam a separação entre fit_transform no treino e transform nos outros conjuntos, sem expor dados ou resultados do desafio.' },
    { title: 'Termos associados', question: 'Que termos apareceram como pistas e quais são os limites dessa interpretação?', guidance: 'Incluam contexto, sobreposição entre classes e a diferença entre associação do modelo e significado causal.' },
    { title: 'Uso e degradação', question: 'Que restrição de finalidade é necessária e como perceber possível degradação no tempo?', guidance: 'Considerem procedência, pessoas afetadas, monitoramento, revisão humana e ausência de rótulo imediato.' },
  ],
  questions: [
    { id: 'nlp-context', question: 'Uma palavra frequente aparece com o mesmo sentido em todos os exemplos?', hint: 'Leiam frases completas antes de tratar frequência como sinal.' },
    { id: 'nlp-vocabulary', question: 'O que entra ou sai do vocabulário com esta transformação?', hint: 'Anotem cobertura, raridade, memória e possíveis perdas de contexto.' },
    { id: 'nlp-label-origin', question: 'Quem definiu os rótulos e que tipo de erro essa definição pode trazer?', hint: 'A procedência influencia a interpretação dos erros do modelo.' },
  ],
  nextStep: { href: '/modelar', label: 'Percurso comum', title: 'Veja como a representação entra no pipeline', description: 'A trilha explica o que muda no texto; a etapa Modelar mostra a separação correta entre transformação, treino e previsão.' },
};

export const trailContentBySlug = {
  tabular: tabularTrailContent,
  'visao-computacional': visionTrailContent,
  'linguagem-natural': nlpTrailContent,
} satisfies Record<Trail, TrailContent>;
