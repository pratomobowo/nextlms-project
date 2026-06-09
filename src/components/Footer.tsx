import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl font-display text-white tracking-tight">NEXTLMS</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Kami menyediakan pengalaman belajar menyeluruh untuk keahlian Welding dan persiapan bahasa. Siapkan diri anda untuk bersaing di pabrik manufaktur luar negeri.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Group 1 */}
          <div>
            <h3 className="font-bold text-white mb-6">NEXTLMS Bisnis</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Mengajar di NEXTLMS</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Dapatkan Aplikasi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Links Group 2 */}
          <div>
            <h3 className="font-bold text-white mb-6">Karir</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Bantuan dan Dukungan</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Afiliasi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Investor</Link></li>
            </ul>
          </div>

          {/* Links Group 3 */}
          <div>
            <h3 className="font-bold text-white mb-6">Ketentuan</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Pengaturan Cookie</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Peta Situs</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Pernyataan Aksesibilitas</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} NEXTLMS, Inc. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-gray-500 font-medium">LKP Welding Preparation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
