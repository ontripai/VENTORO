import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { TermsPageContent } from '@/components/TermsPageContent';
import { StructuredData } from '@/components/StructuredData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';

  const title =
    lang === 'ro'
      ? 'Termeni și Condiții & Politica de Confidențialitate | VENTORO S.R.L.'
      : 'Terms and Conditions & Privacy Policy | VENTORO S.R.L.';
  const desc =
    lang === 'ro'
      ? 'Condițiile generale de utilizare a site-ului web ventoro.ro, politica de protecție a datelor (GDPR) și datele de identificare fiscală ale companiei VENTORO S.R.L.'
      : 'General terms and conditions of website use, GDPR privacy policy, and corporate identification details of VENTORO S.R.L.';

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/termeni-si-conditii`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/termeni-si-conditii',
        'en-US': 'https://ventoro.ro/en/terms-and-conditions',
        'x-default': 'https://ventoro.ro/ro/termeni-si-conditii',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/termeni-si-conditii`,
      siteName: 'VENTORO S.R.L.',
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
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
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: lang === 'ro' ? 'Acasă' : 'Home', item: `/${lang}` },
          { name: lang === 'ro' ? 'Termeni și Condiții' : 'Terms & Conditions', item: `/${lang}/termeni-si-conditii` },
        ]}
      />
      <TermsPageContent lang={lang} />
    </>
  );
}
