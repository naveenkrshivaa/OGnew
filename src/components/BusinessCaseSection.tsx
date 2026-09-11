import React, { useState } from 'react';
import {
  Landmark,
  Target,
  Award,
  TrendingUp,
  ShieldAlert,
  Zap,
  Calculator,
  ArrowRight,
  Sliders
} from 'lucide-react';

interface BusinessCaseSectionProps {
  onOpenConsultation: () => void;
}

export const BusinessCaseSection: React.FC<BusinessCaseSectionProps> = ({ onOpenConsultation }) => {
  // ROI Calculator interactive state
  const [teamSize, setTeamSize] = useState<number>(35);
  const [selectedDomain, setSelectedDomain] = useState<'support' | 'finance' | 'backoffice' | 'it'>('support');
  const [domesticLocation, setDomesticLocation] = useState<'us' | 'uk' | 'eu'>('us');

  // Calculation parameters based on domain and region
  const domainRates: Record<string, { domesticUS: number; domesticUK: number; domesticEU: number; odiliaRate: number; name: string }> = {
    support: {
      name: 'Omnichannel Customer Support',
      domesticUS: 68000,
      domesticUK: 52000,
      domesticEU: 58000,
      odiliaRate: 26500
    },
    finance: {
      name: 'Finance, AP/AR & General Ledger',
      domesticUS: 84000,
      domesticUK: 64000,
      domesticEU: 72000,
      odiliaRate: 33000
    },
    backoffice: {
      name: 'High-Volume Claims & Back-Office',
      domesticUS: 62000,
      domesticUK: 48000,
      domesticEU: 54000,
      odiliaRate: 24500
    },
    it: {
      name: 'IT Service Desk & Infrastructure NOC',
      domesticUS: 95000,
      domesticUK: 74000,
      domesticEU: 82000,
      odiliaRate: 38000
    }
  };

  const currentRate = domainRates[selectedDomain];
  const domesticCostPerFTE =
    domesticLocation === 'us'
      ? currentRate.domesticUS
      : domesticLocation === 'uk'
      ? currentRate.domesticUK
      : currentRate.domesticEU;

  const odiliaCostPerFTE = currentRate.odiliaRate;
  const annualDomesticTotal = domesticCostPerFTE * teamSize;
  const annualOdiliaTotal = odiliaCostPerFTE * teamSize;
  const annualSavings = annualDomesticTotal - annualOdiliaTotal;
  const threeYearSavings = annualSavings * 3;
  const percentageSavings = Math.round((annualSavings / annualDomesticTotal) * 100);

  const formatCurrency = (val: number) => {
    const symbol = domesticLocation === 'uk' ? '£' : domesticLocation === 'eu' ? '€' : '$';
    return `${symbol}${val.toLocaleString('en-US')}`;
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        {/* Interactive OpEx ROI & Capital Arbitrage Simulator */}
        <div className="bg-[#131315] border border-[#c5a059]/30 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#e9c176] uppercase tracking-widest mb-2">
                <Calculator size={14} />
                <span>Executive Decision Model</span>
              </div>
              <h3 className="font-headline-md text-2xl lg:text-3xl text-[#e5e1e4]">
                Interactive OpEx Arbitrage &amp; Capacity Simulator
              </h3>
            </div>
            <span className="text-xs text-[#8e9099] uppercase tracking-wider">
              Calibrated to Global 2000 Cost Baselines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Domain Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-2">
                  1. Select Target Function
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'support', label: 'Customer Support' },
                      { id: 'finance', label: 'Finance & Ledger' },
                      { id: 'backoffice', label: 'Back-Office Ops' },
                      { id: 'it', label: 'IT Support & NOC' }
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedDomain(item.id)}
                      className={`p-3 text-xs uppercase tracking-wider text-left border transition-all cursor-pointer font-medium ${
                        selectedDomain === item.id
                          ? 'bg-[#c5a059] text-[#0e0e10] border-[#c5a059] font-semibold'
                          : 'bg-[#1c1b1e] text-[#d1c5b4] border-white/10 hover:border-[#c5a059]/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Geographic Baseline */}
              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-2">
                  2. Current In-House Hub
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'us', label: 'United States (USD)' },
                    { id: 'uk', label: 'United Kingdom (GBP)' },
                    { id: 'eu', label: 'European Union (EUR)' }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setDomesticLocation(loc.id as any)}
                      className={`flex-1 py-2.5 px-3 text-xs uppercase tracking-wider border text-center transition-all cursor-pointer ${
                        domesticLocation === loc.id
                          ? 'bg-[#2a2a2c] text-[#e9c176] border-[#c5a059]'
                          : 'bg-[#1c1b1e] text-[#8e9099] border-white/10 hover:text-white'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider">
                    3. Target Dedicated Capacity (FTEs)
                  </label>
                  <span className="font-headline-sm text-xl text-[#e9c176] font-serif">
                    {teamSize} Dedicated FTEs
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#c5a059] cursor-pointer bg-[#2a2a2c] h-2 appearance-none"
                />
                <div className="flex justify-between text-[10px] text-[#8e9099] mt-1 uppercase tracking-wider">
                  <span>10 FTEs (Focused Pod)</span>
                  <span>100 FTEs (Division Scale)</span>
                  <span>250+ FTEs (Enterprise Hub)</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-[#1c1b1e] border border-[#c5a059]/40 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-[#c5a059] uppercase tracking-widest block mb-1">
                  Projected Fiduciary Arbitrage
                </span>
                <div className="font-headline-lg text-4xl lg:text-5xl text-[#e9c176] font-serif mb-2">
                  {formatCurrency(annualSavings)}
                  <span className="text-base font-sans font-normal text-[#d1c5b4] ml-2">/ Year</span>
                </div>
                <p className="text-xs text-[#8e9099] mb-6">
                  Net operational savings relative to domestic in-house employment costs ({percentageSavings}% net reduction).
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 mb-6">
                  <div>
                    <span className="text-[11px] text-[#8e9099] uppercase tracking-wider block">
                      3-Year Value Captured
                    </span>
                    <span className="font-headline-sm text-2xl text-[#e5e1e4] font-serif">
                      {formatCurrency(threeYearSavings)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8e9099] uppercase tracking-wider block">
                      Contractual SLA Floor
                    </span>
                    <span className="font-headline-sm text-2xl text-emerald-400 font-serif">
                      99.8% Guaranteed
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#d1c5b4] mb-6">
                  <div className="flex justify-between">
                    <span>In-House Cost Baseline:</span>
                    <span className="text-white font-medium">{formatCurrency(annualDomesticTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Odilia Sovereign Run-Rate:</span>
                    <span className="text-[#e9c176] font-medium">{formatCurrency(annualOdiliaTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transition Duration:</span>
                    <span className="text-white font-medium">21 Days to Steady-State</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] font-sans font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Request Custom Arbitrage Dossier</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
