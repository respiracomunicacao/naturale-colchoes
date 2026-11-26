import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
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
    interest: "Comprar colchão Eko'7 para minha casa",
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
        interest: "Comprar colchão Eko'7 para minha casa",
        message: '',
      });
    }, 400);
  };

  return (
    <PageTransition>
      {/* BANNER SUPERIOR */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-naturale-stone">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <BlurReveal>
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-naturale-marsala">
              FALE CONOSCO
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-naturale-slate max-w-3xl mx-auto">
              Estamos prontos para cuidar das suas noites
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.14}>
            <p className="text-naturale-muted text-sm sm:text-base max-w-2xl mx-auto">
              Tire dúvidas sobre a linha terapêutica Eko&apos;7®, solicite um orçamento ou agende seu atendimento exclusivo no nosso showroom em Santa Cruz do Sul.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* FORMULÁRIO + DADOS DE CONTATO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulário */}
          <BlurReveal className="lg:col-span-7">
            <div className="bg-naturale-stone rounded-2xl p-7 sm:p-10 border border-slate-200/70">
              <h2 className="text-2xl font-extrabold text-naturale-slate mb-1.5">
                Envie sua mensagem
              </h2>
              <p className="text-sm text-naturale-muted mb-6">
                Preencha os dados abaixo e um consultor do sono entrará em contato rapidamente.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-extrabold text-emerald-800">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-sm text-emerald-700">
                    Nossa equipe da Naturale Colchões retornará em breve pelo WhatsApp ou e-mail informado.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(51) 90000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Cidade / Bairro
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Santa Cruz do Sul"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Qual é o seu principal interesse?
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm"
                    >
                      <option>Comprar colchão Eko&apos;7 para minha casa</option>
                      <option>Trocar colchão por dores na coluna</option>
                      <option>Agendar test-drive no showroom</option>
                      <option>Orçamento de bases, cabeceiras ou travesseiros</option>
                      <option>Dúvidas gerais / Pós-venda</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre o modelo desejado ou sua necessidade..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-naturale-marsala focus:ring-2 focus:ring-naturale-rose/20 outline-none text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white font-bold text-sm shadow-soft transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitação
                  </motion.button>
                </form>
              )}
            </div>
          </BlurReveal>

          {/* Canais Diretos + Endereço da Empresa + Mapa */}
          <div className="lg:col-span-5 space-y-5">
            <StaggerContainer className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: 'Endereço da Empresa',
                  value: 'Rua Adalberto Wilke, 170',
                  sub: 'Santo Inácio — Santa Cruz do Sul — RS (CEP 96820-560)',
                  href: 'https://maps.google.com/?q=Rua+Adalberto+Wilke,+170,+Santo+In%C3%A1cio,+Santa+Cruz+do+Sul+-+RS',
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp Comercial',
                  value: '(51) 99779-5664',
                  sub: 'Clique para falar agora pelo WhatsApp',
                  href: getWhatsAppLink('Olá! Gostaria de atendimento da Naturale Colchões.'),
                },
                {
                  icon: Phone,
                  title: 'Telefone',
                  value: '(51) 99779-5664',
                  sub: 'Central de atendimento ao cliente',
                  href: 'tel:+5551997795664',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  value: 'contato@naturalecolchoes.com.br',
                  sub: 'Respondemos em até 24h úteis',
                  href: 'mailto:contato@naturalecolchoes.com.br',
                },
                {
                  icon: Clock,
                  title: 'Horário de Funcionamento',
                  value: 'Seg a Sex: 09h às 18h30',
                  sub: 'Sábados: 09h às 13h',
                  href: undefined,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const CardTag = item.href ? 'a' : 'div';
                return (
                  <StaggerItem key={idx}>
                    <CardTag
                      {...(item.href
                        ? {
                            href: item.href,
                            target: item.href.startsWith('http') ? '_blank' : undefined,
                            rel: 'noreferrer',
                          }
                        : {})}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-naturale-stone border border-slate-200/60 hover:border-naturale-rose transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-naturale-rose-light text-naturale-marsala flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                          {item.title}
                        </p>
                        <p className="text-sm sm:text-base font-extrabold text-naturale-slate mt-0.5">
                          {item.value}
                        </p>
                        <p className="text-xs text-naturale-muted">{item.sub}</p>
                      </div>
                    </CardTag>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Mapa Integrado com Detalhes do Endereço */}
            <BlurReveal delay={0.14} className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft bg-white">
              <iframe
                title="Mapa Naturale Colchões — Santa Cruz do Sul"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-52.455%2C-29.740%2C-52.400%2C-29.700&layer=mapnik&marker=-29.7175%2C-52.4260"
                className="w-full h-56 border-0 block"
                loading="lazy"
              />
              <div className="p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-naturale-rose-light text-naturale-marsala flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-naturale-slate">
                      Rua Adalberto Wilke, 170 — Bairro Santo Inácio
                    </p>
                    <p className="text-[11px] text-naturale-muted">
                      Santa Cruz do Sul — RS, CEP 96820-560
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+Adalberto+Wilke,+170,+Santo+In%C3%A1cio,+Santa+Cruz+do+Sul+-+RS"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-naturale-stone hover:bg-naturale-blue-light text-naturale-slate hover:text-naturale-blue text-xs font-bold transition-colors shrink-0"
                >
                  <span>Abrir no Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
