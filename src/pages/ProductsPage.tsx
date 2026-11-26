import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Armchair,
  ArrowUpRight,
  BedDouble,
  Box,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Footprints,
  Grid,
  Heart,
  Layers,
  PawPrint,
  RectangleHorizontal,
  Shirt,
  Sparkles,
  Square,
} from 'lucide-react';
import { BlurReveal, PageTransition } from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { ProductModal } from '../components/ProductModal';
import {
  EKO7_CATEGORIES,
  EKO7_PRODUCTS,
  Eko7Category,
  Eko7CategorySlug,
  Eko7Product,
} from '../data/eko7Catalog';

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

const ITEMS_PER_PAGE = 9;
const VISIBLE_CATS_DESKTOP = 5;

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSlug = (searchParams.get('categoria') as Eko7CategorySlug) || 'colchao';
  const validInitial = EKO7_CATEGORIES.some((c) => c.slug === initialSlug)
    ? initialSlug
    : 'colchao';

  const [activeCategory, setActiveCategory] = useState<Eko7CategorySlug>(validInitial);
  const [catOffset, setCatOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Eko7Product | null>(null);

  useEffect(() => {
    const param = searchParams.get('categoria') as Eko7CategorySlug | null;
    if (param && EKO7_CATEGORIES.some((c) => c.slug === param)) {
      setActiveCategory(param);
      setCurrentPage(1);
      const idx = EKO7_CATEGORIES.findIndex((c) => c.slug === param);
      if (idx >= VISIBLE_CATS_DESKTOP) {
        setCatOffset(Math.min(idx - VISIBLE_CATS_DESKTOP + 1, EKO7_CATEGORIES.length - VISIBLE_CATS_DESKTOP));
      } else if (idx >= 0) {
        setCatOffset(0);
      }
    }
  }, [searchParams]);

  const handleCategoryChange = (slug: Eko7CategorySlug) => {
    setActiveCategory(slug);
    setCurrentPage(1);
    setSearchParams({ categoria: slug });
  };

  const maxCatOffset = EKO7_CATEGORIES.length - VISIBLE_CATS_DESKTOP;
  const visibleCategories = EKO7_CATEGORIES.slice(catOffset, catOffset + VISIBLE_CATS_DESKTOP);

  const filteredProducts = useMemo(
    () => EKO7_PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeCategoryObj = EKO7_CATEGORIES.find((c) => c.slug === activeCategory);

  return (
    <PageTransition>
      {/* ULTRA-CLEAN EKO'7-STYLE CATEGORY CAROUSEL + 3-COLUMN PRODUCT GRID */}
      <section className="pt-28 md:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Horizontal Category Carousel (5 clean cards + arrows on right, just like eko7.com.br) */}
          <BlurReveal className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
                  LINHA OFICIAL EKO&apos;7®
                </p>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-naturale-slate mt-1">
                  {activeCategoryObj?.label}
                </h1>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setCatOffset((prev) => Math.max(0, prev - 1))}
                  disabled={catOffset === 0}
                  aria-label="Categorias anteriores"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-naturale-marsala text-slate-600 hover:text-naturale-marsala disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCatOffset((prev) => Math.min(maxCatOffset, prev + 1))}
                  disabled={catOffset >= maxCatOffset}
                  aria-label="Próximas categorias"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-naturale-marsala text-slate-600 hover:text-naturale-marsala disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 5-card Category Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {visibleCategories.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.icon];
                const isActive = cat.slug === activeCategory;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`flex flex-col items-center justify-center gap-2.5 py-5 px-4 rounded-2xl transition-all duration-200 border ${
                      isActive
                        ? 'bg-naturale-rose-light border-naturale-marsala text-naturale-marsala shadow-sm'
                        : 'bg-naturale-stone border-transparent text-naturale-slate hover:border-slate-200'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 stroke-[1.6] ${
                        isActive ? 'text-naturale-marsala' : 'text-naturale-blue'
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-bold text-center">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </BlurReveal>

          {/* Minimalist 3-Column Product Grid (Exact Eko'7 simplicity: Image + Title + Ver Detalhes ↗) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedProducts.map((product) => (
                <article
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer bg-naturale-stone rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-white mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = './images/eko7/colchao-vienna.png';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h2 className="text-base sm:text-lg font-extrabold text-naturale-slate group-hover:text-naturale-marsala transition-colors px-2 min-h-[3rem] flex items-center justify-center">
                    {product.name}
                  </h2>

                  <span className="mt-4 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-naturale-marsala group-hover:bg-naturale-marsala-dark text-white text-xs font-bold shadow-sm transition-colors">
                    Ver Detalhes
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Clean Circular Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const active = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
                      active
                        ? 'bg-naturale-marsala text-white shadow-sm'
                        : 'bg-naturale-stone text-naturale-slate hover:bg-naturale-rose-light hover:text-naturale-marsala'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {currentPage < totalPages && (
                <button
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="px-5 h-10 rounded-full bg-naturale-stone hover:bg-naturale-rose-light text-naturale-slate hover:text-naturale-marsala text-xs font-bold transition-colors"
                >
                  Próxima
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <ConversionBanner
        title="Tire suas dúvidas e descubra o produto Eko'7® ideal para você"
        ctaLabel="Fale com um especialista"
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </PageTransition>
  );
};
