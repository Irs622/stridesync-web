import React, { useState } from 'react';
import { Activity, Flame, Trophy, Clock, Zap, ArrowUpRight } from 'lucide-react';

export default function RacePredictorCalculator() {
  const [fiveKmTimeMinutes, setFiveKmTimeMinutes] = useState(24.5); // 24m 30s
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male'); // 'male' | 'female'

  // Calculate pace per km in minutes
  const pacePerKm = fiveKmTimeMinutes / 5.0; // minutes per km
  const speedMps = 5000 / (fiveKmTimeMinutes * 60);

  // Jack Daniels VDOT / VO2 Max estimation formula
  const vo2Max = +(Math.min(85, Math.max(30, (speedMps * 0.2 + 3.5) / 0.19 + (speedMps > 3.8 ? 5.0 : 0.0)))).toFixed(1);

  // Riegel formula for race time predictions: T2 = T1 * (D2 / D1)^1.06
  const calcTime = (targetDistMeters) => {
    const t1Sec = fiveKmTimeMinutes * 60;
    const t2Sec = t1Sec * Math.pow(targetDistMeters / 5000, 1.06);
    const hrs = Math.floor(t2Sec / 3600);
    const mins = Math.floor((t2Sec % 3600) / 60);
    const secs = Math.floor(t2Sec % 60);
    if (hrs > 0) {
      return `${hrs}j ${mins}m ${secs}d`;
    }
    return `${mins}m ${secs}d`;
  };

  const calcPace = (targetDistMeters) => {
    const t1Sec = fiveKmTimeMinutes * 60;
    const t2Sec = t1Sec * Math.pow(targetDistMeters / 5000, 1.06);
    const paceSec = t2Sec / (targetDistMeters / 1000);
    const m = Math.floor(paceSec / 60);
    const s = Math.floor(paceSec % 60);
    return `${m}'${String(s).padStart(2, '0')}" /km`;
  };

  return (
    <section id="kalkulator" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFA033] bg-[#FFA033]/10 px-3 py-1 rounded-full border border-[#FFA033]/20">
          Algoritma Fisiologis
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">Kalkulator VO2 Max & Prediksi Lomba</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Geser slider catatan waktu 5K Anda untuk melihat algoritma StrideSync menghitung estimasi VO2 Max dan memprediksi waktu finish 10K, Half Marathon, dan Marathon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        
        {/* Left Card: Input Sliders */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl bg-[#FC5200]/10 border border-[#FC5200]/30 flex items-center justify-center text-[#FC5200]">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Parameter Atlet</h3>
              <p className="text-xs text-gray-400">Sesuaikan dengan rekor pribadimu</p>
            </div>
          </div>

          {/* 5K Time Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-gray-300">Waktu Lari 5K Terbaik:</span>
              <span className="text-xl font-black text-[#FC5200]">
                {Math.floor(fiveKmTimeMinutes)}m {Math.round((fiveKmTimeMinutes % 1) * 60)}s
              </span>
            </div>
            <input
              type="range"
              min="14"
              max="45"
              step="0.25"
              value={fiveKmTimeMinutes}
              onChange={(e) => setFiveKmTimeMinutes(parseFloat(e.target.value))}
              className="w-full accent-[#FC5200] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>14m (Elite)</span>
              <span>25m (Sub-25)</span>
              <span>45m (Easy)</span>
            </div>
          </div>

          {/* Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-gray-300">Usia Atlet:</span>
              <span className="text-base font-black text-white">{age} Tahun</span>
            </div>
            <input
              type="range"
              min="15"
              max="70"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full accent-[#FC5200] cursor-pointer"
            />
          </div>

          {/* Gender Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 block">Kategori Jenis Kelamin:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setGender('male')}
                className={`py-2.5 rounded-xl text-xs font-bold transition ${gender === 'male' ? 'bg-[#FC5200] text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                Pria (Male)
              </button>
              <button
                onClick={() => setGender('female')}
                className={`py-2.5 rounded-xl text-xs font-bold transition ${gender === 'female' ? 'bg-[#FC5200] text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                Wanita (Female)
              </button>
            </div>
          </div>

          {/* Calculated VO2 Max Score Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#181C26] to-[#252C3D] border border-[#FC5200]/30 text-center space-y-1">
            <div className="text-xs uppercase font-bold text-gray-400">Estimasi Skor VO2 Max:</div>
            <div className="text-4xl font-black text-[#FC5200]">{vo2Max} <span className="text-sm text-gray-300 font-normal">ml/kg/min</span></div>
            <div className="text-xs font-bold text-[#2ECC71]">
              {vo2Max > 54 ? 'Kategori Luar Biasa (Superior)' : vo2Max > 45 ? 'Kategori Sangat Baik (Excellent)' : 'Kategori Baik (Good)'}
            </div>
          </div>

        </div>

        {/* Right Card: Race Predictions */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-base font-bold text-white">Prediksi Waktu Balapan</h3>
              <p className="text-xs text-gray-400">Berdasarkan rumus Riegel & Banister Fisiologis</p>
            </div>
            <Trophy className="w-6 h-6 text-[#FFA033]" />
          </div>

          <div className="space-y-3">
            {/* 10K */}
            <div className="bg-[#0A0C10] p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:border-[#FC5200]/30 transition">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-gray-400 uppercase">10 Kilometer (10K)</div>
                <div className="text-xl font-black text-white">{calcTime(10000)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#FC5200]">{calcPace(10000)}</div>
                <div className="text-[10px] text-gray-500 font-semibold">Target Lomba</div>
              </div>
            </div>

            {/* Half Marathon */}
            <div className="bg-[#0A0C10] p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:border-[#FC5200]/30 transition">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-gray-400 uppercase">Half Marathon (21.1 km)</div>
                <div className="text-xl font-black text-[#FFA033]">{calcTime(21097.5)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#FFA033]">{calcPace(21097.5)}</div>
                <div className="text-[10px] text-gray-500 font-semibold">Target HM</div>
              </div>
            </div>

            {/* Full Marathon */}
            <div className="bg-[#0A0C10] p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:border-[#FC5200]/30 transition">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-gray-400 uppercase">Full Marathon (42.2 km)</div>
                <div className="text-xl font-black text-[#2ECC71]">{calcTime(42195)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#2ECC71]">{calcPace(42195)}</div>
                <div className="text-[10px] text-gray-500 font-semibold">Target FM</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-400 flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-[#FC5200] shrink-0 mt-0.5" />
            <span>
              Di dalam aplikasi iOS StrideSync, algoritma ini disinkronkan secara otomatis dengan sensor detak jantung Bluetooth (BLE) dan Apple HealthKit.
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
