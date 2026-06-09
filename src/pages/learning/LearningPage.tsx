import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  PlayCircle, 
  CheckCircle, 
  FileText, 
  MessageCircle, 
  Download, 
  MoreVertical,
  Star,
  ChevronDown,
  ChevronUp,
  Award,
  Menu,
  X
} from 'lucide-react';
import clsx from 'clsx';
import BottomNav from '../../components/BottomNav';

const mockCurriculum = [
  {
    id: 'm1',
    title: 'Modul 1: Pengenalan K3 Welding',
    duration: '45 menit',
    lessons: [
      { id: 'l1', title: 'Pentingnya K3 dalam Pengelasan', duration: '15:20', type: 'video', completed: true, content: 'Dalam pelajaran ini, kita membahas mengapa K3 sangat krusial dalam dunia pengelasan, meninjau statistik kecelakaan kerja, dan memahami tanggung jawab dasar seorang welder terhadap keselamatan.' },
      { id: 'l2', title: 'Alat Pelindung Diri (APD) Standar', duration: '20:10', type: 'video', completed: true, content: 'Mengenal berbagai macam Alat Pelindung Diri (APD) mulai dari helm las, sarung tangan khusus, apron kulit, hingga sepatu safety yang wajib digunakan sebelum memulai pengelasan.' },
      { id: 'l3', title: 'Kuis Modul 1', duration: '10 Pertanyaan', type: 'quiz', completed: true, content: 'Kuis pilihan ganda yang menguji pemahaman Anda mengenai dasar K3 dan APD standar.' },
    ]
  },
  {
    id: 'm2',
    title: 'Modul 2: Bahaya dan Risiko Pengelasan',
    duration: '1 jam 10 menit',
    lessons: [
      { id: 'l4', title: 'Bahaya Asap dan Gas Beracun', duration: '25:00', type: 'video', completed: false, content: 'Dalam modul ini, kita akan membahas bahaya spesifik dari asap dan gas beracun yang dihasilkan selama proses pengelasan. Berbagai jenis elektroda dan base metal menghasilkan karakteristik asap yang berbeda, beberapa di antaranya mengandung logam berat berbahaya seperti Chromium Hexavalent (Cr(VI)), Mangan, dan Zinc.' },
      { id: 'l5', title: 'Risiko Radiasi Sinar Las', duration: '18:45', type: 'video', completed: false, content: 'Radiasi sinar las (UV, inframerah, dan cahaya tampak) dapat menyebabkan cedera serius pada mata dan kulit jika tidak dilindungi dengan benar. Pelajari cara mengamankan diri dari arc eye.' },
      { id: 'l6', title: 'Bahaya Sengatan Listrik', duration: '22:15', type: 'video', completed: false, content: 'Sengatan listrik adalah salah satu risiko terbesar dalam pengelasan arc. Pelajari cara memeriksa mesin las, kabel, dan grounding sebelum bekerja.' },
      { id: 'l7', title: 'Kuis Modul 2', duration: '10 Pertanyaan', type: 'quiz', completed: false, content: 'Kuis tentang bahaya keselamatan lanjut seperti gas beracun dan tegangan listrik.' },
    ]
  },
  {
    id: 'm3',
    title: 'Modul 3: Prosedur Darurat & Pertolongan Pertama',
    duration: '55 menit',
    lessons: [
      { id: 'l8', title: 'Penanganan Luka Bakar', duration: '20:30', type: 'video', completed: false, content: 'Langkah demi langkah pertolongan pertama pada luka bakar akibat percikan api atau terpegang material panas.' },
      { id: 'l9', title: 'Penanganan Cedera Mata', duration: '15:00', type: 'video', completed: false, content: 'Prosedur pembilasan mata jika terkena partikel asing atau cedera radiasi UV (arc eye).' },
      { id: 'l10', title: 'Prosedur Evakuasi Kebakaran', duration: '19:30', type: 'video', completed: false, content: 'Panduan tata cara evakuasi menggunakan APAR dan evakuasi diri dari area workshop jika terjadi kebakaran.' },
      { id: 'l11', title: 'Modul Panduan Lengkap (PDF)', duration: '5 MB', type: 'document', completed: false, content: 'Dokumen lengkap SOP Keselamatan dan Kesehatan Kerja khusus untuk lingkungan pengelasan.' },
    ]
  }
];

