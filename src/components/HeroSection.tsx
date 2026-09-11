import React from 'react';
import { ASSETS } from '../data/content';
import { Shield, ArrowRight, CheckCircle, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onSelectServiceTab: (index: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onSelectServiceTab
}) => {
  const capabilityCards = [
    {
      num: '01',
      tag: 'Service',
      title: 'Customer Support',
      desc: 'Tier 1-3 Omnichannel Care',
      tabIndex: 0
    },
    {
      num: '02',
      tag: 'Operations',
      title: 'Back-Office Engine',
      desc: 'Adjudication & Document QA',
      tabIndex: 4
    },
    {
      num: '03',
      tag: 'Capital',
      title: 'Finance & Accounting',
      desc: 'GL, Reconciliation & Payroll',
      tabIndex: 2
    },
    {
      num: '04',
      tag: 'Scalability',
      title: 'HR & Process Mastery',
      desc: 'Elastic Talent Infrastructure',
      tabIndex: 3
    }
  ];

  const handleCapabilityClick = (tabIndex: number) => {
    onSelectServiceTab(tabIndex);
    const element = document.querySelector('#services-explorer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0e0e10] border-b border-white/10">
      {/* Background Command Center Image with Gradient Multi-Layering */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-100"
          style={{ backgroundImage: `url('${ASSETS.heroBg}')` }}
        />
        {/* Darkening & Gold ambient illumination */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e10]/95 via-[#0e0e10]/80 to-[#0e0e10]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-[#0e0e10]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c5a059]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-48 lg:pb-24 flex flex-col min-h-[92vh] justify-between">
        {/* Main Editorial Narrative */}
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#201f22]/90 border border-[#c5a059]/30 backdrop-blur-md mb-6 shadow-md">
            <span className="w-2 h-2 bg-[#e9c176] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em]">
              Global Operations Orchestration
            </span>
          </div>

          {/* Headline in EB Garamond */}
          <h1 className="font-headline-display text-[#e5e1e4] leading-[1.05] tracking-tight mb-5">
            Your operations.
            <br />
            <span className="italic text-[#e9c176] font-normal">Our accountability.</span>
          </h1>

          {/* Body */}
          <p className="text-lg text-[#d1c5b4] max-w-2xl leading-relaxed mb-8">
            Odilia Global is a trusted sovereign partner for customer support, back-office administration,
            finance &amp; accounting, and strategic process outsourcing worldwide.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center bg-[#e9c176] hover:bg-[#ffdea5] text-[#261900] font-sans font-semibold text-[13px] uppercase tracking-wider px-8 py-4 shadow-2xl transition-all cursor-pointer group"
            >
              <span>Talk to Our Team</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services-explorer"
              className="inline-flex items-center justify-center bg-[#1c1b1e]/80 hover:bg-[#2a2a2c] text-[#e5e1e4] border border-[#c5a059]/30 hover:border-[#e9c176] font-sans font-medium text-[13px] uppercase tracking-wider px-7 py-4 transition-all"
            >
              Explore Capabilities
            </a>
          </div>
        </div>

        {/* Live Operational Ticker */}
        <div className="mt-12 py-3 px-4 bg-[#131315]/85 border-y border-[#c5a059]/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#e9c176] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
              Operational Network Status:
            </span>
            <span className="text-[#e5e1e4]">All Global Pods Green</span>
          </div>

          <div className="flex items-center gap-6 text-[#d1c5b4] text-[11px] uppercase tracking-wider overflow-x-auto">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#c5a059]" />
              London: 10:34 GMT
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#c5a059]" />
              Singapore: 17:34 SGT
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#c5a059]" />
              Manila: 17:34 PHT
            </span>
            <span className="flex items-center gap-1.5 text-[#e9c176]">
              <CheckCircle size={12} />
              Audited SLA: 99.85%
            </span>
          </div>
        </div>

        {/* 4-Item Capability Bar */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 bg-[#0e0e10]/80 border border-white/10 backdrop-blur-md p-4">
          {capabilityCards.map((card) => (
            <button
              key={card.num}
              onClick={() => handleCapabilityClick(card.tabIndex)}
              className="flex flex-col text-left gap-1 p-3 bg-[#18191e]/50 hover:bg-[#201f22] border border-transparent hover:border-[#c5a059]/40 transition-all group cursor-pointer"
            >
              <span className="text-[10px] font-semibold text-[#c5a059] uppercase tracking-[0.2em]">
                {card.num} / {card.tag}
              </span>
              <span className="font-sans text-sm font-semibold text-[#e5e1e4] group-hover:text-[#e9c176] transition-colors">
                {card.title}
              </span>
              <span className="text-xs text-[#8e9099] group-hover:text-[#d1c5b4] transition-colors">
                {card.desc}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
