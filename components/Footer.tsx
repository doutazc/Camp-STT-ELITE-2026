import React from 'react';

const Footer: React.FC = () => {
  return (
    // ICI : J'ai mis 'bg-gray-950' qui est un noir très élégant
    <footer className="bg-gray-950 text-white pt-12 pb-8 border-t border-red-800">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-stt-red">Swiss Table Tennis</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Maison du Sport<br/>
              Talgutzentrum 27<br/>
              CH-3063 Ittigen b. Bern
            </p>
          </div>
          
          <div className="mt-4 text-sm">
             <p className="text-gray-400">Tel: +41 31 359 73 90</p>
             <p className="text-gray-400">Email: info@swisstabletennis.ch</p>
          </div>
        </div>

        <div className="flex flex-col md:items-end justify-center">
            <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Partenaires Officiels</span>
            <div className="flex gap-6 items-center flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulation des logos avec du texte stylisé pour l'instant */}
                <div className="h-8 md:h-10 bg-white/10 rounded px-2 flex items-center justify-center text-xs font-bold w-24">GUBLER</div>
                <div className="h-8 md:h-10 bg-white/10 rounded px-2 flex items-center justify-center text-xs font-bold w-24">DONIC</div>
                <div className="h-8 md:h-10 bg-white/10 rounded px-2 flex items-center justify-center text-xs font-bold w-24">SWISS OLYMPIC</div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-xs text-gray-600">
            © 2026 Swiss Table Tennis. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-600">
            Daniel Burren, Administration Sport d'élite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
