'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface CookieBannerProps {
  lang: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ventoro_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ventoro_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ventoro_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-black/95 border-t border-gold-500/30 text-white backdrop-blur-md shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
          <Cookie className="w-6 h-6 text-gold-500 shrink-0" />
          <p>
            {dict.cookieNotice.text}{' '}
            <Link
              href={`/${lang}/${lang === 'ro' ? 'termeni-si-conditii' : 'terms-and-conditions'}`}
              className="text-gold-400 underline font-semibold hover:text-gold-300 ml-1"
            >
              {dict.cookieNotice.moreInfo}
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold transition-colors"
          >
            {dict.cookieNotice.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            {dict.cookieNotice.accept}
          </button>
          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
