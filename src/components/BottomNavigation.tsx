import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, User, Briefcase, Zap } from 'lucide-react';

const navItems = [
  { to: '/discover', icon: Heart, label: 'Discover', gradient: 'gradient-success' },
  { to: '/matches', icon: Zap, label: 'Matches', gradient: 'gradient-primary' },
  { to: '/chat', icon: MessageCircle, label: 'Chat', gradient: 'gradient-secondary' },
  { to: '/jobs', icon: Briefcase, label: 'Jobs', gradient: 'gradient-primary' },
  { to: '/profile', icon: User, label: 'Profile', gradient: 'gradient-neural' },
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 neural-card mx-4 mb-4 rounded-full bg-card/95 backdrop-blur-lg">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map(({ to, icon: Icon, label, gradient }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isActive ? `${gradient} text-white shadow-lg scale-110` : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon size={20} className={`${isActive ? 'mb-1' : ''}`} />
              {isActive && (
                <span className="text-xs font-medium">{label}</span>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};