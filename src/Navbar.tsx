import React from 'react';
import { Sparkles, MessageCircle, Sun, Flame, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  ambientMode: 'warm' | 'intense' | 'soft';
  setAmbientMode: (mode: 'warm' | 'intense' | 'soft') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, ambientMode, setAmbientMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/40 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-stone-950" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight block leading-none">
              Naxçıvan Duz
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
              Təbii Lampalar
            </span>
          </div>
        </a>

        {/* Menyu Keçidləri */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#modeller" className="hover:text-amber-400 transition-colors">Modellər</a>
          <a href="#duzdag-effekti" className="hover:text-amber-400 transition-colors">Duzdağ Effekti</a>
          <a href="#faydalar" className="hover:text-amber-400 transition-colors">Faydalar</a>
          <a href="#qulluq" className="hover:text-amber-400 transition-colors">Qulluq</a>
          <a href="#elaqe" className="hover:text-amber-400 transition-colors">Əlaqə</a>
        </nav>

        {/* Sağ Tərəf: İşıq Rejimi və WhatsApp */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setAmbientMode('soft')}
              title="Sakit Rejim"
              className={`p-2 rounded-lg text-xs transition-colors ${ambientMode === 'soft' ? 'bg-stone-800 text-sky-400' : 'text-stone-400 hover:text-white'}`}
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setAmbientMode('warm')}
              title="İsti Rejim"
              className={`p-2 rounded-lg text-xs transition-colors ${ambientMode === 'warm' ? 'bg-stone-800 text-amber-400' : 'text-stone-400 hover:text-white'}`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setAmbientMode('intense')}
              title="İntensiv Rejim"
              className={`p-2 rounded-lg text-xs transition-colors ${ambientMode === 'intense' ? 'bg-stone-800 text-orange-400' : 'text-stone-400 hover:text-white'}`}
            >
              <Flame className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950 text-amber-500" />
            <span>Sifariş / Sual</span>
          </button>
        </div>

      </div>
    </header>
  );
};
e
