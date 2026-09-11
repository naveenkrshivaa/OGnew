import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/content';
import { ShieldCheck, CheckCircle2, TrendingDown, ArrowUpRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultationWithIndustry?: (sectorName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenConsultationWithIndustry
}) => {
  const [selectedIndustryIndex, setSelectedIndustryIndex] = useState<number>(0);

  const tabs = [
    { label: 'Financial Services', idx: 0 },
    { label: 'Information Technology', idx: 1 },
    { label: 'FinTech & Web3', idx: 2 },
    { label: 'Retail & eCommerce', idx: 3 },
    { label: 'Aviation & Travel', idx: 4 },
    { label: 'Telecommunications', idx: 5 }
  ];

  const current = INDUSTRIES_DATA[selectedIndustryIndex] || INDUSTRIES_DATA[0];

  return (
    <section id="industries-section" className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
              Sector Specialization
            </span>
            <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight">
              Engineered for regulated verticals.
            </h2>
          </div>
          <p className="text-base text-[#d1c5b4] max-w-md">
            Deep contextual fluency and pre-configured regulatory compliance for demanding enterprise industries.
          </p>
        </div>

        {/* Horizontal Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isSelected = selectedIndustryIndex === tab.idx;
            return (
              <button
                key={tab.label}
                onClick={() => setSelectedIndustryIndex(tab.idx)}
                className={`px-5 py-3 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#c5a059] text-[#0e0e10] border-[#c5a059] font-semibold shadow-lg'
                    : 'bg-[#1c1b1e] text-[#d1c5b4] border-white/5 hover:border-[#c5a059]/40 hover:bg-[#201f22]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Industry Detail Card */}
        <div className="bg-[#1c1b1e] border border-[#c5a059]/30 p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest block mb-3">
                {current.sector}
              </span>
              <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e5e1e4] mb-4">
                {current.title}
              </h3>
              <p className="text-base text-[#d1c5b4] leading-relaxed mb-8">
                {current.desc}
              </p>

              {/* Compliance & Standards Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 bg-[#131315]/70 border border-white/5">
                    <ShieldCheck size={18} className="text-[#e9c176] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#e5e1e4] font-medium">{b}</span>
                  </div>
                ))}
              </div>

              {onOpenConsultationWithIndustry && (
                <button
                  onClick={() => onOpenConsultationWithIndustry(current.sector)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e9c176] hover:text-[#ffdea5] transition-colors cursor-pointer"
                >
                  <span>Request {current.sector} Case Study &amp; SLA Deck</span>
                  <ArrowUpRight size={14} />
                </button>
              )}
            </div>

            {/* Right: Verified Impact Cards */}
            <div className="lg:col-span-5 bg-[#131315] border border-white/10 p-6 sm:p-8">
              <h4 className="text-xs font-semibold text-[#e9c176] uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
                Verified Institutional Impact
              </h4>

              <div className="space-y-6">
                <div className="p-4 bg-[#1c1b1e] border border-white/5">
                  <span className="font-headline-md text-3xl sm:text-4xl text-[#e5e1e4] block font-serif mb-1">
                    {current.stat1}
                  </span>
                  <span className="text-xs text-[#d1c5b4] leading-relaxed block">
                    {current.stat1Text}
                  </span>
                </div>

                <div className="p-4 bg-[#1c1b1e] border border-white/5">
                  <span className="font-headline-md text-3xl sm:text-4xl text-[#e9c176] block font-serif mb-1">
                    {current.stat2}
                  </span>
                  <span className="text-xs text-[#d1c5b4] leading-relaxed block">
                    {current.stat2Text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
