import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const News: React.FC = () => {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  // UKK Data
  const ukkSchedules = [
    { title: "Teknik Pemesinan Kapal", id: "1ydNqBuZEleKQ7uutqM4hvBI84CPPXRCw", color: "bg-blue-600" },
    { title: "Teknik Kendaraan Ringan Otomotif", id: "1nrdxOBQMWD2Bn92z5MYG9ZgTmFaT2lBY", color: "bg-indigo-600" },
    { title: "Desain Komunikasi Visual", id: "1zNIVLg_hHcyMD_EyYtC9mvOBBuAeKRKU", color: "bg-cyan-600" },
    { title: "Teknik Logistik", id: "1McQOlK3yKdubAtE0aeG9VAchc9ye_QrU", color: "bg-sky-600" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ukkSchedules.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ukkSchedules.length) % ukkSchedules.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleZoom = (url: string) => {
    setZoomImageUrl(url);
    setZoomScale(1);
  };
  // Menggunakan ukuran thumbnail yang lebih besar untuk kejelasan (w4000)
  const usbkImageUrl = "https://drive.google.com/thumbnail?id=1Ot3cnGnmRfueWIq8_Y6bharn-aecpN-l&sz=w4000";

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <header>
            <Link to="/" className="inline-flex items-center text-[#3b82f6] font-black mb-4 hover:underline group text-sm uppercase tracking-widest">
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              Kembali ke Beranda
            </Link>
          </header>

          {/* ASAS Genap Announcement Section */}
          <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100">
            <header className="bg-gradient-to-r from-[#065f46] to-[#0d9488] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Agenda Akademik</span>
                <span className="text-white/20">•</span>
                <span className="text-white/80 text-sm">20 Mei 2026</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Asesmen Sumatif Akhir Semester Genap (ASAS Genap)</h2>
              <p className="mt-4 text-emerald-50 leading-relaxed text-sm md:text-base opacity-90">
                Pemberitahuan pelaksanaan Asesmen Sumatif Akhir Semester Genap (ASAS Genap) Tahun Pelajaran 2025/2026 untuk Siswa/i Kelas X & XI SMK Tanjung Priok 1 yang akan berlangsung pada tanggal 4 - 10 Juni 2026.
              </p>
            </header>

            <div className="p-8 md:p-12 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#065f46]">Jadwal Pelaksanaan ASAS Genap</h3>
                  <p className="text-gray-500 text-sm mt-1">Ketuk tombol zoom atau klik gambar jadwal untuk memperbesar detail resolusi tinggi.</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="https://drive.google.com/file/d/1Vs2fltSLib7V059965X0ilFRNceNA_4s/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow transition duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Google Drive</span>
                  </a>
                  <button 
                    onClick={() => handleZoom("https://lh3.googleusercontent.com/d/1Vs2fltSLib7V059965X0ilFRNceNA_4s")}
                    className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow transition duration-300 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>Zoom Jadwal</span>
                  </button>
                </div>
              </div>

              {/* Cover Schedule Interactive Viewport */}
              <div className="relative max-w-2xl mx-auto group">
                <div 
                  className="bg-slate-950 rounded-[2rem] overflow-hidden relative shadow-lg cursor-zoom-in border border-slate-100 transition duration-500"
                  onClick={() => handleZoom("https://lh3.googleusercontent.com/d/1Vs2fltSLib7V059965X0ilFRNceNA_4s")}
                >
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-emerald-600 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                      Tahun Pelajaran 2025/2026
                    </span>
                  </div>
                  <div className="aspect-[3/4] md:aspect-[4/5] flex items-center justify-center bg-slate-950 overflow-hidden p-2">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1Vs2fltSLib7V059965X0ilFRNceNA_4s"
                      alt="Jadwal ASAS Genap Kelas X XI"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg text-slate-900 mb-2 transform scale-90 group-hover:scale-100 transition duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider">Buka & Zoom Jadwal Lengkap</span>
                  </div>
                </div>
              </div>

              {/* Information Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-50/50 border border-emerald-120 p-8 rounded-[2rem]">
                  <h3 className="text-lg font-black text-emerald-900 mb-4 flex items-center">
                    <svg className="w-5.5 h-5.5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Sesi & Tanggal Penting
                  </h3>
                  <p className="text-emerald-800 font-bold leading-relaxed mb-4">
                    Pelaksanaan ujian berlangsung dari tanggal <span className="underline">Kamis, 4 Juni s.d. Rabu, 10 Juni 2026</span>.
                  </p>
                  <ul className="text-sm font-medium text-emerald-700 space-y-2.5">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                      <span>Diikuti oleh seluruh peserta didik Kelas X dan XI SMK Tanjung Priok 1.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                      <span>Konfigurasi sesi dan pengaturan ruangan dapat dikoordinasikan melalui wali kelas masing-masing.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50/50 border border-teal-120 p-8 rounded-[2rem]">
                  <h3 className="text-lg font-black text-teal-900 mb-4 flex items-center">
                    <svg className="w-5.5 h-5.5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    Persiapan Mandiri Siswa
                  </h3>
                  <p className="text-teal-800 font-bold leading-relaxed mb-4">
                    Harap mempersiapkan diri dengan menjaga <span className="underline">kedisiplinan, seragam resmi sekolah, dan fisik</span>.
                  </p>
                  <ul className="text-sm font-medium text-teal-700 space-y-2.5">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                      <span>Wajib membawa alat tulis secara mandiri (tidak diperkenankan saling meminjam saat ujian).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                      <span>Hadir paling lambat 15 menit sebelum bel masuk untuk mengikuti pengarahan awal panitia.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* UKK Announcement Section */}
          <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-blue-100">
            <header className="bg-gradient-to-r from-[#0f172a] to-[#3b82f6] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Info Kurikulum</span>
                <span className="text-white/60 text-sm">19 April 2026</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Jadwal Uji Kompetensi Keahlian (UKK)</h2>
              <p className="mt-4 text-blue-50 leading-relaxed text-sm md:text-base opacity-90">
                Pemberitahuan pelaksanaan UKK Mandiri untuk Siswa/i Kelas XII SMK Tanjung Priok 1 Tahun Pelajaran 2025/2026.
              </p>
            </header>

            <div className="p-8 md:p-12 space-y-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#1a3a5a]">Slide Gallery Jadwal UKK</h3>
                <span className="text-sm text-gray-400 italic hidden md:inline">*Klik gambar untuk melihat detail & zoom</span>
              </div>

              <div className="relative group">
                <div className="aspect-[16/10] md:aspect-[21/9] bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 cursor-zoom-in"
                      onClick={() => handleZoom(`https://drive.google.com/thumbnail?id=${ukkSchedules[currentSlide].id}&sz=w4000`)}
                    >
                      <div className="absolute top-6 left-6 z-10">
                        <span className={`${ukkSchedules[currentSlide].color} text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg`}>
                          {ukkSchedules[currentSlide].title}
                        </span>
                      </div>
                      <img 
                        src={`https://drive.google.com/thumbnail?id=${ukkSchedules[currentSlide].id}&sz=w1600`}
                        alt={ukkSchedules[currentSlide].title}
                        className="w-full h-full object-contain md:object-cover transition-transform group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/80 p-3 rounded-full shadow-lg">
                          <svg className="w-8 h-8 text-[#1a3a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all z-20 group-hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-[#1a3a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all z-20 group-hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-[#1a3a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-black text-orange-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Waktu Pelaksanaan
                  </h3>
                  <p className="text-orange-800 font-bold leading-relaxed mb-4">
                    Pelaksanaan Ujian UKK Siswa/i Kelas XII dilaksanakan tanggal <span className="underline">20 April - 24 April 2026</span>.
                  </p>
                  <ul className="text-sm font-medium text-orange-700 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Hadir tepat waktu (Gerbang ditutup tepat waktu)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Toleransi keterlambatan maksimal 15 menit</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-black text-blue-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    Ketentuan Seragam
                  </h3>
                  <p className="text-blue-800 font-bold leading-relaxed mb-4">
                    Wajib menggunakan <span className="underline">Seragam Praktik</span> sesuai kejuruan masing-masing.
                  </p>
                  <ul className="text-sm font-medium text-blue-700 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Berpakaian rapih, bersih, dan harum</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Atribut lengkap (ID Card & Perlengkapan UKK)</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
 
      {/* Zoom Modal - Supporting any image URL with Interactive controls */}
      {zoomImageUrl && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 animate-in fade-in duration-300 backdrop-blur-md"
          onClick={() => setZoomImageUrl(null)}
        >
          {/* Top Info Panel */}
          <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-[110]">
            <div className="text-left">
              <h4 className="text-white font-bold text-base">Detail Jadwal Resmi</h4>
              <p className="text-gray-400 text-xs mt-0.5">Tekan tombol di bawah untuk perbesar/perkecil atau seret gambar untuk menjelajah detail.</p>
            </div>
            <button 
              className="text-white hover:text-red-400 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-full cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setZoomImageUrl(null); }}
              aria-label="Tutup"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Draggable Viewport */}
          <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden relative">
            <motion.div
              drag={zoomScale > 1}
              dragElastic={0.15}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
              animate={{ 
                scale: zoomScale,
              }}
              className="max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={zoomImageUrl} 
                alt="Zoomed Detail" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Interactive Floating Zoom Tools Panel */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#1e293b]/90 border border-slate-700/60 px-6 py-3 rounded-full flex items-center space-x-5 shadow-2xl backdrop-blur-md z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom Out */}
            <button 
              onClick={() => setZoomScale(prev => Math.max(prev - 0.5, 1))}
              disabled={zoomScale <= 1}
              className={`text-white p-2 rounded-full transition ${zoomScale <= 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 cursor-pointer'}`}
              title="Perkecil (Zoom Out)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4"></path>
              </svg>
            </button>

            {/* Scale Value */}
            <span className="text-white font-mono text-sm font-black min-w-[55px] text-center">
              {Math.round(zoomScale * 100)}%
            </span>

            {/* Zoom In */}
            <button 
              onClick={() => setZoomScale(prev => Math.min(prev + 0.5, 4.0))}
              disabled={zoomScale >= 4}
              className={`text-white p-2 rounded-full transition ${zoomScale >= 4 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 cursor-pointer'}`}
              title="Perbesar (Zoom In)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>

            <span className="w-[1px] h-5 bg-slate-600/60"></span>

            {/* Reset */}
            <button 
              onClick={() => setZoomScale(1)}
              disabled={zoomScale === 1}
              className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition ${zoomScale === 1 ? 'opacity-40 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 cursor-pointer'}`}
              title="Kembali ke Ukuran Awal"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default News;
