'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Check, Sun, Moon, Sparkles, Layers, X } from 'lucide-react';
import { Language } from '@/types';

export type ThemeMode = 'light' | 'hybrid' | 'slate' | 'obsidian';

interface ThemeOption {
  id: ThemeMode;
  nameRo: string;
  nameEn: string;
  nameFa: string;
  descRo: string;
  descEn: string;
  descFa: string;
  badge: string;
  icon: any;
  previewColors: {
    bg: string;
    card: string;
    text: string;
    accent: string;
  };
}

const themes: ThemeOption[] = [
  {
    id: 'light',
    nameRo: '1. Alb Curat & Oficial',
    nameEn: '1. Pure White Corporate',
    nameFa: '۱. سفید شرکتی و مدرن اروپایی',
    descRo: 'Fundal alb luminos, carduri albe curate, text închis clar, stil corporativ european.',
    descEn: 'Crisp white backgrounds, clean white cards, high-contrast dark text, European corporate style.',
    descFa: 'پس‌زمینه سفید پاک، کارت‌های سفید با سایه نرم، متن تیره خوانا و استایل هلدینگ‌های اروپایی.',
    badge: 'Light Mode',
    icon: Sun,
    previewColors: {
      bg: '#f8fafc',
      card: '#ffffff',
      text: '#0f172a',
      accent: '#c59b27',
    },
  },
  {
    id: 'hybrid',
    nameRo: '2. Hibrid Lux (Header Închis + Corp Alb)',
    nameEn: '2. Hybrid Luxury (Dark Header + Light Body)',
    nameFa: '۲. هایبرید لوکس (هدر تیره + بدنه سفید)',
    descRo: 'Header și footer navy închis autoritar cu corp alb luminos și carduri elegante.',
    descEn: 'Executive deep navy header & footer with bright white body and gold accents.',
    descFa: 'هدر و فوتر سرمه‌ای عمیق باوقار همراه با بدنه سفید شفاف و کارت‌های روشن.',
    badge: 'Hybrid Lux',
    icon: Sparkles,
    previewColors: {
      bg: '#f8fafc',
      card: '#111827',
      text: '#1e293b',
      accent: '#c59b27',
    },
  },
  {
    id: 'slate',
    nameRo: '3. Ardezie Modernă (Titan)',
    nameEn: '3. Modern Slate / Titanium',
    nameFa: '۳. اسلیت مدرن / تیتانیوم (تم حاضر)',
    descRo: 'Tonuri de gri ardezie echilibrate, carduri contrastante, accente aurii rafinate.',
    descEn: 'Balanced slate-titanium tones, distinct cards, refined gold accents.',
    descFa: 'تناژ دودی-اسلیت ملایم، کارت‌های تفکیک‌شده و کنتراست متعادل چشم‌نواز.',
    badge: 'Modern Slate',
    icon: Layers,
    previewColors: {
      bg: '#1a2230',
      card: '#222c3d',
      text: '#f1f5f9',
      accent: '#ffc000',
    },
  },
  {
    id: 'obsidian',
    nameRo: '4. Obsidian & Aur (Dark Profund)',
    nameEn: '4. Deep Obsidian Black & Gold',
    nameFa: '۴. مشکی آبسیدین و طلایی (تم قبلی)',
    descRo: 'Negru intens profund, contrast aur-metalic puternic, aspect nocturn de lux.',
    descEn: 'Deep obsidian black, bold gold contrast, midnight luxury aesthetic.',
    descFa: 'مشکی عمیق با درخشش طلایی خالص و استایل شبانه لوکس.',
    badge: 'Deep Dark',
    icon: Moon,
    previewColors: {
      bg: '#0f141c',
      card: '#141a24',
      text: '#ffffff',
      accent: '#ffc000',
    },
  },
];

interface ThemeSelectorProps {
  lang?: Language;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ lang = 'ro' }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('slate');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('ventoro-theme') as ThemeMode;
    if (saved && ['light', 'hybrid', 'slate', 'obsidian'].includes(saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'slate');
    }
  }, []);

  const changeTheme = (themeId: ThemeMode) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('ventoro-theme', themeId);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Theme Switcher Button (Bottom Right) */}
      <aside aria-label="Theme selector" className="fixed bottom-6 right-6 z-50 flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gold-500 text-black font-bold text-xs shadow-2xl hover:scale-105 hover:bg-gold-400 transition-all border-2 border-black/20"
          title="Schimbă tema / Select Theme / انتخاب تم سایت"
        >
          <Palette className="w-5 h-5 transition-transform group-hover:rotate-45" />
          <span className="hidden sm:inline tracking-wider font-extrabold uppercase text-[11px]">
            {lang === 'ro' ? 'Paletă Teme (4)' : 'Theme Palette (4)'}
          </span>
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
        </button>

        {/* Modal / Flyout Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Box */}
            <div className="fixed bottom-20 right-6 w-96 max-w-[calc(100vw-2rem)] bg-[#1e2838] border-2 border-gold-500 rounded-2xl shadow-2xl z-50 p-5 overflow-hidden animate-slide-up text-white">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-gold-500" />
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-white">
                      {lang === 'ro' ? 'Alegeți Tema Vizuală' : 'Choose Visual Theme'}
                    </h3>
                    <p className="text-[10px] text-gray-300">
                      انتخاب از بین ۴ تم طراحی‌شده
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* List of 4 Themes */}
              <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
                {themes.map((t) => {
                  const isActive = currentTheme === t.id;
                  const Icon = t.icon;

                  return (
                    <button
                      key={t.id}
                      onClick={() => changeTheme(t.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 group relative ${
                        isActive
                          ? 'bg-gold-500/15 border-gold-500 shadow-md ring-1 ring-gold-500/50'
                          : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                      }`}
                    >
                      {/* Color Preview Swatch */}
                      <div className="w-12 h-12 rounded-lg shrink-0 border border-slate-600 overflow-hidden flex flex-col p-1 gap-1 shadow-inner" style={{ backgroundColor: t.previewColors.bg }}>
                        <div className="h-4 rounded" style={{ backgroundColor: t.previewColors.card }} />
                        <div className="flex gap-1">
                          <div className="w-3 h-2 rounded-full" style={{ backgroundColor: t.previewColors.accent }} />
                          <div className="flex-1 h-2 rounded" style={{ backgroundColor: t.previewColors.text }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-heading font-bold text-xs text-white group-hover:text-gold-400 transition-colors">
                            {lang === 'ro' ? t.nameRo : t.nameEn}
                          </span>
                          {isActive && (
                            <span className="flex items-center gap-1 text-[10px] bg-gold-500 text-black px-1.5 py-0.5 rounded font-extrabold uppercase">
                              <Check className="w-3 h-3" />
                              Activ
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-gold-400 font-semibold mb-1">
                          {t.nameFa}
                        </p>

                        <p className="text-[10px] text-gray-300 line-clamp-2 leading-relaxed">
                          {lang === 'ro' ? t.descRo : t.descEn}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700 text-center">
                <p className="text-[10px] text-gray-400">
                  {lang === 'ro'
                    ? 'Tema selectată se salvează automat pe dispozitivul dvs.'
                    : 'Your selected theme is automatically saved to your browser.'}
                </p>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
};
