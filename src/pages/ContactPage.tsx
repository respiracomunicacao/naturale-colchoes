import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { getWhatsAppLink } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    interest: 'Comprar colchão Eko7 para minha casa',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        city: '',
        interest: 'Comprar colchão Eko7 para minha casa',
        message: '',
      });
    }, 400);
  };

  return (
    <PageTransition>
      {/* BANNER SUPERIOR */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-naturale-blue text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 text-naturale-marsala" /> Fale Conosco
            </span>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl font-black text-naturale-slate max-w-3xl mx-auto">
              Estamos prontos para cuidar das{' '}
              <span className="text-gradient-naturale">suas noites</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Tire dúvidas sobre a linha terapêutica Eko7, solicite um orçamento ou agende seu atendimento exclusivo no showroom da Naturale Colchões.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* FORMULÁRIO + DADOS DE CONTATO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulário */}
          <BlurReveal className="lg:col-span-7">
            <div className="bg-naturale-cream rounded-3xl p-7 sm:p-10 border border-slate-100 shadow-soft">
              <h2 className="text-2xl font-black text-naturale-slate mb-2">
                Envie sua mensagem
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Preencha os dados abaixo e um consultor do sono entrará em contato rapidamente.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-black text-emerald-800">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-sm text-emerald-700">
                    Nossa equipe de consultores da Naturale Colchões retornará em breve pelo WhatsApp ou e-mail informado.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-extrabold"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(00) 90000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                        Cidade / Bairro
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Sua cidade"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Qual é o seu principal interesse?
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm"
                    >
                      <option>Comprar colchão Eko7 para minha casa</option>
                      <option>Trocar colchão por dores na coluna</option>
                      <option>Agendar test-drive no showroom</option>
                      <option>Orçamento de bases, cabeceiras ou travesseiros</option>
                      <option>Dúvidas gerais / Pós-venda</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre o modelo desejado ou sua necessidade..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white font-extrabold text-sm shadow-glow-blue transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitação
                  </motion.button>
                </form>
              )}
            </div>
          </BlurReveal>

          {/* Canais Diretos + Horários */}
          <div className="lg:col-span-5 space-y-5">
            <StaggerContainer className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp Comercial',
                  value: '(47) 99999-9999',
                  sub: 'Atendimento rápido com consultor',
                  href: getWhatsAppLink('Olá! Gostaria de atendimento da Naturale Colchões.'),
                  color: 'bg-emerald-50 text-emerald-600',
                },
                {
                  icon: Phone,
                  title: 'Telefone Fixo',
                  value: '(47) 3000-0000',
                  sub: 'Central de atendimento ao cliente',
                  href: 'tel:+554730000000',
                  color: 'bg-naturale-blue-light text-naturale-blue',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  value: 'contato@naturalecolchoes.com.br',
                  sub: 'Respondemos em até 24h úteis',
                  href: 'mailto:contato@naturalecolchoes.com.br',
                  color: 'bg-naturale-rose-light text-naturale-marsala',
                },
                {
                  icon: Clock,
                  title: 'Horário de Funcionamento',
                  value: 'Seg a Sex: 09h às 18h30',
                  sub: 'Sábados: 09h às 13h',
                  href: undefined,
                  color: 'bg-slate-100 text-slate-600',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const CardTag = item.href ? 'a' : 'div';
                return (
                  <StaggerItem key={idx}>
                    <CardTag
                      {...(item.href
                        ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
                        : {})}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-naturale-cream border border-slate-100 hover:border-naturale-blue/40 transition-colors"
                    >
                      <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                          {item.title}
                        </p>
                        <p className="text-base font-extrabold text-naturale-slate mt-0.5">
                          {item.value}
                        </p>
                        <p className="text-xs text-slate-500">{item.sub}</p>
                      </div>
                    </CardTag>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Mapa Integrado */}
            <BlurReveal delay={0.15} className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-naturale-slate text-white px-5 py-3 flex items-center gap-2 text-xs font-extrabold">
                <MapPin className="w-4 h-4 text-naturale-rose" />
                Localização do Showroom (Mapa Integrado)
              </div>
              <iframe
                title="Mapa Naturale Colchões"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-49.15%2C-26.55%2C-48.95%2C-26.40&layer=mapnik"
                className="w-full h-52 border-0"
                loading="lazy"
              />
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* BANNER TRABALHE CONOSCO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-naturale-cream">
        <BlurReveal className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-naturale-rose/30 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-naturale-rose-light text-naturale-marsala flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-naturale-slate">
                  Trabalhe Conosco na Naturale Colchões
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Tem paixão por atendimento consultivo e bem-estar? Envie seu currículo para fazer parte da nossa equipe de consultores do sono.
                </p>
              </div>
            </div>
            <a
              href="mailto:rh@naturalecolchoes.com.br?subject=Currículo%20-%20Naturale%20Colchões"
              className="px-6 py-3 rounded-full bg-naturale-marsala hover:bg-naturale-marsala-dark text-white font-extrabold text-sm shadow-glow-marsala transition-colors shrink-0"
            >
              Enviar Currículo
            </a>
          </div>
        </BlurReveal>
      </section>
    </PageTransition>
  );
};
