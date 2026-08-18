'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  ChevronDown,
  Building,
  Zap,
  Activity,
  Anchor,
  HelpCircle,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBanner } from '@/components/CtaBanner';

interface ProjectsPageContentProps {
  lang: Language;
}

export const ProjectsPageContent: React.FC<ProjectsPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    {
      name: dict.nav.projects,
      href: `/${lang}/${lang === 'ro' ? 'proiecte' : 'projects'}`,
    },
  ];

  const caseStudies = [
    {
      id: 'proj-scada-energy',
      titleRo: 'Modernizare SCADA & Automatizare Rețea Energetică',
      titleEn: 'SCADA Modernization & Power Grid Automation',
      categoryRo: 'Energie & IT Enterprise',
      categoryEn: 'Energy & Enterprise IT',
      image: '/images/hero-energy.jpg',
      locationRo: 'București / Muntenia, România',
      locationEn: 'Bucharest / Muntenia, Romania',
      year: '2024 - 2025',
      challengeRo: 'Integrarea unui sistem de telecontrol și monitorizare continuă în timp real pentru o rețea de distribuție de medie tensiune.',
      challengeEn: 'Integrating real-time remote monitoring and automated telemetry for a regional medium-voltage power distribution grid.',
      solutionRo: 'Consultanță CAEN 6220, implementare servere industriale de înaltă disponibilitate, redundanță cloud și senzori SCADA securizați.',
      solutionEn: 'NACE 6220 advisory, high-availability fault-tolerant server deployment, cloud redundancy, and secure industrial telemetry sensors.',
      metricRo: 'Disponibilitate 99.99% • Timp de intervenție redus cu 65%',
      metricEn: '99.99% Uptime • Incident response time reduced by 65%',
      tags: ['SCADA', 'CAEN 6220', 'High Voltage', 'ISO 27001'],
    },
    {
      id: 'proj-petrochem-valves',
      titleRo: 'Aprovizionare Armături Industriale & Pompe de Înaltă Presiune',
      titleEn: 'High-Pressure Petrochemical Valves & Heavy Pumps Sourcing',
      categoryRo: 'Petrol & Gaze',
      categoryEn: 'Oil & Gas',
      image: '/images/service-oil.jpg',
      locationRo: 'Prahova / Viena',
      locationEn: 'Prahova / Vienna Desk',
      year: '2023 - 2024',
      challengeRo: 'Furnizarea în regim de urgență a unui set de supape de control certificate API 6D rezistente la fluide corozive și temperaturi extreme.',
      challengeEn: 'Emergency procurement of API 6D certified high-pressure control valves engineered for corrosive fluids and thermal extremes.',
      solutionRo: 'Achiziție directă prin hub-ul VENTORO Austria, inspecții FAT în fabrică și livrare securizată în mai puțin de 5 zile.',
      solutionEn: 'Direct procurement via VENTORO Austrian trade hub, factory acceptance testing, and expedited delivery in under 5 days.',
      metricRo: 'Conformitate 100% API 6D • 0 zile întârziere în producție',
      metricEn: '100% API 6D Compliance • Zero unplanned downtime',
      tags: ['API 6D', 'Heavy Pumps', 'Petrochemical', 'FAT Tested'],
    },
    {
      id: 'proj-medical-imaging',
      titleRo: 'Echipare Departamente Imagistică & Laborator Medical',
      titleEn: 'Hospital Medical Imaging & Lab Technology Deployment',
      categoryRo: 'Aparatură Medicală',
      categoryEn: 'Medical Technology',
      image: '/images/service-medical.jpg',
      locationRo: 'Cluj-Napoca & Ilfov',
      locationEn: 'Cluj-Napoca & Ilfov',
      year: '2024',
      challengeRo: 'Dotarea completă a unei clinici private cu echipamente de diagnosticare de înaltă rezoluție și sisteme PACS compatibile GDPR.',
      challengeEn: 'Turnkey fitting of a private diagnostic center with advanced imaging gear and GDPR-compliant PACS cloud storage.',
      solutionRo: 'Furnizare ecografe Doppler de ultimă generație, aparatură de laborator automatizată și integrare software securizat.',
      solutionEn: 'Delivery of next-gen Doppler ultrasound units, automated biochemistry analyzers, and secure encrypted hospital cloud integrations.',
      metricRo: 'Peste 12.000 pacienți deserviți anual • Acuratețe diagnostică 99.8%',
      metricEn: 'Over 12,000 patients served yearly • 99.8% diagnostic precision',
      tags: ['CE Medical', 'PACS Integration', 'Doppler Ultrasound', 'GDPR Health'],
    },
    {
      id: 'proj-civil-steel',
      titleRo: 'Structuri Metalice & Materiale pentru Parcuri Logistice',
      titleEn: 'Structural Steel & Heavy Materials for Logistics Hubs',
      categoryRo: 'Construcții & Metalurgie',
      categoryEn: 'Construction & Metallurgy',
      image: '/images/service-construction.jpg',
      locationRo: 'Ilfov / Brașov',
      locationEn: 'Ilfov / Brasov Region',
      year: '2024 - 2025',
      challengeRo: 'Furnizarea a peste 800 de tone de profile de oțel structural și panouri termoizolante pentru un parc industrial de 25.000 mp.',
      challengeEn: 'Procurement and delivery of 800+ metric tons of structural steel profiles and sandwich panels for a 25,000 sqm logistics hub.',
      solutionRo: 'Planificare logistică intermodală, trasabilitate completă a oțelului EN 10025 și livrări eșalonate conform graficului de șantier.',
      solutionEn: 'Intermodal freight management, full EN 10025 metallurgical certificates, and just-in-time scheduled on-site deliveries.',
      metricRo: '800+ Tone livrate • 100% certificat EN 10025',
      metricEn: '800+ Tons delivered • 100% EN 10025 Certified',
      tags: ['EN 10025', 'Structural Steel', 'Logistics Park', 'Heavy Cargo'],
    },
    {
      id: 'proj-food-industrial',
      titleRo: 'Linii Automatizate de Ambalare & Prelucrare Alimentară',
      titleEn: 'Automated Food Processing & Packaging Lines Sourcing',
      categoryRo: 'Industrie Alimentară',
      categoryEn: 'Food Industry & Machinery',
      image: '/images/service-food.jpg',
      locationRo: 'Timiș / Austria',
      locationEn: 'Timis / Austria Sourcing',
      year: '2023 - 2024',
      challengeRo: 'Creșterea capacității de procesare și ambalare sterilă pentru un producător agro-industrial major.',
      challengeEn: 'Scaling clean-room packaging capacity and sterile processing for a prominent agricultural food producer.',
      solutionRo: 'Import utilaje inox alimentar 316L din Europa Centrală, asistență la instalare și calibrare automată.',
      solutionEn: 'Import of AISI 316L food-grade stainless machinery from Central Europe with on-site calibration and staff training.',
      metricRo: '+45% capacitate de producție • Standarde HACCP & ISO 22000',
      metricEn: '+45% output capacity • HACCP & ISO 22000 Compliant',
      tags: ['AISI 316L', 'HACCP', 'Automation', 'Packaging Lines'],
    },
    {
      id: 'proj-maritime-logistics',
      titleRo: 'Coridor Multimodal Transport Agabaritic România – Austria',
      titleEn: 'Romania – Austria Multimodal Oversized Freight Corridor',
      categoryRo: 'Comerț & Logistică',
      categoryEn: 'International Logistics',
      image: '/images/service-transport.jpg',
      locationRo: 'Portul Constanța / Viena',
      locationEn: 'Constanta Port / Vienna Hub',
      year: '2024 - 2026',
      challengeRo: 'Optimizarea transportului de generatoare și transformatoare de mare tonaj între Europa de Vest și Marea Neagră.',
      challengeEn: 'Optimizing heavy-haul freight of oversized electric generators and transformers between Western Europe and the Black Sea.',
      solutionRo: 'Coordonare combinată navală și rutieră agabaritică, vămuire rapidă și asigurare cargo de valoare integrală.',
      solutionEn: 'Combined barge and heavy road transport management, expedited customs brokerage, and full-value cargo insurance.',
      metricRo: 'Timp de tranzit redus cu 30% • 0 incidente cargo',
      metricEn: 'Transit time cut by 30% • 0 incident rate',
      tags: ['Oversized Freight', 'Multimodal', 'Customs Clearance', 'Danube Route'],
    },
  ];

  const projectFaqs = [
    {
      qRo: 'Cum gestionează VENTORO derularea proiectelor mari de infrastructură?',
      qEn: 'How does VENTORO oversee large-scale infrastructure projects?',
      aRo: 'Fiecare proiect beneficiază de un Project Manager dedicat, plan de lucru etapizat (Milestones), control al calității (inspecții FAT/SAT) și raportare săptămânală transparentă.',
      aEn: 'Every project is assigned a dedicated Project Manager with clear milestone planning, stringent FAT/SAT quality checks, and transparent weekly progress reporting.',
    },
    {
      qRo: 'Oferiți consultanță tehnică înainte de achiziția echipamentelor?',
      qEn: 'Do you offer technical feasibility studies prior to equipment purchase?',
      aRo: 'Da. Experții noștri realizează auditul cerințelor de sistem, analize de compatibilitate și propun soluții optimizate ca performanță și cost.',
      aEn: 'Yes. Our engineering consultants conduct technical audits, system compatibility checks, and cost-benefit feasibility studies.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-energy.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PORTOFOLIU DE SUCCES & STUDII DE CAZ' : 'SUCCESS PORTFOLIO & CASE STUDIES'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {dict.projectsPage.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {dict.projectsPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid with Rich Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'PROIECTE REPREZENTATIVE' : 'FEATURED CASE STUDIES'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Soluții Inginerești & IT Livrate cu Succes' : 'Engineering & IT Solutions Delivered with Excellence'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((proj) => {
              const title = lang === 'ro' ? proj.titleRo : proj.titleEn;
              const category = lang === 'ro' ? proj.categoryRo : proj.categoryEn;
              const location = lang === 'ro' ? proj.locationRo : proj.locationEn;
              const challenge = lang === 'ro' ? proj.challengeRo : proj.challengeEn;
              const solution = lang === 'ro' ? proj.solutionRo : proj.solutionEn;
              const metric = lang === 'ro' ? proj.metricRo : proj.metricEn;

              return (
                <div
                  key={proj.id}
                  className="bg-[#222c3d] rounded-2xl overflow-hidden border border-slate-700/80 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col group hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                    <Image
                      src={proj.image}
                      alt={`${title} - Proiect VENTORO`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-wider">
                      {category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                      {title}
                    </h3>

                    {/* Challenge & Solution */}
                    <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
                      <div>
                        <span className="font-bold text-gold-400 uppercase tracking-wider text-[10px] block">
                          {lang === 'ro' ? 'Provocare Tehnică:' : 'Challenge:'}
                        </span>
                        <p>{challenge}</p>
                      </div>
                      <div>
                        <span className="font-bold text-gold-400 uppercase tracking-wider text-[10px] block">
                          {lang === 'ro' ? 'Soluția VENTORO:' : 'Solution:'}
                        </span>
                        <p>{solution}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#141c28] text-[10px] font-semibold text-gray-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Info & Metric */}
                    <div className="pt-4 border-t border-slate-700/80 space-y-2 text-xs text-gray-400 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gold-500" />
                          <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold-500" />
                          <span>{proj.year}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 font-bold text-xs">
                        <Award className="w-4 h-4 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects FAQ Accordion */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'ÎNTREBĂRI FRECVENTE' : 'PROJECT INQUIRIES'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Întrebări despre Proiectele & Livrările VENTORO' : 'Questions on Project Execution'}
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3">
            {projectFaqs.map((faq, idx) => {
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
