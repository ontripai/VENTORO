import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { HeroSlider } from '@/components/HeroSlider';
import { StatsSection } from '@/components/StatsSection';
import { ServiceCard } from '@/components/ServiceCard';
import { AboutPreview } from '@/components/AboutPreview';
import { PrinciplesSection } from '@/components/PrinciplesSection';
import { CtaBanner } from '@/components/CtaBanner';

import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const dict = getDictionary(lang);

  const title =
    lang === 'ro'
      ? 'VENTORO S.R.L. – BE THE BEST | Consultanță IT & Echipamente Industriale'
      : 'VENTORO S.R.L. – BE THE BEST | IT Consulting & Industrial Solutions';
  const desc =
    lang === 'ro'
      ? 'Partener strategic în consultanță IT (CAEN 6220), transformare digitală, furnizare de echipamente industriale, energie, construcții, petrol & gaze și comerț internațional România-Austria.'
      : 'Strategic partner in IT consulting (NACE 6220), digital transformation, industrial equipment, energy, construction, oil & gas, and international trade Romania-Austria.';

  return {
    title: {
      absolute: title,
    },
    description: desc,
    keywords: [
      lang === 'ro' ? 'consultanță IT București' : 'IT consulting Romania',
      'CAEN 6220',
      'CUI 46012496',
      lang === 'ro' ? 'echipamente industriale' : 'industrial equipment supplier',
      lang === 'ro' ? 'industria energetică' : 'energy industry solutions',
      lang === 'ro' ? 'comerț internațional România Austria' : 'international trade Romania Austria',
      'VENTORO SRL',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro',
        'en-US': 'https://ventoro.ro/en',
        'x-default': 'https://ventoro.ro/ro',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/logo.jpeg',
          width: 1200,
          height: 630,
          alt: 'VENTORO S.R.L. – BE THE BEST',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/logo.jpeg'],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col w-full">
      <StructuredData type="WebSite" />
      {/* Hero Slider */}
      <HeroSlider lang={lang} />

      {/* Stats Counter Bar */}
      <StatsSection lang={lang} />

      {/* Services Grid Section (Mirrors perdac.ro layout) */}
      <section className="py-20 bg-[#1a2230] relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/20">
              {dict.servicesSection.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
              {dict.servicesSection.title}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {dict.servicesSection.subtitle}
            </p>
          </div>

          {/* 12 Topic Cluster Services Grid (3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-14">
            <Link
              href={`/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-gold-500/80 hover:bg-gold-500 hover:text-black text-gold-400 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg"
            >
              <span>{dict.servicesSection.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview with Official Company Data */}
      <AboutPreview lang={lang} />

      {/* 5 Core Principles */}
      <PrinciplesSection lang={lang} />

      {/* Call to Action Banner */}
      <CtaBanner lang={lang} />
    </div>
  );
}
