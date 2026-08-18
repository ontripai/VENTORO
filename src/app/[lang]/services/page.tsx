import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { ServicesPageContent } from '@/components/ServicesPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';

  const title =
    lang === 'en'
      ? 'Industrial & IT Engineering Services – Complete Portfolio | VENTORO'
      : 'Domenii & Servicii Industriale & IT – Portofoliu Complet | VENTORO';
  const desc =
    lang === 'en'
      ? 'Explore the 12 strategic divisions of VENTORO: IT Consulting NACE 6220, Energy, Oil & Gas, Construction, Medical Equipment, Metallurgy, and International Trade.'
      : 'Explorați cele 12 divizii strategice VENTORO: Consultanță IT CAEN 6220, Energie, Petrol & Gaze, Construcții, Echipamente Medicale, Metalurgie și Comerț Internațional.';

  return {
    title,
    description: desc,
    keywords: [
      'industrial engineering Europe',
      'IT consulting services',
      'energy solutions',
      'oil and gas technologies',
      'medical equipment distributor',
      'international B2B logistics',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/services`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/servicii',
        'en-US': 'https://ventoro.ro/en/services',
        'x-default': 'https://ventoro.ro/ro/servicii',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/services`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/hero-industrial.jpg',
          width: 1200,
          height: 630,
          alt: 'VENTORO Engineering & IT Services',
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'ro_RO',
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

export default async function ServicesPillarPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <ServicesPageContent lang={lang} />;
}
