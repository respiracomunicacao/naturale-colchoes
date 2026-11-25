import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { BlurReveal } from './MotionPrimitives';
import { getWhatsAppLink } from '../data/siteData';

interface ConversionBannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  title = 'Pronto para transformar a qualidade das suas noites?',
  subtitle = 'Converse com um consultor do sono da Naturale Colchões e descubra o modelo Eko7 ideal para o seu biotipo e saúde da coluna.',
  ctaLabel = 'Falar com um Especialista',
  secondaryLabel = 'Ver Catálogo Eko7',
  secondaryTo = '/produtos',
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <BlurReveal className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-naturale p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          {/* Decorative ambient circles */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/15 blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-naturale-slate/15 blur-2xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-wide uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Consultoria do Sono Gratuita
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              {title}
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={getWhatsAppLink('Olá! Gostaria de agendar uma consultoria sobre os colchões Eko7.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-naturale-slate font-extrabold text-sm sm:text-base shadow-lg hover:bg-naturale-cream transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-naturale-blue" />
                {ctaLabel}
              </motion.a>
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold text-sm sm:text-base border border-white/30 transition-colors"
              >
                {secondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </BlurReveal>
    </section>
  );
};
