import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, User, PlayCircle } from 'lucide-react';
import clsx from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || (path === '/categories' && location.pathname.startsWith('/category'));

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        <Link 
          to="/" 
          className={clsx(
            "flex flex-col items-center justify-center w-full h-full space-y-1",
            isActive('/') ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <Home className={clsx("w-6 h-6", isActive('/') && "fill-indigo-100")} />
          <span className="text-[10px] font-medium leading-none">Beranda</span>
        </Link>
        <Link 
          to="/categories" 
          className={clsx(
            "flex flex-col items-center justify-center w-full h-full space-y-1",
            isActive('/categories') ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <Compass className={clsx("w-6 h-6", isActive('/categories') && "fill-indigo-100")} />
          <span className="text-[10px] font-medium leading-none">Eksplor</span>
        </Link>
        <Link 
          to="/dashboard" 
          className={clsx(
            "flex flex-col items-center justify-center w-full h-full space-y-1",
            isActive('/dashboard') ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <PlayCircle className={clsx("w-6 h-6", isActive('/dashboard') && "fill-indigo-100")} />
          <span className="text-[10px] font-medium leading-none">Dasbor</span>
        </Link>
        <Link 
          to="/admin" 
          className={clsx(
            "flex flex-col items-center justify-center w-full h-full space-y-1",
            isActive('/admin') ? "text-indigo-600" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <User className={clsx("w-6 h-6", isActive('/admin') && "fill-indigo-100")} />
          <span className="text-[10px] font-medium leading-none">Admin</span>
        </Link>
      </div>
    </div>
  );
}
