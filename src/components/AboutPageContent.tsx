'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  Calendar,
  UserCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PrinciplesSection } from '@/components/PrinciplesSection';
import { CtaBanner } from '@/components/CtaBanner';

interface AboutPageContentProps {
  lang: Language;
}

export const AboutPageContent: React.FC<AboutPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.aboutPage;

  const breadcrumbs = [
    {
      name: dict.nav.about,
      href: `/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#0f141c]">
      {/* Page Header Banner */}
      <section className="relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/about-presentation.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              VENTORO S.R.L. • BE THE BEST
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

      {/* Main Corporate Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  {lang === 'ro' ? 'Prezentare Generală' : 'Company Overview'}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2">
                  {data.overviewTitle}
                </h2>
                <div className="w-12 h-1 bg-gold-500 mt-3 rounded-full" />
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {data.overviewText}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {dict.aboutPreview.p1}
              </p>

              <div className="p-5 rounded-xl bg-[#141a24] border border-gold-500/20 space-y-3">
                <div className="flex items-center gap-2.5 text-gold-400 font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>{lang === 'ro' ? 'Misiunea Noastră Strategică' : 'Our Strategic Mission'}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {lang === 'ro'
                    ? 'Să livrăm excelență și performanță durabilă partenerilor noștri prin integrarea celor mai avansate tehnologii informatice (CAEN 6220), furnizarea de echipamente industriale de prim rang și optimizarea continuă a lanțurilor de aprovizionare internaționale.'
                    : 'To deliver operational excellence and sustainable value to our enterprise partners through leading-edge information technology consultancy (NACE 6220), high-tier industrial equipment procurement, and optimized global supply chain execution.'}
                </p>
              </div>
            </div>

            {/* Official Certificate Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#141a24] p-5 rounded-2xl border border-gray-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {lang === 'ro' ? 'Certificat de Înregistrare' : 'Certificate of Incorporation'}
                    </span>
                  </div>
                  <span className="text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded font-mono">
                    Seria B Nr. 5932249
                  </span>
                </div>

                {/* Actual Certificate Image Preview */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-700 bg-white">
                  <Image
                    src="/images/info-cert.jpeg"
                    alt="Certificat de Inregistrare VENTORO SRL - Ministerul Justitiei"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <p className="text-[11px] text-gray-400 italic text-center">
                  {data.certificateNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Legal Registration Table (from INFO.jpeg) */}
      <section className="py-16 bg-[#0c1017] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/20">
              {lang === 'ro' ? 'Transparență & Conformitate' : 'Compliance & Transparency'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-4">
              {data.registrationTitle}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 text-xs sm:text-sm mt-3">
              {data.registrationText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {data.fields.map((field, idx) => (
              <div
                key={idx}
                className="bg-[#141a24] p-4 sm:p-5 rounded-xl border border-gray-800/80 hover:border-gold-500/30 transition-all flex flex-col justify-between group"
              >
                <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                  {field.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-2 group-hover:text-gold-400 transition-colors">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <PrinciplesSection lang={lang} />

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
