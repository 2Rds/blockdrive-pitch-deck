/*
 * BlockDrive Investor Pitch Deck
 * Design: Crystalline Fortress Architecture
 * - Near-black (#0a0a0f) foundation
 * - Cyan (#22d3ee) accent for active elements
 * - Frosted glass cards with subtle borders
 * - Plus Jakarta Sans headlines, Inter body
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slide imports
import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import ThesisSlide from '@/components/slides/ThesisSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import TractionSlide from '@/components/slides/TractionSlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import MarketSlide from '@/components/slides/MarketSlide';
import CompetitionSlide from '@/components/slides/CompetitionSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import AskSlide from '@/components/slides/AskSlide';

const TOTAL_SLIDES = 11;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const slides = [
    <TitleSlide key="title" />,
    <ProblemSlide key="problem" />,
    <ThesisSlide key="thesis" />,
    <SolutionSlide key="solution" />,
    <HowItWorksSlide key="how" />,
    <TractionSlide key="traction" />,
    <BusinessModelSlide key="model" />,
    <MarketSlide key="market" />,
    <CompetitionSlide key="competition" />,
    <TeamSlide key="team" />,
    <AskSlide key="ask" />,
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.03)_0%,_transparent_50%)]" />

      {/* Main slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'w-8 bg-cyan-400'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10 ${
          currentSlide === 0
            ? 'opacity-0 cursor-default'
            : 'text-white/40 hover:text-white hover:bg-white/10'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10 ${
          currentSlide === TOTAL_SLIDES - 1
            ? 'opacity-0 cursor-default'
            : 'text-white/40 hover:text-white hover:bg-white/10'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 text-white/30 text-sm font-medium z-10">
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>

      {/* Keyboard hint (hidden on mobile) */}
      <div className="absolute bottom-6 left-6 text-white/20 text-xs hidden md:block z-10">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  );
}
