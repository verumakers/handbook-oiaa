import { Callout } from '@/components/editorial/callout';
import { ExperimentLog } from '@/components/editorial/experiment-log';
import { NextStep } from '@/components/editorial/next-step';
import { PageHeader } from '@/components/editorial/page-header';
import { QuestionList } from '@/components/editorial/question-list';
import { TradeoffTable } from '@/components/editorial/tradeoff-table';
import { explorarContent } from '@/lib/explorar-content';
import { findHandbookPage } from '@/lib/handbook-pages';

const page = findHandbookPage(['explorar'])!;

export function ExplorarPage() {
  return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <PageHeader {...page} />
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {explorarContent.concepts.map(([title, description]) => <article key={title} className="rounded-2xl border border-border bg-card p-5"><h2 className="text-xl font-semibold tracking-tight">{title}</h2><p className="mt-2 leading-7 text-muted-foreground">{description}</p></article>)}
    </div>

    <section className="mt-16" aria-labelledby="tipos-variavel"><p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Antes do gráfico</p><h2 id="tipos-variavel" className="mt-3 text-3xl font-semibold tracking-tight">Que tipo de variável você está lendo?</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{explorarContent.variableTypes.map(([title, description]) => <article key={title} className="rounded-2xl bg-muted p-5"><h3 className="text-xl font-semibold">Variável {title.toLowerCase()}</h3><p className="mt-2 leading-7 text-muted-foreground">{description}</p></article>)}</div></section>

    <section className="mt-16" aria-labelledby="graficos"><p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Leitura visual</p><h2 id="graficos" className="mt-3 text-3xl font-semibold tracking-tight">Escolha uma visão para a pergunta, não para confirmar uma impressão.</h2><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Um gráfico reduz os dados a uma perspectiva. Compare essa perspectiva com os casos, a escala e a pergunta original antes de transformar um padrão em hipótese.</p><div className="mt-7"><TradeoffTable rows={explorarContent.chartTradeoffs} caption="Guia de leitura dos tipos de gráfico disponíveis nos notebooks." /></div></section>

    <section className="mt-16 grid gap-5 lg:grid-cols-3">
      <Callout kind="atencao" title="Desbalanceamento não some na acurácia">Se uma classe aparece muito mais, um resultado agregado pode parecer bom mesmo quando a classe menor recebe muitos erros. Contem os casos e, depois, leiam métricas e confusões por classe.</Callout>
      <Callout kind="conceito" title="Associação não é causalidade">Duas características podem variar juntas por vários motivos. Um gráfico pode sugerir uma pergunta útil, mas não prova que uma variável cause a outra.</Callout>
      <Callout kind="dica" title="Dados também têm uma história de coleta">Perguntem quem ou o que ficou de fora, em que contexto cada caso foi obtido e se a amostra representa o uso que está sendo imaginado. Esse viés pode mudar uma conclusão.</Callout>
    </section>

    <div className="mt-16"><QuestionList questions={explorarContent.questions} /></div>
    <div className="mt-8"><ExperimentLog entries={explorarContent.journal} title="Diário · hipótese e evidência observada" /></div>
    <div className="mt-12"><NextStep {...explorarContent.nextStep} /></div>
  </article>;
}
