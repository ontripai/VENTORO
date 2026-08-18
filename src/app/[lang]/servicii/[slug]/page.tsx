import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Language } from '@/types';
import { servicesList, getServiceBySlug } from '@/data/services-data';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';
import { StructuredData } from '@/components/StructuredData';

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  servicesList.forEach((s) => {
    params.push({ lang: 'ro', slug: s.slugRo });
    params.push({ lang: 'en', slug: s.slugRo });
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
  const service = getServiceBySlug(slug, 'ro') || getServiceBySlug(slug, 'en');

  if (!service) {
    return { title: 'Serviciu negăsit | VENTORO S.R.L.' };
  }

  const title = lang === 'ro' ? service.titleRo : service.titleEn;
  const desc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;

  return {
    title: `${title} | VENTORO S.R.L.`,
    description: desc,
    keywords: [
      title,
      lang === 'ro' ? 'furnizor echipamente' : 'equipment supplier',
      'VENTORO SRL',
      'Romania',
      'Austria',
      lang === 'ro' ? service.titleRo : service.titleEn,
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/servicii/${service.slugRo}`,
      languages: {
        'ro-RO': `https://ventoro.ro/ro/servicii/${service.slugRo}`,
        'en-US': `https://ventoro.ro/en/services/${service.slugEn}`,
        'x-default': `https://ventoro.ro/ro/servicii/${service.slugRo}`,
      },
    },
    openGraph: {
      title: `${title} | VENTORO S.R.L.`,
      description: desc,
      url: `https://ventoro.ro/${lang}/servicii/${service.slugRo}`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: `https://ventoro.ro${service.image}`,
          width: 1200,
          height: 630,
          alt: `${title} - VENTORO S.R.L.`,
        },
      ],
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | VENTORO S.R.L.`,
      description: desc,
      images: [`https://ventoro.ro${service.image}`],
    },
  };
}

export default async function ServiciiDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const service = getServiceBySlug(slug, 'ro') || getServiceBySlug(slug, 'en');

  if (!service) {
    notFound();
  }

  const title = lang === 'ro' ? service.titleRo : service.titleEn;
  const desc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;

  return (
    <>
      <StructuredData
        type="Service"
        serviceData={{
          name: title,
          description: desc,
          url: `https://ventoro.ro/${lang}/servicii/${service.slugRo}`,
          image: `https://ventoro.ro${service.image}`,
          serviceType: lang === 'ro' ? service.titleRo : service.titleEn,
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: lang === 'ro' ? 'Acasă' : 'Home', item: `/${lang}` },
          { name: lang === 'ro' ? 'Servicii' : 'Services', item: `/${lang}/servicii` },
          { name: title, item: `/${lang}/servicii/${service.slugRo}` },
        ]}
      />
      <ServiceDetailContent service={service} lang={lang} />
    </>
  );
}
