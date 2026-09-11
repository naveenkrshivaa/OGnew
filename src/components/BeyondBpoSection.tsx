import React from 'react';
import { Terminal, Users2, Check, ArrowRight } from 'lucide-react';

interface BeyondBpoProps {
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const BeyondBpoSection: React.FC<BeyondBpoProps> = ({ onOpenConsultationWithService }) => {
  return (
    <section className="w-full bg-[#0e0e10] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
            Strategic Breadth
          </span>
          <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
            Beyond traditional business process outsourcing.
          </h2>
          <p className="text-base lg:text-lg text-[#d1c5b4] leading-relaxed">
            True operational resilience requires synchronization between talent, technology, and global entity compliance.
            Our complementary advisory practices complete the equation.
          </p>
        </div>

        {/* 2 Strategic Arms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Practice 01: IT & NOC */}
          <div className="bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059]/40 p-8 sm:p-12 flex flex-col justify-between hover:bg-[#201f22] transition-all group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest">
                  Practice 01 / Technology
                </span>
                <div className="w-12 h-12 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] group-hover:scale-105 transition-transform">
                  <Terminal size={24} />
                </div>
              </div>

              <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-3">
                Enterprise IT Services &amp; NOC
              </h3>
              <p className="text-sm sm:text-base text-[#d1c5b4] leading-relaxed mb-8">
                24/7 Network Operations Center (NOC), continuous cloud infrastructure monitoring, Level 1–3 internal IT helpdesk, and automated incident triage.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#d1c5b4] mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Multi-cloud health oversight (AWS, Azure, GCP)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Zero-day vulnerability patch escalation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Internal employee endpoint security support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenConsultationWithService('Enterprise IT Services & NOC')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e9c176] hover:text-[#ffdea5] transition-colors cursor-pointer"
            >
              <span>Explore IT Capabilities</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Practice 02: HR & EOR */}
          <div className="bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059]/40 p-8 sm:p-12 flex flex-col justify-between hover:bg-[#201f22] transition-all group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest">
                  Practice 02 / Capital
                </span>
                <div className="w-12 h-12 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] group-hover:scale-105 transition-transform">
                  <Users2 size={24} />
                </div>
              </div>

              <h3 className="font-headline-sm text-2xl text-[#e5e1e4] mb-3">
                Strategic HR Consultancy &amp; EOR
              </h3>
              <p className="text-sm sm:text-base text-[#d1c5b4] leading-relaxed mb-8">
                Global talent mobility, Employer of Record (EOR) infrastructure, multi-jurisdictional payroll compliance, and executive talent mapping across emerging tech hubs.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#d1c5b4] mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Cross-border labor law alignment &amp; taxation advisory</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Global payroll processing &amp; statutory benefits</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-4 h-4 bg-[#c5a059] text-[#0e0e10] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Offshore subsidiary establishment consulting</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenConsultationWithService('Strategic HR Consultancy & EOR')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e9c176] hover:text-[#ffdea5] transition-colors cursor-pointer"
            >
              <span>Explore HR Advisory</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
