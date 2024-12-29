import React from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import type { Event } from '../../types';

const STATUS_STYLES = {
  upcoming: 'bg-blue-600/20 text-blue-400',
  ongoing: 'bg-green-600/20 text-green-400',
  completed: 'bg-red-600/20 text-red-400'
};

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-black/50 rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm ${STATUS_STYLES[event.status]}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          <span className="text-sm text-gray-400">{event.type}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
        </div>
        <p className="text-gray-400 mb-4">{event.description}</p>
        {event.prizePool && (
          <div className="text-red-400 font-semibold mb-2">
            Prize Pool: {event.prizePool}
          </div>
        )}
        {event.result && (
          <div className="flex items-center text-green-400">
            <Trophy className="h-4 w-4 mr-2" />
            {`${event.result.placement}${getOrdinalSuffix(event.result.placement)} Place`}
            {event.result.prize && ` • ${event.result.prize}`}
          </div>
        )}
      </div>
    </div>
  );
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}