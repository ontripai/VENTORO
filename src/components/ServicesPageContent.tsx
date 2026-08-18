'use client';

import React from 'react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBanner } from '@/components/CtaBanner';

interface ServicesPageContentProps {
  lang: Language;
}

export const ServicesPageContent: React.FC<ServicesPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  const breadcrumbs = [
    {
      name: dict.nav.services,
      href: `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-industrial.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PORTFOLIO DE SERVICII' : 'SERVICES PORTFOLIO'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {dict.servicesSection.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {dict.servicesSection.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 12 Services Topic Cluster Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
