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

  return {
    title: `${dict.aboutPage.title} | ${dict.company.legalName}`,
    description: dict.aboutPage.subtitle,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`,
      languages: {
        ro: 'https://ventoro.ro/ro/despre-noi',
        en: 'https://ventoro.ro/en/about-us',
      },
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
