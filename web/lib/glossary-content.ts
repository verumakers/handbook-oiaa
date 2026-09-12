import type { GlossaryEntry, GlossaryStage, GlossaryTrail } from '@/lib/editorial-content';

export const glossaryStages: GlossaryStage[] = ['Fundamentos', 'Explorar', 'Configurar', 'Modelar', 'Avaliar', 'Responsabilidade'];
export const glossaryTrails: GlossaryTrail[] = ['Comum', 'Tabular', 'Visão', 'NLP'];

const pages = {
  explorar: { label: 'Explorar', href: '/explorar' },
  configurar: { label: 'Configurar', href: '/configurar' },
  modelar: { label: 'Modelar', href: '/modelar' },
  avaliar: { label: 'Avaliar', href: '/avaliar' },
  entrega: { label: 'Registrar e entregar', href: '/registrar-e-entregar' },
  inicio: { label: 'Comece aqui', href: '/' },
};

function termHref(term: string) {
  return `/glossario#termo-${term.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

function entry(
  term: string,
  definition: string,
  stages: GlossaryStage[],
  trails: GlossaryTrail[],
  appearsIn: (keyof typeof pages)[],
  related: string[] = [],
): GlossaryEntry {
  return {
    term,
    definition,
    stages,
    trails,
    appearsIn: appearsIn.map((page) => pages[page]),
    related: related.map((label) => ({ label, href: termHref(label) })),
  };
}

/**
 * Definições curtas para consulta durante o percurso. Elas descrevem escolhas e
 * evidências a observar, sem sugerir uma configuração ou resposta para os desafios.
 */
export const glossaryEntries: GlossaryEntry[] = [
  entry('Classificação', 'Tarefa em que cada caso recebe uma categoria prevista, como “aprovado” ou “reprovado” em um exemplo inventado.', ['Fundamentos'], ['Comum'], ['explorar'], ['Classe', 'Modelo']),
  entry('Característica (feature)', 'Informação usada pelo modelo para descrever um caso. Em uma tabela, costuma ser uma coluna; em imagem ou texto, pode ser uma medida extraída.', ['Fundamentos', 'Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'modelar'], ['Modelo', 'Importância de características']),
  entry('Classe', 'Cada categoria possível da resposta que se quer prever. Classes precisam ser definidas pelos dados e pela tarefa, não inventadas pelo modelo.', ['Fundamentos', 'Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Classificação', 'Desbalanceamento de classes']),
  entry('Modelo', 'Objeto matemático que transforma características em uma previsão após aprender padrões a partir de exemplos. Ele não conhece causas nem garante acertos.', ['Fundamentos', 'Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['Generalização', 'Parâmetro', 'Hiperparâmetro']),
  entry('Generalização', 'Capacidade de manter desempenho em casos novos, diferentes dos usados no treino. É mais importante que decorar exemplos já vistos.', ['Fundamentos', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Sobreajuste', 'Conjunto de teste']),
  entry('Ruído', 'Variação, erro de medição ou particularidade dos dados que não representa um padrão estável. Um modelo muito flexível pode acabar aprendendo esse ruído.', ['Fundamentos', 'Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'configurar'], ['Sobreajuste', 'Viés de coleta']),
  entry('Aprendizado supervisionado', 'Forma de aprendizado que usa exemplos com resposta conhecida para aprender uma regra que será aplicada a novos casos.', ['Fundamentos'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['inicio', 'explorar'], ['Treino', 'Classificação']),
  entry('Associação e causalidade', 'Duas variáveis podem variar juntas sem que uma seja a causa da outra. Um modelo encontra associações estatísticas; interpretar causas exige evidências adicionais.', ['Fundamentos', 'Explorar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Viés', 'Viés de coleta']),
  entry('Viés', 'Tendência sistemática que pode fazer um sistema errar mais, ou de modo diferente, para certos grupos ou contextos. Deve ser investigada nos dados e nos erros.', ['Fundamentos', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'avaliar'], ['Viés de coleta', 'LGPD']),
  entry('Viés de coleta', 'Distorção que surge quando a forma de coletar dados deixa pessoas, situações ou condições pouco representadas. Pergunta útil: quem pode ter ficado de fora?', ['Fundamentos', 'Explorar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Viés', 'Deslocamento de domínio']),
  entry('LGPD', 'Lei brasileira que regula o tratamento de dados pessoais. Ao trabalhar com dados, é preciso considerar finalidade, necessidade, segurança e proteção reforçada quando aplicável.', ['Fundamentos', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['inicio', 'entrega'], ['Procedência do rótulo', 'Regime assistivo']),

  entry('Acurácia', 'Proporção total de previsões corretas. Pode parecer boa quando uma classe é muito mais frequente que as outras; por isso deve ser lida junto de outras métricas.', ['Explorar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'avaliar'], ['Desbalanceamento de classes', 'F1-macro']),
  entry('Desbalanceamento de classes', 'Situação em que algumas classes aparecem muito mais que outras. Isso pode esconder erros importantes e pede análise por classe, não apenas uma média geral.', ['Explorar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'avaliar'], ['Acurácia', 'F1-macro', 'Estratificação']),
  entry('Histograma', 'Gráfico que agrupa valores numéricos em faixas para mostrar concentração, formato e sobreposição de distribuições. A escolha das faixas pode alterar a leitura.', ['Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Variável contínua', 'Boxplot']),
  entry('Boxplot', 'Gráfico que resume uma distribuição por mediana, quartis, dispersão e pontos afastados. É útil para comparar grupos, mas não mostra todo o formato da distribuição.', ['Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Histograma', 'Violino']),
  entry('Violino', 'Gráfico que combina um resumo semelhante ao boxplot com uma estimativa do formato da distribuição. Ajuda a perceber concentrações que um resumo simples pode esconder.', ['Explorar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar'], ['Boxplot', 'Histograma']),
  entry('Dispersão (scatter)', 'Gráfico que cruza duas variáveis numéricas. Pode revelar agrupamentos, relações e possíveis interações, mas não prova causalidade.', ['Explorar'], ['Comum', 'Tabular', 'Visão'], ['explorar'], ['Interação', 'Associação e causalidade']),
  entry('Interação', 'Situação em que o efeito de uma característica depende de outra. Ela é uma hipótese a testar e observar, não uma conclusão retirada de um único gráfico.', ['Explorar', 'Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'modelar'], ['Dispersão (scatter)', 'Regressão logística']),
  entry('Variável categórica', 'Variável formada por grupos ou rótulos, como “sim” e “não”. Barras de contagem ou proporção costumam ser uma leitura inicial adequada.', ['Explorar'], ['Comum', 'Tabular', 'NLP'], ['explorar'], ['Variável contínua', 'Classe']),
  entry('Variável contínua', 'Variável numérica que pode assumir muitos valores, como tempo ou medida. Histogramas, boxplots e gráficos de dispersão ajudam a investigar sua distribuição.', ['Explorar'], ['Comum', 'Tabular', 'Visão'], ['explorar'], ['Variável categórica', 'Histograma']),

  entry('Conjunto de treino', 'Parte dos dados usada para ajustar o modelo. É nela que operações de aprendizado, como fit, devem acontecer.', ['Configurar', 'Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'modelar'], ['Conjunto de validação', 'fit']),
  entry('Conjunto de validação', 'Parte separada dos dados usada para comparar escolhas durante o desenvolvimento. Ela oferece uma estimativa, não a resposta final da competição.', ['Configurar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'avaliar'], ['Conjunto de treino', 'Conjunto de teste']),
  entry('Conjunto de teste', 'Parte reservada para verificar o desempenho em dados que o modelo não usou para aprender ou para orientar suas escolhas.', ['Configurar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'avaliar'], ['Conjunto de validação', 'Generalização']),
  entry('Estratificação', 'Técnica de divisão que tenta preservar a proporção das classes entre as partes dos dados. É especialmente relevante quando há desbalanceamento.', ['Configurar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar'], ['Desbalanceamento de classes', 'Conjunto de validação']),
  entry('Hiperparâmetro', 'Escolha definida antes do treino que controla o comportamento do método, como profundidade máxima ou força de regularização. Deve ser testada e registrada.', ['Configurar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar'], ['Parâmetro', 'Diário de experimento']),
  entry('Parâmetro', 'Valor aprendido pelo modelo durante o treino, como pesos ou divisões. Diferente de hiperparâmetro, não é uma escolha digitada antes do ajuste.', ['Configurar', 'Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'modelar'], ['Hiperparâmetro', 'fit']),
  entry('class_weight', 'Opção de alguns classificadores para dar mais peso a classes menos frequentes durante o treino. Seus efeitos devem ser avaliados por classe; ela não existe em todos os modelos.', ['Configurar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar'], ['Desbalanceamento de classes', 'F1-macro']),
  entry('max_depth', 'Limite de profundidade de uma árvore. Valores maiores permitem regras mais detalhadas e podem aumentar a sensibilidade ao ruído. Em muitas bibliotecas, None remove esse limite e pode favorecer sobreajuste, mas não o garante.', ['Configurar'], ['Tabular', 'Visão'], ['configurar'], ['Árvore de decisão', 'Sobreajuste']),
  entry('max_features', 'Quantidade de características considerada em cada divisão de uma árvore ou floresta. Alterá-la muda diversidade e custo, por isso a evidência da validação é mais útil que uma regra fixa.', ['Configurar'], ['Tabular', 'Visão'], ['configurar'], ['Floresta aleatória', 'Característica (feature)']),
  entry('min_samples_leaf', 'Número mínimo de exemplos que uma folha de árvore deve conter. Um mínimo maior tende a produzir regras menos específicas; o efeito precisa ser comparado no contexto dos dados.', ['Configurar'], ['Tabular', 'Visão'], ['configurar'], ['Árvore de decisão', 'Subajuste']),
  entry('n_estimators', 'Número de árvores de uma floresta aleatória. Mais árvores podem tornar o resultado mais estável, ao custo de mais processamento; o ganho não cresce sempre no mesmo ritmo.', ['Configurar'], ['Tabular', 'Visão'], ['configurar'], ['Floresta aleatória', 'Reprodutibilidade']),
  entry('C', 'Parâmetro de regularização usado em alguns modelos lineares e SVM. Ele regula o compromisso entre uma fronteira mais simples e a adaptação aos exemplos de treino; deve ser interpretado com os demais ajustes.', ['Configurar'], ['Visão', 'NLP'], ['configurar'], ['SVM', 'Regressão logística']),
  entry('gamma', 'Parâmetro de alcance de influência em SVMs com kernel RBF. Ele interage com C; faz sentido discutir os dois junto e somente quando esse tipo de SVM está em uso.', ['Configurar'], ['Visão'], ['configurar'], ['SVM', 'C']),
  entry('min_df', 'Número mínimo de documentos em que um termo precisa aparecer para entrar no vocabulário. Pode reduzir termos raros e ruído, mas também pode retirar sinais úteis.', ['Configurar'], ['NLP'], ['configurar'], ['TF-IDF', 'n-grama']),
  entry('ngram_range', 'Configuração que define o tamanho das sequências de termos usadas na representação de texto. Sequências maiores preservam mais contexto local, mas ampliam o vocabulário e a raridade.', ['Configurar'], ['NLP'], ['configurar'], ['n-grama', 'Matriz esparsa']),
  entry('Subajuste (underfitting)', 'Quando o modelo é simples demais para capturar sinais relevantes e tem desempenho limitado até no treino. É um diagnóstico a investigar com medidas e erros observados.', ['Configurar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'avaliar'], ['Sobreajuste', 'Generalização']),
  entry('Sobreajuste (overfitting)', 'Quando o modelo se adapta demais a particularidades do treino, inclusive ruído, e perde desempenho em casos novos. Comparar treino e validação ajuda a investigar esse risco.', ['Configurar', 'Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'avaliar'], ['Subajuste', 'Generalização']),
  entry('Zona livre', 'Área do notebook destinada a experimentos ou complementos permitidos pelas regras. Use-a para registrar uma hipótese e uma comparação, sem assumir que existe uma receita universal.', ['Configurar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'entrega'], ['Diário de experimento', 'Reprodutibilidade']),

  entry('Jupyter', 'Ambiente de cadernos em que células de texto e código convivem. A ordem de execução importa: uma célula pode depender de resultados criados antes.', ['Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['fit', 'predict']),
  entry('Argumento nomeado', 'Forma de informar um valor usando o nome do parâmetro, como em max_depth=8. Ela torna a leitura do código mais clara.', ['Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['Hiperparâmetro', 'max_depth']),
  entry('fit', 'Método que ajusta parâmetros internos do modelo usando dados de treino e suas respostas conhecidas. A validação e o teste não devem servir para esse ajuste.', ['Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['predict', 'Conjunto de treino']),
  entry('predict', 'Método que produz previsões usando um modelo já ajustado. Ele é usado depois de fit para casos que se quer classificar.', ['Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['fit', 'Matriz de confusão']),
  entry('Pipeline', 'Estrutura que encadeia transformações e modelo, ajudando a garantir que cada transformação seja aprendida no treino e apenas aplicada aos outros conjuntos.', ['Modelar', 'Responsabilidade'], ['Comum', 'Visão', 'NLP'], ['modelar'], ['Vazamento de dados', 'transform']),
  entry('scikit-learn', 'Biblioteca de Python que oferece uma interface comum para muitos modelos e transformações, frequentemente baseada em fit, transform e predict.', ['Modelar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['modelar'], ['Pipeline', 'fit']),
  entry('Regressão logística', 'Modelo que combina características de forma linear para estimar classes. Sem características criadas para isso, não captura automaticamente relações não lineares ou interações complexas; ainda assim, pode usar interações explicitamente construídas.', ['Modelar'], ['Tabular', 'Visão', 'NLP'], ['modelar'], ['Interação', 'C']),
  entry('Árvore de decisão', 'Modelo que constrói regras em sequência para separar casos. Pode representar relações não lineares, mas árvores muito detalhadas podem se tornar sensíveis às particularidades do treino.', ['Modelar'], ['Tabular', 'Visão'], ['modelar'], ['max_depth', 'min_samples_leaf']),
  entry('Floresta aleatória', 'Conjunto de árvores treinadas com variações nos dados e nas características consideradas. Em geral, combina suas previsões para reduzir a instabilidade de uma árvore isolada.', ['Modelar'], ['Tabular', 'Visão'], ['modelar'], ['n_estimators', 'max_features']),
  entry('SVM', 'Família de modelos que procura uma fronteira de separação entre classes. Sua sensibilidade à escala e aos parâmetros depende da variante usada; em SVM RBF, C e gamma precisam ser lidos em conjunto.', ['Modelar'], ['Visão', 'NLP'], ['modelar'], ['C', 'gamma']),
  entry('Naive Bayes', 'Família de classificadores probabilísticos. A versão Multinomial é comum em representações de contagem ou texto; parte de simplificações que podem funcionar bem em alguns contextos e falhar em outros.', ['Modelar'], ['NLP'], ['modelar'], ['TF-IDF', 'class_weight']),

  entry('Precisão', 'Entre as previsões feitas para uma classe, proporção das que estavam corretas. Precisão baixa costuma indicar muitos falsos positivos para essa classe.', ['Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Falso positivo', 'Revocação (recall)']),
  entry('Revocação (recall)', 'Entre os casos que realmente pertenciam a uma classe, proporção dos que o modelo encontrou. Revocação baixa indica falsos negativos para essa classe.', ['Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Falso negativo', 'Precisão']),
  entry('F1', 'Média harmônica entre precisão e revocação para uma classe. Ela cai quando uma das duas medidas é baixa.', ['Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Precisão', 'Revocação (recall)']),
  entry('F1-macro', 'Média simples do F1 calculado separadamente para cada classe. Assim, classes menos frequentes recebem o mesmo peso que as mais frequentes.', ['Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['F1', 'Desbalanceamento de classes']),
  entry('Falso positivo', 'Caso que o modelo marcou como pertencente a uma classe, mas que não pertencia. O impacto desse erro depende do contexto e das pessoas afetadas.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Precisão', 'Custo assimétrico']),
  entry('Falso negativo', 'Caso que pertencia a uma classe, mas que o modelo não identificou. O impacto desse erro depende do contexto e das pessoas afetadas.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Revocação (recall)', 'Custo assimétrico']),
  entry('Matriz de confusão', 'Tabela que compara classe real e classe prevista. Mostra quais erros aconteceram entre quais classes, algo que uma única métrica agregada esconde.', ['Avaliar'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Falso positivo', 'Falso negativo']),

  entry('TF', 'Parte da representação TF-IDF que mede a frequência de um termo dentro de um documento.', ['Modelar'], ['NLP'], ['modelar'], ['IDF', 'TF-IDF']),
  entry('IDF', 'Parte da representação TF-IDF que reduz o peso de termos presentes em muitos documentos e valoriza, relativamente, termos mais raros no conjunto.', ['Modelar'], ['NLP'], ['modelar'], ['TF', 'TF-IDF']),
  entry('TF-IDF', 'Técnica que transforma texto em números combinando frequência no documento e raridade no conjunto. Ela não entende o sentido completo de uma frase.', ['Modelar'], ['NLP'], ['modelar'], ['TF', 'IDF', 'Matriz esparsa']),
  entry('Matriz esparsa', 'Estrutura que armazena de forma econômica uma matriz com muitos zeros, comum quando documentos usam apenas uma pequena parte do vocabulário total.', ['Modelar'], ['NLP'], ['modelar'], ['TF-IDF', 'n-grama']),
  entry('n-grama', 'Sequência contígua de n termos. Unigramas usam termos isolados; bigramas e trigramas incluem algum contexto local, com aumento de dimensionalidade e raridade.', ['Configurar', 'Modelar'], ['NLP'], ['configurar', 'modelar'], ['ngram_range', 'Saco de palavras']),
  entry('Saco de palavras', 'Representação que considera quais termos aparecem e, em sua forma simples, ignora a ordem. N-gramas podem recuperar parte do contexto local.', ['Modelar'], ['NLP'], ['modelar'], ['n-grama', 'TF-IDF']),
  entry('fit_transform', 'Método que aprende uma transformação com o treino e já a aplica nessa mesma parte. Em um vetorizador, por exemplo, aprende vocabulário e pesos a partir do treino.', ['Modelar', 'Responsabilidade'], ['NLP'], ['modelar'], ['transform', 'Vazamento de dados']),
  entry('transform', 'Método que aplica uma transformação já aprendida, sem reestimar seus parâmetros. É o procedimento esperado para validação, teste ou novos casos.', ['Modelar', 'Responsabilidade'], ['NLP'], ['modelar'], ['fit_transform', 'Pipeline']),
  entry('Vazamento de dados', 'Uso, direto ou indireto, de informação que não estaria disponível no momento da previsão ou da decisão. Pode produzir avaliação artificialmente otimista sem causar erro no código.', ['Modelar', 'Responsabilidade'], ['Comum', 'Visão', 'NLP'], ['modelar', 'avaliar'], ['Pipeline', 'fit_transform']),

  entry('Deriva conceitual', 'Mudança ao longo do tempo na relação entre sinais e rótulos, ou no significado prático desses sinais. Um sistema pode perder desempenho mesmo que seu código não mude.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar', 'entrega'], ['Monitoramento', 'Problema adversarial']),
  entry('Deslocamento de domínio', 'Queda de desempenho quando os casos de uso diferem das condições de treino, como iluminação, câmera, linguagem ou público diferentes.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Visão', 'NLP'], ['avaliar'], ['Viés de coleta', 'Monitoramento']),
  entry('Problema adversarial', 'Situação em que pessoas ou agentes podem adaptar seu comportamento para contornar um sistema. Isso exige cautela, revisão contínua e limites de uso.', ['Avaliar', 'Responsabilidade'], ['Comum', 'NLP'], ['avaliar', 'entrega'], ['Deriva conceitual', 'Monitoramento']),
  entry('Classe crítica', 'Classe ou situação em que um tipo de erro merece atenção especial por seu impacto. Ela deve ser definida pelo contexto, não apenas pela facilidade de medir.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Custo assimétrico', 'Falso negativo']),
  entry('Custo assimétrico', 'Situação em que falsos positivos e falsos negativos não têm o mesmo impacto. A análise deve explicitar quem pode ser afetado por cada erro.', ['Avaliar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar'], ['Classe crítica', 'Falso positivo']),
  entry('Importância de características', 'Medida ou técnica que indica quanto uma característica contribuiu para previsões de um modelo específico. Não prova causalidade e pode variar entre métodos e dados.', ['Avaliar', 'Responsabilidade'], ['Tabular', 'Visão'], ['avaliar'], ['Coeficiente', 'Associação e causalidade']),
  entry('Coeficiente', 'Peso associado a uma característica em alguns modelos lineares. Seu sinal e tamanho dependem da escala, das demais características e do modo como o modelo foi ajustado.', ['Avaliar'], ['Tabular', 'Visão', 'NLP'], ['avaliar'], ['Regressão logística', 'Importância de características']),
  entry('Regime assistivo', 'Modo de uso em que uma pessoa revisa, contextualiza ou decide a partir da saída do sistema. Exige definir responsabilidades e condições reais de revisão.', ['Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['entrega'], ['Regime autônomo', 'LGPD']),
  entry('Regime autônomo', 'Modo de uso em que o sistema toma ou executa uma decisão sem revisão humana caso a caso. Só pode ser considerado com critérios rigorosos de impacto, segurança e governança.', ['Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['entrega'], ['Regime assistivo', 'Monitoramento']),
  entry('Procedência do rótulo', 'Registro de como, por quem e em que condições uma resposta de referência foi criada. Ajuda a investigar qualidade, vieses e limites dos rótulos.', ['Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['explorar', 'entrega'], ['Viés de coleta', 'Reprodutibilidade']),
  entry('Reprodutibilidade', 'Possibilidade de refazer um experimento com os mesmos dados, passos e escolhas, obtendo resultados compatíveis. Depende de registrar decisões e condições de execução.', ['Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'entrega'], ['Diário de experimento', 'n_estimators']),
  entry('Monitoramento', 'Acompanhamento do comportamento de um sistema após seu uso, incluindo qualidade, erros, mudanças no contexto e necessidade de revisão ou retirada.', ['Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['avaliar', 'entrega'], ['Deriva conceitual', 'Deslocamento de domínio']),
  entry('Diário de experimento', 'Registro de hipótese, alteração, resultado, leitura dos erros e próximo teste. Ele torna as decisões da equipe verificáveis e úteis para o relatório.', ['Configurar', 'Responsabilidade'], ['Comum', 'Tabular', 'Visão', 'NLP'], ['configurar', 'entrega'], ['Reprodutibilidade', 'Hiperparâmetro']),
];
