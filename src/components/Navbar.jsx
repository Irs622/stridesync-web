import React, { useState, useEffect } from 'react';
import { Zap, Github, Download, Menu, X, Smartphone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card border-b border-white/10 shadow-2xl py-3.5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FC5200] to-[#FFA033] p-[2px] shadow-lg shadow-[#FC5200]/25 group-hover:scale-105 transition">
            <div className="w-full h-full bg-[#0E1014] rounded-[14px] flex items-center justify-center font-black text-[#FC5200] text-xl">
              <Zap className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">Stride<span className="text-[#FC5200]">Sync</span></span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-[#FC5200]/10 text-[#FC5200] px-2 py-0.5 rounded-full ml-2 border border-[#FC5200]/20">iOS 18+</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <a href="#fitur" className="hover:text-[#FC5200] transition">Fitur Unggulan</a>
          <a href="#simulator" className="hover:text-[#FC5200] transition">Live iPhone HUD</a>
          <a href="#kalkulator" className="hover:text-[#FC5200] transition">Kalkulator VO2 Max</a>
          <a href="#teknologi" className="hover:text-[#FC5200] transition">Arsitektur Swift 6</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Irs622/stridesync-ios"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white transition"
          >
            <Github className="w-4 h-4" />
            <span>Repo iOS</span>
          </a>
          <a
            href="#install"
            className="gradient-orange text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-[#FC5200]/30 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Pasang App</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-white/10 px-6 py-6 space-y-4">
          <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-gray-200 hover:text-[#FC5200]">Fitur Unggulan</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-gray-200 hover:text-[#FC5200]">Live iPhone HUD</a>
          <a href="#kalkulator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-gray-200 hover:text-[#FC5200]">Kalkulator VO2 Max</a>
          <a href="#teknologi" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-gray-200 hover:text-[#FC5200]">Arsitektur Swift 6</a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a href="https://github.com/Irs622/stridesync-ios" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 bg-white/5 text-xs font-bold uppercase tracking-wider">
              <Github className="w-4 h-4" /> GitHub iOS Repo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
