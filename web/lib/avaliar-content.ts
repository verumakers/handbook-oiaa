import type { ExperimentLogEntry, NextStepContent, Question, TradeoffRow } from '@/lib/editorial-content';

export const avaliarContent = {
  metricTradeoffs: [
    { option: 'Acurácia', whatItIs: 'Fração total de previsões corretas.', worksWellWhen: 'As classes e os custos dos erros são parecidos e se quer uma visão inicial do conjunto.', canBeProblematicWhen: 'Uma classe é muito mais comum ou um tipo de erro é mais importante que outro.', observe: 'Contagem por classe e matriz de confusão.', neutralExample: 'Acertos totais ao separar cartões fictícios em três categorias equilibradas.' },
    { option: 'Precisão', whatItIs: 'Entre os casos previstos como uma classe, quantos realmente pertenciam a ela.', worksWellWhen: 'Falsos positivos para uma classe exigem atenção.', canBeProblematicWhen: 'Casos reais dessa classe ficam sem ser encontrados.', observe: 'Falsos positivos e revocação da mesma classe.', neutralExample: 'Entre alertas fictícios emitidos para uma caixa de achados e perdidos, quantos eram pertinentes.' },
    { option: 'Revocação', whatItIs: 'Entre os casos reais de uma classe, quantos foram encontrados.', worksWellWhen: 'Falsos negativos para uma classe exigem atenção.', canBeProblematicWhen: 'Muitos alertas incorretos também têm consequência.', observe: 'Falsos negativos e precisão da mesma classe.', neutralExample: 'Entre livros fictícios que precisam de reparo, quantos foram sinalizados.' },
    { option: 'F1', whatItIs: 'Combina precisão e revocação de uma classe em uma única medida.', worksWellWhen: 'As duas medidas importam e a equipe quer acompanhá-las sem esquecer o equilíbrio.', canBeProblematicWhen: 'Esconde qual das duas caiu e não mostra onde ocorrem os erros.', observe: 'Precisão, revocação e a linha correspondente na matriz.', neutralExample: 'Resumo de uma categoria inventada em uma triagem de materiais.' },
    { option: 'F1-macro', whatItIs: 'Média simples do F1 das classes: cada classe tem o mesmo peso no resumo.', worksWellWhen: 'Todas as classes devem entrar na comparação, inclusive as menos frequentes.', canBeProblematicWhen: 'A leitura para em um único resumo e ignora classes, contagens e custos.', observe: 'F1 por classe, suporte e matriz de confusão.', neutralExample: 'Comparar três categorias fictícias mesmo quando uma tem menos exemplos.' },
  ] satisfies TradeoffRow[],
  questions: [
    { id: 'more-errors', question: 'Qual classe apresenta mais erros?', hint: 'Comecem pela linha dessa classe e comparem sua quantidade de casos.' },
    { id: 'repeated-confusion', question: 'Qual confusão se repete?', hint: 'Procurem uma célula fora da diagonal e voltem aos exemplos correspondentes.' },
    { id: 'hypothesis', question: 'O resultado confirma ou contraria a hipótese?', hint: 'Registrem a evidência mesmo se ela contrariar a primeira expectativa.' },
    { id: 'next-round', question: 'O que mudaríamos na próxima rodada e por quê?', hint: 'Proponham uma mudança aplicável e uma evidência que poderá ser observada.' },
  ] satisfies Question[],
  journal: [{ hypothesis: 'Retomem a hipótese desta rodada.', alteration: 'Registrem a única mudança comparada e o que permaneceu fixo.', result: 'Anotem métricas por classe e o resumo usado, sem tratar um número como resposta final.', matrixFinding: 'Descrevam a linha, coluna ou confusão recorrente observada.', nextTest: 'Escrevam uma pergunta verificável para a próxima rodada.' }] satisfies ExperimentLogEntry[],
  nextStep: { href: '/registrar-e-entregar', label: 'Próxima etapa', title: 'Registre a evidência e a decisão', description: 'Transformem a hipótese, a comparação e a leitura dos erros em um relato que a equipe consiga justificar.' } satisfies NextStepContent,
};
