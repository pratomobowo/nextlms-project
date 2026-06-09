import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, CreditCard, Clock, PlayCircle, Download, ExternalLink, Briefcase } from 'lucide-react';
import clsx from 'clsx';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const ongoingCourses = [
    { id: '1', title: 'K3 Welding Dasar', instructor: 'Budi Santoso', progress: 33, lastAccessed: '2 jam lalu' },
    { id: '2', title: 'Persiapan Bahasa Jepang N5', instructor: 'Kenji Suzuki', progress: 15, lastAccessed: '1 hari lalu' }
  ];

  const transactions = [
    { id: 'TRX-101', title: 'K3 Welding Dasar', amount: 'Rp 450.000', date: '08 Jun 2026', status: 'Berhasil' },
    { id: 'TRX-102', title: 'Persiapan Bahasa Jepang N5', amount: 'Rp 600.000', date: '01 Jun 2026', status: 'Berhasil' },
  ];

  const certificates = [
    { id: 'CERT-001', title: 'Dasar Pengelasan SMAW', date: '15 Mei 2026' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header Profile Section */}
      <div className="bg-indigo-900 border-b border-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          <div className="flex flex-col md:flex-row items-center gap-6 text-white">
            <div className="w-24 h-24 rounded-full bg-indigo-500 border-4 border-indigo-300 flex items-center justify-center text-3xl font-bold">
              AS
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold font-display mb-1">Halo, Andi Saputra!</h1>
              <p className="text-indigo-200">Terus tingkatkan keahlianmu untuk karir yang lebih baik.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-t-2xl shadow-sm border-b border-gray-100 flex overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Ringkasan', icon: BookOpen },
            { id: 'courses', label: 'Kelas Saya', icon: PlayCircle },
            { id: 'transactions', label: 'Riwayat Pembelian', icon: CreditCard },
            { id: 'certificates', label: 'Sertifikat', icon: Award },
            { id: 'placement', label: 'Penempatan Kerja', icon: Briefcase },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2",
                activeTab === tab.id
                  ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-2xl shadow-sm min-h-[500px]">
          {activeTab === 'overview' && (
            <div className="p-6 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-1">2</div>
                    <div className="text-sm font-medium text-gray-500">Kelas Aktif</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-1">1</div>
                    <div className="text-sm font-medium text-gray-500">Sertifikat</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-1">75%</div>
                    <div className="text-sm font-medium text-gray-500">Progres Penempatan</div>
                 </div>
              </div>

              {/* Continue Learning */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Lanjutkan Belajar</h3>
                  <button onClick={() => setActiveTab('courses')} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Lihat Semua</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ongoingCourses.map(course => (
                    <div key={course.id} className="relative border border-gray-100 rounded-2xl p-4 flex gap-4 hover:border-indigo-100 transition-colors group">
                       <div className="w-24 h-24 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden relative">
                         <img src={`https://images.unsplash.com/photo-${course.id === '1' ? '1507676184212-d0330a1c6f5e' : '1522202176988-66273c2fd55f'}?auto=format&fit=crop&w=300&q=80`} alt="Thumbnail" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <PlayCircle className="w-8 h-8 text-white" />
                         </div>
                       </div>
                       <div className="flex-1 flex flex-col justify-center">
                         <h4 className="font-bold text-gray-900 mb-1 line-clamp-1">{course.title}</h4>
                         <span className="text-xs text-gray-500 font-medium mb-3">Instruktur: {course.instructor}</span>
                         <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                           <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                         </div>
                         <div className="flex items-center justify-between text-xs text-gray-500">
                           <span className="font-medium text-indigo-600">{course.progress}% Selesai</span>
                           <div className="flex items-center gap-1">
                             <Clock className="w-3 h-3" /> {course.lastAccessed}
                           </div>
                         </div>
                       </div>
                       <Link to={`/learning/${course.id}`} className="absolute inset-0 shrink-0"><span className="sr-only">Go</span></Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'courses' && (
             <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h3 className="text-xl font-bold text-gray-900 mb-6">Kelas Saya</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ongoingCourses.map(course => (
                    <Link to={`/learning/${course.id}`} key={course.id} className="border border-gray-100 rounded-2xl p-4 flex gap-4 hover:border-indigo-100 hover:shadow-md transition-all group">
                       <div className="w-32 h-24 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden relative">
                         <img src={`https://images.unsplash.com/photo-${course.id === '1' ? '1507676184212-d0330a1c6f5e' : '1522202176988-66273c2fd55f'}?auto=format&fit=crop&w=300&q=80`} alt="Thumbnail" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <PlayCircle className="w-10 h-10 text-white" />
                         </div>
                       </div>
                       <div className="flex-1 flex flex-col justify-center">
                         <h4 className="font-bold text-gray-900 mb-1">{course.title}</h4>
                         <span className="text-xs text-gray-500 font-medium mb-3">Instruktur: {course.instructor}</span>
                         <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                           <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                         </div>
                         <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                           <span className="text-indigo-600">{course.progress}% Selesai</span>
                         </div>
                       </div>
                    </Link>
                  ))}
                </div>
             </div>
          )}

          {activeTab === 'transactions' && (
             <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h3 className="text-xl font-bold text-gray-900 mb-6">Riwayat Pembelian</h3>
               <div className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">ID Transaksi</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Kelas</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Tanggal</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Total</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {transactions.map(trx => (
                         <tr key={trx.id} className="hover:bg-gray-50/50">
                           <td className="px-6 py-4 text-sm font-bold text-gray-900">{trx.id}</td>
                           <td className="px-6 py-4 text-sm text-gray-600">{trx.title}</td>
                           <td className="px-6 py-4 text-sm text-gray-500">{trx.date}</td>
                           <td className="px-6 py-4 text-sm font-bold text-gray-900">{trx.amount}</td>
                           <td className="px-6 py-4">
                             <span className="inline-flex px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-md">
                               {trx.status}
                             </span>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
             </div>
          )}

          {activeTab === 'certificates' && (
             <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Sertifikat Saya</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                   {certificates.map(cert => (
                     <div key={cert.id} className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="mx-auto w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                           <Award className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                        <p className="text-xs text-gray-500 mb-4 font-medium block">Diterbitkan: {cert.date}</p>
                        <button className="w-full px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                           <Download className="w-4 h-4" /> Unduh PDF
                        </button>
                     </div>
                   ))}
                </div>
             </div>
          )}

          {activeTab === 'placement' && (
             <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Status Penempatan Kerja</h3>
                <p className="text-gray-500 text-sm mb-8">Pantau proses persiapan Anda menuju karir impian di luar negeri.</p>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                   <div className="flex items-center justify-between mb-4">
                     <div>
                       <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Target Penempatan</div>
                       <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                         Jepang - Komatsu Ltd.
                       </div>
                     </div>
                     <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-sm rounded-lg">Proses Visa</span>
                   </div>
                   
                   <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                     <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                   </div>
                   <div className="text-sm font-bold text-gray-600 text-right">75% Selesai</div>
                </div>

                <div className="relative border-l-2 border-indigo-100 ml-4 pl-8 space-y-8">
                   <div className="relative">
                     <div className="absolute -left-[41px] top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                     </div>
                     <h4 className="font-bold text-gray-900">Seleksi Internal LKP</h4>
                     <p className="text-sm text-gray-500 mt-1">Selesai pada 10 Apr 2026</p>
                   </div>
                   <div className="relative">
                     <div className="absolute -left-[41px] top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                     </div>
                     <h4 className="font-bold text-gray-900">Wawancara User (Komatsu)</h4>
                     <p className="text-sm text-gray-500 mt-1">Selesai pada 25 Apr 2026</p>
                   </div>
                   <div className="relative">
                     <div className="absolute -left-[41px] top-0 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                     </div>
                     <h4 className="font-bold text-indigo-900">Pengurusan Visa & Dokumen</h4>
                     <p className="text-sm text-indigo-600 font-medium mt-1">Sedang diproses oleh LKP dan agensi. Estimasi selesai: Akhir Juni.</p>
                   </div>
                   <div className="relative">
                     <div className="absolute -left-[41px] top-0 w-5 h-5 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center">
                     </div>
                     <h4 className="font-bold text-gray-400">Pemberangkatan</h4>
                     <p className="text-sm text-gray-400 mt-1">Menunggu Visa selesai.</p>
                   </div>
                </div>

             </div>
          )}

        </div>
      </div>
    </div>
  );
}
