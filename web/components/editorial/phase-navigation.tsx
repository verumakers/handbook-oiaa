import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const phases = [
  { href: '/explorar', label: 'Explorar' },
  { href: '/configurar', label: 'Configurar' },
  { href: '/modelar', label: 'Modelar' },
  { href: '/avaliar', label: 'Avaliar' },
  { href: '/registrar-e-entregar', label: 'Registrar e entregar' },
] as const;

export function PhaseNavigation({ current }: { current: (typeof phases)[number]['href'] }) {
  const index = phases.findIndex((phase) => phase.href === current);
  const previous = phases[index - 1];
  const next = phases[index + 1];

  return (
    <nav aria-label="Navegar pelo percurso" className="mt-8 border-t border-border pt-8">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Percurso</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {previous ? (
          <Link className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href={previous.href}>
            <ArrowLeft aria-hidden="true" size={17} />
            <span>Anterior: {previous.label}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href={next.href}>
            <span>Próxima: {next.label}</span>
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        ) : <Link className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="/materiais">Conferir materiais <ArrowRight aria-hidden="true" size={17} /></Link>}
      </div>
    </nav>
  );
}
