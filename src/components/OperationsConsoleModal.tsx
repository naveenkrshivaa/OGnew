import React, { useState, useEffect } from 'react';
import { X, Activity, Globe, Shield, Terminal, Volume2, VolumeX, Server, CheckCircle2, Clock } from 'lucide-react';
import { TELEMETRY_NODES } from '../data/content';

interface OperationsConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OperationsConsoleModal: React.FC<OperationsConsoleModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'nodes' | 'traffic' | 'security'>('nodes');
  const [audioFeedback, setAudioFeedback] = useState<boolean>(false);
  const [globalProcessedCount, setGlobalProcessedCount] = useState<number>(14298140);
  const [nodes, setNodes] = useState(TELEMETRY_NODES);

  // Live timer and counter increment
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setGlobalProcessedCount((prev) => prev + Math.floor(1 + Math.random() * 5));
    }, 1200);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
      <div className="bg-[#0e0e10] border border-[#c5a059]/60 w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        {/* Top Control Bar */}
        <div className="bg-[#131315] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-[#e9c176] uppercase">
                ODILIA SOVEREIGN OPS ROOM · TELEMETRY CONSOLE
              </span>
              <span className="text-[10px] text-[#8e9099] font-mono">
                SECURE CIPHER: TLS 1.3 · ZERO RECORD DRIFT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAudioFeedback(!audioFeedback)}
              className="px-2.5 py-1 bg-[#1c1b1e] border border-white/10 hover:border-[#c5a059] text-[11px] text-[#d1c5b4] flex items-center gap-1.5 cursor-pointer font-mono"
            >
              {audioFeedback ? <Volume2 size={13} className="text-emerald-400" /> : <VolumeX size={13} />}
              <span>{audioFeedback ? 'PULSE ON' : 'PULSE MUTED'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 bg-[#201f22] text-[#8e9099] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Global Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#18191e] border-b border-white/10 p-4 gap-4 font-mono">
          <div>
            <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
              Cumulative Year-to-Date Volume
            </span>
            <span className="font-headline-sm text-xl sm:text-2xl text-[#e5e1e4] font-serif">
              {globalProcessedCount.toLocaleString()}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
              Audited 24h Global SLA
            </span>
            <span className="font-headline-sm text-xl sm:text-2xl text-emerald-400 font-serif">
              99.88%
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
              Active Frontline Analysts
            </span>
            <span className="font-headline-sm text-xl sm:text-2xl text-[#e9c176] font-serif">
              795 FTEs
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#8e9099] uppercase tracking-wider block">
              Sub-Second PII Masking
            </span>
            <span className="font-headline-sm text-xl sm:text-2xl text-emerald-400 font-serif">
              100.0% Clean
            </span>
          </div>
        </div>

        {/* Modal Body & Hub Cards */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d1c5b4] flex items-center gap-2">
              <Globe size={14} className="text-[#c5a059]" />
              Sovereign Delivery Nodes (Follow-the-Sun Operations)
            </span>
            <span className="text-[10px] font-mono text-[#e9c176]">All Systems In-Band</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nodes.map((node) => (
              <div
                key={node.city}
                className="bg-[#131315] border border-white/10 hover:border-[#c5a059] p-4 flex flex-col justify-between transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-base font-bold text-[#e5e1e4]">
                      {node.city}
                    </span>
                    <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-semibold">
                      {node.status}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#8e9099] block mb-3">{node.country}</span>

                  <div className="p-2 bg-[#1c1b1e] border border-white/5 space-y-1 text-[11px] font-mono text-[#d1c5b4] mb-3">
                    <div className="flex justify-between">
                      <span className="text-[#8e9099]">Local Clock:</span>
                      <span className="text-white flex items-center gap-1">
                        <Clock size={10} className="text-[#c5a059]" />
                        {node.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8e9099]">Active Pod:</span>
                      <span className="text-[#e9c176]">{node.activeAnalysts} FTEs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8e9099]">In-Flight:</span>
                      <span>{node.activeTickets} cases</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8e9099]">SLA Rate:</span>
                      <span className="text-emerald-400 font-semibold">{node.slaAdherence}%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#8e9099] font-mono">
                  <span>Avg Handling: {node.avgHandlingTime}</span>
                  <span className="text-[#c5a059]">Tier-1</span>
                </div>
              </div>
            ))}
          </div>

          {/* Security & Physical Airgap Architecture */}
          <div className="bg-[#18191e] border border-white/10 p-5">
            <h4 className="text-xs font-semibold text-[#e9c176] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Shield size={14} />
              Sovereign Information Boundary Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#d1c5b4]">
              <div className="p-3 bg-[#131315] border border-white/5">
                <span className="text-white font-semibold block mb-1">Clean-Desk Physical Pods</span>
                <span className="text-[#8e9099] leading-relaxed block">
                  Zero consumer mobile phones, personal recording devices, or paper notes allowed inside operating wings.
                </span>
              </div>
              <div className="p-3 bg-[#131315] border border-white/5">
                <span className="text-white font-semibold block mb-1">Zero-Trust VDI Workstations</span>
                <span className="text-[#8e9099] leading-relaxed block">
                  Encrypted thin clients connecting strictly via isolated virtual desktops with local copy-paste disabled.
                </span>
              </div>
              <div className="p-3 bg-[#131315] border border-white/5">
                <span className="text-white font-semibold block mb-1">Continuous Redaction</span>
                <span className="text-[#8e9099] leading-relaxed block">
                  Automatic client credit card, SSN, and PII suppression across all recorded audio and text logs.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#131315] px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8e9099]">
          <span>Security Classification: CONFIDENTIAL / SOVEREIGN ONLY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#c5a059] text-[#0e0e10] text-[11px] uppercase font-semibold hover:bg-[#e9c176] cursor-pointer"
          >
            Dismiss Console
          </button>
        </div>
      </div>
    </div>
  );
};
