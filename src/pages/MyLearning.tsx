import React from 'react';
import { Link } from 'react-router-dom';
import { myLearning } from '../data';
import { PlayCircle, Award } from 'lucide-react';

export default function MyLearning() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-display tracking-tight mb-2">Kelas Saya</h1>
          <p className="text-gray-400">Lanjutkan aktivitas belajar Anda yang tertunda</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myLearning.map((course) => (
            <Link to={`/learning/${course.id}`} key={course.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer">
              
              {/* Thumbnail */}
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square md:aspect-video lg:aspect-square object-cover rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <PlayCircle className="w-6 h-6 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 py-1">
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{course.instructor.name}</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-900">{course.progress}% Selesai</span>
                    <span className="text-gray-500 text-xs font-normal">Terakhir dipelajari {course.lastAccessed}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Add New Box */}
          <Link to="/category/all" className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center min-h-[200px] hover:bg-gray-100/50 hover:border-indigo-300 transition-all cursor-pointer group block">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-indigo-300" />
            </div>
            <h3 className="font-bold text-gray-900">Temukan Materi Lainnya</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">Jelajahi keterampilan baru dan mulai tingkatkan keahlian Anda hari ini.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
