import React from 'react';
import { Sparkles, MessageCircle, Mountain, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-900/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo və Haqqında */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/40">
                <Sparkles className="w-5 h-5 text-stone-950" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white tracking-tight block leading-none">
                  Naxçıvan Duz
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                  Təbii Lampalar
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Naxçıvan Duzdağ mədəninin 100% təbii qaya duzundan hazırlanmış lampalar ilə evinizdə sağlam atmosfer yaradın.
            </p>
          </div>

          {/* Sürətli Keçidlər */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 tracking-wide uppercase text-amber-400">
              Sürətli Keçidlər
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#modeller" className="hover:text-amber-300 transition-colors">Lampə Modelləri</a></li>
              <li><a href="#duzdag-effekti" className="hover:text-amber-300 transition-colors">Duzdağ Effekti</a></li>
              <li><a href="#faydalar" className="hover:text-amber-300 transition-colors">Sağlamlıq Faydaları</a></li>
              <li><a href="#qulluq" className="hover:text-amber-300 transition-colors">Qulluq Qaydaları</a></li>
              <li><a href="#elaqe" className="hover:text-amber-300 transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          {/* Məhsul Növləri */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 tracking-wide uppercase text-amber-400">
              Məhsul Növləri
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Mountain className="w-3.5 h-3.5 text-amber-500" />
                <span>1-ci Növ: Təbii Qaya Daş Lampalar</span>
              </li>
              <li className="flex items-center gap-2">
                <Mountain className="w-3.5 h-3.5 text-amber-500" />
                <span>2-ci Növ: Əl İşi Taxta Səbət Duz Lampalar</span>
              </li>
            </ul>
          </div>

          {/* Əlaqə Məlumatı */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 tracking-wide uppercase text-amber-400">
              Əlaqə & Sifariş
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              Sifariş vermək və ya məlumat almaq üçün birbaşa WhatsApp vasitəsilə yaza bilərsiniz.
            </p>
            <a
              href="https://wa.me/994553695184?text=Salam!%20Nax%C3%A7%C4%B1van%20duz%20lampalar%C4%B1%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 055-369-51-84</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Naxçıvan Duz Lampaları. Bütün hüquqlar qorunur.</p>
          <p className="flex items-center gap-1">
            <span>Təbii sağlamlıq üçün sevgi ilə</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
ü
