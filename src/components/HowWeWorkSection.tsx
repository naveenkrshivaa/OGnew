import React, { useState } from 'react';
import { Check, ChevronRight, FileText, ShieldCheck, Users, BarChart3 } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      step: '01',
      period: 'Phase I · Weeks 1-2',
      title: 'Assessment & Blueprint',
      desc: 'Deep-dive workflow discovery, SOP gap analysis, compliance parameter auditing, volume modeling, and SLA calibration before a single agent is assigned.',
      deliverable: 'Deliverable: Comprehensive Transition Charter',
      icon: FileText,
      milestones: [
        'Exhaustive SOP & Knowledge Repository Audit',
        'Information Security & Access Boundary Mapping',
        'Dynamic Call/Ticket Distribution Modeling',
        'Contractual SLA Floor & Escalation Threshold Sign-off'
      ]
    },
    {
      step: '02',
      period: 'Phase II · Weeks 3-4',
      title: 'Implementation & Shadowing',
      desc: 'Targeted cohort recruitment, secure zero-trust network sandbox setup, shadow execution with domestic leads, and parallel processing calibration.',
      deliverable: 'Deliverable: Sandbox Pilot Certification & Sign-off',
      icon: Users,
      milestones: [
        'Top 3% Dedicated Team Onboarding & Brand Immersion',
        'Biometric Secure Workstation Provisioning (Clean-Desk)',
        'Parallel Run: Odilia Operates Under 100% Domestic Review',
        'Zero Variance Variance-Testing & Gate Sign-off'
      ]
    },
    {
      step: '03',
      period: 'Phase III · Ongoing',
      title: 'Monitoring & Improvement',
      desc: 'Full live cutover, 24/7 telemetry monitoring, bi-weekly quality audits, monthly executive steering governance, and Kaizen process optimization.',
      deliverable: 'Deliverable: Live Executive Dashboard & Monthly Steering Deck',
      icon: BarChart3,
      milestones: [
        'Sovereign Live Cutover with Standby Escalation Leads',
        'Continuous AI-Assisted Tone & Quality Listening',
        'Bi-Weekly Executive Steering & Operational Health Reviews',
        'Continuous Process Automation & Cost-Reduction Sharing'
      ]
    }
  ];

  return (
    <section id="how-we-work" className="w-full bg-[#0e0e10] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
            Governance Model
          </span>
          <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
            Predictable, transparent operational orchestration.
          </h2>
          <p className="text-base lg:text-lg text-[#d1c5b4] leading-relaxed">
            A phased, risk-mitigated transition lifecycle designed to minimize domestic operational disruption and guarantee steady-state performance.
          </p>
        </div>

        {/* 3 Interactive Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePhase === idx;
            return (
              <div
                key={p.step}
                onClick={() => setActivePhase(idx)}
                className={`p-8 border flex flex-col justify-between transition-all cursor-pointer shadow-md ${
                  isSelected
                    ? 'bg-[#201f22] border-[#e9c176] ring-1 ring-[#e9c176]/30'
                    : 'bg-[#1c1b1e] border-white/10 hover:border-[#c5a059]/40 hover:bg-[#201f22]'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-6 text-[#e9c176] font-headline-sm text-2xl font-serif">
                    {p.step}
                  </div>
                  <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-wider block mb-2">
                    {p.period}
                  </span>
                  <h3 className="font-sans text-xl font-semibold text-[#e5e1e4] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#d1c5b4] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#ffdea5]">
                    <ShieldCheck size={16} className="text-[#c5a059] shrink-0" />
                    <span>{p.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Phase Deep-Dive Drawer */}
        <div className="bg-[#18191e] border border-[#c5a059]/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
            <div>
              <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-semibold block">
                Deep Dive Inspection
              </span>
              <h4 className="font-sans text-lg font-semibold text-[#e5e1e4]">
                {phases[activePhase].period} Execution Blueprint
              </h4>
            </div>
            <span className="text-xs text-[#8e9099] uppercase tracking-wider font-mono">
              Risk Gate: 100% Sign-Off Required Prior to Promotion
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases[activePhase].milestones.map((ms, i) => (
              <div key={i} className="p-4 bg-[#131315] border border-white/5 flex items-start gap-3">
                <span className="w-5 h-5 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">{ms}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
