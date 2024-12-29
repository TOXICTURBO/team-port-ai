import React from 'react';
import EventCard from '../components/events/EventCard';
import { events } from '../data/events';

export default function Events() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-gray-400">Our tournaments, bootcamps, and community events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}