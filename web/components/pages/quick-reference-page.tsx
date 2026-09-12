import { Checklist } from '@/components/editorial/checklist';
import { ExperimentLog } from '@/components/editorial/experiment-log';
import { NextStep } from '@/components/editorial/next-step';
import { PageHeader } from '@/components/editorial/page-header';
import { findHandbookPage } from '@/lib/handbook-pages';
import { registrarContent } from '@/lib/registrar-content';

type QuickPage = 'metricas' | 'matriz-de-confusao' | 'diario-de-experimento' | 'checklists';

const canonical = {
  metricas: { eyebrow: 'Consulta rápida', title: 'Métricas são perguntas, não vereditos', body: 'Acurácia resume acertos. Precisão, revocação, F1 e F1-macro ajudam a enxergar ângulos diferentes, mas pedem leitura por classe, contagens e erros.', href: '/avaliar', label: 'Conteúdo canônico', nextTitle: 'Leia métricas junto dos erros', description: 'A etapa Avaliar explica cada métrica, seus limites e como conectá-la à matriz de confusão.' },
  'matriz-de-confusao': { eyebrow: 'Consulta rápida', title: 'A matriz localiza cada direção de erro', body: 'Leiam a linha da classe real, a coluna prevista e as células fora da diagonal. Uma confusão repetida vira uma pergunta para investigar, não uma conclusão automática.', href: '/avaliar', label: 'Conteúdo canônico', nextTitle: 'Aprofunde a leitura da matriz', description: 'A etapa Avaliar traz o exemplo didático, falso positivo, falso negativo e diagnósticos por trilha.' },
} as const;

export function QuickReferencePage({ kind }: { kind: QuickPage }) {
  const page = findHandbookPage([kind])!;
  if (kind === 'diario-de-experimento') return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><PageHeader {...page} /><p className="mt-12 max-w-3xl leading-7 text-muted-foreground">Registrem cada rodada enquanto ela acontece: hipótese, uma alteração, evidência, leitura dos erros e uma pergunta seguinte. O diário dá material para justificar a entrega sem reconstruir o percurso de memória.</p><div className="mt-8"><ExperimentLog entries={registrarContent.journal} /></div><div className="mt-12"><NextStep href="/registrar-e-entregar" label="Conteúdo canônico" title="Transforme o diário em relatório" description="Na etapa final, conectem o registro às decisões, à autoria e à submissão." /></div></article>;
  if (kind === 'checklists') return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><PageHeader {...page} /><p className="mt-12 max-w-3xl leading-7 text-muted-foreground">Use esta consulta no momento de organizar arquivos, conferir regras e registrar autoria. As regras oficiais sempre prevalecem sobre este resumo.</p><div className="mt-8 grid gap-6 xl:grid-cols-2"><Checklist items={registrarContent.submissionChecklist} title="Antes de enviar" /><Checklist items={registrarContent.authorshipChecklist} title="Autoria e IA generativa" /></div><div className="mt-12"><NextStep href="/registrar-e-entregar" label="Conteúdo canônico" title="Revise a entrega com contexto" description="A etapa final explica como ligar evidências, relatório e confirmação de envio." /></div></article>;
  const content = canonical[kind];
  return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><PageHeader {...page} /><section className="mt-12 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Lembrete breve</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">{content.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{content.body}</p></section><div className="mt-12"><NextStep href={content.href} label={content.label} title={content.nextTitle} description={content.description} /></div></article>;
}
