import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, BookOpen, Shield, Award, Calendar, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminUserProfile() {
  // Simulasi data user
  const user = {
    name: 'Andi Saputra',
    email: 'andi@example.com',
    phone: '+62 812-3456-7890',
    location: 'Surabaya, Jawa Timur',
    role: 'Siswa',
    status: 'Aktif',
    joinedDate: '12 Mei 2026',
    bio: 'Saya memiliki minat besar dalam teknik pengelasan dan bercita-cita bekerja di industri manufaktur Jepang.',
    skills: ['Welding', 'SMAW', 'Bahasa Jepang N5'],
    courses: [
      { name: 'K3 Welding Dasar', progress: 100, status: 'Selesai' },
      { name: 'SMAW 1G-3G', progress: 75, status: 'Berlangsung' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/users" className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 font-display">Profil Peserta</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri: Info Profil */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-3xl mb-4">
                {user.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700 mb-4">
                {user.status}
              </span>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600">{user.email}</div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600">{user.phone}</div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600">{user.location}</div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600">Bergabung: {user.joinedDate}</div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <div className="text-sm text-gray-600">Peran: <span className="font-semibold text-gray-900">{user.role}</span></div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Keahlian / Tag</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Detail Aktifitas */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tentang Peserta</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {user.bio}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Kelas yang Diikuti</h3>
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Lihat Semua</button>
            </div>
            
            <div className="space-y-4">
              {user.courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-indigo-100 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900">{course.name}</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex-1 max-w-[200px]">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-indigo-600'}`} style={{ width: `${course.progress}%` }}></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{course.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${course.progress === 100 ? 'bg-green-50 text-green-700' : 'bg-indigo-50 text-indigo-700'}`}>
                      {course.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
             <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Sertifikat Kelulusan</h3>
            </div>
             <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900">K3 Welding Dasar - Sertifikat Kompetensi</h4>
                    <p className="text-xs text-gray-500 mt-1">Diterbitkan pada: 08 Jun 2026</p>
                  </div>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    Lihat Sertifikat
                  </button>
                </div>
          </div>

        </div>
      </div>
    </div>
  );
}
