import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  ZoomIn, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Layers, 
  Download, 
  Printer, 
  Headphones, 
  Search, 
  AlertTriangle, 
  UserCheck, 
  MapPin, 
  X,
  Filter
} from 'lucide-react';
import { toeicSlides, toeicParticipants } from '../services/toeicData';

const News: React.FC = () => {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  // TOEIC State
  const [toeicSlide, setToeicSlide] = useState(0);
  const [toeicSearchQuery, setToeicSearchQuery] = useState('');
  const [selectedJenjangFilter, setSelectedJenjangFilter] = useState<'Semua' | 'Kelas XII' | 'Kelas XI'>('Semua');
  const [selectedSesiFilter, setSelectedSesiFilter] = useState<'Semua' | 1 | 2>('Semua');

  // Filtered TOEIC Participants for Student Finder
  const filteredToeicStudents = useMemo(() => {
    return toeicParticipants.filter(student => {
      const matchesSearch = 
        student.name.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        student.nisn.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        student.lab.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        student.kelas.toLowerCase().includes(toeicSearchQuery.toLowerCase());
      
      const matchesJenjang = selectedJenjangFilter === 'Semua' || student.jenjang === selectedJenjangFilter;
      const matchesSesi = selectedSesiFilter === 'Semua' || student.sesi === selectedSesiFilter;

      return matchesSearch && matchesJenjang && matchesSesi;
    });
  }, [toeicSearchQuery, selectedJenjangFilter, selectedSesiFilter]);

  // TKA Data
  const [tkaSlide, setTkaSlide] = useState(0);
  const tkaSchedules = [
    {
      id: "1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od",
      title: "Jadwal & Ketentuan Utama TKA",
      subtitle: "Surat Edaran Pelaksanaan Simulasi Ke-1 TKA",
      driveUrl: "https://drive.google.com/file/d/1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od/view?usp=drive_link",
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
              @page { size: portrait; margin: 8mm; }
              body { margin: 0; padding: 10px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
              h2 { color: #0f172a; margin-bottom: 4px; font-size: 16px; }
              p { color: #64748b; margin-bottom: 12px; font-size: 11px; }
              img { max-width: 100%; max-height: 85vh; object-fit: contain; border: 1px solid #e2e8f0; border-radius: 8px; }
            </style>
          </head>
          <body>
            <h2>${title}</h2>
            <p>SMK Tanjung Priok 1 Jakarta Utara • Warta Kurikulum Resmi</p>
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
    <main className="min-h-screen bg-gray-50 py-8 md:py-12">
      <SEO 
        title="Warta Kurikulum: Pelaksanaan Seleksi TOEIC 2026/2027 & Agenda Ujian | SMK TANJUNG PRIOK 1"
        description="Pengumuman resmi Seleksi TOEIC SMK Tanjung Priok 1 Jakarta Utara tgl 24 September 2026 (Kelas XII) & 25 September 2026 (Kelas XI). Jadwal sesi, ruangan laboratorium, daftar peserta, dan kewajiban membawa earphone pribadi."
        keywords="TOEIC SMK Tanjung Priok 1, Seleksi TOEIC 2026, Jadwal TOEIC Kelas XI XII, Ruang Lab TOEIC, Earphone Seleksi TOEIC, Warta Kurikulum SMK Tanjung Priok 1, Berita Sekolah Jakarta Utara"
        canonical="https://tp1kurikulum.my.id/warta"
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-10 md:space-y-12"
        >
          {/* Breadcrumb Navigation */}
          <header>
            <Link to="/" className="inline-flex items-center text-[#3b82f6] font-black mb-2 hover:underline group text-xs md:text-sm uppercase tracking-widest">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 transform group-hover:-translate-x-1 transition" />
              Kembali ke Beranda
            </Link>
          </header>

          {/* =========================================================================
              FEATURED SECTION: PELAKSANAAN SELEKSI TOEIC KELAS XI & XII (24-25 SEPT 2026)
             ========================================================================= */}
          <article id="toeic" className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-200/80">
            {/* Header Banner */}
            <header className="bg-gradient-to-br from-[#0b192c] via-[#1e3a8a] to-[#2563eb] p-6 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <Headphones className="w-72 h-72 text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>PENGUMUMAN RESMI KURIKULUM</span>
                  </span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>24 - 25 SEPTEMBER 2026</span>
                  </span>
                  <span className="bg-rose-500/20 backdrop-blur-md text-rose-200 border border-rose-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5 text-rose-300" />
                    <span>WAJIB MEMBAWA EARPHONE</span>
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Pelaksanaan Seleksi TOEIC Murid Kelas XI &amp; XII TA 2026/2027
                </h1>

                <p className="text-blue-100/90 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl font-medium">
                  Surat Edaran resmi No: <strong className="text-white">08/SE/SMKTP01/IX/2026</strong>. Tes kemampuan bahasa Inggris berskala internasional (TOEIC) diselenggarakan luring di Laboratorium Komputer SMK Tanjung Priok 1 Jakarta.
                </p>

                {/* Important Alert Notice Pill */}
                <div className="pt-2">
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-amber-500/20 border border-amber-300/40 rounded-2xl p-3 sm:px-4 sm:py-2.5 backdrop-blur-md text-amber-200 text-xs md:text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-300 flex-shrink-0" />
                      <span className="font-bold text-amber-100 uppercase tracking-wide">Peringatan Penting:</span>
                    </div>
                    <span>Murid wajib hadir tepat waktu &amp; membawa <strong>earphone / headset pribadi</strong> untuk sesi Listening.</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-5 md:p-10 lg:p-12 space-y-10">
              {/* 4 Essential Quick Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Kelas XII Schedule */}
                <div className="bg-blue-50/80 border border-blue-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-500/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Jadwal Kelas XII</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Kamis, 24 Sept 2026</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sesi 1: 07.00 – 09.00 WIB<br />
                    Sesi 2: 09.30 – 11.30 WIB
                  </p>
                </div>

                {/* Card 2: Kelas XI Schedule */}
                <div className="bg-indigo-50/80 border border-indigo-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-md shadow-indigo-500/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">Jadwal Kelas XI</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Jum'at, 25 Sept 2026</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sesi 1: 07.00 – 09.00 WIB<br />
                    Sesi 2: 09.30 – 11.30 WIB
                  </p>
                </div>

                {/* Card 3: Earphone Rule */}
                <div className="bg-rose-50/80 border border-rose-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 shadow-md shadow-rose-500/20">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">Wajib Bawa Earphone</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Earphone Pribadi</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Wajib membawa headset / earphone berfungsi baik untuk audio listening.
                  </p>
                </div>

                {/* Card 4: Location & Punctuality */}
                <div className="bg-emerald-50/80 border border-emerald-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">Lokasi & Waktu</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Lab Komputer</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Hadir tepat waktu di sekolah 15 menit sebelum sesi masing-masing dimulai.
                  </p>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  TOEIC SLIDE SLIDER: SURAT EDARAN & LAMPIRAN JADWAL SESI (5 LEMBAR)
                 ------------------------------------------------------------- */}
              <div className="space-y-4 pt-2">
                {/* Control bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#0f172a] flex items-center gap-2">
                      <Layers className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      <span>Slide Edaran Resmi &amp; Lampiran Peserta TOEIC</span>
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                      Geser atau pilih lembar di bawah untuk melihat rincian nama siswa, sesi, dan pembagian ruangan.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button 
                      onClick={() => handleZoom(toeicSlides[toeicSlide].imageUrl)}
                      className="inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4 text-blue-400" />
                      <span>Zoom Resolusi Tinggi</span>
                    </button>

                    <button 
                      onClick={() => handlePrintImage(toeicSlides[toeicSlide].imageUrl, toeicSlides[toeicSlide].title)}
                      className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Cetak / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Slider Viewport Container */}
                <div className="relative max-w-4xl mx-auto">
                  {/* Active Slide Info Bar */}
                  <div className="bg-slate-900 text-white p-3.5 md:p-4 rounded-t-2xl md:rounded-t-3xl flex items-center justify-between gap-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 md:py-1 rounded-lg text-[10px] md:text-xs uppercase tracking-wider">
                        {toeicSlides[toeicSlide].badge}
                      </span>
                      <div className="text-left">
                        <h4 className="font-black text-xs md:text-sm text-white leading-tight">
                          {toeicSlides[toeicSlide].title}
                        </h4>
                        <p className="text-slate-400 text-[10px] md:text-xs hidden sm:block">
                          {toeicSlides[toeicSlide].subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] md:text-xs font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">
                      Lembar {toeicSlide + 1} / {toeicSlides.length}
                    </span>
                  </div>

                  {/* Main Interactive Document Stage with Touch Swipe */}
                  <div 
                    className="bg-slate-950 rounded-b-2xl md:rounded-b-3xl overflow-hidden relative shadow-2xl cursor-zoom-in border-x border-b border-slate-900 group select-none touch-pan-y"
                    onClick={() => handleZoom(toeicSlides[toeicSlide].imageUrl)}
                  >
                    <div className="aspect-[1/1.38] sm:aspect-[1/1.35] md:aspect-[16/11] max-h-[78vh] flex items-center justify-center p-2 sm:p-4 bg-slate-950 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={toeicSlide}
                          src={toeicSlides[toeicSlide].imageUrl}
                          alt={toeicSlides[toeicSlide].title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={(_, info) => {
                            if (info.offset.x < -40) {
                              setToeicSlide((prev) => (prev + 1) % toeicSlides.length);
                            } else if (info.offset.x > 40) {
                              setToeicSlide((prev) => (prev - 1 + toeicSlides.length) % toeicSlides.length);
                            }
                          }}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01] active:cursor-grabbing drop-shadow-xl"
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Overlay Zoom Hint */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 pointer-events-none">
                      <div className="bg-white text-slate-950 p-3 rounded-full shadow-2xl mb-2 transform scale-90 group-hover:scale-100 transition duration-300">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/20">
                        Klik untuk Perbesar Gambar Dokumen
                      </span>
                    </div>

                    {/* Left & Right Navigation Buttons */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setToeicSlide((prev) => (prev - 1 + toeicSlides.length) % toeicSlides.length);
                      }}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95"
                      aria-label="Lembar Sebelumnya"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setToeicSlide((prev) => (prev + 1) % toeicSlides.length);
                      }}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95"
                      aria-label="Lembar Berikutnya"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Mobile swipe hint banner */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/85 text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider backdrop-blur-md border border-white/10 pointer-events-none sm:hidden flex items-center gap-1">
                      <span>👈 Usap ke kiri/kanan untuk geser 👉</span>
                    </div>
                  </div>

                  {/* Thumbnail / Direct Quick-Jump Buttons */}
                  <div className="mt-3 md:mt-4 flex items-center justify-start sm:justify-center gap-1.5 md:gap-2 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar">
                    {toeicSlides.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setToeicSlide(idx)}
                        className={`px-3 py-2 rounded-xl text-[11px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 ${
                          toeicSlide === idx
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 text-[10px] flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span>{item.badge}</span>
                      </button>
                    ))}
                  </div>

                  {/* Document description box */}
                  <div className="mt-3 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                    <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="font-medium leading-relaxed">
                      {toeicSlides[toeicSlide].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  INTERACTIVE STUDENT SEARCH & SCHEDULE LOOKUP TOOL
                 ------------------------------------------------------------- */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      <span>Cek Sesi, Ruangan &amp; Jadwal Anda</span>
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                      Ketik nama siswa atau NISN untuk langsung mengetahui tanggal, sesi, waktu, dan laboratorium tes TOEIC.
                    </p>
                  </div>

                  <span className="text-xs font-bold bg-white text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-sm self-start md:self-auto">
                    Total: {filteredToeicStudents.length} Peserta Terdaftar
                  </span>
                </div>

                {/* Filter and Search Bar Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  {/* Search Input */}
                  <div className="sm:col-span-6 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      placeholder="Cari nama siswa / NISN / Lab..."
                      value={toeicSearchQuery}
                      onChange={(e) => setToeicSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />
                    {toeicSearchQuery && (
                      <button 
                        onClick={() => setToeicSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Filter Jenjang */}
                  <div className="sm:col-span-3">
                    <select 
                      value={selectedJenjangFilter}
                      onChange={(e) => setSelectedJenjangFilter(e.target.value as any)}
                      className="w-full py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
                    >
                      <option value="Semua">Semua Jenjang</option>
                      <option value="Kelas XII">Kelas XII (Kamis, 24 Sept)</option>
                      <option value="Kelas XI">Kelas XI (Jum'at, 25 Sept)</option>
                    </select>
                  </div>

                  {/* Filter Sesi */}
                  <div className="sm:col-span-3">
                    <select 
                      value={selectedSesiFilter}
                      onChange={(e) => setSelectedSesiFilter(e.target.value === 'Semua' ? 'Semua' : Number(e.target.value) as any)}
                      className="w-full py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
                    >
                      <option value="Semua">Semua Sesi</option>
                      <option value="1">Sesi 1 (07.00 - 09.00 WIB)</option>
                      <option value="2">Sesi 2 (09.30 - 11.30 WIB)</option>
                    </select>
                  </div>
                </div>

                {/* Participant Results Table & Mobile Cards */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  {filteredToeicStudents.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 space-y-2">
                      <Search className="w-8 h-8 mx-auto text-slate-300" />
                      <p className="font-bold text-slate-600 text-sm">Tidak ditemukan data siswa dengan kata kunci tersebut.</p>
                      <p className="text-xs">Pastikan ejaan nama atau nomor NISN sesuai data sekolah.</p>
                    </div>
                  ) : (
                    <div>
                      {/* Desktop Table Header */}
                      <div className="hidden md:grid grid-cols-12 gap-2 bg-slate-100 px-4 py-3 text-xs font-black text-slate-700 uppercase tracking-wider border-b border-slate-200">
                        <div className="col-span-1 text-center">No</div>
                        <div className="col-span-4">Nama Siswa &amp; Kelas</div>
                        <div className="col-span-3">Jadwal &amp; Waktu</div>
                        <div className="col-span-2 text-center">Ruangan / Lab</div>
                        <div className="col-span-2 text-center">Ketentuan</div>
                      </div>

                      {/* Scrollable list */}
                      <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
                        {filteredToeicStudents.map((item, idx) => (
                          <div 
                            key={`${item.jenjang}-${item.sesi}-${item.name}-${idx}`}
                            className="p-3.5 sm:p-4 hover:bg-blue-50/50 transition-colors flex flex-col md:grid md:grid-cols-12 md:gap-2 md:items-center text-xs"
                          >
                            {/* Mobile row header */}
                            <div className="flex items-center justify-between md:hidden mb-2">
                              <span className="font-black text-slate-400 text-[11px]">#{idx + 1}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                item.jenjang === 'Kelas XII' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'
                              }`}>
                                {item.jenjang} • Sesi {item.sesi}
                              </span>
                            </div>

                            {/* Col 1: Number (Desktop) */}
                            <div className="hidden md:block col-span-1 text-center font-bold text-slate-400">
                              {idx + 1}
                            </div>

                            {/* Col 2: Name & Class */}
                            <div className="col-span-4 space-y-0.5">
                              <div className="font-extrabold text-slate-900 text-sm">{item.name}</div>
                              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                                <span className="font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                                  {item.kelas}
                                </span>
                                {item.nisn !== '-' && (
                                  <span>NISN: {item.nisn}</span>
                                )}
                              </div>
                            </div>

                            {/* Col 3: Date & Session Time */}
                            <div className="col-span-3 mt-2 md:mt-0 space-y-0.5">
                              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                <span>{item.hari}, {item.tanggal}</span>
                              </div>
                              <div className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                <span>Sesi {item.sesi} ({item.waktu})</span>
                              </div>
                            </div>

                            {/* Col 4: Room / Lab */}
                            <div className="col-span-2 mt-2 md:mt-0 text-left md:text-center">
                              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 font-bold px-2.5 py-1 rounded-lg text-xs">
                                <MapPin className="w-3 h-3 text-amber-600" />
                                <span>{item.lab}</span>
                              </span>
                            </div>

                            {/* Col 5: Earphone Requirement Badge */}
                            <div className="col-span-2 mt-2 md:mt-0 text-left md:text-center">
                              <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 border border-rose-200 text-[10px] font-bold px-2 py-0.5 rounded-md">
                                <Headphones className="w-3 h-3 text-rose-500" />
                                <span>Bawa Earphone</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Advice Bar */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Daftar peserta resmi disahkan oleh Kepala SMK Tanjung Priok 1 (Andri Susanto, ST).</span>
                  </div>
                  <button
                    onClick={() => {
                      setToeicSlide(0);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Lihat Surat Edaran Asli</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              TKA SIMULATION SECTION - KELAS XII
             ========================================================================= */}
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
                  Pengumuman resmi, jadwal lengkap, dan daftar pembagian sesi bagi seluruh peserta didik <strong className="text-amber-300">Kelas XII (Jurusan TPK, TKRO, DKV, TL)</strong> dalam rangka Simulasi Ke-1 Tes Kemampuan Akademik (TKA) SMK Tanjung Priok 1 Jakarta Utara.
                </p>
              </div>
            </header>

            <div className="p-6 md:p-12 space-y-10">
              {/* Header Action Control */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-black text-[#0f172a] flex items-center gap-2">
                    <Layers className="w-6 h-6 text-blue-600" />
                    <span>Jadwal &amp; Lembar Pembagian Sesi TKA</span>
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">
                    Slide atau ketuk tombol nomor sesi di bawah untuk mengecek ruang &amp; waktu sesi Anda.
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

                {/* Main Image Box with Touch Swipe */}
                <div 
                  className="bg-slate-950 rounded-b-3xl overflow-hidden relative shadow-2xl cursor-zoom-in border-x border-b border-slate-900 group select-none touch-pan-y"
                  onClick={() => handleZoom(`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`)}
                >
                  <div className="aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-2 bg-slate-950 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={tkaSlide}
                        src={`https://lh3.googleusercontent.com/d/${tkaSchedules[tkaSlide].id}=s0`}
                        alt={tkaSchedules[tkaSlide].title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -40) {
                            setTkaSlide((prev) => (prev + 1) % tkaSchedules.length);
                          } else if (info.offset.x > 40) {
                            setTkaSlide((prev) => (prev - 1 + tkaSchedules.length) % tkaSchedules.length);
                          }
                        }}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01] active:cursor-grabbing"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Overlay Hover Prompt */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 pointer-events-none">
                    <div className="bg-white text-slate-950 p-3.5 rounded-full shadow-2xl mb-2 transform scale-90 group-hover:scale-100 transition duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/20">
                      Klik untuk Zoom &amp; Perbesar Gambar
                    </span>
                  </div>

                  {/* Left & Right Nav Arrows */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev - 1 + tkaSchedules.length) % tkaSchedules.length);
                    }}
                    className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2.5 md:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95"
                    aria-label="Slide Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev + 1) % tkaSchedules.length);
                    }}
                    className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2.5 md:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95"
                    aria-label="Slide Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  {/* Swipe hint banner for mobile */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider backdrop-blur-md border border-white/10 pointer-events-none sm:hidden flex items-center gap-1">
                    <span>👈 Usap ke kiri/kanan untuk geser 👉</span>
                  </div>
                </div>

                {/* Mobile Friendly Thumbnail Strip Buttons */}
                <div className="mt-4 md:mt-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar">
                  {tkaSchedules.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setTkaSlide(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border whitespace-nowrap flex-shrink-0 ${
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
                    <span>Jadwal &amp; Tempat Pelaksanaan</span>
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
                    <span>Tata Tertib &amp; Tata Cara Sesi</span>
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

          {/* =========================================================================
              UKK ANNOUNCEMENT SECTION
             ========================================================================= */}
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
                <span className="text-sm text-gray-400 italic hidden md:inline">*Klik gambar untuk melihat detail &amp; zoom</span>
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
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Siswa diharapkan hadir 15 menit sebelum ujian dimulai dengan mengenakan seragam praktik sesuai jurusan masing-masing.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem]">
                  <h3 className="text-xl font-black text-blue-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-blue-600" />
                    Ketentuan Teknis
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Membawa kartu ujian dan kartu identitas siswa (OSIS).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Mempersiapkan alat tulis dan perlengkapan ujian masing-masing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Menjaga ketertiban dan kebersihan ruang uji kompetensi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              USBK SECTION
             ========================================================================= */}
          <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-blue-100">
            <header className="bg-[#1a3a5a] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Arsip Berita</span>
                <span className="text-gray-300 text-sm">22 Maret 2026</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Ujian Sekolah Berbasis Komputer (USBK)</h2>
              <p className="mt-4 text-blue-100 leading-relaxed text-sm md:text-base">
                Informasi dan tata tertib pelaksanaan Ujian Sekolah Berbasis Komputer Tahun Pelajaran 2025/2026.
              </p>
            </header>

            <div className="p-8 md:p-12">
              <div className="border border-blue-50 rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://drive.google.com/thumbnail?id=12L9xUv_W6c68aP-eY9s7Z59aK-Y6p3_S&sz=w1600" 
                  alt="Jadwal USBK" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-8 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-[#1a3a5a] mb-2 text-base">Catatan Proktor &amp; Teknisi:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bagi siswa yang mengalami kendala teknis (login gagal, token tidak valid, dsb.) saat pelaksanaan USBK berlangsung, harap segera melapor kepada pengawas ruang untuk dikoordinasikan dengan teknisi server sekolah.
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>

      {/* =========================================================================
          ZOOM MODAL - HIGH RESOLUTION LIGHTBOX WITH PAN & ZOOM CONTROLS
         ========================================================================= */}
      {zoomImageUrl && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 animate-in fade-in duration-300 backdrop-blur-md"
          onClick={() => setZoomImageUrl(null)}
        >
          {/* Top Info Panel */}
          <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-[110]">
            <div className="text-left">
              <h4 className="text-white font-bold text-sm md:text-base">Detail Berkas &amp; Jadwal Resmi</h4>
              <p className="text-gray-400 text-[11px] md:text-xs mt-0.5">
                Tekan tombol di bawah untuk perbesar/perkecil atau seret gambar untuk menjelajah detail dokumen.
              </p>
            </div>
            <button 
              className="text-white hover:text-red-400 transition-colors bg-white/10 hover:bg-white/20 p-2 md:p-2.5 rounded-full cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setZoomImageUrl(null); }}
              aria-label="Tutup"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Draggable Viewport */}
          <div className="w-full h-full flex items-center justify-center p-3 sm:p-6 overflow-hidden relative">
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
                alt="Detail Dokumen" 
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Interactive Floating Zoom Tools Panel */}
          <div 
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-[#1e293b]/95 border border-slate-700/80 px-5 md:px-6 py-2.5 md:py-3 rounded-full flex items-center space-x-4 md:space-x-5 shadow-2xl backdrop-blur-md z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setZoomScale(prev => Math.max(prev - 0.5, 1))}
              disabled={zoomScale <= 1}
              className={`text-white p-1.5 md:p-2 rounded-full transition ${zoomScale <= 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 cursor-pointer'}`}
              title="Perkecil (Zoom Out)"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4"></path>
              </svg>
            </button>

            <span className="text-white font-mono text-xs md:text-sm font-black min-w-[50px] text-center">
              {Math.round(zoomScale * 100)}%
            </span>

            <button 
              onClick={() => setZoomScale(prev => Math.min(prev + 0.5, 4.0))}
              disabled={zoomScale >= 4}
              className={`text-white p-1.5 md:p-2 rounded-full transition ${zoomScale >= 4 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95 cursor-pointer'}`}
              title="Perbesar (Zoom In)"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>

            <span className="w-[1px] h-4 md:h-5 bg-slate-600/60"></span>

            <button 
              onClick={() => setZoomScale(1)}
              disabled={zoomScale === 1}
              className={`text-[11px] md:text-xs font-black uppercase tracking-wider px-3 py-1 md:py-1.5 rounded-lg transition ${zoomScale === 1 ? 'opacity-40 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 cursor-pointer'}`}
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
