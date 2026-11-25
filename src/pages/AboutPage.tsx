import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck, Sparkles, Target } from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  ParallaxImage,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      {/* HERO BANNER */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <BlurReveal className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-naturale-marsala text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> A Naturale Colchões
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-naturale-slate leading-tight">
              Inovação, acolhimento e tecnologia a serviço do seu{' '}
              <span className="text-gradient-naturale">bem-estar diário</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Nascemos com o propósito de transformar a forma como as pessoas descansam. Como revendedora autorizada dos colchões terapêuticos <strong className="text-naturale-slate">Eko7</strong>, unimos ciência ergonômica e atendimento próximo para proporcionar noites verdadeiramente restauradoras.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.15} direction="left" className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[16/11]">
              <ParallaxImage
                src="./images/showroom-naturale.jpg"
                alt="Espaço Naturale Colchões"
                className="w-full h-full"
              />
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* HISTÓRIA EM ITENS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-blue">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
              Uma trajetória construída em torno da saúde do sono
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'O Propósito',
                desc: 'A Naturale Colchões surgiu da percepção de que escolher um colchão exige orientação técnica real — não apenas estética ou preço.',
              },
              {
                step: '02',
                title: 'Parceria Estratégica Eko7',
                desc: 'Escolhemos representar a Eko7 por ser referência nacional em densidade progressiva, certificação rigorosa e terapias integradas do sono.',
              },
              {
                step: '03',
                title: 'Atendimento Consultivo',
                desc: 'Cada cliente passa por um atendimento personalizado que avalia biotipo, postura ao dormir e necessidades específicas da coluna.',
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="p-7 rounded-3xl bg-naturale-cream border border-slate-100 h-full relative overflow-hidden group hover:border-naturale-blue/40 transition-colors">
                  <span className="text-5xl font-black text-naturale-blue/15 group-hover:text-naturale-blue/25 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-extrabold text-naturale-slate mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-marsala">
              Nossos Pilares
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
              Missão, Visão e Valores
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Missão',
                color: 'bg-naturale-blue-light text-naturale-blue',
                text: 'Promover saúde, longevidade e noites restauradoras por meio de sistemas de dormir terapêuticos Eko7 e consultoria especializada.',
              },
              {
                icon: Compass,
                title: 'Visão',
                color: 'bg-naturale-rose-light text-naturale-marsala',
                text: 'Ser a principal referência regional em consultoria do sono, ergonomia preventiva e experiência de compra humanizada.',
              },
              {
                icon: HeartHandshake,
                title: 'Valores',
                color: 'bg-naturale-blue-light text-naturale-blue',
                text: 'Ética, transparência técnica, cuidado genuíno com a saúde da coluna, excelência no pós-venda e compromisso com resultados reais.',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="bg-white rounded-3xl p-8 shadow-soft border border-white h-full">
                    <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-naturale-slate mb-3">{pillar.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* COMO FUNCIONA O ATENDIMENTO NATURALE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-blue">
              Metodologia Exclusiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
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
                title: 'Indicação Técnica Eko7',
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
                <div className="p-6 rounded-3xl bg-naturale-cream border border-slate-100 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-full bg-gradient-naturale text-white font-black text-base flex items-center justify-center shadow-md mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-naturale-slate mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <BlurReveal delay={0.15} className="mt-12 p-6 rounded-3xl bg-naturale-blue-light/60 border border-naturale-blue/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-naturale-blue shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-naturale-slate">
                  Garantia oficial de fábrica e certificação técnica Eko7
                </p>
                <p className="text-xs text-slate-600">
                  Todos os colchões contam com procedência garantida e suporte direto da Naturale.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-naturale-marsala shrink-0">
              <Award className="w-4 h-4" /> Revenda Oficial
            </div>
          </BlurReveal>
        </div>
      </section>

      <ConversionBanner />
    </PageTransition>
  );
};
