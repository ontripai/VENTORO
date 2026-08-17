import React from 'react';
import { companyData } from '@/data/company-info';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'BreadcrumbList';
  breadcrumbs?: { name: string; item: string }[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Organization',
  breadcrumbs,
}) => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyData.legalName,
    alternateName: companyData.tradeName,
    url: 'https://ventoro.ro',
    logo: 'https://ventoro.ro/images/logo.jpeg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyData.phoneRo,
        contactType: 'customer service',
        areaServed: ['RO', 'AT', 'EU'],
        availableLanguage: ['Romanian', 'English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevardul Pipera nr 25 A',
      addressLocality: 'Voluntari',
      addressRegion: 'Ilfov / Bucuresti',
      addressCountry: 'RO',
    },
    taxID: companyData.cui,
    legalName: companyData.legalName,
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: companyData.legalName,
    image: 'https://ventoro.ro/images/logo.jpeg',
    '@id': 'https://ventoro.ro/#localbusiness',
    url: 'https://ventoro.ro',
    telephone: companyData.phoneRo,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevardul Pipera nr 25 A',
      addressLocality: 'Voluntari',
      addressRegion: 'Bucuresti',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.4938,
      longitude: 26.1132,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
  };

  let schemaToRender: object = orgSchema;

  if (type === 'LocalBusiness') {
    schemaToRender = localBusinessSchema;
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schemaToRender = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: b.item,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
};
