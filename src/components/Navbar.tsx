import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import type { NavItem } from '@/data/types';

type NavbarProps = {
  navItems: NavItem[];
  activeId: string;
  brand: string;
};

const Navbar = ({ navItems, activeId, brand }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-font sticky top-0 z-50 border-b border-ink-200/40 bg-white/70 backdrop-blur dark:border-ink-800 dark:bg-ink-900/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="focus-ring">
          <span className="brand-logo text-base font-sans sm:text-lg" aria-label={brand}>
            {brand.split(' ').map((word, index) => {
              const initial = word.charAt(0);
              const rest = word.slice(1);
              return (
                <span key={`${word}-${index}`} className="brand-word">
                  <span className="brand-initial">{initial}</span>
                  <span className="brand-rest">{rest}</span>
                </span>
              );
            })}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-base font-bold text-ink-600 dark:text-ink-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring transition hover:text-teal-500 ${
                activeId === item.id ? 'text-teal-500' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="focus-ring btn btn-outline btn-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-ink-200/60 px-6 py-4 dark:border-ink-800 md:hidden">
          <div className="flex flex-col gap-4 text-base font-bold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`focus-ring text-sm font-semibold text-ink-700 dark:text-ink-200 ${
                  activeId === item.id ? 'text-teal-500' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;


