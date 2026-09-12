'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import type { GlossaryEntry } from '@/lib/editorial-content';

type GlossaryTermProps = GlossaryEntry & {
  onRelatedNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function GlossaryTerm({ term, definition, stages, trails, appearsIn, related = [], onRelatedNavigate }: GlossaryTermProps) {
  return (
    <article id={`termo-${term.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`} className="scroll-mt-28 rounded-2xl border border-border bg-card p-5">
      <h2 className="text-xl font-semibold tracking-tight">{term}</h2><p className="mt-2 leading-7 text-muted-foreground">{definition}</p>
      <div className="mt-4 grid gap-4 border-t border-border pt-4 text-sm sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">Etapas</h3>
          <ul aria-label={`Etapas de ${term}`} className="mt-2 flex flex-wrap gap-2">{stages.map((stage) => <li key={stage} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-[#031721]">{stage}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-semibold">Trilhas</h3>
          <ul aria-label={`Trilhas de ${term}`} className="mt-2 flex flex-wrap gap-2">{trails.map((trail) => <li key={trail} className="rounded-full bg-[#fff1cc] px-2.5 py-1 text-xs font-semibold text-[#031721]">{trail}</li>)}</ul>
        </div>
      </div>
      <nav aria-label={`Onde ${term} aparece`} className="mt-4 text-sm">
        <h3 className="font-semibold">Onde aparece</h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-primary">{appearsIn.map((link) => <Link key={link.href} href={link.href} className="font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label}</Link>)}</div>
      </nav>
      {related.length > 0 && <nav aria-label={`Termos relacionados a ${term}`} className="mt-4 text-sm"><h3 className="font-semibold text-foreground">Termos relacionados</h3><div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-semibold text-primary">{related.map((link) => <Link key={link.href} href={link.href} onClick={(event) => onRelatedNavigate?.(event, link.href)} className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label}</Link>)}</div></nav>}
    </article>
  );
}
