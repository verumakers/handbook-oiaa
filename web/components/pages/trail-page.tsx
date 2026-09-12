import { Callout } from '@/components/editorial/callout';
import { NextStep } from '@/components/editorial/next-step';
import { PageHeader } from '@/components/editorial/page-header';
import { PageContents } from '@/components/editorial/page-contents';
import { QuestionList } from '@/components/editorial/question-list';
import { TradeoffTable } from '@/components/editorial/tradeoff-table';
import { TrailBadge } from '@/components/editorial/trail-badge';
import { TrailSwitcher } from '@/components/editorial/trail-switcher';
import { findHandbookPage } from '@/lib/handbook-pages';
import type { TrailContent } from '@/lib/trails-content';

export function TrailPage({ content }: { content: TrailContent }) {
  const page = findHandbookPage(['trilhas', content.trail])!;

  return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <TrailBadge trail={content.trail} />
    <div className="mt-4"><PageHeader {...page} /></div>
    <TrailSwitcher current={content.trail} />
    <PageContents items={[{ href: '#o-que-muda', label: 'O que muda' }, { href: '#seletores', label: 'Seletores' }, { href: '#tradeoffs', label: 'Trade-offs' }, { href: '#diagnosticos', label: 'Diagnóstico' }, { href: '#governanca', label: 'Governança' }, { href: '#relatorio', label: 'Relatório' }]} />

    <section className="mt-12" aria-labelledby="o-que-muda">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">O que muda nesta trilha</p>
      <h2 id="o-que-muda" className="mt-3 text-3xl font-semibold tracking-tight">O mesmo percurso, uma forma diferente de representar os dados</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2">{content.concepts.map((item) => <article key={item.title} className="rounded-2xl border border-border bg-card p-5"><h3 className="text-xl font-semibold tracking-tight">{item.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{item.text}</p></article>)}</div>
    </section>

    <section className="mt-16" aria-labelledby="seletores">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Seletores e leituras</p>
      <h2 id="seletores" className="mt-3 text-3xl font-semibold tracking-tight">Antes de alterar, entenda o que a opção controla</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-3">{content.selectorGuide.map((item) => <article key={item.title} className="rounded-2xl bg-muted p-5"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{item.text}</p></article>)}</div>
    </section>

    <section className="mt-16" aria-labelledby="tradeoffs">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Trade-offs</p>
      <h2 id="tradeoffs" className="mt-3 text-3xl font-semibold tracking-tight">Compare hipóteses, limites e evidências</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">As opções abaixo são contexto de estudo. Nenhuma linha indica uma escolha, valor ou combinação para a competição.</p>
      <div className="mt-7"><TradeoffTable rows={content.tradeoffs} caption="Trade-offs da trilha: o que cada opção controla e quais evidências observar." /></div>
    </section>

    <section className="mt-16" aria-labelledby="diagnosticos">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Diagnóstico</p>
      <h2 id="diagnosticos" className="mt-3 text-3xl font-semibold tracking-tight">Volte aos casos quando um resultado levantar uma pergunta</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2">{content.diagnostics.map((item) => <Callout key={item.title} kind="dica" title={item.title}>{item.text}</Callout>)}</div>
    </section>

    <section className="mt-16" aria-labelledby="governanca">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Ética e governança</p>
      <h2 id="governanca" className="mt-3 text-3xl font-semibold tracking-tight">Desempenho não encerra a responsabilidade</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2">{content.governance.map((item) => <Callout key={item.title} kind="atencao" title={item.title}>{item.text}</Callout>)}</div>
    </section>

    <section className="mt-16" aria-labelledby="relatorio">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Para refletir no relatório</p>
      <h2 id="relatorio" className="mt-3 text-3xl font-semibold tracking-tight">Perguntas da trilha, sem resposta-modelo</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Use estas perguntas para organizar a própria evidência da equipe. Elas não substituem o enunciado oficial nem devem ser respondidas com fórmulas prontas.</p>
      <div className="mt-7 grid gap-4 md:grid-cols-3">{content.reportQuestions.map((item) => <article key={item.title} className="rounded-2xl border border-border bg-card p-5"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-3 font-medium leading-7">{item.question}</p><p className="mt-3 leading-7 text-muted-foreground">{item.guidance}</p></article>)}</div>
    </section>

    <div className="mt-16"><QuestionList questions={content.questions} title="Perguntas para a equipe nesta trilha" /></div>
    <div className="mt-12"><NextStep {...content.nextStep} /></div>
  </article>;
}
