import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteData';

export const WhatsAppFloat: React.FC = () => {
  return (
    <motion.a
      href={getWhatsAppLink(
        'Olá! Gostaria de receber uma consultoria sobre os colchões terapêuticos Eko7 na Naturale Colchões.'
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-xl shadow-emerald-500/30 transition-colors group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm pr-1">Falar no WhatsApp</span>
    </motion.a>
  );
};
