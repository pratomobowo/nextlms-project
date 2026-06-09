export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  price: number;
  rating: number;
  reviewsCount: number;
  thumbnail: string;
  category: string;
  totalHours: number;
  totalLectures: number;
  level: 'Pemula' | 'Menengah' | 'Mahir' | 'Semua Tingkat';
}

export interface EnrolledCourse extends Course {
  progress: number; // 0 to 100
  lastAccessed: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
}
