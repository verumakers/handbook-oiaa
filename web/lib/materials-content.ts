import type { Trail } from '@/lib/editorial-content';

const repository = 'https://github.com/verumakers/handbook-oiaa';

export type MaterialLink = {
  label: string;
  href: string;
  description: string;
  format: 'PDF' | 'Notebook' | 'Plataforma';
  trail?: Trail;
  citation: string;
};

export const officialGuide: MaterialLink = {
  label: 'Guia de desafios · Fase 1 · OIAA 2026',
  href: `${repository}/blob/main/data/docs/Guia_Desafios_Fase1_OIAA2026.pdf`,
  description: 'Documento oficial para enunciados, regras, prazos, entregas e orientações da edição atual.',
  format: 'PDF',
  citation: 'Fonte oficial · Guia de desafios — Fase 1 · OIAA 2026',
};

export const currentNotebooks: MaterialLink[] = [
  {
    label: 'Aprendizado de máquina · 1ª fase · 2026',
    href: `${repository}/blob/main/data/notebooks/ML-1a-fase-2026.ipynb`,
    description: 'Notebook atual da trilha de dados tabulares.',
    format: 'Notebook',
    trail: 'tabular',
    citation: 'Material oficial · Notebook de Aprendizado de Máquina · Fase 1 · 2026',
  },
  {
    label: 'Visão computacional · 1ª fase · 2026',
    href: `${repository}/blob/main/data/notebooks/CV-1a-fase-2026.ipynb`,
    description: 'Notebook atual da trilha de visão computacional.',
    format: 'Notebook',
    trail: 'visao-computacional',
    citation: 'Material oficial · Notebook de Visão Computacional · Fase 1 · 2026',
  },
  {
    label: 'Linguagem natural · 1ª fase · 2026',
    href: `${repository}/blob/main/data/notebooks/NLP-1a-fase-2026.ipynb`,
    description: 'Notebook atual da trilha de linguagem natural.',
    format: 'Notebook',
    trail: 'linguagem-natural',
    citation: 'Material oficial · Notebook de Linguagem Natural · Fase 1 · 2026',
  },
];

export const historicalNotebooks: MaterialLink[] = [
  {
    label: 'Aprendizado de máquina · 1ª fase · 2025',
    href: `${repository}/blob/main/data/notebooks/ML-1a-fase-2025.ipynb`,
    description: 'Referência histórica. Inclui o controle `train_size`, uma forma anterior de tratar o equilíbrio entre treino e avaliação.',
    format: 'Notebook',
    trail: 'tabular',
    citation: 'Arquivo histórico · Notebook de Aprendizado de Máquina · Fase 1 · 2025',
  },
  {
    label: 'Visão computacional · 1ª fase · 2025',
    href: `${repository}/blob/main/data/notebooks/CV-1a-fase-2025.ipynb`,
    description: 'Referência histórica. Inclui `train_ratio`, uma interface anterior para o equilíbrio entre treino e avaliação.',
    format: 'Notebook',
    trail: 'visao-computacional',
    citation: 'Arquivo histórico · Notebook de Visão Computacional · Fase 1 · 2025',
  },
  {
    label: 'Linguagem natural · 1ª fase · 2025',
    href: `${repository}/blob/main/data/notebooks/NLP-1a-fase-2025.ipynb`,
    description: 'Referência histórica. Registra os controles `normalize_ids` e `normalize_ratings`, exemplos anteriores de transformação e escala.',
    format: 'Notebook',
    trail: 'linguagem-natural',
    citation: 'Arquivo histórico · Notebook de Linguagem Natural · Fase 1 · 2025',
  },
];

export const competitionPlatforms: MaterialLink[] = [
  {
    label: 'Competição · Linguagem natural · 1ª fase',
    href: 'https://www.kaggle.com/competitions/linguagem-natural-1-fase',
    description: 'Plataforma da competição de linguagem natural.',
    format: 'Plataforma',
    trail: 'linguagem-natural',
    citation: 'Plataforma oficial da competição · Linguagem Natural · Fase 1',
  },
  {
    label: 'Competição · Visão computacional · 1ª fase',
    href: 'https://www.kaggle.com/competitions/visao-computacional-1-fase',
    description: 'Plataforma da competição de visão computacional.',
    format: 'Plataforma',
    trail: 'visao-computacional',
    citation: 'Plataforma oficial da competição · Visão Computacional · Fase 1',
  },
  {
    label: 'Competição · Aprendizado de máquina · 1ª fase',
    href: 'https://www.kaggle.com/competitions/aprendizado-de-maquina-1-fase',
    description: 'Plataforma da competição de aprendizado de máquina.',
    format: 'Plataforma',
    trail: 'tabular',
    citation: 'Plataforma oficial da competição · Aprendizado de Máquina · Fase 1',
  },
];

export const citationConvention = {
  heading: 'Como citamos o material oficial neste handbook',
  text: 'Ao mencionar uma orientação, use o rótulo “Fonte oficial” ou “Material oficial”, o título, a fase e o ano. Cada citação deve apontar para o arquivo ou plataforma de origem. O handbook explica e contextualiza: a regra vigente é sempre a que estiver no material oficial mais recente.',
  example: 'Fonte oficial · Guia de desafios — Fase 1 · OIAA 2026',
};
