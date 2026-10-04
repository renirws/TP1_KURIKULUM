import React, { useState, useMemo } from 'react';
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
  Filter,
  BookOpen,
  BookMarked,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Users,
  Play,
  Pause,
  LayoutGrid,
  List
} from 'lucide-react';
import { toeicSlides, toeicParticipants } from '../services/toeicData';

const News: React.FC = () => {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [copiedKatalogLink, setCopiedKatalogLink] = useState(false);

  // TOEIC Tahap 3 State
  const [toeicSlide, setToeicSlide] = useState(0);
  const [toeicSearchQuery, setToeicSearchQuery] = useState('');
  const [toeicRoleFilter, setToeicRoleFilter] = useState<'Semua' | 'Murid' | 'Guru'>('Semua');
  const [toeicLabFilter, setToeicLabFilter] = useState<string>('Semua');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [participantView, setParticipantView] = useState<'cards' | 'table'>('cards');

  // Auto-play slideshow effect
  React.useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setToeicSlide((prev) => (prev + 1) % toeicSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Current TOEIC slide index in Zoom modal
  const currentToeicSlideIndex = useMemo(() => {
    if (!zoomImageUrl) return -1;
    return toeicSlides.findIndex(s => s.imageUrl === zoomImageUrl);
  }, [zoomImageUrl]);

  const handleModalPrevSlide = () => {
    if (currentToeicSlideIndex === -1) return;
    const prevIdx = (currentToeicSlideIndex - 1 + toeicSlides.length) % toeicSlides.length;
    setToeicSlide(prevIdx);
    setZoomImageUrl(toeicSlides[prevIdx].imageUrl);
    setZoomScale(1);
  };

  const handleModalNextSlide = () => {
    if (currentToeicSlideIndex === -1) return;
    const nextIdx = (currentToeicSlideIndex + 1) % toeicSlides.length;
    setToeicSlide(nextIdx);
    setZoomImageUrl(toeicSlides[nextIdx].imageUrl);
    setZoomScale(1);
  };

  // Filtered TOEIC Participants for Real-Time Search & Verification
  const filteredToeicParticipants = useMemo(() => {
    return toeicParticipants.filter(p => {
      const matchesSearch = 
        toeicSearchQuery.trim() === '' ||
        p.name.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        p.lab.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        p.hari.toLowerCase().includes(toeicSearchQuery.toLowerCase()) ||
        `sesi ${p.sesi}`.toLowerCase().includes(toeicSearchQuery.toLowerCase());
      
      const matchesRole = toeicRoleFilter === 'Semua' || p.role === toeicRoleFilter;
      const matchesLab = toeicLabFilter === 'Semua' || p.lab === toeicLabFilter;

      return matchesSearch && matchesRole && matchesLab;
    });
  }, [toeicSearchQuery, toeicRoleFilter, toeicLabFilter]);

  // TKA Data
  const [tkaSlide, setTkaSlide] = useState(0);
  const tkaImages = [
    {
      title: "Jadwal KBM & Simulasi TKA Kelas XII",
      session: "Lembar 1 - Matriks Jadwal",
      desc: "Distribusi jadwal simulasi TKA per hari dan jam pelajaran",
      url: "https://drive.google.com/thumbnail?id=1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od&sz=w1600"
    },
    {
      title: "Daftar Kode Pengajar & Guru Piket",
      session: "Lembar 2 - Lampiran Pengajar",
      desc: "Daftar guru pendamping dan kode pengampu mata pelajaran",
      url: "https://drive.google.com/thumbnail?id=1MtVR3nnr0g8nkLo2kZQc_afBTspy8qOG&sz=w1600"
    }
  ];

  const handleZoom = (url: string) => {
    setZoomImageUrl(url);
    setZoomScale(1);
  };

  const handlePrintImage = (imageUrl: string, title: string) => {
    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);

    const doc = printFrame.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title} - SMK TANJUNG PRIOK 1</title>
            <style>
              @page { size: landscape; margin: 5mm; }
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: #fff; }
              img { width: 100%; height: auto; max-height: 98vh; object-contain: fit; }
            </style>
          </head>
          <body>
            <img src="${imageUrl}" alt="${title}" />
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
        title="Warta Kurikulum: Pelaksanaan Seleksi TOEIC Tahap 3 Murid & Guru | SMK TANJUNG PRIOK 1"
        description="Pengumuman resmi Pelaksanaan Seleksi TOEIC Tahap 3 untuk Murid Kelas XII (15 Oktober 2026) dan Bapak/Ibu Guru (16 Oktober 2026) SMK Tanjung Priok 1 Jakarta Utara berdasarkan Surat Edaran No: 09Rev/SE/SMKTP01/X/2026."
        keywords="TOEIC Tahap 3 SMK Tanjung Priok 1, Seleksi TOEIC Murid Guru, Surat Edaran 09Rev/SE/SMKTP01/X/2026, Jadwal TOEIC 15 16 Oktober 2026, Warta Kurikulum SMK Tanjung Priok 1, Katalog Buku Kemendikdasmen"
        canonical="https://tp1kurikulum.my.id/warta"
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-10 md:space-y-12"
        >
          {/* Breadcrumb Navigation & Fast Jump Pills */}
          <header className="space-y-3">
            <Link to="/" className="inline-flex items-center text-[#3b82f6] font-black hover:underline group text-xs md:text-sm uppercase tracking-widest">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 transform group-hover:-translate-x-1 transition" />
              Kembali ke Beranda
            </Link>

            {/* Quick In-Page Jump Anchor Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Pilih Warta:</span>
              </span>
              <a 
                href="#toeic" 
                className="bg-blue-600 text-white font-extrabold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:bg-blue-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>🎧 TOEIC Tahap 3: Murid &amp; Guru (15-16 Okt)</span>
              </a>
              <a 
                href="#katalog-buku" 
                className="bg-teal-600 text-white font-extrabold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:bg-teal-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📚 Akses Katalog Buku Kemendikdasmen</span>
              </a>
              <a 
                href="#tka" 
                className="bg-white text-slate-700 border border-slate-200 font-bold px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>💻 Simulasi TKA</span>
              </a>
              <a 
                href="#ukk" 
                className="bg-white text-slate-700 border border-slate-200 font-bold px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>⚙️ UKK Mandiri</span>
              </a>
            </div>
          </header>

          {/* =========================================================================
              FEATURED SECTION 1: PELAKSANAAN TOEIC SELEKSI TAHAP 3 UNTUK MURID & GURU (15 - 16 OKTOBER 2026)
             ========================================================================= */}
          <article id="toeic" className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-200/80 scroll-mt-24">
            {/* Header Banner - High-contrast Clean Navy/Blue Gradient with Pure White Title */}
            <header className="bg-gradient-to-br from-[#071328] via-[#0f2757] to-[#1e3a8a] p-6 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <Headphones className="w-80 h-80 text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>SELEKSI TAHAP 3 • RESMI</span>
                  </span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>15 – 16 OKTOBER 2026</span>
                  </span>
                  <span className="bg-purple-500/20 backdrop-blur-md text-purple-200 border border-purple-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-300" />
                    <span>MURID KELAS XII &amp; GURU</span>
                  </span>
                </div>

                {/* Pure White Clean Title as requested */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  PELAKSANAAN TOEIC SELEKSI TAHAP 3 UNTUK MURID &amp; GURU YANG DILAKSANAKAN PADA 15 - 16 OKTOBER 2026 (DAFTAR TERLAMPIR)
                </h1>

                <p className="text-blue-100/90 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl font-medium">
                  Surat Edaran resmi Nomor: <strong className="text-white">09Rev/SE/SMKTP01/X/2026</strong>. Tes kemampuan bahasa Inggris berskala internasional (TOEIC) diselenggarakan secara luring di Laboratorium Komputer SMK Tanjung Priok 1 Jakarta untuk Murid Kelas XII dan Bapak/Ibu Guru.
                </p>

                {/* Mandatory Requirements Alert Box */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 bg-amber-500/20 border border-amber-300/40 rounded-2xl p-3.5 sm:px-5 sm:py-3.5 backdrop-blur-md text-amber-200 text-xs md:text-sm font-semibold">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-300 flex-shrink-0" />
                      <span className="font-black text-amber-100 uppercase tracking-wide">Peringatan Penting:</span>
                    </div>
                    <div className="text-amber-100 leading-snug">
                      Siswa &amp; Guru <strong>wajib membawa earphone/headset pribadi</strong> yang dapat berfungsi dengan baik untuk sesi <em>Listening</em> &amp; hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Content Body */}
            <div className="p-5 md:p-10 lg:p-12 space-y-10">
              {/* 4 Essential Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Siswa Kelas XII */}
                <div className="bg-blue-50/80 border border-blue-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Jadwal Siswa XII</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Kamis, 15 Okt 2026</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sesi 1: 08.00–10.00 WIB &amp; Sesi 2: 10.30–12.30 WIB (69 Murid di Lab 1, 2, 4 DKV &amp; Lab TL).
                  </p>
                </div>

                {/* Card 2: Bapak / Ibu Guru */}
                <div className="bg-purple-50/80 border border-purple-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3 shadow-md shadow-purple-500/20">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 block">Jadwal Guru</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Jum'at, 16 Okt 2026</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sesi 3: 13.00–15.30 WIB setelah KBM Khusus (29 Guru di Lab 1 &amp; Lab 2 DKV).
                  </p>
                </div>

                {/* Card 3: Perlengkapan Wajib */}
                <div className="bg-rose-50/80 border border-rose-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 shadow-md shadow-rose-500/20">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">Perlengkapan Wajib</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">Earphone Pribadi</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Wajib membawa earphone/headset kabel pribadi yang berfungsi baik untuk sesi tes Listening.
                  </p>
                </div>

                {/* Card 4: Surat Edaran Resmi */}
                <div className="bg-emerald-50/80 border border-emerald-200/70 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">Dokumen Resmi</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">SE No. 09Rev</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    09Rev/SE/SMKTP01/X/2026 ditandatangani Kepala Sekolah Andri Susanto, ST.
                  </p>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  TOEIC TAHAP 3 SLIDE SHOW: SURAT EDARAN SE9REV & 7 LEMBAR DAFTAR PESERTA
                 ------------------------------------------------------------- */}
              <div className="space-y-4 pt-2">
                {/* Control bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#0f172a] flex items-center gap-2">
                      <Layers className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      <span>Slide Show Dokumen Resmi &amp; Daftar Peserta Tahap 3</span>
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                      Dimulai gambar <strong>SE9REV_TOEIC GURU DAN MURID</strong>, lalu daftar peserta murid kelas XII per laboratorium &amp; sesi, dan daftar guru.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className={`inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition duration-300 cursor-pointer active:scale-95 touch-manipulation ${
                        isAutoPlay ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' : 'bg-slate-800 hover:bg-slate-700 text-white shadow-md'
                      }`}
                      title={isAutoPlay ? 'Hentikan putar otomatis' : 'Putar slideshow otomatis'}
                    >
                      {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-blue-400" />}
                      <span>{isAutoPlay ? 'Jeda Slide' : 'Auto Putar'}</span>
                    </button>

                    <button 
                      onClick={() => handleZoom(toeicSlides[toeicSlide].imageUrl)}
                      className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shadow-blue-500/25 transition duration-300 cursor-pointer active:scale-95 touch-manipulation"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>Zoom Resolusi Tinggi</span>
                    </button>

                    <button 
                      onClick={() => handlePrintImage(toeicSlides[toeicSlide].imageUrl, toeicSlides[toeicSlide].title)}
                      className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer active:scale-95 touch-manipulation"
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
                      <span className={`font-black px-2.5 py-0.5 md:py-1 rounded-lg text-[10px] md:text-xs uppercase tracking-wider ${
                        toeicSlide === 0
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : toeicSlides[toeicSlide].role === 'Guru' 
                          ? 'bg-purple-400 text-purple-950' 
                          : 'bg-blue-400 text-blue-950'
                      }`}>
                        {toeicSlide === 0 ? 'SE9REV_TOEIC GURU DAN MURID' : toeicSlides[toeicSlide].badge}
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

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleZoom(toeicSlides[toeicSlide].imageUrl)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-blue-400 hover:text-white transition text-xs font-bold flex items-center gap-1 cursor-pointer"
                        title="Perbesar Lembar Ini"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">Zoom</span>
                      </button>
                      <span className="text-[11px] md:text-xs font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">
                        Lembar {toeicSlide + 1} / {toeicSlides.length}
                      </span>
                    </div>
                  </div>

                  {/* Main Interactive Document Stage with Touch Swipe */}
                  <div 
                    className="bg-slate-950 rounded-b-2xl md:rounded-b-3xl overflow-hidden relative shadow-2xl cursor-zoom-in border-x border-b border-slate-900 group select-none touch-pan-y"
                    onClick={() => handleZoom(toeicSlides[toeicSlide].imageUrl)}
                  >
                    <div className="aspect-[1/1.41] sm:aspect-[1/1.38] md:aspect-[16/11] max-h-[78vh] flex items-center justify-center p-2 sm:p-4 bg-slate-950 overflow-hidden">
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
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95 touch-manipulation"
                      aria-label="Lembar Sebelumnya"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setToeicSlide((prev) => (prev + 1) % toeicSlides.length);
                      }}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-xl backdrop-blur-md transition-all cursor-pointer z-20 group-hover:scale-105 active:scale-95 touch-manipulation"
                      aria-label="Lembar Selanjutnya"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Fast Mobile Dropdown Selector (1-Tap Selection) */}
                  <div className="sm:hidden pt-3">
                    <label className="text-[11px] font-black text-slate-600 uppercase tracking-wider block mb-1">
                      📄 Lompat Langsung ke Dokumen (1 s.d 8):
                    </label>
                    <select
                      value={toeicSlide}
                      onChange={(e) => setToeicSlide(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-blue-500 rounded-xl text-xs font-black text-slate-800 shadow-sm focus:outline-none"
                    >
                      {toeicSlides.map((slide, idx) => (
                        <option key={slide.id} value={idx}>
                          Lembar {idx + 1}: {idx === 0 ? 'SE9REV_TOEIC GURU DAN MURID' : slide.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Thumbnail / Page Jump Selector Tabs (8 Lembar) */}
                  <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar">
                    {toeicSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setToeicSlide(idx)}
                        className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 touch-manipulation ${
                          toeicSlide === idx
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102 ring-2 ring-blue-300'
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                          toeicSlide === idx ? 'bg-white text-blue-600 font-black' : 'bg-black/10'
                        }`}>
                          {idx + 1}
                        </span>
                        <span>{idx === 0 ? 'SE9REV_TOEIC GURU DAN MURID' : slide.badge}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Slide Description Note */}
                  <div className="p-3.5 bg-slate-100 rounded-2xl text-slate-700 text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{toeicSlides[toeicSlide].description}</span>
                    </div>
                    <span className="font-bold text-blue-700 shrink-0 hidden sm:inline">
                      {toeicSlides[toeicSlide].session}
                    </span>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  INTERACTIVE PARTICIPANT FINDER (MURID & GURU) - FAST SEARCH
                 ------------------------------------------------------------- */}
              <div className="pt-6 border-t border-slate-200/80 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                      <Search className="w-3.5 h-3.5" />
                      <span>Cek Data Peserta TOEIC Tahap 3 (Daftar Terlampir)</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">
                      Pencarian Peserta Murid &amp; Guru
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                      Ketik nama siswa atau guru untuk melihat ruangan lab, tanggal pelaksanaan, dan sesi yang ditentukan.
                    </p>
                  </div>

                  {/* View Mode Toggle: Cards vs Table */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={() => setParticipantView('cards')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer touch-manipulation ${
                        participantView === 'cards'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>Kartu (Mobile)</span>
                    </button>
                    <button
                      onClick={() => setParticipantView('table')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer touch-manipulation ${
                        participantView === 'table'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                      <span>Tabel Detail</span>
                    </button>
                  </div>
                </div>

                {/* Filter and Search Bar Controls */}
                <div className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-200/80 space-y-3.5">
                  {/* Quick Role Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">
                      Kategori:
                    </span>
                    {(['Semua', 'Murid', 'Guru'] as const).map((role) => (
                      <button
                        key={role}
                        onClick={() => setToeicRoleFilter(role)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer touch-manipulation ${
                          toeicRoleFilter === role
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {role === 'Semua' ? 'Semua (98)' : role === 'Murid' ? 'Murid Kelas XII (69)' : 'Bapak/Ibu Guru (29)'}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Live Search Input */}
                    <div className="relative md:col-span-2">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="search"
                        value={toeicSearchQuery}
                        onChange={(e) => setToeicSearchQuery(e.target.value)}
                        placeholder="Ketik nama murid atau bapak/ibu guru..."
                        className="w-full pl-10 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      />
                      {toeicSearchQuery && (
                        <button
                          onClick={() => setToeicSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                          title="Hapus pencarian"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Lab Room Filter */}
                    <div>
                      <select
                        value={toeicLabFilter}
                        onChange={(e) => setToeicLabFilter(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="Semua">Semua Laboratorium (4 Lab)</option>
                        <option value="LAB 1 DKV">LAB 1 DKV</option>
                        <option value="LAB 2 DKV">LAB 2 DKV</option>
                        <option value="LAB 4 DKV">LAB 4 DKV</option>
                        <option value="LAB TL">LAB Teknik Logistik (TL)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-1">
                    <span>Hasil pencarian: <strong className="text-blue-600 font-black">{filteredToeicParticipants.length}</strong> peserta ditemukan</span>
                    {(toeicSearchQuery || toeicRoleFilter !== 'Semua' || toeicLabFilter !== 'Semua') && (
                      <button
                        onClick={() => {
                          setToeicSearchQuery('');
                          setToeicRoleFilter('Semua');
                          setToeicLabFilter('Semua');
                        }}
                        className="text-rose-600 font-bold hover:underline cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    )}
                  </div>
                </div>

                {/* Participant Results: Cards View (Default on Smartphone) */}
                {participantView === 'cards' && (
                  <div>
                    {filteredToeicParticipants.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {filteredToeicParticipants.map((p, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all hover:shadow-md space-y-2.5"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                                #{p.no}
                              </span>
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                p.role === 'Guru' 
                                  ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                                  : 'bg-blue-100 text-blue-800 border border-blue-200'
                              }`}>
                                {p.role}
                              </span>
                            </div>
                            <h4 className="font-black text-slate-900 text-sm leading-snug">
                              {p.name}
                            </h4>
                            <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100 font-medium">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Ruangan:</span>
                                <span className="font-black text-blue-600">{p.lab}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Jadwal Sesi:</span>
                                <span className="font-bold text-slate-800">Sesi {p.sesi} ({p.waktu})</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Waktu Tes:</span>
                                <span className="font-medium text-slate-600">{p.hari}, {p.tanggal}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-400 font-medium">
                        Tidak ada peserta yang cocok dengan kata kunci &quot;{toeicSearchQuery}&quot;
                      </div>
                    )}
                  </div>
                )}

                {/* Participant Results: Table View */}
                {participantView === 'table' && (
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead className="bg-slate-900 text-white sticky top-0 z-10 text-[11px] md:text-xs uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4 font-bold">No.</th>
                            <th className="py-3 px-4 font-bold">Nama Peserta</th>
                            <th className="py-3 px-4 font-bold">Kategori</th>
                            <th className="py-3 px-4 font-bold">Ruang Lab</th>
                            <th className="py-3 px-4 font-bold">Sesi &amp; Waktu</th>
                            <th className="py-3 px-4 font-bold">Hari, Tanggal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredToeicParticipants.length > 0 ? (
                            filteredToeicParticipants.map((p, idx) => (
                              <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4 font-mono text-slate-400 font-bold">
                                  {p.no}
                                </td>
                                <td className="py-3 px-4 font-bold text-slate-900">
                                  {p.name}
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                    p.role === 'Guru' 
                                      ? 'bg-purple-100 text-purple-800' 
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {p.role}
                                  </span>
                                </td>
                                <td className="py-3 px-4 font-bold text-blue-600">
                                  {p.lab}
                                </td>
                                <td className="py-3 px-4 font-semibold text-slate-700">
                                  Sesi {p.sesi} ({p.waktu})
                                </td>
                                <td className="py-3 px-4 text-slate-500 font-medium">
                                  {p.hari}, {p.tanggal}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={6} className="py-12 text-center text-slate-400 font-medium">
                                Tidak ada peserta yang cocok dengan kata kunci &quot;{toeicSearchQuery}&quot;
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Footer Navigation Note */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                  <span>Catatan: Pastikan datang 15 menit sebelum sesi dimulai.</span>
                  <button
                    onClick={() => {
                      setToeicSlide(0);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="text-blue-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Kembali ke Surat Edaran (Slide 1)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              FEATURED SECTION 2: AKSES KATALOG BUKU KEMENDIKDASMEN RI
             ========================================================================= */}
          <article id="katalog-buku" className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-teal-200/80 scroll-mt-24">
            {/* Header Banner with High-Contrast Emerald & Teal Theme */}
            <header className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a] p-6 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <BookMarked className="w-80 h-80 text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>SUMBER BELAJAR RESMI</span>
                  </span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 border border-teal-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-teal-300" />
                    <span>KEMENDIKDASMEN RI</span>
                  </span>
                  <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>100% GRATIS &amp; LEGAL</span>
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Akses Katalog Buku Kurikulum Merdeka Kemendikdasmen RI
                </h2>

                <p className="text-teal-100/90 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl font-medium">
                  Portal resmi Sistem Informasi Perbukuan Kementerian Pendidikan Dasar dan Menengah RI. Akses dan unduh gratis ribuan <strong>Buku Teks Utama Siswa</strong>, <strong>Buku Panduan Guru</strong>, dan <strong>Buku Nonteks Pengayaan</strong> terverifikasi untuk jenjang SMK (Fase E &amp; F), SMA, SMP, dan SD.
                </p>

                {/* Primary Action Buttons in Header */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="https://buku.kemendikdasmen.go.id/katalog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black px-6 py-3.5 rounded-2xl text-xs md:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-teal-500/25 active:scale-95 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-slate-950" />
                    <span>AKSES KATALOG BUKU</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("https://buku.kemendikdasmen.go.id/katalog").then(() => {
                        setCopiedKatalogLink(true);
                        setTimeout(() => setCopiedKatalogLink(false), 2500);
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-3.5 rounded-2xl text-xs md:text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedKatalogLink ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 font-black">Tautan Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-teal-300" />
                        <span>Salin Tautan Resmi</span>
                      </>
                    )}
                  </button>

                  <Link
                    to="/tautan"
                    className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white font-bold text-xs md:text-sm px-3 py-2 transition"
                  >
                    <span>Lihat di Halaman Tautan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </header>

            <div className="p-6 md:p-12 space-y-10">
              {/* Feature 3 Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-teal-50/80 to-emerald-50/50 p-6 md:p-8 rounded-3xl border border-teal-100/80 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-5 shadow-md shadow-teal-600/20">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full mb-3 inline-block">
                      Untuk Siswa SMK
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mb-2">Buku Teks Siswa (Fase E &amp; F)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Buku teks utama resmi untuk Kelas X (Fase E) dan Kelas XI-XII (Fase F) mencakup mata pelajaran umum serta konsentrasi kejuruan Pemesinan Kapal, Otomotif TKRO, DKV, dan Teknik Logistik.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-teal-100 text-teal-700 font-bold text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Format PDF Full Version</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 md:p-8 rounded-3xl border border-blue-100/80 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-600/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full mb-3 inline-block">
                      Untuk Pendidik &amp; Guru
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mb-2">Buku Panduan Guru</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Pedoman mengajar resmi memuat strategi pembelajaran berdiferensiasi, Capaian Pembelajaran (CP), Alur Tujuan Pembelajaran (ATP), dan instrumen asesmen Kurikulum Merdeka.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-blue-100 text-blue-700 font-bold text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Panduan Modul Ajar</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 p-6 md:p-8 rounded-3xl border border-amber-100/80 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-5 shadow-md shadow-amber-600/20">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full mb-3 inline-block">
                      Literasi Vokasi
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mb-2">Buku Nonteks &amp; Pengayaan</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Buku bacaan interaktif penguat karakter Profil Pelajar Pancasila, wawasan keselamatan kerja K3, budaya industri, dan keterampilan teknologi abad ke-21.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-amber-100 text-amber-700 font-bold text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Bebas Akses Tanpa Registrasi</span>
                  </div>
                </div>
              </div>

              {/* Step by Step Guide Container */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block font-bold">
                      Panduan Praktis Smartphone &amp; Komputer
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                      Cara Akses &amp; Unduh Buku Kurikulum Merdeka
                    </h3>
                  </div>
                  <a
                    href="https://buku.kemendikdasmen.go.id/katalog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition self-start sm:self-auto shrink-0 cursor-pointer"
                  >
                    <span>Kunjungi Portal Resmi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                      1
                    </div>
                    <div className="font-bold text-white text-sm mb-1">Buka Katalog</div>
                    <div className="text-xs text-slate-300 leading-relaxed font-mono truncate">
                      buku.kemendikdasmen.go.id/katalog
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                      2
                    </div>
                    <div className="font-bold text-white text-sm mb-1">Pilih Jenjang SMK</div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Filter ke jenjang <strong>SMK</strong> dan tentukan fase belajar (Fase E atau Fase F).
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                      3
                    </div>
                    <div className="font-bold text-white text-sm mb-1">Pilih Mata Pelajaran</div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Cari buku mapel umum atau dasar kejuruan (DKV, TKRO, TPK, Logistik).
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                      4
                    </div>
                    <div className="font-bold text-white text-sm mb-1">Unduh Dokumen PDF</div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Klik <strong>&quot;Unduh PDF&quot;</strong> atau <strong>&quot;Baca Online&quot;</strong> langsung dari HP.
                    </div>
                  </div>
                </div>
              </div>

              {/* Kurikulum Team Notice */}
              <div className="p-4 md:p-5 bg-teal-50 rounded-2xl border border-teal-200/80 flex items-start gap-3.5 text-teal-900">
                <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm leading-relaxed">
                  <span className="font-black block uppercase tracking-wide text-teal-950 mb-0.5">
                    Himbauan Tim Kurikulum SMK Tanjung Priok 1:
                  </span>
                  Seluruh peserta didik dihimbau mengunduh buku teks digital sesuai jadwal KBM aktif untuk menunjang pembelajaran mandiri di rumah dan persiapan menghadapi asesmen berkala.
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              TKA SIMULATION SECTION - KELAS XII
             ========================================================================= */}
          <article id="tka" className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-100/80 scroll-mt-24">
            <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <FileText className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-400 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>AGENDA AKADEMIK KELAS XII</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
                    SIMULASI TKA 2026
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight text-white">
                  Jadwal KBM &amp; Simulasi TKA Kelas XII
                </h2>
                
                <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed font-medium">
                  Pengumuman resmi pembagian jadwal pembelajaran KBM aktif dan rangkaian agenda Simulasi Tes Kemampuan Akademik (TKA) bagi seluruh siswa Kelas XII semua konsentrasi keahlian.
                </p>
              </div>
            </header>

            <div className="p-8 md:p-12 space-y-8">
              {/* TKA Visual Slider */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-black text-[#0f172a] flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      <span>{tkaImages[tkaSlide].title}</span>
                    </h3>
                    <p className="text-gray-500 text-sm">{tkaImages[tkaSlide].desc}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleZoom(tkaImages[tkaSlide].url)}
                      className="inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4 text-blue-400" />
                      <span>Perbesar</span>
                    </button>

                    <button 
                      onClick={() => handlePrintImage(tkaImages[tkaSlide].url, tkaImages[tkaSlide].title)}
                      className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-300 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Cetak</span>
                    </button>
                  </div>
                </div>

                {/* TKA Slide Container */}
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in max-w-4xl mx-auto" onClick={() => handleZoom(tkaImages[tkaSlide].url)}>
                  <div className="aspect-[16/10] max-h-[60vh] flex items-center justify-center p-4">
                    <img 
                      src={tkaImages[tkaSlide].url} 
                      alt={tkaImages[tkaSlide].title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Left / Right Nav */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev === 0 ? tkaImages.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setTkaSlide((prev) => (prev === tkaImages.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg backdrop-blur-md transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* TKA Thumbs */}
                <div className="flex justify-center space-x-2 pt-2">
                  {tkaImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTkaSlide(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        tkaSlide === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              UKK ANNOUNCEMENT SECTION
             ========================================================================= */}
          <article id="ukk" className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-blue-100 scroll-mt-24">
            <header className="bg-gradient-to-r from-[#0f172a] to-[#3b82f6] p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">Info Kurikulum</span>
                <span className="text-white/60">•</span>
                <span className="text-blue-200 text-xs font-semibold">Tahun Ajaran 2026/2027</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white">Pelaksanaan Uji Kompetensi Keahlian (UKK) Mandiri</h2>
              <p className="text-blue-100 text-sm mt-2">Panduan persiapan teknis bagi peserta didik Kelas XII untuk 4 konsentrasi keahlian.</p>
            </header>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Uji Kompetensi Keahlian (UKK) Mandiri SMK Tanjung Priok 1 merupakan indikator utama pencapaian standar kompetensi lulusan vokasi yang diselaraskan dengan kebutuhan dunia usaha dan dunia industri (DUDI).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-[#0f172a] text-sm mb-1">Standarisasi Penguji</h4>
                  <p className="text-xs text-gray-500">Dinilai langsung oleh asesor internal sekolah dan asesor eksternal perwakilan industri mitra resmi.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-[#0f172a] text-sm mb-1">Sertifikasi BNSP</h4>
                  <p className="text-xs text-gray-500">Peserta yang kompeten berhak mendapatkan sertifikat berlisensi Badan Nasional Sertifikasi Profesi (BNSP).</p>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>

      {/* Global Image Zoom Lightbox Modal */}
      {zoomImageUrl && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 md:p-6 select-none"
          onClick={() => setZoomImageUrl(null)}
        >
          {/* Top Bar with Controls */}
          <div className="flex flex-wrap items-center justify-between text-white pb-3 border-b border-white/10 z-20 gap-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-bold bg-blue-600 px-3 py-1 rounded-lg">
                Preview Dokumen Resolusi Tinggi
              </span>
              {currentToeicSlideIndex !== -1 && (
                <span className="text-xs text-amber-300 font-black bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg hidden sm:inline">
                  Lembar {currentToeicSlideIndex + 1} / {toeicSlides.length}
                </span>
              )}
              <span className="text-xs text-slate-400 hidden md:inline">
                Skala: {Math.round(zoomScale * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {currentToeicSlideIndex !== -1 && (
                <>
                  <button
                    onClick={handleModalPrevSlide}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95 touch-manipulation"
                    title="Lembar Sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                  <button
                    onClick={handleModalNextSlide}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95 touch-manipulation"
                    title="Lembar Selanjutnya"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <button
                onClick={() => setZoomScale((prev) => Math.max(0.5, prev - 0.25))}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer active:scale-95 touch-manipulation"
                title="Perkecil"
              >
                - Zoom
              </button>
              <button
                onClick={() => setZoomScale(1)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer active:scale-95 touch-manipulation"
                title="Reset Skala 100%"
              >
                100%
              </button>
              <button
                onClick={() => setZoomScale((prev) => Math.min(3, prev + 0.25))}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer active:scale-95 touch-manipulation"
                title="Perbesar"
              >
                + Zoom
              </button>
              <button
                onClick={() => handlePrintImage(zoomImageUrl, "Dokumen Resmi")}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95 touch-manipulation"
                title="Cetak Dokumen"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cetak</span>
              </button>
              <button
                onClick={() => setZoomImageUrl(null)}
                className="p-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition ml-1 sm:ml-2 cursor-pointer active:scale-95 touch-manipulation"
                title="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Zoomable Image Container with Pan / Scroll */}
          <div 
            className="flex-1 flex items-center justify-center overflow-auto p-2 cursor-grab active:cursor-grabbing relative"
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={() => setZoomScale(prev => prev === 1 ? 2 : 1)}
          >
            {/* Modal Quick Left / Right Nav Overlays for fast tapping */}
            {currentToeicSlideIndex !== -1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModalPrevSlide();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl backdrop-blur-md transition z-30 cursor-pointer active:scale-95 touch-manipulation"
                  aria-label="Lembar Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModalNextSlide();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl backdrop-blur-md transition z-30 cursor-pointer active:scale-95 touch-manipulation"
                  aria-label="Lembar Selanjutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <img 
              src={zoomImageUrl} 
              alt="Zoomed document" 
              style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center' }}
              className="max-h-[85vh] max-w-full object-contain transition-transform duration-200 select-none shadow-2xl rounded-lg"
            />
          </div>

          {/* Bottom Hint */}
          <div className="text-center text-slate-400 text-xs py-2 border-t border-white/10 pointer-events-none flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
            <span>🔍 Ketuk 2x (double-tap) atau gunakan tombol zoom di atas untuk memperbesar.</span>
            {currentToeicSlideIndex !== -1 && (
              <span className="text-blue-400 font-bold">Gunakan panah kiri/kanan untuk berganti lembar.</span>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default News;
