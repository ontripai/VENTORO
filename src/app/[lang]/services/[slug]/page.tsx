import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { servicesList, getServiceBySlug } from '@/data/services-data';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  servicesList.forEach((s) => {
    params.push({ lang: 'ro', slug: s.slugEn });
    params.push({ lang: 'en', slug: s.slugEn });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const service = getServiceBySlug(slug, 'en') || getServiceBySlug(slug, 'ro');

  if (!service) {
    return { title: 'Service Not Found | VENTORO S.R.L.' };
  }

  const title = lang === 'ro' ? service.titleRo : service.titleEn;
  const desc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;

  return {
    title: `${title} | VENTORO S.R.L.`,
    description: desc,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/services/${service.slugEn}`,
      languages: {
        ro: `https://ventoro.ro/ro/servicii/${service.slugRo}`,
        en: `https://ventoro.ro/en/services/${service.slugEn}`,
      },
    },
    openGraph: {
      title: `${title} | VENTORO S.R.L.`,
      description: desc,
      images: [{ url: service.image, alt: title }],
    },
  };
}

export default async function ServicesDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const service = getServiceBySlug(slug, 'en') || getServiceBySlug(slug, 'ro');

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} lang={lang} />;
}
