import React, { useState } from 'react';
import { Search, Filter, CreditCard, Eye, Download } from 'lucide-react';

const mockTransactions = [
  { id: 'TRX-101', student: 'Andi Saputra', course: 'K3 Welding Dasar', amount: '$29.99', date: '08 Jun 2026', status: 'Berhasil', method: 'Virtual Account' },
  { id: 'TRX-102', student: 'Bambang Riyadi', course: 'SMAW 1G-3G', amount: '$49.99', date: '07 Jun 2026', status: 'Berhasil', method: 'Kartu Kredit' },
  { id: 'TRX-103', student: 'Citra Kirana', course: 'Persiapan Bahasa Jepang N5', amount: '$39.99', date: '06 Jun 2026', status: 'Menunggu', method: 'Transfer Bank' },
  { id: 'TRX-104', student: 'Agus Setiawan', course: 'Mastering GTAW', amount: '$89.99', date: '05 Jun 2026', status: 'Dibatalkan', method: 'E-Wallet' },
];

export default function AdminTransactions() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockTransactions.filter(item => 
    item.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-display">Transaksi & Pembayaran</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola riwayat pembelian kelas dan pendaftaran peserta.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm w-fit">
          <Download className="w-4 h-4 mr-2" />
          Export Laporan
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-indigo-500 sm:text-sm font-medium transition-colors"
            placeholder="Cari ID transaksi atau nama peserta..."
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
                  ID Transaksi
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Peserta
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Kelas Pembelian
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Metode
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
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
                    <div className="text-sm font-bold text-gray-900">{item.id}</div>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.student}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 max-w-[200px] truncate">{item.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                      <CreditCard className="w-4 h-4" /> {item.method}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{item.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold 
                      ${item.status === 'Berhasil' ? 'bg-green-50 text-green-700' : 
                      item.status === 'Menunggu' ? 'bg-yellow-50 text-yellow-700' : 
                      'bg-red-50 text-red-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Lihat Detail">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500 font-medium bg-gray-50/50">
                    Tidak ada transaksi ditemukan.
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
