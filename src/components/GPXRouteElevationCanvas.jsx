import React, { useState, useRef, useEffect } from 'react';
import { Mountain, Heart } from 'lucide-react';

export default function GPXRouteElevationCanvas() {
  const canvasRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(12);

  const points = [
    { dist: 0.0, elev: 15, pace: "5:10 /km", grade: 0.2, hr: 142 },
    { dist: 0.2, elev: 16, pace: "5:05 /km", grade: 0.5, hr: 146 },
    { dist: 0.4, elev: 17, pace: "4:58 /km", grade: 0.5, hr: 150 },
    { dist: 0.6, elev: 19, pace: "4:52 /km", grade: 1.0, hr: 153 },
    { dist: 0.8, elev: 22, pace: "4:48 /km", grade: 1.5, hr: 156 },
    { dist: 1.0, elev: 25, pace: "4:45 /km", grade: 1.5, hr: 158 },
    { dist: 1.2, elev: 29, pace: "4:42 /km", grade: 2.0, hr: 160 },
    { dist: 1.4, elev: 34, pace: "4:40 /km", grade: 2.5, hr: 162 },
    { dist: 1.6, elev: 40, pace: "4:45 /km", grade: 3.0, hr: 165 },
    { dist: 1.8, elev: 48, pace: "4:55 /km", grade: 4.0, hr: 169 },
    { dist: 2.0, elev: 52, pace: "5:02 /km", grade: 2.0, hr: 172 },
    { dist: 2.2, elev: 50, pace: "4:38 /km", grade: -1.0, hr: 170 },
    { dist: 2.4, elev: 45, pace: "4:25 /km", grade: -2.5, hr: 166 },
    { dist: 2.6, elev: 38, pace: "4:20 /km", grade: -3.5, hr: 164 },
    { dist: 2.8, elev: 32, pace: "4:24 /km", grade: -3.0, hr: 163 },
    { dist: 3.0, elev: 28, pace: "4:30 /km", grade: -2.0, hr: 162 },
    { dist: 3.2, elev: 25, pace: "4:35 /km", grade: -1.5, hr: 162 },
    { dist: 3.4, elev: 22, pace: "4:38 /km", grade: -1.5, hr: 163 },
    { dist: 3.6, elev: 20, pace: "4:35 /km", grade: -1.0, hr: 164 },
    { dist: 3.8, elev: 19, pace: "4:30 /km", grade: -0.5, hr: 165 },
    { dist: 4.0, elev: 18, pace: "4:28 /km", grade: -0.5, hr: 167 },
    { dist: 4.2, elev: 17, pace: "4:20 /km", grade: -0.5, hr: 170 },
    { dist: 4.4, elev: 16, pace: "4:12 /km", grade: -0.5, hr: 174 },
    { dist: 4.7, elev: 15, pace: "3:58 /km", grade: -0.3, hr: 178 },
    { dist: 5.0, elev: 15, pace: "3:45 /km", grade: 0.0, hr: 182 }
  ];

  const currentPoint = points[hoverIndex] || points[12];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padX = 20;
    const padY = 20;
    const plotW = width - padX * 2;
    const plotH = height - padY * 2;

    const minElev = 10;
    const maxElev = 60;

    // Draw Gradient Area Under Elevation
    const grad = ctx.createLinearGradient(0, padY, 0, height - padY);
    grad.addColorStop(0, 'rgba(255, 106, 0, 0.45)');
    grad.addColorStop(0.6, 'rgba(255, 161, 51, 0.15)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

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

    // Profile Stroke Line
    ctx.beginPath();
    points.forEach((p, i) => {
      const x = padX + (i / (points.length - 1)) * plotW;
      const y = height - padY - ((p.elev - minElev) / (maxElev - minElev)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#FF6A00';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Scrubber Line
    const scrubX = padX + (hoverIndex / (points.length - 1)) * plotW;
    const scrubY = height - padY - ((currentPoint.elev - minElev) / (maxElev - minElev)) * plotH;

    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(scrubX, padY);
    ctx.lineTo(scrubX, height - padY);
    ctx.strokeStyle = 'rgba(255, 106, 0, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // Glowing Dot
    ctx.beginPath();
    ctx.arc(scrubX, scrubY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#FF6A00';
    ctx.fill();
    ctx.lineWidth = 3;
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
    <div className="clean-white-card p-6 sm:p-8 border border-orange-100 space-y-6 text-gray-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6A00]">
            <Mountain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900">Profil Elevasi & Analisis Tanjakan GPX</h3>
            <p className="text-xs text-gray-500 font-semibold">Geser kursor di atas grafik untuk membedah titik telemetri rute</p>
          </div>
        </div>
        
        <span className="text-[10px] font-black font-mono text-[#2ECC71] bg-green-100 px-3 py-1 rounded-full border border-green-200">
          UCI Grade Cat 4 Detected
        </span>
      </div>

      {/* Scrubber Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100 text-center">
          <div className="text-[10px] text-gray-500 font-bold uppercase">Jarak Tempuh</div>
          <div className="text-xl font-black font-mono text-gray-900 mt-0.5">{currentPoint.dist.toFixed(2)} <span className="text-xs text-[#FF6A00]">km</span></div>
        </div>
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100 text-center">
          <div className="text-[10px] text-gray-500 font-bold uppercase">Altitude</div>
          <div className="text-xl font-black font-mono text-[#2ECC71] mt-0.5">{currentPoint.elev} <span className="text-xs text-gray-500">m</span></div>
        </div>
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100 text-center">
          <div className="text-[10px] text-gray-500 font-bold uppercase">Grade Kemiringan</div>
          <div className="text-xl font-black font-mono text-[#FF6A00] mt-0.5">{currentPoint.grade > 0 ? `+${currentPoint.grade}%` : `${currentPoint.grade}%`}</div>
        </div>
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100 text-center">
          <div className="text-[10px] text-gray-500 font-bold uppercase">Pace Sesaat</div>
          <div className="text-xl font-black font-mono text-gray-900 mt-0.5">{currentPoint.pace}</div>
        </div>
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-100 text-center col-span-2 sm:col-span-1">
          <div className="text-[10px] text-gray-500 font-bold uppercase">Detak Jantung</div>
          <div className="text-xl font-black font-mono text-[#FF6A00] mt-0.5 flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 fill-current" />
            <span>{currentPoint.hr} bpm</span>
          </div>
        </div>
      </div>

      {/* Interactive Canvas Container */}
      <div className="relative bg-orange-50/40 rounded-2xl p-3 border border-orange-100">
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          onMouseMove={handleMouseMove}
          className="w-full h-44 cursor-crosshair block"
        />
        <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono font-bold pt-2 px-2">
          <span>0.0 km (Start Monas)</span>
          <span className="text-[#2ECC71]">Cat 4 Sprint (+37m)</span>
          <span>5.0 km (Finish)</span>
        </div>
      </div>

    </div>
  );
}
