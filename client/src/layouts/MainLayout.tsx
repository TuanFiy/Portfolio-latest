import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
