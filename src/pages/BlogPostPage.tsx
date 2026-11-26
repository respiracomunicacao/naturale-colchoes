import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BlurReveal, PageTransition } from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { BLOG_POSTS } from '../data/siteData';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <PageTransition>
      <article className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Back to Blog */}
          <BlurReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-naturale-muted hover:text-naturale-marsala transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>
          </BlurReveal>

          {/* Title + Subtitle */}
          <BlurReveal delay={0.05} className="space-y-4 mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-naturale-slate leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-naturale-muted leading-relaxed">
              {post.excerpt}
            </p>
          </BlurReveal>

          {/* Large Clean Editorial Cover Image */}
          <BlurReveal delay={0.1} className="mb-12">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-naturale-stone shadow-soft">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </BlurReveal>

          {/* Comfortable Article Reading Body */}
          <BlurReveal delay={0.14}>
            <div className="space-y-6 text-base sm:text-[17px] text-naturale-slate/85 leading-[1.85]">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </BlurReveal>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-naturale-stone border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-extrabold text-naturale-slate">
              Continue lendo
            </h2>
            <Link
              to="/blog"
              className="text-xs font-extrabold text-naturale-marsala hover:underline"
            >
              Ver todos os artigos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/60 hover:shadow-soft transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-naturale-stone">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-naturale-slate group-hover:text-naturale-marsala leading-snug transition-colors">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-naturale-marsala mt-3">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConversionBanner />
    </PageTransition>
  );
};
