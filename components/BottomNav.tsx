import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Newspaper, 
  GraduationCap, 
  Contact, 
  Menu, 
  X, 
  BookOpen, 
  Image, 
  Link2, 
  FileText, 
  Phone, 
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const primaryTabs = [
    { name: 'Beranda', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Warta', path: '/warta', icon: <Newspaper className="w-5 h-5" /> },
    { name: 'Siswa', path: '/siswa', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Guru', path: '/guru', icon: <Contact className="w-5 h-5" /> },
  ];

  const secondaryMenu = [
    { name: 'Kurikulum', path: '/kurikulum', icon: <BookOpen className="w-5 h-5 text-blue-500" />, desc: 'Struktur KBM & Jam Pelajaran' },
    { name: 'Galeri Kegiatan', path: '/galeri', icon: <Image className="w-5 h-5 text-indigo-500" />, desc: 'Dokumentasi & Portofolio Siswa' },
    { name: 'Tautan Pintar', path: '/tautan', icon: <Link2 className="w-5 h-5 text-amber-500" />, desc: 'Akses Sistem & Aplikasi Eksternal' },
    { name: 'Unduh Berkas', path: '/berkas', icon: <FileText className="w-5 h-5 text-emerald-500" />, desc: 'Kalender Akademik & Administrasi' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Bottom Nav Bar - Only visible on Mobile/Tablet */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          {primaryTabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                onClick={handleLinkClick}
                className="flex flex-col items-center justify-center flex-grow py-1.5 transition-all duration-200 active:scale-95 cursor-pointer relative"
              >
                <div className={`p-1 rounded-xl transition-all duration-300 ${
                  active 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}>
                  {tab.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider mt-0.5 ${
                  active ? 'text-blue-600 font-black' : 'text-slate-500 font-bold'
                }`}>
                  {tab.name}
                </span>
                {active && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-blue-600"
                  />
                )}
              </Link>
            );
          })}

          {/* Ergonomic Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center flex-grow py-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <div className={`p-1 rounded-xl transition-all duration-300 ${
              isMenuOpen 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-slate-500'
            }`}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-wider mt-0.5 ${
              isMenuOpen ? 'text-blue-600' : 'text-slate-500'
            }`}>
              Menu
            </span>
          </button>
        </div>
      </div>

      {/* Slide-Up Bottom Sheet Menu for Secondary Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Bottom Sheet Modal Container */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="md:hidden fixed bottom-16 left-0 right-0 z-40 bg-white rounded-t-3xl border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.12)] max-h-[85vh] overflow-y-auto pb-6"
            >
              {/* Drag Handle Bar Indicator */}
              <div className="flex justify-center py-3">
                <div className="w-12 h-1 rounded-full bg-slate-300" />
              </div>

              <div className="px-5">
                {/* Header */}
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
                    SMK Tanjung Priok 1
                  </span>
                  <span className="text-lg font-black text-slate-800">
                    Layanan & Navigasi Akademik
                  </span>
                </div>

                {/* Secondary Routes Grid */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {secondaryMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between p-3.5 bg-slate-50 active:bg-blue-50/50 rounded-2xl border border-slate-100 transition-all cursor-pointer"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100">
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-black text-slate-800 block uppercase tracking-wider">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ))}
                </div>

                {/* Quick Interactive Call Actions for Handlers/Fingers */}
                <div className="border-t border-slate-100 pt-5 mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">
                    Hubungi Sekolah Pintar
                  </span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:0214301192"
                      className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 active:scale-95 text-blue-700 rounded-xl border border-blue-100 transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Telepon</span>
                    </a>
                    <a
                      href="mailto:smk1dikantara@gmail.com"
                      className="flex items-center justify-center space-x-2 p-3 bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-700 rounded-xl border border-emerald-100 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Surel Email</span>
                    </a>
                  </div>
                </div>

                {/* External PPDB Shortcut */}
                <a
                  href="https://smktanjungpriok1.sch.id/ppdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span className="flex items-center space-x-2">
                    <span>🚩</span>
                    <span>Pendaftaran PPDB 2026/2027</span>
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
