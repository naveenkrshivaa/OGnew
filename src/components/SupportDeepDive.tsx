import React from 'react';
import { Phone, MessageSquare, Mail, Award, CheckCircle, ShieldCheck, Headphones, Sparkles } from 'lucide-react';

export const SupportDeepDive: React.FC = () => {
  const channels = [
    {
      num: '01',
      title: 'Voice Support',
      desc: 'Inbound & Tier-2 Resolution',
      icon: Phone,
      latency: '< 28s ASA',
      details: 'Trained in empathic de-escalation, accent neutrality, and complex triage with zero script dependency.'
    },
    {
      num: '02',
      title: 'Live Chat',
      desc: 'Sub-45s First Response',
      icon: MessageSquare,
      latency: '< 18s ASA',
      details: 'High-concurrency digital engagement with persistent context preservation across omnichannel handoffs.'
    },
    {
      num: '03',
      title: 'Email Desk',
      desc: 'Complex Case Research',
      icon: Mail,
      latency: '< 2h Turnaround',
      details: 'Exhaustive root-cause investigation, ledger audits, and comprehensive customer resolution dossiers.'
    },
    {
      num: '04',
      title: 'Social & VIP Desk',
      desc: 'Reputation & Escalation',
      icon: Award,
      latency: '< 15m Escalation',
      details: 'White-glove executive concierge for high-net-worth accounts, tier-1 brand reputation, and urgent escalations.'
    }
  ];

  return (
    <section className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Narrative Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.22em] block mb-3">
            Deep Dive
          </span>
          <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
            The sovereign standard in customer experience.
          </h2>
          <p className="text-base lg:text-lg text-[#d1c5b4] leading-relaxed">
            We don't manage ticket counts. We protect enterprise customer lifetime value through empathic communication,
            institutional technical knowledge, and continuous training matrices.
          </p>
        </div>

        {/* 4 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((chan) => {
            const Icon = chan.icon;
            return (
              <div
                key={chan.title}
                className="p-6 bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059]/40 flex flex-col justify-between transition-all hover:bg-[#201f22] group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#c5a059]">{chan.num}</span>
                    <div className="w-10 h-10 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] group-hover:bg-[#c5a059] group-hover:text-[#0e0e10] transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="font-sans text-base font-semibold text-[#e5e1e4] block mb-1">
                    {chan.title}
                  </span>
                  <span className="text-xs text-[#8e9099] block mb-3">{chan.desc}</span>

                  <p className="text-xs text-[#d1c5b4] leading-relaxed mb-4">
                    {chan.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-[#8e9099] uppercase tracking-wider">Benchmark</span>
                  <span className="text-[11px] text-[#e9c176] uppercase tracking-wider font-semibold font-mono">
                    {chan.latency}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Quality Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#18191e] border border-white/10">
          <div className="flex items-start gap-3">
            <CheckCircle size={18} className="text-[#e9c176] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-[#e5e1e4] uppercase tracking-wider block mb-1">
                Dedicated QA Leadership
              </span>
              <span className="text-xs text-[#8e9099] leading-relaxed block">
                Dedicated quality assurance directors assigned per account with daily cohort calibration.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle size={18} className="text-[#e9c176] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-[#e5e1e4] uppercase tracking-wider block mb-1">
                Transparent Governance
              </span>
              <span className="text-xs text-[#8e9099] leading-relaxed block">
                Executive-level operational transparency, unedited CSAT recording, and formal weekly reviews.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle size={18} className="text-[#e9c176] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-[#e5e1e4] uppercase tracking-wider block mb-1">
                Tone Certification
              </span>
              <span className="text-xs text-[#8e9099] leading-relaxed block">
                Bespoke brand immersion playbooks with continuous tone certification and cultural alignment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
