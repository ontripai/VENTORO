'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Handshake,
  Globe2,
  ShieldCheck,
  Award,
  ArrowRight,
  Workflow,
  CheckCircle2,
  Building2,
  ChevronDown,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { CtaBanner } from '@/components/CtaBanner';

interface CollaborationPageContentProps {
  lang: Language;
}

export const CollaborationPageContent: React.FC<CollaborationPageContentProps> = ({
  lang,
}) => {
  const dict = getDictionary(lang);
  const data = dict.collaborationPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    {
      name: dict.nav.collaboration,
      href: `/${lang}/${lang === 'ro' ? 'colaborare' : 'collaboration'}`,
    },
  ];

  const partnershipModels = [
    {
      titleRo: '1. Aprovizionare Industrială B2B',
      titleEn: '1. Industrial B2B Procurement',
      descRo: 'Furnizare de utilaje grele, armături petroliere, echipamente energetice și piese de schimb cu prețuri directe de la producători europeni.',
      descEn: 'Procurement of heavy machinery, oilfield valves, energy generation systems, and certified spare parts directly from European OEMs.',
    },
    {
      titleRo: '2. Outsourcing IT & Arhitecturi CAEN 6220',
      titleEn: '2. IT Outsourcing & NACE 6220 Systems',
      descRo: 'Gestiunea infrastructurilor de calcul enterprise, audit de securitate cibernetică, cloud computing hibrid și dezvoltare software dedicată.',
      descEn: 'Management of computing facilities, enterprise cybersecurity audits, hybrid cloud deployments, and custom software engineering.',
    },
    {
      titleRo: '3. Reprezentare Comercială Viena – București',
      titleEn: '3. Trade Representation Vienna – Bucharest',
      descRo: 'Sprijin complet pentru companiile austriece și europene care doresc extinderea pe piața din România sau invers, inclusiv asistență logistică și fiscală.',
      descEn: 'Comprehensive market entry and representation for Austrian and EU enterprises expanding into Romania, covering logistics and legal support.',
    },
    {
      titleRo: '4. Subcontractare Inginerească EPC',
      titleEn: '4. EPC Engineering Subcontracting',
      descRo: 'Parteneriate pe proiecte mari de infrastructură industrială, medicală și energetică ca furnizor tehnic de echipamente și integrare tehnologică.',
      descEn: 'Joint ventures on major infrastructure, medical, and energy projects as an approved specialized equipment and integration subcontractor.',
    },
  ];

  const onboardingSteps = [
    {
      step: '01',
      titleRo: 'Inițierea Solicitării',
      titleEn: 'Initial Inquiry',
      descRo: 'Completarea formularului de intenție sau transmiterea cererii de ofertă tehnice către echipa noastră.',
      descEn: 'Submitting the partnership form or sharing your technical request for quotation with our desk.',
    },
    {
      step: '02',
      titleRo: 'Evaluare & Due Diligence',
      titleEn: 'Evaluation & Compliance',
      descRo: 'Verificarea compatibilității tehnice, a standardelor de calitate și a cadrului contractual.',
      descEn: 'Technical capability assessment, compliance verification, and mutual contract framework alignment.',
    },
    {
      step: '03',
      titleRo: 'Ofertare Tehnică & SLA',
      titleEn: 'Technical Proposal & SLA',
      descRo: 'Stabilirea termenilor comerciali, a graficului de livrare și a garanțiilor de performanță.',
      descEn: 'Establishing commercial terms, delivery milestones, and binding Service Level Agreements (SLA).',
    },
    {
      step: '04',
      titleRo: 'Semnarea Acordului',
      titleEn: 'Agreement Execution',
      descRo: 'Formalizarea parteneriatului în conformitate cu legislația comercială europeană.',
      descEn: 'Official contract signing complying with Romanian and European corporate legal frameworks.',
    },
    {
      step: '05',
      titleRo: 'Execuție & Suport Continuu',
      titleEn: 'Execution & Ongoing Support',
      descRo: 'Derularea comenzilor cu trasabilitate totală și asistență managerială dedicată 24/7.',
      descEn: 'Order fulfillment with end-to-end milestone tracking and dedicated 24/7 account management.',
    },
  ];

  const collaborationFaqs = [
    {
      qRo: 'Care sunt criteriile de calificare pentru furnizorii sau partenerii VENTORO?',
      qEn: 'What are the qualification criteria for VENTORO vendors or partners?',
      aRo: 'Evaluăm soliditatea financiară, certificările de calitate (ISO 9001, CE), capacitatea de producție și respectarea standardelor de etică și sustenabilitate.',
      aEn: 'We evaluate financial stability, accredited certifications (ISO 9001, CE), production capacity, and adherence to environmental and ethical governance.',
    },
    {
      qRo: 'Cum este protejată confidențialitatea informațiilor de proiect?',
      qEn: 'How is project confidentiality and proprietary data protected?',
      aRo: 'Toate discuțiile și schimbul de date tehnice sunt acoperite de Acorduri de Confidențialitate (NDA) standard europene și politici stricte de securitate conform ISO 27001.',
      aEn: 'All technical negotiations and documentation exchanges are governed by strict Non-Disclosure Agreements (NDA) and ISO 27001 data protection protocols.',
    },
    {
      qRo: 'În ce monede și condiții de plată se derulează tranzacțiile internaționale?',
      qEn: 'In what currencies and payment terms are international transactions conducted?',
      aRo: 'Operăm tranzacții în EUR, RON și USD prin conturi bancare deschise în România și Austria, cu instrumente de plată sigure (L/C, scrisori de garanție bancară, transfer SEPA).',
      aEn: 'We transact in EUR, RON, and USD through corporate banking channels in Romania and Austria, supporting Letters of Credit (L/C), bank guarantees, and SEPA wires.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/collaboration-partner.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'PARTENERIATE B2B & COMERȚ INTERNAȚIONAL' : 'B2B PARTNERSHIPS & GLOBAL TRADE'}
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

      {/* Main Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'VALOARE ADĂUGATĂ' : 'ADDED VALUE'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-2 mb-4">
              {lang === 'ro' ? 'De Ce Să Colaborezi cu VENTORO S.R.L.?' : 'Why Partner with VENTORO S.R.L.?'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {data.heroText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#222c3d] p-8 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-gray-800 group-hover:bg-gold-500 transition-colors mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Partnership Models Section */}
      <section className="py-20 bg-[#141c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'MODELE DE COLABORARE' : 'PARTNERSHIP MODELS'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-3 mb-3">
              {lang === 'ro' ? '4 Căi de Parteneriat Strategic B2B' : '4 Strategic B2B Partnership Pathways'}
            </h2>
            <p className="text-gray-300 text-sm">
              {lang === 'ro'
                ? 'Structuri de cooperare flexibile adaptate obiectivelor de afaceri ale companiei dumneavoastră.'
                : 'Flexible cooperation structures tailored to accelerate your corporate strategic objectives.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-3 hover:border-gold-500/50 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 text-gold-400 font-bold text-base">
                  <Building2 className="w-5 h-5" />
                  <span>{lang === 'ro' ? model.titleRo : model.titleEn}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
                  {lang === 'ro' ? model.descRo : model.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Onboarding Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'PROCES DE CALIFICARE' : 'ONBOARDING WORKFLOW'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Cum Demarăm Colaborarea în 5 Pași' : 'How We Initiate Collaboration in 5 Steps'}
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {onboardingSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-3 shadow-md hover:border-gold-500/40 transition-all"
              >
                <span className="font-heading font-black text-2xl text-gold-500/40">{step.step}</span>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                  {lang === 'ro' ? step.titleRo : step.titleEn}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lang === 'ro' ? step.descRo : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration FAQs */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'ÎNTREBĂRI FRECVENTE' : 'PARTNERSHIP FAQS'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Întrebări despre Parteneriatele B2B' : 'Frequently Asked Partnership Inquiries'}
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3">
            {collaborationFaqs.map((faq, idx) => {
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

          {/* Form & Consultation Contact Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                {lang === 'ro' ? 'Formular de Intenție' : 'Inquiry Form'}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mt-2">
                {lang === 'ro' ? 'Inițiază un Dialog de Parteneriat' : 'Initiate a Partnership Discussion'}
              </h3>
            </div>
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
