export type HandbookPage = {
  slug: string[];
  eyebrow: string;
  title: string;
  summary: string;
  group: string;
};

export const handbookPages: HandbookPage[] = [
  { slug: ['explorar'], eyebrow: 'Percurso · etapa 1', title: 'Explorar', summary: 'Observe os dados, formule perguntas e registre evidências antes de testar uma hipótese.', group: 'Percurso' },
  { slug: ['configurar'], eyebrow: 'Percurso · etapa 2', title: 'Configurar', summary: 'Planeje comparações justas e deixe claro o que cada experimento pretende observar.', group: 'Percurso' },
  { slug: ['modelar'], eyebrow: 'Percurso · etapa 3', title: 'Modelar', summary: 'Leia o notebook com autonomia e compreenda as escolhas antes de alterá-las.', group: 'Percurso' },
  { slug: ['avaliar'], eyebrow: 'Percurso · etapa 4', title: 'Avaliar', summary: 'Use métricas e erros observados para aprender com cada resultado.', group: 'Percurso' },
  { slug: ['registrar-e-entregar'], eyebrow: 'Percurso · etapa 5', title: 'Registrar e entregar', summary: 'Organize decisões, evidências e a entrega final da equipe.', group: 'Percurso' },
  { slug: ['trilhas'], eyebrow: 'Trilhas de estudo', title: 'Escolha sua trilha', summary: 'Acesse o conteúdo específico de dados tabulares, visão computacional ou linguagem natural.', group: 'Trilhas' },
  { slug: ['trilhas', 'tabular'], eyebrow: 'Trilhas', title: 'Dados tabulares', summary: 'Uma trilha para observar tabelas, características e classificações.', group: 'Trilhas' },
  { slug: ['trilhas', 'visao-computacional'], eyebrow: 'Trilhas', title: 'Visão computacional', summary: 'Uma trilha para investigar imagens e descritores visuais.', group: 'Trilhas' },
  { slug: ['trilhas', 'linguagem-natural'], eyebrow: 'Trilhas', title: 'Linguagem natural', summary: 'Uma trilha para explorar textos, vocabulário e sinais linguísticos.', group: 'Trilhas' },
  { slug: ['glossario'], eyebrow: 'Consulta rápida', title: 'Glossário', summary: 'Encontre definições curtas para os termos que aparecem no percurso.', group: 'Consulta rápida' },
  { slug: ['metricas'], eyebrow: 'Consulta rápida', title: 'Métricas', summary: 'Uma referência breve que aponta para a etapa de avaliação.', group: 'Consulta rápida' },
  { slug: ['matriz-de-confusao'], eyebrow: 'Consulta rápida', title: 'Matriz de confusão', summary: 'Consulte este mapa de erros e aprofunde a leitura na etapa de avaliação.', group: 'Consulta rápida' },
  { slug: ['diario-de-experimento'], eyebrow: 'Consulta rápida', title: 'Diário de experimento', summary: 'Registre hipóteses, mudanças, evidências e decisões da equipe.', group: 'Consulta rápida' },
  { slug: ['checklists'], eyebrow: 'Consulta rápida', title: 'Checklists', summary: 'Revise os pontos essenciais antes de avançar ou entregar.', group: 'Consulta rápida' },
  { slug: ['materiais'], eyebrow: 'Materiais e referências', title: 'Materiais', summary: 'Acesse o guia oficial, os notebooks e as competições pelos canais indicados pela organização.', group: 'Materiais e referências' },
];

export function findHandbookPage(slug: string[]) {
  return handbookPages.find((page) => page.slug.join('/') === slug.join('/'));
}
