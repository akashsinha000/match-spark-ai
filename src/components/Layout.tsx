import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';

export const Layout = () => {
  const location = useLocation();
  const isOnboarding = location.pathname.includes('/onboarding') || location.pathname === '/';
  
  return (
    <div className="min-h-screen w-full bg-background">
      <main className={`${isOnboarding ? 'pb-0' : 'pb-20'} transition-all duration-300`}>
        <Outlet />
      </main>
      {!isOnboarding && <BottomNavigation />}
    </div>
  );
};