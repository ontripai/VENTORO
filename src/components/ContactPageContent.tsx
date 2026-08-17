'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
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

  const breadcrumbs = [
    {
      name: dict.nav.contact,
      href: `/${lang}/contact`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#0f141c]">
      {/* Header Banner */}
      <section className="relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/contact-header.jpg')" }}>
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

      {/* 4 Contact Widgets Grid (matching perdac.ro exactly) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Location */}
            <div className="bg-[#141a24] p-6 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
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
            <div className="bg-[#141a24] p-6 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
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
              </div>
            </div>

            {/* Box 3: Email */}
            <div className="bg-[#141a24] p-6 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
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
            <div className="bg-[#141a24] p-6 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all shadow-xl space-y-4 group">
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

      {/* Contact Form & Map Section */}
      <section className="py-12 bg-[#0c1017] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm lang={lang} />
            </div>

            {/* Map Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#141a24] p-6 rounded-2xl border border-gray-800 shadow-2xl space-y-4">
                <h3 className="font-heading text-lg font-bold text-white flex items-center justify-between border-b border-gray-800 pb-3">
                  <span>{lang === 'ro' ? 'Locația Noastră pe Hartă' : 'Our Office Location'}</span>
                  <MapPin className="w-5 h-5 text-gold-500" />
                </h3>
                <div className="h-80 rounded-xl overflow-hidden">
                  <MapEmbed />
                </div>
                <div className="p-3 rounded-lg bg-gray-900/60 text-xs text-gray-400 space-y-1">
                  <p className="font-bold text-white">VENTORO S.R.L.</p>
                  <p>{dict.company.operationalOffice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner lang={lang} />
    </div>
  );
};
