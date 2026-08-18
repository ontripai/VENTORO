import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { AboutPageContent } from '@/components/AboutPageContent';

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
      ? 'Despre VENTORO S.R.L. – Misiune, Valori & Standarde de Excelență'
      : 'About VENTORO S.R.L. – Mission, Corporate Standards & Engineering';
  const desc =
    lang === 'ro'
      ? 'Aflați mai multe despre VENTORO S.R.L., lider în consultanță IT (CAEN 6220), furnizare echipamente industriale și comerț internațional între România și Austria.'
      : 'Learn more about VENTORO S.R.L., a strategic leader in IT management consulting (NACE 6220), industrial equipment distribution and international trade.';

  return {
    title,
    description: desc,
    keywords: [
      lang === 'ro' ? 'despre VENTORO SRL' : 'about VENTORO SRL',
      'CUI 46012496',
      'J2022007766400',
      'CAEN 6220',
      lang === 'ro' ? 'consultanță sisteme calcul' : 'computer facilities management',
      lang === 'ro' ? 'birou Viena Austria' : 'Vienna trade office Austria',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/despre-noi`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/despre-noi',
        'en-US': 'https://ventoro.ro/en/about-us',
        'x-default': 'https://ventoro.ro/ro/despre-noi',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/despre-noi`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/about-presentation.jpg',
          width: 1200,
          height: 630,
          alt: 'Despre VENTORO S.R.L.',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
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

export default async function DespreNoiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <AboutPageContent lang={lang} />;
}
