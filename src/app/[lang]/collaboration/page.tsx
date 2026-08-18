import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { CollaborationPageContent } from '@/components/CollaborationPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';

  const title =
    lang === 'en'
      ? 'Strategic B2B Partnership & Global Collaboration | VENTORO S.R.L.'
      : 'Parteneriat Strategic B2B & Oportunități de Colaborare | VENTORO';
  const desc =
    lang === 'en'
      ? 'Build a high-performance business partnership with VENTORO S.R.L. Direct access to industrial supply chains, IT consulting, and trade distribution Romania-Austria.'
      : 'Construiți un parteneriat de durată cu VENTORO S.R.L. Acces direct la lanțuri de aprovizionare industriale, consultanță IT specializată și rețea de distribuție România-Austria.';

  return {
    title,
    description: desc,
    keywords: [
      'B2B partnership Europe',
      'industrial supply chain collaboration',
      'international procurement Romania Austria',
      'technology consulting partnership',
      'VENTORO collaboration',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/collaboration`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/colaborare',
        'en-US': 'https://ventoro.ro/en/collaboration',
        'x-default': 'https://ventoro.ro/ro/colaborare',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/collaboration`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/collaboration-partner.jpg',
          width: 1200,
          height: 630,
          alt: 'Strategic Collaboration VENTORO S.R.L.',
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/collaboration-partner.jpg'],
    },
  };
}

export default async function CollaborationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <CollaborationPageContent lang={lang} />;
}
