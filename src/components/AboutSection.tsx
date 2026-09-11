import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { Eye, Flag, Handshake, Gavel, RefreshCw, Cpu, ChevronRight, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      title: 'Vision',
      icon: Eye,
      summary: 'Building the world’s most disciplined, resilient operational infrastructure.',
      detail:
        'We believe enterprise scale should never dilute customer intimacy or process fidelity. Our global architecture connects sovereign delivery hubs into a unified, redundant operations fabric.'
    },
    {
      title: 'Mission',
      icon: Flag,
      summary: 'Delivering quantifiable operational alpha and unyielding SLA adherence.',
      detail:
        'Our sole measure of success is the verifiable enhancement of our clients’ balance sheets and operational stability, governed by contractually enforceable benchmarks.'
    },
    {
      title: 'Partnership',
      icon: Handshake,
      summary: 'Deep co-investment in enterprise outcomes with shared risk alignment.',
      detail:
        'We reject transactional vendor mentalities. Odilia aligns management bonuses and contractual margins directly to client satisfaction scores, error reduction, and cost targets.'
    },
    {
      title: 'Integrity',
      icon: Gavel,
      summary: 'Uncompromising ethics, categorical confidentiality, and institutional trust.',
      detail:
        'Air-gapped security protocols, clean-desk physical enclaves, and strict non-disclosure safeguards ensure your confidential workflows remain impenetrable.'
    },
    {
      title: 'Adaptability',
      icon: RefreshCw,
      summary: 'Agile process re-engineering responsive to technological and macro disruption.',
      detail:
        'When market dynamics, regulatory changes, or transaction spikes occur, our elastic management frameworks pivot without interrupting frontline SLAs.'
    },
    {
      title: 'Innovation',
      icon: Cpu,
      summary: 'Augmenting elite human professionals with custom automated workflow telemetry.',
      detail:
        'We deploy targeted AI assists, real-time speech analytics, and automated ledger reconciliation to empower our analysts—never to replace personal empathy.'
    }
  ];

  return (
    <section id="about-section" className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative & 6 Pillars */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
              Corporate Mandate
            </span>
            <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
              Not a vendor.
              <br />
              <span className="text-[#e9c176] font-normal italic">An extension of your team.</span>
            </h2>
            <p className="text-base lg:text-lg text-[#d1c5b4] leading-relaxed mb-8">
              Odilia Global operates as a consolidated sovereign operational partner. We synthesize Business
              Process Outsourcing, IT Infrastructure Monitoring, and Strategic HR Advisory under a unified,
              institutional service framework.
            </p>

            {/* 6 Value Cards with Interactive Detail Expanders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <button
                    key={pillar.title}
                    onClick={() => setSelectedPillar(isSelected ? null : idx)}
                    className={`text-left p-4 border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#201f22] border-[#e9c176] shadow-lg'
                        : 'bg-[#1c1b1e] border-white/5 hover:border-[#c5a059]/40 hover:bg-[#201f22]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 text-[#e9c176]">
                        <Icon size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#e5e1e4]">
                          {pillar.title}
                        </span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`text-[#c5a059] transition-transform ${
                          isSelected ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#d1c5b4] leading-relaxed">
                      {isSelected ? pillar.detail : pillar.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Executive Office Photo + Backlit Signage Image */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden bg-[#1c1b1e] border border-[#c5a059]/30 shadow-2xl">
              <img
                src={ASSETS.executiveReception}
                alt="Odilia Global Executive Boardroom and Reception"
                className="w-full h-full object-cover min-h-[460px] max-h-[600px] brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10]/95 via-[#0e0e10]/30 to-transparent pointer-events-none" />

              {/* Overlay Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0e0e10]/90 border border-[#c5a059]/40 backdrop-blur-md shadow-2xl">
                <span className="font-headline-sm text-lg sm:text-xl italic text-[#e5e1e4] leading-snug block mb-4">
                  "Enterprise trust is earned in the quiet rigor of day-to-day execution."
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-white/10 gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#e9c176]">
                    Office of the Executive Committee
                  </span>
                  <span className="text-xs text-[#8e9099]">
                    Global Operations HQ · London
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
