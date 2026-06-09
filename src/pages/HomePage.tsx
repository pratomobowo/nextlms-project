import React from 'react';
import { Link } from 'react-router-dom';
import { mockCourses, categories } from '../data';
import CourseCard from '../components/CourseCard';
import * as Icons from 'lucide-react';
import { ShieldCheck, PlayCircle, Award, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-3xl flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 tracking-tight mb-6">
                Raih Kompetensi Welding & Go Internasional!
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Persiapkan diri anda menjadi Welder Profesional. Dapatkan sertikasi, pelatihan keahlian las (SMAW/GTAW), dan persiapan khusus keberangkatan kerja ke Jepang atau Korea Selatan berasama lembaga terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/category/all" className="inline-flex justify-center items-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                  Telusuri Pelatihan
                </Link>
                <Link to="/my-learning" className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                  Lihat Kelas Saya
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" />
                  <span>Jaminan Penyaluran Kerja</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-500" />
                  <span>5,000+ Lulusan Berhasil</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" alt="Siswa sedang mengelas" className="w-full h-auto object-cover aspect-video lg:aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Instruktur Standar BNSP</p>
                    <p className="text-xl font-bold font-display text-gray-900">10+ Tahun Pangalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Section */}
      <section className="py-10 bg-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-indigo-200 text-sm font-semibold tracking-wider uppercase mb-8">Dipercaya oleh industri dan perusahaan luar negeri</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {/* Mock Company Logos */}
            {['Komatsu', 'Marubeni', 'Yamaha', 'Toyo Eng.', 'Hitachi'].map((brand, i) => (
              <div key={i} className="text-white text-xl font-bold font-display flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-sm opacity-50"></div>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold font-display text-gray-900 tracking-tight mb-2">Program Pelatihan Terbaik</h2>
            <p className="text-gray-500 text-lg">Pilih dari berbagai kelas teori keahlian khusus dan persiapan penempatan kerja.</p>
          </div>
          <Link to="/category/all" className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-gray-200 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
            Lihat Semua Program
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mockCourses.slice(0, 4).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display text-gray-900 tracking-tight mb-4">Mengapa belajar di NEXTLMS?</h2>
            <p className="text-gray-600 text-lg">Kami memadukan ilmu praktik di lapangan dengan kemajuan teknologi LMS untuk menunjang karir Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <PlayCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Materi Video Berkualitas</h3>
              <p className="text-gray-500 leading-relaxed">Nikmati akses teori pengelasan, demo alat berat, hingga tutorial budaya kerja dengan kualitas HD secara on-demand.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sertifikasi & Kredibilitas</h3>
              <p className="text-gray-500 leading-relaxed">Jalur kelulusan yang diakui BNP2TKI dan BNSP. Bekal sertifikasi untuk memperlancar interview di luar negeri.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Icons.Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Akses Fleksibel 24/7</h3>
              <p className="text-gray-500 leading-relaxed">Lanjutkan materi Anda dimana saja dan kapan saja, tersedia di laptop, tablet, hingga smartphone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 tracking-tight mb-4">Kategori Utama</h2>
            <p className="text-gray-500">Pilih dari materi Welding maupun soft skills khusus tenaga kerja asing.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => {
              const Icon = (Icons as any)[cat.icon] || Icons.BookOpen;
              return (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.id}`}
                  className="flex flex-col items-center p-6 bg-white rounded-2xl hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-indigo-100 group shadow-sm"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-900 text-center text-sm">{cat.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section / About Us teaser */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden relative">
            {/* Background Details */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
              <Icons.Gem className="w-96 h-96" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">Bergabung Bersama Kami</h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                NEXTLMS berdedikasi melatih calon pekerja yang siap diterjunkan langsung di pabrik dan industri global. Persiapkan keterampilan teknis dan bahasa Anda sekarang.
              </p>
              <Link to="/categories" className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-indigo-900 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg">
                Mulai Perjalanan Anda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
