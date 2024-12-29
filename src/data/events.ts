import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Free Fire World Series 2024',
    type: 'tournament',
    status: 'upcoming',
    date: '2024-08-15',
    location: 'Singapore',
    description: 'The most prestigious Free Fire tournament of the year, featuring top teams from around the world.',
    prizePool: '$1,000,000',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Regional Championship 2024',
    type: 'tournament',
    status: 'completed',
    date: '2024-03-20',
    location: 'Bangkok',
    description: 'Southeast Asian regional championship qualifier for the World Series.',
    prizePool: '$100,000',
    result: {
      placement: 1,
      prize: '$50,000'
    },
    imageUrl: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'RIS Pro Bootcamp',
    type: 'bootcamp',
    status: 'ongoing',
    date: '2024-04-01',
    location: 'Training Facility',
    description: 'Intensive training camp to prepare for upcoming tournaments.',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80'
  }
];