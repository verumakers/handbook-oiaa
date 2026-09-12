import { Callout } from '@/components/editorial/callout';
import { PageHeader } from '@/components/editorial/page-header';
import { TrailBadge } from '@/components/editorial/trail-badge';
import { findHandbookPage } from '@/lib/handbook-pages';
import { citationConvention, competitionPlatforms, currentNotebooks, historicalNotebooks, officialGuide, type MaterialLink } from '@/lib/materials-content';
import { ExternalLink, FileText, NotebookTabs, Trophy } from 'lucide-react';

const materialIcon = { PDF: FileText, Notebook: NotebookTabs, Plataforma: Trophy };

function MaterialCard({ material }: { material: MaterialLink }) {
  const Icon = materialIcon[material.format];
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-primary"><Icon aria-hidden="true" size={18} />{material.format}</div>
        {material.trail && <TrailBadge trail={material.trail} />}
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{material.label}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted-foreground">{material.description}</p>
      <p className="mt-5 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">Citação:</span> {material.citation}</p>
      <a className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" href={material.href} target="_blank" rel="noopener noreferrer">
        Abrir externamente <ExternalLink aria-hidden="true" size={17} />
        <span className="sr-only">: {material.label}</span>
      </a>
    </article>
  );
}

export function MaterialsPage() {
  const page = findHandbookPage(['materiais'])!;
  return (
    <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <PageHeader {...page} />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <Callout kind="regra" title="O guia oficial vem antes do handbook">Confira no guia e na plataforma as regras, o prazo, o horário do servidor, os arquivos pedidos e qualquer atualização. Este handbook não substitui o material oficial.</Callout>
        <Callout kind="dica" title="Trabalhe em uma cópia no Drive">Conforme a orientação do guia, crie sua própria cópia de trabalho no Drive antes de editar o notebook. Preserve o original como referência e execute as células na ordem indicada.</Callout>
      </div>

      <section className="mt-16" aria-labelledby="guia-oficial">
        <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Edição atual</p>
        <h2 id="guia-oficial" className="mt-3 text-3xl font-semibold tracking-tight">Guia oficial · Fase 1 · 2026</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Use este documento para confirmar o que vale na edição atual. Não reproduzimos suas regras aqui para evitar que uma síntese fique desatualizada.</p>
        <div className="mt-7 max-w-2xl"><MaterialCard material={officialGuide} /></div>
      </section>

      <section className="mt-16" aria-labelledby="notebooks-atuais">
        <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Edição atual</p>
        <h2 id="notebooks-atuais" className="mt-3 text-3xl font-semibold tracking-tight">Notebooks de 2026 por trilha</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Use o notebook correspondente à sua trilha. O handbook ajuda a interpretar o processo; as lacunas, testes e decisões da entrega pertencem à equipe.</p>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">{currentNotebooks.map((material) => <MaterialCard key={material.href} material={material} />)}</div>
      </section>

      <section className="mt-16" aria-labelledby="plataformas">
        <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Competições</p>
        <h2 id="plataformas" className="mt-3 text-3xl font-semibold tracking-tight">Plataformas por trilha</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Os links abaixo são os mesmos registrados em <code className="rounded bg-muted px-1.5 py-0.5 text-sm">data/README.md</code>. Entre com a conta orientada pela organização e confira o enunciado dentro da plataforma.</p>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">{competitionPlatforms.map((material) => <MaterialCard key={material.href} material={material} />)}</div>
      </section>

      <section className="mt-16 rounded-3xl border border-dashed border-accent bg-accent/10 p-6 sm:p-8" aria-labelledby="historico">
        <p className="text-sm font-bold uppercase tracking-[.14em] text-[#8a5900]">Arquivo histórico · não é a interface atual</p>
        <h2 id="historico" className="mt-3 text-3xl font-semibold tracking-tight">Notebooks de 2025</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Eles servem para observar como materiais podem mudar entre edições, não para reproduzir uma atividade antiga. Os controles <code className="rounded bg-white px-1.5 py-0.5 text-sm">train_size</code> e <code className="rounded bg-white px-1.5 py-0.5 text-sm">train_ratio</code> são versões anteriores do trade-off entre treino e avaliação. <code className="rounded bg-white px-1.5 py-0.5 text-sm">normalize_ids</code> e <code className="rounded bg-white px-1.5 py-0.5 text-sm">normalize_ratings</code> são referências anteriores de transformação e escala. Eles não são seletores da edição de 2026.</p>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">{historicalNotebooks.map((material) => <MaterialCard key={material.href} material={material} />)}</div>
      </section>

      <section className="mt-16" aria-labelledby="citacoes">
        <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Rastreabilidade</p>
        <h2 id="citacoes" className="mt-3 text-3xl font-semibold tracking-tight">{citationConvention.heading}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{citationConvention.text}</p>
        <p className="mt-5 rounded-xl bg-muted p-4 font-medium">Exemplo de rótulo: {citationConvention.example}</p>
      </section>
    </article>
  );
}
