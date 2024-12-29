import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-black to-black"></div>

        <div className="relative max-w-3xl text-center px-4">
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
            Unleashing the Power of Free Fire
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to RIS Esports!
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Where passion meets precision in the world of Free Fire. Our team is dedicated to dominating the battlegrounds and setting new standards in esports excellence.
          </p>
          <Link
            to="/join"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-transform transform hover:scale-105"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Trophy className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-gray-400">Tournament Victories</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold">1M+</h3>
            <p className="text-gray-400">Global Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-400">Events Participated</p>
          </div>
        </div>
      </div>

      {/* Latest Achievement Section */}
      <div className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Latest Achievement</h2>
            <h3 className="text-xl text-red-600 font-semibold mb-2">Free Fire World Series 2024</h3>
            <p className="text-gray-300 mb-4">
              Secured 1st place in the regional qualifiers, demonstrating exceptional teamwork and strategic gameplay.
            </p>
            <Link
              to="/achievements"
              className="text-red-600 hover:underline font-medium"
            >
              View All Achievements
              <ChevronRight className="inline-block ml-1" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
              alt="Tournament Victory"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-red-600 text-white px-4 py-2 rounded-tl-lg font-bold">
              1st Place
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-black text-center">
        <p className="text-gray-500 text-sm">&copy; 2024 RIS Esports. All rights reserved.</p>
      </footer>
    </div>
  );
}