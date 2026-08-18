import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { CollaborationPageContent } from '@/components/CollaborationPageContent';

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
      ? 'Parteneriat Strategic B2B & Oportunități de Colaborare | VENTORO'
      : 'Strategic B2B Partnership & Global Collaboration | VENTORO S.R.L.';
  const desc =
    lang === 'ro'
      ? 'Construiți un parteneriat de durată cu VENTORO S.R.L. Acces direct la lanțuri de aprovizionare industriale, consultanță IT specializată și rețea de distribuție România-Austria.'
      : 'Build a high-performance business partnership with VENTORO S.R.L. Direct access to industrial supply chains, IT consulting, and trade distribution Romania-Austria.';

  return {
    title,
    description: desc,
    keywords: [
      lang === 'ro' ? 'parteneriat B2B Romania' : 'B2B partnership Europe',
      lang === 'ro' ? 'colaborare industriala' : 'industrial collaboration',
      'furnizor de incredere',
      'comert international Romania Austria',
      'VENTORO colaborare',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/colaborare`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/colaborare',
        'en-US': 'https://ventoro.ro/en/collaboration',
        'x-default': 'https://ventoro.ro/ro/colaborare',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/colaborare`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/collaboration-partner.jpg',
          width: 1200,
          height: 630,
          alt: 'Parteneriat Strategic VENTORO S.R.L.',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
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

export default async function ColaborarePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <CollaborationPageContent lang={lang} />;
}
