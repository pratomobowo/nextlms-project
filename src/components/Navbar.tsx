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
            <div className="hidden md:flex md:ml-6 flex-1 max-w-[200px] lg:max-w-xs xl:max-w-md">
              <div className="w-full relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
                  placeholder="Cari materi pelatihan..."
                />
              </div>
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              to="/categories" 
              className={clsx(
                "text-sm font-medium transition-all px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50",
                isActive('/categories') && "text-indigo-600 bg-indigo-50"
              )}
            >
              Kategori
            </Link>
            <Link 
              to="/dashboard" 
              className={clsx(
                "text-sm font-medium transition-all px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50",
                isActive('/dashboard') && "text-indigo-600 bg-indigo-50"
              )}
            >
              Dasbor Siswa
            </Link>
            <Link 
              to="/admin" 
              className={clsx(
                "text-sm font-medium transition-all px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50",
                isActive('/admin') && "text-indigo-600 bg-indigo-50"
              )}
            >
              Admin
            </Link>
            
            <div className="flex items-center space-x-5 border-l border-gray-200 pl-4 lg:pl-6">
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

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Drawer */}
      <div className={clsx(
        "fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
           <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
               <BookOpen className="w-5 h-5 text-white" />
             </div>
             <span className="font-bold text-xl font-display text-gray-900 tracking-tight">NEXTLMS</span>
           </Link>
           <button
             onClick={() => setMobileMenuOpen(false)}
             className="text-gray-500 hover:text-gray-900 p-2 rounded-lg bg-gray-50"
           >
             <X className="h-5 w-5" />
           </button>
        </div>

        <div className="px-4 py-4 border-b border-gray-100 bg-gray-50/50">
           {/* Mobile Profile Summary */}
           <div className="flex items-center gap-3">
             <img 
               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
               alt="User avatar" 
               className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
             />
             <div>
               <div className="font-bold text-gray-900">Andi Saputra</div>
               <div className="text-xs text-gray-500 font-medium">Siswa Aktif</div>
             </div>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          <Link
            to="/categories"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kategori Program
          </Link>
          <Link
            to="/dashboard"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dasbor Siswa
          </Link>
          <Link
            to="/admin"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dasbor Admin
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Keranjang Belanja
          </Link>
        </div>

        <div className="p-4 border-t border-gray-100">
           <button className="w-full py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-sm">
             Keluar
           </button>
        </div>
      </div>
    </nav>
  );
}