const mockQuizQuestions = [
  {
    id: 'q1',
    text: 'Jenis penyaringan respirator apa yang disarankan untuk asap las?',
    options: ['Masker kain 2 lapis', 'Masker medis biasa', 'Respirator khusus partikulat logam', 'Masker kain standar'],
    correct: 2
  },
  {
    id: 'q2',
    text: 'Salah satu kandungan berbahaya dari pengelasan baja tahan karat (stainless steel) adalah:',
    options: ['Oksigen cair', 'Chromium Hexavalent (Cr(VI))', 'Garam dapur', 'Kalsium Karbonat'],
    correct: 1
  },
  {
    id: 'q3',
    text: 'Tindakan pertama yang dilakukan jika terkena percikan api ringan adalah:',
    options: ['Berlari', 'Padamkan dengan APAR / Kain Basah', 'Ditiup', 'Tidak ada yang benar'],
    correct: 1
  }
];

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<string[]>(['m1', 'm2']);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeLessonId, setActiveLessonId] = useState('l4');

  const [quizState, setQuizState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    setQuizState('intro');
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
  }, [activeLessonId]);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Find the currently active lesson
  let activeLesson = null;
  for (const module of mockCurriculum) {
    for (const lesson of module.lessons) {
      if (lesson.id === activeLessonId) {
        activeLesson = lesson;
        break;
      }
    }
  }

  // Fallback if not found
  if (!activeLesson) {
    activeLesson = mockCurriculum[0].lessons[0];
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-16 bg-gray-900 text-white flex items-center px-4 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          <Link to="/dashboard" className="p-2 hover:bg-gray-800 rounded-lg transition-colors group">
            <ChevronLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </Link>
          <div className="hidden sm:block border-l border-gray-700 h-6 mx-1"></div>
          <h1 className="font-bold text-sm sm:text-base line-clamp-1">K3 Welding Dasar</h1>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-gray-300">Progress: 33%</span>
            </div>
          </div>
          <div className="hidden sm:flex h-8 w-8 rounded-full bg-indigo-600 items-center justify-center font-bold text-sm">
            AS
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
             <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Course Content / Video Player */}
        <div className={clsx(
          "flex-1 flex flex-col bg-white overflow-y-auto transition-all duration-300",
          sidebarOpen ? "lg:mr-[380px]" : ""
        )}>
          {/* Main Display Area */}
          {activeLesson.type === 'video' && (
            <div className="relative w-full bg-black aspect-video flex-shrink-0 flex items-center justify-center group">
              {/* Simulasi Video Player */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
                <div className="w-full bg-white/30 h-1.5 rounded-full mb-4 cursor-pointer">
                  <div className="w-1/4 h-full bg-indigo-500 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <PlayCircle className="w-6 h-6 cursor-pointer hover:text-indigo-400 transition-colors" />
                    <span className="text-xs font-medium text-gray-200">05:20 / {activeLesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="text-xs font-medium px-2 py-1 bg-black/50 rounded cursor-pointer">1.0x</div>
                     <MoreVertical className="w-5 h-5 cursor-pointer" />
                  </div>
                </div>
              </div>
              
              <PlayCircle className="w-16 h-16 text-white/50 cursor-pointer hover:text-white hover:scale-110 transition-all z-0" />
              <img src="https://images.unsplash.com/photo-1516012727144-88403d9b546d?auto=format&fit=crop&w=1200&q=80" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
            </div>
          )}

          {activeLesson.type === 'quiz' && (
            <div className="relative w-full bg-indigo-50 flex-shrink-0 flex flex-col p-8 border-b border-gray-200 min-h-[400px]">
              {quizState === 'intro' && (
                <div className="flex flex-col items-center justify-center flex-1 h-full text-center">
                  <FileText className="w-16 h-16 text-indigo-300 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeLesson.title}</h3>
                  <p className="text-gray-600 mb-6 text-center max-w-md">{activeLesson.content}</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">3 Pertanyaan</div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">Waktu: 15 Menit</div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">KKM: 80%</div>
                  </div>
                  <button 
                    onClick={() => setQuizState('playing')}
                    className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-sm hover:bg-indigo-700 transition"
                  >
                    Mulai Kuis Sekarang
                  </button>
                </div>
              )}

              {quizState === 'playing' && (
                <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Pertanyaan {currentQuestionIdx + 1} dari {mockQuizQuestions.length}</span>
                     <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">Sisa Waktu: 14:59</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all" style={{ width: `${((currentQuestionIdx) / mockQuizQuestions.length) * 100}%` }}></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6">{mockQuizQuestions[currentQuestionIdx].text}</h3>
                  
                  <div className="space-y-3">
                    {mockQuizQuestions[currentQuestionIdx].options.map((opt, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedOption === idx ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white hover:border-indigo-300'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOption === idx ? 'border-indigo-600' : 'border-gray-300'}`}>
                            {selectedOption === idx && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>}
                          </div>
                          <span className={selectedOption === idx ? 'font-bold text-indigo-900' : 'font-medium text-gray-700'}>{opt}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      disabled={selectedOption === null}
                      onClick={() => {
                        if (currentQuestionIdx < mockQuizQuestions.length - 1) {
                          setCurrentQuestionIdx(prev => prev + 1);
                          setSelectedOption(null);
                        } else {
                          setQuizState('result');
                        }
                      }}
                      className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedOption !== null ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      {currentQuestionIdx < mockQuizQuestions.length - 1 ? 'Selanjutnya' : 'Selesai & Kumpulkan'}
                    </button>
                  </div>
                </div>
              )}

              {quizState === 'result' && (
                <div className="flex flex-col items-center justify-center flex-1 h-full text-center max-w-md mx-auto py-8">
                   <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle className="w-12 h-12 text-green-600" />
                   </div>
                   <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">Lulus Kuis!</h3>
                   <p className="text-gray-600 mb-8">Selamat! Anda telah menyelesaikan kuis ini dengan baik.</p>
                   
                   <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                     <div className="text-5xl font-black text-indigo-600 mb-2">100</div>
                     <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Skor Akhir</div>
                     <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
                       <span className="text-gray-500">Kriteria Kelulusan</span>
                       <span className="font-bold text-gray-900">80</span>
                     </div>
                   </div>

                   <button 
                     onClick={() => {
                       setQuizState('intro');
                       setCurrentQuestionIdx(0);
                       setSelectedOption(null);
                     }}
                     className="w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-sm hover:bg-indigo-700 transition"
                   >
                     Ulangi Kuis
                   </button>
                </div>
              )}
            </div>
          )}

          {activeLesson.type === 'document' && (
            <div className="relative w-full bg-gray-100 aspect-video flex-shrink-0 flex flex-col items-center justify-center p-8 border-b border-gray-200">
               <Download className="w-16 h-16 text-gray-400 mb-4" />
               <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeLesson.title}</h3>
               <p className="text-gray-600 mb-6 text-center max-w-md">{activeLesson.content}</p>
               <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2 transition">
                 <Download className="w-5 h-5" />
                 Unduh Dokumen (PDF)
               </button>
            </div>
          )}

          {/* Desktop Sidebar Toggle Button */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:flex absolute top-4 right-4 z-20 bg-gray-900/80 text-white p-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
             Menu Kelas
          </button>

          {/* Content Details */}
          <div className="p-4 sm:p-8 max-w-4xl w-full mx-auto mb-16 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">{activeLesson.title}</h2>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar mb-6">
              {[
                { id: 'overview', label: 'Ringkasan' },
                { id: 'qna', label: 'Tanya Jawab' },
                { id: 'notes', label: 'Catatan' },
                { id: 'resources', label: 'Materi Unduhan' },
                { id: 'reviews', label: 'Ulasan' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "px-4 md:px-6 py-3 border-b-2 text-sm font-semibold whitespace-nowrap transition-colors",
                    activeTab === tab.id 
                      ? "border-indigo-600 text-indigo-600" 
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="prose prose-indigo max-w-none text-gray-600">
                    <p className="text-sm leading-relaxed">
                      {activeLesson.content}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Apa yang akan Anda pelajari:</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Mengidentifikasi komposisi asap las berdasarkan material.</li>
                      <li>Memahami dampak kesehatan jangka pendek dan panjang dari paparan asap las.</li>
                      <li>Standard sistem ventilasi (Local Exhaust Ventilation) yang diwajibkan.</li>
                      <li>Pemilihan respirator yang tepat sesuai dengan konsentrasi gas.</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                     <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img src="https://ui-avatars.com/api/?name=Budi+Santoso&background=4f46e5&color=fff" alt="Instruktur" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-gray-900">Budi Santoso, S.T., M.T.</div>
                       <div className="text-xs text-gray-500">Master Welding Instructor & Assessor</div>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'qna' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold text-sm">AS</div>
                     <div className="flex-1">
                       <textarea 
                         rows={2} 
                         className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                         placeholder="Tanyakan sesuatu tentang pelajaran ini..."
                       ></textarea>
                       <div className="mt-2 flex justify-end">
                         <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">Kirim Pertanyaan</button>
                       </div>
                     </div>
                  </div>
                  
                  <div className="space-y-4 pt-6">
                    <div className="border border-gray-100 rounded-xl p-4">
                       <div className="flex justify-between items-start mb-2">
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">DR</div>
                           <div>
                             <div className="text-sm font-bold text-gray-900">Dimas Ramadhan</div>
                             <div className="text-xs text-gray-500">2 hari yang lalu</div>
                           </div>
                         </div>
                       </div>
                       <p className="text-sm text-gray-600 mt-2">Apakah masker N95 biasa cukup untuk melindungi dari asap las SMAW ringan di ruang terbuka?</p>
                       <div className="mt-4 pl-4 border-l-2 border-indigo-100">
                         <div className="flex items-center gap-2 mb-2">
                           <div className="text-xs font-bold text-indigo-600">Budi Santoso (Instruktur)</div>
                           <div className="text-xs text-gray-400">1 hari yang lalu</div>
                         </div>
                         <p className="text-sm text-gray-600">Halo Dimas. Untuk SMAW, meskipun di ruang terbuka, N95 biasa tidak direkomendasikan karena asap las mengandung partikulat logam dan gas ozon. Minimal gunakan respirator N99 atau P100 (half-face) dengan filter khusus welding. Keselamatan paru-paru adalah prioritas utama.</p>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Tabel Material Asap Las (PDF)</div>
                        <div className="text-xs text-gray-500">2.4 MB</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Standar Respirator OSHA 2026 (PDF)</div>
                        <div className="text-xs text-gray-500">5.1 MB</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Drawer Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar Curriculum */}
        <div className={clsx(
          "fixed inset-y-0 right-0 w-[85%] sm:w-[380px] bg-white shadow-2xl z-50 lg:static lg:w-[380px] lg:border-l lg:border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:shadow-none",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
            <h3 className="font-bold text-sm text-gray-900">Kurikulum Kelas</h3>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors">
               <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pb-safe">
            {mockCurriculum.map((module) => (
              <div key={module.id} className="border-b border-gray-100 last:border-0">
                {/* Module Header */}
                <button 
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{module.title}</h4>
                    <span className="text-xs text-gray-500 mt-1 block">{module.completedLessons || 0}/{module.lessons.length} Selesai • {module.duration}</span>
                  </div>
                  {expandedModules.includes(module.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {/* Lessons */}
                {expandedModules.includes(module.id) && (
                  <div className="bg-white">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id}
                        onClick={() => setActiveLessonId(lesson.id)}
                        className={clsx(
                          "group flex items-start gap-3 p-4 pl-6 cursor-pointer border-l-2 hover:bg-gray-50 transition-colors",
                          lesson.id === activeLessonId ? "border-indigo-600 bg-indigo-50/30" : "border-transparent"
                        )}
                      >
                        <div className="mt-0.5">
                           {lesson.completed ? (
                             <CheckCircle className="w-4 h-4 text-green-500" />
                           ) : (
                             <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                           )}
                        </div>
                        <div className="flex-1">
                          <div className={clsx(
                            "text-sm",
                            lesson.id === activeLessonId ? "font-bold text-indigo-700" : "font-medium text-gray-700 group-hover:text-gray-900"
                          )}>
                            {lesson.title}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                            {lesson.type === 'video' && <PlayCircle className="w-3.5 h-3.5" />}
                            {lesson.type === 'quiz' && <FileText className="w-3.5 h-3.5" />}
                            {lesson.type === 'document' && <Download className="w-3.5 h-3.5" />}
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
