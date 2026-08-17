import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { ServicesPageContent } from '@/components/ServicesPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const dict = getDictionary(lang);

  return {
    title: `${dict.servicesSection.title} | ${dict.company.legalName}`,
    description: dict.servicesSection.subtitle,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`,
      languages: {
        ro: 'https://ventoro.ro/ro/servicii',
        en: 'https://ventoro.ro/en/services',
      },
    },
  };
}

export default async function ServiciiPillarPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <ServicesPageContent lang={lang} />;
}
