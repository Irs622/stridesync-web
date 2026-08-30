import React, { useState } from 'react';
import { Activity, Trophy, Zap, Gauge } from 'lucide-react';

export default function RacePredictorCalculator() {
  const [fiveKmTimeMinutes, setFiveKmTimeMinutes] = useState(24.5);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('male');

  const speedMps = 5000 / (fiveKmTimeMinutes * 60);
  const vo2Max = +(Math.min(85, Math.max(30, (speedMps * 0.2 + 3.5) / 0.19 + (speedMps > 3.8 ? 5.0 : 0.0)))).toFixed(1);

  const calcTime = (targetDistMeters) => {
    const t1Sec = fiveKmTimeMinutes * 60;
    const t2Sec = t1Sec * Math.pow(targetDistMeters / 5000, 1.06);
    const hrs = Math.floor(t2Sec / 3600);
    const mins = Math.floor((t2Sec % 3600) / 60);
    const secs = Math.floor(t2Sec % 60);
    if (hrs > 0) return `${hrs}j ${mins}m ${secs}d`;
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
    <section id="kalkulator" className="py-24 px-6 relative overflow-hidden">
      
      {/* Decorative Dotted Grid */}
      <div className="absolute top-10 left-10 w-36 h-36 pattern-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto text-white">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF6A00] bg-white px-3.5 py-1.5 rounded-full shadow-md">
            Algoritma Fisiologis
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white drop-shadow-sm">Kalkulator VO2 Max & Prediksi Lomba</h2>
          <p className="text-white/90 text-sm sm:text-base font-medium">
            Geser slider catatan waktu 5K Anda untuk melihat algoritma StrideSync menghitung estimasi VO2 Max dan memprediksi waktu finish 10K, Half Marathon, dan Marathon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Card: Input Sliders in Clean White Card */}
          <div className="lg:col-span-5 clean-white-card p-6 sm:p-8 space-y-6 text-gray-900 border border-orange-100">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6A00] font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-gray-900">Parameter Atlet</h3>
                <p className="text-xs text-gray-500 font-semibold">Sesuaikan dengan rekor pribadimu</p>
              </div>
            </div>

            {/* 5K Time Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-700">Waktu Lari 5K Terbaik:</span>
                <span className="text-xl font-black font-mono text-[#FF6A00]">
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
                className="w-full accent-[#FF6A00] cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono font-bold">
                <span>14m (Elite)</span>
                <span>25m (Sub-25)</span>
                <span>45m (Easy)</span>
              </div>
            </div>

            {/* Age Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-700">Usia Atlet:</span>
                <span className="text-base font-black font-mono text-gray-900">{age} Tahun</span>
              </div>
              <input
                type="range"
                min="15"
                max="70"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full accent-[#FF6A00] cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* Gender Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">Kategori Jenis Kelamin:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGender('male')}
                  className={`py-2.5 rounded-xl text-xs font-black transition ${gender === 'male' ? 'bg-[#FF6A00] text-white shadow-md shadow-orange-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Pria (Male)
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`py-2.5 rounded-xl text-xs font-black transition ${gender === 'female' ? 'bg-[#FF6A00] text-white shadow-md shadow-orange-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  Wanita (Female)
                </button>
              </div>
            </div>

            {/* Calculated VO2 Max Score Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF8A00] text-white text-center space-y-1 shadow-lg shadow-orange-600/25">
              <div className="text-xs uppercase font-extrabold text-white/80">Estimasi Skor VO2 Max:</div>
              <div className="text-4xl font-black font-mono">{vo2Max} <span className="text-sm font-normal text-white/90">ml/kg/min</span></div>
              <div className="text-xs font-bold text-white pt-0.5">
                {vo2Max > 54 ? 'Kategori Luar Biasa (Superior 🏆)' : vo2Max > 45 ? 'Kategori Sangat Baik (Excellent)' : 'Kategori Baik (Good)'}
              </div>
            </div>

          </div>

          {/* Right Card: Race Predictions in Clean White Card */}
          <div className="lg:col-span-7 clean-white-card p-6 sm:p-8 space-y-6 text-gray-900 border border-orange-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-base font-black text-gray-900">Prediksi Waktu Balapan</h3>
                <p className="text-xs text-gray-500 font-semibold">Berdasarkan rumus Riegel & Banister Fisiologis</p>
              </div>
              <Trophy className="w-6 h-6 text-[#FF6A00]" />
            </div>

            <div className="space-y-3">
              {/* 10K */}
              <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 flex items-center justify-between hover:border-[#FF6A00]/40 transition">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gray-600 uppercase">10 Kilometer (10K)</div>
                  <div className="text-xl font-black font-mono text-gray-900">{calcTime(10000)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-black text-[#FF6A00]">{calcPace(10000)}</div>
                  <div className="text-[10px] text-gray-500 font-semibold">Target Lomba</div>
                </div>
              </div>

              {/* Half Marathon */}
              <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 flex items-center justify-between hover:border-[#FF6A00]/40 transition">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gray-600 uppercase">Half Marathon (21.1 km)</div>
                  <div className="text-xl font-black font-mono text-gray-900">{calcTime(21097.5)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-black text-[#FF6A00]">{calcPace(21097.5)}</div>
                  <div className="text-[10px] text-gray-500 font-semibold">Target HM</div>
                </div>
              </div>

              {/* Full Marathon */}
              <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 flex items-center justify-between hover:border-[#FF6A00]/40 transition">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gray-600 uppercase">Full Marathon (42.2 km)</div>
                  <div className="text-xl font-black font-mono text-gray-900">{calcTime(42195)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-black text-[#FF6A00]">{calcPace(42195)}</div>
                  <div className="text-[10px] text-gray-500 font-semibold">Target FM</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-gray-700 flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
              <span>
                Di dalam aplikasi iOS StrideSync, algoritma ini disinkronkan secara otomatis dengan sensor detak jantung Bluetooth (BLE) dan Apple HealthKit.
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
