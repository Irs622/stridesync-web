import React, { useState, useRef, useEffect } from 'react';
import { Mountain, MapPin, Gauge, Heart, Navigation, Eye } from 'lucide-react';

export default function GPXRouteElevationCanvas() {
  const canvasRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(12);

  // Simulated 25 realistic telemetry points of a 5K workout
  const points = [
    { dist: 0.0, elev: 15, pace: "5'10\"", grade: 0.2, hr: 142 },
    { dist: 0.2, elev: 16, pace: "5'05\"", grade: 0.5, hr: 146 },
    { dist: 0.4, elev: 17, pace: "4'58\"", grade: 0.5, hr: 150 },
    { dist: 0.6, elev: 19, pace: "4'52\"", grade: 1.0, hr: 153 },
    { dist: 0.8, elev: 22, pace: "4'48\"", grade: 1.5, hr: 156 },
    { dist: 1.0, elev: 25, pace: "4'45\"", grade: 1.5, hr: 158 },
    { dist: 1.2, elev: 29, pace: "4'42\"", grade: 2.0, hr: 160 },
    { dist: 1.4, elev: 34, pace: "4'40\"", grade: 2.5, hr: 162 },
    { dist: 1.6, elev: 40, pace: "4'45\"", grade: 3.0, hr: 165 }, // Peak of climb
    { dist: 1.8, elev: 48, pace: "4'55\"", grade: 4.0, hr: 169 }, // Cat 4
    { dist: 2.0, elev: 52, pace: "5'02\"", grade: 2.0, hr: 172 },
    { dist: 2.2, elev: 50, pace: "4'38\"", grade: -1.0, hr: 170 }, // Downhill acceleration
    { dist: 2.4, elev: 45, pace: "4'25\"", grade: -2.5, hr: 166 },
    { dist: 2.6, elev: 38, pace: "4'20\"", grade: -3.5, hr: 164 },
    { dist: 2.8, elev: 32, pace: "4'24\"", grade: -3.0, hr: 163 },
    { dist: 3.0, elev: 28, pace: "4'30\"", grade: -2.0, hr: 162 },
    { dist: 3.2, elev: 25, pace: "4'35\"", grade: -1.5, hr: 162 },
    { dist: 3.4, elev: 22, pace: "4'38\"", grade: -1.5, hr: 163 },
    { dist: 3.6, elev: 20, pace: "4'35\"", grade: -1.0, hr: 164 },
    { dist: 3.8, elev: 19, pace: "4'30\"", grade: -0.5, hr: 165 },
    { dist: 4.0, elev: 18, pace: "4'28\"", grade: -0.5, hr: 167 },
    { dist: 4.2, elev: 17, pace: "4'20\"", grade: -0.5, hr: 170 },
    { dist: 4.4, elev: 16, pace: "4'12\"", grade: -0.5, hr: 174 },
    { dist: 4.7, elev: 15, pace: "3'58\"", grade: -0.3, hr: 178 }, // Final sprint kick
    { dist: 5.0, elev: 15, pace: "3'45\"", grade: 0.0, hr: 182 }
  ];

  const currentPoint = points[hoverIndex] || points[12];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Padding
    const padX = 20;
    const padY = 20;
    const plotW = width - padX * 2;
    const plotH = height - padY * 2;

    const minElev = 10;
    const maxElev = 60;

    // Draw Gradient Area Under Elevation
    const grad = ctx.createLinearGradient(0, padY, 0, height - padY);
    grad.addColorStop(0, 'rgba(252, 82, 0, 0.4)');
    grad.addColorStop(0.5, 'rgba(255, 110, 39, 0.15)');
    grad.addColorStop(1, 'rgba(10, 12, 16, 0.0)');

    ctx.beginPath();
    ctx.moveTo(padX, height - padY);

    points.forEach((p, i) => {
      const x = padX + (i / (points.length - 1)) * plotW;
      const y = height - padY - ((p.elev - minElev) / (maxElev - minElev)) * plotH;
      ctx.lineTo(x, y);
    });

    ctx.lineTo(padX + plotW, height - padY);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw Profile Stroke Line
    ctx.beginPath();
    points.forEach((p, i) => {
      const x = padX + (i / (points.length - 1)) * plotW;
      const y = height - padY - ((p.elev - minElev) / (maxElev - minElev)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#FC5200';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Highlight Category 4 Climb Segment
    const climbStartX = padX + (7 / (points.length - 1)) * plotW;
    const climbEndX = padX + (11 / (points.length - 1)) * plotW;
    ctx.fillStyle = 'rgba(46, 204, 113, 0.12)';
    ctx.fillRect(climbStartX, padY, climbEndX - climbStartX, plotH);

    // Draw Scrubber Indicator
    const scrubX = padX + (hoverIndex / (points.length - 1)) * plotW;
    const scrubY = height - padY - ((currentPoint.elev - minElev) / (maxElev - minElev)) * plotH;

    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(scrubX, padY);
    ctx.lineTo(scrubX, height - padY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // Glowing Dot
    ctx.beginPath();
    ctx.arc(scrubX, scrubY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#FC5200';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

  }, [hoverIndex, currentPoint]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const padX = 20;
    const plotW = canvas.width - padX * 2;
    const relativeX = Math.max(0, Math.min(plotW, (x / rect.width) * canvas.width - padX));
    const idx = Math.round((relativeX / plotW) * (points.length - 1));
    setHoverIndex(idx);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/30 flex items-center justify-center text-[#2ECC71]">
            <Mountain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Profil Elevasi & Analisis Tanjakan GPX</h3>
            <p className="text-xs text-gray-400">Geser kursor di atas grafik untuk membedah titik telemetri rute</p>
          </div>
        </div>
        
        <span className="text-[10px] font-bold font-mono text-[#2ECC71] bg-[#2ECC71]/10 px-3 py-1 rounded-full border border-[#2ECC71]/30">
          UCI Grade Cat 4 Detected
        </span>
      </div>

      {/* Scrubber Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5">
          <div className="text-[10px] text-gray-400 font-semibold">Jarak Tempuh</div>
          <div className="text-xl font-black font-mono text-white mt-0.5">{currentPoint.dist.toFixed(2)} <span className="text-xs text-[#FC5200]">km</span></div>
        </div>
        <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5">
          <div className="text-[10px] text-gray-400 font-semibold">Ketinggian (Altitude)</div>
          <div className="text-xl font-black font-mono text-[#2ECC71] mt-0.5">{currentPoint.elev} <span className="text-xs text-gray-400">m</span></div>
        </div>
        <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5">
          <div className="text-[10px] text-gray-400 font-semibold">Grade Tanjakan</div>
          <div className="text-xl font-black font-mono text-[#FFA033] mt-0.5">{currentPoint.grade > 0 ? `+${currentPoint.grade}%` : `${currentPoint.grade}%`}</div>
        </div>
        <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5">
          <div className="text-[10px] text-gray-400 font-semibold">Pace Sesaat</div>
          <div className="text-xl font-black font-mono text-white mt-0.5">{currentPoint.pace}</div>
        </div>
        <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
          <div className="text-[10px] text-gray-400 font-semibold">Detak Jantung</div>
          <div className="text-xl font-black font-mono text-[#FC5200] mt-0.5 flex items-center gap-1">
            <Heart className="w-4 h-4 fill-current" />
            <span>{currentPoint.hr} bpm</span>
          </div>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div className="relative bg-[#0A0C10] rounded-2xl p-3 border border-white/5">
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          onMouseMove={handleMouseMove}
          className="w-full h-44 cursor-crosshair block"
        />
        <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono pt-2 px-2">
          <span>0.0 km (Start Monas)</span>
          <span className="text-[#2ECC71] font-bold">Cat 4 Sprint (+37m)</span>
          <span>5.0 km (Finish)</span>
        </div>
      </div>

    </div>
  );
}
