import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  BlurReveal,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionPrimitives';
import { ConversionBanner } from '../components/ConversionBanner';
import { BLOG_POSTS } from '../data/siteData';

export const BlogPage: React.FC = () => {
  return (
    <PageTransition>
      {/* CLEAN EDITORIAL BLOG HEADER */}
      <section className="pt-28 md:pt-36 pb-14 px-4 sm:px-6 lg:px-8 bg-naturale-stone border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <BlurReveal>
            <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-naturale-marsala">
              BLOG DO SONO
            </p>
          </BlurReveal>
          <BlurReveal delay={0.06}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-naturale-slate tracking-tight">
              Dicas, cuidados e novidades
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.12}>
            <p className="text-sm sm:text-base text-naturale-muted leading-relaxed">
              Leituras rápidas sobre ergonomia, saúde da coluna e bem-estar para transformar a qualidade das suas noites.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* ULTRA-CLEAN 2-COLUMN EDITORIAL POSTS LIST — Opens dedicated /blog/:id page */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  to={`/blog/${post.id}`}
                  className="group flex flex-col h-full focus:outline-none"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-naturale-stone mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-naturale-slate group-hover:text-naturale-marsala leading-snug transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-naturale-muted mt-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-naturale-marsala mt-5 pb-1 border-b border-naturale-marsala/30 group-hover:border-naturale-marsala w-fit group-hover:gap-2.5 transition-all">
                    Ler artigo completo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ConversionBanner />
    </PageTransition>
  );
};
