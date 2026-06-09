import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Bell, BookOpen, Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center flex-1">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl font-display text-gray-900 tracking-tight">NEXTLMS</span>
            </Link>

            {/* Desktop Center - Search */}
            <div className="hidden md:ml-8 md:flex flex-1 max-w-2xl">
              <div className="w-full relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 sm:text-sm"
                  placeholder="Cari materi pelatihan (contoh: GTAW, Bahasa Jepang)..."
                />
              </div>
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/categories" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive('/categories') ? "text-indigo-600" : "text-gray-600"
              )}
            >
              Kategori
            </Link>
            <Link 
              to="/dashboard" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive('/dashboard') ? "text-indigo-600" : "text-gray-600"
              )}
            >
              Dasbor Siswa
            </Link>
            <Link 
              to="/admin" 
              className={clsx(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive('/admin') ? "text-indigo-600" : "text-gray-600"
              )}
            >
              Admin
            </Link>
            
            <div className="flex items-center space-x-5 border-l border-gray-200 pl-6 lg:pl-8">
              <Link to="/cart" className="text-gray-500 hover:text-indigo-600 transition-colors relative block">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <button className="text-gray-500 hover:text-indigo-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>
              
              <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white ring-2 ring-gray-100 overflow-hidden focus:outline-none focus:ring-indigo-500 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button className="text-gray-500 hover:text-gray-700 p-2">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full rounded-b-2xl">
          <Link
            to="/categories"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kategori
          </Link>
          <Link
            to="/dashboard"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dasbor Siswa
          </Link>
          <Link
            to="/admin"
            className="block px-3 py-3 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dasbor Admin
          </Link>
          <div className="pt-4 pb-2 border-t border-gray-100 mt-2 flex items-center space-x-6 px-3">
            <Link to="/cart" className="text-gray-500 hover:text-indigo-600 relative p-2" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button className="text-gray-500 hover:text-indigo-600 relative p-2">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="flex items-center gap-3 ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                alt="User avatar" 
                className="w-8 h-8 rounded-full border border-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
