import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, MessageCircle, Users } from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  ParallaxImage,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { TEAM_MEMBERS, getWhatsAppLink } from '../data/siteData';

export const TeamPage: React.FC = () => {
  return (
    <PageTransition>
      {/* BANNER SUPERIOR */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-naturale-blue text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Users className="w-3.5 h-3.5 text-naturale-marsala" /> Equipe & Showroom
            </span>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl font-black text-naturale-slate max-w-3xl mx-auto">
              Consultores dedicados à saúde do seu{' '}
              <span className="text-gradient-naturale">descanso</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Conheça o nosso espaço acolhedor de experimentação e os especialistas prontos para orientar você na escolha do sistema de dormir Eko7 perfeito.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* GALERIA DE FOTOS DA SEDE / SHOWROOM */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="flex items-center gap-2 mb-8">
            <Building2 className="w-5 h-5 text-naturale-blue" />
            <h2 className="text-2xl sm:text-3xl font-black text-naturale-slate">
              Nosso Showroom & Espaço de Experimentação
            </h2>
          </BlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BlurReveal className="md:col-span-7 rounded-3xl overflow-hidden shadow-lg aspect-[16/10]">
              <ParallaxImage
                src="./images/showroom-naturale.jpg"
                alt="Showroom principal Naturale Colchões"
                className="w-full h-full"
              />
            </BlurReveal>
            <div className="md:col-span-5 grid grid-rows-2 gap-6">
              <BlurReveal delay={0.1} className="rounded-3xl overflow-hidden shadow-lg aspect-[16/9] md:aspect-auto">
                <img
                  src="./images/mattress-eko7.jpg"
                  alt="Demonstração de modelos Eko7"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </BlurReveal>
              <BlurReveal delay={0.18} className="rounded-3xl overflow-hidden shadow-lg aspect-[16/9] md:aspect-auto">
                <img
                  src="./images/sleep-wellness.jpg"
                  alt="Área de travesseiros e acessórios"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </BlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE: FOTO + SETOR + FUNÇÃO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <div className="max-w-7xl mx-auto">
          <BlurReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-naturale-marsala">
              Atendimento Especializado
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-naturale-slate mt-2">
              Nossa Equipe de Consultoria
            </h2>
          </BlurReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-soft border border-white flex flex-col h-full group"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full glass-card text-naturale-blue text-xs font-extrabold">
                      {member.department}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-naturale-slate">{member.name}</h3>
                    <p className="text-xs font-extrabold text-naturale-marsala mt-0.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">
                      {member.bio}
                    </p>
                    <a
                      href={getWhatsAppLink(
                        `Olá! Gostaria de falar com ${member.name} (${member.role}) na Naturale Colchões.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-naturale-blue-light hover:bg-naturale-blue text-naturale-blue hover:text-white font-extrabold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar com este especialista
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ConversionBanner
        title="Agende uma visita exclusiva ao nosso showroom"
        subtitle="Venha experimentar pessoalmente o conforto da densidade progressiva e das terapias Eko7 com acompanhamento de nossos especialistas."
        ctaLabel="Agendar Visita no WhatsApp"
        secondaryLabel="Ver Localização"
        secondaryTo="/contato"
      />
    </PageTransition>
  );
};
