import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { findHandbookPage, handbookPages } from '@/lib/handbook-pages';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return handbookPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findHandbookPage((await params).slug);
  if (!page) return {};
  return { title: `${page.title} | Handbook OIAA`, description: page.summary };
}

export default async function HandbookPage({ params }: Props) {
  const page = findHandbookPage((await params).slug);
  if (!page) notFound();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">{page.eyebrow}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{page.title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{page.summary}</p>
      </div>
      <div className="mt-12 rounded-2xl border border-border bg-muted p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Seção em preparação</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">Esta rota já está pronta para navegação. O conteúdo de estudo será desenvolvido em etapas, sem antecipar soluções dos desafios.</p>
        {page.group === 'Consulta rápida' && (
          <Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-[#031721] transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="/avaliar">
            Ir para Avaliar <ArrowRight aria-hidden="true" size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}
