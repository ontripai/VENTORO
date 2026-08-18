'use client';

import React from 'react';
import Link from 'next/link';
import { Handshake, Globe2, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { CtaBanner } from '@/components/CtaBanner';

interface CollaborationPageContentProps {
  lang: Language;
}

export const CollaborationPageContent: React.FC<CollaborationPageContentProps> = ({
  lang,
}) => {
  const dict = getDictionary(lang);
  const data = dict.collaborationPage;

  const breadcrumbs = [
    {
      name: dict.nav.collaboration,
      href: `/${lang}/${lang === 'ro' ? 'colaborare' : 'collaboration'}`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/collaboration-partner.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PARTENERIATE B2B' : 'B2B PARTNERSHIPS'}
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

      {/* Main Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ro' ? 'De Ce Să Colaborezi cu VENTORO S.R.L.?' : 'Why Partner with VENTORO S.R.L.?'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.heroText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#222c3d] p-8 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-gray-800 group-hover:bg-gold-500 transition-colors mt-6" />
              </div>
            ))}
          </div>

          {/* Form & Consultation Contact Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                {lang === 'ro' ? 'Formular de Intenție' : 'Inquiry Form'}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mt-2">
                {lang === 'ro' ? 'Inițiază un Dialog de Parteneriat' : 'Initiate a Partnership Discussion'}
              </h3>
            </div>
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
