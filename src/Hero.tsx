import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Mountain } from 'lucide-react';

interface HeroProps {
  onSelectModel: (id: 'stone' | 'wooden_basket') => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectModel, onOpenContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 bg-stone-950 text-stone-100">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-stone-950/60 to-stone-950 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
          <Mountain className="w-4 h-4 text-amber-400" />
          Naxçıvan Duzdağ Qaya Duzu
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-tight mb-6">
          Təbii <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">Naxçıvan Duz Lampaları</span> ilə Evinizə Şəfa Gətirin
        </h1>

        <p className="text-stone-300 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          100% təbii monolit qaya daşı və əl işi taxta səbət modelləri. Ev şəraitində təmiz hava, rahat nəfəs və unikal "Duzdağ effekti" yaradın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#modeller"
            onClick={() => onSelectModel('stone')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
          >
            <span>Modelləri Kəşf Et</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-100 font-bold text-base border border-amber-500/30 transition-all hover:border-amber-500/60"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>WhatsApp ilə Sifariş</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-stone-800/80 text-left">
          <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
            <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
            <div className="font-bold text-white text-sm">100% Təbii</div>
            <div className="text-xs text-stone-400 mt-0.5">Naxçıvan Duzdağ mədənindən</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
            <Mountain className="w-5 h-5 text-sky-400 mb-2" />
            <div className="font-bold text-white text-sm">Duzdağ Effekti</div>
            <div className="text-xs text-stone-400 mt-0.5">Ev şəraitində ionlaşma</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
            <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
            <div className="font-bold text-white text-sm">İki Fərqli Növ</div>
            <div className="text-xs text-stone-400 mt-0.5">Qaya daş və taxta səbət</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="font-bold text-white text-sm">Birbaşa Əlaqə</div>
            <div className="text-xs text-stone-400 mt-0.5">WhatsApp ilə sürətli sifariş</div>
          </div>
        </div>

      </div>
    </section>
  );
};
