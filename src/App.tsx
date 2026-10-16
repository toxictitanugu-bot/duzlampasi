import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LampShowcase } from './components/LampShowcase';
import { DuzdaghEffect } from './components/DuzdaghEffect';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedModelId, setSelectedModelId] = useState<'stone' | 'wooden_basket'>('stone');
  const [ambientMode, setAmbientMode] = useState<'warm' | 'intense' | 'soft'>('warm');

  const whatsappUrl = 'https://wa.me/994553695184?text=Salam!%20Nax%C3%A7%C4%B1van%20duz%20lampalar%C4%B1%20haqq%C3%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m.';

  const handleOpenContact = () => {
    window.location.href = whatsappUrl;
  };

  const handleSelectModel = (id: 'stone' | 'wooden_basket') => {
    setSelectedModelId(id);
  };

  const ambientBackgroundClass = {
    soft: 'bg-stone-950 text-stone-200',
    warm: 'bg-stone-950 text-stone-100',
    intense: 'bg-[#120a05] text-stone-100'
  }[ambientMode];

  return (
    <div className={`min-h-screen ${ambientBackgroundClass} selection:bg-amber-500 selection:text-stone-950 transition-colors duration-700 font-sans`}>
      <Navbar
        onOpenContact={handleOpenContact}
        ambientMode={ambientMode}
        setAmbientMode={setAmbientMode}
      />

      <main>
        <Hero
          onSelectModel={handleSelectModel}
          onOpenContact={handleOpenContact}
        />

        <LampShowcase
          selectedModelId={selectedModelId}
          onSelectModel={handleSelectModel}
          onOpenContact={handleOpenContact}
        />

        <DuzdaghEffect />

        <ContactSection />
      </main>

      <Footer />

      {/* WhatsApp Keçidi */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95"
          title="WhatsApp (055-369-51-84) ilə əlaqə"
        >
          <MessageCircle className="w-5 h-5 fill-stone-950 text-emerald-500 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">WhatsApp (055-369-51-84)</span>
        </a>
      </div>
    </div>
  );
}
ü
