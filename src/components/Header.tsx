import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/content';
import { Globe, Shield, Terminal, User, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  onOpenConsultation: () => void;
  onOpenConsole: () => void;
  onOpenPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenConsultation,
  onOpenConsole,
  onOpenPortal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('EN · Global');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'capabilities', label: 'Capabilities', target: '#services-explorer' },
    { id: 'business-case', label: 'Business Case', target: '#business-case' },
    { id: 'about', label: 'About', target: '#about-section' },
    { id: 'how-we-work', label: 'How We Work', target: '#how-we-work' },
    { id: 'industries', label: 'Industries', target: '#industries-section' },
    { id: 'why-odilia', label: 'Why Odilia', target: '#why-odilia' }
  ];

  const handleNavClick = (id: string, target: string) => {
    setActiveScreen(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const regions = [
    { label: 'EN · Global', desc: 'Central Dispatch · London HQ' },
    { label: 'EN · Americas', desc: 'New York · EST Desk' },
    { label: 'EN · EMEA', desc: 'London · GMT / CET' },
    { label: 'EN · APAC', desc: 'Singapore · Manila Hub' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e0e10]/95 backdrop-blur-xl border-b border-[#c5a059]/20 shadow-2xl py-3'
          : 'bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo and Sovereign Brand */}
        <button
          onClick={() => {
            setActiveScreen('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <img
            src={ASSETS.logo}
            alt="Odilia Global Emblem"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
          />
          <div className="flex flex-col">
            <span className="font-sans text-lg font-semibold tracking-[0.18em] text-[#e5e1e4] uppercase group-hover:text-[#e9c176] transition-colors">
              Odilia Global
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#c5a059] uppercase hidden sm:block">
              Sovereign Operations
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.target)}
                className={`text-[13px] uppercase tracking-[0.1em] font-medium transition-all py-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-[#e9c176] border-[#e9c176]'
                    : 'text-[#d1c5b4] hover:text-[#e5e1e4] border-transparent hover:border-[#c5a059]/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Ops Console Trigger */}
          <button
            onClick={onOpenConsole}
            title="Open Live Operations Telemetry Room"
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#1c1b1e] border border-[#c5a059]/30 hover:border-[#e9c176] text-[#e5e1e4] hover:text-[#e9c176] transition-all cursor-pointer text-[12px] uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Terminal size={14} className="text-[#c5a059]" />
            <span>Ops Console</span>
          </button>

          {/* Region / Language Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
              className="flex items-center gap-1.5 text-[#d1c5b4] hover:text-[#e5e1e4] px-2 py-1 text-[12px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Globe size={14} className="text-[#c5a059]" />
              <span>{selectedRegion}</span>
              <ChevronDown size={12} />
            </button>

            {regionDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#18191e] border border-[#c5a059]/30 shadow-2xl p-2 z-50">
                <div className="text-[10px] uppercase tracking-widest text-[#c5a059] px-2 py-1 mb-1 border-b border-white/10">
                  Global Operational Desks
                </div>
                {regions.map((reg) => (
                  <button
                    key={reg.label}
                    onClick={() => {
                      setSelectedRegion(reg.label);
                      setRegionDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors flex flex-col ${
                      selectedRegion === reg.label
                        ? 'bg-[#c5a059]/15 text-[#e9c176]'
                        : 'text-[#e5e1e4] hover:bg-[#222329]'
                    }`}
                  >
                    <span className="font-medium tracking-wider">{reg.label}</span>
                    <span className="text-[10px] text-[#8e9099]">{reg.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#e9c176] text-[#0e0e10] font-sans font-semibold text-[12px] uppercase tracking-wider px-5 py-2.5 shadow-lg transition-all cursor-pointer active:scale-95"
          >
            Talk to Our Team
          </button>

          {/* Client Terminal Profile Button */}
          <button
            onClick={onOpenPortal}
            title="Institutional Client Terminal"
            className="w-9 h-9 bg-[#201f22] border border-[#c5a059]/40 hover:border-[#e9c176] hover:bg-[#2a2a2c] flex items-center justify-center text-[#e9c176] transition-all cursor-pointer"
          >
            <User size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e5e1e4] hover:text-[#e9c176] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#131315] border-b border-[#c5a059]/30 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] tracking-widest text-[#c5a059] uppercase pb-2 border-b border-white/10">
              Navigation Menu
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.target)}
                className={`text-left text-sm uppercase tracking-wider py-2 transition-colors ${
                  activeScreen === item.id
                    ? 'text-[#e9c176] font-semibold pl-2 border-l-2 border-[#e9c176]'
                    : 'text-[#d1c5b4] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1c1b1e] border border-[#c5a059]/40 text-[#e9c176] text-xs uppercase tracking-wider font-semibold"
              >
                <Terminal size={15} />
                Open Live Ops Console
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#c5a059] text-[#0e0e10] text-xs uppercase tracking-wider font-semibold text-center"
              >
                Schedule Executive Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
