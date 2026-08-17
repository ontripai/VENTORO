'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, lang }) => {
  const dict = getDictionary(lang);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search in services
  const filteredServices = normalizedQuery
    ? servicesList.filter((s) => {
        const title = lang === 'ro' ? s.titleRo : s.titleEn;
        const desc = lang === 'ro' ? s.shortDescRo : s.shortDescEn;
        const subtopics = (lang === 'ro' ? s.clusterSubtopicsRo : s.clusterSubtopicsEn).join(' ');
        return (
          title.toLowerCase().includes(normalizedQuery) ||
          desc.toLowerCase().includes(normalizedQuery) ||
          subtopics.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#141a24] border border-gold-500/40 rounded-xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-800 bg-[#0d1219]">
          <Search className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict.nav.searchPlaceholder}
            className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-white mr-2 text-xs p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {query && filteredServices.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wider text-gold-500 font-semibold mb-2">
                {dict.nav.searchResults} ({filteredServices.length})
              </p>
              <div className="space-y-2">
                {filteredServices.map((service) => {
                  const title = lang === 'ro' ? service.titleRo : service.titleEn;
                  const desc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;
                  const href = `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}/${
                    lang === 'ro' ? service.slugRo : service.slugEn
                  }`;
                  const targetUrl = service.externalUrl || href;
                  const isExternal = Boolean(service.externalUrl);

                  return (
                    <Link
                      key={service.id}
                      href={targetUrl}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      onClick={onClose}
                      className="block p-3 rounded-lg bg-gray-900/60 hover:bg-gold-500/10 border border-gray-800 hover:border-gold-500/50 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white group-hover:text-gold-400">
                          {title}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-gold-500 transition-transform group-hover:translate-x-1" />
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{desc}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {query && filteredServices.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">
              {dict.nav.noResults}
            </div>
          )}

          {!query && (
            <div className="py-4">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                {lang === 'ro' ? 'Sectoare Populare' : 'Popular Industry Sectors'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {servicesList.slice(0, 6).map((service) => {
                  const title = lang === 'ro' ? service.titleRo : service.titleEn;
                  const href = `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}/${
                    lang === 'ro' ? service.slugRo : service.slugEn
                  }`;
                  const targetUrl = service.externalUrl || href;
                  const isExternal = Boolean(service.externalUrl);

                  return (
                    <Link
                      key={service.id}
                      href={targetUrl}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      onClick={onClose}
                      className="flex items-center justify-between p-2.5 rounded bg-gray-900/40 hover:bg-gray-800 text-xs text-gray-300 hover:text-gold-400 border border-gray-800/60"
                    >
                      <span>{title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
