import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">
        <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">Pembayaran Berhasil!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Terima kasih atas semangat belajar Anda. Status pelatihan kini Aktif dan dapat langsung diakses. Tanda terima pembayaran dilampirkan via E-Mail.
        </p>

        <div className="space-y-3">
          <Link 
            to="/my-learning" 
            className="w-full inline-flex justify-center items-center px-4 py-3.5 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Buka Kelas Saya
          </Link>
          <Link 
            to="/category/all" 
            className="w-full inline-flex justify-center items-center px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            Telusuri Pelatihan Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
}
