'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  Calendar,
  UserCheck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Globe2,
  Cpu,
  Factory,
  ChevronDown,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PrinciplesSection } from '@/components/PrinciplesSection';
import { CtaBanner } from '@/components/CtaBanner';

interface AboutPageContentProps {
  lang: Language;
}

export const AboutPageContent: React.FC<AboutPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.aboutPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    {
      name: dict.nav.about,
      href: `/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`,
    },
  ];

  const milestones = [
    {
      year: '2022',
      titleRo: 'Înființarea VENTORO S.R.L. & Certificarea CAEN 6220',
      titleEn: 'Founding of VENTORO S.R.L. & NACE 6220 Certification',
      descRo: 'Înregistrarea oficială a companiei la Registrul Comerțului din București, punând bazele unei divizii de consultanță IT enterprise și managementul sistemelor de calcul.',
      descEn: 'Official incorporation at the Bucharest Trade Registry, establishing premier IT systems management and infrastructure consulting operations.',
    },
    {
      year: '2023',
      titleRo: 'Extinderea în Domenii Industriale & Parteneriate Strategice',
      titleEn: 'Expansion into Industrial Sectors & Strategic Sourcing',
      descRo: 'Diversificarea portofoliului către furnizarea de echipamente energetice, pompe industriale, componente pentru petrol & gaze și utilaje de construcții.',
      descEn: 'Diversification into energy infrastructure machinery, heavy industrial pumps, oil & gas valve components, and construction equipment.',
    },
    {
      year: '2024',
      titleRo: 'Deschiderea Coridorului Comercial România – Austria',
      titleEn: 'Opening the Romania – Austria Commercial Trade Hub',
      descRo: 'Operaționalizarea biroului de reprezentare comercială din Viena, facilitând importul și exportul de tehnologii de înaltă precizie și produse agro-industriale.',
      descEn: 'Launch of the Vienna trade representation desk, streamlining high-precision engineering imports and bilateral European supply chains.',
    },
    {
      year: '2025 - 2026',
      titleRo: 'Lider în Soluții Integrate & Transformare Digitală',
      titleEn: 'Leadership in Integrated B2B Engineering & Digitalization',
      descRo: 'Consolidarea poziției ca furnizor strategic pentru proiecte complexe de infrastructură industrială, medicală și consultanță software de nivel enterprise.',
      descEn: 'Consolidating our role as a trusted partner for turnkey industrial setups, medical equipment distribution, and enterprise software architectures.',
    },
  ];

  const corporateFaqs = [
    {
      qRo: 'Care este obiectul principal de activitate al companiei VENTORO S.R.L.?',
      qEn: 'What is the primary core activity of VENTORO S.R.L.?',
      aRo: 'Activitatea principală înregistrată conform CAEN este 6220 – Activități de consultanță în tehnologia informației și managementul mijloacelor de calcul. Compania operează totodată divizii autorizate de inginerie, aprovizionare cu echipamente industriale, energie, construcții și comerț internațional.',
      aEn: 'The primary registered activity is NACE 6220 – Computer consultancy and facilities management. The company also operates accredited divisions in industrial equipment supply, energy systems, construction materials, and bilateral international trade.',
    },
    {
      qRo: 'Cum este structurată prezența internațională România – Austria?',
      qEn: 'How is the Romania – Austria bilateral presence structured?',
      aRo: 'Sediul social și operațional central este localizat în București/Ilfov (Bulevardul Pipera 25A), asigurând coordonarea proiectelor din România. Biroul de comerț internațional din Austria (telefon: +43 664 6121228, email: office@ventoro.ro) gestionează relațiile cu furnizorii din Europa Centrală și de Vest.',
      aEn: 'Our corporate headquarters is in Bucharest/Ilfov (Pipera Blvd 25A), directing regional engineering projects. Our Austrian trade desk (+43 664 6121228, office@ventoro.ro) manages supplier alliances across Central and Western Europe.',
    },
    {
      qRo: 'Ce garanții de conformitate și calitate oferă VENTORO partenerilor săi?',
      qEn: 'What quality guarantees and compliance certifications does VENTORO provide?',
      aRo: 'Toate contractele derulate de VENTORO respectă legislația fiscală europeană (CUI 46012496, EUID ROONRC.J2022007766400). Echipamentele livrate sunt certificate CE, însoțite de garanție extinsă și supuse protocoalelor de control al calității (FAT/SAT).',
      aEn: 'All enterprise engagements comply with EU commercial laws (VAT ID 46012496, EUID ROONRC.J2022007766400). All supplied machinery holds valid CE certification, extended warranties, and verified quality inspection protocols.',
    },
    {
      qRo: 'Cum pot solicita o ofertă tehnică sau demara un parteneriat comercial?',
      qEn: 'How can our enterprise request a technical quotation or start a collaboration?',
      aRo: 'Puteți transmite caietul de sarcini sau cererea dumneavoastră direct prin formularul de contact securizat de pe site, prin email la info@ventoro.ro / office@ventoro.ro sau apelând echipa tehnică la 0725880000. Răspunsul este asigurat în maximum 24 de ore.',
      aEn: 'You can submit technical specifications via our secure inquiry form, email us at info@ventoro.ro / office@ventoro.ro, or call our team at +40 725 880000. All inquiries receive guaranteed response within 24 hours.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Page Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/about-presentation.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              VENTORO S.R.L. • BE THE BEST
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {data.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  {lang === 'ro' ? 'Prezentare Generală' : 'Company Overview'}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2">
                  {data.overviewTitle}
                </h2>
                <div className="w-12 h-1 bg-gold-500 mt-3 rounded-full" />
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {data.overviewText}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {dict.aboutPreview.p1}
              </p>

              <div className="p-6 rounded-xl bg-[#222c3d] border border-gold-500/30 space-y-3 shadow-md">
                <div className="flex items-center gap-2.5 text-gold-400 font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>{lang === 'ro' ? 'Misiunea Noastră Strategică' : 'Our Strategic Mission'}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {lang === 'ro'
                    ? 'Să livrăm excelență și performanță durabilă partenerilor noștri prin integrarea celor mai avansate tehnologii informatice (CAEN 6220), furnizarea de echipamente industriale de prim rang și optimizarea continuă a lanțurilor de aprovizionare internaționale.'
                    : 'To deliver operational excellence and sustainable value to our enterprise partners through leading-edge information technology consultancy (NACE 6220), high-tier industrial equipment procurement, and optimized global supply chain execution.'}
                </p>
              </div>
            </div>

            {/* Official Certificate Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-gold-500" />
                    <span className="font-heading font-bold text-sm text-white">
                      {lang === 'ro' ? 'Date de Identificare Oficiale' : 'Official Corporate Registry'}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-950/80 border border-green-800 text-green-300">
                    {lang === 'ro' ? 'Activ & Înregistrat' : 'Active & Verified'}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-slate-700">
                      {data.fields.map((field, idx) => (
                        <tr key={idx}>
                          <td className="py-2.5 px-3 font-semibold text-gold-400 w-1/3">
                            {field.label}
                          </td>
                          <td className="py-2.5 px-3 text-gray-200 font-mono text-[11px]">
                            {field.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-400 border-t border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{dict.company.dateOfRegistration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-gold-500" />
                    <span>{dict.company.director}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Section */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'CAPABILITĂȚI & DOMENII' : 'CAPABILITIES & DOMAINS'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-3 mb-3">
              {lang === 'ro' ? 'Cei 4 Piloni Strategici VENTORO' : 'The 4 Strategic Pillars of VENTORO'}
            </h2>
            <p className="text-gray-300 text-sm">
              {lang === 'ro'
                ? 'Structura noastră integrată combină consultanța tehnologică avansată cu forța lanțurilor industriale europene.'
                : 'Our integrated framework unites cutting-edge software consulting with robust European supply chains.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 hover:border-gold-500/50 transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                {lang === 'ro' ? 'Consultanță IT & CAEN 6220' : 'Enterprise IT & NACE 6220'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Audit de sistem, arhitecturi cloud hibride, securitate cibernetică și managementul centrelor de calcul la standarde ISO 27001.'
                  : 'System audits, hybrid cloud setups, cybersecurity resilience, and mission-critical server facilities management.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 hover:border-gold-500/50 transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                {lang === 'ro' ? 'Echipamente Industriale Grele' : 'Heavy Industrial Machinery'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Furnizare de motoare electrice de înaltă tensiune, generatoare, pompe industriale, armături petroliere și sisteme SCADA.'
                  : 'High-voltage electric motors, industrial generators, heavy pumps, API-grade petrochemical valves, and SCADA automation.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 hover:border-gold-500/50 transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                {lang === 'ro' ? 'Hub Bilateral România – Austria' : 'Romania – Austria Trade Hub'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Conexiune directă între sediul din București și biroul din Viena, optimizând importurile de echipamente și exporturile strategice.'
                  : 'Direct trade synergy linking Bucharest HQ with our Vienna desk, accelerating European technology procurement.'}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 hover:border-gold-500/50 transition-all shadow-md">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                {lang === 'ro' ? 'Conformitate & Calitate Totală' : 'Compliance & Quality Standards'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Trasabilitate completă a loturilor, certificare CE, inspecții FAT/SAT și respectarea strictă a normelor de securitate și mediu.'
                  : 'Full batch traceability, CE conformity, FAT/SAT inspection protocols, and strict environmental governance.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'EVOLUȚIE STRATEGICĂ' : 'STRATEGIC EVOLUTION'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Reperele Dezvoltării VENTORO' : 'Milestones of Our Growth'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-3 relative overflow-hidden shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-2xl text-gold-400">{m.year}</span>
                  <TrendingUp className="w-5 h-5 text-gold-500/40" />
                </div>
                <h4 className="font-heading font-bold text-sm text-white">
                  {lang === 'ro' ? m.titleRo : m.titleEn}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {lang === 'ro' ? m.descRo : m.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section Component */}
      <PrinciplesSection lang={lang} />

      {/* Corporate FAQs Accordion */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'TRANSPARENȚĂ & RĂSPUNSURI' : 'TRANSPARENCY & ANSWERS'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Întrebări Frecvente despre VENTORO S.R.L.' : 'Corporate Frequently Asked Questions'}
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3">
            {corporateFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const question = lang === 'ro' ? faq.qRo : faq.qEn;
              const answer = lang === 'ro' ? faq.aRo : faq.aEn;

              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#222c3d] border border-slate-700/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-gold-400 transition-colors"
                  >
                    <span className="pr-4">{question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-slate-700/60">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
