'use client';

import { useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import { GlossaryTerm } from '@/components/editorial/glossary-term';
import { PageHeader } from '@/components/editorial/page-header';
import { glossaryEntries, glossaryStages, glossaryTrails } from '@/lib/glossary-content';
import type { GlossaryStage, GlossaryTrail } from '@/lib/editorial-content';

function ToggleButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? 'border-primary bg-primary text-[#031721]' : 'border-border bg-card text-foreground hover:bg-secondary'}`}>{children}</button>;
}

function normalizeSearchText(value: string) {
  return value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState<GlossaryStage | null>(null);
  const [trail, setTrail] = useState<GlossaryTrail | null>(null);

  const entries = useMemo(() => {
    const normalized = normalizeSearchText(query.trim());
    return glossaryEntries.filter((item) => {
      const matchesText = !normalized || normalizeSearchText(`${item.term} ${item.definition}`).includes(normalized);
      return matchesText && (!stage || item.stages.includes(stage)) && (!trail || item.trails.includes(trail));
    });
  }, [query, stage, trail]);

  const clearFilters = () => {
    setQuery('');
    setStage(null);
    setTrail(null);
  };
  const hasFilters = Boolean(query || stage || trail);

  const revealRelatedTerm = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!hasFilters) return;
    event.preventDefault();
    clearFilters();
    window.requestAnimationFrame(() => {
      window.location.hash = href.split('#')[1] ?? '';
    });
  };

  return (
    <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <PageHeader eyebrow="Consulta rápida" title="Glossário" summary="Busque um termo, filtre pelo momento do percurso e siga os links para entender onde ele entra na prática." />

      <section aria-labelledby="filtros-glossario" className="mt-10 rounded-2xl border border-border bg-muted p-5 sm:p-7">
        <h2 id="filtros-glossario" className="text-lg font-semibold">Encontre um conceito</h2>
        <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <label className="block">
            <span className="text-sm font-semibold">Buscar por termo ou definição</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Ex.: validação, TF-IDF, viés" className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
          </label>
          {hasFilters && <button type="button" onClick={clearFilters} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Limpar filtros</button>}
        </div>
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">Filtrar por etapa</legend>
          <div className="mt-2 flex flex-wrap gap-2">{glossaryStages.map((option) => <ToggleButton key={option} active={stage === option} onClick={() => setStage(stage === option ? null : option)}>{option}</ToggleButton>)}</div>
        </fieldset>
        <fieldset className="mt-5">
          <legend className="text-sm font-semibold">Filtrar por trilha</legend>
          <div className="mt-2 flex flex-wrap gap-2">{glossaryTrails.map((option) => <ToggleButton key={option} active={trail === option} onClick={() => setTrail(trail === option ? null : option)}>{option}</ToggleButton>)}</div>
        </fieldset>
      </section>

      <p aria-live="polite" aria-atomic="true" className="mt-7 text-sm text-muted-foreground">{entries.length === 1 ? '1 termo encontrado.' : `${entries.length} termos encontrados.`}{hasFilters ? ' Os resultados respeitam os filtros selecionados.' : ''}</p>
      {entries.length > 0 ? <section aria-label="Termos do glossário" className="mt-5 grid gap-5 lg:grid-cols-2">{entries.map((item) => <GlossaryTerm key={item.term} {...item} onRelatedNavigate={revealRelatedTerm} />)}</section> : <section className="mt-5 rounded-2xl border border-border bg-card p-6"><h2 className="text-lg font-semibold">Nenhum termo encontrado</h2><p className="mt-2 leading-7 text-muted-foreground">Tente outra palavra, remova um filtro ou consulte os termos de uma etapa diferente.</p><button type="button" onClick={clearFilters} className="mt-4 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-[#031721] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Ver todos os termos</button></section>}
    </article>
  );
}
