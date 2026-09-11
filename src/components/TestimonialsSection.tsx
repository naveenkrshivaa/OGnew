import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { ArrowLeft, ArrowRight, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
              Executive Testimonials
            </span>
            <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight">
              Client voices.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-12 h-12 bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059] hover:bg-[#201f22] text-[#e5e1e4] hover:text-[#e9c176] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-12 h-12 bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059] hover:bg-[#201f22] text-[#e5e1e4] hover:text-[#e9c176] flex items-center justify-center transition-all cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="bg-[#1c1b1e] border border-[#c5a059]/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative min-h-[340px] flex flex-col justify-between overflow-hidden">
          {/* Subtle Watermark Quote Mark */}
          <span className="text-[#c5a059]/10 font-serif text-[120px] leading-none absolute top-4 left-6 select-none pointer-events-none">
            “
          </span>

          <div className="relative z-10 pt-4">
            <p className="font-headline-md text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] font-serif italic leading-relaxed max-w-4xl transition-all duration-300">
              "{current.quote}"
            </p>
          </div>

          <div className="relative z-10 pt-10 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-sans text-lg font-semibold text-[#e5e1e4]">
                {current.author}
              </div>
              <div className="text-xs text-[#e9c176] uppercase tracking-wider mt-1">
                {current.company}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d1c5b4]">
              <ShieldCheck size={16} className="text-[#e9c176]" />
              <span>Verified Institutional Review</span>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all cursor-pointer ${
                currentIndex === i ? 'w-8 bg-[#e9c176]' : 'w-2 bg-[#2a2a2c] hover:bg-[#c5a059]/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
