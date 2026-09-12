import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleHelp,
  FileCheck2,
  FlaskConical,
  Laptop,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import { Callout } from '@/components/editorial/callout';
import { Checklist } from '@/components/editorial/checklist';
import { NextStep } from '@/components/editorial/next-step';
import { gettingStartedContent } from '@/lib/getting-started-content';

const steps = [
  {
    number: '01',
    title: 'Explorar',
    description:
      'Entenda o problema, os dados e as perguntas que valem investigar.',
    icon: BookOpen,
    tone: 'bg-accent',
  },
  {
    number: '02',
    title: 'Configurar',
    description:
      'Planeje comparações justas e registre cada hipótese de teste.',
    icon: FlaskConical,
    tone: 'bg-primary',
  },
  {
    number: '03',
    title: 'Modelar',
    description:
      'Leia o notebook com autonomia e compreenda o que cada escolha faz.',
    icon: BrainCircuit,
    tone: 'bg-accent',
  },
  {
    number: '04',
    title: 'Avaliar',
    description:
      'Use métricas e a matriz de confusão para aprender com os erros.',
    icon: ChartNoAxesCombined,
    tone: 'bg-primary',
  },
];

const glossary = [
  ['F1-macro', 'Uma métrica que dá o mesmo peso a cada classe.'],
  ['Hiperparâmetro', 'Uma escolha feita antes do treinamento do modelo.'],
  ['Matriz de confusão', 'Mostra quais classes o modelo confundiu entre si.'],
];

