import type { Question } from '@/lib/editorial-content';
import { useId } from 'react';

export function QuestionList({ questions, title = 'Perguntas para a equipe' }: { questions: Question[]; title?: string }) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <h2 id={titleId} className="text-xl font-semibold tracking-tight">{title}</h2>
      <ol className="mt-4 space-y-3">
        {questions.map((item, index) => (
          <li key={item.id} className="flex gap-3 rounded-xl bg-muted p-4">
            <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-[#031721]">{index + 1}</span>
            <div><p className="font-medium leading-6">{item.question}</p>{item.hint && <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.hint}</p>}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
