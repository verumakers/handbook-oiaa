import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { HandbookNavigation } from './handbook-navigation';

export function HandbookShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <header className="relative border-b border-white/15 bg-[#031721] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" href="/">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-[#031721]">
              <Sparkles aria-hidden="true" size={20} strokeWidth={2.5} />
            </span>
            <span className="leading-tight">
              <strong className="block text-sm tracking-[0.12em]">VERUM</strong>
              <span className="text-xs text-white/65">Handbook OIAA</span>
            </span>
          </Link>
          <HandbookNavigation />
        </div>
      </header>
      <main className="flex-1" id="conteudo-principal">
        {children}
      </main>
      <footer className="border-t border-white/15 bg-[#031721] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm sm:px-8 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p><strong>VERUM</strong> · Handbook OIAA</p>
          <p className="text-white/65">Estude, teste, registre e preserve a autoria da equipe.</p>
        </div>
      </footer>
    </div>
  );
}
