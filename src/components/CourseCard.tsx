import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, BookOpen, User } from 'lucide-react';
import { Course } from '../types';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link to={`/course/${course.id}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full block">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {course.rating >= 4.7 && (
            <span className="px-2.5 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-md shadow-sm">
              Terlaris
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 mb-2">
          <span>{course.category}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-gray-500">{course.level}</span>
        </div>
        
        <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3 mt-auto">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="w-6 h-6 rounded-full object-cover bg-gray-100" />
          <span className="text-sm text-gray-600 truncate">{course.instructor.name}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-4 flex-wrap">
          <span className="font-bold text-sm text-gray-900">{course.rating.toFixed(1)}</span>
          <div className="flex gap-0.5 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({course.reviewsCount.toLocaleString()})
          </span>
        </div>
        
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div className="font-bold text-lg text-gray-900">
            ${course.price}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium whitespace-nowrap">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{course.totalHours} jam</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{course.totalLectures} mtr.</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
