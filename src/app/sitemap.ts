import { MetadataRoute } from 'next';
import { servicesList } from '@/data/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ventoro.ro';
  const currentDate = new Date();

  // Static core pages
  const coreRoutes = [
    {
      ro: '/ro',
      en: '/en',
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      ro: '/ro/despre-noi',
      en: '/en/about-us',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      ro: '/ro/servicii',
      en: '/en/services',
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      ro: '/ro/proiecte',
      en: '/en/projects',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      ro: '/ro/colaborare',
      en: '/en/collaboration',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      ro: '/ro/contact',
      en: '/en/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      ro: '/ro/termeni-si-conditii',
      en: '/en/terms-and-conditions',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Core pages entries
  coreRoutes.forEach((route) => {
    // Romanian version
    sitemapEntries.push({
      url: `${baseUrl}${route.ro}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ro: `${baseUrl}${route.ro}`,
          en: `${baseUrl}${route.en}`,
        },
      },
    });

    // English version
    sitemapEntries.push({
      url: `${baseUrl}${route.en}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ro: `${baseUrl}${route.ro}`,
          en: `${baseUrl}${route.en}`,
        },
      },
    });
  });

  // Dynamic Service Topic Clusters (12 services)
  servicesList.forEach((service) => {
    const roUrl = `${baseUrl}/ro/servicii/${service.slugRo}`;
    const enUrl = `${baseUrl}/en/services/${service.slugEn}`;

    // RO entry
    sitemapEntries.push({
      url: roUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: roUrl,
          en: enUrl,
        },
      },
    });

    // EN entry
    sitemapEntries.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: roUrl,
          en: enUrl,
        },
      },
    });
  });

  return sitemapEntries;
}
