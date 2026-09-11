import React, { useState } from 'react';
import { Mail, Phone, Lock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onSuccessSubmit: (email: string, scope: string, scale: string) => void;
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSuccessSubmit,
  prefilledScope = 'Customer Support (Tier 1-3)'
}) => {
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState(prefilledScope);
  const [scale, setScale] = useState('25 - 100 Dedicated FTEs');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    onSuccessSubmit(email, scope, scale);
  };

  return (
    <section id="contact-desk" className="w-full bg-[#131315] py-24 sm:py-32 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1c1b1e] border border-[#c5a059]/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative & Contact Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#e9c176] text-[11px] font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 bg-[#e9c176] animate-pulse" />
                <span>Confidential Executive Consultation</span>
              </div>

              <h2 className="font-headline-lg text-[#e5e1e4] tracking-tight mb-5">
                Let’s build a better operation.
              </h2>
              <p className="text-base sm:text-lg text-[#d1c5b4] leading-relaxed mb-8 max-w-xl">
                Schedule a confidential discovery session with our global operations directors. We will analyze your volume matrices and return a tailored transition blueprint within 72 hours.
              </p>

              <div className="space-y-4 text-sm text-[#d1c5b4] pt-2 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] shrink-0">
                    <Mail size={16} />
                  </div>
                  <span>
                    Direct Executive Desk:{' '}
                    <strong className="text-[#e5e1e4] hover:text-[#e9c176] transition-colors">
                      enterprise@odiliaglobal.com
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] shrink-0">
                    <Phone size={16} />
                  </div>
                  <span>
                    London Operations Desk:{' '}
                    <strong className="text-[#e5e1e4]">+44 20 7946 0912</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] shrink-0">
                    <Phone size={16} />
                  </div>
                  <span>
                    New York Sovereign Office:{' '}
                    <strong className="text-[#e5e1e4]">+1 (212) 555-0198</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-5 bg-[#201f22] border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="font-sans text-xl font-semibold text-[#e5e1e4] mb-2">
                Initiate Advisory Protocol
              </h3>
              <p className="text-xs text-[#8e9099] mb-6">
                Zero commitment. Governed under standard mutual non-disclosure.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#131315] border border-[#e9c176] text-center space-y-3">
                  <CheckCircle2 size={32} className="text-[#e9c176] mx-auto" />
                  <h4 className="font-sans text-base font-semibold text-[#e5e1e4]">
                    Protocol Initiated
                  </h4>
                  <p className="text-xs text-[#d1c5b4] leading-relaxed">
                    Inquiry registered for <strong>{email}</strong>. A partner from our Executive Committee will transmit the formal NDA and transition prospectus within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] text-[#e9c176] uppercase tracking-wider underline cursor-pointer pt-2 block mx-auto"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="executive@enterprise.com"
                      className="w-full bg-[#131315] border border-white/10 focus:border-[#c5a059] text-[#e5e1e4] px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                      Primary Target Function
                    </label>
                    <select
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full bg-[#131315] border border-white/10 focus:border-[#c5a059] text-[#e5e1e4] px-4 py-3 text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option>Customer Support (Tier 1-3)</option>
                      <option>Finance &amp; Accounting Operations</option>
                      <option>Back-Office Claims &amp; Verification</option>
                      <option>Data Management &amp; Annotation</option>
                      <option>Enterprise IT Services &amp; NOC</option>
                      <option>Comprehensive Multi-Function BPO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                      Estimated Dedicated Scale
                    </label>
                    <select
                      value={scale}
                      onChange={(e) => setScale(e.target.value)}
                      className="w-full bg-[#131315] border border-white/10 focus:border-[#c5a059] text-[#e5e1e4] px-4 py-3 text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option>10 - 25 Dedicated FTEs</option>
                      <option>25 - 100 Dedicated FTEs</option>
                      <option>100+ Enterprise Scale FTEs</option>
                      <option>Feasibility Advisory First</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] font-sans font-semibold text-xs uppercase tracking-widest py-4 transition-all cursor-pointer shadow-lg mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Request Executive Briefing</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[#8e9099] text-[11px]">
                <span className="flex items-center gap-1.5 text-[#e9c176]">
                  <Lock size={12} />
                  <span>Mutual NDA Pre-Signed</span>
                </span>
                <span>Zero Commercial Obligation</span>
              </div>
            </div>
          </div>

          {/* Trust Certifications Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-[#18191e]/60 border border-white/5">
              <span className="font-sans text-base font-semibold text-[#e5e1e4] block">
                ISO 27001
              </span>
              <span className="text-xs text-[#8e9099]">Information Security</span>
            </div>
            <div className="p-4 bg-[#18191e]/60 border border-white/5">
              <span className="font-sans text-base font-semibold text-[#e5e1e4] block">
                SOC 2 Type II
              </span>
              <span className="text-xs text-[#8e9099]">Annual Independent Audit</span>
            </div>
            <div className="p-4 bg-[#18191e]/60 border border-white/5">
              <span className="font-sans text-base font-semibold text-[#e5e1e4] block">
                PCI-DSS Level 1
              </span>
              <span className="text-xs text-[#8e9099]">Financial Data Safe</span>
            </div>
            <div className="p-4 bg-[#18191e]/60 border border-white/5">
              <span className="font-sans text-base font-semibold text-[#e5e1e4] block">
                GDPR &amp; CCPA
              </span>
              <span className="text-xs text-[#8e9099]">Jurisdictional Governance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
