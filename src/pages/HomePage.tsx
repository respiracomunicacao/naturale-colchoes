import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ExternalLink,
  Instagram,
  MessageCircle,
  Play,
  ShieldCheck,
  Trophy,
  Truck,
  X,
} from 'lucide-react';
import {
  AnimatedCounter,
  BlurReveal,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { ProductModal } from '../components/ProductModal';
import {
  BLOG_POSTS,
  TESTIMONIALS,
  getWhatsAppLink,
  INSTAGRAM_URL,
} from '../data/siteData';
import { EKO7_PRODUCTS, Eko7Product } from '../data/eko7Catalog';

const INSTAGRAM_POSTS = [
  {
    img: './images/instagram-1.jpg',
    caption: 'Consultoria e demonstração personalizada dos colchões terapêuticos Eko\'7® no nosso showroom.',
  },
  {
    img: './images/instagram-2.jpg',
    caption: 'Reconhecimento Top 7 Internacional Eko\'7® — Compromisso e dedicação com nossos clientes.',
  },
  {
    img: './images/instagram-3.jpg',
    caption: 'Durabilidade, alinhamento da coluna e conforto articular: os colchões Eko\'7® têm!',
  },
];

interface AwardPhoto {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const AWARD_PHOTOS: AwardPhoto[] = [
  {
    id: 'entrega-palco',
    title: 'Entrega do Troféu no Palco',
    subtitle: 'Convenção Internacional Eko\'7®',
    image: './images/premio-palco-oficial.jpg',
  },
  {
    id: 'trofeu-detalhe',
    title: 'Troféu Top 7 Internacional',
    subtitle: '3º Lugar — Reconhecimento Oficial',
    image: './images/premio-trofeu-eko7.jpg',
  },
  {
    id: 'convencao-stage',
    title: 'Convenção Oficial Eko\'7®',
    subtitle: 'Palco e Celebração dos Premiados',
    image: './images/premio-convencao-stage.jpg',
  },
];

export const HomePage: React.FC = () => {
  const [carouselPage, setCarouselPage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Eko7Product | null>(null);
  const [selectedAwardPhoto, setSelectedAwardPhoto] = useState<AwardPhoto | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  // 6 showcase items shown 3 at a time (real official Eko'7 models)
  const showcaseProducts = EKO7_PRODUCTS.filter((p) => p.category === 'colchao').slice(0, 6);
  const totalCarouselPages = Math.ceil(showcaseProducts.length / 3);
  const visibleProducts = showcaseProducts.slice(carouselPage * 3, carouselPage * 3 + 3);

  const handlePrevProducts = () => {
    setCarouselPage((prev) => (prev === 0 ? totalCarouselPages - 1 : prev - 1));
  };

  const handleNextProducts = () => {
    setCarouselPage((prev) => (prev === totalCarouselPages - 1 ? 0 : prev + 1));
  };

  return (
    <PageTransition>
      {/* 1. HERO SECTION — Airy, serene, full-width editorial banner */}
      <section className="relative pt-24 md:pt-28 overflow-hidden bg-[#F5F1EE]">
        <div className="relative min-h-[540px] lg:min-h-[630px] flex items-center">
          <img
            src="./images/hero-bedroom.jpg"
            alt="Conforto e qualidade para seu bem-estar — Naturale Colchões"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Soft editorial left scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2EE] via-[#F6F2EE]/90 to-transparent lg:via-[#F6F2EE]/70" />

          {/* Delicate decorative curved arc in Azul Naturale (#6B9DD3) */}
          <svg
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
            className="hidden lg:block absolute left-[43%] top-1/2 -translate-y-1/2 h-[120%] w-auto pointer-events-none select-none opacity-85"
          >
            <motion.path
              initial={{ opacity: 0, pathLength: 0.01 } as any}
              animate={{ opacity: 1, pathLength: 1 } as any}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              d="M160 20 C40 160, 40 440, 180 580"
              stroke="#6B9DD3"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
            <div className="max-w-xl space-y-6">
              <BlurReveal delay={0.05}>
                <p className="text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase text-naturale-slate/75">
                  REVENDEDOR AUTORIZADO EKO&apos;7®
                </p>
              </BlurReveal>

              <BlurReveal delay={0.12}>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-naturale-slate leading-[1.12] tracking-tight">
                  Conforto e qualidade para seu bem-estar
                </h1>
              </BlurReveal>

              <BlurReveal delay={0.18}>
                <p className="text-base sm:text-lg text-naturale-muted leading-relaxed max-w-md">
                  Sistemas de dormir terapêuticos e ortopédicos com densidade progressiva e consultoria personalizada para o seu biotipo.
                </p>
              </BlurReveal>

              <BlurReveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-7 pt-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/produtos"
                      className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white text-sm font-bold shadow-glow-marsala transition-colors"
                    >
                      Conheça os produtos
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  <a
                    href={getWhatsAppLink(
                      'Olá! Gostaria de falar com o consultor da Naturale Colchões.'
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-naturale-slate hover:text-naturale-marsala border-b border-naturale-slate/40 hover:border-naturale-marsala pb-1 transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 text-naturale-marsala" />
                    Fale com o consultor
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COUNTERS STRIP — Generous spacing with thin vertical dividers */}
      <section className="bg-naturale-stone border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x divide-slate-300/60">
            {[
              {
                num: 10,
                prefix: '',
                unit: ' anos',
                label: "Distribuidor Eko'7",
                highlight: true,
              },
              {
                num: 2500,
                prefix: '+',
                unit: '',
                label: 'Clientes atendidos',
                highlight: false,
              },
              {
                num: 1800,
                prefix: '+',
                unit: '',
                label: 'Lares com mais conforto',
                highlight: false,
              },
              {
                num: 15,
                prefix: '+',
                unit: '',
                label: 'Modelos e soluções',
                highlight: false,
              },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="px-4 sm:px-8 text-center flex flex-col items-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-[42px] font-black tracking-tight text-naturale-blue flex items-baseline">
                      {item.prefix && (
                        <span className="text-naturale-marsala font-black">{item.prefix}</span>
                      )}
                      <AnimatedCounter target={item.num} />
                    </span>
                    {item.unit && (
                      <span className="text-xl sm:text-2xl font-extrabold text-naturale-slate">
                        {item.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-naturale-muted mt-2">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. DESTAQUES EKO'7® — Spacious 3-column luxury showroom showcase (inspired by saudecolchoes.com.br) */}
      <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              NOSSAS SOLUÇÕES • LINHA EKO&apos;7®
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate tracking-tight">
              Destaques em Conforto Terapêutico
            </h2>
            <p className="text-sm sm:text-base text-naturale-muted leading-relaxed">
              Conheça os modelos mais procurados com densidade progressiva e tecnologias integradas para o alinhamento da coluna.
            </p>
          </BlurReveal>

          {/* 3-Column Spacious Borderless Showcase with Carousel Controls */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselPage}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* Large clean 1:1 / 4:3 editorial photo — zero heavy borders */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-naturale-stone mb-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = './images/eko7/colchao-vienna.png';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Centered minimal title + whisper-thin hairline divider */}
                    <div className="text-center px-2 pb-6 border-b border-slate-200/80 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-naturale-marsala mb-1.5">
                          {product.categoryLabel}
                        </p>
                        <h3 className="text-xl font-extrabold text-naturale-slate group-hover:text-naturale-marsala transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-naturale-muted mt-2 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-naturale-marsala mt-5 group-hover:gap-2.5 transition-all">
                        Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Clean Carousel Navigation + CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevProducts}
                  aria-label="Modelos anteriores"
                  className="w-11 h-11 rounded-full border border-slate-300 hover:border-naturale-marsala text-slate-600 hover:text-naturale-marsala flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextProducts}
                  aria-label="Próximos modelos"
                  className="w-11 h-11 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white flex items-center justify-center shadow-sm transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-400 pl-2">
                  {carouselPage + 1} / {totalCarouselPages}
                </span>
              </div>

              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-naturale-slate hover:text-naturale-marsala border-b border-naturale-slate/40 hover:border-naturale-marsala pb-1 transition-colors group"
              >
                Conheça o catálogo de produtos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE TRUST STRIP — 4 Thin-Stroke Circular Icons (inspired by saudecolchoes.com.br) */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-naturale-stone border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: MessageCircle,
                title: 'Orçamento na Hora',
                desc: 'Converse agora com um especialista e receba indicação sob medida.',
              },
              {
                icon: CreditCard,
                title: 'Condições Facilitadas',
                desc: 'Parcelamento especial pensado para o seu investimento em saúde.',
              },
              {
                icon: Truck,
                title: 'Entrega Assistida',
                desc: 'Agendamento cuidadoso e montagem dedicada diretamente no seu lar.',
              },
              {
                icon: ShieldCheck,
                title: "Garantia Oficial Eko'7®",
                desc: 'Até 10 anos de garantia estrutural com procedência certificada.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <a
                    href={getWhatsAppLink(
                      `Olá! Gostaria de saber mais sobre: ${item.title} na Naturale Colchões.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-full border border-naturale-marsala/35 bg-white text-naturale-marsala group-hover:bg-naturale-marsala group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.6]" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-extrabold text-naturale-slate group-hover:text-naturale-marsala transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-naturale-muted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. A NATURALE — Generous 2-column editorial story + video */}
      <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <BlurReveal className="lg:col-span-5 space-y-6">
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              A NATURALE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate leading-tight">
              Especialista em conforto, ergonomia e bem-estar
            </h2>
            <p className="text-base text-naturale-muted leading-relaxed">
              Na Naturale Colchões, cada atendimento é consultivo e humano. Avaliamos seu biotipo, postura e rotina para indicar o sistema de dormir Eko&apos;7® ideal — aliviando dores lombares e devolvendo disposição às suas manhãs.
            </p>
            <div className="pt-2">
              <Link
                to="/a-naturale"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-naturale-slate hover:text-naturale-marsala border-b border-naturale-slate/40 hover:border-naturale-marsala pb-1 transition-colors group"
              >
                Conheça a nossa história
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.12} direction="left" className="lg:col-span-7">
            <div
              onClick={() => setVideoOpen(true)}
              className="relative rounded-2xl overflow-hidden shadow-soft aspect-[16/9] cursor-pointer group bg-naturale-stone"
            >
              <img
                src="./images/showroom-naturale.jpg"
                alt="Showroom Naturale Colchões"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full border-2 border-white/90 bg-white/15 backdrop-blur-sm flex items-center justify-center text-white shadow-lg"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </motion.div>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* 6. PARCEIRO OFICIAL EKO'7® — PREMIAÇÃO TOP 7 INTERNACIONAL */}
      <section className="py-16 lg:py-20 bg-naturale-blue text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header com Logo Eko'7 em destaque limpo e relato direto do prêmio */}
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            {/* Logo Eko'7 oficial visível em branco puro */}
            <div className="flex items-center justify-center gap-3">
              <img
                src="./logos/eko7.svg"
                alt="Eko'7 — Diga sim à vida"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Top 7 Internacional Eko&apos;7® — 3º Lugar
            </h2>

            <p className="text-sm sm:text-base text-white/95 leading-relaxed">
              Reconhecimento oficial recebido na Convenção Internacional da Eko&apos;7®, consagrando a Naturale Colchões com o 3º lugar pelo compromisso e excelência no atendimento aos nossos clientes.
            </p>
          </BlurReveal>

          {/* Galeria de Fotos dos Prêmios com Enquadramento Aperfeiçoado (sem cortes) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARD_PHOTOS.map((item) => (
              <StaggerItem key={item.id}>
                <div
                  onClick={() => setSelectedAwardPhoto(item)}
                  className="group cursor-pointer rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 p-3.5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between"
                >
                  {/* Photo Container com aspect-[4/5] e object-cover object-top para enquadramento perfeito das pessoas e troféu */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900/20 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = './images/instagram-2.jpg';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    <span className="absolute bottom-3 right-3 p-2 rounded-full bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Legenda simples e direta */}
                  <div className="pt-3 px-1 text-center">
                    <h3 className="text-base font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/85 mt-0.5 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA para falar com o especialista premiado na cor vermelha/marsala institucional */}
          <div className="mt-12 text-center">
            <a
              href={getWhatsAppLink(
                "Olá! Gostaria de falar com o especialista premiado da Naturale Colchões para saber mais sobre os colchões Eko'7®."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o especialista premiado
            </a>
          </div>
        </div>

        {/* Modal de Zoom da Foto em Alta Resolução */}
        <AnimatePresence>
          {selectedAwardPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAwardPhoto(null)}
              className="fixed inset-0 z-[75] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedAwardPhoto(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[4/5] max-h-[70vh] bg-slate-900 flex items-center justify-center">
                  <img
                    src={selectedAwardPhoto.image}
                    alt={selectedAwardPhoto.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 text-center bg-white space-y-1">
                  <h3 className="text-xl font-extrabold text-naturale-slate">
                    {selectedAwardPhoto.title}
                  </h3>
                  <p className="text-sm font-semibold text-naturale-marsala">
                    {selectedAwardPhoto.subtitle}
                  </p>
                  <p className="text-xs text-naturale-muted pt-1">
                    Premiação oficial recebida na Convenção Internacional Eko&apos;7®
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 7. DEPOIMENTOS — 3 Testimonials with small client photo + client name */}
      <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              DEPOIMENTOS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate">
              O que nossos clientes dizem
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => {
              const avatarImages = [
                './images/team-2.jpg',
                './images/team-1.jpg',
                './images/team-3.jpg',
              ];
              return (
                <StaggerItem key={item.id}>
                  <div className="bg-naturale-stone rounded-2xl p-8 border border-slate-200/60 flex flex-col justify-between h-full">
                    <div>
                      <span
                        aria-hidden="true"
                        className="block text-5xl font-serif leading-none text-naturale-rose/80 select-none mb-2"
                      >
                        &ldquo;
                      </span>
                      <p className="text-sm sm:text-[15px] text-naturale-slate/85 leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 mt-7 pt-5 border-t border-slate-200/80">
                      <img
                        src={avatarImages[idx % avatarImages.length]}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover object-top border-2 border-white shadow-sm shrink-0"
                      />
                      <div>
                        <p className="text-sm font-extrabold text-naturale-slate leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs font-semibold text-naturale-marsala mt-0.5">
                          {item.model}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. BLOG — Azul Naturale Brand Background + 3 Crisp Editorial Cards */}
      <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-naturale-blue">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-white/85">
              BLOG DO SONO
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Dicas, cuidados e novidades
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-naturale-stone">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-extrabold text-naturale-slate group-hover:text-naturale-marsala leading-snug transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-naturale-muted mt-2.5 line-clamp-2 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-naturale-marsala mt-4 group-hover:gap-2.5 transition-all">
                      Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. INSTAGRAM — Feed com Posts Oficiais @naturale_colchoes */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-naturale-rose-light text-naturale-marsala mb-1">
              <Instagram className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              SIGA NO INSTAGRAM
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-naturale-marsala transition-colors"
              >
                @naturale_colchoes
              </a>
            </h2>
            <p className="text-sm text-naturale-muted">
              Acompanhe novidades, bastidores do showroom e dicas de sono reparador em nosso perfil oficial.
            </p>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <StaggerItem key={idx}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-naturale-stone shadow-soft border border-slate-100"
                >
                  <img
                    src={post.img}
                    alt={post.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 text-xs font-bold text-naturale-rose mb-2">
                      <Instagram className="w-4 h-4" />
                      <span>@naturale_colchoes</span>
                    </div>
                    <p className="text-sm font-bold leading-snug line-clamp-3">{post.caption}</p>
                    <span className="text-[11px] font-extrabold text-white/90 uppercase tracking-wider mt-3 inline-flex items-center gap-1 group-hover:underline">
                      Ver no Instagram →
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <BlurReveal delay={0.1} className="text-center mt-12">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white text-xs font-extrabold uppercase tracking-widest shadow-glow-marsala transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              Siga @naturale_colchoes no Instagram
            </a>
          </BlurReveal>
        </div>
      </section>

      {/* 10. AZUL NATURALE CONVERSION BANNER */}
      <ConversionBanner />

      {/* PRODUCT LAYER MODAL */}
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
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-naturale-slate rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
                <span className="font-bold text-sm">
                  Apresentação Institucional — Naturale Colchões & Eko&apos;7®
                </span>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center p-8 text-center text-slate-300">
                <Play className="w-14 h-14 text-naturale-rose mb-3 opacity-90" />
                <p className="font-bold text-white text-lg">
                  Espaço reservado para o Vídeo Institucional
                </p>
                <p className="text-sm text-slate-400 max-w-md mt-2">
                  Substitua este placeholder pelo vídeo oficial da Naturale Colchões assim que estiver pronto.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
