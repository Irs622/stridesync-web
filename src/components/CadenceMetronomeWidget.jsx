import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Zap, Activity, Info, Gauge } from 'lucide-react';
import { audioEngine } from '../utils/audioSynthesizer';

export default function CadenceMetronomeWidget() {
  const [spm, setSpm] = useState(180);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beatCount, setBeatCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const intervalRef = useRef(null);

  const beatIntervalMs = (60 / spm) * 1000;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setBeatCount((prev) => {
          const next = (prev + 1) % 4;
          if (soundEnabled) {
            audioEngine.playMetronomeClick(next === 0);
          }
          return next;
        });
      }, beatIntervalMs);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, spm, soundEnabled, beatIntervalMs]);

  const togglePlay = () => {
    if (!isPlaying) {
      audioEngine.playBeep(600, 'sine', 0.05);
    }
    setIsPlaying(!isPlaying);
  };

  const getCadenceAdvice = (val) => {
    if (val < 165) return { label: "Low Cadence (Overstriding Risk)", color: "text-amber-400", desc: "Panjang langkah terlalu lebar dapat meningkatkan beban impak pada lutut & tulang kering." };
    if (val >= 165 && val <= 175) return { label: "Moderate Cadence (Aerobic Cruise)", color: "text-blue-400", desc: "Ritme ideal untuk easy run dan recovery jog santai." };
    if (val > 175 && val <= 185) return { label: "Optimal Pro Cadence (180 SPM Gold Standard)", color: "text-[#2ECC71]", desc: "Efisiensi biomekanika optimal: meminimalkan ground contact time dan osilasi vertikal." };
    return { label: "High Turnover (Sprint / 5K Kick)", color: "text-[#FC5200]", desc: "Putaran kaki cepat untuk akselerasi interval sprint dan finish kick." };
  };

  const advice = getCadenceAdvice(spm);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#FC5200]/10 border border-[#FC5200]/30 flex items-center justify-center text-[#FC5200]">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Cadence Metronome Trainer</h3>
            <p className="text-xs text-gray-400">Lock irama langkah kakimu untuk efisiensi lari terbaik</p>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2.5 rounded-xl border transition ${soundEnabled ? 'border-[#FC5200]/40 bg-[#FC5200]/10 text-[#FC5200]' : 'border-white/10 text-gray-400 hover:text-white'}`}
          title={soundEnabled ? "Suara Aktif" : "Muted"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Visual Metronome Pulse Disc */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-2">
        
        {/* Animated Beat Circle */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-150 ${
              isPlaying
                ? beatCount === 0
                  ? 'scale-110 bg-[#FC5200]/30 border-2 border-[#FC5200]'
                  : 'scale-100 bg-[#FC5200]/10 border border-[#FC5200]/20'
                : 'bg-white/5 border border-white/10'
            }`}
          />
          
          {/* Inner Core */}
          <div className="relative z-10 text-center">
            <div className="text-4xl font-black font-mono text-white tracking-tight">{spm}</div>
            <div className="text-[10px] uppercase font-bold text-[#FC5200] tracking-widest mt-0.5">SPM</div>
            <div className="text-[9px] text-gray-400 font-mono mt-0.5">{(60 / spm).toFixed(2)}s/beat</div>
          </div>
        </div>

        {/* Controls & Slider */}
        <div className="flex-1 w-full space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-gray-300">Target Cadence (Steps Per Minute):</span>
              <span className="text-sm font-black font-mono text-[#FC5200]">{spm} SPM</span>
            </div>
            <input
              type="range"
              min="150"
              max="210"
              value={spm}
              onChange={(e) => setSpm(parseInt(e.target.value))}
              className="w-full accent-[#FC5200] cursor-pointer h-2 bg-gray-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>150 (Jog)</span>
              <span className="text-[#2ECC71] font-bold">180 (Optimal)</span>
              <span>210 (Sprint)</span>
            </div>
          </div>

          <button
            onClick={togglePlay}
            className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition ${
              isPlaying
                ? 'bg-yellow-500 hover:bg-yellow-600 text-black shadow-yellow-500/20'
                : 'gradient-orange text-white shadow-[#FC5200]/30 hover:scale-[1.02]'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Hentikan Metronome' : 'Dengarkan Metronome Beat'}</span>
          </button>
        </div>

      </div>

      {/* Analysis Box */}
      <div className="p-4 rounded-2xl bg-[#0A0C10] border border-white/5 space-y-1">
        <div className={`text-xs font-bold ${advice.color} flex items-center gap-1.5`}>
          <Zap className="w-3.5 h-3.5" />
          <span>{advice.label}</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed font-normal">
          {advice.desc}
        </p>
      </div>

    </div>
  );
}
