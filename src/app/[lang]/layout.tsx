import React from 'react';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { StructuredData } from '@/components/StructuredData';

export async function generateStaticParams() {
  return [{ lang: 'ro' }, { lang: 'en' }];
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : rawLang === 'ro' ? 'ro' : ('ro' as Language);

  if (rawLang !== 'ro' && rawLang !== 'en') {
    notFound();
  }

  return (
    <>
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <TopBar lang={lang} />
      <Header lang={lang} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer lang={lang} />
      <CookieBanner lang={lang} />
    </>
  );
}
