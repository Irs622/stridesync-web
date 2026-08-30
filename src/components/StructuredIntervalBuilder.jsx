import React, { useState } from 'react';
import { Layers } from 'lucide-react';

export default function StructuredIntervalBuilder() {
  const [selectedPlan, setSelectedPlan] = useState('speedLadder');

  const plans = {
    speedLadder: {
      title: "5K Speed Ladder",
      tagline: "Tangga kecepatan aerobik untuk memangkas waktu 5K",
      totalDistance: "4.8 km",
      duration: "26:00",
      steps: [
        { type: "Warmup", label: "Pemanasan Easy Jog", dist: "1,000 m", targetPace: "5:30 /km", color: "bg-blue-50 text-blue-600 border-blue-200" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "400 m", targetPace: "3:55 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Recovery", label: "Pemulihan Jog Santai", dist: "200 m", targetPace: "6:00 /km", color: "bg-gray-100 text-gray-700 border-gray-200" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "800 m", targetPace: "4:05 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Recovery", label: "Pemulihan Jog Santai", dist: "400 m", targetPace: "6:00 /km", color: "bg-gray-100 text-gray-700 border-gray-200" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "1,200 m", targetPace: "4:15 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Cooldown", label: "Pendinginan", dist: "800 m", targetPace: "5:45 /km", color: "bg-blue-50 text-blue-600 border-blue-200" }
      ]
    },
    tempo10K: {
      title: "10K Lactate Threshold Blocks",
      tagline: "Blok tempo ambang laktat untuk daya tahan kecepatan",
      totalDistance: "8.0 km",
      duration: "42:00",
      steps: [
        { type: "Warmup", label: "Pemanasan Progresif", dist: "1,500 m", targetPace: "5:20 /km", color: "bg-blue-50 text-blue-600 border-blue-200" },
        { type: "Interval", label: "Threshold Block 1", dist: "2,000 m", targetPace: "4:25 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Recovery", label: "Active Float Jog", dist: "500 m", targetPace: "5:30 /km", color: "bg-gray-100 text-gray-700 border-gray-200" },
        { type: "Interval", label: "Threshold Block 2", dist: "2,000 m", targetPace: "4:20 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Cooldown", label: "Pendinginan & Stretching", dist: "2,000 m", targetPace: "5:40 /km", color: "bg-blue-50 text-blue-600 border-blue-200" }
      ]
    },
    vo2max400s: {
      title: "VO2 Max 10x400m Repeats",
      tagline: "Interval pendek bertenaga untuk kapasitas paru & jantung maksimal",
      totalDistance: "6.0 km",
      duration: "30:00",
      steps: [
        { type: "Warmup", label: "Pemanasan + Dynamic Drills", dist: "1,200 m", targetPace: "5:15 /km", color: "bg-blue-50 text-blue-600 border-blue-200" },
        { type: "Interval", label: "Sprint 400m (Rep 1-5)", dist: "5x 400 m", targetPace: "3:40 /km", color: "bg-orange-50 text-[#FF6A00] border-orange-200" },
        { type: "Recovery", label: "Pemulihan Jalan/Jog", dist: "5x 200 m", targetPace: "6:30 /km", color: "bg-gray-100 text-gray-700 border-gray-200" },
        { type: "Cooldown", label: "Easy Jog Cooldown", dist: "1,800 m", targetPace: "5:50 /km", color: "bg-blue-50 text-blue-600 border-blue-200" }
      ]
    }
  };

  const current = plans[selectedPlan];

  return (
    <div className="clean-white-card p-6 sm:p-8 border border-orange-100 space-y-6 text-gray-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6A00]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900">Program Latihan Interval Terstruktur</h3>
            <p className="text-xs text-gray-500 font-semibold">Pilih program latihan terarah dengan audio cue otomatis</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedPlan('speedLadder')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition ${selectedPlan === 'speedLadder' ? 'bg-[#FF6A00] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            5K Ladder
          </button>
          <button
            onClick={() => setSelectedPlan('tempo10K')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition ${selectedPlan === 'tempo10K' ? 'bg-[#FF6A00] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            10K Tempo
          </button>
          <button
            onClick={() => setSelectedPlan('vo2max400s')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition ${selectedPlan === 'vo2max400s' ? 'bg-[#FF6A00] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            10x400m VO2
          </button>
        </div>
      </div>

      {/* Plan Summary Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-orange-50/80 p-4 rounded-2xl border border-orange-100">
        <div>
          <div className="text-base font-black text-gray-900">{current.title}</div>
          <div className="text-xs text-gray-600 font-medium">{current.tagline}</div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div><span className="text-gray-500 block text-[10px] font-bold">Total Jarak</span><b className="text-[#FF6A00] font-black">{current.totalDistance}</b></div>
          <div><span className="text-gray-500 block text-[10px] font-bold">Est. Durasi</span><b className="text-gray-900 font-black">{current.duration}</b></div>
        </div>
      </div>

      {/* Interval Steps List */}
      <div className="space-y-2">
        {current.steps.map((step, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 transition shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700">
                {idx + 1}
              </span>
              <div>
                <div className="text-xs font-black text-gray-900 flex items-center gap-2">
                  <span>{step.label}</span>
                  <span className={`text-[9px] uppercase font-mono font-black px-1.5 py-0.5 rounded border ${step.color}`}>
                    {step.type}
                  </span>
                </div>
                <div className="text-[10px] text-gray-500 font-mono mt-0.5 font-bold">Jarak Target: {step.dist}</div>
              </div>
            </div>

            <div className="text-right font-mono">
              <div className="text-xs font-black text-[#FF6A00]">{step.targetPace}</div>
              <div className="text-[9px] text-gray-400 font-bold">Pace Goal</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
