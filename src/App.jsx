import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneSimulator from './components/PhoneSimulator';
import GPXRouteElevationCanvas from './components/GPXRouteElevationCanvas';
import CadenceMetronomeWidget from './components/CadenceMetronomeWidget';
import StructuredIntervalBuilder from './components/StructuredIntervalBuilder';
import RacePredictorCalculator from './components/RacePredictorCalculator';
import FeaturesGrid from './components/FeaturesGrid';
import TechStackShowcase from './components/TechStackShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#F3F4F6] selection:bg-[#FC5200] selection:text-white">
      <Navbar />
      
      <main className="space-y-16">
        <Hero />
        
        <PhoneSimulator />
        
        {/* Interactive Athletic Lab Showcase */}
        <section className="py-12 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1 rounded-full border border-[#2ECC71]/20">
              Interactive Athletic Lab
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Eksplorasi Perangkat Lunak Latihan</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Cobalah langsung berbagai modul analitik performa yang tertanam di dalam aplikasi iOS StrideSync.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GPXRouteElevationCanvas />
            <CadenceMetronomeWidget />
          </div>

          <div className="max-w-5xl mx-auto">
            <StructuredIntervalBuilder />
          </div>
        </section>

        <RacePredictorCalculator />
        
        <FeaturesGrid />
        
        <TechStackShowcase />
        
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
