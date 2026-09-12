'use client';

import type { ExperimentLogEntry } from '@/lib/editorial-content';
import { useId, useState } from 'react';

const headers = ['Hipótese', 'Alteração', 'Resultado', 'O que a matriz mostrou', 'Próximo teste'] as const;

export function ExperimentLog({ entries, title = 'Diário de experimento' }: { entries: ExperimentLogEntry[]; title?: string }) {
  const id = useId();
  const [notice, setNotice] = useState('');
  const copyTemplate = async () => {
    const text = [headers.join('\t'), ...entries.map((entry) => [entry.hypothesis, entry.alteration, entry.result, entry.matrixFinding, entry.nextTest].join('\t'))].join('\n');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API indisponível');
      await navigator.clipboard.writeText(text);
      setNotice('Modelo copiado para a área de transferência.');
    } catch {
      setNotice('Não foi possível copiar o modelo. Selecione e copie a tabela manualmente.');
    }
  };
  return (
    <section aria-labelledby={`${id}-title`} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3"><h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">{title}</h2><button type="button" onClick={() => void copyTemplate()} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#031721] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Copiar modelo</button></div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Preencha depois de observar o resultado; o modelo não sugere decisões.</p>
      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- região rolável precisa receber foco para rolagem pelo teclado. */}
      <section tabIndex={0} className="mt-4 overflow-x-auto rounded-xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Tabela do diário de experimento; deslize horizontalmente para ver todas as colunas"><table className="w-full min-w-[900px] text-left text-sm leading-6"><thead className="bg-muted"><tr>{headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead><tbody>{entries.map((entry, index) => <tr key={index} className="border-t border-border align-top"><td className="px-4 py-4">{entry.hypothesis}</td><td className="px-4 py-4">{entry.alteration}</td><td className="px-4 py-4">{entry.result}</td><td className="px-4 py-4">{entry.matrixFinding}</td><td className="px-4 py-4">{entry.nextTest}</td></tr>)}</tbody></table></section>
      <output aria-live="polite" className="sr-only">{notice}</output>
    </section>
  );
}
