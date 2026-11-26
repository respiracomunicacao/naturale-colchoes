import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
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
  title = 'Tire suas dúvidas e descubra o colchão ideal para você',
  ctaLabel = 'Fale com um especialista',
}) => {
  return (
    <section className="relative bg-naturale-blue text-white overflow-hidden">
      {/* Subtle Naturale petal watermark on the right matching the mockup */}
      <svg
        viewBox="0 0 220 200"
        fill="none"
        aria-hidden="true"
        className="absolute right-4 sm:right-12 bottom-0 h-40 sm:h-48 w-auto opacity-15 pointer-events-none select-none"
      >
        <circle cx="110" cy="42" r="20" fill="white" />
        <path
          d="M110 170C70 140 35 105 42 72C48 45 84 48 110 88C136 48 172 45 178 72C185 105 150 140 110 170Z"
          fill="white"
        />
      </svg>

      <BlurReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug text-center md:text-right max-w-md">
            {title}
          </h2>

          <div className="hidden md:block w-px h-14 bg-white/35 shrink-0" />

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={getWhatsAppLink(
              'Olá! Gostaria de tirar dúvidas e descobrir o colchão Eko7 ideal para mim.'
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-naturale-stone text-naturale-slate font-extrabold text-sm shadow-md transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-naturale-marsala" />
            {ctaLabel}
          </motion.a>
        </div>
      </BlurReveal>
    </section>
  );
};
