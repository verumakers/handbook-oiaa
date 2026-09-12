export type Trail = 'tabular' | 'visao-computacional' | 'linguagem-natural';

export type CalloutKind = 'conceito' | 'dica' | 'atencao' | 'regra';

export type PageHeaderContent = {
  eyebrow: string;
  title: string;
  summary: string;
};

export type Question = {
  id: string;
  question: string;
  hint?: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  description?: string;
};

export type TradeoffRow = {
  option: string;
  whatItIs: string;
  worksWellWhen: string;
  canBeProblematicWhen: string;
  observe: string;
  neutralExample: string;
};

export type ExperimentLogEntry = {
  hypothesis: string;
  alteration: string;
  result: string;
  matrixFinding: string;
  nextTest: string;
};

export type GlossaryEntry = {
  term: string;
  definition: string;
  tags: string[];
  related?: { label: string; href: string }[];
};

export type NextStepContent = {
  href: string;
  label: string;
  title: string;
  description: string;
};

/**
 * Estruturas neutras reutilizáveis. As páginas canônicas acrescentarão seu conteúdo
 * editorial sem embutir dados em componentes de apresentação.
 */
export const editorialExamples = {
  questions: [
    {
      id: 'evidence-before-choice',
      question: 'Que evidência a equipe já observou antes de mudar uma escolha?',
      hint: 'Registrem o que viram e o que pretendem comparar.',
    },
  ] satisfies Question[],
  experimentLog: [
    {
      hypothesis: 'Descreva uma hipótese verificável.',
      alteration: 'Registre uma única alteração.',
      result: 'Anote o resultado observado.',
      matrixFinding: 'Registre o que a matriz mostrou.',
      nextTest: 'Descreva o próximo teste da equipe.',
    },
  ] satisfies ExperimentLogEntry[],
};
