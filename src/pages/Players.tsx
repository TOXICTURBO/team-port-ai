import React from 'react';
import PlayerCard from '../components/players/PlayerCard';
import { players } from '../data/players';

export default function Players() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Pro Players</h1>
          <p className="text-xl text-gray-400">Meet the champions behind RIS Esports</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}