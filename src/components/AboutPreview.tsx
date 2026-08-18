'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface AboutPreviewProps {
  lang: Language;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.aboutPreview;

  return (
    <section className="py-20 bg-[#141c28] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase & Certificate */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black/50 aspect-[4/3]">
              <Image
                src="/images/about-presentation.jpg"
                alt="VENTORO Headquarters & Corporate Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Registration Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#222c3d]/95 backdrop-blur-md border border-gold-500/40 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      VENTORO S.R.L.
                    </p>
                    <p className="text-[11px] text-gray-400">
                      CUI: 46012496 • Reg. Com.: J2022007766400
                    </p>
                  </div>
                </div>
                <Link
                  href={`/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`}
                  className="px-3 py-1.5 rounded bg-gold-500 text-black text-xs font-bold hover:bg-gold-400 transition-colors shrink-0"
                >
                  {lang === 'ro' ? 'Certificat' : 'Certificate'}
                </Link>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gold-500 to-amber-600 text-black p-4 rounded-xl font-bold shadow-xl hidden sm:flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-heading font-black">CAEN 6220</span>
              <span className="text-[10px] uppercase tracking-widest font-extrabold">IT & Industrial</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                {data.badge}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 leading-tight">
                {data.title}
              </h2>
              <div className="w-16 h-1 bg-gold-500 mt-4 rounded-full" />
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.p1}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              {data.p2}
            </p>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{lang === 'ro' ? 'Consultanță IT & Cloud Enterprise' : 'Enterprise IT & Cloud Advisory'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{lang === 'ro' ? 'Echipamente Industriale Certificate' : 'Certified Industrial Machinery'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{lang === 'ro' ? 'Logistivă Multimodală Globală' : 'Global Multimodal Supply Chain'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{lang === 'ro' ? 'Garanție & Standarde Europene' : 'EU Standards & Extended Warranties'}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={data.btnHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>{data.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
