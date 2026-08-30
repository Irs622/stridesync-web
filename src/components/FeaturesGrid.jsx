import React from 'react';
import { Ghost, Mountain, Activity, Users, Video, Bluetooth, Bell, Shield, Compass, Sparkles } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Ghost className="w-6 h-6 text-[#FC5200]" />,
      title: "Virtual Ghost Runner",
      description: "Berlarilah melawan avatar waktu terbaik (PR) atau target pace balapan secara live dengan pembaruan jarak delta real-time.",
      badge: "Real-time Delta"
    },
    {
      icon: <Mountain className="w-6 h-6 text-[#2ECC71]" />,
      title: "Climb Classifier (UCI)",
      description: "Deteksi otomatis segmen tanjakan terukur (Cat 4 hingga HC) beserta grade kemiringan dan profil elevasi naik.",
      badge: "UCI & Strava Standard"
    },
    {
      icon: <Activity className="w-6 h-6 text-[#FFA033]" />,
      title: "TRIMP & Recovery Gauge",
      description: "Hitung beban fisiologis Banister TRIMP, Chronic Training Load (CTL), Fatigue (ATL), dan waktu pemulihan otot optimal.",
      badge: "Physiology Engine"
    },
    {
      icon: <Users className="w-6 h-6 text-[#3498DB]" />,
      title: "Live Group Run Radar",
      description: "Pindai pelari komunitas di sekitarmu dalam radius 1.5 km secara aman dan temukan teman lari dengan pace yang seimbang.",
      badge: "Community Radar"
    },
    {
      icon: <Video className="w-6 h-6 text-[#E74C3C]" />,
      title: "3D Aerial Flyover & AI Story",
      description: "Reka ulang rute lari dengan kamera helikopter 3D pitch 60° dan dengarkan narasi motivasi AI hasil ringkasan data sesi.",
      badge: "3D Replay"
    },
    {
      icon: <Bluetooth className="w-6 h-6 text-[#9B59B6]" />,
      title: "BLE & Apple Watch Sync",
      description: "Kompatibel langsung dengan strap sensor detak jantung Polar, Garmin, Wahoo, serta Live Activity Lock Screen.",
      badge: "Multi-Sensor"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#1ABC9C]" />,
      title: "Privacy Geofences & Safety Beacon",
      description: "Sembunyikan radius lokasi rumah/kantor secara otomatis dan bagikan tautan live tracking darurat kepada keluarga.",
      badge: "Safety First"
    },
    {
      icon: <Compass className="w-6 h-6 text-[#F39C12]" />,
      title: "GPX & FIT Dual Export",
      description: "Ekspor dan impor rute lari secara instan ke format GPX 1.1 XML & binary FIT Garmin standar internasional.",
      badge: "Universal Export"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FC5200]" />,
      title: "Swift 6 Strict Concurrency",
      description: "Arsitektur modern dengan Actor isolation (LocationEngine) tanpa glitch UI, baterai awet, dan zero data-race.",
      badge: "Swift 6 Core"
    }
  ];

  return (
    <section id="fitur" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FC5200] bg-[#FC5200]/10 px-3 py-1 rounded-full border border-[#FC5200]/20">
          Suite Fitur Komprehensif
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">Dibuat Khusus untuk Atlet Serius</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Setiap algoritma dirancang untuk memberikan feedback akurat, visualisasi mendalam, dan motivasi maksimal saat berlatih.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div key={idx} className="glass-card glass-card-hover rounded-3xl p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                {item.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
