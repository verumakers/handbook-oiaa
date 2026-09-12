'use client';

import type { ChecklistItem } from '@/lib/editorial-content';
import { useId, useState } from 'react';

export function Checklist({ items, title = 'Checklist' }: { items: ChecklistItem[]; title?: string }) {
  const id = useId();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <section aria-labelledby={`${id}-title`} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex gap-3 rounded-xl bg-muted p-3">
            <input id={`${id}-${item.id}`} type="checkbox" checked={Boolean(checked[item.id])} onChange={(event) => setChecked((current) => ({ ...current, [item.id]: event.target.checked }))} className="mt-1 size-4 accent-[#41988b]" />
            <label htmlFor={`${id}-${item.id}`} className="cursor-pointer leading-6"><span className="font-medium">{item.label}</span>{item.description && <span className="block text-sm text-muted-foreground">{item.description}</span>}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
