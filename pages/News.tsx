import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const News: React.FC = () => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // UKK Data
  const ukkSchedules = [
    { title: "Teknik Pemesinan Kapal", id: "1ydNqBuZEleKQ7uutqM4hvBI84CPPXRCw", color: "bg-blue-600" },
    { title: "Teknik Kendaraan Ringan Otomotif", id: "1nrdxOBQMWD2Bn92z5MYG9ZgTmFaT2lBY", color: "bg-red-600" },
    { title: "Desain Komunikasi Visual", id: "1zNIVLg_hHcyMD_EyYtC9mvOBBuAeKRKU", color: "bg-emerald-600" },
    { title: "Teknik Logistik", id: "1McQOlK3yKdubAtE0aeG9VAchc9ye_QrU", color: "bg-orange-600" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ukkSchedules.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ukkSchedules.length) % ukkSchedules.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  // Menggunakan ukuran thumbnail yang lebih besar untuk kejelasan (w4000)
  const usbkImageUrl = "https://drive.google.com/thumbnail?id=1Ot3cnGnmRfueWIq8_Y6bharn-aecpN-l&sz=w4000";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <Link to="/" className="inline-flex items-center text-[#059669] font-bold mb-4 hover:underline group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Kembali ke Beranda
          </Link>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100">
            <div className="bg-[#1a3a5a] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Pengumuman Penting</span>
                <span className="text-white/60 text-sm">01 April 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Daftar Peserta USBK SMK Tanjung Priok 1</h1>
              <p className="mt-4 text-emerald-100/80 leading-relaxed">
                Informasi pembagian sesi dan ruang untuk pelaksanaan Ujian Satuan Pendidikan Berbasis Komputer (USBK) Tahun Pelajaran 2025/2026.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <h3 className="text-[#1a3a5a] font-bold text-xl mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#059669] text-white rounded-full flex items-center justify-center mr-3 text-sm">1</div>
                    Sesi 1
                  </h3>
                  <p className="text-gray-600 font-medium ml-11">Waktu: 07.00 - 09.00 WIB</p>
                  <p className="text-gray-500 text-sm ml-11 mt-1">Peserta diharapkan hadir 15 menit sebelum ujian dimulai.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="text-[#1a3a5a] font-bold text-xl mb-2 flex items-center">
                    <div className="w-8 h-8 bg-[#1a3a5a] text-white rounded-full flex items-center justify-center mr-3 text-sm">2</div>
                    Sesi 2
                  </h3>
                  <p className="text-gray-600 font-medium ml-11">Waktu: 09.30 - 11.30 WIB</p>
                  <p className="text-gray-500 text-sm ml-11 mt-1">Peserta diharapkan hadir 15 menit sebelum ujian dimulai.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1a3a5a]">Detail Daftar Peserta</h2>
                  <span className="text-sm text-gray-400 italic">*Klik gambar untuk memperbesar</span>
                </div>
                
                <div 
                  className="relative group cursor-zoom-in rounded-3xl overflow-hidden border-4 border-gray-100 shadow-2xl"
                  onClick={() => setIsZoomed(true)}
                >
                  <img 
                    src={usbkImageUrl} 
                    alt="Daftar Peserta USBK" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg">
                      <svg className="w-8 h-8 text-[#1a3a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-100 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-[#1a3a5a] mb-2">Instruksi Peserta:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                  <li>Membawa kartu peserta ujian yang sah.</li>
                  <li>Mengenakan seragam sekolah lengkap dan rpi.</li>
                  <li>Dilarang membawa alat komunikasi ke dalam ruang ujian.</li>
                  <li>Patuhi protokol kesehatan dan tata tertib yang berlaku.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UKK Announcement Section */}
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100">
            <div className="bg-[#059669] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white text-[#059669] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Info Kurikulum</span>
                <span className="text-white/60 text-sm">19 April 2026</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Jadwal Uji Kompetensi Keahlian (UKK)</h2>
              <p className="mt-4 text-emerald-50 leading-relaxed text-sm md:text-base">
                Pemberitahuan pelaksanaan UKK Mandiri untuk Siswa/i Kelas XII SMK Tanjung Priok 1 Tahun Pelajaran 2025/2026.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="relative group">
                <div className="aspect-[16/10] md:aspect-[21/9] bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-6 left-6 z-10">
                        <span className={`${ukkSchedules[currentSlide].color} text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg`}>
                          {ukkSchedules[currentSlide].title}
                        </span>
                      </div>
                      <img 
                        src={`https://drive.google.com/thumbnail?id=${ukkSchedules[currentSlide].id}&sz=w1200`}
                        alt={ukkSchedules[currentSlide].title}
                        className="w-full h-full object-contain md:object-cover"
                        referrerPolicy="no-referrer"
                      />
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
          </div>
        </motion.div>
      </div>

      {/* Zoom Modal - Truly Full Screen */}
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
              src={usbkImageUrl} 
              alt="Daftar Peserta USBK Full Screen" 
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

export default News;
