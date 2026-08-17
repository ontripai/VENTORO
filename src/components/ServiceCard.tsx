'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  Zap,
  Flame,
  Layers,
  Building2,
  Sprout,
  Truck,
  Utensils,
  Sparkles,
  Gem,
  Pickaxe,
  HeartPulse,
  ArrowRight,
} from 'lucide-react';
import { ServiceClusterItem, Language } from '@/types';

interface ServiceCardProps {
  service: ServiceClusterItem;
  lang: Language;
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Zap,
  Flame,
  Layers,
  Building2,
  Sprout,
  Truck,
  Utensils,
  Sparkles,
  Gem,
  Pickaxe,
  HeartPulse,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang }) => {
  const IconComponent = iconMap[service.iconName] || Cpu;
  const title = lang === 'ro' ? service.titleRo : service.titleEn;
  const desc = lang === 'ro' ? service.shortDescRo : service.shortDescEn;
  const href = `/${lang}/${lang === 'ro' ? 'servicii' : 'services'}/${
    lang === 'ro' ? service.slugRo : service.slugEn
  }`;
  const btnLabel = lang === 'ro' ? 'Citește mai mult' : 'Read more';

  return (
    <div className="bg-[#141a24] rounded-xl overflow-hidden border border-gray-800 hover:border-gold-500/50 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-gold-500/10">
      {/* Image Thumbnail with Rollover */}
      <Link href={href} className="relative block h-52 w-full overflow-hidden bg-gray-900">
        <Image
          src={service.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141a24] via-transparent to-transparent opacity-80" />
        
        {/* Category Icon Badge */}
        <div className="absolute top-4 right-4 w-11 h-11 rounded-lg bg-black/70 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors shadow-md">
          <IconComponent className="w-5 h-5" />
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <Link href={href} className="focus:outline-none">
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-3 line-clamp-1">
            {title}
          </h3>
        </Link>

        {/* Golden accent line */}
        <div className="w-10 h-0.5 bg-gold-500 mb-4 transition-all duration-300 group-hover:w-16" />

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {desc}
        </p>

        {/* Read more button matching perdac.ro */}
        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 group/btn"
          >
            <span>{btnLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
