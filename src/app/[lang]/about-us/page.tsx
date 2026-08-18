import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { AboutPageContent } from '@/components/AboutPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';

  const title =
    lang === 'en'
      ? 'About VENTORO S.R.L. – Mission, Corporate Standards & Engineering'
      : 'Despre VENTORO S.R.L. – Misiune, Valori & Standarde de Excelență';
  const desc =
    lang === 'en'
      ? 'Learn more about VENTORO S.R.L., a strategic leader in IT management consulting (NACE 6220), industrial equipment distribution and international trade.'
      : 'Aflați mai multe despre VENTORO S.R.L., lider în consultanță IT (CAEN 6220), furnizare echipamente industriale și comerț internațional între România și Austria.';

  return {
    title,
    description: desc,
    keywords: [
      'about VENTORO SRL',
      'CUI 46012496',
      'J2022007766400',
      'NACE 6220 IT Consulting',
      'industrial equipment distributor Europe',
      'Bucharest corporate headquarters',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/about-us`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/despre-noi',
        'en-US': 'https://ventoro.ro/en/about-us',
        'x-default': 'https://ventoro.ro/ro/despre-noi',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/about-us`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/about-presentation.jpg',
          width: 1200,
          height: 630,
          alt: 'About VENTORO S.R.L.',
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/about-presentation.jpg'],
    },
  };
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <AboutPageContent lang={lang} />;
}
