import React, { useState } from 'react';
import { Search, Filter, Star, Eye, Trash2 } from 'lucide-react';

const mockReviews = [
  { id: '1', student: 'Andi Saputra', course: 'SMAW 1G-3G', rating: 5, comment: 'Sangat bermanfaat! Instruktur jelas dan materi mudah dipahami.', date: '08 Jun 2026' },
  { id: '2', student: 'Bambang Riyadi', course: 'GTAW Lanjutan', rating: 4, comment: 'Latihan praktiknya mantap, tapi teori agak terlalu cepat.', date: '07 Jun 2026' },
  { id: '3', student: 'Citra Kirana', course: 'Persiapan Bahasa Jepang N5', rating: 5, comment: 'Sensei nya baik dan sabar banget dalam mengajarkan percakapan dasar.', date: '06 Jun 2026' },
];

export default function AdminReviews() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockReviews.filter(item => 
    item.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-display">Ulasan Peserta</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola dan pantau ulasan dari peserta untuk peningkatan mutu lembaga.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-indigo-500 sm:text-sm font-medium transition-colors"
            placeholder="Cari nama peserta atau kelas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="inline-flex justify-center items-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto shadow-sm transition-all">
          <Filter className="w-4 h-4 mr-2 text-gray-500" />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50/80">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Peserta
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">
                  Ulasan
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Kelas
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{item.student}</div>
                  </td>
                  <td className="px-6 py-4 min-w-[250px]">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className={`w-3.5 h-3.5 ${index < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.comment}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-medium">{item.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                       <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Lihat">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 font-medium bg-gray-50/50">
                    Tidak ada ulasan ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
