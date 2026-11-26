import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Target,
} from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  ParallaxImage,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { getWhatsAppLink } from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      {/* HERO BANNER */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-naturale-stone">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <BlurReveal className="lg:col-span-6 space-y-4">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-naturale-marsala">
              A NATURALE COLCHÕES
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-naturale-slate leading-tight">
              Inovação, acolhimento e tecnologia a serviço do seu bem-estar
            </h1>
            <p className="text-naturale-muted text-sm sm:text-base leading-relaxed">
              Nascemos com o propósito de transformar a forma como as pessoas descansam. Como distribuidor autorizado dos sistemas de dormir terapêuticos <strong className="text-naturale-slate">Eko&apos;7®</strong>, unimos ciência ergonômica e atendimento consultivo em Santa Cruz do Sul para proporcionar noites verdadeiramente restauradoras.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.12} direction="left" className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-soft border border-white aspect-[16/10]">
              <ParallaxImage
                src="./images/showroom-naturale.jpg"
                alt="Showroom Naturale Colchões"
                className="w-full h-full"
              />
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* HISTÓRIA EM ITENS */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="max-w-2xl mb-12 space-y-2">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-naturale-marsala">
              NOSSA HISTÓRIA
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate">
              Uma trajetória construída em torno da saúde do sono
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'O Propósito',
                desc: 'A Naturale Colchões surgiu da percepção de que escolher um colchão exige orientação técnica real — avaliando postura, biotipo e saúde da coluna.',
              },
              {
                step: '02',
                title: "Parceria Oficial Eko'7®",
                desc: "Há 10 anos representamos a Eko'7® por ser referência nacional em densidade progressiva, certificação rigorosa e terapias integradas do sono.",
              },
              {
                step: '03',
                title: 'Atendimento Consultivo',
                desc: 'Cada cliente recebe acompanhamento próximo desde a escolha no showroom até a entrega agendada e adaptação em casa.',
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="p-7 rounded-2xl bg-naturale-stone border border-slate-200/60 h-full hover:border-naturale-rose transition-colors">
                  <span className="text-4xl font-black text-naturale-rose/60">{item.step}</span>
                  <h3 className="text-lg font-extrabold text-naturale-slate mt-2 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-naturale-muted leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* QUEM CUIDA DO SEU DESCANSO — ATENDIMENTO DIRETO & CONSULTIVO */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-naturale-stone border-t border-slate-200/60">
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

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-naturale-slate leading-tight">
                Quem cuida do seu descanso na Naturale Colchões
              </h2>

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

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-naturale-stone">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-naturale-marsala">
              NOSSOS PILARES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate">
              Missão, Visão e Valores
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Missão',
                text: "Promover saúde, longevidade e noites restauradoras por meio de sistemas de dormir terapêuticos Eko'7® e consultoria especializada.",
              },
              {
                icon: Compass,
                title: 'Visão',
                text: 'Ser a principal referência regional em consultoria do sono, ergonomia preventiva e experiência de compra humanizada.',
              },
              {
                icon: HeartHandshake,
                title: 'Valores',
                text: 'Ética, transparência técnica, cuidado genuíno com a saúde da coluna, excelência no pós-venda e compromisso com resultados reais.',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 h-full">
                    <div className="w-11 h-11 rounded-xl bg-naturale-rose-light text-naturale-marsala flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-extrabold text-naturale-slate mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-naturale-muted leading-relaxed">{pillar.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO NATURALE */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-naturale-marsala">
              METODOLOGIA EXCLUSIVA
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-naturale-slate">
              Como funciona o atendimento Naturale
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Diagnóstico do Sono',
                desc: 'Ouvimos suas queixas, posição ao dormir, peso e rotina para mapear a necessidade real da sua coluna.',
              },
              {
                num: '2',
                title: "Indicação Técnica Eko'7",
                desc: 'Apresentamos os modelos com a densidade progressiva e as terapias exatas para o seu perfil.',
              },
              {
                num: '3',
                title: 'Experimentação Guiada',
                desc: 'Você testa o conforto, a vibromassagem e o acabamento no nosso showroom com tranquilidade.',
              },
              {
                num: '4',
                title: 'Entrega & Pós-Venda',
                desc: 'Entrega agendada, montagem cuidadosa e acompanhamento próximo da sua adaptação.',
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="p-6 rounded-2xl bg-naturale-stone border border-slate-200/60 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-naturale-marsala text-white font-extrabold text-sm flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-base font-extrabold text-naturale-slate mb-2">{step.title}</h3>
                  <p className="text-xs text-naturale-muted leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <BlurReveal
            delay={0.15}
            className="mt-12 p-6 rounded-2xl bg-naturale-rose-band flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-naturale-marsala shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-naturale-slate">
                  Garantia oficial de fábrica e certificação técnica Eko&apos;7®
                </p>
                <p className="text-xs text-naturale-muted">
                  Todos os colchões contam com procedência garantida e suporte direto da Naturale.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-naturale-marsala shrink-0">
              <Award className="w-4 h-4" /> Distribuidor Oficial
            </div>
          </BlurReveal>
        </div>
      </section>

      <ConversionBanner />
    </PageTransition>
  );
};
