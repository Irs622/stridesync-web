import React from 'react';
import { Play, Activity, Sparkles, ArrowRight, ShieldCheck, Heart, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 relative overflow-hidden text-white">
      
      {/* Decorative Dotted Matrices (From User Template) */}
      <div className="absolute top-28 left-8 w-32 h-32 pattern-dots opacity-40 pointer-events-none" />
      <div className="absolute top-48 right-12 w-40 h-40 pattern-dots opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-36 h-28 pattern-dots opacity-30 pointer-events-none" />

      {/* Floating 3D Geometric Hexagons (From User Template) */}
      <div className="absolute top-20 right-1/4 w-28 h-32 bg-white/20 rounded-3xl hexagon blur-[1px] rotate-12 pointer-events-none shadow-2xl" />
      <div className="absolute bottom-20 left-10 w-24 h-28 bg-[#FFA133]/60 rounded-2xl hexagon -rotate-12 pointer-events-none shadow-xl" />
      <div className="absolute top-64 right-10 w-32 h-36 bg-white/15 rounded-3xl hexagon rotate-45 pointer-events-none" />
      <div className="absolute -bottom-10 right-1/3 w-40 h-44 bg-white/10 rounded-3xl hexagon rotate-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Bold Copywriting */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          {/* Badge Pill with Hexagon Accent */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#FF6A00] font-extrabold text-xs shadow-lg shadow-black/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-ping" />
            <span>SWIFT 6 & IOS 18 NATIVE ATHLETIC APP</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white drop-shadow-sm">
            Tingkatkan Rekor <br />
            Larimu <span className="underline decoration-white/40 decoration-wavy">Paling Maksimal.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            StrideSync adalah aplikasi pelacak performa lari generasi berikutnya yang dibangun murni dengan teknologi Apple terkini. Dilengkapi dengan <strong className="text-white underline">Virtual Ghost Runner</strong>, analisis tanjakan <strong className="text-white underline">Climb Classifier</strong>, dan <strong className="text-white underline">TRIMP Banister</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#simulator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#FF6A00] font-black text-base shadow-2xl shadow-black/20 hover:bg-orange-50 hover:scale-105 active:scale-[0.98] transition flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Coba Live Simulator</span>
            </a>
            <a
              href="#kalkulator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-white/60 bg-white/10 hover:bg-white/20 text-white font-extrabold text-base backdrop-blur-md transition flex items-center justify-center gap-2"
            >
              <Activity className="w-5 h-5" />
              <span>Hitung VO2 Max & Target</span>
            </a>
          </div>

          {/* Quick Metrics in Clean White Cards */}
          <div className="grid grid-cols-3 gap-3 pt-6 max-w-lg mx-auto lg:mx-0">
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">100%</div>
              <div className="text-[11px] text-white/80 font-bold mt-0.5">Swift 6 Concurrency</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">0.1s</div>
              <div className="text-[11px] text-white/80 font-bold mt-0.5">GPS Smart Auto-Pause</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/30 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">UCI</div>
              <div className="text-[11px] text-white/80 font-bold mt-0.5">Climb Classifier</div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Graphic Card (Clean White Hexagon Theme Frame) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            
            {/* Hexagon Decorative Backdrop */}
            <div className="absolute -inset-4 bg-white/20 rounded-[40px] blur-lg pointer-events-none" />
            
            {/* Main Clean White Card Container */}
            <div className="clean-white-card p-6 sm:p-8 text-gray-900 relative z-10 w-[330px] sm:w-[380px] space-y-6">
              
              {/* Card Header with Floating Hexagon Badge */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6A00] flex items-center justify-center text-white font-black shadow-lg shadow-orange-500/30">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-base font-black text-gray-900">StrideSync App</div>
                    <div className="text-xs text-gray-500 font-semibold">Pro Athletic Suite</div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase bg-orange-100 text-[#FF6A00] px-2.5 py-1 rounded-full border border-orange-200">
                  LIVE GPS
                </span>
              </div>

              {/* Central Dynamic Stat Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-[#FF7E1D] text-white text-center space-y-1 shadow-xl shadow-orange-600/25 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-sm pointer-events-none" />
                <div className="text-xs uppercase font-extrabold tracking-widest text-white/80">Jarak Tempuh Lari</div>
                <div className="text-5xl font-black tracking-tight font-mono">5.24 <span className="text-xl font-bold">KM</span></div>
                <div className="text-xs font-bold text-white/90 pt-1">Pace Rata-rata: 4'38" /km</div>
              </div>

              {/* Metric Rows */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500">Detak Jantung</div>
                  <div className="text-2xl font-black text-[#FF6A00] font-mono flex items-center justify-center gap-1 mt-0.5">
                    <Heart className="w-4 h-4 fill-current text-[#FF6A00]" />
                    <span>164</span>
                  </div>
                  <div className="text-[10px] font-bold text-gray-600">Threshold (Z4)</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500">Ghost Runner</div>
                  <div className="text-2xl font-black text-[#2ECC71] font-mono mt-0.5">+42 m</div>
                  <div className="text-[10px] font-bold text-[#2ECC71]">Di Depan Target</div>
                </div>
              </div>

              {/* Bottom Quick Feature Tag */}
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs font-bold text-gray-700">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                  <span>Banister TRIMP: Optimal (85%)</span>
                </span>
                <span className="text-[#FF6A00] font-mono font-black">180 SPM</span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
