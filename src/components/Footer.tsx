'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { MapEmbed } from './MapEmbed';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-[#111827] text-gray-300 text-xs border-t border-slate-700/80 relative z-10">
      {/* Top Footer Section (3 Columns like perdac.ro) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1: Company Profile & Legal Registration */}
          <div className="space-y-4">
            <Link href={`/${lang}`} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 p-0.5 bg-black">
                <Image
                  src="/images/logo.jpeg"
                  alt="VENTORO Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  VENTORO S.R.L.
                </span>
                <p className="text-[10px] text-gold-500 font-semibold tracking-widest uppercase">
                  BE THE BEST
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed">
              {dict.footer.tagline}
            </p>

            <div className="p-3.5 rounded-lg bg-gray-900/60 border border-gray-800 space-y-1.5 text-[11px] text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">{dict.footer.cuiLabel}:</span>
                <span className="font-semibold text-white">{dict.company.cui}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{dict.footer.regComLabel}:</span>
                <span className="font-semibold text-white">{dict.company.regCom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{dict.footer.euidLabel}:</span>
                <span className="font-semibold text-white">{dict.company.euid}</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href={`/${lang}/${lang === 'ro' ? 'termeni-si-conditii' : 'terms-and-conditions'}`}
                className="text-gold-400 hover:text-gold-300 underline font-semibold text-[11px]"
              >
                {dict.footer.termsLink}
              </Link>
            </div>
          </div>

          {/* Column 2: Contact Information (matching benchmark structure) */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2 flex items-center justify-between">
              <span>{dict.footer.contactTitle}</span>
              <span className="w-8 h-0.5 bg-gold-500 rounded" />
            </h3>

            <ul className="space-y-4 text-xs">
              {/* Romania Office */}
              <li className="space-y-1">
                <span className="text-gold-400 font-bold uppercase text-[11px] tracking-wider block">
                  ROMÂNIA
                </span>
                <div className="flex items-start gap-2 text-gray-300">
                  <Phone className="w-3.5 h-3.5 text-gold-500 mt-0.5 shrink-0" />
                  <span>
                    TELEFON :{' '}
                    <a
                      href={`tel:${dict.company.phoneRo.replace(/\s+/g, '')}`}
                      className="text-white hover:text-gold-400"
                    >
                      {dict.company.phoneRo}
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 mt-0.5 shrink-0" />
                  <span>
                    LOCAȚIE : {dict.company.operationalOffice}
                  </span>
                </div>
              </li>

              {/* Austria Phone */}
              <li className="space-y-1 pt-2 border-t border-gray-800/60">
                <span className="text-gold-400 font-bold uppercase text-[11px] tracking-wider block">
                  AUSTRIA
                </span>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>
                    TELEFON :{' '}
                    <a
                      href={`tel:${dict.company.phoneAt.replace(/\s+/g, '')}`}
                      className="text-white hover:text-gold-400"
                    >
                      {dict.company.phoneAt}
                    </a>
                  </span>
                </div>
              </li>

              {/* Email */}
              <li className="space-y-1 pt-2 border-t border-gray-800/60">
                <span className="text-gold-400 font-bold uppercase text-[11px] tracking-wider block">
                  EMAIL
                </span>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <a
                    href={`mailto:${dict.company.email}`}
                    className="text-white hover:text-gold-400"
                  >
                    {dict.company.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Location Map (matching benchmark) */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2 flex items-center justify-between">
              <span>{lang === 'ro' ? 'Hartă Sediu' : 'Location Map'}</span>
              <span className="w-8 h-0.5 bg-gold-500 rounded" />
            </h3>
            <div className="h-56 rounded-xl overflow-hidden">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#0f1520] py-6 border-t border-slate-700/80 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center sm:text-left">
            {currentYear} © <span className="text-white font-semibold">VENTORO S.R.L.</span> – {dict.footer.rights}
          </p>
          <div className="flex items-center space-x-5 text-gray-400">
            <Link
              href={`/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`}
              className="hover:text-gold-400 transition-colors"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`}
              className="hover:text-gold-400 transition-colors"
            >
              {dict.nav.services}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="hover:text-gold-400 transition-colors"
            >
              {dict.nav.contact}
            </Link>
            <Link
              href={`/${lang}/${lang === 'ro' ? 'termeni-si-conditii' : 'terms-and-conditions'}`}
              className="hover:text-gold-400 transition-colors"
            >
              {dict.footer.termsLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
