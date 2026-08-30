import React, { useState } from 'react';
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
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />
      
      <main className="space-y-0">
        <Hero onOpenDownload={() => setDownloadModalOpen(true)} />
        
        {/* Interactive Athletic Lab Section */}
        <section id="lab" className="py-24 px-6 bg-[#FFF9F2] relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-12 relative z-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF6A00] bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200">
                Interactive Athletic Lab
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Eksplorasi Perangkat Lunak Latihan</h2>
              <p className="text-gray-600 text-sm sm:text-base">
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
          </div>
        </section>

        <RacePredictorCalculator />
        
        <FeaturesGrid />
        
        <PhoneSimulator />

        <TechStackShowcase />
        
        <CTASection onOpenDownload={() => setDownloadModalOpen(true)} />
      </main>

      <Footer />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