export default function Home() {
  return (
    <>
      <section id="inicio" className="overflow-hidden bg-[#031721] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/75">
              <span className="size-2 rounded-full bg-accent" />
              Fase 1 · Olimpíada de IA Aplicada
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Aprenda a pensar como uma equipe de IA.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Um guia para investigar dados, testar ideias e explicar decisões —
              sem receber uma solução pronta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-[#031721] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="/explorar"
              >
                Ver o percurso <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-primary hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="/glossario"
              >
                Consultar termos <CircleHelp aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl self-center rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl shadow-black/20 sm:p-7">
            <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              <span>Diário de experimento</span>
              <span className="rounded-full bg-primary px-2.5 py-1 text-[#031721]">
                em equipe
              </span>
            </div>
            <div className="rounded-2xl bg-white p-5 text-[#031721] sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#41988b]">
                Hipótese
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight">
                Que característica parece separar os grupos?
              </p>
              <div className="my-5 h-px bg-border" />
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-muted p-3">
                  <span className="block text-xs text-muted-foreground">
                    Teste
                  </span>
                  <strong>Comparar uma escolha por vez</strong>
                </div>
                <div className="rounded-xl bg-muted p-3">
                  <span className="block text-xs text-muted-foreground">
                    Evidência
                  </span>
                  <strong>F1-macro + matriz de confusão</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="como-usar"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Comece aqui
            </p>
            <h2
              id="como-usar"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              Use este handbook para ganhar autonomia.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Ele ajuda a entender conceitos, organizar uma investigação e
              registrar decisões. Não substitui a leitura do guia oficial nem
              entrega uma resposta pronta.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {gettingStartedContent.purpose.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid size-8 place-items-center rounded-full bg-accent text-sm font-bold text-[#031721]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fluxo"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Seu percurso
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Um ciclo para aprender, não uma receita para copiar.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Em cada etapa, você encontra explicações, perguntas para a equipe,
            erros comuns e o que registrar antes de seguir.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon, tone }) => (
            <Link
              href={`/${title.toLowerCase()}`}
              key={number}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <article>
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-11 place-items-center rounded-xl text-[#031721] ${tone}`}
                  >
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 leading-6 text-muted-foreground">
                  {description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Abrir etapa <ArrowRight aria-hidden="true" size={15} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="autoria" className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Autoria e apoio
            </p>
            <h2
              id="autoria"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              A ajuda orienta o processo; a entrega continua sendo da equipe.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Callout kind="conceito" title="O tutor pode">
              <ul className="list-disc space-y-2 pl-5">
                {gettingStartedContent.tutor.can.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Callout>
            <Callout kind="regra" title="O tutor não pode">
              <ul className="list-disc space-y-2 pl-5">
                {gettingStartedContent.tutor.cannot.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Callout>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Callout
              kind="atencao"
              title="IA generativa: use com responsabilidade"
            >
              <p>
                Use uma ferramenta para explicar conceitos ou revisar o
                entendimento, nunca para copiar sem compreender ou apresentar
                conteúdo de terceiros como se fosse da equipe. Verifiquem a
                resposta com o notebook, o guia oficial e a discussão do grupo
                antes de decidir.
              </p>
            </Callout>
            <section
              aria-labelledby="registro-ia"
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <h3
                id="registro-ia"
                className="text-xl font-semibold tracking-tight"
              >
                Registrem o uso no relatório
              </h3>
              <p className="mt-2 leading-6 text-muted-foreground">
                Transparência ajuda a mostrar que a equipe manteve entendimento
                e autoria.
              </p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {gettingStartedContent.aiRecord.map(([term, description]) => (
                  <div key={term} className="rounded-xl bg-muted p-4">
                    <dt className="font-semibold">{term}</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="preparar-notebook"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Laptop className="text-primary" aria-hidden="true" size={30} />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Plataforma e Colab
            </p>
            <h2
              id="preparar-notebook"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              Trabalhem de forma organizada desde a primeira célula.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              O guia oficial é a fonte das regras da atividade. Este fluxo ajuda
              a equipe a preservar a cópia de trabalho, a execução e o registro.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {gettingStartedContent.platformFlow.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-[#031721]">
                  {index + 1}
                </span>
                <p className="leading-6 text-muted-foreground">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="trabalho-em-equipe" className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <UsersRound className="text-primary" aria-hidden="true" size={30} />
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Trabalho em equipe
            </p>
            <h2
              id="trabalho-em-equipe"
              className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              Rodem os papéis e compartilhem o entendimento.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Troquem os papéis a cada rodada ou etapa. No fim, todas as pessoas
              precisam conseguir explicar a entrega e a evidência que sustentou
              cada decisão.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {gettingStartedContent.roles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.title}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Callout kind="regra" title="Responsabilidade compartilhada">
              A pessoa que opera o notebook não é a única responsável pelo
              resultado. Parem antes de cada decisão importante para que todos
              entendam o que será alterado, o que será observado e o que será
              registrado.
            </Callout>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="checklists"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Preparação e entrega
          </p>
          <h2
            id="checklists"
            className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
          >
            Dois momentos para parar e conferir.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            As marcações ficam apenas neste navegador. Usem os itens como
            conversa da equipe, não como substituto das regras oficiais.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Checklist
            items={gettingStartedContent.beforeNotebook}
            title="Antes de abrir o notebook"
          />
          <Checklist
            items={gettingStartedContent.beforeSend}
            title="Antes de enviar"
          />
        </div>
      </section>

      <section id="glossario" className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Consulta rápida
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Termos difíceis, explicados na hora certa.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              O glossário acompanha cada etapa e também fica disponível quando
              uma palavra travar sua leitura.
            </p>
          </div>
          <div className="grid gap-3">
            {glossary.map(([term, definition], index) => (
              <article
                key={term}
                className="flex gap-4 rounded-2xl bg-card p-5 shadow-sm"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-[#031721]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{term}</h3>
                  <p className="mt-1 leading-6 text-muted-foreground">
                    {definition}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="principios"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="rounded-[2rem] bg-[#031721] px-6 py-9 text-white sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center">
            <div>
              <FileCheck2
                className="text-accent"
                aria-hidden="true"
                size={30}
              />
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                Aprender com autonomia preserva a autoria.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/75">
              O handbook explica conceitos, incentiva testes e ajuda a
              interpretar resultados. A decisão, o código e a justificativa
              final continuam sendo da equipe.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-18 sm:px-8 lg:px-12 lg:pb-24">
        <NextStep {...gettingStartedContent.nextStep} />
      </section>
    </>
  );
}
