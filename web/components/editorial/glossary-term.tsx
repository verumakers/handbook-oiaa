import Link from 'next/link';
import type { GlossaryEntry } from '@/lib/editorial-content';

export function GlossaryTerm({ term, definition, tags, related = [] }: GlossaryEntry) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-xl font-semibold tracking-tight">{term}</h2><p className="mt-2 leading-7 text-muted-foreground">{definition}</p>
      <ul aria-label={`Categorias de ${term}`} className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-[#031721]">{tag}</li>)}</ul>
      {related.length > 0 && <nav aria-label={`Leitura relacionada a ${term}`} className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-primary">{related.map((link) => <Link key={link.href} href={link.href} className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{link.label}</Link>)}</nav>}
    </article>
  );
}
