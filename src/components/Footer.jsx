import React from 'react';
import { Zap, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 text-center space-y-4">
      <div className="flex items-center justify-center gap-2 text-sm font-bold text-white">
        <Zap className="w-4 h-4 text-[#FC5200] fill-current" />
        <span>Stride<span className="text-[#FC5200]">Sync</span> iOS</span>
      </div>
      <p className="text-xs text-gray-500 max-w-md mx-auto">
        Dibangun dengan Swift 6 dan React untuk komunitas atlet lari dan sepeda di seluruh dunia.
      </p>
      <div className="text-xs text-gray-600 flex items-center justify-center gap-1">
        <span>Created with</span>
        <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
        <span>by Irsal Shydiq • Apple Developer Project</span>
      </div>
    </footer>
  );
}
