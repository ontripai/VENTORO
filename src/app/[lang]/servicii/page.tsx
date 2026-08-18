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

  const title =
    lang === 'ro'
      ? 'Domenii & Servicii Industriale & IT – Portofoliu Complet | VENTORO'
      : 'Industrial & IT Engineering Services – Complete Portfolio | VENTORO';
  const desc =
    lang === 'ro'
      ? 'Explorați cele 12 divizii strategice VENTORO: Consultanță IT CAEN 6220, Energie, Petrol & Gaze, Construcții, Echipamente Medicale, Metalurgie și Comerț Internațional.'
      : 'Explore the 12 strategic divisions of VENTORO: IT Consulting NACE 6220, Energy, Oil & Gas, Construction, Medical Equipment, Metallurgy, and International Trade.';

  return {
    title,
    description: desc,
    keywords: [
      lang === 'ro' ? 'servicii industriale Romania' : 'industrial services Europe',
      lang === 'ro' ? 'consultanta IT Bucuresti' : 'IT consulting Romania',
      'energie regenerabila',
      'petrol si gaze',
      'aparatura medicala',
      'constructii industriale',
      'VENTORO servicii',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/servicii`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/servicii',
        'en-US': 'https://ventoro.ro/en/services',
        'x-default': 'https://ventoro.ro/ro/servicii',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/servicii`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/hero-industrial.jpg',
          width: 1200,
          height: 630,
          alt: 'Domenii & Servicii VENTORO S.R.L.',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/hero-industrial.jpg'],
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
