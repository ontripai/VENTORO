'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Award,
  Factory,
  ChevronDown,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBanner } from '@/components/CtaBanner';

interface ServicesPageContentProps {
  lang: Language;
}

export const ServicesPageContent: React.FC<ServicesPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    {
      name: dict.nav.services,
      href: `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`,
    },
  ];

  const methodologySteps = [
    {
      step: '01',
      titleRo: 'Consultanță Inițială & Analiză Tehnică',
      titleEn: 'Initial Consultation & Engineering Audit',
      descRo: 'Examinarea cerințelor de proiect, a specificațiilor CAEN 6220 sau a parametrilor utilajelor industriale solicitate.',
      descEn: 'Rigorous assessment of project scopes, NACE 6220 parameters, or heavy machinery requirements.',
    },
    {
      step: '02',
      titleRo: 'Aprovizionare Strategică & Selecție Producători',
      titleEn: 'Strategic Sourcing & Vendor Procurement',
      descRo: 'Identificarea echipamentelor optime prin rețeaua noastră consolidată de producători din România, Austria și UE.',
      descEn: 'Securing prime machinery through our vetted manufacturer network across Romania, Austria, and the EU.',
    },
    {
      step: '03',
      titleRo: 'Controlul Calității & Certificare CE/ISO',
      titleEn: 'Quality Control & CE/ISO Verification',
      descRo: 'Verificarea conformității tehnice, inspecții înainte de expediere și eliberarea documentației de garanție.',
      descEn: 'Technical compliance auditing, pre-shipment FAT inspections, and full warranty documentation.',
    },
    {
      step: '04',
      titleRo: 'Livrare, Integrare & Asistență Continuă',
      titleEn: 'Delivery, Commissioning & Ongoing Support',
      descRo: 'Transport securizat, asistență tehnică la punerea în funcțiune și mentenanță dedicată pe termen lung.',
      descEn: 'Secured logistics, on-site commissioning support, and dedicated long-term technical lifecycle SLA.',
    },
  ];

  const servicesFaqs = [
    {
      qRo: 'Ce industrii principale sunt deservite de diviziile VENTORO?',
      qEn: 'What major industries do VENTORO divisions support?',
      aRo: 'Portofoliul nostru acoperă 12 ramuri strategice: Consultanță IT Enterprise (CAEN 6220), Industria Energetică, Petrol & Gaze, Construcții & Structuri Metalice, Aparatură Medicală & Laborator, Industrie Chimică, Minieră, Producție Alimentară, Transporturi Navale & Aeriene, Utilaje Grele și Proiectare/Design.',
      aEn: 'Our divisions span 12 core sectors: Enterprise IT Consulting (NACE 6220), Power & Energy, Oil & Gas, Construction & Steel, Medical & Lab Technology, Chemical Processing, Mining, Food Industry, Maritime & Aviation, Heavy Machinery, and Design.',
    },
    {
      qRo: 'Cum garantează VENTORO calitatea echipamentelor industriale furnizate?',
      qEn: 'How does VENTORO guarantee the quality of industrial deliveries?',
      aRo: 'Colaborăm exclusiv cu producători europeni acreditați, iar fiecare lot este însoțit de certificate de calitate, rapoarte de testare și garanții de producător de până la 36 de luni.',
      aEn: 'We partner exclusively with accredited European OEMs. Every delivery includes certificates of origin, testing logs, and manufacturer warranties of up to 36 months.',
    },
    {
      qRo: 'Pot comanda soluții personalizate sau utilaje adaptate specificațiilor noastre?',
      qEn: 'Can we order custom-engineered assemblies or tailored specifications?',
      aRo: 'Absolut. Echipa noastră tehnică oferă asistență completă pentru configurarea personalizată a echipamentelor, de la motoare electrice speciale până la arhitecturi software și servere dedicate.',
      aEn: 'Absolutely. Our engineering staff provides end-to-end assistance in tailoring equipment specs, custom electric motors, petrochemical valves, or custom software architectures.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-industrial.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PORTFOLIO DE SERVICII & DIVIZII' : 'SERVICES & INDUSTRIAL DIVISIONS'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {dict.servicesSection.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {dict.servicesSection.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 12 Services Topic Cluster Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'DOMENII CHEIE DE ACTIVITATE' : 'CORE SECTORS'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Cele 12 Divizii Specializate VENTORO' : 'The 12 Specialized VENTORO Divisions'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Strategic Procurement Methodology */}
      <section className="py-20 bg-[#141c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'METODOLOGIE & EXCELENȚĂ' : 'METHODOLOGY & EXCELLENCE'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-3 mb-3">
              {lang === 'ro' ? 'Procesul Nostru de Lucru în 4 Etape' : 'Our 4-Stage Operational Framework'}
            </h2>
            <p className="text-gray-300 text-sm">
              {lang === 'ro'
                ? 'Un parcurs structurat și transparent ce garantează calitatea, termenele și eficiența costurilor.'
                : 'A structured, transparent roadmap ensuring quality compliance, timely delivery, and cost efficiency.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 hover:border-gold-500/50 transition-all shadow-lg relative group"
              >
                <span className="font-heading font-black text-3xl text-gold-400/70 group-hover:text-gold-400 transition-colors">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-base text-white">
                  {lang === 'ro' ? step.titleRo : step.titleEn}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {lang === 'ro' ? step.descRo : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantees & Assurance Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 shadow-md">
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <h3 className="font-heading font-bold text-lg text-white">
                {lang === 'ro' ? 'Certificare & Conformitate CE' : 'CE Compliance & Standards'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Toate echipamentele și componentele livrate sunt certificate conform standardelor europene de siguranță și eficiență energetică.'
                  : 'All machinery and industrial components comply with mandatory EU safety, operational, and energy efficiency standards.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 shadow-md">
              <Award className="w-8 h-8 text-gold-500" />
              <h3 className="font-heading font-bold text-lg text-white">
                {lang === 'ro' ? 'Consultanță IT de Nivel Înalt' : 'Enterprise IT Expertise'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Specialiști certificați în arhitecturi enterprise CAEN 6220, securitate cibernetică și managementul centrelor de date critice.'
                  : 'Certified professionals in NACE 6220 enterprise systems, cyber resilience, and high-availability datacenter operations.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-4 shadow-md">
              <Factory className="w-8 h-8 text-gold-500" />
              <h3 className="font-heading font-bold text-lg text-white">
                {lang === 'ro' ? 'Garanție Extinsă & Suport 24/7' : 'Extended Warranty & Support'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'ro'
                  ? 'Acorduri SLA flexibile, piese de schimb originale și asistență tehnică dedicată pentru continuitatea operațională.'
                  : 'Customized SLA agreements, authentic spare parts supply, and responsive technical engineering support.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Accordion */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'ÎNTREBĂRI FRECVENTE' : 'FREQUENTLY ASKED QUESTIONS'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Întrebări Comune despre Serviciile VENTORO' : 'Common Questions About Our Services'}
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3">
            {servicesFaqs.map((faq, idx) => {
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
