import type { ExperimentLogEntry, NextStepContent, Question, TradeoffRow } from '@/lib/editorial-content';

export const explorarContent = {
  concepts: [
    ['Caso', 'Uma linha, imagem ou texto individual que será observado. Cada caso reúne informações que ajudam a descrever uma situação.'],
    ['Característica', 'Uma medida ou sinal observado em cada caso, como uma categoria, uma contagem, uma medida numérica ou um descritor calculado.'],
    ['Classe', 'O grupo ou rótulo que se quer distinguir em uma tarefa de classificação.'],
    ['Classificação', 'A tarefa de estimar a qual classe um caso pertence a partir de características.'],
  ],
  variableTypes: [
    ['Contínua', 'Pode assumir valores em uma escala numérica, como duração em minutos. Pergunte sobre faixa, distribuição e variação.'],
    ['Categórica', 'Representa grupos, como o tipo de transporte. Pergunte sobre contagens, proporções e diferenças entre categorias.'],
  ],
  chartTradeoffs: [
    { option: 'Barras de proporção', whatItIs: 'Comparam a fração ou contagem de categorias.', worksWellWhen: 'A pergunta é “quais grupos aparecem mais?”', canBeProblematicWhen: 'Categorias têm totais muito diferentes ou o gráfico não informa a base de comparação.', observe: 'Rótulos, total de casos e classes pouco representadas.', neutralExample: 'Proporção de meios de transporte em uma pesquisa escolar fictícia.' },
    { option: 'Barras de média e erro', whatItIs: 'Mostram uma média por grupo; a barra de erro indica a variação ou incerteza definida pelo notebook.', worksWellWhen: 'Há uma medida numérica e grupos a comparar.', canBeProblematicWhen: 'A média esconde grupos internos, assimetria ou casos muito diferentes.', observe: 'Como a barra de erro foi calculada e se as distribuições se sobrepõem.', neutralExample: 'Tempo médio de leitura por turma em dados inventados.' },
    { option: 'Histograma', whatItIs: 'Agrupa valores numéricos em faixas e mostra sua distribuição.', worksWellWhen: 'É preciso ver concentração, caudas, lacunas ou sobreposição entre grupos.', canBeProblematicWhen: 'A escolha das faixas muda a aparência, especialmente com poucos casos.', observe: 'Faixas usadas, valores extremos e regiões ocupadas por mais de um grupo.', neutralExample: 'Distribuição de alturas de plantas de uma horta fictícia.' },
    { option: 'Boxplot', whatItIs: 'Resume mediana, quartis, dispersão e possíveis pontos fora da curva.', worksWellWhen: 'A comparação entre distribuições numéricas importa mais que cada valor individual.', canBeProblematicWhen: 'A forma detalhada da distribuição ou grupos pequenos precisam ser vistos.', observe: 'Centro, espalhamento e pontos afastados, sem concluir que são erros automaticamente.', neutralExample: 'Variação de tempo de espera em três bibliotecas imaginárias.' },
    { option: 'Violino', whatItIs: 'Mostra uma estimativa da densidade da distribuição, geralmente junto de um resumo central.', worksWellWhen: 'Há interesse em mais de uma concentração ou em formatos diferentes de distribuição.', canBeProblematicWhen: 'Poucos dados fazem a forma suavizada parecer mais certa do que é.', observe: 'Largura relativa, quantidade de casos e se o boxplot conta uma história compatível.', neutralExample: 'Distribuição de notas de ensaios simulados.' },
    { option: 'Dispersão', whatItIs: 'Posiciona cada caso usando duas características numéricas.', worksWellWhen: 'A equipe procura relações, agrupamentos, exceções ou possíveis interações.', canBeProblematicWhen: 'Muitos pontos se sobrepõem ou uma associação visual vira uma conclusão causal.', observe: 'Sobreposição, escalas, casos isolados e padrões que pedem outro gráfico.', neutralExample: 'Minutos de estudo e páginas lidas em um diário fictício.' },
    { option: 'Galeria por faixa', whatItIs: 'Agrupa imagens por uma faixa de descritor numérico para confrontar número e aparência real.', worksWellWhen: 'Um descritor visual parece diferenciar imagens e precisa ser inspecionado qualitativamente.', canBeProblematicWhen: 'Uma faixa pequena é tomada como retrato de todas as imagens.', observe: 'Condições recorrentes de iluminação, enquadramento ou textura dentro e entre faixas.', neutralExample: 'Fotos inventadas de folhas agrupadas por uma medida de brilho.' },
    { option: 'Termos frequentes', whatItIs: 'Lista ou compara palavras que ocorrem mais em cada grupo de textos.', worksWellWhen: 'A equipe quer levantar hipóteses sobre vocabulário e linguagem.', canBeProblematicWhen: 'Frequência é confundida com capacidade de prever uma classe; contexto pode inverter o sentido.', observe: 'Termos comuns aos grupos, exemplos de contexto e se o sinal parece superficial.', neutralExample: 'Palavras frequentes em comentários fictícios sobre livros.' },
  ] satisfies TradeoffRow[],
  questions: [
    { id: 'classes', question: 'Quais são as classes e elas estão equilibradas?', hint: 'Contem os casos e anotem qual comparação ficaria frágil se uma classe tiver poucos exemplos.' },
    { id: 'signal', question: 'Que característica parece separar grupos?', hint: 'Descrevam o padrão e também os casos que não o seguem.' },
    { id: 'overlap', question: 'Há sobreposição ou exceções?', hint: 'Procurem regiões do gráfico, textos ou imagens que não se encaixam na primeira impressão.' },
    { id: 'combination', question: 'Existe uma combinação de características que merece um teste?', hint: 'Transformem a curiosidade em uma hipótese observável, sem supor que ela já é verdadeira.' },
  ] satisfies Question[],
  journal: [{ hypothesis: 'Ex.: “A característica ___ parece diferir entre os grupos ___.”', alteration: 'Ainda não há alteração: registrar a leitura inicial.', result: 'Evidência observada: gráfico, contagem ou exemplos que sustentam ou enfraquecem a hipótese.', matrixFinding: 'Preencher somente depois de avaliar um modelo.', nextTest: 'Uma comparação justa que pode investigar a hipótese.' }] satisfies ExperimentLogEntry[],
  nextStep: { href: '/configurar', label: 'Próxima etapa', title: 'Transforme a hipótese em um experimento', description: 'Definam uma comparação que possa ser interpretada e registrem o que será observado antes de executá-la.' } satisfies NextStepContent,
};
