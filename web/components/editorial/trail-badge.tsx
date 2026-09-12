import type { Trail } from '@/lib/editorial-content';

const trailLabels: Record<Trail, string> = { tabular: 'Tabular', 'visao-computacional': 'Visão Computacional', 'linguagem-natural': 'Linguagem Natural' };
export function TrailBadge({ trail }: { trail: Trail }) { return <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-bold text-[#031721]">Trilha · {trailLabels[trail]}</span>; }
