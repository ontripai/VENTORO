'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '@/types';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang: Language;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, lang }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs">
      <ol className="flex items-center flex-wrap gap-2 text-gray-400">
        <li>
          <Link
            href={`/${lang}`}
            className="flex items-center gap-1 hover:text-gold-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-gold-500" />
            <span>{lang === 'ro' ? 'Acasă' : 'Home'}</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-gray-600" />
              {isLast || !item.href ? (
                <span className="text-gold-400 font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-gold-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
