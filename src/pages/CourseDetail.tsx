import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockCourses } from '../data';
import { Star, Clock, BookOpen, CheckCircle, PlayCircle, Globe, Award } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="py-32 flex flex-col items-center justify-center bg-gray-50 flex-1">
        <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Kelas tidak ditemukan</h2>
        <Link to="/" className="text-indigo-600 font-medium hover:underline">Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col md:flex-row gap-8 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-sm font-medium text-indigo-400 mb-4">
              <Link to="/categories" className="hover:text-indigo-300 transition-colors">Program LKP</Link>
              <span className="text-gray-600">/</span>
              <Link to={`/category/${course.category.toLowerCase()}`} className="hover:text-indigo-300 transition-colors">{course.category}</Link>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-yellow-500">{course.rating.toFixed(1)}</span>
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-indigo-200 underline">({course.reviewsCount.toLocaleString()} ulasan)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Dibuat oleh</span>
                <span className="font-medium text-indigo-300 underline">{course.instructor.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-300 pt-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Bahasa Indonesia
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Sertifikat Kelulusan
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            {/* Empty space for the floating card on desktop */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Main Content */}
          <div className="flex-1 py-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Yang akan anda pelajari</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Menyiapkan peralatan mesin las secara aman sesuai standar K3.',
                  'Membedakan berbagai jenis material las pengelasan yang umum di industri.',
                  'Melakukan pengelasan posisi dasar untuk plat maupun pipa.',
                  'Mencegah risiko kecelakaan dan cacat pengelasan.',
                  'Komunikasi dasar dalam bahasa dan kebudayaan negara tujuan.',
                  'Penyusunan portofolio interview kerja ke luar negeri.'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Konten Pelatihan</h2>
              <div className="flex justify-between items-end mb-4">
                <div className="text-sm text-gray-600">
                  {course.totalLectures} materi • {course.totalHours} jam total
                </div>
                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Perluas semua sesi</button>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {[
                  { title: 'Pengenalan dan Dasar-dasar', count: 5, duration: '45m' },
                  { title: 'Kesiapan Peralatan & K3', count: 12, duration: '2h 15m' },
                  { title: 'Materi Inti / Praktikum', count: 24, duration: '6h 30m' },
                  { title: 'Pencegahan Kesalahan Kerja', count: 18, duration: '5h' },
                  { title: 'Uji Penilaian Akhir', count: 10, duration: '3h' },
                ].map((section, i) => (
                  <div key={i} className={`p-4 bg-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors ${i !== 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">{section.title}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {section.count} materi • {section.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">Instruktur</h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-24 h-24 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
                  <p className="text-gray-500 font-medium mb-4">{course.instructor.title}</p>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    Sebagai tenaga pendidik di LKP yang tersertifikasi di bidang welding, saya siap membantu rekan-rekan meraih kompetensi tertinggi agar mampu bersaing sebagai tenaga kerja andal di skala internasional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Buy Card */}
          <div className="w-full md:w-80 lg:w-96 md:-mt-48 relative z-10 px-4 md:px-0">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-1 md:sticky md:top-24 overflow-hidden flex flex-col">
              <div className="relative aspect-video w-full">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/10 transition-colors cursor-pointer rounded-xl">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold font-display text-gray-900 mb-6">${course.price}</div>
                <Link to="/cart" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-sm mb-3 flex justify-center items-center">
                  Tambah ke keranjang
                </Link>
                <Link to={`/checkout/${course.id}`} className="w-full py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-300 hover:bg-gray-50 transition mb-6 flex justify-center items-center">
                  Beli sekarang
                </Link>
                
                <p className="text-center text-sm text-gray-500 mb-6">Garansi uang kembali 30 hari</p>
                
                <h4 className="font-bold text-gray-900 mb-3">Pelatihan ini termasuk:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <PlayCircle className="w-4 h-4 text-gray-400" /> {course.totalHours} jam video materi
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-gray-400" /> {course.totalLectures} materi pendukung
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-gray-400" /> Sertifikat Kelulusan LKP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
