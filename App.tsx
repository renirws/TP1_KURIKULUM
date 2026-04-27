
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
import Home from './pages/Home';
import News from './pages/News';
import Prakerin from './pages/Prakerin';
import Curriculum from './pages/Curriculum';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import AcademicCalendar from './pages/AcademicCalendar';
import Gallery from './pages/Gallery';
import ExternalLinks from './pages/ExternalLinks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Menggunakan thumbnail Google Drive dengan lebar maksimal untuk kualitas lebih baik
  const topBannerUrl = "https://drive.google.com/thumbnail?id=1MtVR3nnr0g8nkLo2kZQc_afBTspy8qOG&sz=w1600";

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="z-50 shadow-sm">
          {/* Scrolling PPDB Announcement */}
          <div className="bg-yellow-400 text-[#1a3a5a] py-2 overflow-hidden whitespace-nowrap border-b border-yellow-500">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex shrink-0 items-center"
            >
              {[...Array(4)].map((_, i) => (
                <a 
                  key={i}
                  href="https://ppdb2025.smktanjungpriok1.sch.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-black text-xs md:text-sm uppercase tracking-[0.15em] px-12 hover:text-[#059669] transition-colors flex items-center"
                >
                  <span className="mr-3">🚩</span>
                  PENDAFTARAN PESERTA DIDIK BARU (PPDB) TAHUN PELAJARAN 2026/2027 TELAH DIBUKA! DAFTAR SEKARANG DI: ppdb2025.smktanjungpriok1.sch.id
                  <span className="ml-3">🔥</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Top Image Banner - Adjusted for better fit */}
          <div className="w-full bg-white overflow-hidden flex justify-center">
            <img 
              src={topBannerUrl} 
              alt="Banner Utama SMK Tanjung Priok 1" 
              className="w-full h-auto max-h-[300px] object-contain md:object-fill"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
          <div className="bg-[#1a3a5a] text-white py-2 px-4 text-sm hidden md:block border-t border-white/10">
            <div className="container mx-auto flex justify-between">
              <span className="font-semibold tracking-wide">SMK TANJUNG PRIOK 1 - Unggul dalam Prestasi, Santun dalam Perilaku</span>
              <div className="flex space-x-6">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  (021) 4301192
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  smk1dikantara@gmail.com
                </span>
              </div>
            </div>
          </div>
          <Navbar />
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warta" element={<News />} />
            <Route path="/prakerin" element={<Prakerin />} />
            <Route path="/kurikulum/*" element={<Curriculum />} />
            <Route path="/siswa" element={<Students />} />
            <Route path="/guru" element={<Teachers />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/tautan" element={<ExternalLinks />} />
            <Route path="/berkas" element={<AcademicCalendar />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
