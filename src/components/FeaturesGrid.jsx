import React from 'react';
import { Ghost, Mountain, Activity, Users, Video, Bluetooth, Shield, Compass, Sparkles } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Ghost className="w-6 h-6 text-white" />,
      title: "Virtual Ghost Runner",
      description: "Berlarilah melawan avatar waktu terbaik (PR) atau target pace balapan secara live dengan pembaruan jarak delta real-time.",
      badge: "Real-time Delta"
    },
    {
      icon: <Mountain className="w-6 h-6 text-white" />,
      title: "Climb Classifier (UCI)",
      description: "Deteksi otomatis segmen tanjakan terukur (Cat 4 hingga HC) beserta grade kemiringan dan profil elevasi naik.",
      badge: "UCI & Strava Standard"
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "TRIMP & Recovery Gauge",
      description: "Hitung beban fisiologis Banister TRIMP, Chronic Training Load (CTL), Fatigue (ATL), dan waktu pemulihan otot optimal.",
      badge: "Physiology Engine"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Live Group Run & Realtime Feed",
      description: "Pindai pelari komunitas dalam radius 1.5 km dan nikmati streaming Kudos serta Komentar instan via Supabase Realtime WebSockets.",
      badge: "Realtime WebSocket"
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: "3D Aerial Flyover & AI Story",
      description: "Reka ulang rute lari dengan kamera helikopter 3D pitch 60° dan dengarkan narasi motivasi AI hasil ringkasan data sesi.",
      badge: "3D Replay"
    },
    {
      icon: <Bluetooth className="w-6 h-6 text-white" />,
      title: "BLE & Apple Watch Sync",
      description: "Kompatibel langsung dengan strap sensor detak jantung Polar, Garmin, Wahoo, serta Live Activity Lock Screen.",
      badge: "Multi-Sensor"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Privacy Geofences & Safety Beacon",
      description: "Sembunyikan radius lokasi rumah/kantor secara otomatis dan bagikan tautan live tracking darurat kepada keluarga.",
      badge: "Safety First"
    },
    {
      icon: <Compass className="w-6 h-6 text-white" />,
      title: "GPX & FIT Dual Export",
      description: "Ekspor dan impor rute lari secara instan ke format GPX 1.1 XML & binary FIT Garmin standar internasional.",
      badge: "Universal Export"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Swift 6 Concurrency & CI/CD",
      description: "Arsitektur modern dengan Actor isolation (LocationEngine), 81 unit tests passing, dan GitHub Actions CI/CD.",
      badge: "100% Tested"
    }
  ];

  return (
    <section id="fitur" className="py-24 px-6 bg-[#FFF9F2] relative overflow-hidden">
      
      {/* Decorative Dotted Accents */}
      <div className="absolute top-10 left-12 w-32 h-32 pattern-dots-orange opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-12 w-40 h-40 pattern-dots-orange opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF6A00] bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200">
            Suite Fitur Komprehensif
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Dibuat Khusus untuk Atlet Serius</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Setiap modul dirancang dari nol untuk memberikan data akurat, visualisasi mendalam, dan motivasi maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="clean-white-card clean-card-hover p-8 space-y-4 border border-orange-100 relative overflow-hidden">
              
              <div className="flex items-center justify-between">
                {/* Hexagonal Orange Icon Container */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#FF6A00] to-[#FFA133] p-3 shadow-md shadow-orange-500/25 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-[#FF6A00]">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
