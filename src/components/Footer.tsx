import React from 'react';
import { ASSETS } from '../data/content';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-white/10 text-[#d1c5b4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ASSETS.logo}
                alt="Odilia Global Emblem"
                className="h-9 w-auto object-contain"
              />
              <span className="font-sans text-xl font-semibold tracking-[0.16em] text-[#e5e1e4] uppercase">
                Odilia Global
              </span>
            </div>
            <p className="text-sm text-[#8e9099] leading-relaxed mb-6 max-w-sm">
              Sovereign enterprise transformation and global business process orchestration for institution-grade operations.
            </p>
            <div className="inline-block px-3 py-1.5 border border-[#c5a059]/30 text-[11px] font-semibold text-[#e9c176] uppercase tracking-wider bg-[#131315]">
              London · Singapore · Manila · New York
            </div>
          </div>

          {/* Col 1: Company */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d1c5b4]">
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-white transition-colors">
                  Governance Model
                </a>
              </li>
              <li>
                <a href="#why-odilia" className="hover:text-white transition-colors">
                  Security &amp; Compliance
                </a>
              </li>
              <li>
                <span className="text-[#8e9099] cursor-not-allowed">Executive Careers</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d1c5b4]">
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  Back-Office Processing
                </a>
              </li>
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  Finance &amp; Accounting
                </a>
              </li>
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  HR Outsourcing &amp; EOR
                </a>
              </li>
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  Enterprise IT &amp; NOC
                </a>
              </li>
              <li>
                <a href="#services-explorer" className="hover:text-white transition-colors">
                  Compliance &amp; QA
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trust & Certifications */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-4">
              Trust &amp; Certifications
            </h4>
            <div className="space-y-2 text-xs text-[#d1c5b4]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#e9c176]" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#e9c176]" />
                <span>SOC 2 Type II Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#e9c176]" />
                <span>GDPR Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#e9c176]" />
                <span>PCI-DSS Level 1 Enforced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e9099]">
          <div>
            © {new Date().getFullYear()} Odilia Global Limited. All rights reserved. Sovereign Business Process Advisory.
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact-desk" className="hover:text-[#e9c176] transition-colors">
              NDA Protocols
            </a>
            <a href="#contact-desk" className="hover:text-[#e9c176] transition-colors">
              Terms of Engagement
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#e9c176] hover:text-white transition-colors cursor-pointer ml-4"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
