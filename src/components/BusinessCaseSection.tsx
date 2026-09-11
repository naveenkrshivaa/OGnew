import React from 'react';
import {
  Landmark,
  Target,
  Award,
  TrendingUp,
  ShieldAlert,
  Zap
} from 'lucide-react';

interface BusinessCaseSectionProps {
  onOpenConsultation?: () => void;
}

export const BusinessCaseSection: React.FC<BusinessCaseSectionProps> = () => {
  const rationalePillars = [
    {
      num: '01',
      icon: Landmark,
      title: 'Cost Efficiency',
      desc: 'Structural cost restructuring delivering 40% to 60% operational savings without sacrificing output fidelity, jurisdictional privacy, or audit compliance.',
      benchmark: 'Benchmark: 52% Average Net OpEx Reduction'
    },
    {
      num: '02',
      icon: Target,
      title: 'Focus on Core Business',
      desc: 'Liberate senior leadership and domestic teams from operational drag. Rechannel critical organizational bandwidth into market expansion and product innovation.',
      benchmark: 'Impact: +34% Internal Engineering Velocity'
    },
    {
      num: '03',
      icon: Award,
      title: 'Skilled Expertise',
      desc: 'Immediate deployment of university-accredited, domain-certified cohorts across multilingual customer retention, high-volume reconciliation, and complex data logic.',
      benchmark: 'Talent: Top 3% Selective Hiring Quotient'
    },
    {
      num: '04',
      icon: TrendingUp,
      title: 'Flexibility & Scale',
      desc: 'Elastic capacity deployment that mirrors your transaction cycles. Ramp upwards seamlessly for seasonal bursts, acquisitions, or rapid geographic launches.',
      benchmark: 'Capacity: Scalable from 10 to 500+ FTEs in 30 Days'
    },
    {
      num: '05',
      icon: ShieldAlert,
      title: 'Risk & Quality Control',
      desc: 'Contractually bounded SLA metrics, institutional business continuity planning, and SOC 2 / ISO 27001 calibrated workstation segregation.',
      benchmark: 'Assurance: 99.8% Contractual SLA Adherence'
    },
    {
      num: '06',
      icon: Zap,
      title: 'Faster Time-to-Value',
      desc: 'Turnkey onboarding playbooks, parallel shadow environments, and accelerated knowledge transfer frameworks yielding steady-state competency within 21 days.',
      benchmark: 'Velocity: Zero Interruption Migration Protocol'
    }
  ];

  return (
    <section id="business-case" className="w-full bg-[#0e0e10] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
            The Fiduciary Rationale
          </span>
          <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
            Outsourcing should create leverage, not another layer of management.
          </h2>
          <p className="text-lg text-[#d1c5b4] leading-relaxed">
            Conventional BPO shifts work without assuming responsibility. Odilia eliminates operational surveillance
            through institutional SLA governance, automated reporting telemetry, and Six Sigma variance reduction.
          </p>
        </div>

        {/* 6 Institutional Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rationalePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059]/40 p-8 flex flex-col justify-between transition-all hover:bg-[#201f22] group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-md text-3xl text-[#c5a059]/70 font-serif">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176]">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-[#e5e1e4] mb-3 group-hover:text-[#e9c176] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#d1c5b4] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-wider block">
                    {pillar.benchmark}
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
