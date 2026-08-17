import React from 'react';
import type { Metadata } from 'next';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { ProjectsPageContent } from '@/components/ProjectsPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  const dict = getDictionary(lang);

  return {
    title: `${dict.projectsPage.title} | ${dict.company.legalName}`,
    description: dict.projectsPage.subtitle,
    alternates: {
      canonical: `https://ventoro.ro/${lang}/${lang === 'ro' ? 'proiecte' : 'projects'}`,
      languages: {
        ro: 'https://ventoro.ro/ro/proiecte',
        en: 'https://ventoro.ro/en/projects',
      },
    },
  };
}

export default async function ProiectePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ro';
  return <ProjectsPageContent lang={lang} />;
}
