import React from 'react';
import { Zap, Github, Heart, Globe, Mail, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-tr from-[#FF6A00] to-[#FF8A00] text-white text-center space-y-6">
      
      {/* Brand */}
      <div className="flex items-center justify-center gap-2 text-base font-black">
        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-md">
          <Zap className="w-4 h-4 text-[#FF6A00] fill-current" />
        </div>
        <span className="text-xl font-extrabold tracking-tight">StrideSync iOS</span>
      </div>

      <p className="text-xs text-white/80 max-w-md mx-auto font-medium">
        Dibangun dengan Swift 6 dan React untuk komunitas atlet lari dan sepeda di seluruh dunia.
      </p>

      {/* Circular Social Buttons (Matching User Template Style) */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <a href="https://github.com/Irs622/stridesync-ios" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white text-[#FF6A00] flex items-center justify-center shadow-md hover:scale-110 transition">
          <Github className="w-4 h-4" />
        </a>
        <a href="mailto:ichalprov@gmail.com" className="w-9 h-9 rounded-full bg-white text-[#FF6A00] flex items-center justify-center shadow-md hover:scale-110 transition">
          <Mail className="w-4 h-4" />
        </a>
        <a href="https://github.com/Irs622" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white text-[#FF6A00] flex items-center justify-center shadow-md hover:scale-110 transition">
          <Globe className="w-4 h-4" />
        </a>
      </div>

      <div className="text-xs text-white/70 flex items-center justify-center gap-1 font-medium pt-2 border-t border-white/20 max-w-md mx-auto">
        <span>Created with</span>
        <Heart className="w-3.5 h-3.5 text-white fill-current" />
        <span>by Irsal Shydiq • Apple Developer Project</span>
      </div>
    </footer>
  );
}
