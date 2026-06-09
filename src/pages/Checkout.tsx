import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data';
import { CreditCard, Lock, ChevronRight } from 'lucide-react';

export default function Checkout() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = mockCourses.find(c => c.id === id);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!course) {
    return (
      <div className="py-32 flex flex-col items-center justify-center bg-gray-50 flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Kelas tidak ditemukan</h2>
        <Link to="/" className="text-indigo-600 font-medium hover:underline">Kembali ke beranda</Link>
      </div>
    );
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      navigate('/success');
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to={`/course/${course.id}`} className="hover:text-indigo-600 transition-colors">Detail Pelatihan</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="font-medium text-gray-900">Checkout</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Checkout Form */}
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl font-bold font-display text-gray-900">Pembayaran</h1>

            <form onSubmit={handleCheckout} className="space-y-8">
              {/* Payment Method */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nomor Kartu / Virtual Account</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="text" required placeholder="0000 0000 0000 0000" className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Masa Berlaku</label>
                      <input type="text" required placeholder="MM/YY" className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">CVM / PIN</label>
                      <input type="text" required placeholder="123" className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Pemilik</label>
                    <input type="text" required placeholder="John Doe" className="block w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Secure Checkout Note */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Lock className="w-5 h-5 text-gray-400" />
                <p>Transfer dilindungi enksripsi end-to-end. Kami tidak akan menyimpan informasi penuh perbankan Anda.</p>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? 'Memproses Transaksi...' : `Bayar $${course.price}`}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                <img src={course.thumbnail} alt="" className="w-16 h-12 object-cover rounded-md flex-shrink-0 bg-gray-100" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-1">{course.title}</h3>
                  <p className="text-xs text-gray-500">{course.instructor.name}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Harga Katalog</span>
                  <span className="text-gray-900 font-medium">${course.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Diskon</span>
                  <span className="text-gray-900 font-medium">-$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold font-display text-gray-900">${course.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
