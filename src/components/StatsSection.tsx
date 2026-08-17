'use client';

import React from 'react';
import { Award, Briefcase, Smile, Headphones } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface StatsSectionProps {
  lang: Language;
}

const icons = [Award, Briefcase, Smile, Headphones];

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const stats = dict.stats;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#0a0d13] to-[#111622] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gray-900/40 border border-gray-800/80 hover:border-gold-500/30 transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight group-hover:text-gold-400 transition-colors">
                  {item.value}
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
