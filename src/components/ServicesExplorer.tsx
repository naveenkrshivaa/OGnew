import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesExplorerProps {
  selectedServiceIndex: number;
  setSelectedServiceIndex: (idx: number) => void;
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const ServicesExplorer: React.FC<ServicesExplorerProps> = ({
  selectedServiceIndex,
  setSelectedServiceIndex,
  onOpenConsultationWithService
}) => {
  const currentService = SERVICES_DATA[selectedServiceIndex] || SERVICES_DATA[0];

  return (
    <section id="services-explorer" className="w-full bg-[#0e0e10] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
              Core Disciplines
            </span>
            <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight">
              Institutional capabilities catalog.
            </h2>
          </div>
          <p className="text-base text-[#d1c5b4] max-w-md">
            Explore specialized domain teams engineered to operate with military precision and contractually guaranteed SLA fidelity.
          </p>
        </div>

        {/* Interactive Master-Detail Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#18191e] border border-white/10 p-6 lg:p-8 shadow-2xl">
          {/* Vertical Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {SERVICES_DATA.map((svc, idx) => {
              const isSelected = selectedServiceIndex === idx;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedServiceIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#201f22] border-[#e9c176] shadow-md pl-6'
                      : 'bg-[#131315] border-white/5 hover:border-[#c5a059]/40 hover:bg-[#1a1b1f]'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest block mb-1 ${
                        isSelected ? 'text-[#e9c176]' : 'text-[#8e9099]'
                      }`}
                    >
                      {svc.number} / {svc.category}
                    </span>
                    <span className="font-sans text-base sm:text-lg font-semibold text-[#e5e1e4]">
                      {svc.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`transition-all ${
                      isSelected ? 'text-[#e9c176] translate-x-1' : 'text-[#8e9099]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Showcase */}
          <div className="lg:col-span-7 bg-[#201f22] border border-white/10 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Eyebrow & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.2em]">
                  {currentService.eyebrow}
                </span>
                <span className="px-3 py-1 bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#ffdea5] text-[11px] font-semibold uppercase tracking-wider">
                  {currentService.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e5e1e4] mb-4">
                {currentService.title} Ecosystems
              </h3>
              <p className="text-sm sm:text-base text-[#d1c5b4] leading-relaxed mb-8">
                {currentService.desc}
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 bg-[#18191e]/60 border border-white/5">
                    <CheckCircle2 size={16} className="text-[#e9c176] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#e5e1e4]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Metrics Bar & CTA */}
            <div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#18191e] border border-white/10 mb-6">
                {currentService.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">
                      {m.label}
                    </span>
                    <span className="font-headline-sm text-xl sm:text-2xl text-[#e5e1e4] font-serif">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#8e9099]">
                  <ShieldCheck size={16} className="text-[#c5a059]" />
                  <span>ISO 27001 &amp; SOC 2 Type II Workstations</span>
                </div>

                <button
                  onClick={() => onOpenConsultationWithService(currentService.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  <span>Initiate {currentService.title} Scope</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
