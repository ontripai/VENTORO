import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { TermsPageContent } from '@/components/TermsPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const dict = getDictionary(lang);

  return {
    title: `${dict.nav.terms} | ${dict.company.legalName}`,
    description: dict.siteDescription,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/${lang === 'ro' ? 'termeni-si-conditii' : 'terms-and-conditions'}`,
      languages: {
        ro: 'https://ventoro.ro/ro/termeni-si-conditii',
        en: 'https://ventoro.ro/en/terms-and-conditions',
      },
    },
  };
}

export default async function TermeniSiConditiiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <TermsPageContent lang={lang} />;
}
