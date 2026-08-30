import React from 'react';
import { Cpu, Layers, Database, Radio, HeartPulse, Sparkles } from 'lucide-react';

export default function TechStackShowcase() {
  const techs = [
    { title: "Swift 6 Concurrency", desc: "Actor-isolated LocationEngine untuk zero data race", icon: <Cpu className="w-5 h-5 text-[#FC5200]" /> },
    { title: "SwiftUI & SwiftData", desc: "Arsitektur view reaktif & offline-first persistence", icon: <Layers className="w-5 h-5 text-[#2ECC71]" /> },
    { title: "ActivityKit & Dynamic Island", desc: "Live Activity real-time di Lock Screen iOS 18", icon: <Radio className="w-5 h-5 text-[#FFA033]" /> },
    { title: "Apple HealthKit & BLE", desc: "Sinkronisasi dua arah denyut nadi & sensor eksternal", icon: <HeartPulse className="w-5 h-5 text-[#E74C3C]" /> }
  ];

  return (
    <section id="teknologi" className="py-20 px-6 bg-[#0E1016] border-y border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1 rounded-full border border-[#2ECC71]/20">
            Arsitektur Apple Terkini
          </span>
          <h2 className="text-3xl font-black text-white">Dibangun Tanpa Kompromi</h2>
          <p className="text-gray-400 text-sm">Menggunakan framework resmi iOS modern untuk performa kencang dan konsumsi daya baterai efisien.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techs.map((t, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {t.icon}
              </div>
              <h3 className="text-sm font-bold text-white">{t.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
