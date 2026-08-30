import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Zap, Gauge } from 'lucide-react';
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
    if (val < 165) return { label: "Low Cadence (Risiko Overstriding)", color: "text-amber-600", desc: "Panjang langkah terlalu lebar dapat meningkatkan beban impak pada lutut & tulang kering." };
    if (val >= 165 && val <= 175) return { label: "Moderate Cadence (Aerobic Cruise)", color: "text-blue-600", desc: "Ritme ideal untuk easy run dan recovery jog santai." };
    if (val > 175 && val <= 185) return { label: "Optimal Pro Cadence (180 SPM Gold Standard)", color: "text-[#2ECC71]", desc: "Efisiensi biomekanika optimal: meminimalkan ground contact time dan osilasi vertikal." };
    return { label: "High Turnover (Sprint / 5K Kick)", color: "text-[#FF6A00]", desc: "Putaran kaki cepat untuk akselerasi interval sprint dan finish kick." };
  };

  const advice = getCadenceAdvice(spm);

  return (
    <div className="clean-white-card p-6 sm:p-8 border border-orange-100 space-y-6 text-gray-900">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6A00]">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900">Cadence Metronome Trainer</h3>
            <p className="text-xs text-gray-500 font-semibold">Lock irama langkah kakimu untuk efisiensi lari terbaik</p>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2.5 rounded-xl border transition ${soundEnabled ? 'border-orange-300 bg-orange-50 text-[#FF6A00]' : 'border-gray-200 text-gray-400 hover:text-gray-700'}`}
          title={soundEnabled ? "Suara Aktif" : "Muted"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Visual Metronome Pulse Disc */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-2">
        
        {/* Animated Beat Circle */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full transition-all duration-150 ${
              isPlaying
                ? beatCount === 0
                  ? 'scale-110 bg-[#FF6A00]/20 border-2 border-[#FF6A00]'
                  : 'scale-100 bg-[#FF6A00]/10 border border-[#FF6A00]/20'
                : 'bg-orange-50/60 border border-orange-100'
            }`}
          />
          
          <div className="relative z-10 text-center">
            <div className="text-4xl font-black font-mono text-gray-900 tracking-tight">{spm}</div>
            <div className="text-[10px] uppercase font-bold text-[#FF6A00] tracking-widest mt-0.5">SPM</div>
            <div className="text-[9px] text-gray-400 font-mono mt-0.5">{(60 / spm).toFixed(2)}s/beat</div>
          </div>
        </div>

        {/* Controls & Slider */}
        <div className="flex-1 w-full space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-gray-700">Target Cadence (Steps Per Minute):</span>
              <span className="text-sm font-black font-mono text-[#FF6A00]">{spm} SPM</span>
            </div>
            <input
              type="range"
              min="150"
              max="210"
              value={spm}
              onChange={(e) => setSpm(parseInt(e.target.value))}
              className="w-full accent-[#FF6A00] cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono font-bold">
              <span>150 (Jog)</span>
              <span className="text-[#2ECC71]">180 (Optimal)</span>
              <span>210 (Sprint)</span>
            </div>
          </div>

          <button
            onClick={togglePlay}
            className={`w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition ${
              isPlaying
                ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                : 'bg-[#FF6A00] hover:bg-[#E65100] text-white shadow-orange-500/25'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Hentikan Metronome' : 'Dengarkan Metronome Beat'}</span>
          </button>
        </div>

      </div>

      {/* Analysis Box */}
      <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-100 space-y-1">
        <div className={`text-xs font-bold ${advice.color} flex items-center gap-1.5`}>
          <Zap className="w-3.5 h-3.5" />
          <span>{advice.label}</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed font-medium">
          {advice.desc}
        </p>
      </div>

    </div>
  );
}
