import React, { useState } from 'react';
import { X, Lock, ShieldCheck, User, PhoneCall, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>('ENTERPRISE-2025');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#18191e] border border-[#c5a059]/50 w-full max-w-xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#131315] p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-[#c5a059]" />
            <h3 className="font-sans text-base font-semibold text-[#e5e1e4] uppercase tracking-wider">
              Institutional Client Terminal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-[#201f22] text-[#8e9099] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isAuthenticated ? (
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 bg-[#201f22] border border-[#c5a059]/40 flex items-center justify-center mx-auto text-[#e9c176]">
                <User size={28} />
              </div>

              <div>
                <h4 className="font-headline-sm text-2xl text-[#e5e1e4] font-serif mb-2">
                  Client Access Gateway
                </h4>
                <p className="text-xs text-[#8e9099] max-w-md mx-auto leading-relaxed">
                  Enter your client enterprise authentication code to view live dedicated pod utilization, recorded audit trails, and executive SLA logs.
                </p>
              </div>

              <div className="max-w-sm mx-auto space-y-3">
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="ENTERPRISE-TOKEN"
                  className="w-full bg-[#131315] border border-white/10 text-center font-mono text-sm py-3 text-[#e9c176] tracking-widest outline-none focus:border-[#c5a059]"
                />
                <button
                  onClick={() => setIsAuthenticated(true)}
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] font-sans font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                >
                  Authenticate Enterprise Session
                </button>
                <div className="text-[10px] text-[#8e9099] font-mono">
                  Demo access pre-loaded: Click Authenticate to preview portal
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold block">
                    Verified Account
                  </span>
                  <span className="font-sans text-base font-semibold text-[#e5e1e4]">
                    Vance Global Capital Partners
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
                  ACTIVE CONTRACT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#131315] border border-white/5">
                  <span className="text-[#8e9099] text-[10px] uppercase block">Assigned Pod:</span>
                  <span className="text-[#e9c176] text-base font-bold">48 Dedicated FTEs</span>
                </div>
                <div className="p-3 bg-[#131315] border border-white/5">
                  <span className="text-[#8e9099] text-[10px] uppercase block">MTD Adherence:</span>
                  <span className="text-emerald-400 text-base font-bold">99.91% SLA</span>
                </div>
              </div>

              <div className="p-4 bg-[#1c1b1e] border border-white/5 text-xs text-[#d1c5b4] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#8e9099]">Designated Account Director:</span>
                  <span className="text-white font-medium">Victoria Sterling (London HQ)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e9099]">Emergency Escalation Line:</span>
                  <span className="text-[#e9c176] font-mono">+44 20 7946 0999 (Code: VGC-1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e9099]">Audited Ledger:</span>
                  <span className="text-emerald-400">Synced Real-Time (SOC 2)</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-xs text-[#8e9099] hover:text-white"
                >
                  Sign Out
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#c5a059] text-[#0e0e10] text-xs font-semibold uppercase tracking-wider hover:bg-[#e9c176] cursor-pointer"
                >
                  Close Terminal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
