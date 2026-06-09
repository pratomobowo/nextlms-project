import React from 'react';
import { Link } from 'react-router-dom';
import { mockCourses } from '../data';
import { Trash2, ShoppingCart } from 'lucide-react';

export default function Cart() {
  // Use mock data for cart items
  const cartItems = [mockCourses[0], mockCourses[1]];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 min-h-[80vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-8">Keranjang Belanja</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Cart Items List */}
            <div className="flex-1">
              <p className="text-gray-600 font-medium mb-4">{cartItems.length} Kelas di Keranjang</p>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center relative group">
                    <img src={item.thumbnail} alt={item.title} className="w-full sm:w-32 h-24 object-cover rounded-lg flex-shrink-0 bg-gray-100" />
                    
                    <div className="flex-1">
                      <Link to={`/course/${item.id}`} className="font-bold text-gray-900 leading-tight mb-1 hover:text-indigo-600 transition-colors line-clamp-2">
                        {item.title}
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">Oleh {item.instructor.name}</p>
                      
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <span className="text-yellow-500 flex items-center gap-1">
                           <span className="font-bold">{item.rating.toFixed(1)}</span> rating
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{item.totalHours} jam total</span>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-4">
                      <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-gray-500 font-medium mb-2">Total:</h2>
                <div className="text-4xl font-bold font-display text-gray-900 mb-6">
                  ${total.toFixed(2)}
                </div>
                
                <Link 
                  to={`/checkout/${cartItems[0].id}`} 
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-sm flex items-center justify-center mb-4"
                >
                  Checkout
                </Link>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Checkout aman dilindungi layanan kami</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto mt-12">
            <div className="mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Keranjang anda masih kosong</h3>
            <p className="text-gray-500 mb-8">Lanjutkan pencarian kelas impian Anda!</p>
            <Link to="/category/all" className="inline-block px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-sm">
              Cari Pelatihan
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
