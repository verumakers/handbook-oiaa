'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export type NavigationItem = {
  href: string;
  label: string;
  activePaths?: readonly string[];
};

export const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Comece aqui' },
  { href: '/explorar', label: 'Explorar' },
  { href: '/configurar', label: 'Configurar' },
  { href: '/modelar', label: 'Modelar' },
  { href: '/avaliar', label: 'Avaliar' },
  { href: '/registrar-e-entregar', label: 'Entregar' },
  { href: '/trilhas', label: 'Trilhas' },
  {
    href: '/glossario',
    label: 'Consulta rápida',
    activePaths: ['/glossario', '/metricas', '/matriz-de-confusao', '/diario-de-experimento', '/checklists'],
  },
  { href: '/materiais', label: 'Materiais' },
];

function isCurrentPath(pathname: string, { href, activePaths }: NavigationItem) {
  const paths = activePaths ?? [href];
  return paths.some((path) => (path === '/' ? pathname === path : pathname.startsWith(path)));
}

function NavLink({ item, onNavigate }: { item: NavigationItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const current = isCurrentPath(pathname, item);

  return (
    <Link
      aria-current={current ? 'page' : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        current ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
      }`}
      href={item.href}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

export function HandbookNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu({ restoreFocus = false } = {}) {
    setIsOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu({ restoreFocus: true });
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <nav aria-label="Navegação principal">
      <div className="hidden items-center gap-1 lg:flex">
        {navigationItems.map((item) => (
          <NavLink item={item} key={item.href} />
        ))}
      </div>

      <button
        aria-controls="menu-principal-movel"
        aria-expanded={isOpen}
        className="grid size-11 place-items-center rounded-lg text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
        onClick={() => setIsOpen((open) => !open)}
        ref={menuButtonRef}
        type="button"
      >
        <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
        {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      {isOpen && (
        <div
          className="absolute inset-x-0 top-full border-b border-white/15 bg-[#031721] px-5 py-4 shadow-xl lg:hidden"
          id="menu-principal-movel"
        >
          <div className="mx-auto grid max-w-7xl gap-1 sm:px-3">
            {navigationItems.map((item) => (
              <NavLink item={item} key={item.href} onNavigate={closeMenu} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
