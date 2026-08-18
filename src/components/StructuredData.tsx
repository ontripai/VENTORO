import React from 'react';
import { companyData } from '@/data/company-info';

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'BreadcrumbList' | 'WebSite' | 'Service' | 'FAQPage';
  breadcrumbs?: { name: string; item: string }[];
  serviceData?: {
    name: string;
    description: string;
    url: string;
    image?: string;
    serviceType?: string;
  };
  faqs?: FAQItem[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'Organization',
  breadcrumbs,
  serviceData,
  faqs,
}) => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ventoro.ro/#organization',
    name: companyData.legalName,
    alternateName: [companyData.tradeName, 'VENTORO Romania', 'VENTORO Austria'],
    url: 'https://ventoro.ro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ventoro.ro/images/logo.jpeg',
      width: 512,
      height: 512,
    },
    image: 'https://ventoro.ro/images/logo.jpeg',
    description:
      'VENTORO S.R.L. este o companie românească specializată în consultanță IT (CAEN 6220), furnizare echipamente industriale, energie, construcții, petrol & gaze și comerț internațional.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyData.phoneRo,
        contactType: 'sales and technical support',
        areaServed: ['RO', 'AT', 'EU', 'Global'],
        availableLanguage: ['Romanian', 'English', 'German'],
        email: companyData.email,
      },
      {
        '@type': 'ContactPoint',
        telephone: companyData.phoneAt,
        contactType: 'international trade office Austria',
        areaServed: ['AT', 'DE', 'EU'],
        availableLanguage: ['German', 'English', 'Romanian'],
        email: companyData.officeEmail,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevardul Pipera nr 25 A',
      addressLocality: 'Voluntari',
      addressRegion: 'Ilfov / București',
      postalCode: '077190',
      addressCountry: 'RO',
    },
    taxID: companyData.cui,
    legalName: companyData.legalName,
    foundingDate: '2022',
    knowsAbout: [
      'Consultanță IT & Management Sisteme de Calcul (CAEN 6220)',
      'Echipamente Industriale & Energetice',
      'Inginerie Petrol & Gaze',
      'Construcții Civile & Industriale',
      'Aparatură Medicală & Echipamente Laborator',
      'Comerț Internațional & Logistică B2B',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://ventoro.ro/#localbusiness',
    name: companyData.legalName,
    alternateName: companyData.tradeName,
    image: 'https://ventoro.ro/images/logo.jpeg',
    url: 'https://ventoro.ro',
    telephone: companyData.phoneRo,
    priceRange: '$$$$',
    email: companyData.email,
    currenciesAccepted: 'EUR, RON, USD',
    paymentAccepted: 'Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevardul Pipera nr 25 A',
      addressLocality: 'Voluntari',
      addressRegion: 'Ilfov / București',
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
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Romania',
      },
      {
        '@type': 'Country',
        name: 'Austria',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'European Union',
      },
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ventoro.ro/#website',
    url: 'https://ventoro.ro',
    name: 'VENTORO S.R.L. – BE THE BEST',
    description:
      'Platforma oficială VENTORO S.R.L. - Consultanță IT, Echipamente Industriale și Comerț Internațional.',
    inLanguage: ['ro-RO', 'en-US'],
    publisher: {
      '@id': 'https://ventoro.ro/#organization',
    },
  };

  let schemaToRender: object = orgSchema;

  if (type === 'LocalBusiness') {
    schemaToRender = localBusinessSchema;
  } else if (type === 'WebSite') {
    schemaToRender = webSiteSchema;
  } else if (type === 'BreadcrumbList' && breadcrumbs) {
    schemaToRender = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `https://ventoro.ro${b.item}`,
      })),
    };
  } else if (type === 'Service' && serviceData) {
    schemaToRender = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceData.name,
      description: serviceData.description,
      url: serviceData.url,
      provider: {
        '@id': 'https://ventoro.ro/#organization',
      },
      serviceType: serviceData.serviceType || 'Industrial & IT Consulting',
      image: serviceData.image || 'https://ventoro.ro/images/logo.jpeg',
      areaServed: ['RO', 'AT', 'EU', 'Global'],
    };
  } else if (type === 'FAQPage' && faqs && faqs.length > 0) {
    schemaToRender = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
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
