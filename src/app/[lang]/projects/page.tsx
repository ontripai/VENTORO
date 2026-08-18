import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { ProjectsPageContent } from '@/components/ProjectsPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';

  const title =
    lang === 'en'
      ? 'Strategic Projects & Industrial Engineering References | VENTORO'
      : 'Proiecte Strategice & Referințe Industriale | VENTORO S.R.L.';
  const desc =
    lang === 'en'
      ? 'Discover major infrastructure and technology projects delivered by VENTORO: energy facilities, enterprise IT systems, civil engineering, and international supply chains.'
      : 'Descoperiți proiectele de anvergură derulate de VENTORO: infrastructură energetică, consultanță IT enterprise, construcții civile și logistică internațională.';

  return {
    title,
    description: desc,
    keywords: [
      'industrial engineering projects',
      'energy infrastructure Europe',
      'enterprise IT solutions',
      'civil construction references',
      'VENTORO projects',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/projects`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/proiecte',
        'en-US': 'https://ventoro.ro/en/projects',
        'x-default': 'https://ventoro.ro/ro/proiecte',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/projects`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/hero-energy.jpg',
          width: 1200,
          height: 630,
          alt: 'VENTORO Strategic Industrial Projects',
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'ro_RO',
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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <ProjectsPageContent lang={lang} />;
}
