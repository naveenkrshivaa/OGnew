import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Lock, FileText, ArrowRight, Download } from 'lucide-react';

interface ExecutiveConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultScope?: string;
}

export const ExecutiveConsultationModal: React.FC<ExecutiveConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultScope = 'Customer Support (Tier 1-3)'
}) => {
  const [step, setStep] = useState<number>(1);
  const [scope, setScope] = useState<string>(defaultScope);
  const [scale, setScale] = useState<string>('25 - 100 Dedicated FTEs');
  const [complianceRequirements, setComplianceRequirements] = useState<string[]>([
    'SOC 2 Type II',
    'GDPR'
  ]);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [generatedRef, setGeneratedRef] = useState<string>('');

  if (!isOpen) return null;

  const toggleCompliance = (item: string) => {
    if (complianceRequirements.includes(item)) {
      setComplianceRequirements(complianceRequirements.filter((c) => c !== item));
    } else {
      setComplianceRequirements([...complianceRequirements, item]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const ref = `ODL-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedRef(ref);
      setStep(3);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#18191e] border border-[#c5a059]/50 w-full max-w-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#131315] p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-[#e9c176] uppercase tracking-[0.2em] block mb-1">
              Mutual NDA · Formal Advisory Protocol
            </span>
            <h3 className="font-sans text-xl font-semibold text-[#e5e1e4]">
              Executive Discovery Briefing
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#201f22] text-[#8e9099] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="grid grid-cols-3 bg-[#0e0e10] border-b border-white/10 text-center text-[10px] font-semibold uppercase tracking-wider">
          <div
            className={`py-2 ${
              step >= 1 ? 'bg-[#c5a059] text-[#0e0e10]' : 'text-[#8e9099]'
            }`}
          >
            1. Scope &amp; Scale
          </div>
          <div
            className={`py-2 ${
              step >= 2 ? 'bg-[#c5a059] text-[#0e0e10]' : 'text-[#8e9099]'
            }`}
          >
            2. Compliance &amp; Entity
          </div>
          <div
            className={`py-2 ${
              step === 3 ? 'bg-[#c5a059] text-[#0e0e10]' : 'text-[#8e9099]'
            }`}
          >
            3. Charter Dossier
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-2">
                  Select Target Operational Workstream
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Customer Support (Tier 1-3)',
                    'Finance & Accounting Operations',
                    'Back-Office Claims & Verification',
                    'Enterprise IT Services & NOC',
                    'Data Management & Annotation',
                    'Comprehensive Multi-Function BPO'
                  ].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setScope(s)}
                      className={`p-3 text-xs text-left border transition-all cursor-pointer ${
                        scope === s
                          ? 'bg-[#c5a059] text-[#0e0e10] border-[#c5a059] font-semibold'
                          : 'bg-[#131315] text-[#d1c5b4] border-white/10 hover:border-[#c5a059]/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-2">
                  Projected Resource Deployment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    '10 - 25 Dedicated FTEs',
                    '25 - 100 Dedicated FTEs',
                    '100 - 250 Enterprise Scale',
                    'Strategic Feasibility First'
                  ].map((sc) => (
                    <button
                      type="button"
                      key={sc}
                      onClick={() => setScale(sc)}
                      className={`p-3 text-xs text-center border transition-all cursor-pointer ${
                        scale === sc
                          ? 'bg-[#2a2a2c] text-[#e9c176] border-[#c5a059] font-semibold'
                          : 'bg-[#131315] text-[#8e9099] border-white/10'
                      }`}
                    >
                      {sc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] text-xs font-semibold uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Proceed to Compliance</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                    Executive Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alistair Vance, COO"
                    className="w-full bg-[#131315] border border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                    Enterprise Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Vance Global Capital Ltd"
                    className="w-full bg-[#131315] border border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-1.5">
                  Corporate Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vance@vancecapital.com"
                  className="w-full bg-[#131315] border border-white/10 text-white px-4 py-2.5 text-sm outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#d1c5b4] uppercase tracking-wider mb-2">
                  Mandatory Compliance Protocols (Select applicable)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['SOC 2 Type II', 'ISO 27001', 'PCI-DSS L1', 'GDPR / CCPA'].map((req) => (
                    <button
                      type="button"
                      key={req}
                      onClick={() => toggleCompliance(req)}
                      className={`p-2 text-xs border text-center cursor-pointer transition-colors ${
                        complianceRequirements.includes(req)
                          ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#e9c176]'
                          : 'bg-[#131315] border-white/10 text-[#8e9099]'
                      }`}
                    >
                      {req}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#131315] border border-white/10 flex items-center gap-2 text-xs text-[#8e9099]">
                <Lock size={14} className="text-[#e9c176] shrink-0" />
                <span>
                  Mutual Non-Disclosure Covenant enforced under England &amp; Wales / Delaware jurisdiction.
                </span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-wider text-[#8e9099] hover:text-white"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] text-xs font-semibold uppercase tracking-widest flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Generate Executive Charter</span>
                  <CheckCircle2 size={14} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="p-6 bg-[#131315] border border-[#c5a059] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-[#e9c176]">Ref: {generatedRef}</span>
                  <span className="text-[10px] uppercase tracking-widest bg-[#2a2a2c] text-emerald-400 px-2 py-0.5 font-mono">
                    STATUS: CHARTER QUEUED
                  </span>
                </div>

                <div className="text-center py-2">
                  <CheckCircle2 size={40} className="text-[#e9c176] mx-auto mb-2" />
                  <h4 className="font-headline-sm text-2xl text-[#e5e1e4] font-serif">
                    Transition Briefing Scheduled
                  </h4>
                  <p className="text-xs text-[#d1c5b4] mt-1">
                    An Executive Director will initiate the formal NDA counter-signature and volume review for{' '}
                    <strong className="text-white">{email}</strong> within 4 business hours.
                  </p>
                </div>

                <div className="p-4 bg-[#1c1b1e] border border-white/5 space-y-2 text-xs font-mono text-[#8e9099]">
                  <div className="flex justify-between">
                    <span>Target Scope:</span>
                    <span className="text-white">{scope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scale Range:</span>
                    <span className="text-white">{scale}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Designated Entity:</span>
                    <span className="text-white">{company || 'Enterprise Partner'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SLA Benchmark:</span>
                    <span className="text-emerald-400">99.8% Contractually Bound</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] text-xs font-semibold uppercase tracking-widest cursor-pointer"
                >
                  Return to Main Deck
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
