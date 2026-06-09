import { Course, EnrolledCourse, Category } from './types';

export const categories: Category[] = [
  { id: '1', title: 'SMAW (Las Listrik)', icon: 'Flame' },
  { id: '2', title: 'GTAW (Argon)', icon: 'Zap' },
  { id: '3', title: 'FCAW & GMAW (MIG/MAG)', icon: 'Settings' },
  { id: '4', title: 'Persiapan Bahasa', icon: 'Languages' },
  { id: '5', title: 'K3 & Keselamatan', icon: 'ShieldAlert' },
  { id: '6', title: 'Budaya Kerja', icon: 'Briefcase' },
];

export const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'Pelatihan Dasar SMAW 1G - 3G (Shielded Metal Arc Welding)',
    description: 'Kuasai teknik pengelasan dasar SMAW posisi 1G hingga 3G. Standar LKP untuk kesiapan uji kompetensi dan kerja.',
    instructor: {
      id: 'i1',
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      title: 'Instruktur Welding Bersertifikat BNSP',
    },
    price: 49.99,
    rating: 4.8,
    reviewsCount: 1250,
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600',
    category: 'SMAW (Las Listrik)',
    totalHours: 40,
    totalLectures: 35,
    level: 'Pemula',
  },
  {
    id: 'c2',
    title: 'Mastering GTAW / Argon untuk Pipa Industri (6G)',
    description: 'Pelatihan intensif GTAW posisi 6G untuk pipa industri, persiapan khusus menuju manufaktur galangan kapal Jepang & Korea.',
    instructor: {
      id: 'i2',
      name: 'Agus Riyanto',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
      title: 'Senior Welder & Instruktur LKP',
    },
    price: 89.99,
    rating: 4.9,
    reviewsCount: 840,
    thumbnail: 'https://images.unsplash.com/photo-1579201533471-1e9d1bf76293?auto=format&fit=crop&q=80&w=600',
    category: 'GTAW (Argon)',
    totalHours: 60,
    totalLectures: 48,
    level: 'Mahir',
  },
  {
    id: 'c3',
    title: 'Bahasa Jepang N5 - Persiapan Magang (Kenshusei)',
    description: 'Materi dasar bahasa jepang N5 untuk mempersiapkan keberangkatan magang (Ginou Jisshusei) bidang pengelasan ke Jepang.',
    instructor: {
      id: 'i3',
      name: 'Kenji Suzuki',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      title: 'Sensei & Pengajar Bahasa',
    },
    price: 39.99,
    rating: 4.7,
    reviewsCount: 2310,
    thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=600',
    category: 'Persiapan Bahasa',
    totalHours: 120,
    totalLectures: 100,
    level: 'Pemula',
  },
  {
    id: 'c4',
    title: 'K3 Welding (Kesehatan & Keselamatan Kerja)',
    description: 'Pelatihan wajib untuk mengenali APD (Alat Pelindung Diri) dan bahaya pengelasan serta penanganan kecelakaan di bengkel kerja.',
    instructor: {
      id: 'i1',
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      title: 'Instruktur Welding Bersertifikat BNSP',
    },
    price: 29.99,
    rating: 4.8,
    reviewsCount: 3105,
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    category: 'K3 & Keselamatan',
    totalHours: 10,
    totalLectures: 15,
    level: 'Semua Tingkat',
  },
  {
    id: 'c5',
    title: 'Pengenalan Budaya Kerja Kaizen & 5S Industri Jepang',
    description: 'Pahami tentang kedisiplinan, aturan, serta tata krama kerja di perusahaan manufaktur dan alat berat luar negeri.',
    instructor: {
      id: 'i4',
      name: 'Siti Rahma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      title: 'Konsultan Karir Luar Negeri',
    },
    price: 25.99,
    rating: 4.6,
    reviewsCount: 1580,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    category: 'Budaya Kerja',
    totalHours: 8,
    totalLectures: 10,
    level: 'Semua Tingkat',
  }
];

export const myLearning: EnrolledCourse[] = [
  {
    ...mockCourses[0],
    progress: 34,
    lastAccessed: '2 jam yang lalu'
  },
  {
    ...mockCourses[3],
    progress: 8,
    lastAccessed: '1 hari yang lalu'
  }
];
