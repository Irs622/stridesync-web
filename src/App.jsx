import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneSimulator from './components/PhoneSimulator';
import RacePredictorCalculator from './components/RacePredictorCalculator';
import FeaturesGrid from './components/FeaturesGrid';
import TechStackShowcase from './components/TechStackShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#F3F4F6]">
      <Navbar />
      <main>
        <Hero />
        <PhoneSimulator />
        <RacePredictorCalculator />
        <FeaturesGrid />
        <TechStackShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
