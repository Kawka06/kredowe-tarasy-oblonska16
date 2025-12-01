import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const sectionNavItems: NavItem[] = [
  { label: 'Inwestycja', href: '#inwestycja' },
  { label: 'Opis inwestycji', href: '#opis-inwestycji' },
  { label: 'Zdjęcia', href: '#zdjecia' },
  { label: 'Rezerwacja', href: '#rezerwacja' },
  { label: 'Kontakt', href: '#kontakt' },
];

const flatsNavItem: NavItem = { label: 'Mieszkania', href: '/mieszkania' };

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick =
    (item: NavItem) =>
    (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      event.preventDefault();
      setIsMobileOpen(false);

      if (item.href === '/mieszkania') {
        navigate('/mieszkania');
        return;
      }

      if (item.href.startsWith('#')) {
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex flex-col items-center">
          <div className="developer-logo text-xs uppercase tracking-[0.3em] text-slate-700">
            Niemiec <span>Development</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Kredowe Tarasy Obłońska 16
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {sectionNavItems.map((item) => (
            <button
              key={item.href}
              onClick={handleNavClick(item)}
              className="text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleNavClick(flatsNavItem)}
            className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-full shadow-sm transition-colors"
          >
            Mieszkania
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300 text-slate-700"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Otwórz menu nawigacji"
          aria-expanded={isMobileOpen}
        >
          <span className="sr-only">Otwórz menu</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
                isMobileOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-opacity ${
                isMobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-700 transition-transform ${
                isMobileOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {isMobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {sectionNavItems.map((item) => (
              <button
                key={item.href}
                onClick={handleNavClick(item)}
                className="w-full text-left text-sm font-medium text-slate-700 hover:text-brand-700"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleNavClick(flatsNavItem)}
              className="mt-2 w-full text-center text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-full shadow-sm"
            >
              Mieszkania
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
