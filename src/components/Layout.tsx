import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sword, Trophy, Users, Calendar } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: Sword },
    { to: '/players', label: 'Players', icon: Users },
    { to: '/events', label: 'Events', icon: Calendar },
  ];

  return (
    <nav className="bg-black/95 border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-red-600" />
            <span className="text-white font-bold text-xl">RIS Esports</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {links.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={`${
                    location.pathname === to
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`${
                  location.pathname === to
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-red-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black/95 border-t border-red-600">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">RIS Esports</h3>
          <p className="text-gray-400">Dominating the Free Fire competitive scene.</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media links here */}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} RIS Esports. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMGgxdjFoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMCwgMCwgMC4xKSIvPgo8L3N2Zz4=')] opacity-10 pointer-events-none"></div>
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}