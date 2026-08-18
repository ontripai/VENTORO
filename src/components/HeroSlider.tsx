'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/lib/i18n';

interface HeroSliderProps {
  lang: Language;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const slides = dict.hero.slides;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="hero-slider relative w-full h-[620px] sm:h-[680px] lg:h-[740px] overflow-hidden bg-brand-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={lang === 'ro' ? 'Prezentare principală VENTORO' : 'VENTORO Main Showcase'}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image using Next.js Image with priority on first slide for ultra-fast LCP */}
            <div
              className={`absolute inset-0 transition-transform duration-10000 ease-linear ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Dark & Gold Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />

            {/* Content Wrap */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-3xl">
                {/* Gold Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs font-bold tracking-widest uppercase mb-5 animate-fade-in shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href={slide.btnPrimaryHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.btnPrimary}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={slide.btnSecondaryHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/80 hover:border-gold-400 hover:bg-gold-400/10 text-white hover:text-gold-400 font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-sm"
                  >
                    <span>{slide.btnSecondary}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-gold-500 text-white hover:text-black border border-white/20 hover:border-gold-500 flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md min-w-[48px] min-h-[48px]"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-gold-500 text-white hover:text-black border border-white/20 hover:border-gold-500 flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md min-w-[48px] min-h-[48px]"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators with accessible touch targets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-1 sm:space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 block ${
                idx === current
                  ? 'w-10 bg-gold-500 shadow-md shadow-gold-500/50'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

