import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { NextStepContent } from '@/lib/editorial-content';

export function NextStep({ href, label, title, description }: NextStepContent) {
  return <aside className="rounded-2xl bg-[#031721] p-6 text-white"><p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">{label}</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-2 max-w-2xl leading-7 text-white/75">{description}</p><Link href={href} className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-[#031721] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Continuar <ArrowRight aria-hidden="true" size={16} /></Link></aside>;
}
