'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="hero"
      className="relative h-[90vh] pt-28 pb-6 flex flex-col justify-between overflow-hidden bg-[#070E17]"
    >
      {/* Background Image Carousel Container with Crossfade */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {/* Background Image */}
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          {/* Corporate Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#070E17]/60 via-[#070E17]/50 to-[#070E17]/30"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#070E17] via-transparent to-[#070E17]/60"></div>
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto py-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl space-y-6"
          >
            
            {/* Subtle Category Eyebrow - Cyan Accent */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono font-medium tracking-widest text-cyan-400 uppercase"
            >
              ENTERPRISE BEHAVIORAL INTELLIGENCE
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.12] drop-shadow-sm"
            >
              {slide.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-200 font-light leading-relaxed drop-shadow max-w-2xl"
            >
              {slide.subheadline}
            </motion.p>

            {/* Turquoise Call to Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <button
                className="px-7 py-4 cursor-pointer text-sm font-medium tracking-wider text-white bg-teal-600 hover:bg-teal-500 transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-teal-900/20"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Tab Bar */}
      <div className="relative z-20 w-full border-t border-white/10 bg-linear-to-t from-[#070E17] to-transparent pt-4 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className="text-left group cursor-pointer focus:outline-none py-2"
                >
                  {/* Top Line Indicator - Turquoise active indicator */}
                  <div className="w-full bg-white/20 h-0.5 relative overflow-hidden mb-3">
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-teal-500 h-0.5"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                  {/* Title Text */}
                  <p className={`text-xs sm:text-sm font-light transition-colors line-clamp-2 ${
                    isActive ? 'text-white font-normal' : 'text-slate-400 group-hover:text-cyan-300'
                  }`}>
                    {s.headline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroCarousel;