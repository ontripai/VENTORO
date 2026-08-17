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

  return {
    title: `${dict.collaborationPage.title} | ${dict.company.legalName}`,
    description: dict.collaborationPage.subtitle,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/${lang === 'ro' ? 'colaborare' : 'collaboration'}`,
      languages: {
        ro: 'https://ventoro.ro/ro/colaborare',
        en: 'https://ventoro.ro/en/collaboration',
      },
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
