'use client';

import React from 'react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface PrinciplesSectionProps {
  lang: Language;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const data = dict.principles;

  return (
    <section className="py-20 bg-[#0f141c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            {data.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141a24] p-6 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              <div>
                <span className="font-heading text-4xl font-black text-gold-500/30 group-hover:text-gold-500 transition-colors block mb-4">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-gold-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-8 h-0.5 bg-gray-800 group-hover:bg-gold-500 transition-colors mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
