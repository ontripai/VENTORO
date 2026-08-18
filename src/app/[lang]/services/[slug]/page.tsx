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

  const title = lang === 'en' ? service.titleEn : service.titleRo;
  const desc = lang === 'en' ? service.shortDescEn : service.shortDescRo;

  return {
    title: `${title} | VENTORO S.R.L.`,
    description: desc,
    keywords: [
      title,
      'industrial engineering solutions',
      'equipment distribution Europe',
      'VENTORO SRL',
      'Bucharest headquarters',
      'Vienna trade representative',
    ],
    alternates: {
      canonical: `https://ventoro.ro/${lang}/services/${service.slugEn}`,
      languages: {
        'ro-RO': `https://ventoro.ro/ro/servicii/${service.slugRo}`,
        'en-US': `https://ventoro.ro/en/services/${service.slugEn}`,
        'x-default': `https://ventoro.ro/ro/servicii/${service.slugRo}`,
      },
    },
    openGraph: {
      title: `${title} | VENTORO S.R.L.`,
      description: desc,
      url: `https://ventoro.ro/${lang}/services/${service.slugEn}`,
      siteName: 'VENTORO S.R.L.',
      images: [
        {
          url: `https://ventoro.ro${service.image}`,
          width: 1200,
          height: 630,
          alt: `${title} - VENTORO S.R.L.`,
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'ro_RO',
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

  const title = lang === 'en' ? service.titleEn : service.titleRo;
  const desc = lang === 'en' ? service.shortDescEn : service.shortDescRo;

  return (
    <>
      <StructuredData
        type="Service"
        serviceData={{
          name: title,
          description: desc,
          url: `https://ventoro.ro/${lang}/services/${service.slugEn}`,
          image: `https://ventoro.ro${service.image}`,
          serviceType: lang === 'en' ? service.titleEn : service.titleRo,
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: lang === 'en' ? 'Home' : 'Acasă', item: `/${lang}` },
          { name: lang === 'en' ? 'Services' : 'Servicii', item: `/${lang}/services` },
          { name: title, item: `/${lang}/services/${service.slugEn}` },
        ]}
      />
      <ServiceDetailContent service={service} lang={lang} />
    </>
  );
}
