import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  ParallaxImage,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { getWhatsAppLink } from '../data/siteData';

export const TeamPage: React.FC = () => {
  return (
    <PageTransition>
      {/* HERO / APRESENTAÇÃO DO REPRESENTANTE */}
      <section className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-naturale-stone">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Framed Portrait */}
            <BlurReveal className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border-4 border-white aspect-[4/4.4] bg-white max-w-md mx-auto">
                <img
                  src="./images/representante-retrato.jpg"
                  alt="Representante Oficial Naturale Colchões — Eko'7"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-2.5 rounded-xl flex items-center justify-between shadow-sm">
                  <span className="text-xs font-extrabold text-naturale-slate">
                    Representante Oficial Eko&apos;7®
                  </span>
                  <ShieldCheck className="w-4 h-4 text-naturale-marsala shrink-0" />
                </div>
              </div>
            </BlurReveal>

            {/* Personal Presentation Copy */}
            <BlurReveal delay={0.12} className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
                ATENDIMENTO DIRETO &amp; CONSULTIVO
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-naturale-slate leading-tight">
                Quem cuida do seu descanso na Naturale Colchões
              </h1>

              <p className="text-sm sm:text-base text-naturale-muted leading-relaxed">
                Na Naturale Colchões, você não fala com atendentes genéricos nem com robôs. Todo o atendimento — desde a primeira conversa até a escolha do modelo ideal e o pós-venda — é conduzido pessoalmente pelo nosso <strong className="text-naturale-slate">Representante Autorizado Eko&apos;7®</strong>.
              </p>

              <p className="text-sm sm:text-base text-naturale-muted leading-relaxed">
                Com conhecimento direto da fábrica e experiência prática na linha completa de sistemas de dormir terapêuticos Eko&apos;7®, a consultoria avalia seu biotipo, rotina e queixas posturais para indicar exatamente o colchão certo para a saúde da sua coluna.
              </p>

              {/* 3 Clean Trust Points */}
              <ul className="space-y-3 pt-1">
                {[
                  'Atendimento individualizado e sem pressa, presencial ou via WhatsApp',
                  "Conhecimento técnico direto da fábrica Eko'7® sobre cada camada e terapia",
                  'Acompanhamento próximo na entrega, montagem e adaptação em Santa Cruz do Sul e região',
                ].map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm font-bold text-naturale-slate"
                  >
                    <CheckCircle2 className="w-4 h-4 text-naturale-marsala shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-5 pt-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={getWhatsAppLink(
                    'Olá! Gostaria de falar diretamente com o representante da Naturale Colchões sobre os produtos Eko7.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white text-sm font-bold shadow-glow-marsala transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar diretamente no WhatsApp
                </motion.a>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-naturale-muted">
                  <MapPin className="w-4 h-4 text-naturale-marsala" />
                  Santa Cruz do Sul — RS
                </span>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* CONEXÃO DIRETA COM A FÁBRICA & SHOWROOM */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              PROCEDÊNCIA &amp; CONFIANÇA
            </p>
            <h2 className="text-3xl font-extrabold text-naturale-slate">
              Proximidade real com a fábrica Eko&apos;7® e nosso showroom
            </h2>
            <p className="text-sm text-naturale-muted">
              Garantia de produto original, certificação oficial e acompanhamento completo do início ao fim.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <BlurReveal className="md:col-span-7 rounded-2xl overflow-hidden shadow-soft aspect-[16/10]">
              <ParallaxImage
                src="./images/showroom-naturale.jpg"
                alt="Showroom Naturale Colchões"
                className="w-full h-full"
              />
            </BlurReveal>

            <BlurReveal delay={0.12} className="md:col-span-5 rounded-2xl overflow-hidden shadow-soft aspect-[4/3] md:aspect-auto relative">
              <img
                src="./images/representante-fabrica.jpg"
                alt="Representante Naturale Colchões na fábrica Eko'7"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold text-naturale-slate">
                <Award className="w-4 h-4 text-naturale-marsala shrink-0" />
                <span>Visita técnica direta na fábrica Eko&apos;7®</span>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      <ConversionBanner
        title="Agende seu atendimento personalizado na Naturale Colchões"
        ctaLabel="Falar com o representante"
      />
    </PageTransition>
  );
};
