import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Calendar, Clock, ZoomIn, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, FileText, Layers, Download, Printer } from 'lucide-react';

const News: React.FC = () => {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  // TKA Data
  const [tkaSlide, setTkaSlide] = useState(0);
  const tkaSchedules = [
    {
      id: "1GMDrC4x9i53lyHEXZVwviNPci3tX_14F",
      title: "Jadwal & Ketentuan Utama TKA",
      subtitle: "Surat Edaran Pelaksanaan Simulasi Ke-1 TKA",
      driveUrl: "https://drive.google.com/file/d/1GMDrC4x9i53lyHEXZVwviNPci3tX_14F/view?usp=drive_link",
      badge: "Pengumuman Utama"
    },
    {
      id: "13gmYelKKtinBgqzzfXIQPV5WKV5OXJP8",
      title: "Pembagian Sesi 1 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 1",
      driveUrl: "https://drive.google.com/file/d/13gmYelKKtinBgqzzfXIQPV5WKV5OXJP8/view?usp=drive_link",
      badge: "Sesi 1"
    },
    {
      id: "1FVe3uTAV8apy4jA5zzpewQbwDKtEa9B6",
      title: "Pembagian Sesi 2 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 2",
      driveUrl: "https://drive.google.com/file/d/1FVe3uTAV8apy4jA5zzpewQbwDKtEa9B6/view?usp=drive_link",
      badge: "Sesi 2"
    },
    {
      id: "1EFKBqFtDx3XTyxz4uV1DG-_ZMFeR_90C",
      title: "Pembagian Sesi 3 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 3",
      driveUrl: "https://drive.google.com/file/d/1EFKBqFtDx3XTyxz4uV1DG-_ZMFeR_90C/view?usp=drive_link",
      badge: "Sesi 3"
    },
    {
      id: "1L3XIXBciuCSUvMloX2lGZ41RNMDy97nO",
      title: "Pembagian Sesi 4 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 4",
      driveUrl: "https://drive.google.com/file/d/1L3XIXBciuCSUvMloX2lGZ41RNMDy97nO/view?usp=drive_link",
      badge: "Sesi 4"
    },
    {
      id: "1NFHzpIPkkjlH3rRAZk-n_FR5MRW00J1A",
      title: "Pembagian Sesi 5 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 5",
      driveUrl: "https://drive.google.com/file/d/1NFHzpIPkkjlH3rRAZk-n_FR5MRW00J1A/view?usp=drive_link",
      badge: "Sesi 5"
    },
    {
      id: "1DE1dHikvJbUcLo96eQVWN-cREBQ6n8vA",
      title: "Pembagian Sesi 6 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 6",
      driveUrl: "https://drive.google.com/file/d/1DE1dHikvJbUcLo96eQVWN-cREBQ6n8vA/view?usp=drive_link",
      badge: "Sesi 6"
    },
    {
      id: "1LzOZClaMIkkBt7Ar9AHjtC3VYIzgK0ZM",
      title: "Pembagian Sesi 7 • TKA Kelas XII",
      subtitle: "Daftar Peserta & Ruangan Sesi 7",
      driveUrl: "https://drive.google.com/file/d/1LzOZClaMIkkBt7Ar9AHjtC3VYIzgK0ZM/view?usp=drive_link",
      badge: "Sesi 7"
    }
  ];

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

  const handlePrintImage = (imageUrl: string, title: string) => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.zIndex = '-9999';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>
              @page { size: portrait; margin: 10mm; }
              body { margin: 0; padding: 10px; text-align: center; font-family: sans-serif; }
              h2 { color: #0f172a; margin-bottom: 4px; font-size: 18px; }
              p { color: #64748b; margin-bottom: 12px; font-size: 12px; }
              img { max-width: 100%; max-height: 82vh; object-fit: contain; border: 1px solid #ccc; border-radius: 8px; }
            </style>
          </head>
          <body>
            <h2>${title}</h2>
            <p>SMK Tanjung Priok 1 Jakarta Utara • Warta Kurikulum</p>
            <img src="${imageUrl}" referrerpolicy="no-referrer" />
            <script>
              const img = document.querySelector('img');
              const doPrint = () => {
                window.focus();
                window.print();
                setTimeout(() => { if (window.frameElement) window.frameElement.remove(); }, 1000);
              };
              if (img.complete) doPrint(); else img.onload = doPrint;
            </script>
          </body>
        </html>
      `);
      doc.close();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <SEO 
        title="Warta Sekolah & Jadwal Simulasi TKA, UKK, USBK 2026 | SMK TANJUNG PRIOK 1"
        description="Berita dan pengumuman resmi SMK Tanjung Priok 1 Jakarta Utara. Jadwal Simulasi Ke-1 Tes Kemampuan Akademik (TKA) Kelas XII (26-28 Agustus 2026), Jadwal UKK, USBK, serta agenda kurikulum terbaru."
        keywords="TKA SMK Tanjung Priok 1, Simulasi TKA Kelas XII, Jadwal TKA 2026, Warta SMK Tanjung Priok 1, Berita SMK Tanjung Priok 1, Jadwal UKK 2026, Pengumuman Sekolah Jakarta Utara"
        canonical="https://tp1kurikulum.my.id/warta"
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <header>
            <Link to="/" className="inline-flex items-center text-[#3b82f6] font-black mb-4 hover:underline group text-sm uppercase tracking-widest">
              <ChevronLeft className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition" />
              Kembali ke Beranda
            </Link>
          </header>

          {/* TKA SIMULATION SECTION - KELAS XII (NEW) */}
          <article className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-100/80">
            <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <FileText className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-400 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>AGENDA RESMI KELAS XII</span>
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="bg-white/10 backdrop-blur-md text-blue-100 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>26 - 28 AGUSTUS 2026</span>
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                  Pelaksanaan Simulasi Ke-1 Tes Kemampuan Akademik (TKA)
                </h2>
                <p className="text-blue-100/90 leading-relaxed text-base md:text-lg max-w-3xl font-medium">
                  Pengumuman resmi, jadwal lengkap, dan daftar pembagian sesi bagi seluruh peserta didik <strong className="text-amber-300">Kelas XII (Jurusan TPK, TKRO, DKV, MLOG)</strong> dalam rangka Simulasi Ke-1 Tes Kemampuan Akademik (TKA) SMK Tanjung Priok 1 Jakarta Utara.
                </p>
              </div>
            </header>

            <div className="p-6 md:p-12 space-y-10">
              {/* Header Action Control */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-black text-[#0f172a] flex items-center gap-2">
                    <Layers className="w-6 h-6 text-blue-600" />
                    <span>Jadwal & Lembar Pembagian Sesi TKA</span>
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">
                    Slide atau ketuk tombol nomor sesi di bawah untuk mengecek ruang & waktu sesi Anda.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a 
                    href={tkaSchedules[tkaSlide].driveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka Google Drive</span>
                  </a>
                  <button 
                    onClick={() => handleZoom(`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`)}
                    className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4 text-blue-400" />
                    <span>Zoom Resolusi Tinggi</span>
                  </button>
                </div>
              </div>

              {/* TKA Interactive Slide Stage Viewport */}
              <div className="relative max-w-3xl mx-auto">
                {/* Active Slide Info Header */}
                <div className="bg-slate-900 text-white p-4 rounded-t-3xl flex items-center justify-between gap-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-lg text-xs uppercase tracking-wider">
                      {tkaSchedules[tkaSlide].badge}
                    </span>
                    <div>
                      <h4 className="font-black text-sm md:text-base text-white leading-tight">
                        {tkaSchedules[tkaSlide].title}
                      </h4>
                      <p className="text-slate-400 text-xs hidden sm:block">
                        {tkaSchedules[tkaSlide].subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    {tkaSlide + 1} / {tkaSchedules.length}
                  </span>
                </div>

                {/* Main Image Box */}
                <div 
                  className="bg-slate-950 rounded-b-3xl overflow-hidden relative shadow-2xl cursor-zoom-in border-x border-b border-slate-900 group"
                  onClick={() => handleZoom(`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`)}
                >
                  <div className="aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-2 bg-slate-950">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={tkaSlide}
                        src={`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`}
                        alt={tkaSchedules[tkaSlide].title}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Overlay Hover Prompt */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <div className="bg-white text-slate-950 p-3.5 rounded-full shadow-2xl mb-2 transform scale-90 group-hover:scale-100 transition duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/20">
                      Klik untuk Zoom & Perbesar Gambar
                    </span>
                  </div>

                  {/* Left & Right Nav Arrows */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev - 1 + tkaSchedules.length) % tkaSchedules.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105"
                    aria-label="Slide Sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev + 1) % tkaSchedules.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105"
                    aria-label="Slide Berikutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Thumbnail Strip Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {tkaSchedules.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setTkaSlide(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                        tkaSlide === idx
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {item.badge}
                    </button>
                  ))}
                </div>

                {/* Print & Action Bar */}
                <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Aksi Cepat Berkas TKA
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      Cetak lembar sesi ini atau unduh gambar resolusi tinggi.
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => handlePrintImage(`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`, tkaSchedules[tkaSlide].title)}
                      className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-black py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Cetak / PDF</span>
                    </button>

                    <a
                      href={tkaSchedules[tkaSlide].driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white font-black py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Unduh File</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* TKA Important Information Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-blue-50/70 border border-blue-100 p-6 md:p-8 rounded-[2rem]">
                  <h4 className="text-lg font-black text-blue-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Jadwal & Tempat Pelaksanaan</span>
                  </h4>
                  <p className="text-blue-900 font-bold text-sm mb-3">
                    Pelaksanaan Simulasi Ke-1 TKA berlangsung dari tanggal <span className="underline">Rabu, 26 s.d. Jumat, 28 Agustus 2026</span>.
                  </p>
                  <ul className="text-xs md:text-sm font-medium text-blue-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Wajib diikuti oleh seluruh siswa/i Kelas XII SMK Tanjung Priok 1.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Lokasi: Laboratorium Komputer SMK Tanjung Priok 1 Jakarta.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50/70 border border-amber-100 p-6 md:p-8 rounded-[2rem]">
                  <h4 className="text-lg font-black text-amber-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span>Tata Tertib & Tata Cara Sesi</span>
                  </h4>
                  <p className="text-amber-900 font-bold text-sm mb-3">
                    Peserta wajib hadir paling lambat <span className="underline">15 menit sebelum sesi dimulai</span>.
                  </p>
                  <ul className="text-xs md:text-sm font-medium text-amber-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Menggunakan seragam sekolah lengkap dan rapi sesuai ketentuan harian.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Membawa kartu ujian / kelengkapan identitas siswa serta alat tulis.</span>
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
                          <ZoomIn className="w-8 h-8 text-[#1a3a5a]" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all z-20 group-hover:scale-110 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#1a3a5a]" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all z-20 group-hover:scale-110 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6 text-[#1a3a5a]" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-black text-orange-900 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-orange-600" />
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
                    <CheckCircle2 className="w-6 h-6 mr-2 text-blue-600" />
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
              <h4 className="text-white font-bold text-base">Detail Berkas & Jadwal Resmi</h4>
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
              animate={{ scale: zoomScale }}
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

            <span className="text-white font-mono text-sm font-black min-w-[55px] text-center">
              {Math.round(zoomScale * 100)}%
            </span>

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
