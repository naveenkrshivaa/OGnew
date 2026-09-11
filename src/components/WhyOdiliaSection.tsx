import React from 'react';
import { Building2, CheckSquare2, Lock, BarChart2, ShieldCheck } from 'lucide-react';

export const WhyOdiliaSection: React.FC = () => {
  const differentiators = [
    {
      icon: Building2,
      title: 'Partnership Over Vendorship',
      desc: 'We embed deeply into your internal culture, align executive compensation directly with outcome KPIs, and defend your brand equity with fiduciary rigor.',
      tag: 'Joint Risk Governance'
    },
    {
      icon: CheckSquare2,
      title: 'Proven Delivery Track Record',
      desc: 'Over 12 million high-stakes transactions processed annually across enterprise clients, maintaining an audited 99.7% compliance across all active SLAs.',
      tag: '12M+ Annual Actions'
    },
    {
      icon: Lock,
      title: 'NDA-First Engagement',
      desc: 'Zero operational data touches our analysts without prior non-disclosure covenants, hardened biometric workstations, and air-gapped terminal configurations.',
      tag: 'Jurisdictional Shield'
    },
    {
      icon: BarChart2,
      title: 'Full Transparency',
      desc: 'Direct, unvarnished access to frontline agent utilization, call recordings, QA score distributions, and real-time operational ledger exports.',
      tag: 'Unredacted Telemetry'
    }
  ];

  return (
    <section id="why-odilia" className="w-full bg-[#0e0e10] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
            The Odilia Advantage
          </span>
          <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
            Four pillars of sovereign operational security.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059]/40 p-8 flex flex-col justify-between hover:bg-[#201f22] transition-all group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] mb-6 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#e5e1e4] mb-3 group-hover:text-[#e9c176] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-[#d1c5b4] leading-relaxed mb-6">
                    {d.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-wider block">
                    {d.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
