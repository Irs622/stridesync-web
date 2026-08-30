import React from 'react';
import { Github, Download, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTASection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF6A00', '#FFA133', '#FFFFFF', '#2ECC71']
    });
  };

  return (
    <section id="install" className="py-24 px-6 bg-[#FFF9F2] relative overflow-hidden">
      
      {/* Decorative Dotted Grid and Floating Hexagons */}
      <div className="absolute top-10 right-16 w-36 h-36 pattern-dots-orange opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-16 w-36 h-36 pattern-dots-orange opacity-40 pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-20 h-24 bg-[#FF6A00]/20 rounded-2xl hexagon rotate-12 pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-24 h-28 bg-[#FFA133]/30 rounded-2xl hexagon -rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto clean-white-card p-8 sm:p-16 border border-orange-100 text-center space-y-8 relative z-10 shadow-2xl">
        
        {/* App Icon Container with Hexagon Badge Shadow */}
        <div 
          onClick={triggerConfetti}
          className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#FF6A00] to-[#FFA133] p-1 shadow-2xl shadow-orange-500/40 cursor-pointer hover:scale-110 active:scale-95 transition"
        >
          <img src="/app-icon.png" alt="StrideSync App Icon" className="w-full h-full rounded-[22px] object-cover" />
        </div>

        <div className="space-y-3 max-w-2xl mx-auto text-gray-900">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Siap Memecahkan Rekor Baru?</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
            StrideSync sudah siap di-compile langsung ke iPhone Anda via Xcode atau terminal, 100% open-source untuk komunitas atlet lari.
          </p>
        </div>

        {/* Quick CLI Guide */}
        <div className="max-w-xl mx-auto bg-gray-900 p-4 rounded-2xl border border-gray-800 text-left space-y-2 text-white">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
            <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-[#FF6A00]" /> Build & Run via Terminal:</span>
            <span className="text-[#2ECC71]">macOS / zsh</span>
          </div>
          <pre className="text-xs font-mono text-gray-300 overflow-x-auto p-2 bg-black/50 rounded-xl">
<code>xcodebuild build -project StrideSync.xcodeproj -scheme StrideSync</code>
          </pre>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://github.com/Irs622/stridesync-ios"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF6A00] hover:bg-[#E65100] text-white font-black text-base shadow-xl shadow-orange-500/30 hover:scale-105 transition flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span>Kunjungi Repositori GitHub</span>
          </a>
          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-orange-50 hover:bg-orange-100 text-[#FF6A00] font-black text-base transition flex items-center justify-center gap-2 border border-orange-200"
          >
            <span>Rayakan Rekor 🏆</span>
          </button>
        </div>

      </div>
    </section>
  );
}
