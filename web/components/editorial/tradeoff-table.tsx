import type { TradeoffRow } from '@/lib/editorial-content';

const columns: { key: keyof TradeoffRow; label: string }[] = [
  { key: 'option', label: 'Opção / conceito' }, { key: 'whatItIs', label: 'O que é' },
  { key: 'worksWellWhen', label: 'Funciona bem quando' }, { key: 'canBeProblematicWhen', label: 'Pode dar problema quando' },
  { key: 'observe', label: 'O que observar' }, { key: 'neutralExample', label: 'Exemplo neutro' },
];

export function TradeoffTable({ rows, caption = 'Trade-offs para observar antes e depois de um teste.' }: { rows: TradeoffRow[]; caption?: string }) {
  return (
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- região rolável precisa receber foco para rolagem pelo teclado.
    <section tabIndex={0} className="overflow-x-auto rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Tabela de trade-offs; deslize horizontalmente para ver todas as colunas">
      <table className="w-full min-w-[960px] border-collapse text-left text-sm leading-6">
        <caption className="caption-top px-5 py-4 text-left font-semibold text-foreground">{caption}</caption>
        <thead className="bg-[#031721] text-white"><tr>{columns.map((column) => <th key={column.key} scope="col" className="px-4 py-3 font-semibold">{column.label}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={`${row.option}-${rowIndex}`} className="border-t border-border align-top even:bg-muted/60">{columns.map((column) => <td key={column.key} className="px-4 py-4">{row[column.key]}</td>)}</tr>)}</tbody>
      </table>
    </section>
  );
}
