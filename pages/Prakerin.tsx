import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Prakerin: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Menggunakan ukuran thumbnail yang lebih besar untuk kejelasan (w4000)
  const images = [
    { url: "https://drive.google.com/thumbnail?id=1Ya27lfM7idDYTs1RbCl_rR3Nm2Zu8UBo&sz=w4000", title: "Jadwal LAB DKV 1" },
    { url: "https://drive.google.com/thumbnail?id=1BKkU9IvbjCIGU7usmZ1gaw4G0zM5aeFS&sz=w4000", title: "Jadwal LAB DKV 2" },
    { url: "https://drive.google.com/thumbnail?id=1Ip4JEgpj96HkHcZscvl3-fB1U3zGGsjq&sz=w4000", title: "Jadwal LAB DKV 3 / Ruang XI DKV" },
    { url: "https://drive.google.com/thumbnail?id=1qz9T_MEBIzsd2agqQBRJHQTmrJ4O8dQd&sz=w4000", title: "Jadwal LAB 4 / LAB TL" },
    { url: "https://drive.google.com/thumbnail?id=1xaWsyrSLcHX2dQrgbz5H1oa7skU3iRW8&sz=w4000", title: "Jadwal Ujian Prakerin" },
    { url: "https://drive.google.com/thumbnail?id=15J--6M5p8UG0D-kF-lKj2fLX77LnKoCF&sz=w4000", title: "Daftar Penguji" },
    { url: "https://drive.google.com/thumbnail?id=1FbcqNNd_mjasXaUKXJ609uJpjDLPkAGe&sz=w4000", title: "Skenario Ujian" },
    { url: "https://drive.google.com/thumbnail?id=1N-6Lx6R9U84D26CR-ISKuf7Wjmzu7HcQ&sz=w4000", title: "Tata Tertib Ujian" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center text-[#059669] font-bold mb-8 hover:underline group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Kembali ke Beranda
          </Link>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100">
            <div className="bg-[#1a3a5a] p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Pengumuman Prakerin</span>
                <span className="text-white/60 text-sm">06 April 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">Pelaksanaan Ujian Lisan Prakerin Siswa/i Kelas XII</h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  13 April - 15 April 2026
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Sesuai Jadwal Masing-masing
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-[#1a3a5a] mb-6 flex items-center">
                      <svg className="w-6 h-6 mr-3 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      Slide Jadwal Ujian
                    </h2>
                    
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-[3/2]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentIndex}
                          src={images[currentIndex].url}
                          alt={images[currentIndex].title}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-contain cursor-zoom-in"
                          onClick={() => setIsZoomed(true)}
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#059669] text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#059669] text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>

                      {/* Caption */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white font-bold text-lg">{images[currentIndex].title}</p>
                        <p className="text-white/60 text-sm">Slide {currentIndex + 1} dari {images.length}</p>
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-[#059669] scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
                        >
                          <img src={img.url} alt={img.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </button>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-inner">
                    <h3 className="text-xl font-bold text-[#1a3a5a] mb-6 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Ketentuan Ujian
                    </h3>
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold text-[#1a3a5a]">Seragam</p>
                          <p className="text-gray-600 text-sm">Baju putih panjang bahan, celana panjang hitam bahan, dasi hitam, sepatu pantofel.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold text-[#1a3a5a]">Rambut & Kerapihan</p>
                          <p className="text-gray-600 text-sm">Laki-laki: Panjang rambut 2cm. Perempuan: Rambut diikat rapih (jika berjilbab, gunakan warna hitam).</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold text-[#1a3a5a]">Laporan</p>
                          <p className="text-gray-600 text-sm">Membawa Laporan Prakerin sebanyak 3 rangkap beserta jurnal pkl yang sdh diisi & tanda tangan mentor PKL dari perusahaan.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold text-[#1a3a5a]">Presentasi</p>
                          <p className="text-gray-600 text-sm">Membawa softcopy PPT untuk presentasi.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold text-[#1a3a5a]">Kehadiran</p>
                          <p className="text-gray-600 text-sm">Hadir tepat waktu. Toleransi maksimal 15 menit dari jadwal.</p>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <div className="bg-[#1a3a5a] text-white p-8 rounded-[2rem] shadow-lg">
                    <h4 className="font-bold text-lg mb-2">Butuh Bantuan?</h4>
                    <p className="text-white/70 text-sm mb-6">Jika terdapat kendala jadwal atau teknis, silakan hubungi koordinator Prakerin atau wali kelas masing-masing.</p>
                    <button className="w-full py-3 bg-[#059669] hover:bg-[#047857] rounded-xl font-bold transition-colors">
                      Hubungi Koordinator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-0 animate-in fade-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#059669] transition-colors z-[110] bg-black/50 p-3 rounded-full"
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].title} 
              className="w-full h-full object-contain animate-in zoom-in-95 duration-500"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Prakerin;
