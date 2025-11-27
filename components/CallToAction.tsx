import React from 'react';
import { Mail, AlertCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 border-y border-gray-200">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border-l-4 border-stt-red p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        
        <div className="flex-shrink-0 bg-red-50 p-4 rounded-full">
            <AlertCircle className="w-8 h-8 text-stt-red" />
        </div>

        <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inscription & Délai</h3>
            <p className="text-gray-600 mb-4">
                Une réponse est attendue de tous les joueurs et joueuses (confirmation ou annulation) au plus tard le :
            </p>
            <div className="inline-block bg-stt-red/10 text-stt-red font-bold px-4 py-1 rounded text-lg mb-4">
                {EVENT_DETAILS.deadline}
            </div>
            <p className="text-xs text-gray-500 italic">
                En cas d'annulation après cette date, la totalité des frais du camp sera facturée.
            </p>
        </div>

        <div className="flex-shrink-0">
             <a 
                href={`mailto:daniel.burren@swisstabletennis.ch?subject=Inscription Camp Filzbach 2026`}
                className="flex items-center gap-2 bg-stt-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-red-500/30"
             >
                <Mail className="w-5 h-5" />
                Répondre par Email
             </a>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;