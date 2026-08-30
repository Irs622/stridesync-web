import React from 'react';
import { Zap, Play, Shield, Activity, Flame, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-36 pb-16 px-6 relative overflow-hidden">
      {/* Background Neon Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FC5200]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#2ECC71]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#FC5200]/30 text-xs font-bold text-[#FC5200] shadow-lg shadow-[#FC5200]/10 hover:scale-105 transition cursor-default">
          <span className="w-2 h-2 rounded-full bg-[#FC5200] animate-ping" />
          <span>SWIFT 6 & IOS 18 NATIVE ATHLETIC INTELLIGENCE</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Massive Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white max-w-5xl mx-auto">
          Tingkatkan Rekor Larimu <br className="hidden sm:inline" />
          dengan <span className="gradient-text">Presisi Tanpa Batas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Aplikasi pelacak performa lari generasi berikutnya yang dibangun khusus untuk atlet iOS. Dilengkapi dengan <strong className="text-white">Virtual Ghost Runner</strong>, analisis tanjakan <strong className="text-white">Climb Classifier</strong>, estimasi pemulihan <strong className="text-white">TRIMP Banister</strong>, dan <strong className="text-white">3D Aerial Flyover</strong>.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#simulator"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl gradient-orange text-white font-bold text-base shadow-xl shadow-[#FC5200]/35 hover:scale-105 active:scale-[0.98] transition flex items-center justify-center gap-3"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Uji Coba Live Simulator</span>
          </a>
          <a
            href="#kalkulator"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-white font-bold text-base hover:bg-white/10 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <Activity className="w-5 h-5 text-[#FC5200]" />
            <span>Hitung VO2 Max & Target Pace</span>
          </a>
        </div>

        {/* Feature Pill Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-xs text-gray-400 font-semibold mt-0.5">Strict Concurrency</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#FC5200]">0.1s</div>
            <div className="text-xs text-gray-400 font-semibold mt-0.5">GPS Smart Auto-Pause</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#2ECC71]">UCI Standard</div>
            <div className="text-xs text-gray-400 font-semibold mt-0.5">Climb Classifier</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#FFA033]">Apple Watch</div>
            <div className="text-xs text-gray-400 font-semibold mt-0.5">Live Activity HUD</div>
          </div>
        </div>

      </div>
    </section>
  );
}
