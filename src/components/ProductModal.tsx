import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteData';
import { Eko7Product } from '../data/eko7Catalog';

interface ProductModalProps {
  product: Eko7Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
          >
            <button
              onClick={onClose}
              aria-label="Fechar detalhes"
              className="sticky top-4 float-right mr-4 mt-4 z-20 p-2 rounded-full bg-white/95 hover:bg-naturale-rose-light text-slate-600 hover:text-naturale-marsala shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left: Clean Product Photo */}
              <div className="bg-naturale-stone flex items-center justify-center p-6 min-h-[280px]">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = './images/eko7/colchao-vienna.png';
                  }}
                  className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Right: Clean Eko'7 Specs + WhatsApp Consult CTA (no selectable size dropdown) */}
              <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-naturale-marsala">
                      Linha Eko&apos;7® • {product.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-naturale-slate mt-1 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-naturale-muted mt-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                      Características &amp; Benefícios
                    </h4>
                    <ul className="space-y-2.5">
                      {product.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-naturale-slate font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-naturale-marsala shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Informational Sizes (non-selectable) */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="pt-1 border-t border-slate-100">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                        Medidas sob consulta
                      </p>
                      <p className="text-xs text-naturale-muted leading-relaxed">
                        {product.sizes.join(' • ')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Single Clean CTA */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      `Olá! Gostaria de solicitar um orçamento e mais detalhes sobre o produto ${product.name} da linha Eko'7 na Naturale Colchões.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white font-bold text-sm shadow-glow-marsala transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
