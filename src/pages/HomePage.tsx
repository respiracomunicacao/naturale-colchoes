import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Heart,
  Instagram,
  Layers,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import {
  AnimatedCounter,
  BlurReveal,
  FloatingBadge,
  PageTransition,
  ParallaxImage,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { ProductModal } from '../components/ProductModal';
import {
  BLOG_POSTS,
  PRODUCTS,
  ProductItem,
  TESTIMONIALS,
  getWhatsAppLink,
} from '../data/siteData';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-soft">
        {/* Ambient blurred blobs */}
        <div className="absolute top-16 -left-24 w-96 h-96 rounded-full bg-naturale-blue/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-24 w-[28rem] h-[28rem] rounded-full bg-naturale-rose/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-6 space-y-6">
              <BlurReveal delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-naturale-blue/25 shadow-sm text-xs font-extrabold text-naturale-blue uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-naturale-marsala" />
                  Revendedora Autorizada Eko7
                </div>
              </BlurReveal>

              <BlurReveal delay={0.12}>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-naturale-slate leading-[1.12] tracking-tight">
                  O equilíbrio natural entre{' '}
                  <span className="text-gradient-naturale">ergonomia e sono reparador</span>
                </h1>
              </BlurReveal>

              <BlurReveal delay={0.2}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Descubra os sistemas de dormir terapêuticos <strong className="text-naturale-slate">Eko7</strong> na Naturale Colchões. Densidade progressiva, magnetoterapia, infravermelho longo e consultoria personalizada para a saúde da sua coluna.
                </p>
              </BlurReveal>

              <BlurReveal delay={0.28}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/produtos"
                      className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white font-extrabold text-sm sm:text-base shadow-glow-blue transition-colors"
                    >
                      Conheça os Modelos Eko7
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={getWhatsAppLink(
                      'Olá! Quero agendar uma consultoria gratuita do sono na Naturale Colchões.'
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-naturale-rose-light text-naturale-slate border border-naturale-rose/50 font-extrabold text-sm sm:text-base shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-naturale-marsala" />
                    Fale Conosco
                  </motion.a>
                </div>
              </BlurReveal>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-6 relative">
              <BlurReveal delay={0.18} direction="left">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img
                    src="./images/hero-bedroom.jpg"
                    alt="Quarto aconchegante com colchão terapêutico Naturale Eko7"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                </div>
              </BlurReveal>

              {/* Floating Glass Badges */}
              <FloatingBadge
                delay={0.2}
                className="hidden sm:flex items-center gap-3 glass-card px-4 py-3 rounded-2xl shadow-lg border border-white/80 absolute -bottom-5 -left-6 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-naturale-blue-light flex items-center justify-center text-naturale-blue">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-naturale-slate">Densidade Progressiva</p>
                  <p className="text-[11px] text-slate-500">Alinhamento ortopédico perfeito</p>
                </div>
              </FloatingBadge>

              <FloatingBadge
                delay={1.2}
                className="hidden sm:flex items-center gap-3 glass-card px-4 py-3 rounded-2xl shadow-lg border border-white/80 absolute -top-5 -right-4 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-naturale-rose-light flex items-center justify-center text-naturale-marsala">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-naturale-slate">Multi-Terapias Eko7</p>
                  <p className="text-[11px] text-slate-500">Magnetos, Infravermelho & Massagem</p>
                </div>
              </FloatingBadge>
            </div>
          </div>

          {/* DYNAMIC COUNTERS */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-20">
            {[
              { value: 10000, prefix: '+', suffix: '', label: 'Noites transformadas' },
              { value: 10, prefix: '', suffix: ' anos', label: 'Garantia estrutural Eko7' },
              { value: 100, prefix: '', suffix: '%', label: 'Espumas certificadas INMETRO' },
              { value: 6, prefix: '+', suffix: '', label: 'Tecnologias terapêuticas' },
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center shadow-soft border border-white hover:border-naturale-blue/30 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-gradient-naturale">
                    <AnimatedCounter
                      target={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1.5">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* VISÃO GERAL + VÍDEO INSTITUCIONAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <BlurReveal className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11] group">
              <ParallaxImage
                src="./images/showroom-naturale.jpg"
                alt="Showroom Naturale Colchões"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setVideoOpen(true)}
                  aria-label="Assistir vídeo institucional"
                  className="w-20 h-20 rounded-full bg-white/95 text-naturale-blue flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-8 h-8 fill-naturale-blue ml-1" />
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-2.5 rounded-2xl text-xs font-bold text-naturale-slate flex items-center justify-between">
                <span>Conheça a experiência Naturale & Eko7</span>
                <span className="text-naturale-marsala font-extrabold">Assistir apresentação</span>
              </div>
            </div>
          </BlurReveal>

          <div className="lg:col-span-6 space-y-6">
            <BlurReveal>
              <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-marsala">
                Visão Geral • Saúde e Bem-Estar
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2 leading-tight">
                Mais do que colchões: cuidamos da sua coluna todas as noites
              </h2>
            </BlurReveal>

            <BlurReveal delay={0.1}>
              <p className="text-slate-600 leading-relaxed">
                Dores lombares ao acordar, noites mal dormidas e cansaço constante quase sempre começam em uma superfície inadequada. Na <strong className="text-naturale-slate">Naturale Colchões</strong>, unimos atendimento consultivo humano à engenharia terapêutica da <strong className="text-naturale-slate">Eko7</strong>.
              </p>
            </BlurReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: 'Alinhamento Vertebral',
                  desc: 'Densidade progressiva que respeita as curvas naturais do corpo.',
                },
                {
                  title: 'Alívio de Pontos de Pressão',
                  desc: 'Menos formigamento em ombros e quadris durante toda a noite.',
                },
                {
                  title: 'Relaxamento Muscular',
                  desc: 'Vibromassagem silenciosa, infravermelho longo e magnetoterapia.',
                },
                {
                  title: 'Consultoria Sob Medida',
                  desc: 'Indicação personalizada para cada biotipo e necessidade.',
                },
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-4 rounded-2xl bg-naturale-cream border border-slate-100 hover:border-naturale-blue/40 transition-colors h-full">
                    <div className="flex items-center gap-2 text-naturale-blue font-extrabold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <BlurReveal delay={0.2}>
              <Link
                to="/a-naturale"
                className="inline-flex items-center gap-2 text-naturale-blue hover:text-naturale-marsala font-extrabold text-sm transition-colors pt-2"
              >
                Conheça nossa história e metodologia de atendimento
                <ArrowRight className="w-4 h-4" />
              </Link>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* VITRINE DE SOLUÇÕES / PRODUTOS EKO7 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <BlurReveal>
              <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-blue">
                Linha Autorizada Eko7
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
                Soluções em destaque para o seu descanso
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-naturale-blue hover:text-white text-naturale-slate font-extrabold text-sm shadow-sm border border-slate-200 transition-all"
              >
                Ver Catálogo Completo Eko7
                <ArrowRight className="w-4 h-4" />
              </Link>
            </BlurReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:border-naturale-blue/40 flex flex-col h-full group"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-naturale-marsala text-white text-[11px] font-extrabold shadow">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-naturale-blue">
                      {product.line}
                    </span>
                    <h3 className="text-lg font-extrabold text-naturale-slate mt-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">
                      {product.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {product.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-naturale-blue-light/70 text-naturale-blue-dark text-[10px] font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2.5 rounded-xl bg-naturale-cream hover:bg-naturale-blue hover:text-white text-naturale-slate font-extrabold text-xs transition-colors"
                    >
                      Ver Detalhes & Camadas
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PARCEIROS & CERTIFICAÇÕES */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Qualidade Comprovada • Parceiros e Certificações
            </p>
          </BlurReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Eko7 Oficial', sub: 'Revendedora Autorizada' },
              { title: 'Selo INMETRO', sub: 'Conformidade Certificada' },
              { title: 'Pró-Espuma', sub: 'Alta Resiliência e Durabilidade' },
              { title: 'Ergonomia Preventiva', sub: 'Suporte Ortopédico' },
            ].map((badge, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-naturale-cream border border-slate-100 justify-center">
                  <Award className="w-7 h-7 text-naturale-blue shrink-0" />
                  <div>
                    <p className="text-sm font-extrabold text-naturale-slate">{badge.title}</p>
                    <p className="text-[11px] text-slate-500">{badge.sub}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-marsala">
              Depoimentos Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
              Quem dorme em um Eko7 sente a diferença ao acordar
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <StaggerItem key={item.id}>
                <div className="bg-white rounded-3xl p-7 shadow-soft border border-white flex flex-col h-full">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-gradient-naturale text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-naturale-slate">{item.name}</p>
                      <p className="text-xs text-naturale-blue font-bold">{item.model}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <BlurReveal>
              <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-blue">
                Blog do Sono
              </span>
              <h2 className="text-3xl font-black text-naturale-slate mt-2">
                Conteúdos para cuidar da sua postura e descanso
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-naturale-blue hover:text-naturale-marsala font-extrabold text-sm"
              >
                Ver todos os artigos <ArrowRight className="w-4 h-4" />
              </Link>
            </BlurReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  to="/blog"
                  className="group block bg-naturale-cream rounded-3xl overflow-hidden border border-slate-100 hover:shadow-soft transition-all h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-extrabold uppercase text-naturale-marsala">
                      {post.category} • {post.readTime}
                    </span>
                    <h3 className="text-lg font-extrabold text-naturale-slate mt-2 group-hover:text-naturale-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PLUGIN INSTAGRAM */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-naturale text-white flex items-center justify-center shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-naturale-slate">@naturalecolchoes</h3>
                <p className="text-xs text-slate-500">Acompanhe nosso showroom, entregas e dicas no Instagram</p>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-naturale-rose/50 text-naturale-marsala font-extrabold text-xs hover:bg-naturale-rose-light transition-colors w-fit"
            >
              Seguir no Instagram <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: './images/hero-bedroom.jpg', caption: 'Conforto que transforma suas manhãs' },
              { img: './images/mattress-eko7.jpg', caption: 'Acabamento nobre e densidade progressiva Eko7' },
              { img: './images/showroom-naturale.jpg', caption: 'Venha fazer um test-drive no nosso showroom' },
              { img: './images/sleep-wellness.jpg', caption: 'Travesseiros ergonômicos para alinhamento cervical' },
            ].map((post, idx) => (
              <StaggerItem key={idx}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={post.img}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-white">
                    <Heart className="w-6 h-6 mb-2 text-naturale-rose fill-naturale-rose" />
                    <p className="text-xs font-bold">{post.caption}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BANNER CONVERSÃO FINAL */}
      <ConversionBanner />

      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[70] bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-naturale-slate rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
                <span className="font-extrabold text-sm">Apresentação Institucional — Naturale & Eko7</span>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center p-8 text-center text-slate-300">
                <Play className="w-14 h-14 text-naturale-blue mb-3 opacity-80" />
                <p className="font-bold text-white text-lg">Espaço reservado para o Vídeo Institucional</p>
                <p className="text-sm text-slate-400 max-w-md mt-2">
                  Substitua este placeholder pelo iframe do YouTube/Vimeo ou vídeo MP4 da Naturale Colchões.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
