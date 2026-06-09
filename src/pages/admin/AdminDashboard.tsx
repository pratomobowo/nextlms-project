import React from 'react';
import { Users, BookOpen, Briefcase, FileBadge, TrendingUp, MoreVertical } from 'lucide-react';

const stats = [
  { name: 'Kandidat Penempatan', value: '142', change: '+20.1%', icon: Briefcase },
  { name: 'Peserta Aktif LKP', value: '2,305', change: '+15.2%', icon: Users },
  { name: 'Total Pelatihan', value: '142', change: '+4.3%', icon: BookOpen },
  { name: 'Sertifikat Diterbitkan', value: '1,840', change: '+12.5%', icon: FileBadge },
];

const recentActivity = [
  { id: 1, user: 'Andi Saputra', action: 'mendaftar di kelas', target: 'GTAW (Argon) Lanjutan', time: '2 jam lalu' },
  { id: 2, user: 'Bambang Riyadi', action: 'mendapatkan status', target: 'Lulus Seleksi Jepang', time: '5 jam lalu' },
  { id: 3, user: 'Citra Kirana', action: 'menyelesaikan pelatihan', target: 'K3 Welding Dasar', time: '1 hari lalu' },
  { id: 4, user: 'Dedi Kurniawan', action: 'menerima', target: 'Sertifikat Kompetensi BLK', time: '1 hari lalu' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 font-display">Ringkasan Dasbor</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
          Unduh Laporan LKP
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="relative bg-white pt-5 px-4 pb-10 sm:pt-6 sm:px-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <dt>
                <div className="absolute bg-indigo-50 rounded-lg p-3">
                  <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-semibold text-gray-500 truncate">{item.name}</p>
              </dt>
              <dd className="ml-16 pb-2 flex items-baseline sm:pb-3">
                <p className="text-2xl font-bold text-gray-900 font-display">{item.value}</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {item.change}
                </p>
              </dd>
            </div>
          )
        })}
      </div>

      {/* Recent Activity & Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-gray-900">Aktivitas Terbaru Pendaftar</h3>
            <button className="text-gray-400 hover:text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <ul className="divide-y divide-gray-100">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="px-6 py-5 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-10 w-10 border border-gray-200 rounded-full overflow-hidden bg-gray-50">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 truncate leading-relaxed">
                      <span className="font-bold text-gray-900">{activity.user}</span> {activity.action}{' '}
                      <span className="font-medium text-indigo-600">{activity.target}</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {activity.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-lg leading-6 font-bold text-gray-900">Status Platform</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">Uptime Server</span>
                  <span className="text-sm font-bold text-green-600">99.9%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">Kapasitas Penyimpanan</span>
                  <span className="text-sm font-bold text-gray-900">450GB / 1TB</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Pintasan Tindakan</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">Buat Kelas</button>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">Cetak Sertifikat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
