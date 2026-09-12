import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Callout } from '@/components/editorial/callout';
import { PageHeader } from '@/components/editorial/page-header';
import { trailLinks } from '@/components/editorial/trail-switcher';
import { findHandbookPage } from '@/lib/handbook-pages';

const page = findHandbookPage(['trilhas'])!;

const trailDescriptions = {
  tabular: {
    context: 'Operação Farol',
    description: 'Linhas, colunas, variáveis, interações e modelos que trabalham com dados organizados em tabela.',
  },
  'visao-computacional': {
    context: 'Missão Recomeço',
    description: 'Imagens transformadas em descritores de cor, brilho, contraste, bordas e textura.',
  },
  'linguagem-natural': {
    context: 'Operação Voz do Cliente',
    description: 'Textos representados por vocabulário, TF-IDF, n-gramas e modelos de classificação.',
  },
} as const;

export function TrailsIndexPage() {
  return (
    <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <PageHeader {...page} />

      <div className="mt-10">
        <Callout kind="conceito" title="O percurso é comum; o tipo de dado muda">
          Todas as equipes exploram, configuram, modelam, avaliam e registram. Escolha abaixo a trilha para entender como essas etapas aparecem no seu tipo de dado.
        </Callout>
      </div>

      <section aria-labelledby="trilhas-disponiveis" className="mt-12">
        <h2 id="trilhas-disponiveis" className="text-3xl font-semibold tracking-tight">
          Três caminhos de estudo
        </h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {trailLinks.map((item) => {
            const details = trailDescriptions[item.trail];
            return (
              <article key={item.trail} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{details.context}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.label}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted-foreground">{details.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Abrir trilha <ArrowRight aria-hidden="true" size={17} />
                  <span className="sr-only">: {item.label}</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </article>
  );
}
