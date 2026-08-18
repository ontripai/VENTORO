'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, Globe } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary, getAlternatePath } from '@/lib/i18n';

interface TopBarProps {
  lang: Language;
}

export const TopBar: React.FC<TopBarProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const pathname = usePathname() || `/${lang}`;
  const alternateLang = lang === 'ro' ? 'en' : 'ro';
  const alternatePath = getAlternatePath(pathname, alternateLang);

  return (
    <div className="site-topbar bg-[#151c27] text-gray-300 text-xs py-2.5 border-b border-slate-700/60 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Side: Contact details */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${dict.topBar.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-gold-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>{dict.topBar.phone}</span>
          </a>
          <a
            href={`https://wa.me/40725880000?text=${encodeURIComponent(
              lang === 'ro'
                ? 'Bună ziua! Doresc informații despre serviciile VENTORO.'
                : 'Hello! I would like information regarding VENTORO services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp: +40 725 880000</span>
          </a>
          <a
            href={`mailto:${dict.topBar.email}`}
            className="flex items-center gap-1.5 hover:text-gold-500 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            <span>{dict.topBar.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            <span>{dict.topBar.hours}</span>
          </div>
        </div>

        {/* Right Side: Language Switcher & Social */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gold-500" />
            <div className="flex items-center space-x-1 bg-black/40 px-2 py-0.5 rounded border border-gray-800">
              <Link
                href={lang === 'ro' ? pathname : getAlternatePath(pathname, 'ro')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === 'ro'
                    ? 'bg-gold-500 text-black font-bold shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Română"
              >
                RO
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href={lang === 'en' ? pathname : getAlternatePath(pathname, 'en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-gold-500 text-black font-bold shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="English"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
