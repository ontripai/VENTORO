'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  Building2,
  Cpu,
  Globe2,
  ChevronDown,
  HelpCircle,
  Headphones,
} from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { MapEmbed } from '@/components/MapEmbed';
import { CtaBanner } from '@/components/CtaBanner';

interface ContactPageContentProps {
  lang: Language;
}

export const ContactPageContent: React.FC<ContactPageContentProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.contactPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbs = [
    {
      name: dict.nav.contact,
      href: `/${lang}/contact`,
    },
  ];

  const departments = [
    {
      nameRo: 'Vânzări Tehnice & Echipamente Industriale',
      nameEn: 'Technical Sales & Industrial Equipment',
      email: 'info@ventoro.ro',
      phone: dict.company.phoneRo,
      descRo: 'Consultanță pentru achiziții de utilaje, pompe, armături petroliere și componente energetice.',
      descEn: 'Inquiries regarding heavy machinery, industrial valves, energy systems, and spare parts.',
      icon: Building2,
    },
    {
      nameRo: 'Divizia Consultanță IT (CAEN 6220)',
      nameEn: 'IT Consulting & Infrastructure Desk',
      email: 'info@ventoro.ro',
      phone: dict.company.phoneRo,
      descRo: 'Audit de sisteme, arhitecturi cloud, securitate cibernetică și exploatarea mijloacelor de calcul.',
      descEn: 'Systems architecture audits, hybrid cloud setups, cybersecurity, and server facilities management.',
      icon: Cpu,
    },
    {
      nameRo: 'Biroul Comercial Austria (Viena)',
      nameEn: 'Austria Trade & Logistics Desk (Vienna)',
      email: 'office@ventoro.ro',
      phone: dict.company.phoneAt,
      descRo: 'Gestionarea parteneriatelor comerciale externe, importuri din UE și logistică transfrontalieră.',
      descEn: 'European supplier partnerships, cross-border procurement, and Central European logistics.',
      icon: Globe2,
    },
    {
      nameRo: 'Departament Juridic & Conformitate',
      nameEn: 'Legal & Corporate Governance Desk',
      email: 'office@ventoro.ro',
      phone: dict.company.phoneRo,
      descRo: 'Contracte comerciale, acorduri NDA, certificate de conformitate CE și verificări KYC/AML.',
      descEn: 'Commercial agreements, NDAs, CE compliance documentation, and corporate KYC/AML due diligence.',
      icon: ShieldCheck,
    },
  ];

  const contactFaqs = [
    {
      qRo: 'În cât timp primesc un răspuns la solicitarea transmisă?',
      qEn: 'What is the standard response time for inquiries?',
      aRo: 'Echipa noastră asigură un SLA de răspuns de maximum 24 de ore lucrătoare pentru toate solicitările tehnice și comerciale.',
      aEn: 'Our technical desk commits to an inquiry response Service Level Agreement (SLA) of under 24 business hours.',
    },
    {
      qRo: 'Pot programa o întâlnire directă la sediul dumneavoastră?',
      qEn: 'Can we schedule an in-person meeting at your offices?',
      aRo: 'Da, vă așteptăm la sediul operațional din Bulevardul Pipera 25A, Voluntari (București) sau prin biroul din Viena, cu o programare prealabilă.',
      aEn: 'Yes, we welcome visits at our operational HQ at Pipera Blvd 25A (Bucharest/Ilfov) or our Vienna desk upon prior scheduling.',
    },
    {
      qRo: 'Cum transmit specificațiile tehnice sau caietul de sarcini?',
      qEn: 'How can I submit large technical drawings or RFQ documents?',
      aRo: 'Puteți atașa detaliile în formularul de contact sau le puteți trimite direct prin email la info@ventoro.ro / office@ventoro.ro.',
      aEn: 'You can submit technical scopes through our online form or email detailed engineering specs to info@ventoro.ro.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/contact-header.jpg')" }}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              VENTORO S.R.L. • BIROURI BUCUREȘTI & VIENA
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

      {/* 4 Contact Widgets Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Location */}
            <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {data.boxes.location.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  {data.boxes.location.addr1}
                </p>
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                  {data.boxes.location.addr2}
                </p>
              </div>
            </div>

            {/* Box 2: Phones */}
            <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {data.boxes.phone.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <a
                    href={`tel:${dict.company.phoneRo.replace(/\s+/g, '')}`}
                    className="hover:text-gold-400 font-semibold"
                  >
                    {data.boxes.phone.ro}
                  </a>
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mt-1">
                  <a
                    href={`tel:${dict.company.phoneAt.replace(/\s+/g, '')}`}
                    className="hover:text-gold-400 font-semibold"
                  >
                    {data.boxes.phone.at}
                  </a>
                </p>
                <div className="pt-2 border-t border-slate-700/60 mt-2">
                  <a
                    href="https://wa.me/40725880000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[11px] font-bold hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>WhatsApp: +40 725 880000</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Box 3: Email */}
            <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {data.boxes.email.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  <a
                    href={`mailto:${data.boxes.email.main}`}
                    className="hover:text-gold-400 font-semibold"
                  >
                    {data.boxes.email.main}
                  </a>
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mt-1">
                  <a
                    href={`mailto:${data.boxes.email.office}`}
                    className="hover:text-gold-400 font-semibold"
                  >
                    {data.boxes.email.office}
                  </a>
                </p>
              </div>
            </div>

            {/* Box 4: Opening Hours */}
            <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {data.boxes.hours.title}
                </h3>
                <div className="space-y-1 text-[11px] text-gray-300">
                  {data.boxes.hours.lines.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-gray-400">{item.day}:</span>
                      <span className="font-semibold text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Departments Routing Grid */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'CONTACT DEDICAT' : 'DEDICATED DEPARTMENTS'}
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white mt-3 mb-3">
              {lang === 'ro' ? 'Contactați Direct Departamentul de Interes' : 'Direct Department Routing'}
            </h2>
            <p className="text-gray-300 text-sm">
              {lang === 'ro'
                ? 'Pentru un răspuns rapid și competent, adresați solicitarea direct echipei specializate.'
                : 'Direct your technical requirements to specialized engineers for rapid turnaround.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => {
              const IconComp = dept.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-3 shadow-md hover:border-gold-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      {lang === 'ro' ? dept.nameRo : dept.nameEn}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {lang === 'ro' ? dept.descRo : dept.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700 space-y-1 text-xs text-gray-400">
                    <p>
                      <span className="text-gray-500">Email: </span>
                      <a href={`mailto:${dept.email}`} className="text-gold-400 font-semibold hover:underline">
                        {dept.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-500">Tel: </span>
                      <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="text-white font-semibold hover:underline">
                        {dept.phone}
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 border-t border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm lang={lang} />
            </div>

            {/* Map Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 shadow-2xl space-y-4">
                <h3 className="font-heading text-lg font-bold text-white flex items-center justify-between border-b border-slate-700 pb-3">
                  <span>{lang === 'ro' ? 'Locația Sediului Operațional' : 'Operational HQ Location'}</span>
                  <MapPin className="w-5 h-5 text-gold-500" />
                </h3>
                <div className="h-80 rounded-xl overflow-hidden shadow-inner">
                  <MapEmbed />
                </div>
                <div className="p-4 rounded-xl bg-black/40 text-xs text-gray-300 space-y-1 border border-slate-700">
                  <p className="font-bold text-gold-400">VENTORO S.R.L.</p>
                  <p>{dict.company.operationalOffice}</p>
                  <p className="text-[11px] text-gray-400 pt-1">
                    CUI: {dict.company.cui} • Reg. Com: {dict.company.regCom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ Accordion */}
      <section className="py-16 bg-[#141c28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              {lang === 'ro' ? 'INFORMAȚII UTILE' : 'HELPFUL INFORMATION'}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {lang === 'ro' ? 'Întrebări Comune privind Comunicarea & Suportul' : 'Inquiries on Support & Communication'}
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
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
