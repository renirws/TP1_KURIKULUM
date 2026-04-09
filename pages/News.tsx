import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const News: React.FC = () => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  // Menggunakan ukuran thumbnail yang lebih besar untuk kejelasan (w4000)
  const usbkImageUrl = "https://drive.google.com/thumbnail?id=1Ot3cnGnmRfueWIq8_Y6bharn-aecpN-l&sz=w4000";

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
