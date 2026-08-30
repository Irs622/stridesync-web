import React from 'react';
import { X, Download, Smartphone, Terminal, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#FF6A00', '#FFA133', '#2ECC71', '#FFFFFF']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-orange-100 space-y-6 text-gray-900 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF6A00] to-[#FFA133] p-1 shadow-lg shadow-orange-500/25 shrink-0">
            <img src="/app-icon.png" alt="StrideSync App" className="w-full h-full rounded-[14px] object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-black text-[#FF6A00] uppercase">
              <span>Versi Beta 0.5 (Public Beta)</span>
              <Sparkles className="w-3 h-3" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mt-1">Pasang StrideSync di iPhone</h3>
          </div>
        </div>

        {/* Primary Download Actions */}
        <div className="space-y-3">
          
          {/* OPTION 1: DIRECT .IPA FILE DOWNLOAD */}
          <a
            href="/downloads/StrideSync.ipa"
            download="StrideSync.ipa"
            onClick={triggerCelebration}
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF7E1D] text-white shadow-xl shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <Download className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm font-black flex items-center gap-1.5">
                  <span>Unduh File .IPA Langsung</span>
                  <span className="text-[10px] bg-white text-[#FF6A00] font-black px-1.5 py-0.5 rounded">2.3 MB</span>
                </div>
                <div className="text-xs text-white/80 font-medium">Bisa di-install via AltStore, Sideloadly, TrollStore, Scarlet</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition" />
          </a>

          {/* OPTION 2: ONE-CLICK OTA SAFARI INSTALL */}
          <a
            href="itms-services://?action=download-manifest&url=https://stridesync-web.vercel.app/manifest.plist"
            onClick={triggerCelebration}
            className="flex items-center justify-between p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-gray-900 hover:bg-orange-100/80 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FF6A00] text-white flex items-center justify-center shrink-0 shadow-md">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-gray-900">1-Klik Install via Safari iPhone (OTA)</div>
                <div className="text-xs text-gray-600 font-medium">Otomatis muncul popup Install pada iOS Safari</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#FF6A00] group-hover:translate-x-1 transition" />
          </a>

          {/* OPTION 3: BUILD VIA TERMINAL / XCODE */}
          <a
            href="https://github.com/Irs622/stridesync-ios"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 hover:bg-gray-100 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-gray-900">Source Code & Xcode Project (GitHub)</div>
                <div className="text-xs text-gray-600 font-medium">Buka di Mac & colok iPhone untuk kompilasi gratis</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" />
          </a>

        </div>

        {/* Quick Instructions / Trust Developer Notice */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 text-xs text-gray-700">
          <div className="flex items-center gap-1.5 font-bold text-gray-900">
            <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
            <span>Panduan Setelah Install di iPhone:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 font-medium">
            <li>Buka <b>Pengaturan (Settings)</b> di iPhone.</li>
            <li>Pilih <b>Umum (General)</b> → <b>VPN & Manajemen Perangkat (VPN & Device Management)</b>.</li>
            <li>Pilih profil pengembang dan klik <b>"Percayai" (Trust Developer)</b>.</li>
          </ol>
        </div>

      </div>

    </div>
  );
}
