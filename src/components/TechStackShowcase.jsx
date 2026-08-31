import React from 'react';
import { Cpu, Layers, Radio, HeartPulse } from 'lucide-react';

export default function TechStackShowcase() {
  const techs = [
    { title: "Swift 6 Concurrency", desc: "Actor-isolated LocationEngine untuk zero data race", icon: <Cpu className="w-5 h-5 text-white" /> },
    { title: "SwiftUI & SwiftData", desc: "Arsitektur view reaktif & offline-first persistence", icon: <Layers className="w-5 h-5 text-white" /> },
    { title: "Supabase & WebSockets", desc: "Real-time feed Kudos, Komentar & RLS PostgreSQL", icon: <Radio className="w-5 h-5 text-white" /> },
    { title: "Apple HealthKit & BLE", desc: "Sinkronisasi dua arah denyut nadi & sensor daya Bluetooth", icon: <HeartPulse className="w-5 h-5 text-white" /> }
  ];

  return (
    <section id="teknologi" className="py-20 px-6 relative overflow-hidden text-white">
      
      {/* Background Dots */}
      <div className="absolute top-10 right-10 w-32 h-32 pattern-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-white bg-white/20 px-3.5 py-1.5 rounded-full border border-white/30">
            Arsitektur Apple Terkini
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Dibangun Tanpa Kompromi</h2>
          <p className="text-white/90 text-sm font-medium">Menggunakan framework resmi iOS modern untuk performa kencang dan konsumsi daya baterai efisien.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techs.map((t, idx) => (
            <div key={idx} className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/30 space-y-3 hover:bg-white/20 transition">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A00] flex items-center justify-center shadow-md">
                {t.icon}
              </div>
              <h3 className="text-sm font-black text-white">{t.title}</h3>
              <p className="text-xs text-white/80 leading-relaxed font-medium">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
