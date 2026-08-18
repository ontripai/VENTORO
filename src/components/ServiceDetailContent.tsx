'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  FileText,
} from 'lucide-react';
import { ServiceClusterItem, Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { CtaBanner } from '@/components/CtaBanner';

interface ServiceDetailContentProps {
  service: ServiceClusterItem;
  lang: Language;
}

export const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({
  service,
  lang,
}) => {
  const dict = getDictionary(lang);
  const title = lang === 'ro' ? service.titleRo : service.titleEn;
  const shortDesc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;
  const fullDesc = lang === 'ro' ? service.fullDescRo : service.fullDescEn;
  const features = lang === 'ro' ? service.featuresRo : service.featuresEn;
  const specs = lang === 'ro' ? service.specsRo : service.specsEn;
  const subtopics = lang === 'ro' ? service.clusterSubtopicsRo : service.clusterSubtopicsEn;

  const breadcrumbs = [
    {
      name: dict.nav.services,
      href: `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`,
    },
    {
      name: title,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#1a2230]">
      {/* Header Banner */}
      <section className="page-header-banner relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70 backdrop-blur-xs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} lang={lang} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
              {lang === 'ro' ? 'SECTOR INDUSTRIAL & TEHNOLOGIC' : 'INDUSTRIAL & TECH SECTOR'}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Feature Hero Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <Image
                  src={service.image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-white">
                  {lang === 'ro' ? `Despre Soluțiile Noastre în ${title}` : `About Our ${title} Solutions`}
                </h2>
                <div className="w-12 h-1 bg-gold-500 rounded-full" />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
                  {fullDesc}
                </p>
              </div>

              {/* Key Features & Capabilities */}
              <div className="bg-[#222c3d] p-8 rounded-2xl border border-slate-700/80 space-y-5 shadow-md">
                <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  <span>{lang === 'ro' ? 'Avantaje și Capabilități Cheie' : 'Key Advantages & Capabilities'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {specs && specs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {lang === 'ro' ? 'Specificații Tehnice și Standarde' : 'Technical Specifications & Standards'}
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-700/80">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <tbody className="divide-y divide-slate-700 bg-[#222c3d]">
                        {specs.map((spec, idx) => (
                          <tr key={idx} className="hover:bg-slate-700/40 transition-colors">
                            <td className="py-3 px-4 font-semibold text-gold-400 w-1/3 bg-slate-900/40">
                              {spec.label}
                            </td>
                            <td className="py-3 px-4 text-gray-200">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* Product & Equipment Showcase Gallery (matching perdac.ro subpage images) */}
              {service.gallery && service.gallery.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-gold-500" />
                      <span>{lang === 'ro' ? 'Galerie Echipamente & Produse' : 'Equipment & Product Gallery'}</span>
                    </h3>
                    <span className="text-xs text-gold-400 font-semibold">
                      {service.gallery.length} {lang === 'ro' ? 'Imagini' : 'Images'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
                    {service.gallery.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 hover:border-gold-500/60 transition-all group bg-slate-900 shadow-md"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${title} - Gallery item ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topic Cluster Subtopics (SEO Authority Linking) */}
              <div className="p-6 rounded-2xl bg-[#141c28] border border-slate-700/80 space-y-3 shadow-md">
                <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
                  {lang === 'ro' ? 'Subiecte Specializate în Acest Domeniu' : 'Specialized Topics in this Cluster'}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {subtopics.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-[#222c3d] text-gray-200 text-xs border border-slate-700 hover:border-gold-500/40 transition-colors"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquiry Form on Service Page */}
              <div className="pt-6">
                <ContactForm lang={lang} />
              </div>
            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* All Services Navigation Widget */}
              <div className="bg-[#222c3d] p-6 rounded-2xl border border-slate-700/80 shadow-xl space-y-4">
                <h3 className="font-heading text-base font-bold text-white border-b border-slate-700 pb-3 flex items-center justify-between">
                  <span>{lang === 'ro' ? 'Toate Serviciile' : 'All Services'}</span>
                  <span className="w-6 h-0.5 bg-gold-500 rounded" />
                </h3>
                <ul className="space-y-1 text-xs">
                  {servicesList.map((item) => {
                    const isCurrent = item.id === service.id;
                    const itemTitle = lang === 'ro' ? item.titleRo : item.titleEn;
                    const itemHref = `/${lang}/${
                      lang === 'ro' ? 'servicii' : 'services'
                    }/${lang === 'ro' ? item.slugRo : item.slugEn}`;
                    const targetUrl = item.externalUrl || itemHref;
                    const isExternal = Boolean(item.externalUrl);

                    return (
                      <li key={item.id}>
                        <Link
                          href={targetUrl}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className={`flex items-center justify-between p-2.5 rounded-lg font-medium transition-all ${
                            isCurrent
                              ? 'bg-gold-500 text-black font-bold shadow-md'
                              : 'text-gray-200 hover:text-gold-400 hover:bg-slate-700/60'
                          }`}
                        >
                          <span className="line-clamp-1">{itemTitle}</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-gold-500/20 via-[#222c3d] to-[#222c3d] p-6 rounded-2xl border border-gold-500/40 shadow-xl space-y-4">
                <h4 className="font-heading text-base font-bold text-white">
                  {lang === 'ro' ? 'Aveți Nevoie de Consultanță?' : 'Need Expert Advisory?'}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {lang === 'ro'
                    ? 'Specialiștii VENTORO vă stau la dispoziție cu informații tehnice complete și oferte personalizate.'
                    : 'VENTORO engineering specialists are available to provide technical proposals and customized quotes.'}
                </p>

                <div className="pt-2 space-y-3">
                  <a
                    href={`tel:${dict.company.phoneRo.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/50 border border-slate-700 text-xs text-white hover:text-gold-400 hover:border-gold-500/40 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400">{lang === 'ro' ? 'Telefon România' : 'Romania Phone'}</p>
                      <p className="font-bold">{dict.company.phoneRo}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${dict.company.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/50 border border-slate-700 text-xs text-white hover:text-gold-400 hover:border-gold-500/40 transition-all"
                  >
                    <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400">Email</p>
                      <p className="font-bold">{dict.company.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Verified Company Badge */}
              <div className="p-5 rounded-2xl bg-[#222c3d] border border-slate-700/80 space-y-2 text-center shadow-md">
                <ShieldCheck className="w-8 h-8 text-gold-500 mx-auto" />
                <p className="text-xs font-bold text-white">VENTORO S.R.L.</p>
                <p className="text-[11px] text-gray-400">
                  CUI: {dict.company.cui} • Reg: {dict.company.regCom}
                </p>
                <p className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                  BE THE BEST
                </p>
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
