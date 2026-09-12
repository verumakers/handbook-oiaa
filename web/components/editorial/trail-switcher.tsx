import Link from 'next/link';
import type { Trail } from '@/lib/editorial-content';

export const trailLinks: { trail: Trail; href: string; label: string }[] = [
  { trail: 'tabular', href: '/trilhas/tabular', label: 'Dados tabulares' },
  { trail: 'visao-computacional', href: '/trilhas/visao-computacional', label: 'Visão computacional' },
  { trail: 'linguagem-natural', href: '/trilhas/linguagem-natural', label: 'Linguagem natural' },
];

export function TrailSwitcher({ current }: { current?: Trail }) {
  return (
    <nav aria-label="Escolher trilha de estudo" className="mt-8 rounded-2xl border border-border bg-muted p-5 sm:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
        {current ? 'Trocar de trilha' : 'Trilhas disponíveis'}
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {trailLinks.map((item) => {
          const isCurrent = item.trail === current;
          return (
            <Link
              key={item.trail}
              href={item.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isCurrent
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {item.label}
              {isCurrent && <span className="sr-only"> (trilha atual)</span>}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
