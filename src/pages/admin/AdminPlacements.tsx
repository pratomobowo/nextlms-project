import React, { useState } from 'react';
import { Search, Filter, Plus, Briefcase, ExternalLink } from 'lucide-react';

const mockPlacements = [
  { id: '1', student: 'Andi Saputra', destination: 'Jepang', targetCompany: 'Komatsu', status: 'Proses Visa', progress: 75 },
  { id: '2', student: 'Bambang Riyadi', destination: 'Jepang', targetCompany: 'Hitachi Zosen', status: 'Lulus Seleksi', progress: 60 },
  { id: '3', student: 'Citra Kirana', destination: 'Korea Selatan', targetCompany: 'Hyundai Heavy Industries', status: 'Pelatihan Bahasa', progress: 30 },
  { id: '4', student: 'Dedi Kurniawan', destination: 'Oman', targetCompany: 'Petrofac', status: 'Bekerja', progress: 100 },
];

export default function AdminPlacements() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockPlacements.filter(item => 
    item.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.targetCompany.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-display">Penempatan Kerja Luar Negeri</h1>
          <p className="text-sm text-gray-500 mt-1">Lacak progres persiapan kandidat pekerja teknis ke luar negeri.</p>
        </div>
        <button className="inline-flex items-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm w-fit">
          <Plus className="w-4 h-4 mr-2" />
          Kandidat Baru
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
            placeholder="Cari kandidat atau perusahaan..."
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
                  Kandidat (Peserta LKP)
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Negara Tujuan
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Perusahaan Mitra
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Progres Persiapan
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-500">{item.destination}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium flex items-center gap-2">
                       <Briefcase className="w-4 h-4 text-gray-400" />
                       {item.targetCompany}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${item.status === 'Bekerja' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[120px]">
                      <div className={`h-2.5 rounded-full ${item.progress === 100 ? 'bg-green-500' : 'bg-indigo-600'}`} style={{ width: `${item.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium mt-1 inline-block">{item.progress}% Selesai</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Lihat Detail Profil & Dokumen">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500 font-medium bg-gray-50/50">
                    Tidak ada data penempatan ditemukan.
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
