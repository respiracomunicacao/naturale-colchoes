import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, Ruler, ShieldCheck, Layers, MessageCircle } from 'lucide-react';
import { ProductItem, getWhatsAppLink } from '../data/siteData';

interface ProductModalProps {
  product: ProductItem | null;
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
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
          >
            <button
              onClick={onClose}
              aria-label="Fechar detalhes"
              className="sticky top-4 float-right mr-4 mt-4 z-20 p-2 rounded-full bg-white/90 hover:bg-naturale-rose-light text-slate-600 hover:text-naturale-marsala shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative min-h-[260px] md:min-h-full bg-naturale-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-naturale-marsala text-white text-xs font-extrabold shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content Side */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-naturale-blue">
                    {product.line} • {product.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-naturale-slate mt-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {product.fullDesc}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-naturale-blue-light/60">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-naturale-blue">
                      <Ruler className="w-3.5 h-3.5" /> Altura / Conforto
                    </div>
                    <p className="text-sm font-extrabold text-naturale-slate mt-1">
                      {product.height} • {product.comfortLevel}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-naturale-rose-light/70">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-naturale-marsala">
                      <ShieldCheck className="w-3.5 h-3.5" /> Garantia
                    </div>
                    <p className="text-sm font-extrabold text-naturale-slate mt-1">
                      {product.warranty}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                    Tecnologias Integradas Eko7
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Layers Breakdown */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                    <Layers className="w-3.5 h-3.5 text-naturale-blue" />
                    Estrutura Interna (Camadas)
                  </h4>
                  <div className="space-y-2">
                    {product.layers.map((layer, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-naturale-cream border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-naturale-blue shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-extrabold text-naturale-slate">
                            {layer.name}
                          </p>
                          <p className="text-xs text-slate-500">{layer.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                    Medidas Disponíveis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 rounded-lg border border-naturale-blue/30 text-naturale-slate text-xs font-bold bg-white"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      `Olá! Gostaria de receber mais informações e orçamento do modelo ${product.name} da Naturale Colchões.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white font-extrabold text-sm shadow-glow-blue transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Orçamento / Test-Drive no WhatsApp
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
