'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '@/types';

interface WhatsAppCallCtaProps {
  lang: Language;
}

export const WhatsAppCallCta: React.FC<WhatsAppCallCtaProps> = ({ lang }) => {
  const phoneFormatted = '+40 725 880000';
  const phoneClean = '+40725880000';
  const whatsappClean = '40725880000';

  const whatsappMessage =
    lang === 'ro'
      ? 'Bună ziua! Doresc să solicit mai multe informații despre serviciile și echipamentele VENTORO S.R.L.'
      : 'Hello! I would like to inquire about VENTORO S.R.L. engineering services and equipment.';

  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* 1. Mobile Fixed Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#141c28]/95 backdrop-blur-md border-t border-gold-500/40 px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Phone Direct Call Button */}
          <a
            href={`tel:${phoneClean}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold text-xs shadow-md active:scale-95 transition-transform"
            aria-label={lang === 'ro' ? 'Sună acum la VENTORO' : 'Call VENTORO now'}
          >
            <Phone className="w-4 h-4 shrink-0 text-black fill-black" />
            <span className="truncate">{lang === 'ro' ? 'Sună Acum' : 'Call Now'}</span>
          </a>

          {/* WhatsApp Business Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
            aria-label={lang === 'ro' ? 'Mesaj pe WhatsApp Business' : 'Chat on WhatsApp Business'}
          >
            <MessageCircle className="w-4 h-4 shrink-0 text-white fill-white" />
            <span className="truncate">WhatsApp B2B</span>
          </a>
        </div>
      </div>

      {/* 2. Floating Desktop & Tablet WhatsApp Widget (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#222c3d] hover:bg-[#141c28] text-white border border-gold-500/50 hover:border-gold-400 py-2.5 px-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,192,0,0.35)] group-hover:scale-105"
          aria-label={lang === 'ro' ? 'Contactează-ne pe WhatsApp' : 'Contact us on WhatsApp'}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-md relative">
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <div className="text-left">
            <p className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
              {lang === 'ro' ? 'WhatsApp Business' : 'WhatsApp B2B'}
            </p>
            <p className="text-xs font-bold text-white font-mono">{phoneFormatted}</p>
          </div>
        </a>
      </div>
    </>
  );
};
