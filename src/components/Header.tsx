'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search, Globe, Phone, Mail } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary, getAlternatePath } from '@/lib/i18n';
import { servicesList } from '@/data/services-data';
import { SearchModal } from './SearchModal';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const pathname = usePathname() || `/${lang}`;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: dict.nav.home,
      href: `/${lang}`,
      exact: true,
    },
    {
      name: dict.nav.about,
      href: `/${lang}/${lang === 'ro' ? 'despre-noi' : 'about-us'}`,
    },
    {
      name: dict.nav.services,
      href: `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}`,
      hasDropdown: true,
    },
    {
      name: dict.nav.projects,
      href: `/${lang}/${lang === 'ro' ? 'proiecte' : 'projects'}`,
    },
    {
      name: dict.nav.collaboration,
      href: `/${lang}/${lang === 'ro' ? 'colaborare' : 'collaboration'}`,
    },
    {
      name: dict.nav.contact,
      href: `/${lang}/contact`,
    },
  ];

  const isLinkActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const alternateLang = lang === 'ro' ? 'en' : 'ro';
  const alternatePath = getAlternatePath(pathname, alternateLang);

  return (
    <>
      <header
        className={`site-header sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#161e2b]/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-2.5'
            : 'bg-[#1a2230] border-b border-slate-700/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <Link
              href={`/${lang}`}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="logo-box relative w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 p-0.5 bg-black/60 group-hover:border-gold-400 transition-colors shadow-md">
                <Image
                  src="/images/logo.jpeg"
                  alt="VENTORO S.R.L. Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="brand-text font-heading text-xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
                  VENTORO
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-500 font-semibold uppercase">
                  BE THE BEST
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href, link.exact);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`nav-link flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all relative ${
                          active
                            ? 'active-link text-gold-400 font-bold'
                            : 'text-gray-200 hover:text-gold-400'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gold-500" />
                        {active && (
                          <span className="active-bar absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                        )}
                      </Link>

                      {/* Mega Dropdown Menu */}
                      <div
                        className={`dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-[#1e2838] border border-gold-500/30 rounded-xl shadow-2xl p-6 transition-all duration-200 z-50 ${
                          isServicesDropdownOpen
                            ? 'opacity-100 visible translate-y-1'
                            : 'opacity-0 invisible pointer-events-none -translate-y-2'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
                          <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                            {lang === 'ro' ? 'Toate Domeniile Industriale & IT' : 'All Industry & IT Sectors'}
                          </span>
                          <Link
                            href={link.href}
                            className="text-xs text-gray-400 hover:text-white underline"
                          >
                            {dict.nav.allServicesLink} &rarr;
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {servicesList.map((service) => {
                            const title = lang === 'ro' ? service.titleRo : service.titleEn;
                            const serviceHref = `/${lang}/${
                              lang === 'ro' ? 'servicii' : 'services'
                            }/${lang === 'ro' ? service.slugRo : service.slugEn}`;
                            const targetUrl = service.externalUrl || serviceHref;
                            const isExternal = Boolean(service.externalUrl);

                            return (
                              <Link
                                key={service.id}
                                href={targetUrl}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                className="p-2.5 rounded-lg hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 transition-all group/item block"
                              >
                                <p className="text-xs font-semibold text-gray-200 group-hover/item:text-gold-400 leading-tight">
                                  {title}
                                </p>
                                <p className="text-[11px] text-gray-500 line-clamp-1 mt-1">
                                  {lang === 'ro' ? service.shortDescRo : service.shortDescEn}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`nav-link px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all relative ${
                      active
                        ? 'active-link text-gold-400 font-bold'
                        : 'text-gray-300 hover:text-gold-400'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="active-bar absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions (Search & Lang Switcher) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-300 hover:text-gold-400 hover:bg-gray-800/60 rounded-lg transition-colors"
                title={dict.nav.searchTitle}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                href={alternatePath}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-500/30 hover:border-gold-400 bg-gold-500/5 hover:bg-gold-500/15 text-gold-400 text-xs font-semibold transition-all"
                title={`Switch to ${alternateLang.toUpperCase()}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{alternateLang.toUpperCase()}</span>
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-300 hover:text-gold-400"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-200 hover:text-gold-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#161e2b] border-b border-gold-500/20 px-4 pt-3 pb-6 space-y-3 animate-slide-up">
            <div className="flex items-center justify-between py-2 border-b border-slate-700">
              <span className="text-xs font-semibold text-gray-400 uppercase">
                {lang === 'ro' ? 'Limbă / Language:' : 'Language / Limbă:'}
              </span>
              <div className="flex items-center space-x-2">
                <Link
                  href={lang === 'ro' ? pathname : getAlternatePath(pathname, 'ro')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    lang === 'ro' ? 'bg-gold-500 text-black' : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  RO
                </Link>
                <Link
                  href={lang === 'en' ? pathname : getAlternatePath(pathname, 'en')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    lang === 'en' ? 'bg-gold-500 text-black' : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href, link.exact);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="py-1">
                      <div className="flex items-center justify-between text-sm font-semibold uppercase text-gold-400 px-2 py-2">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:underline"
                        >
                          {link.name}
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 gap-1 pl-4 mt-1 border-l-2 border-gold-500/30">
                        {servicesList.map((service) => {
                          const title = lang === 'ro' ? service.titleRo : service.titleEn;
                          const serviceHref = `/${lang}/${
                            lang === 'ro' ? 'servicii' : 'services'
                          }/${lang === 'ro' ? service.slugRo : service.slugEn}`;
                          const targetUrl = service.externalUrl || serviceHref;
                          const isExternal = Boolean(service.externalUrl);

                          return (
                            <Link
                              key={service.id}
                              href={targetUrl}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs py-1.5 text-gray-300 hover:text-gold-400"
                            >
                              {title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-2 py-2 rounded text-sm font-semibold uppercase transition-colors ${
                      active
                        ? 'text-gold-400 bg-gold-500/10'
                        : 'text-gray-200 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Quick Links */}
            <div className="pt-4 border-t border-gray-800 space-y-2 text-xs text-gray-400">
              <a
                href={`tel:${dict.topBar.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-gray-300 hover:text-gold-400"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>{dict.topBar.phone}</span>
              </a>
              <a
                href={`mailto:${dict.topBar.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-gold-400"
              >
                <Mail className="w-3.5 h-3.5 text-gold-500" />
                <span>{dict.topBar.email}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lang={lang}
      />
    </>
  );
};
