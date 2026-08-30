import React from 'react';
import { Github, Download, Terminal, Smartphone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTASection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FC5200', '#FF6E27', '#2ECC71', '#FFA033']
    });
  };

  return (
    <section id="install" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto glass-card rounded-[40px] p-8 sm:p-16 border border-[#FC5200]/30 glow-orange text-center space-y-8 relative z-10">
        
        {/* App Icon Container */}
        <div 
          onClick={triggerConfetti}
          className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#FC5200] to-[#FF8C00] p-1 shadow-2xl shadow-[#FC5200]/40 cursor-pointer hover:scale-110 active:scale-95 transition"
        >
          <img src="/app-icon.png" alt="StrideSync App Icon" className="w-full h-full rounded-[22px] object-cover" />
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Siap Memecahkan Rekor Baru?</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            StrideSync sudah siap di-compile langsung ke iPhone Anda via Xcode atau terminal, 100% open-source untuk komunitas pelari.
          </p>
        </div>

        {/* Quick CLI Guide */}
        <div className="max-w-xl mx-auto bg-[#0A0C10] p-4 rounded-2xl border border-white/10 text-left space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
            <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-[#FC5200]" /> Build & Run via Terminal:</span>
            <span className="text-[#2ECC71]">macOS / zsh</span>
          </div>
          <pre className="text-xs font-mono text-gray-300 overflow-x-auto p-2 bg-black/40 rounded-xl">
<code>xcodebuild build -project StrideSync.xcodeproj -scheme StrideSync</code>
          </pre>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://github.com/Irs622/stridesync-ios"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl gradient-orange text-white font-bold text-base shadow-xl shadow-[#FC5200]/30 hover:scale-105 transition flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span>Kunjungi Repositori GitHub</span>
          </a>
          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-white font-bold text-base hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <span>Rayakan Rekor 🏆</span>
          </button>
        </div>

      </div>
    </section>
  );
}
