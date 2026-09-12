export type PageContentsItem = {
  href: string;
  label: string;
};

export function PageContents({ items, label = 'Nesta página' }: { items: PageContentsItem[]; label?: string }) {
  return (
    <nav aria-label={label} className="mt-10 rounded-2xl border border-border bg-muted p-5 sm:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">{label}</p>
      <ol className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6">
        {items.map((item) => (
          <li key={item.href}>
            <a className="font-semibold text-foreground underline decoration-primary/45 underline-offset-4 transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
