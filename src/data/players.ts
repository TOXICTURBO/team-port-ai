import { Player } from '../types';

export const players: Player[] = [
  {
    id: '1',
    name: 'Alex "Phantom" Chen',
    gamingId: 'RIS_Phantom',
    role: 'Team Captain / Rusher',
    achievements: [
      'MVP Free Fire Regional Cup 2024',
      '20+ Tournament Victories',
      'Highest Kill Record in National Championship'
    ],
    bio: 'Leading RIS Esports since 2022, Phantom is known for aggressive gameplay and strategic leadership.',
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80',
    stats: {
      kills: 15000,
      winRate: 75,
      matches: 2000
    }
  },
  {
    id: '2',
    name: 'Sarah "Viper" Rodriguez',
    gamingId: 'RIS_Viper',
    role: 'Sniper Specialist',
    achievements: [
      'Best Sniper Award 2023',
      'Perfect Accuracy Record',
      '100+ Clutch Victories'
    ],
    bio: 'Viper holds the record for longest-distance elimination in competitive Free Fire.',
    imageUrl: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80',
    stats: {
      kills: 12000,
      winRate: 70,
      matches: 1800
    }
  },
  {
    id: '3',
    name: 'Mike "Ghost" Taylor',
    gamingId: 'RIS_Ghost',
    role: 'Support / Strategist',
    achievements: [
      'Strategy MVP 2024',
      'Most Assists in World Series',
      'Best Support Player 2023'
    ],
    bio: 'Ghost is the tactical genius behind RIS Esports most successful plays.',
    imageUrl: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?auto=format&fit=crop&q=80',
    stats: {
      kills: 8000,
      winRate: 80,
      matches: 1900
    }
  }
];