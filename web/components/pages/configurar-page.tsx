import { Callout } from '@/components/editorial/callout';
import { ExperimentLog } from '@/components/editorial/experiment-log';
import { NextStep } from '@/components/editorial/next-step';
import { PageHeader } from '@/components/editorial/page-header';
import { TradeoffTable } from '@/components/editorial/tradeoff-table';
import { configurarContent } from '@/lib/configurar-content';
import { findHandbookPage } from '@/lib/handbook-pages';

const page = findHandbookPage(['configurar'])!;

export function ConfigurarPage() {
  return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <PageHeader {...page} />
    <section className="mt-12 grid gap-4 lg:grid-cols-3" aria-label="Partes do experimento">
      <article className="rounded-2xl border border-border bg-card p-5"><h2 className="text-xl font-semibold">Treino</h2><p className="mt-2 leading-7 text-muted-foreground">Parte usada para ajustar o modelo. É onde ele encontra exemplos e relações disponíveis para aprender.</p></article>
      <article className="rounded-2xl border border-border bg-card p-5"><h2 className="text-xl font-semibold">Validação</h2><p className="mt-2 leading-7 text-muted-foreground">Parte separada para estimar o comportamento de uma escolha que não viu esses casos no ajuste. Ela orienta a investigação; não é a resposta da competição.</p></article>
      <article className="rounded-2xl border border-border bg-card p-5"><h2 className="text-xl font-semibold">Teste</h2><p className="mt-2 leading-7 text-muted-foreground">Parte guardada para uma verificação final quando o processo prevê isso. Não deve orientar ajustes repetidos.</p></article>
    </section>
    <section className="mt-12 grid gap-5 lg:grid-cols-2"><Callout kind="conceito" title="Parâmetro e hiperparâmetro">Parâmetros são ajustados pelo modelo durante o treinamento. Hiperparâmetros são escolhas da equipe ou do notebook que definem como esse ajuste acontece, como um limite de profundidade ou uma configuração de representação.</Callout><Callout kind="dica" title="Uma mudança por vez">Quando apenas uma escolha muda e a divisão permanece registrada, fica mais fácil atribuir o que foi observado à hipótese. Rodadas diferentes podem comparar outras escolhas, desde que o diário deixe isso claro.</Callout></section>
    <section className="mt-16" aria-labelledby="complexidade"><p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Interpretar a comparação</p><h2 id="complexidade" className="mt-3 text-3xl font-semibold tracking-tight">Complexidade, subajuste e sobreajuste</h2><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Um modelo pode ser simples demais para capturar um padrão relevante (subajuste) ou ajustar-se tanto às particularidades do treino que não se mantém em casos separados (sobreajuste). Procurem evidências em treino, validação e tipos de erro; nenhum número isolado encerra a discussão.</p></section>
    <section className="mt-16" aria-labelledby="tradeoffs"><p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Seletores auditados</p><h2 id="tradeoffs" className="mt-3 text-3xl font-semibold tracking-tight">O que cada escolha controla — e quando ela se aplica</h2><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Verifiquem a célula e a referência do modelo: um seletor que não é aceito ou usado pelo modelo escolhido não explica uma mudança de resultado. A tabela indica aplicabilidade sem prescrever configurações.</p><div className="mt-7"><TradeoffTable rows={configurarContent.tradeoffs} caption="Trade-offs dos seletores de divisão, modelo, visão computacional e linguagem natural." /></div></section>
    <div className="mt-12"><ExperimentLog entries={configurarContent.plan} title="Plano neutro de experimento" /></div>
    <div className="mt-12"><NextStep {...configurarContent.nextStep} /></div>
  </article>;
}
