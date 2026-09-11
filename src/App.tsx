import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BusinessCaseSection } from './components/BusinessCaseSection';
import { AboutSection } from './components/AboutSection';
import { ServicesExplorer } from './components/ServicesExplorer';
import { SupportDeepDive } from './components/SupportDeepDive';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyOdiliaSection } from './components/WhyOdiliaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BeyondBpoSection } from './components/BeyondBpoSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveConsultationModal } from './components/ExecutiveConsultationModal';
import { ClientPortalModal } from './components/ClientPortalModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>('overview');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [consultationScope, setConsultationScope] = useState<string>('Customer Support (Tier 1-3)');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);

  const handleOpenConsultationWithScope = (scopeName: string) => {
    setConsultationScope(scopeName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#e5e1e4] flex flex-col selection:bg-[#c5a059] selection:text-[#0e0e10]">
      {/* Sovereign Top Navigation Bar */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onOpenConsultation={() => handleOpenConsultationWithScope('Comprehensive Multi-Function BPO')}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 01. Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultationWithScope('Comprehensive Multi-Function BPO')}
          onSelectServiceTab={(tabIdx) => setSelectedServiceIndex(tabIdx)}
        />

        {/* 02. Fiduciary Business Case (6 Institutional Rationale Pillars) */}
        <BusinessCaseSection />

        {/* 03. About Odilia Global & Executive Reception */}
        <AboutSection />

        {/* 04. Interactive Capabilities & Services Catalog */}
        <ServicesExplorer
          selectedServiceIndex={selectedServiceIndex}
          setSelectedServiceIndex={setSelectedServiceIndex}
          onOpenConsultationWithService={handleOpenConsultationWithScope}
        />

        {/* 05. Deep Dive: Sovereign Customer Support Standard */}
        <SupportDeepDive />

        {/* 06. How We Work: 3-Phase Governance Lifecycle */}
        <HowWeWorkSection />

        {/* 07. Regulated Sector Specialization Switcher */}
        <IndustriesSection
          onOpenConsultationWithIndustry={(sector) => handleOpenConsultationWithScope(`${sector} Operations`)}
        />

        {/* 08. Why Odilia Global Differentiators */}
        <WhyOdiliaSection />

        {/* 09. Executive Client Voices & Testimonial Carousel */}
        <TestimonialsSection />

        {/* 10. Beyond BPO: IT NOC & HR EOR Strategic Practices */}
        <BeyondBpoSection
          onOpenConsultationWithService={handleOpenConsultationWithScope}
        />

        {/* 11. High-Conversion Executive Contact & Advisory Desk */}
        <ContactSection
          onSuccessSubmit={(email, scope, scale) => {
            console.log('Briefing submitted:', { email, scope, scale });
          }}
          prefilledScope={consultationScope}
        />
      </main>

      {/* Sovereign Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ExecutiveConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultScope={consultationScope}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
