'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBanner } from '@/components/CtaBanner';

interface ProjectsPageContentProps {
  lang: Language;
}

export const ProjectsPageContent: React.FC<ProjectsPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.projectsPage;

  const breadcrumbs = [
    {
      name: dict.nav.projects,
      href: `/${lang}/${lang === 'ro' ? 'proiecte' : 'projects'}`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-energy.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PORTOFOLIU DE SUCCES' : 'SUCCESS PORTFOLIO'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {data.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#222c3d] rounded-xl overflow-hidden border border-slate-700/80 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-bold uppercase">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                    {proj.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-800 space-y-2 text-xs text-gray-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-500" />
                        <span>{proj.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" />
                        <span>{proj.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-gold-400 font-semibold pt-1">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{proj.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
