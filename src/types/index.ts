export interface Player {
  id: string;
  name: string;
  gamingId: string;
  role: string;
  achievements: string[];
  bio: string;
  imageUrl: string;
  stats: {
    kills: number;
    winRate: number;
    matches: number;
  };
}

export interface Event {
  id: string;
  title: string;
  type: 'tournament' | 'bootcamp' | 'community';
  status: 'upcoming' | 'ongoing' | 'completed';
  date: string;
  location: string;
  description: string;
  prizePool?: string;
  result?: {
    placement: number;
    prize?: string;
  };
  imageUrl: string;
}