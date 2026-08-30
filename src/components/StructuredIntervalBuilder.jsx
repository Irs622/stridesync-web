import React, { useState } from 'react';
import { Layers, Flame, Timer, Play, CheckCircle2, ChevronRight } from 'lucide-react';

export default function StructuredIntervalBuilder() {
  const [selectedPlan, setSelectedPlan] = useState('speedLadder');

  const plans = {
    speedLadder: {
      title: "5K Speed Ladder",
      tagline: "Tangga kecepatan aerobik untuk memangkas waktu 5K",
      totalDistance: "4.8 km",
      duration: "26:00",
      steps: [
        { type: "Warmup", label: "Pemanasan Easy Jog", dist: "1,000 m", targetPace: "5:30 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "400 m", targetPace: "3:55 /km", color: "bg-[#FC5200]/20 text-[#FC5200] border-[#FC5200]/40" },
        { type: "Recovery", label: "Pemulihan Jog Santai", dist: "200 m", targetPace: "6:00 /km", color: "bg-gray-700/30 text-gray-300 border-gray-600/30" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "800 m", targetPace: "4:05 /km", color: "bg-[#FC5200]/20 text-[#FC5200] border-[#FC5200]/40" },
        { type: "Recovery", label: "Pemulihan Jog Santai", dist: "400 m", targetPace: "6:00 /km", color: "bg-gray-700/30 text-gray-300 border-gray-600/30" },
        { type: "Interval", label: "Fase Cepat (Hard)", dist: "1,200 m", targetPace: "4:15 /km", color: "bg-[#FC5200]/20 text-[#FC5200] border-[#FC5200]/40" },
        { type: "Cooldown", label: "Pendinginan", dist: "800 m", targetPace: "5:45 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" }
      ]
    },
    tempo10K: {
      title: "10K Lactate Threshold Blocks",
      tagline: "Blok tempo ambang laktat untuk daya tahan kecepatan",
      totalDistance: "8.0 km",
      duration: "42:00",
      steps: [
        { type: "Warmup", label: "Pemanasan Progresif", dist: "1,500 m", targetPace: "5:20 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" },
        { type: "Interval", label: "Threshold Block 1", dist: "2,000 m", targetPace: "4:25 /km", color: "bg-[#FFA033]/20 text-[#FFA033] border-[#FFA033]/40" },
        { type: "Recovery", label: "Active Float Jog", dist: "500 m", targetPace: "5:30 /km", color: "bg-gray-700/30 text-gray-300 border-gray-600/30" },
        { type: "Interval", label: "Threshold Block 2", dist: "2,000 m", targetPace: "4:20 /km", color: "bg-[#FFA033]/20 text-[#FFA033] border-[#FFA033]/40" },
        { type: "Cooldown", label: "Pendinginan & Stretching", dist: "2,000 m", targetPace: "5:40 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" }
      ]
    },
    vo2max400s: {
      title: "VO2 Max 10x400m Repeats",
      tagline: "Interval pendek bertenaga untuk kapasitas paru & jantung maksimal",
      totalDistance: "6.0 km",
      duration: "30:00",
      steps: [
        { type: "Warmup", label: "Pemanasan + Dynamic Drills", dist: "1,200 m", targetPace: "5:15 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" },
        { type: "Interval", label: "Sprint 400m (Rep 1-5)", dist: "5x 400 m", targetPace: "3:40 /km", color: "bg-[#FC5200]/20 text-[#FC5200] border-[#FC5200]/40" },
        { type: "Recovery", label: "Pemulihan Jalan/Jog", dist: "5x 200 m", targetPace: "6:30 /km", color: "bg-gray-700/30 text-gray-300 border-gray-600/30" },
        { type: "Cooldown", label: "Easy Jog Cooldown", dist: "1,800 m", targetPace: "5:50 /km", color: "bg-blue-500/20 text-blue-400 border-blue-500/40" }
      ]
    }
  };

  const current = plans[selectedPlan];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#FFA033]/10 border border-[#FFA033]/30 flex items-center justify-center text-[#FFA033]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Program Latihan Interval Terstruktur</h3>
            <p className="text-xs text-gray-400">Pilih program latihan terarah dengan audio cue otomatis</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedPlan('speedLadder')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${selectedPlan === 'speedLadder' ? 'gradient-orange text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
          >
            5K Ladder
          </button>
          <button
            onClick={() => setSelectedPlan('tempo10K')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${selectedPlan === 'tempo10K' ? 'gradient-orange text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
          >
            10K Tempo
          </button>
          <button
            onClick={() => setSelectedPlan('vo2max400s')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${selectedPlan === 'vo2max400s' ? 'gradient-orange text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
          >
            10x400m VO2
          </button>
        </div>
      </div>

      {/* Plan Summary Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0A0C10] p-4 rounded-2xl border border-white/5">
        <div>
          <div className="text-base font-black text-white">{current.title}</div>
          <div className="text-xs text-gray-400">{current.tagline}</div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div><span className="text-gray-500 block text-[10px]">Total Jarak</span><b className="text-[#FC5200]">{current.totalDistance}</b></div>
          <div><span className="text-gray-500 block text-[10px]">Est. Durasi</span><b className="text-white">{current.duration}</b></div>
        </div>
      </div>

      {/* Interval Steps List */}
      <div className="space-y-2">
        {current.steps.map((step, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-2xl bg-[#0A0C10] border border-white/5 hover:border-white/20 transition"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-gray-300">
                {idx + 1}
              </span>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span>{step.label}</span>
                  <span className={`text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded border ${step.color}`}>
                    {step.type}
                  </span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">Jarak Target: {step.dist}</div>
              </div>
            </div>

            <div className="text-right font-mono">
              <div className="text-xs font-bold text-[#FC5200]">{step.targetPace}</div>
              <div className="text-[9px] text-gray-500">Pace Goal</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
