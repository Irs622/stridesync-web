import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Heart, Zap, Compass, Volume2, Mountain, Users, Trophy, Activity, CheckCircle2 } from 'lucide-react';

export default function PhoneSimulator() {
  const [activeTab, setActiveTab] = useState('hud'); // 'hud' | 'feed' | 'climbs' | 'recovery'
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(720); // 12:00
  const [distance, setDistance] = useState(2.54);
  const [pace, setPace] = useState(282); // 4:42
  const [hr, setHr] = useState(158);
  const [ghostGap, setGhostGap] = useState(42);
  const [audioCue, setAudioCue] = useState('Tekan Mulai untuk menyalakan simulasi live audio coach.');

  // Live Timer Simulation
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
        setDistance((prev) => +(prev + 0.004).toFixed(3));
        setHr((prev) => Math.min(182, prev + (Math.random() > 0.6 ? 1 : -1)));
        setGhostGap((prev) => prev + (Math.random() > 0.4 ? 1 : -1));
        
        // Dynamic voice cues
        if (seconds % 20 === 0) {
          setAudioCue(`"Km ${Math.floor(distance) + 1} tercapai. Pace ${formatPace(pace)} /km. Jarak ke Ghost Runner: +${ghostGap}m!"`);
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, distance, pace, ghostGap]);

  const formatTime = (totalSec) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const formatPace = (paceSec) => {
    const m = Math.floor(paceSec / 60);
    const s = paceSec % 60;
    return `${m}'${String(s).padStart(2, '0')}"`;
  };

  const resetWorkout = () => {
    setIsRunning(false);
    setSeconds(0);
    setDistance(0.0);
    setHr(145);
    setGhostGap(0);
    setAudioCue('Simulasi di-reset. Siap untuk sesi baru.');
  };

  return (
    <section id="simulator" className="py-24 px-6 bg-[#0E1016] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FC5200] bg-[#FC5200]/10 px-3 py-1 rounded-full border border-[#FC5200]/20">
            Interactive Phone Mockup
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Simulasi Antarmuka iPhone Live</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Pilih tab di bawah untuk menjelajahi berbagai modul antarmuka StrideSync (Live HUD, Feed Komunitas, Deteksi Tanjakan, & Recovery Gauge).
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto p-1.5 rounded-2xl glass-card border border-white/10">
          <button
            onClick={() => setActiveTab('hud')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'hud' ? 'gradient-orange text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Zap className="w-4 h-4" />
            <span>Live HUD</span>
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'feed' ? 'gradient-orange text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Users className="w-4 h-4" />
            <span>Feed Komunitas</span>
          </button>
          <button
            onClick={() => setActiveTab('climbs')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'climbs' ? 'gradient-orange text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Mountain className="w-4 h-4" />
            <span>Climbs & Segmen</span>
          </button>
          <button
            onClick={() => setActiveTab('recovery')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'recovery' ? 'gradient-orange text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Activity className="w-4 h-4" />
            <span>TRIMP Recovery</span>
          </button>
        </div>

        {/* Phone Container & Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left: iPhone 15 Pro Hardware Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[320px] sm:w-[360px] p-4 bg-[#141822] rounded-[54px] border-4 border-gray-700/70 shadow-2xl glow-orange">
              
              {/* Dynamic Island */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-between px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FC5200] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-white/90">{isRunning ? 'REC' : 'STANDBY'}</span>
              </div>

              {/* Screen Body */}
              <div className="bg-[#0E1014] rounded-[44px] overflow-hidden p-5 pt-14 text-white min-h-[580px] flex flex-col justify-between">
                
                {/* TAB 1: LIVE HUD */}
                {activeTab === 'hud' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-[#2ECC71] animate-ping' : 'bg-yellow-400'}`} />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2ECC71]">Lari Luar Ruang</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-300">{formatTime(seconds)}</span>
                    </div>

                    <div className="text-center py-2">
                      <div className="text-5xl font-black tracking-tight">{distance.toFixed(2)}</div>
                      <div className="text-xs uppercase font-bold text-[#FC5200] tracking-widest mt-1">Kilometer (KM)</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[#181B24] p-3.5 rounded-2xl border border-white/5 text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-semibold">Pace Saat Ini</div>
                        <div className="text-2xl font-black text-white mt-0.5">{formatPace(pace)}</div>
                        <div className="text-[10px] text-[#2ECC71] font-bold">▲ +0:15 vs PR</div>
                      </div>
                      <div className="bg-[#181B24] p-3.5 rounded-2xl border border-white/5 text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-semibold">Detak Jantung</div>
                        <div className="text-2xl font-black text-[#FC5200] mt-0.5 flex items-center justify-center gap-1">
                          <Heart className="w-5 h-5 fill-current animate-pulse text-[#FC5200]" />
                          <span>{hr}</span>
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold">Zona 4 (Threshold)</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-[#181B24] to-[#222836] p-3 rounded-2xl border border-[#FC5200]/30 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">👻</span>
                          <div>
                            <div className="text-xs font-bold">Ghost Runner</div>
                            <div className="text-[10px] text-gray-400">Target Sub-25m 5K</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#2ECC71] bg-[#2ECC71]/10 px-2 py-1 rounded-lg">
                          +{ghostGap}m di depan
                        </span>
                      </div>

                      <div className="bg-[#181B24] p-3 rounded-2xl border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">⏱️</span>
                          <div>
                            <div className="text-xs font-bold">Cadence Metronome</div>
                            <div className="text-[10px] text-gray-400">Target 180 SPM</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#FC5200] bg-[#FC5200]/10 px-2 py-1 rounded-lg">182 SPM</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: COMMUNITY FEED */}
                {activeTab === 'feed' && (
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold uppercase text-[#FC5200] tracking-wider border-b border-white/10 pb-2">
                      Komunitas Atlet StrideSync
                    </div>
                    
                    <div className="bg-[#181B24] p-3.5 rounded-2xl border border-white/5 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#FC5200] flex items-center justify-center font-bold text-xs">IS</div>
                          <div>
                            <div className="text-xs font-bold">Irsal Shydiq</div>
                            <div className="text-[9px] text-gray-400">Pagi ini di Senayan • Nike Alphafly 3</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#2ECC71] bg-[#2ECC71]/10 px-2 py-0.5 rounded-full">PR 10K 🏆</span>
                      </div>
                      <div className="text-sm font-black text-white">Morning Threshold Run 10K⚡️</div>
                      <div className="grid grid-cols-3 gap-1 text-center bg-black/30 p-2 rounded-xl text-[10px]">
                        <div><span className="text-gray-400 block">Jarak</span><b className="text-white">10.02 km</b></div>
                        <div><span className="text-gray-400 block">Pace</span><b className="text-[#FC5200]">4'32"/km</b></div>
                        <div><span className="text-gray-400 block">Waktu</span><b className="text-white">45:28</b></div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                        <span className="flex items-center gap-1 text-[#FC5200] font-bold">❤️ 24 Kudos</span>
                        <span>💬 6 Komentar</span>
                      </div>
                    </div>

                    <div className="bg-[#181B24] p-3 rounded-2xl border border-white/5 space-y-1">
                      <div className="text-xs font-bold">Budi Santoso</div>
                      <div className="text-[11px] text-gray-300">Easy Recovery 5K Jog di Sudirman 🏃</div>
                    </div>
                  </div>
                )}

                {/* TAB 3: CLIMBS */}
                {activeTab === 'climbs' && (
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold uppercase text-[#2ECC71] tracking-wider border-b border-white/10 pb-2">
                      Deteksi Tanjakan (Climb Classifier)
                    </div>

                    <div className="bg-[#181B24] p-4 rounded-2xl border border-[#2ECC71]/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Monas North Sprint</span>
                        <span className="text-[10px] font-bold bg-[#2ECC71] text-black px-2 py-0.5 rounded-md font-mono">CAT 4</span>
                      </div>
                      <div className="text-2xl font-black text-[#2ECC71]">+18 m <span className="text-xs text-gray-400 font-normal">Elevasi</span></div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-300 bg-black/40 p-2 rounded-xl">
                        <div>Panjang: <b>650 m</b></div>
                        <div>Rata-rata Grade: <b>2.8%</b></div>
                        <div>KOM: <b>1m 42s (Alex R.)</b></div>
                        <div>Skor UCI: <b>48.2</b></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/30 border border-white/5 text-[11px] text-gray-400">
                      ⚡️ Algoritma UCI/Strava secara otomatis membedah telemetry GPS dan mengelompokkan segmen tanjakan terukur.
                    </div>
                  </div>
                )}

                {/* TAB 4: RECOVERY */}
                {activeTab === 'recovery' && (
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold uppercase text-[#FFA033] tracking-wider border-b border-white/10 pb-2">
                      Banister TRIMP & Readiness Gauge
                    </div>

                    <div className="bg-[#181B24] p-4 rounded-2xl border border-white/5 text-center space-y-2">
                      <div className="text-[10px] uppercase font-bold text-gray-400">Kesiapan Tubuh (Readiness)</div>
                      <div className="text-3xl font-black text-[#2ECC71]">Optimal (Siap Lari)</div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2ECC71] h-full w-[85%]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                      <div className="bg-[#181B24] p-2.5 rounded-xl border border-white/5">
                        <div className="text-gray-400 font-semibold">Skor TRIMP Sesi</div>
                        <div className="text-lg font-black text-white mt-0.5">84.2</div>
                      </div>
                      <div className="bg-[#181B24] p-2.5 rounded-xl border border-white/5">
                        <div className="text-gray-400 font-semibold">Saran Istirahat</div>
                        <div className="text-lg font-black text-[#FC5200] mt-0.5">18 Jam</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Hardware Navigation Simulation */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 px-2">
                  <span className={activeTab === 'hud' ? 'text-[#FC5200] font-bold' : ''}>HUD</span>
                  <span className={activeTab === 'feed' ? 'text-[#FC5200] font-bold' : ''}>Feed</span>
                  <span className={activeTab === 'climbs' ? 'text-[#FC5200] font-bold' : ''}>Climbs</span>
                  <span className={activeTab === 'recovery' ? 'text-[#FC5200] font-bold' : ''}>TRIMP</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Simulator Controls & Audio Coach */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Kontrol Simulasi Lari</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Uji coba reaksi engine saat lari berlangsung</p>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${isRunning ? 'bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30' : 'bg-white/10 text-gray-400'}`}>
                  {isRunning ? 'LARI AKTIF' : 'PAUSED'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition ${isRunning ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'gradient-orange text-white shadow-[#FC5200]/30 hover:scale-105'}`}
                >
                  {isRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isRunning ? 'Jeda Simulasi' : 'Mulai Lari (Start Workout)'}</span>
                </button>
                <button
                  onClick={resetWorkout}
                  className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Audio Coach Box */}
              <div className="p-4 rounded-2xl bg-[#0A0C10] border border-[#FC5200]/30 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FC5200] uppercase tracking-wider">
                  <Volume2 className="w-4 h-4" />
                  <span>Audio Voice Coach (AI Audio Cue)</span>
                </div>
                <div className="text-sm text-gray-200 italic font-medium">
                  {audioCue}
                </div>
              </div>

              {/* Live Feature Highlights */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>LocationEngine Actor mengisolasi kalkulasi GPS tanpa lag pada UI.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>Ghost Runner membandingkan jarak Anda dengan delta sub-meter secara live.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>Pacing Coach memberi instruksi vokal saat pace melambat atau terlalu cepat.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
