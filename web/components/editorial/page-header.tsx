import type { PageHeaderContent } from '@/lib/editorial-content';

export function PageHeader({ eyebrow, title, summary }: PageHeaderContent) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{summary}</p>
    </header>
  );
}
