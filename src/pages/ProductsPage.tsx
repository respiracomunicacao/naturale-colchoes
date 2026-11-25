import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Filter,
  Layers,
  Magnet,
  MessageCircle,
  Shield,
  Sparkles,
  Sun,
  Waves,
  Eye,
} from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { ProductModal } from '../components/ProductModal';
import {
  EKO7_TECHNOLOGIES,
  PRODUCTS,
  ProductItem,
  getWhatsAppLink,
} from '../data/siteData';

const CATEGORIES = [
  'Todos',
  'Colchões Terapêuticos',
  'Bases e Baús',
  'Poltronas & Massagem',
  'Travesseiros',
] as const;

const TECH_FILTERS = [
  'Todas as Tecnologias',
  'Densidade Progressiva',
  'Magnetoterapia',
  'Infravermelho Longo',
  'Vibromassagem',
  'Perfilado Nanoex',
  'Cromoterapia',
] as const;

const TECH_ICONS = {
  layers: Layers,
  magnet: Magnet,
  sun: Sun,
  waves: Waves,
  sparkles: Sparkles,
  shield: Shield,
};

export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [activeTech, setActiveTech] = useState<string>('Todas as Tecnologias');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
      const matchTech =
        activeTech === 'Todas as Tecnologias' || p.technologies.includes(activeTech);
      return matchCat && matchTech;
    });
  }, [activeCategory, activeTech]);

  return (
    <PageTransition>
      {/* HERO BANNER PRODUTOS EKO7 */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-5">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-naturale-blue text-xs font-extrabold uppercase tracking-wider shadow-sm border border-naturale-blue/20">
              <Sparkles className="w-3.5 h-3.5 text-naturale-marsala" />
              Catálogo Oficial Eko7 • Revenda Autorizada Naturale
            </span>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl font-black text-naturale-slate max-w-3xl mx-auto leading-tight">
              Sistemas de dormir terapêuticos{' '}
              <span className="text-gradient-naturale">Eko7</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore a linha completa de colchões com densidade progressiva, magnetoterapia, infravermelho longo e vibromassagem — além de bases, travesseiros e poltronas.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* FILTROS INTERATIVOS + VITRINE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <BlurReveal className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-naturale-blue text-white shadow-glow-blue'
                      : 'bg-naturale-cream text-slate-600 hover:bg-naturale-blue-light hover:text-naturale-blue'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </BlurReveal>

          {/* Technology Pills */}
          <BlurReveal delay={0.06} className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-400 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar por tecnologia:
            </span>
            {TECH_FILTERS.map((tech) => {
              const isActive = activeTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setActiveTech(tech)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    isActive
                      ? 'bg-naturale-marsala text-white border-naturale-marsala shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-naturale-rose hover:text-naturale-marsala'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </BlurReveal>

          {/* Product Grid with Layout Animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="bg-naturale-cream rounded-3xl overflow-hidden border border-slate-100 hover:border-naturale-blue/40 hover:shadow-soft transition-all flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-naturale-marsala text-white text-xs font-extrabold shadow-md">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass-card text-naturale-slate text-[11px] font-extrabold shadow-sm">
                      {product.height} • {product.comfortLevel}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-naturale-blue">
                      {product.line}
                    </span>
                    <h3 className="text-xl font-black text-naturale-slate mt-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">
                      {product.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                      {product.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200/80 text-[11px] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-naturale-blue-light text-naturale-slate hover:text-naturale-blue border border-slate-200 font-extrabold text-xs transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Ver Camadas
                      </button>
                      <a
                        href={getWhatsAppLink(
                          `Olá! Tenho interesse no modelo ${product.name} da linha Eko7. Gostaria de um orçamento.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-naturale-blue hover:bg-naturale-blue-dark text-white font-extrabold text-xs shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Orçamento
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-naturale-cream rounded-3xl mt-6">
              <p className="text-lg font-extrabold text-naturale-slate">
                Nenhum produto encontrado com esta combinação de filtros.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('Todos');
                  setActiveTech('Todas as Tecnologias');
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-naturale-blue text-white text-xs font-extrabold"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TECNOLOGIAS EKO7 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-marsala">
              Ciência Aplicada ao Descanso
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
              Tecnologias Terapêuticas Eko7
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Cada camada dos colchões Eko7 foi desenvolvida para atuar em sinergia com a anatomia do corpo humano.
            </p>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EKO7_TECHNOLOGIES.map((tech) => {
              const Icon = TECH_ICONS[tech.iconName];
              const badgeColor =
                tech.color === 'blue'
                  ? 'bg-naturale-blue-light text-naturale-blue'
                  : tech.color === 'marsala'
                  ? 'bg-naturale-rose-light text-naturale-marsala'
                  : 'bg-rose-50 text-naturale-rose';

              return (
                <StaggerItem key={tech.id}>
                  <div className="bg-white rounded-3xl p-7 shadow-soft border border-white hover:border-naturale-blue/30 transition-all h-full">
                    <div className={`w-12 h-12 rounded-2xl ${badgeColor} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-naturale-slate">{tech.name}</h3>
                    <p className="text-xs font-extrabold text-naturale-blue mt-0.5 mb-3">
                      {tech.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{tech.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA ESPECIALISTA */}
      <ConversionBanner
        title="Em dúvida sobre qual modelo Eko7 escolher para sua coluna?"
        subtitle="Nossos especialistas analisam seu peso, altura e preferências de conforto para indicar a densidade progressiva perfeita."
        ctaLabel="Falar com um Especialista em Sono"
        secondaryLabel="Agendar Test-Drive no Showroom"
        secondaryTo="/contato"
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </PageTransition>
  );
};
