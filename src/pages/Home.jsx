import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import PlatformsSection from '../components/landing/PlatformsSection';
import StepsSection from '../components/landing/StepsSection';
import EarningsSection from '../components/landing/EarningsSection';
import TutorialsSection from '../components/landing/TutorialsSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import WhatsAppSection from '../components/landing/WhatsAppSection';
import FAQSection from '../components/landing/FAQSection';
import CTABanner from '../components/landing/CTABanner';
import Footer from '../components/landing/Footer';
import MobileCTA from '../components/landing/MobileCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <StepsSection />
      <EarningsSection />
      <TutorialsSection />
      <FeaturesSection />
      <WhatsAppSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <MobileCTA />
    </div>
  );
}