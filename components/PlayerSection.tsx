import React from 'react';
import { User, Users } from 'lucide-react';
import { MENS_PLAYERS, WOMENS_PLAYERS } from '../constants';
import { Player } from '../types';

interface PlayerListProps {
  title: string;
  players: Player[];
  icon: React.ReactNode;
}

const PlayerList: React.FC<PlayerListProps> = ({ title, players, icon }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
    <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-3">
      <div className="bg-stt-red/10 p-2 rounded-lg text-stt-red">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
        {players.length}
      </span>
    </div>
    <ul className="divide-y divide-gray-50">
      {players.map((player) => (
        <li key={player.id} className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center group">
          <span className="font-medium text-gray-700 group-hover:text-stt-red transition-colors">{player.name}</span>
          <span className="text-sm text-gray-400 font-light">{player.club}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PlayerSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-stt-red" />
            <h2 className="text-2xl font-bold text-gray-900">Athlètes Convoqués</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <PlayerList 
            title="Messieurs & Garçons" 
            players={MENS_PLAYERS} 
            icon={<User className="w-5 h-5" />}
          />
          <PlayerList 
            title="Dames & Filles" 
            players={WOMENS_PLAYERS} 
            icon={<User className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
};

export default PlayerSection;