import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer className="mb-16 md:mb-0" />
      <BottomNav />
    </div>
  );
}

