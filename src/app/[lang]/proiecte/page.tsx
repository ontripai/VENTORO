import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { ProjectsPageContent } from '@/components/ProjectsPageContent';

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
      ? 'Proiecte Strategice & Referințe Industriale | VENTORO S.R.L.'
      : 'Strategic Projects & Industrial Engineering References | VENTORO';
  const desc =
    lang === 'ro'
      ? 'Descoperiți proiectele de anvergură derulate de VENTORO: infrastructură energetică, consultanță IT enterprise, construcții civile și logistică internațională.'
      : 'Discover major infrastructure and technology projects delivered by VENTORO: energy facilities, enterprise IT systems, civil engineering, and international supply chains.';

  return {
    title,
    description: desc,
    keywords: [
      lang === 'ro' ? 'proiecte industriale Romania' : 'industrial engineering projects',
      'infrastructura energetica',
      'transformare digitala enterprise',
      'constructii civile si industriale',
      'VENTORO proiecte',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/proiecte`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/proiecte',
        'en-US': 'https://ventoro.ro/en/projects',
        'x-default': 'https://ventoro.ro/ro/proiecte',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/proiecte`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/hero-energy.jpg',
          width: 1200,
          height: 630,
          alt: 'Proiecte Industriale VENTORO S.R.L.',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/hero-energy.jpg'],
    },
  };
}

export default async function ProiectePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <ProjectsPageContent lang={lang} />;
}
