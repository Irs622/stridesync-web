import React, { useState, useEffect } from 'react';
import { Zap, Github, Download, Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-orange-950/10 py-3.5 border-b border-orange-100 text-gray-900' : 'bg-transparent py-5 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-white p-[3px] shadow-lg shadow-black/10 group-hover:scale-105 transition flex items-center justify-center">
            <div className="w-full h-full bg-[#FF6A00] rounded-[13px] flex items-center justify-center font-black text-white text-xl">
              <Zap className="w-5 h-5 fill-current text-white" />
            </div>
          </div>
          <div>
            <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Stride<span className={scrolled ? 'text-[#FF6A00]' : 'text-white font-black'}>Sync</span>
            </span>
            <span className={`hidden sm:inline-block text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full ml-2 border ${scrolled ? 'bg-orange-50 text-[#FF6A00] border-orange-200' : 'bg-white/20 text-white border-white/30'}`}>
              iOS 18+
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-bold ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <a href="#fitur" className="hover:text-[#FF6A00] transition">Fitur Unggulan</a>
          <a href="#lab" className="hover:text-[#FF6A00] transition">Athletic Lab</a>
          <a href="#kalkulator" className="hover:text-[#FF6A00] transition">Kalkulator VO2 Max</a>
          <a href="#simulator" className="hover:text-[#FF6A00] transition">Live iPhone HUD</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Irs622/stridesync-ios"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition ${
              scrolled
                ? 'border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100'
                : 'border-white/30 bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub iOS</span>
          </a>
          <a
            href="#install"
            className={`text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition flex items-center gap-1.5 ${
              scrolled
                ? 'bg-[#FF6A00] text-white hover:bg-[#E65100] shadow-orange-500/30'
                : 'bg-white text-[#FF6A00] hover:bg-orange-50 shadow-black/15'
            }`}
          >
            <span>Pasang App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-xl ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 border-b border-orange-100 px-6 py-6 space-y-4 shadow-xl">
          <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 hover:text-[#FF6A00]">Fitur Unggulan</a>
          <a href="#lab" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 hover:text-[#FF6A00]">Athletic Lab</a>
          <a href="#kalkulator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 hover:text-[#FF6A00]">Kalkulator VO2 Max</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-gray-800 hover:text-[#FF6A00]">Live iPhone HUD</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a href="https://github.com/Irs622/stridesync-ios" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold text-gray-800">
              <Github className="w-4 h-4" /> GitHub iOS Repo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
