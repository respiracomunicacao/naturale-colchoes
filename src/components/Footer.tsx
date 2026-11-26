import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { getWhatsAppLink, INSTAGRAM_URL } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-naturale-stone text-naturale-slate border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <Link to="/" aria-label="Naturale Colchões">
              <Logo variant="color" className="h-14 w-auto" />
            </Link>
          </div>

          {/* 2-Column Compact Links */}
          <div className="md:col-span-3 md:border-l md:border-slate-300/70 md:pl-7 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold text-naturale-muted">
            <Link to="/" className="hover:text-naturale-marsala transition-colors">
              Home
            </Link>
            <Link to="/a-naturale" className="hover:text-naturale-marsala transition-colors">
              A Naturale
            </Link>
            <Link to="/produtos" className="hover:text-naturale-marsala transition-colors">
              Produtos
            </Link>
            <Link to="/blog" className="hover:text-naturale-marsala transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="hover:text-naturale-marsala transition-colors">
              Contato
            </Link>
          </div>

          {/* Contatos + Endereço */}
          <div className="md:col-span-4 md:border-l md:border-slate-300/70 md:pl-7 space-y-2.5 text-sm text-naturale-muted">
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com a Naturale Colchões.')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center md:justify-start gap-2.5 font-bold text-naturale-slate hover:text-naturale-marsala transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-naturale-marsala shrink-0" />
              <span>(51) 99779-5664</span>
            </a>

            <a
              href="mailto:contato@naturalecolchoes.com.br"
              className="flex items-center justify-center md:justify-start gap-2.5 hover:text-naturale-marsala transition-colors"
            >
              <Mail className="w-4 h-4 text-naturale-marsala shrink-0" />
              <span>contato@naturalecolchoes.com.br</span>
            </a>

            <div className="flex items-start justify-center md:justify-start gap-2.5 pt-0.5">
              <MapPin className="w-4 h-4 text-naturale-marsala mt-0.5 shrink-0" />
              <div className="leading-snug text-left">
                <p className="font-bold text-naturale-slate">Rua Adalberto Wilke, 170</p>
                <p>Santo Inácio — Santa Cruz do Sul, RS</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 md:border-l md:border-slate-300/70 md:pl-7 flex items-center justify-center md:justify-start gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @naturale_colchoes"
              className="p-2 rounded-full text-naturale-slate hover:text-naturale-marsala hover:bg-naturale-rose-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full text-naturale-slate hover:text-naturale-blue hover:bg-naturale-blue-light transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com a Naturale Colchões.')}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full text-naturale-slate hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Naturale Colchões. Todos os direitos reservados.</p>
          <p>Revendedor Autorizado Eko&apos;7® — Santa Cruz do Sul, RS</p>
        </div>
      </div>
    </footer>
  );
};
