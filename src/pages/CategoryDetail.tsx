import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, mockCourses } from '../data';
import CourseCard from '../components/CourseCard';
import * as Icons from 'lucide-react';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id) || { title: 'Semua Pelatihan', icon: 'BookOpen' };
  
  const categoryCourses = category.title === 'Semua Pelatihan' 
    ? mockCourses 
    : mockCourses.filter(c => c.category === category.title);

  const Icon = (Icons as any)[category.icon] || Icons.BookOpen;

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold font-display tracking-tight mb-2">Kategori {category.title}</h1>
            <p className="text-gray-400">Jajaki koleksi pelatihan {category.title.toLowerCase()} unggulan kami.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {categoryCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categoryCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icons.Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada kelas</h3>
            <p className="text-gray-500 mb-6">Kami sedang mempersiapkan kurikulum khusus untuk kategori ini.</p>
            <Link to="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-sm">
              Jelajahi kelas lainnya
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
