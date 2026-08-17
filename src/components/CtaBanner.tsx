'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface CtaBannerProps {
  lang: Language;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.ctaBanner;

  return (
    <section className="relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-industrial.jpg')" }}>
      {/* Dark & Gold Overlay */}
      <div className="absolute inset-0 bg-[#0c1017]/90 backdrop-blur-xs" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            VENTORO S.R.L.
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-normal">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href={data.buttonHref}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-sm uppercase tracking-wider shadow-xl shadow-gold-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{data.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${dict.topBar.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-gold-500/40 hover:border-gold-400 hover:bg-gold-500/10 text-gold-400 font-bold text-sm uppercase tracking-wider transition-all"
            >
              <span>{dict.topBar.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
