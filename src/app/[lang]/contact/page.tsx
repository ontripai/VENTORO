import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { ContactPageContent } from '@/components/ContactPageContent';
import { StructuredData } from '@/components/StructuredData';

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
      ? 'Contact VENTORO S.R.L. – Birouri București & Viena | Solicitați Ofertă'
      : 'Contact VENTORO S.R.L. – Offices in Bucharest & Vienna | Request a Quote';
  const desc =
    lang === 'ro'
      ? 'Contactați echipa VENTORO S.R.L. pentru consultanță IT, cereri de echipamente industriale și parteneriate comerciale. Telefon RO: 0725880000 | AT: 00436646121228 | Email: info@ventoro.ro.'
      : 'Get in touch with VENTORO S.R.L. for IT consulting, industrial procurement inquiries, and trade representation. Phone RO: +40 725 880000 | AT: +43 664 6121228.';

  return {
    title,
    description: desc,
    keywords: [
      lang === 'ro' ? 'contact VENTORO SRL' : 'contact VENTORO SRL',
      'telefon VENTORO 0725880000',
      'info@ventoro.ro',
      'office@ventoro.ro',
      'adresa Bulevardul Pipera 25A',
      'birou Austria Viena',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/contact`,
      languages: {
        'ro-RO': 'https://ventoro.ro/ro/contact',
        'en-US': 'https://ventoro.ro/en/contact',
        'x-default': 'https://ventoro.ro/ro/contact',
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://ventoro.ro/${lang}/contact`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: 'https://ventoro.ro/images/contact-header.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact VENTORO S.R.L.',
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['https://ventoro.ro/images/contact-header.jpg'],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: lang === 'ro' ? 'Acasă' : 'Home', item: `/${lang}` },
          { name: lang === 'ro' ? 'Contact' : 'Contact Us', item: `/${lang}/contact` },
        ]}
      />
      <ContactPageContent lang={lang} />
    </>
  );
}
