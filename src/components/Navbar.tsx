import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { getWhatsAppLink } from '../data/siteData';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'A Naturale', to: '/a-naturale' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Equipe', to: '/equipe' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft py-2.5 border-b border-naturale-blue/10'
          : 'bg-white/75 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Naturale Colchões — Início"
        >
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Logo variant="color" className="h-11 sm:h-12 w-auto" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-[15px] font-bold rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-naturale-blue bg-naturale-blue-light/70'
                    : 'text-slate-600 hover:text-naturale-blue hover:bg-slate-100/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Socials + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full text-slate-500 hover:text-naturale-marsala hover:bg-naturale-rose-light transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full text-slate-500 hover:text-naturale-blue hover:bg-naturale-blue-light transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da Naturale Colchões.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white text-sm font-bold shadow-glow-blue transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Fale com um Especialista
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Abrir menu"
          className="lg:hidden p-2.5 rounded-xl bg-naturale-blue-light/60 text-naturale-slate hover:bg-naturale-blue-light transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="px-4 py-5 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                      isActive
                        ? 'bg-naturale-blue-light text-naturale-blue'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da Naturale Colchões.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-naturale-blue text-white font-bold shadow-glow-blue"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com um Especialista
                </a>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-naturale-rose-light text-naturale-marsala"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-naturale-blue-light text-naturale-blue"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
