import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Armchair,
  BedDouble,
  Box,
  ChevronDown,
  CircleDot,
  Facebook,
  Footprints,
  Grid,
  Heart,
  Instagram,
  Layers,
  Menu,
  MessageCircle,
  PawPrint,
  RectangleHorizontal,
  Shirt,
  Sparkles,
  Square,
  X,
} from 'lucide-react';
import { Logo } from './Logo';
import { getWhatsAppLink, INSTAGRAM_URL } from '../data/siteData';
import { EKO7_CATEGORIES, Eko7Category } from '../data/eko7Catalog';

const CATEGORY_ICONS: Record<Eko7Category['icon'], React.FC<{ className?: string }>> = {
  bed: BedDouble,
  box: Box,
  headboard: RectangleHorizontal,
  pillow: Square,
  chair: Armchair,
  sparkles: Sparkles,
  shirt: Shirt,
  mat: Layers,
  circle: CircleDot,
  paw: PawPrint,
  footprints: Footprints,
  activity: Activity,
  heart: Heart,
  grid: Grid,
};

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'A Naturale', to: '/a-naturale' },
  { label: 'Produtos', to: '/produtos', hasDropdown: true },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.search]);

  const handleSelectCategory = (slug: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate(`/produtos?categoria=${slug}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar in Azul Naturale (#6B9DD3) */}
      <div
        className={`hidden md:block bg-naturale-blue text-white transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-[11px] font-bold">
          <div className="flex items-center gap-3">
            <span className="text-white/90">
              Revendedor Autorizado Eko&apos;7® • Santa Cruz do Sul, RS
            </span>
          </div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de conversar com um especialista da Naturale Colchões.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Converse agora com um Especialista do Sono
          </a>
        </div>
      </div>

      {/* Main Clean White Navbar */}
      <div
        className={`transition-all duration-300 bg-white/95 backdrop-blur-md border-b relative ${
          scrolled
            ? 'py-2.5 border-slate-200/80 shadow-soft'
            : 'py-4 border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none shrink-0"
            aria-label="Naturale Colchões — Início"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Logo variant="color" className="h-11 sm:h-12 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Nav with Compact Single-Column Products Dropdown */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to="/produtos"
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-bold tracking-wide transition-all duration-200 ${
                        dropdownOpen || isActive
                          ? 'bg-naturale-marsala text-white shadow-sm'
                          : 'bg-naturale-stone text-naturale-slate hover:bg-naturale-rose-light hover:text-naturale-marsala'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </NavLink>

                  {/* 2-Column Dropdown showing ALL 14 categories with zero scroll */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute -left-16 top-full pt-2.5 w-[500px] z-50"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3">
                          <div className="grid grid-cols-2 gap-1">
                            {EKO7_CATEGORIES.map((cat) => {
                              const Icon = CATEGORY_ICONS[cat.icon];
                              return (
                                <button
                                  key={cat.slug}
                                  onClick={() => handleSelectCategory(cat.slug)}
                                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-[13px] font-bold text-naturale-slate hover:bg-naturale-marsala hover:text-white transition-colors group"
                                >
                                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-naturale-blue-light text-naturale-blue group-hover:bg-white/20 group-hover:text-white transition-colors">
                                    <Icon className="w-3.5 h-3.5" />
                                  </span>
                                  <span className="truncate">{cat.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative py-1.5 text-[14px] font-bold tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-naturale-marsala after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-naturale-marsala after:rounded-full'
                        : 'text-naturale-slate/80 hover:text-naturale-marsala'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Social Icons + Marsala Pill CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 pr-2 border-r border-slate-200">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @naturale_colchoes"
                className="p-2 rounded-full text-naturale-slate/75 hover:text-naturale-marsala hover:bg-naturale-rose-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full text-naturale-slate/75 hover:text-naturale-blue hover:bg-naturale-blue-light transition-colors"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white text-[13px] font-bold shadow-glow-marsala transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Fale com um especialista
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Abrir menu"
            className="lg:hidden p-2.5 rounded-xl bg-naturale-stone text-naturale-slate hover:bg-naturale-rose-light transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-5 py-5 space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <div key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                        isActive
                          ? 'bg-naturale-rose-light text-naturale-marsala'
                          : 'text-naturale-slate hover:bg-naturale-stone'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.hasDropdown && (
                    <div className="pl-4 py-2 grid grid-cols-2 gap-1.5">
                      {EKO7_CATEGORIES.map((cat) => (
                        <button
                          key={cat.slug}
                          onClick={() => handleSelectCategory(cat.slug)}
                          className="text-left px-3 py-1.5 rounded-lg text-xs font-bold text-naturale-muted hover:text-naturale-marsala hover:bg-naturale-stone"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-slate-100">
                <a
                  href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da Naturale Colchões.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-naturale-marsala text-white font-bold shadow-glow-marsala"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale com um especialista
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
