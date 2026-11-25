import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { getWhatsAppLink } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-naturale-slate text-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-naturale-blue/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-naturale-marsala/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/70">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="white" className="h-12 w-auto" />
            <p className="text-sm text-slate-300 leading-relaxed">
              Especialistas em ergonomia, saúde da coluna e sono reparador. Revendedora autorizada dos sistemas de dormir terapêuticos <strong className="text-white">Eko7</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-naturale-rose">
              <ShieldCheck className="w-4 h-4 text-naturale-blue" />
              Revendedora Autorizada Eko7
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'A Naturale', to: '/a-naturale' },
                { label: 'Produtos & Tecnologias Eko7', to: '/produtos' },
                { label: 'Equipe & Showroom', to: '/equipe' },
                { label: 'Blog do Sono', to: '/blog' },
                { label: 'Contato & Agendamento', to: '/contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-naturale-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-naturale-blue mt-0.5 shrink-0" />
                <span>(47) 3000-0000 / (47) 99999-9999</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-naturale-rose mt-0.5 shrink-0" />
                <span>contato@naturalecolchoes.com.br</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-naturale-blue mt-0.5 shrink-0" />
                <span>Showroom Naturale Colchões — Endereço a definir conforme unidade</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-4">Conecte-se</h4>
            <p className="text-sm text-slate-300 mb-4">
              Acompanhe dicas de sono, lançamentos Eko7 e novidades do nosso showroom.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-naturale-marsala text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-naturale-blue text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Naturale Colchões.')}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-emerald-500 text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Naturale Colchões. Todos os direitos reservados.</p>
          <p>Produtos terapêuticos e ergonômicos — Revenda Autorizada Eko7.</p>
        </div>
      </div>
    </footer>
  );
};
