import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleHelp,
  FileCheck2,
  FlaskConical,
  Sparkles,
} from 'lucide-react';

const steps = [
  { number: '01', title: 'Explorar', description: 'Entenda o problema, os dados e as perguntas que valem investigar.', icon: BookOpen, tone: 'bg-accent' },
  { number: '02', title: 'Configurar', description: 'Planeje comparações justas e registre cada hipótese de teste.', icon: FlaskConical, tone: 'bg-primary' },
  { number: '03', title: 'Modelar', description: 'Leia o notebook com autonomia e compreenda o que cada escolha faz.', icon: BrainCircuit, tone: 'bg-accent' },
  { number: '04', title: 'Avaliar', description: 'Use métricas e a matriz de confusão para aprender com os erros.', icon: ChartNoAxesCombined, tone: 'bg-primary' },
];

const glossary = [
  ['F1-macro', 'Uma métrica que dá o mesmo peso a cada classe.'],
  ['Hiperparâmetro', 'Uma escolha feita antes do treinamento do modelo.'],
  ['Matriz de confusão', 'Mostra quais classes o modelo confundiu entre si.'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/15 bg-[#031721] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a className="flex items-center gap-3" href="#inicio">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-[#031721]"><Sparkles aria-hidden="true" size={20} strokeWidth={2.5} /></span>
            <span className="leading-tight"><strong className="block text-sm tracking-[0.12em]">VERUM</strong><span className="text-xs text-white/65">Handbook OIAA</span></span>
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm text-white/80 md:flex">
            <a className="transition hover:text-white" href="#fluxo">Seu percurso</a>
            <a className="transition hover:text-white" href="#glossario">Glossário</a>
            <a className="transition hover:text-white" href="#principios">Autoria</a>
          </nav>
          <a className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#031721] transition hover:bg-accent" href="#fluxo">Começar</a>
        </div>
      </header>

      <section id="inicio" className="overflow-hidden bg-[#031721] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/75"><span className="size-2 rounded-full bg-accent" />Fase 1 · Olimpíada de IA Aplicada</p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Aprenda a pensar como uma equipe de IA.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Um guia para investigar dados, testar ideias e explicar decisões — sem receber uma solução pronta.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-[#031721] transition hover:bg-white" href="#fluxo">Ver o percurso <ArrowRight aria-hidden="true" size={18} /></a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-primary hover:bg-white/10" href="#glossario">Consultar termos <CircleHelp aria-hidden="true" size={18} /></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl self-center rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl shadow-black/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/55"><span>Diário de experimento</span><span className="rounded-full bg-primary px-2.5 py-1 text-[#031721]">em equipe</span></div>
            <div className="rounded-2xl bg-white p-5 text-[#031721] sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#41988b]">Hipótese</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">Que característica parece separar os grupos?</p>
              <div className="my-5 h-px bg-border" />
              <div className="grid gap-3 text-sm sm:grid-cols-2"><div className="rounded-xl bg-muted p-3"><span className="block text-xs text-muted-foreground">Teste</span><strong>Comparar uma escolha por vez</strong></div><div className="rounded-xl bg-muted p-3"><span className="block text-xs text-muted-foreground">Evidência</span><strong>F1-macro + matriz de confusão</strong></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="fluxo" className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Seu percurso</p><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Um ciclo para aprender, não uma receita para copiar.</h2><p className="text-lg leading-8 text-muted-foreground">Em cada etapa, você encontra explicações, perguntas para a equipe, erros comuns e o que registrar antes de seguir.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon, tone }) => <article key={number} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between"><span className={`grid size-11 place-items-center rounded-xl text-[#031721] ${tone}`}><Icon aria-hidden="true" size={20} /></span><span className="font-mono text-sm text-muted-foreground">{number}</span></div><h3 className="mt-7 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-2 leading-6 text-muted-foreground">{description}</p><span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Abrir etapa <ArrowRight aria-hidden="true" size={15} /></span></article>)}
        </div>
      </section>

      <section id="glossario" className="bg-muted"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Consulta rápida</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Termos difíceis, explicados na hora certa.</h2><p className="mt-4 max-w-md leading-7 text-muted-foreground">O glossário acompanha cada etapa e também fica disponível quando uma palavra travar sua leitura.</p></div><div className="grid gap-3">{glossary.map(([term, definition], index) => <article key={term} className="flex gap-4 rounded-2xl bg-card p-5 shadow-sm"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-[#031721]">{index + 1}</span><div><h3 className="font-semibold">{term}</h3><p className="mt-1 leading-6 text-muted-foreground">{definition}</p></div></article>)}</div></div></section>

      <section id="principios" className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"><div className="rounded-[2rem] bg-[#031721] px-6 py-9 text-white sm:px-10 sm:py-12"><div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center"><div><FileCheck2 className="text-accent" aria-hidden="true" size={30} /><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Aprender com autonomia preserva a autoria.</h2></div><p className="text-lg leading-8 text-white/75">O handbook explica conceitos, incentiva testes e ajuda a interpretar resultados. A decisão, o código e a justificativa final continuam sendo da equipe.</p></div></div></section>
    </main>
  );
}
