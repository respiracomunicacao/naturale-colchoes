import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Clock, Search, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { BLOG_POSTS, BlogPost } from '../data/siteData';

const BLOG_CATEGORIES = [
  'Todos',
  'Saúde da Coluna',
  'Tecnologias do Sono',
  'Guia de Compras',
  'Dicas de Postura',
];

export const BlogPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = category === 'Todos' || post.category === category;
      const matchText =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchText;
    });
  }, [search, category]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <PageTransition>
      {/* BANNER SUPERIOR */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-naturale-blue text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-naturale-marsala" /> Blog do Sono
            </span>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl font-black text-naturale-slate max-w-3xl mx-auto">
              Conteúdos para você{' '}
              <span className="text-gradient-naturale">dormir e viver melhor</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.14}>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Artigos sobre ergonomia, saúde vertebral, tecnologias terapêuticas Eko7 e cuidados para prolongar a vida útil do seu colchão.
            </p>
          </BlurReveal>

          {/* Search & Category Controls */}
          <BlurReveal delay={0.2} className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar artigos sobre postura, densidade, magnetoterapia..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 focus:border-naturale-blue focus:ring-2 focus:ring-naturale-blue/20 outline-none text-sm shadow-sm"
              />
            </div>
          </BlurReveal>

          <BlurReveal delay={0.24} className="flex flex-wrap justify-center gap-2 pt-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                  category === cat
                    ? 'bg-naturale-blue text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-naturale-blue border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </BlurReveal>
        </div>
      </section>

      {/* GRADE DE ARTIGOS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  whileHover={{ y: -5 }}
                  onClick={() => setActivePost(post)}
                  className="cursor-pointer bg-naturale-cream rounded-3xl overflow-hidden border border-slate-100 hover:border-naturale-blue/40 hover:shadow-soft transition-all flex flex-col h-full group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
                      <span className="px-3 py-1 rounded-full bg-naturale-rose-light text-naturale-marsala font-extrabold">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-naturale-slate group-hover:text-naturale-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-extrabold text-naturale-blue">
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-bold">
              Nenhum artigo encontrado para "{search}".
            </div>
          )}

          {/* NEWSLETTER */}
          <BlurReveal className="mt-16 p-8 sm:p-10 rounded-3xl bg-naturale-blue-light/60 border border-naturale-blue/20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-naturale-slate">
              Receba dicas de ergonomia e bem-estar no seu e-mail
            </h3>
            <p className="text-sm text-slate-600 mt-2 mb-6">
              Sem spam — apenas conteúdos úteis sobre sono reparador e novidades da linha Eko7.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                Inscrição confirmada! Em breve você receberá nossas dicas.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor e-mail"
                  className="flex-1 px-5 py-3 rounded-full bg-white border border-slate-200 outline-none focus:border-naturale-blue text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-naturale-blue hover:bg-naturale-blue-dark text-white font-extrabold text-sm shadow-glow-blue transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            )}
          </BlurReveal>
        </div>
      </section>

      <ConversionBanner />

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-60">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-naturale-rose-light"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-7 sm:p-9 space-y-4">
                <div className="flex items-center gap-3 text-xs font-extrabold">
                  <span className="px-3 py-1 rounded-full bg-naturale-rose-light text-naturale-marsala">
                    {activePost.category}
                  </span>
                  <span className="text-slate-400">
                    {activePost.date} • {activePost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-naturale-slate leading-tight">
                  {activePost.title}
                </h2>
                <div className="space-y-4 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activePost.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
