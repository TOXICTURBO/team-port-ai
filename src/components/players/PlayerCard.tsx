import React from 'react';
import { Trophy } from 'lucide-react';
import type { Player } from '../../types';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="bg-black/50 rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={player.imageUrl}
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{player.name}</h3>
          <span className="text-red-600 font-semibold">{player.gamingId}</span>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
            {player.role}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{player.bio}</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{player.stats.kills}</div>
            <div className="text-xs text-gray-400">Kills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{player.stats.winRate}%</div>
            <div className="text-xs text-gray-400">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{player.stats.matches}</div>
            <div className="text-xs text-gray-400">Matches</div>
          </div>
        </div>
        <div className="space-y-2">
          {player.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <Trophy className="h-4 w-4 text-red-600 mr-2" />
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}