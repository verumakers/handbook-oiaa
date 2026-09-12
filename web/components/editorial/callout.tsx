import type { CalloutKind } from '@/lib/editorial-content';
import { CircleAlert, Lightbulb, Scale } from 'lucide-react';
import type { ReactNode } from 'react';

const calloutStyle: Record<CalloutKind, { label: string; icon: typeof Lightbulb; className: string }> = {
  conceito: { label: 'Conceito', icon: Lightbulb, className: 'border-primary/35 bg-secondary' },
  dica: { label: 'Dica', icon: Lightbulb, className: 'border-accent/60 bg-accent/15' },
  atencao: { label: 'Atenção', icon: CircleAlert, className: 'border-accent bg-accent/20' },
  regra: { label: 'Regra', icon: Scale, className: 'border-[#031721]/25 bg-[#031721] text-white' },
};

export function Callout({ kind, title, children }: { kind: CalloutKind; title?: string; children: ReactNode }) {
  const style = calloutStyle[kind];
  const Icon = style.icon;
  return (
    <aside className={`rounded-2xl border p-5 ${style.className}`} aria-label={title ?? style.label}>
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]">
        <Icon aria-hidden="true" size={17} />
        <span>{style.label}</span>
      </div>
      {title && <h2 className="mt-3 text-lg font-semibold tracking-tight">{title}</h2>}
      <div className="mt-2 leading-7 opacity-85">{children}</div>
    </aside>
  );
}
