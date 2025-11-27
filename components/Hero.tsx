import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-stt-red to-red-900 text-white pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider mb-4 border border-white/30">
              CONVOCATION OFFICIELLE
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 leading-tight">
              Camp d'entraînement <br/> E/T4/T3
            </h1>
            <p className="text-red-100 text-lg md:text-xl font-medium">Swiss Table Tennis</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 w-full md:w-auto">
             <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-red-200" />
                <span className="font-semibold">02.01.2026 - 05.01.2026</span>
             </div>
             <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-200" />
                <span className="text-sm text-red-100">Filzbach, Kerenzerberg</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;