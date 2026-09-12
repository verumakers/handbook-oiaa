import type { Metadata } from 'next';
import { findHandbookPage, handbookPages } from '@/lib/handbook-pages';
import { NextStep } from '@/components/editorial/next-step';
import { PageHeader } from '@/components/editorial/page-header';
import { ConfigurarPage } from '@/components/pages/configurar-page';
import { ExplorarPage } from '@/components/pages/explorar-page';
import { ModelarPage } from '@/components/pages/modelar-page';
import { AvaliarPage } from '@/components/pages/avaliar-page';
import { QuickReferencePage } from '@/components/pages/quick-reference-page';
import { RegistrarEEntregarPage } from '@/components/pages/registrar-e-entregar-page';
import { GlossaryPage } from '@/components/pages/glossary-page';
import { TrailPage } from '@/components/pages/trail-page';
import { TrailsIndexPage } from '@/components/pages/trails-index-page';
import { MaterialsPage } from '@/components/pages/materials-page';
import { trailContentBySlug } from '@/lib/trails-content';
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

  if (page.slug[0] === 'explorar') return <ExplorarPage />;
  if (page.slug[0] === 'configurar') return <ConfigurarPage />;
  if (page.slug[0] === 'modelar') return <ModelarPage />;
  if (page.slug[0] === 'avaliar') return <AvaliarPage />;
  if (page.slug[0] === 'registrar-e-entregar') return <RegistrarEEntregarPage />;
  if (page.slug[0] === 'glossario') return <GlossaryPage />;
  if (page.slug[0] === 'materiais') return <MaterialsPage />;
  if (page.slug[0] === 'trilhas' && page.slug.length === 1) return <TrailsIndexPage />;
  if (page.slug[0] === 'trilhas') return <TrailPage content={trailContentBySlug[page.slug[1] as keyof typeof trailContentBySlug]} />;
  if (['metricas', 'matriz-de-confusao', 'diario-de-experimento', 'checklists'].includes(page.slug[0])) return <QuickReferencePage kind={page.slug[0] as 'metricas' | 'matriz-de-confusao' | 'diario-de-experimento' | 'checklists'} />;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <PageHeader eyebrow={page.eyebrow} title={page.title} summary={page.summary} />
      <div className="mt-12 rounded-2xl border border-border bg-muted p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Seção em preparação</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">Esta rota já está pronta para navegação. O conteúdo de estudo será desenvolvido em etapas, sem antecipar soluções dos desafios.</p>
      </div>
      {page.group === 'Consulta rápida' && <div className="mt-8"><NextStep href="/avaliar" label="Conteúdo canônico" title="Aprofunde na etapa Avaliar" description="As explicações completas de métricas e leitura de erros serão mantidas no percurso para evitar versões divergentes." /></div>}
    </section>
  );
}
