import React from 'react';
import { Clock, MapPin, Shirt, CreditCard, AlertTriangle, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS, COACHES } from '../constants';

const InfoCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
  highlight?: boolean;
}> = ({ icon, title, children, highlight = false }) => (
  <div className={`p-6 rounded-2xl border ${highlight ? 'bg-red-50 border-red-100' : 'bg-white border-gray-100'} shadow-sm flex flex-col h-full transition-transform hover:scale-[1.01] duration-300`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg ${highlight ? 'bg-red-100 text-stt-red' : 'bg-gray-100 text-gray-600'}`}>
        {icon}
      </div>
      <h3 className={`font-bold text-lg ${highlight ? 'text-stt-red' : 'text-gray-800'}`}>{title}</h3>
    </div>
    <div className="text-gray-600 text-sm leading-relaxed flex-grow">
      {children}
    </div>
  </div>
);

const InfoGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 relative z-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Logistics */}
        <InfoCard icon={<Clock className="w-5 h-5" />} title="Horaires">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Début (Rendez-vous)</p>
              <p className="text-gray-500">Vendredi, 2 Janvier 2026</p>
              <p className="text-stt-red font-bold">15h00 (Réception)</p>
            </div>
            <hr className="border-gray-100"/>
            <div>
              <p className="font-semibold text-gray-900">Fin (Retour)</p>
              <p className="text-gray-500">Lundi, 5 Janvier 2026</p>
              <p className="text-stt-red font-bold">16h00</p>
            </div>
          </div>
        </InfoCard>

        {/* Location */}
        <InfoCard icon={<MapPin className="w-5 h-5" />} title="Lieu">
          <p className="font-medium text-gray-800 mb-2">{EVENT_DETAILS.location}</p>
          <p className="text-gray-500 mb-4">Panoramastrasse 8, 8757 Filzbach</p>
          <a 
            href={EVENT_DETAILS.locationUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-stt-red hover:text-red-700 font-medium text-sm transition-colors"
          >
            Voir le centre sportif <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </InfoCard>

        {/* Coaches */}
        <InfoCard icon={<UsersIcon className="w-5 h-5" />} title="Encadrement">
          <ul className="space-y-3">
            {COACHES.map((coach, idx) => (
              <li key={idx} className="flex justify-between items-start">
                <span className="font-medium text-gray-800">{coach.name}</span>
                {coach.phone && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-mono">
                    {coach.phone}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Equipment */}
        <InfoCard icon={<Shirt className="w-5 h-5" />} title="Équipement">
           <ul className="list-disc list-inside space-y-2">
             <li><span className="font-bold text-stt-red">Équipement Donic STT</span> obligatoire.</li>
             <li>Équipement d'entraînement individuel.</li>
             <li>Chaussures intérieures.</li>
             <li><span className="font-semibold">Chaussures extérieures</span> (pour activités outdoor).</li>
           </ul>
        </InfoCard>

        {/* Costs */}
        <InfoCard icon={<CreditCard className="w-5 h-5" />} title="Frais & Facturation">
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-900">CHF 110.00</span> / nuit<br/>
              <span className="text-xs text-gray-500">Total 3 nuits: CHF 330.00</span>
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-xs text-yellow-800">
               Les joueurs du cadre T4 de la relève avec un contrat individuel paient 50% du coût.
            </div>
            <p className="text-xs text-gray-400 italic mt-2">
              Facturé par Swiss Table Tennis après l'événement.
            </p>
          </div>
        </InfoCard>

         {/* Important */}
         <InfoCard icon={<AlertTriangle className="w-5 h-5" />} title="Assurances & Conditions" highlight={true}>
          <ul className="text-xs space-y-3 text-gray-700">
            <li>La participation se fait à vos propres risques. Les athlètes ne sont pas assurés par STT.</li>
            <li>L'assurance (accidents, maladie, vol, RC) est à la charge de chaque participant.</li>
            <li>
              <span className="font-bold text-red-700">Annulation :</span> Les frais sont dus en cas de non-participation (même maladie/blessure). Assurance annulation recommandée.
            </li>
          </ul>
        </InfoCard>

      </div>
    </section>
  );
};

// Helper icon component
const UsersIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default InfoGrid;