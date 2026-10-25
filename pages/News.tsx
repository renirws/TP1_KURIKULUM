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
import { tkaAnbkDocument, tkaAnbkSchedule, proktorList, teknisiList } from '../services/tkaAnbkScheduleData';
import { tkaSlides, tkaStudents, tkaSummaryStats, TKA_PDF_DOCUMENT_URL, TKA_SCHEDULE_IMAGE_URL } from '../services/tkaData';

const News: React.FC = () => {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [copiedKatalogLink, setCopiedKatalogLink] = useState(false);
  const [copiedUsername, setCopiedUsername] = useState<string | null>(null);

  // Tab State for Main TKA - ANBK Module: 'jadwal' | 'peserta' | 'dokumen'
  const [anbkActiveTab, setAnbkActiveTab] = useState<'jadwal' | 'peserta' | 'dokumen'>('jadwal');
  const [docPreviewType, setDocPreviewType] = useState<'scan' | 'vector'>('scan');

  // Quick lookup query for instant student checking
  const [quickLookupQuery, setQuickLookupQuery] = useState('');

  // TKA - ANBK 2026-2027 Schedule State
  const [selectedScheduleDay, setSelectedScheduleDay] = useState<string>('semua');
  const [selectedScheduleShift, setSelectedScheduleShift] = useState<string>('semua');
  const [scheduleViewMode, setScheduleViewMode] = useState<'cards' | 'table'>('cards');
  const [scheduleSearchQuery, setScheduleSearchQuery] = useState('');

  // TKA (Tes Kemampuan Akademik 26 - 27 Oktober 2026) State
  const [tkaSlide, setTkaSlide] = useState(0);
  const [tkaSearchQuery, setTkaSearchQuery] = useState('');
  const [tkaLabFilter, setTkaLabFilter] = useState<string>('Semua');
  const [tkaSesiFilter, setTkaSesiFilter] = useState<string>('Semua');
  const [isTkaAutoPlay, setIsTkaAutoPlay] = useState(false);
  const [tkaView, setTkaView] = useState<'cards' | 'table'>('cards');
  const [tkaInSliderZoom, setTkaInSliderZoom] = useState(1);

  // Auto-synchronize tab with browser URL hash for instant deep linking
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#tka' || hash === '#tka-peserta' || hash === '#tka-search') {
        setAnbkActiveTab('peserta');
        setTimeout(() => {
          const el = document.getElementById('tka-peserta') || document.getElementById('tab-peserta-content');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash === '#tka-dokumen' || hash === '#tka-slider') {
        setAnbkActiveTab('dokumen');
        setTimeout(() => {
          document.getElementById('tka-slider-box')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash === '#tka-anbk') {
        setAnbkActiveTab('jadwal');
        setTimeout(() => {
          document.getElementById('tka-anbk')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Auto-play slideshow effect for TKA
  React.useEffect(() => {
    if (!isTkaAutoPlay) return;
    const interval = setInterval(() => {
      setTkaSlide((prev) => (prev + 1) % tkaSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isTkaAutoPlay]);

  // Current TKA slide index in Zoom modal
  const currentTkaSlideIndex = useMemo(() => {
    if (!zoomImageUrl) return -1;
    return tkaSlides.findIndex(s => s.imageUrl === zoomImageUrl || s.scanImageUrl === zoomImageUrl);
  }, [zoomImageUrl]);

  const handleModalPrevTkaSlide = () => {
    if (currentTkaSlideIndex === -1) return;
    const prevIdx = (currentTkaSlideIndex - 1 + tkaSlides.length) % tkaSlides.length;
    setTkaSlide(prevIdx);
    setZoomImageUrl(docPreviewType === 'scan' ? tkaSlides[prevIdx].scanImageUrl : tkaSlides[prevIdx].imageUrl);
    setZoomScale(1);
  };

  const handleModalNextTkaSlide = () => {
    if (currentTkaSlideIndex === -1) return;
    const nextIdx = (currentTkaSlideIndex + 1) % tkaSlides.length;
    setTkaSlide(nextIdx);
    setZoomImageUrl(docPreviewType === 'scan' ? tkaSlides[nextIdx].scanImageUrl : tkaSlides[nextIdx].imageUrl);
    setZoomScale(1);
  };

  const handleCopyUsername = (username: string) => {
    navigator.clipboard.writeText(username).then(() => {
      setCopiedUsername(username);
      setTimeout(() => setCopiedUsername(null), 2500);
    });
  };

  // Filtered TKA Students for Real-Time Search & Verification (< 5ms response)
  const filteredTkaStudents = useMemo(() => {
    return tkaStudents.filter(s => {
      const q = tkaSearchQuery.toLowerCase().trim();
      const matchesSearch = 
        q === '' ||
        s.name.toLowerCase().includes(q) ||
        s.username.toLowerCase().includes(q) ||
        s.lab.toLowerCase().includes(q) ||
        s.idServer.toLowerCase().includes(q) ||
        (s.proktor && s.proktor.toLowerCase().includes(q)) ||
        `sesi ${s.sesi}`.toLowerCase().includes(q);

      const matchesLab = 
        tkaLabFilter === 'Semua' || 
        s.lab === tkaLabFilter ||
        (tkaLabFilter.includes('4') && (s.lab.includes('4') || s.lab.includes('TL'))) ||
        (tkaLabFilter.includes('TL') && (s.lab.includes('4') || s.lab.includes('TL')));
      const matchesSesi = tkaSesiFilter === 'Semua' || s.sesi.toString() === tkaSesiFilter;

      return matchesSearch && matchesLab && matchesSesi;
    });
  }, [tkaSearchQuery, tkaLabFilter, tkaSesiFilter]);

  // Quick lookup top matching students (instant quick verification)
  const quickLookupResults = useMemo(() => {
    const q = quickLookupQuery.toLowerCase().trim();
    if (!q) return [];
    return tkaStudents.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.username.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [quickLookupQuery]);

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

  // Senior SEO JSON-LD Structured Data
  const newsSeoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "name": "Pelaksanaan TKA - ANBK Tahun Pelajaran 2026-2027 & Jadwal Peserta Siswa",
        "description": "Jadwal resmi Pelaksanaan TKA - ANBK 2026-2027 SMK Tanjung Priok 1 Jakarta Utara (26-29 Oktober 2026), rincian 2 shift, 4 laboratorium komputer, 104 peserta didik Kelas XII, proktor, teknisi, dan download berkas PDF asli.",
        "startDate": "2026-10-26T07:00:00+07:00",
        "endDate": "2026-10-29T11:30:00+07:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Laboratorium Komputer 1-4 SMK Tanjung Priok 1",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Mangga No.3, Lagoa, Koja",
            "addressLocality": "Jakarta Utara",
            "addressRegion": "DKI Jakarta",
            "postalCode": "14270",
            "addressCountry": "ID"
          }
        },
        "organizer": {
          "@type": "School",
          "name": "SMK TANJUNG PRIOK 1",
          "url": "https://tp1kurikulum.my.id"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://tp1kurikulum.my.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Warta Kurikulum",
            "item": "https://tp1kurikulum.my.id/warta"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Jadwal TKA - ANBK 2026-2027 & Jadwal Peserta",
            "item": "https://tp1kurikulum.my.id/warta#tka-anbk"
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "APK Kurikulum & Jadwal TKA ANBK SMK Tanjung Priok 1",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All Mobile and Desktop",
        "url": "https://tp1kurikulum.my.id/warta",
        "description": "Aplikasi Web Mobile untuk cek jadwal ujian TKA - ANBK 2026-2027, nomor peserta siswa, pembagian sesi, dan unduh dokumen resmi kurikulum."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 md:py-12">
      <SEO 
        title="Jadwal TKA - ANBK 2026-2027 & Jadwal Peserta Siswa (104 Murid) | SMK TANJUNG PRIOK 1"
        description="Jadwal resmi Pelaksanaan TKA - ANBK Tahun Pelajaran 2026-2027 & Jadwal Peserta 104 Siswa SMK Tanjung Priok 1 Jakarta Utara (26-29 Oktober 2026). Rincian 4 Lab, Shift 1 & 2, ID Server, Proktor, Teknisi, dan download berkas PDF asli."
        keywords="Jadwal TKA ANBK 2026 2027, Pelaksanaan TKA ANBK SMK Tanjung Priok 1, Jadwal Peserta TKA ANBK, Daftar Siswa TKA 26 27 Oktober 2026, Download Jadwal TKA ANBK PDF, APK Kurikulum SMK Tanjung Priok 1, Proktor Teknisi TKA ANBK, Shift TKA SMK, Warta Kurikulum Merdeka"
        canonical="https://tp1kurikulum.my.id/warta"
        schemaMarkup={newsSeoSchema}
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
                href="#tka-anbk" 
                className="bg-blue-600 text-white font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:bg-blue-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📅 Jadwal TKA - ANBK TA 2026-2027 (26-29 Okt)</span>
              </a>
              <a 
                href="#tka" 
                className="bg-indigo-600 text-white font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:bg-indigo-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>💻 Daftar Siswa, Lab &amp; Sesi TKA (7 Lembar)</span>
              </a>
              <a 
                href="#katalog-buku" 
                className="bg-teal-600 text-white font-extrabold px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm hover:bg-teal-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📚 Akses Katalog Buku Kemendikdasmen</span>
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
              FEATURED SECTION 1: PELAKSANAAN TKA - ANBK TAHUN PELAJARAN 2026-2027 (JADWAL RESMI)
             ========================================================================= */}
          <article id="tka-anbk" className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-200/80 scroll-mt-24">
            {/* Header Banner - High-contrast Clean Navy/Blue Gradient with Pure White Title */}
            <header className="bg-gradient-to-br from-[#051329] via-[#0d234d] to-[#1e3a8a] p-6 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <Calendar className="w-80 h-80 text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>JADWAL RESMI KURIKULUM • TKA - ANBK</span>
                  </span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>26 – 29 OKTOBER 2026</span>
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-md text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-300" />
                    <span>4 HARI • 2 SHIFT • 4 LAB</span>
                  </span>
                  <span className="bg-indigo-500/20 backdrop-blur-md text-indigo-200 border border-indigo-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-300" />
                    <span>SMK TANJUNG PRIOK 1</span>
                  </span>
                </div>

                {/* Pure White Clean Title as requested */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  PELAKSANAAN TKA - ANBK TAHUN PELAJARAN 2026-2027
                </h1>

                <p className="text-blue-100/90 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl font-medium">
                  Jadwal resmi pelaksanaan <strong>Tes Kemampuan Akademik (TKA)</strong> dan <strong>Asesmen Nasional Berbasis Komputer (ANBK)</strong> SMK Tanjung Priok 1 Jakarta Utara tanggal <strong>26 s.d 29 Oktober 2026</strong>. Disahkan secara resmi oleh Kepala SMK Tanjung Priok 1 (<strong className="text-white">H. Andri Susanto, ST</strong>) dan Wakil Bidang Kurikulum (<strong className="text-white">Reni Widyastuti, M.Kom</strong>) tertanggal Jakarta, 21 Oktober 2026.
                </p>

                {/* Quick Action Buttons in Banner */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setAnbkActiveTab('jadwal');
                      handleZoom(tkaAnbkDocument.imageUrl);
                    }}
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-black px-4 sm:px-5 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>ZOOM BAGAN JADWAL</span>
                  </button>

                  <button
                    onClick={() => {
                      setAnbkActiveTab('peserta');
                      const el = document.getElementById('tab-peserta-content');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 sm:px-5 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <Users className="w-4 h-4 text-slate-950" />
                    <span>JADWAL PESERTA (104 MURID)</span>
                  </button>

                  <a
                    href={TKA_PDF_DOCUMENT_URL}
                    download="DAFTAR_SISWA_TKA_ANBK_2026-2027_SMK_TANJUNG_PRIOK_1.pdf"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 sm:px-5 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer touch-manipulation"
                    title="Unduh Berkas PDF Daftar Siswa TKA ANBK (2.1 MB)"
                  >
                    <Download className="w-4 h-4" />
                    <span>UNDUH PDF RESMI</span>
                  </a>

                  <button
                    onClick={() => handlePrintImage(tkaAnbkDocument.imageUrl, tkaAnbkDocument.title)}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-4 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <Printer className="w-4 h-4" />
                    <span>CETAK / PDF</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Content Body */}
            <div className="p-4 sm:p-6 md:p-10 lg:p-12 space-y-8">
              {/* 4 Essential Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Card 1: Hari & Tanggal Pelaksanaan */}
                <div className="bg-blue-50/80 border border-blue-200/70 p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-500/20">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Waktu Pelaksanaan</span>
                    <h4 className="text-base font-black text-slate-900 mt-1">26 – 29 Okt 2026</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      4 hari berturut-turut (Senin s.d Kamis) meliputi 4 rumpun mata uji dan asesmen karakter.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-blue-200/60 text-[11px] font-bold text-blue-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>4 Hari Penuh</span>
                  </div>
                </div>

                {/* Card 2: Pembagian Shift */}
                <div className="bg-indigo-50/80 border border-indigo-200/70 p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-md shadow-indigo-500/20">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">Pembagian Shift</span>
                    <h4 className="text-base font-black text-slate-900 mt-1">Shift I &amp; Shift II</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Shift I: 07.00–09.00 WIB (4 Lab) &bull; Shift II: 09.30–11.30 WIB (3 Lab).
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-indigo-200/60 text-[11px] font-bold text-indigo-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>120 Menit / Shift</span>
                  </div>
                </div>

                {/* Card 3: Laboratorium Komputer */}
                <div className="bg-emerald-50/80 border border-emerald-200/70 p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">Ruang Laboratorium</span>
                    <h4 className="text-base font-black text-slate-900 mt-1">4 Lab Komputer</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Lab 1, Lab 2, Lab 3, dan Lab 4 dengan masing-masing 1 Proktor pengawas ruang.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>4 Proktor &amp; 2 Teknisi</span>
                  </div>
                </div>

                {/* Card 4: Peserta Terdaftar (Dari Dokumen Terlampir) */}
                <div className="bg-purple-50/80 border border-purple-200/70 p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3 shadow-md shadow-purple-500/20">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 block">Peserta Terdaftar</span>
                    <h4 className="text-base font-black text-slate-900 mt-1">104 Murid (7 Lembar)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Sesi 1: 60 murid &bull; Sesi 2: 44 murid lengkap dengan username &amp; ID server.
                    </p>
                  </div>
                  <button
                    onClick={() => setAnbkActiveTab('peserta')}
                    className="mt-3 pt-2 border-t border-purple-200/60 text-[11px] font-black text-purple-700 flex items-center justify-between hover:text-purple-900 cursor-pointer"
                  >
                    <span>Buka Rincian Siswa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  INSTANT SMARTPHONE QUICK STUDENT LOOKUP (< 5ms RESPONSE)
                 ------------------------------------------------------------- */}
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white border border-blue-900/50 shadow-xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                      ⚡
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-white">
                        Cek Cepat Jadwal Siswa di Smartphone
                      </h3>
                      <p className="text-[11px] sm:text-xs text-blue-200 font-medium">
                        Ketik nama lengkap atau nomor username Anda untuk mengetahui Lab, Sesi, dan Proktor seketika.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300 font-mono self-start sm:self-auto">
                    Data Resmi PDF 104 Siswa
                  </span>
                </div>

                <div className="relative">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={quickLookupQuery}
                    onChange={(e) => setQuickLookupQuery(e.target.value)}
                    placeholder="Contoh ketik: Chandra, Marvel, Nayla, Alvino, atau K01020018..."
                    className="w-full pl-10 sm:pl-11 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm font-semibold text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/15 transition"
                  />
                  {quickLookupQuery && (
                    <button
                      onClick={() => setQuickLookupQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer"
                      title="Hapus pencarian"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Instant Quick Lookup Result Cards */}
                {quickLookupQuery.trim() !== '' && (
                  <div className="space-y-2 pt-1">
                    {quickLookupResults.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {quickLookupResults.map((s, idx) => (
                          <div 
                            key={idx}
                            className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-xs space-y-1.5 hover:bg-white/15 transition"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-mono text-[10px] bg-white/20 px-2 py-0.5 rounded text-amber-300 font-bold">
                                {s.username}
                              </span>
                              <span className="text-[10px] font-black uppercase bg-blue-500 text-white px-2 py-0.5 rounded-full">
                                {s.lab} • Sesi {s.sesi}
                              </span>
                            </div>
                            <h4 className="font-black text-white text-xs sm:text-sm leading-tight">
                              {s.name}
                            </h4>
                            <div className="text-[11px] text-blue-200 flex flex-col gap-0.5 pt-1 border-t border-white/10">
                              <span>⏰ Pukul: <strong className="text-white">{s.pukul}</strong></span>
                              <span>🖥️ Server: <strong className="font-mono text-amber-300">{s.idServer}</strong></span>
                              <span>👨‍🏫 Proktor: <strong className="text-white">{s.proktor || (s.lab.includes('1') ? 'Anggi Arini, S.Kom' : s.lab.includes('2') ? 'M. Arif, S.Kom' : s.lab.includes('3') ? 'Husain' : 'Khairudin Arif, ST')}</strong></span>
                            </div>
                            <div className="pt-1 flex items-center justify-between">
                              <button
                                onClick={() => handleCopyUsername(s.username)}
                                className="text-[10px] bg-amber-400 text-slate-950 px-2 py-1 rounded-lg font-black hover:bg-amber-300 transition flex items-center gap-1 active:scale-95 cursor-pointer"
                              >
                                {copiedUsername === s.username ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-700" />
                                    <span>Tersalin!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Salin Akun</span>
                                  </>
                                )}
                              </button>
                              <button
                                onClick={() => {
                                  setAnbkActiveTab('peserta');
                                  setTkaSearchQuery(s.name);
                                  document.getElementById('tab-peserta-content')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-[11px] text-blue-300 hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <span>Lihat Rincian</span>
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 bg-white/5 rounded-xl text-center text-xs text-slate-300 font-medium">
                        Tidak ada siswa dengan nama &quot;{quickLookupQuery}&quot;. Pastikan ejaan nama atau ketik nomor username.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* -------------------------------------------------------------
                  PRIMARY SEGMENTED CONTROL: 3 INTEGRATED VIEWS
                 ------------------------------------------------------------- */}
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setAnbkActiveTab('jadwal')}
                    className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition cursor-pointer active:scale-95 touch-manipulation flex-1 justify-center ${
                      anbkActiveTab === 'jadwal'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                    }`}
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Jadwal Ujian &amp; Proktor</span>
                  </button>

                  <button
                    onClick={() => setAnbkActiveTab('peserta')}
                    className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition cursor-pointer active:scale-95 touch-manipulation flex-1 justify-center ${
                      anbkActiveTab === 'peserta'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                    }`}
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Jadwal Peserta Siswa (104 Murid)</span>
                  </button>

                  <button
                    onClick={() => setAnbkActiveTab('dokumen')}
                    className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition cursor-pointer active:scale-95 touch-manipulation flex-1 justify-center ${
                      anbkActiveTab === 'dokumen'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                    }`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>Berkas Asli PDF &amp; Scan (7 Lembar)</span>
                  </button>
                </div>
              </div>

              {/* =============================================================
                  TAB 1: JADWAL PELAKSANAAN, MATA UJI & TIM PROKTOR
                 ============================================================= */}
              {anbkActiveTab === 'jadwal' && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Official Letterhead Schedule Image Preview */}
                  <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 md:p-8 text-white border border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                            Dokumen Resmi Terverifikasi
                          </span>
                          <span className="text-xs text-slate-300 font-mono">
                            {tkaAnbkDocument.nomorSurat}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                          {tkaAnbkDocument.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300">
                          {tkaAnbkDocument.subTitle} &bull; {tkaAnbkDocument.tanggalDiterbitkan}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleZoom(tkaAnbkDocument.imageUrl)}
                          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                          title="Perbesar Layar Penuh Dokumen"
                        >
                          <ZoomIn className="w-4 h-4" />
                          <span>Zoom Penuh</span>
                        </button>

                        <button
                          onClick={() => handlePrintImage(tkaAnbkDocument.imageUrl, tkaAnbkDocument.title)}
                          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                          title="Cetak Jadwal Resmi"
                        >
                          <Printer className="w-4 h-4" />
                          <span>Cetak / PDF</span>
                        </button>

                        <a
                          href={tkaAnbkDocument.imageUrl}
                          download="JADWAL_TKA_ANBK_2026-2027_SMK_TANJUNG_PRIOK_1.jpg"
                          className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-3 py-2 rounded-xl text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer touch-manipulation"
                          title="Unduh Berkas Gambar Jadwal"
                        >
                          <Download className="w-4 h-4" />
                          <span>Unduh</span>
                        </a>
                      </div>
                    </div>

                    {/* Document Image Stage */}
                    <div 
                      onClick={() => handleZoom(tkaAnbkDocument.imageUrl)}
                      className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 cursor-zoom-in relative group max-h-[72vh] flex items-center justify-center p-2 sm:p-4 shadow-inner"
                      title="Klik atau ketuk untuk zoom layar penuh"
                    >
                      <img
                        src={tkaAnbkDocument.imageUrl}
                        alt={tkaAnbkDocument.title}
                        className="w-full h-auto max-h-[68vh] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01] drop-shadow-2xl"
                      />
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition shadow-lg pointer-events-none">
                        <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                        <span>Ketuk untuk Zoom Layar Penuh</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pt-1">
                      <span>Ditandatangani oleh: <strong>H. Andri Susanto, ST</strong> (Kepala Sekolah) &amp; <strong>Reni Widyastuti, M.Kom</strong> (Waka Kurikulum)</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Dokumen Asli Resmi Terverifikasi</span>
                      </span>
                    </div>
                  </div>

                  {/* Interactive Schedule Explorer (Day by Day & Shift Matrix) */}
                  <div className="space-y-6 pt-2">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                      <div>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block">
                          Rincian Pelaksanaan Lengkap
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                          Jadwal Harian, Mata Uji &amp; Penugasan Laboratorium
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          Pilih hari atau shift untuk melihat rincian mata uji, durasi, dan petugas Proktor pengawas ruang.
                        </p>
                      </div>

                      {/* View Mode Toggle */}
                      <div className="flex items-center gap-2 self-start md:self-auto bg-slate-100 p-1 rounded-2xl border border-slate-200">
                        <button
                          onClick={() => setScheduleViewMode('cards')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                            scheduleViewMode === 'cards'
                              ? 'bg-white text-blue-600 shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Kartu Mobile</span>
                        </button>
                        <button
                          onClick={() => setScheduleViewMode('table')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                            scheduleViewMode === 'table'
                              ? 'bg-white text-blue-600 shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <List className="w-3.5 h-3.5" />
                          <span>Tabel Matriks</span>
                        </button>
                      </div>
                    </div>

                    {/* Day Filter Pills & Shift Tabs */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
                        <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                          Pilih Hari:
                        </span>
                        <button
                          onClick={() => setSelectedScheduleDay('semua')}
                          className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition cursor-pointer ${
                            selectedScheduleDay === 'semua'
                              ? 'bg-blue-600 text-white shadow-sm font-black'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          Semua Hari (26 - 29 Okt)
                        </button>
                        {tkaAnbkSchedule.map((day) => (
                          <button
                            key={day.id}
                            onClick={() => setSelectedScheduleDay(day.id)}
                            className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition cursor-pointer ${
                              selectedScheduleDay === day.id
                                ? 'bg-blue-600 text-white shadow-sm font-black'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {day.hari} ({day.tanggalRaw})
                          </button>
                        ))}
                      </div>

                      {/* Shift Filter & Live Search */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto text-xs">
                          <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                            Shift:
                          </span>
                          {['semua', 'Shift I', 'Shift II'].map((shift) => (
                            <button
                              key={shift}
                              onClick={() => setSelectedScheduleShift(shift)}
                              className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                                selectedScheduleShift === shift
                                  ? 'bg-indigo-600 text-white font-black shadow-xs'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              {shift === 'semua' ? 'Semua Shift' : shift}
                            </button>
                          ))}
                        </div>

                        {/* Quick Search */}
                        <div className="relative w-full sm:w-64">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Cari mapel atau proktor..."
                            value={scheduleSearchQuery}
                            onChange={(e) => setScheduleSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                          />
                          {scheduleSearchQuery && (
                            <button
                              onClick={() => setScheduleSearchQuery('')}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Schedule View (Cards Mode) */}
                    {scheduleViewMode === 'cards' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {tkaAnbkSchedule
                          .filter((day) => selectedScheduleDay === 'semua' || selectedScheduleDay === day.id)
                          .map((day) => {
                            const matchingShifts = day.shifts.filter((shift) => {
                              const matchesShiftFilter = selectedScheduleShift === 'semua' || selectedScheduleShift === shift.shiftCode;
                              const q = scheduleSearchQuery.toLowerCase().trim();
                              const matchesSearch = 
                                q === '' ||
                                day.hari.toLowerCase().includes(q) ||
                                shift.mataUji.toLowerCase().includes(q) ||
                                shift.survey.toLowerCase().includes(q) ||
                                shift.labs.some(l => l.proktorName.toLowerCase().includes(q) || l.lab.toLowerCase().includes(q));
                              return matchesShiftFilter && matchesSearch;
                            });

                            if (matchingShifts.length === 0) return null;

                            return (
                              <div 
                                key={day.id}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
                              >
                                {/* Day Header */}
                                <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-2.5">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-xs">
                                      {day.hari.slice(0, 3).toUpperCase()}
                                    </span>
                                    <div>
                                      <h4 className="font-black text-sm text-white">
                                        {day.tanggalLengkap}
                                      </h4>
                                      <span className="text-[11px] text-blue-200 font-medium">
                                        Mata Uji Utama: {day.mataUjiUtama}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-slate-200 font-mono">
                                    {day.tanggalRaw}
                                  </span>
                                </div>

                                {/* Shifts List for this day */}
                                <div className="p-4 space-y-4 divide-y divide-slate-100">
                                  {matchingShifts.map((shift, idx) => (
                                    <div key={idx} className={idx > 0 ? "pt-4 space-y-3" : "space-y-3"}>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                            shift.shiftCode === 'Shift I'
                                              ? 'bg-amber-100 text-amber-900'
                                              : 'bg-indigo-100 text-indigo-900'
                                          }`}>
                                            {shift.name}
                                          </span>
                                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{shift.waktu}</span>
                                          </span>
                                        </div>
                                        <span className="text-[11px] font-mono text-slate-400">
                                          {shift.durasi}
                                        </span>
                                      </div>

                                      {/* Subject & Survey Banner */}
                                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                                          Mata Uji &amp; Survei
                                        </div>
                                        <div className="font-black text-slate-900 text-sm">
                                          {shift.mataUji}
                                        </div>
                                        {shift.survey !== '-' && (
                                          <div className="text-xs text-blue-600 font-bold mt-0.5 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                            <span>+ {shift.survey}</span>
                                          </div>
                                        )}
                                      </div>

                                      {/* Lab Assignment Matrix */}
                                      <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                          <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                            Alokasi Ruang Lab &amp; Proktor
                                          </div>
                                          <button
                                            onClick={() => {
                                              setAnbkActiveTab('peserta');
                                              setTkaSesiFilter(shift.shiftCode === 'Shift I' ? '1' : '2');
                                              document.getElementById('tab-peserta-content')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="text-[10px] text-blue-600 font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
                                          >
                                            <span>Cek Peserta {shift.shiftCode}</span>
                                            <ArrowRight className="w-3 h-3" />
                                          </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                          {shift.labs.map((l, lIdx) => (
                                            <div 
                                              key={lIdx} 
                                              className={`p-2 rounded-xl border flex flex-col justify-between ${
                                                l.active
                                                  ? 'bg-blue-50/50 border-blue-200/80'
                                                  : 'bg-slate-50 border-slate-200 opacity-50'
                                              }`}
                                            >
                                              <div className="flex items-center justify-between">
                                                <span className="font-black text-blue-900 text-[11px]">
                                                  {l.lab}
                                                </span>
                                                {l.active ? (
                                                  <span className="text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-black">
                                                    Proktor {l.proktorNumber}
                                                  </span>
                                                ) : (
                                                  <span className="text-[9px] bg-slate-200 text-slate-600 px-1.5 py-0.2 rounded font-bold">
                                                    Nonaktif
                                                  </span>
                                                )}
                                              </div>
                                              <div className="font-bold text-slate-800 text-[11px] truncate mt-1">
                                                {l.proktorName}
                                              </div>
                                              {l.active && (
                                                <button
                                                  onClick={() => {
                                                    setAnbkActiveTab('peserta');
                                                    setTkaLabFilter(l.lab === 'Lab 4' ? 'Lab 4 (TL)' : l.lab);
                                                    setTkaSesiFilter(shift.shiftCode === 'Shift I' ? '1' : '2');
                                                    document.getElementById('tab-peserta-content')?.scrollIntoView({ behavior: 'smooth' });
                                                  }}
                                                  className="mt-1 text-[10px] text-blue-700 font-black hover:underline text-left cursor-pointer"
                                                >
                                                  Lihat Peserta ➔
                                                </button>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ) : (
                      /* Table Matrix View */
                      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-slate-900 text-white font-black uppercase tracking-wider text-[11px]">
                                <th className="py-3 px-4">Hari / Tanggal</th>
                                <th className="py-3 px-4">Shift</th>
                                <th className="py-3 px-4">Waktu</th>
                                <th className="py-3 px-4">Mata Uji</th>
                                <th className="py-3 px-4">Lab 1 (Proktor 1)</th>
                                <th className="py-3 px-4">Lab 2 (Proktor 2)</th>
                                <th className="py-3 px-4">Lab 3 (Proktor 3)</th>
                                <th className="py-3 px-4">Lab 4 (Proktor 4)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {tkaAnbkSchedule
                                .filter((day) => selectedScheduleDay === 'semua' || selectedScheduleDay === day.id)
                                .flatMap((day) =>
                                  day.shifts
                                    .filter((shift) => selectedScheduleShift === 'semua' || selectedScheduleShift === shift.shiftCode)
                                    .map((shift, sIdx) => {
                                      const q = scheduleSearchQuery.toLowerCase().trim();
                                      const matchesSearch = 
                                        q === '' ||
                                        day.hari.toLowerCase().includes(q) ||
                                        shift.mataUji.toLowerCase().includes(q) ||
                                        shift.survey.toLowerCase().includes(q) ||
                                        shift.labs.some(l => l.proktorName.toLowerCase().includes(q));

                                      if (!matchesSearch) return null;

                                      return (
                                        <tr key={`${day.id}-${sIdx}`} className="hover:bg-slate-50 transition">
                                          <td className="py-3 px-4 font-black text-slate-900 whitespace-nowrap">
                                            {day.hari}, {day.tanggalRaw}
                                          </td>
                                          <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-md font-black text-[10px] ${
                                              shift.shiftCode === 'Shift I' ? 'bg-amber-100 text-amber-900' : 'bg-indigo-100 text-indigo-900'
                                            }`}>
                                              {shift.shiftCode}
                                            </span>
                                          </td>
                                          <td className="py-3 px-4 font-mono text-slate-600 whitespace-nowrap">
                                            {shift.waktu}
                                          </td>
                                          <td className="py-3 px-4 font-bold text-slate-800">
                                            <div>{shift.mataUji}</div>
                                            {shift.survey !== '-' && (
                                              <div className="text-[11px] text-blue-600 font-semibold">{shift.survey}</div>
                                            )}
                                          </td>
                                          <td className="py-3 px-4 text-slate-700 font-medium">
                                            <div className="font-bold text-blue-700">Anggi Arini, S.Kom</div>
                                          </td>
                                          <td className="py-3 px-4 text-slate-700 font-medium">
                                            <div className="font-bold text-indigo-700">M. Arif, S.Kom</div>
                                          </td>
                                          <td className="py-3 px-4 text-slate-700 font-medium">
                                            <div className="font-bold text-purple-700">Husain</div>
                                          </td>
                                          <td className="py-3 px-4 text-slate-700 font-medium">
                                            {shift.labs[3]?.active ? (
                                              <div className="font-bold text-amber-700">Khairudin Arif, ST</div>
                                            ) : (
                                              <span className="text-slate-400 italic">- (Lab Tutup)</span>
                                            )}
                                          </td>
                                        </tr>
                                      );
                                    })
                                )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Proktor & Teknisi Profiles */}
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div>
                      <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider block">
                        Penugasan Personel Resmi
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                        Daftar Petugas Proktor &amp; Teknisi Laboratorium
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Sesuai Surat Penetapan Pelaksanaan Ujian TKA - ANBK Tahun Pelajaran 2026-2027 SMK Tanjung Priok 1.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {proktorList.map((proktor) => (
                        <div 
                          key={proktor.id} 
                          className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:border-blue-300 transition"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {proktor.label}
                            </span>
                            <UserCheck className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="font-black text-slate-900 text-sm">
                            {proktor.nama}
                          </h4>
                          <p className="text-xs font-bold text-blue-700 mt-0.5">
                            {proktor.jabatan}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            {proktor.penugasan}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* 2 Teknisi Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {teknisiList.map((teknisi) => (
                        <div 
                          key={teknisi.id} 
                          className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 flex items-start gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="bg-emerald-200 text-emerald-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                                {teknisi.label}
                              </span>
                              <span className="text-xs font-black text-slate-900">
                                {teknisi.nama}
                              </span>
                            </div>
                            <div className="text-xs font-bold text-emerald-800 mt-0.5">
                              {teknisi.jabatan}
                            </div>
                            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                              {teknisi.tugas}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =============================================================
                  TAB 2: JADWAL PESERTA SISWA TKA - ANBK (104 MURID DARI PDF)
                 ============================================================= */}
              {anbkActiveTab === 'peserta' && (
                <div id="tka-peserta" className="space-y-6 animate-fadeIn scroll-mt-24">
                  <span id="tka" className="block -mt-24 pt-24 invisible" />
                  {/* Official PDF Source Banner */}
                  <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                          Sumber Berkas Terlampir
                        </span>
                        <span className="text-xs text-blue-200 font-mono">
                          DAFTAR_SISWA_TKA_9a5f3392.pdf (2.1 MB)
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black text-white">
                        Jadwal &amp; Rincian Peserta TKA - ANBK (104 Murid)
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100 max-w-2xl font-medium leading-relaxed">
                        Daftar lengkap 104 peserta didik Kelas XII beserta nomor username login, ruang laboratorium, ID server sinkron, dan petugas Proktor pengawas.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <a
                        href={TKA_PDF_DOCUMENT_URL}
                        download="DAFTAR_SISWA_TKA_ANBK_2026-2027_SMK_TANJUNG_PRIOK_1.pdf"
                        className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md active:scale-95 cursor-pointer touch-manipulation"
                      >
                        <Download className="w-4 h-4" />
                        <span>Unduh Berkas PDF Asli</span>
                      </a>

                      <button
                        onClick={() => {
                          setAnbkActiveTab('dokumen');
                          setTkaSlide(0);
                        }}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-wider backdrop-blur-md transition active:scale-95 cursor-pointer touch-manipulation"
                      >
                        <Layers className="w-4 h-4" />
                        <span>Lihat 7 Lembar Scan</span>
                      </button>
                    </div>
                  </div>

                  {/* Search and Filters for Students */}
                  <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-slate-900">
                          Pencarian &amp; Filter Peserta Ujian
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          Gunakan kolom pencarian atau klik tombol lab/sesi untuk verifikasi instan.
                        </p>
                      </div>

                      {/* Mode Tampilan: Kartu Smartphone vs Tabel */}
                      <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 self-start sm:self-auto shrink-0 shadow-xs">
                        <button
                          onClick={() => setTkaView('cards')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer active:scale-95 touch-manipulation ${
                            tkaView === 'cards' 
                              ? 'bg-blue-600 text-white shadow-xs' 
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Kartu (HP)</span>
                        </button>
                        <button
                          onClick={() => setTkaView('table')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer active:scale-95 touch-manipulation ${
                            tkaView === 'table' 
                              ? 'bg-blue-600 text-white shadow-xs' 
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <List className="w-3.5 h-3.5" />
                          <span>Tabel Matriks</span>
                        </button>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={tkaSearchQuery}
                        onChange={(e) => setTkaSearchQuery(e.target.value)}
                        placeholder="Ketik nama murid (mis: Chandra, Farrel, Nayla, Alvino) atau username..."
                        className="w-full pl-10 sm:pl-11 pr-10 py-3 bg-white border-2 border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
                      />
                      {tkaSearchQuery && (
                        <button
                          onClick={() => setTkaSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Filter Buttons */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                          <Filter className="w-3.5 h-3.5" />
                          <span>Ruang Lab:</span>
                        </span>
                        {[
                          { label: "Semua (104)", val: "Semua" },
                          { label: "Lab 1 (30)", val: "Lab 1" },
                          { label: "Lab 2 (30)", val: "Lab 2" },
                          { label: "Lab 3 (29)", val: "Lab 3" },
                          { label: "Lab 4 / TL (15)", val: "Lab 4 (TL)" }
                        ].map((chip) => (
                          <button
                            key={chip.val}
                            onClick={() => setTkaLabFilter(chip.val)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition active:scale-95 touch-manipulation cursor-pointer ${
                              tkaLabFilter === chip.val 
                                ? 'bg-blue-600 text-white shadow-xs' 
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}

                        <span className="text-slate-300 mx-1 hidden md:inline">|</span>

                        <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">Sesi:</span>
                        {[
                          { label: "Semua Sesi", val: "Semua" },
                          { label: "Sesi 1 (Pagi: 07.00 - 08.45)", val: "1" },
                          { label: "Sesi 2 (Siang: 09.30 - 11.15)", val: "2" }
                        ].map((chip) => (
                          <button
                            key={chip.val}
                            onClick={() => setTkaSesiFilter(chip.val)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition active:scale-95 touch-manipulation cursor-pointer ${
                              tkaSesiFilter === chip.val 
                                ? 'bg-indigo-600 text-white shadow-xs' 
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-1">
                        <span>Menampilkan: <strong className="text-blue-600 font-black">{filteredTkaStudents.length}</strong> dari 104 peserta terdaftar</span>
                        {(tkaSearchQuery || tkaLabFilter !== 'Semua' || tkaSesiFilter !== 'Semua') && (
                          <button
                            onClick={() => {
                              setTkaSearchQuery('');
                              setTkaLabFilter('Semua');
                              setTkaSesiFilter('Semua');
                            }}
                            className="text-rose-600 font-bold hover:underline cursor-pointer"
                          >
                            Reset Filter
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Participant Results: Cards View (Smartphone Optimized) */}
                    {tkaView === 'cards' && (
                      <div>
                        {filteredTkaStudents.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                            {filteredTkaStudents.map((s, idx) => (
                              <div 
                                key={idx} 
                                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 transition-all hover:shadow-md space-y-2.5"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-mono text-xs font-black text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg">
                                      #{s.no}
                                    </span>
                                    <span className="font-mono text-xs font-bold text-slate-700">
                                      {s.username}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => handleCopyUsername(s.username)}
                                    className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-lg font-bold flex items-center gap-1 transition active:scale-95 cursor-pointer"
                                    title="Salin Nomor Username"
                                  >
                                    {copiedUsername === s.username ? (
                                      <>
                                        <Check className="w-3 h-3 text-emerald-600" />
                                        <span className="text-emerald-700 font-black">Tersalin!</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="w-3 h-3 text-slate-500" />
                                        <span>Salin</span>
                                      </>
                                    )}
                                  </button>
                                </div>

                                <h4 className="font-black text-slate-900 text-sm leading-snug">
                                  {s.name}
                                </h4>

                                <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100 font-medium">
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-400">Ruangan:</span>
                                    <span className="font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                      {s.lab}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-400">ID Server:</span>
                                    <span className="font-mono font-bold text-slate-700 text-[11px] bg-slate-50 px-1.5 py-0.5 rounded">
                                      {s.idServer}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-400">Jadwal Sesi:</span>
                                    <span className="font-bold text-indigo-700">
                                      Sesi {s.sesi} ({s.pukul})
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-slate-400">Proktor Pengawas:</span>
                                    <span className="font-bold text-slate-800 text-[11px]">
                                      {s.proktor || (s.lab.includes('1') ? 'Anggi Arini, S.Kom' : s.lab.includes('2') ? 'M. Arif, S.Kom' : s.lab.includes('3') ? 'Husain' : 'Khairudin Arif, ST')}
                                    </span>
                                  </div>
                                </div>

                                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                                  <button
                                    onClick={() => {
                                      setAnbkActiveTab('dokumen');
                                      setTkaSlide(s.page - 1);
                                      setDocPreviewType('scan');
                                      document.getElementById('tka-slider-box')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                                  >
                                    <span>Lembar {s.page} (Scan Asli)</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleZoom(tkaSlides[s.page - 1].scanImageUrl)}
                                    className="text-[11px] text-slate-500 hover:text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                                  >
                                    <ZoomIn className="w-3 h-3 text-blue-500" />
                                    <span>Zoom Lembar</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-400 font-medium">
                            Tidak ada siswa yang cocok dengan filter atau kata kunci &quot;{tkaSearchQuery}&quot;
                          </div>
                        )}
                      </div>
                    )}

                    {/* Participant Results: Table View */}
                    {tkaView === 'table' && (
                      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                        <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                          <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead className="bg-slate-900 text-white sticky top-0 z-10 text-[11px] md:text-xs uppercase tracking-wider">
                              <tr>
                                <th className="py-3 px-4 font-bold">No.</th>
                                <th className="py-3 px-4 font-bold">Username Peserta</th>
                                <th className="py-3 px-4 font-bold">Nama Murid</th>
                                <th className="py-3 px-4 font-bold">Ruang Lab</th>
                                <th className="py-3 px-4 font-bold">ID Server</th>
                                <th className="py-3 px-4 font-bold">Sesi &amp; Waktu</th>
                                <th className="py-3 px-4 font-bold">Proktor</th>
                                <th className="py-3 px-4 font-bold">Aksi</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {filteredTkaStudents.length > 0 ? (
                                filteredTkaStudents.map((s, idx) => (
                                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                    <td className="py-3 px-4 font-mono text-slate-400 font-bold">
                                      {s.no}
                                    </td>
                                    <td className="py-3 px-4 font-mono font-bold text-slate-700 text-xs">
                                      {s.username}
                                    </td>
                                    <td className="py-3 px-4 font-black text-slate-900">
                                      {s.name}
                                    </td>
                                    <td className="py-3 px-4 font-bold text-blue-600">
                                      {s.lab}
                                    </td>
                                    <td className="py-3 px-4 font-mono text-xs text-slate-600">
                                      {s.idServer}
                                    </td>
                                    <td className="py-3 px-4 font-semibold text-slate-700">
                                      Sesi {s.sesi} ({s.pukul})
                                    </td>
                                    <td className="py-3 px-4 text-xs font-bold text-slate-800">
                                      {s.proktor || (s.lab.includes('1') ? 'Anggi Arini, S.Kom' : s.lab.includes('2') ? 'M. Arif, S.Kom' : s.lab.includes('3') ? 'Husain' : 'Khairudin Arif, ST')}
                                    </td>
                                    <td className="py-3 px-4">
                                      <button
                                        onClick={() => {
                                          setAnbkActiveTab('dokumen');
                                          setTkaSlide(s.page - 1);
                                          setDocPreviewType('scan');
                                          document.getElementById('tka-slider-box')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95"
                                      >
                                        <span>Lembar {s.page}</span>
                                        <ChevronRight className="w-3 h-3" />
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan={8} className="py-12 text-center text-slate-400 font-medium">
                                    Tidak ada siswa yang cocok dengan filter atau kata kunci &quot;{tkaSearchQuery}&quot;
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tata Tertib Peserta TKA ANBK */}
                  <div className="p-5 md:p-6 bg-indigo-50/80 rounded-2xl border border-indigo-200 flex items-start gap-4 text-indigo-950">
                    <ShieldCheck className="w-7 h-7 text-indigo-700 shrink-0 mt-0.5" />
                    <div className="space-y-1.5 text-xs md:text-sm leading-relaxed">
                      <span className="font-black block uppercase tracking-wide text-indigo-950">
                        Tata Tertib Peserta Tes Kemampuan Akademik (TKA - ANBK) 2026/2027:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                        <li>Peserta wajib hadir <strong>15 menit</strong> sebelum waktu sesi dimulai. Keterlambatan tidak diberikan tambahan waktu.</li>
                        <li>Wajib menempati meja laboratorium komputer sesuai dengan <strong>ID Server</strong> dan nomor urut peserta yang tertera pada daftar hadir.</li>
                        <li>Dilarang membawa alat komunikasi, kamera, kalkulator, atau catatan ke dalam ruang laboratorium selama ujian berlangsung.</li>
                        <li>Segera laporkan kepada Pengawas Ujian (Proktor) atau Teknisi Laboratorium jika mengalami kendala login akun atau komputer mati.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* =============================================================
                  TAB 3: BERKAS ASLI PDF SCANNER & 7 LEMBAR DAFTAR HADIR
                 ============================================================= */}
              {anbkActiveTab === 'dokumen' && (
                <div id="tka-slider-box" className="space-y-6 animate-fadeIn scroll-mt-24">
                  <span id="tka-dokumen" className="block -mt-24 pt-24 invisible" />
                  {/* Download Options for Original Attachments */}
                  <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
                          Dokumen Terlampir Asli
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          Format PDF Scanner HD (2.1 MB)
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        Daftar Hadir Resmi Peserta TKA 2026-2027 (7 Lembar Scan)
                      </h3>
                      <p className="text-xs text-slate-300 font-medium max-w-2xl">
                        Berkas hasil scan resolusi tinggi dari lembar daftar hadir asli ujian TKA - ANBK Lab 1, Lab 2, Lab 3, dan Lab 4.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <a
                        href={TKA_PDF_DOCUMENT_URL}
                        download="DAFTAR_SISWA_TKA_ANBK_2026-2027_SMK_TANJUNG_PRIOK_1.pdf"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md active:scale-95 cursor-pointer touch-manipulation"
                      >
                        <Download className="w-4 h-4" />
                        <span>Unduh File PDF Lengkap (2.1 MB)</span>
                      </a>
                    </div>
                  </div>

                  {/* Document Switcher & Active Slide Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Lembar {tkaSlide + 1} dari {tkaSlides.length}
                        </span>
                        <span className="bg-indigo-500/20 text-indigo-300 text-[11px] font-bold px-2 py-0.5 rounded-md border border-indigo-500/30">
                          {tkaSlides[tkaSlide].badge}
                        </span>
                        <span className="text-slate-400 text-xs hidden sm:inline">
                          ID Server: <strong className="text-amber-400 font-mono">{tkaSlides[tkaSlide].idServer}</strong>
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        {tkaSlides[tkaSlide].title}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {tkaSlides[tkaSlide].subtitle} &bull; Proktor: <strong className="text-white">{tkaSlides[tkaSlide].proktor}</strong>
                      </p>
                    </div>

                    {/* Mode Preview Switcher & Actions */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {/* Scan vs Vector Switcher */}
                      <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
                        <button
                          onClick={() => setDocPreviewType('scan')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer active:scale-95 ${
                            docPreviewType === 'scan'
                              ? 'bg-amber-400 text-slate-950 shadow-xs'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Foto Scan Asli
                        </button>
                        <button
                          onClick={() => setDocPreviewType('vector')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer active:scale-95 ${
                            docPreviewType === 'vector'
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Vektor Digital (SVG)
                        </button>
                      </div>

                      <button 
                        onClick={() => handleZoom(docPreviewType === 'scan' ? tkaSlides[tkaSlide].scanImageUrl : tkaSlides[tkaSlide].imageUrl)}
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-3 py-1.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                        title="Perbesar Layar Penuh Resolusi Tinggi"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-white" />
                        <span>Zoom</span>
                      </button>

                      <button 
                        onClick={() => handlePrintImage(docPreviewType === 'scan' ? tkaSlides[tkaSlide].scanImageUrl : tkaSlides[tkaSlide].imageUrl, tkaSlides[tkaSlide].title)}
                        className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-3 py-1.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                        title="Cetak Lembar Ini"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Cetak</span>
                      </button>

                      <a 
                        href={docPreviewType === 'scan' ? tkaSlides[tkaSlide].scanImageUrl : tkaSlides[tkaSlide].imageUrl}
                        download={`TKA_SMKTP1_Lembar_${tkaSlide + 1}.${docPreviewType === 'scan' ? 'jpg' : 'svg'}`}
                        className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-3 py-1.5 rounded-xl text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer touch-manipulation"
                        title="Unduh Lembar Ini"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh</span>
                      </a>
                    </div>
                  </div>

                  {/* Inline Zoom Adjustment Bar for Fast Smartphone Access */}
                  <div className="flex flex-wrap items-center justify-between text-xs bg-slate-100 p-2.5 rounded-xl border border-slate-200 text-slate-700 gap-2">
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="text-slate-500">Kontrol Zoom:</span>
                      <button
                        onClick={() => setTkaInSliderZoom(prev => Math.max(0.7, prev - 0.2))}
                        className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                        title="Perkecil Lembar"
                      >
                        - Zoom
                      </button>
                      <button
                        onClick={() => setTkaInSliderZoom(1)}
                        className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                        title="Kembalikan ke 100%"
                      >
                        {Math.round(tkaInSliderZoom * 100)}% (Reset)
                      </button>
                      <button
                        onClick={() => setTkaInSliderZoom(prev => Math.min(2.2, prev + 0.2))}
                        className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                        title="Perbesar Lembar"
                      >
                        + Zoom
                      </button>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      💡 Ketuk 2x (double-tap) pada gambar untuk zoom 2x otomatis
                    </div>
                  </div>

                  {/* Document Slide Display Stage */}
                  <div 
                    className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 group select-none"
                    onDoubleClick={() => setTkaInSliderZoom(prev => prev === 1 ? 1.6 : 1)}
                  >
                    <div className="min-h-[500px] max-h-[85vh] overflow-auto flex items-center justify-center p-3 md:p-6 bg-slate-900/90 cursor-grab active:cursor-grabbing">
                      <img 
                        src={docPreviewType === 'scan' ? tkaSlides[tkaSlide].scanImageUrl : tkaSlides[tkaSlide].imageUrl} 
                        alt={tkaSlides[tkaSlide].title}
                        style={{ transform: `scale(${tkaInSliderZoom})`, transformOrigin: 'top center' }}
                        className="w-full max-w-4xl h-auto object-contain transition-transform duration-200 shadow-2xl rounded-lg bg-white"
                        loading="lazy"
                      />
                    </div>

                    {/* Left / Right Navigation Buttons */}
                    <button 
                      onClick={() => setTkaSlide((prev) => (prev === 0 ? tkaSlides.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/85 hover:bg-blue-600 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation border border-white/10"
                      aria-label="Lembar Sebelumnya"
                      title="Lembar Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button 
                      onClick={() => setTkaSlide((prev) => (prev === tkaSlides.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/85 hover:bg-blue-600 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation border border-white/10"
                      aria-label="Lembar Selanjutnya"
                      title="Lembar Selanjutnya"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Floating Modal Fullscreen Trigger Hint */}
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 flex items-center gap-2 pointer-events-none">
                      <ZoomIn className="w-4 h-4 text-blue-400" />
                      <span className="hidden sm:inline">Klik &quot;Zoom&quot; untuk tampilan layar penuh</span>
                      <span className="sm:hidden">Ketuk zoom untuk perbesar</span>
                    </div>
                  </div>

                  {/* Thumbnail / Page Jump Selector Tabs */}
                  <div className="overflow-x-auto pb-2 no-scrollbar">
                    <div className="flex items-center gap-2 min-w-max">
                      {tkaSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => {
                            setTkaSlide(idx);
                            setTkaInSliderZoom(1);
                          }}
                          className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border cursor-pointer active:scale-95 touch-manipulation ${
                            tkaSlide === idx 
                              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30' 
                              : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full bg-slate-900/20 text-current flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          <span>{slide.badge}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
              FEATURED SECTION 3: DAFTAR SISWA UPDATE KELAS & SESI TKA 26 - 27 OKTOBER 2026
             ========================================================================= */}
          <article id="tka" className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-indigo-200/80 scroll-mt-24">
            {/* Header Banner with Clean Dark Theme and Pure White Title */}
            <header className="bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#3a506b] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <FileText className="w-80 h-80 text-white" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* Official Badges */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-[11px] md:text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>PENGUMUMAN RESMI KURIKULUM</span>
                  </span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>26 - 27 OKTOBER 2026</span>
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-md text-blue-200 border border-blue-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-300" />
                    <span>104 PESERTA TERDAFTAR (4 LAB)</span>
                  </span>
                  <span className="bg-indigo-500/20 backdrop-blur-md text-indigo-200 border border-indigo-400/30 px-3 py-1 rounded-full text-[11px] md:text-xs font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-300" />
                    <span>7 LEMBAR DAFTAR HADIR</span>
                  </span>
                </div>

                {/* Pure White Clean Title as requested */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  DAFTAR SISWA UPDATE KELAS DAN SESI TES KEMAMPUAN AKADEMIK (TKA) YANG AKAN DILAKSANAKAN PADA 26 - 27 OKTOBER 2026 (DAFTAR TERLAMPIR)
                </h2>

                <p className="text-slate-200/90 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl font-medium">
                  Pengumuman resmi Tim Kurikulum SMK Tanjung Priok 1 Jakarta Utara mengenai pembagian ruang laboratorium, nomor peserta/username, ID Server, dan jadwal sesi <strong>Tes Kemampuan Akademik (TKA) SMK Tahun 2026</strong> untuk seluruh siswa Kelas XII (Semua Konsentrasi Keahlian: TPK, TKRO, DKV, dan Logistik).
                </p>

                {/* Header Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#tka-slider"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-black px-5 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <Layers className="w-4 h-4" />
                    <span>LIHAT SLIDESHOW DAFTAR HADIR (7 LEMBAR)</span>
                  </a>
                  <a
                    href="#tka-search"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-3 rounded-2xl text-xs md:text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation"
                  >
                    <Search className="w-4 h-4 text-emerald-400" />
                    <span>CARI NAMA SISWA &amp; RUANGAN</span>
                  </a>
                </div>
              </div>
            </header>

            <div className="p-6 md:p-12 space-y-10">
              {/* Executive Summary 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 p-5 rounded-3xl border border-indigo-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full inline-block">
                      Tanggal Pelaksanaan
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      Senin &amp; Selasa, 26 - 27 Oktober 2026
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    Pelaksanaan serentak selama 2 hari sesuai jadwal sesi masing-masing peserta.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50/80 to-sky-50/50 p-5 rounded-3xl border border-blue-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full inline-block">
                      Jadwal 2 Sesi Ujian
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      Sesi 1: 07:00 &bull; Sesi 2: 09:30 WIB
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    Durasi tes 105 menit. Wajib hadir 15 menit sebelum sesi dimulai.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/50 p-5 rounded-3xl border border-emerald-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                      Alokasi Ruangan
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      4 Laboratorium Komputer
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    Lab 1 (AG1K), Lab 2 (BQ4K), Lab 3 (CQ6K), &amp; Lab TL (DY7K).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50/80 to-fuchsia-50/50 p-5 rounded-3xl border border-purple-100 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full inline-block">
                      Jumlah Peserta
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      104 Murid Kelas XII
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-medium">
                    100% siswa terdata lengkap dengan akun login &amp; ID server sinkron.
                  </p>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  TKA SLIDE SHOW: 7 LEMBAR DAFTAR HADIR PESERTA RESMI TKA
                 ------------------------------------------------------------- */}
              <div id="tka-slider" className="space-y-4 pt-2 scroll-mt-24">
                {/* Active Slide Info Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Lembar {tkaSlide + 1} dari {tkaSlides.length}
                      </span>
                      <span className="bg-indigo-500/20 text-indigo-300 text-[11px] font-bold px-2 py-0.5 rounded-md border border-indigo-500/30">
                        {tkaSlides[tkaSlide].badge}
                      </span>
                      <span className="text-slate-400 text-xs hidden sm:inline">
                        ID Server: <strong className="text-amber-400 font-mono">{tkaSlides[tkaSlide].idServer}</strong>
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-white">
                      {tkaSlides[tkaSlide].title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {tkaSlides[tkaSlide].subtitle}
                    </p>
                  </div>

                  {/* Top Bar Quick Controls */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => setIsTkaAutoPlay(!isTkaAutoPlay)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition cursor-pointer active:scale-95 touch-manipulation ${
                        isTkaAutoPlay 
                          ? 'bg-amber-400 text-slate-950' 
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                      }`}
                      title={isTkaAutoPlay ? "Jeda Putar Otomatis" : "Putar Slide Otomatis"}
                    >
                      {isTkaAutoPlay ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{isTkaAutoPlay ? "Jeda" : "Auto Slide"}</span>
                    </button>

                    <button 
                      onClick={() => handleZoom(tkaSlides[tkaSlide].imageUrl)}
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                      title="Perbesar Layar Penuh Resolusi Tinggi"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                      <span>Zoom Resolusi Tinggi</span>
                    </button>

                    <button 
                      onClick={() => handlePrintImage(tkaSlides[tkaSlide].imageUrl, tkaSlides[tkaSlide].title)}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-3 py-2 rounded-xl text-xs uppercase tracking-wider shadow-md transition active:scale-95 cursor-pointer touch-manipulation"
                      title="Cetak Lembar Ini"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Cetak</span>
                    </button>

                    <a 
                      href={tkaSlides[tkaSlide].imageUrl}
                      download={`TKA_SMKTP1_Lembar_${tkaSlide + 1}.svg`}
                      className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-3 py-2 rounded-xl text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer touch-manipulation"
                      title="Unduh Berkas Gambar"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Unduh</span>
                    </a>
                  </div>
                </div>

                {/* Inline Zoom Adjustment Bar for Fast Smartphone Access */}
                <div className="flex flex-wrap items-center justify-between text-xs bg-slate-100 p-2.5 rounded-xl border border-slate-200 text-slate-700 gap-2">
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="text-slate-500">Kontrol Zoom Langsung:</span>
                    <button
                      onClick={() => setTkaInSliderZoom(prev => Math.max(0.7, prev - 0.2))}
                      className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                      title="Perkecil Lembar"
                    >
                      - Zoom
                    </button>
                    <button
                      onClick={() => setTkaInSliderZoom(1)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                      title="Kembalikan ke 100%"
                    >
                      {Math.round(tkaInSliderZoom * 100)}% (Reset)
                    </button>
                    <button
                      onClick={() => setTkaInSliderZoom(prev => Math.min(2.2, prev + 0.2))}
                      className="px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-black shadow-xs cursor-pointer active:scale-95 touch-manipulation"
                      title="Perbesar Lembar"
                    >
                      + Zoom
                    </button>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    💡 Ketuk 2x (double-tap) pada gambar untuk zoom 2x otomatis
                  </div>
                </div>

                {/* High-Resolution Document Slide Display Container */}
                <div 
                  className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 group select-none"
                  onDoubleClick={() => setTkaInSliderZoom(prev => prev === 1 ? 1.6 : 1)}
                >
                  <div className="min-h-[500px] max-h-[85vh] overflow-auto flex items-center justify-center p-3 md:p-6 bg-slate-900/90 cursor-grab active:cursor-grabbing">
                    <img 
                      src={tkaSlides[tkaSlide].imageUrl} 
                      alt={tkaSlides[tkaSlide].title}
                      style={{ transform: `scale(${tkaInSliderZoom})`, transformOrigin: 'top center' }}
                      className="w-full max-w-4xl h-auto object-contain transition-transform duration-200 shadow-2xl rounded-lg bg-white"
                      loading="lazy"
                    />
                  </div>

                  {/* Left / Right Navigation Buttons */}
                  <button 
                    onClick={() => setTkaSlide((prev) => (prev === 0 ? tkaSlides.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/85 hover:bg-blue-600 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation border border-white/10"
                    aria-label="Lembar Sebelumnya"
                    title="Lembar Sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button 
                    onClick={() => setTkaSlide((prev) => (prev === tkaSlides.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/85 hover:bg-blue-600 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation border border-white/10"
                    aria-label="Lembar Selanjutnya"
                    title="Lembar Selanjutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Floating Modal Fullscreen Trigger Hint */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10 flex items-center gap-2 pointer-events-none">
                    <ZoomIn className="w-4 h-4 text-blue-400" />
                    <span className="hidden sm:inline">Klik &quot;Zoom Resolusi Tinggi&quot; untuk tampilan layar penuh</span>
                    <span className="sm:hidden">Ketuk zoom untuk perbesar</span>
                  </div>
                </div>

                {/* Mobile Dropdown Slide Selector */}
                <div className="block sm:hidden">
                  <label htmlFor="tka-mobile-slide-select" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                    Pilih Lembar Daftar Hadir:
                  </label>
                  <select
                    id="tka-mobile-slide-select"
                    value={tkaSlide}
                    onChange={(e) => setTkaSlide(Number(e.target.value))}
                    className="w-full bg-white border-2 border-indigo-200 text-slate-900 font-bold rounded-xl px-3 py-2.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {tkaSlides.map((slide, idx) => (
                      <option key={slide.id} value={idx}>
                        Lembar {idx + 1}: {slide.badge} ({slide.totalPeserta} Murid)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Thumbnail / Page Jump Selector Tabs */}
                <div className="overflow-x-auto pb-2 no-scrollbar">
                  <div className="flex items-center gap-2 min-w-max">
                    {tkaSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => {
                          setTkaSlide(idx);
                          setTkaInSliderZoom(1);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border cursor-pointer active:scale-95 touch-manipulation ${
                          tkaSlide === idx 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30' 
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-slate-900/20 text-current flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{slide.badge}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-1.5 pt-1">
                  {tkaSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTkaSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        tkaSlide === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Buka slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* -------------------------------------------------------------
                  INTERACTIVE STUDENT FINDER & SEARCH (104 SISWA KELAS XII)
                 ------------------------------------------------------------- */}
              <div id="tka-search" className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 space-y-6 scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block mb-1.5">
                      PENCARIAN CEPAT &bull; VERIFIKASI PESERTA
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">
                      Cari Nama Siswa, Lab &amp; Sesi TKA
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">
                      Ketik nama siswa atau username untuk memeriksa ruang laboratorium, nomor meja server, dan jadwal sesi.
                    </p>
                  </div>

                  {/* Mode Tampilan: Kartu (Smartphone) vs Tabel */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0 shadow-xs">
                    <button
                      onClick={() => setTkaView('cards')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer active:scale-95 touch-manipulation ${
                        tkaView === 'cards' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>Kartu (HP)</span>
                    </button>
                    <button
                      onClick={() => setTkaView('table')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer active:scale-95 touch-manipulation ${
                        tkaView === 'table' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                      <span>Tabel</span>
                    </button>
                  </div>
                </div>

                {/* Search Bar & Fast Lab Filter Chips */}
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={tkaSearchQuery}
                      onChange={(e) => setTkaSearchQuery(e.target.value)}
                      placeholder="Ketik nama murid (mis: Chandra, Nayla, Marvel, Alvino) atau username..."
                      className="w-full pl-12 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-xs md:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
                    />
                    {tkaSearchQuery && (
                      <button
                        onClick={() => setTkaSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Fast Lab Category Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                      <Filter className="w-3.5 h-3.5" />
                      <span>Filter Lab:</span>
                    </span>
                    {[
                      { label: "Semua (104)", val: "Semua" },
                      { label: "Lab 1 (30)", val: "Lab 1" },
                      { label: "Lab 2 (30)", val: "Lab 2" },
                      { label: "Lab 3 (29)", val: "Lab 3" },
                      { label: "Lab 4 / TL (15)", val: "Lab 4 (TL)" }
                    ].map((chip) => (
                      <button
                        key={chip.val}
                        onClick={() => setTkaLabFilter(chip.val)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition active:scale-95 touch-manipulation cursor-pointer ${
                          tkaLabFilter === chip.val 
                            ? 'bg-blue-600 text-white shadow-xs' 
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}

                    <span className="text-white/20 mx-1 hidden md:inline">|</span>

                    <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">Sesi:</span>
                    {[
                      { label: "Semua Sesi", val: "Semua" },
                      { label: "Sesi 1 (Pagi)", val: "1" },
                      { label: "Sesi 2 (Siang)", val: "2" }
                    ].map((chip) => (
                      <button
                        key={chip.val}
                        onClick={() => setTkaSesiFilter(chip.val)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition active:scale-95 touch-manipulation cursor-pointer ${
                          tkaSesiFilter === chip.val 
                            ? 'bg-indigo-600 text-white shadow-xs' 
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-1">
                    <span>Hasil pencarian: <strong className="text-blue-600 font-black">{filteredTkaStudents.length}</strong> siswa ditemukan</span>
                    {(tkaSearchQuery || tkaLabFilter !== 'Semua' || tkaSesiFilter !== 'Semua') && (
                      <button
                        onClick={() => {
                          setTkaSearchQuery('');
                          setTkaLabFilter('Semua');
                          setTkaSesiFilter('Semua');
                        }}
                        className="text-rose-600 font-bold hover:underline cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    )}
                  </div>
                </div>

                {/* Participant Results: Cards View (Smartphone Optimized) */}
                {tkaView === 'cards' && (
                  <div>
                    {filteredTkaStudents.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {filteredTkaStudents.map((s, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all hover:shadow-md space-y-2.5"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                                #{s.no} &bull; {s.username}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                                Sesi {s.sesi}
                              </span>
                            </div>

                            <h4 className="font-black text-slate-900 text-sm leading-snug">
                              {s.name}
                            </h4>

                            <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100 font-medium">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Ruangan:</span>
                                <span className="font-black text-blue-600">{s.lab}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">ID Server:</span>
                                <span className="font-mono font-bold text-slate-700 text-[11px]">{s.idServer}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Jadwal Sesi:</span>
                                <span className="font-bold text-slate-800">{s.pukul}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Hari &amp; Tanggal:</span>
                                <span className="font-medium text-slate-600">{s.tanggal}</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                              <button
                                onClick={() => {
                                  setTkaSlide(s.page - 1);
                                  document.getElementById('tka-slider')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <span>Lihat di Lembar {s.page}</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleZoom(tkaSlides[s.page - 1].imageUrl)}
                                className="text-[11px] text-slate-500 hover:text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                <ZoomIn className="w-3 h-3 text-blue-500" />
                                <span>Perbesar Lembar</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-400 font-medium">
                        Tidak ada siswa yang cocok dengan kata kunci &quot;{tkaSearchQuery}&quot;
                      </div>
                    )}
                  </div>
                )}

                {/* Participant Results: Table View */}
                {tkaView === 'table' && (
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                      <table className="w-full text-left border-collapse text-xs md:text-sm">
                        <thead className="bg-slate-900 text-white sticky top-0 z-10 text-[11px] md:text-xs uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4 font-bold">No.</th>
                            <th className="py-3 px-4 font-bold">Username Peserta</th>
                            <th className="py-3 px-4 font-bold">Nama Murid</th>
                            <th className="py-3 px-4 font-bold">Ruang Lab</th>
                            <th className="py-3 px-4 font-bold">ID Server</th>
                            <th className="py-3 px-4 font-bold">Sesi &amp; Waktu</th>
                            <th className="py-3 px-4 font-bold">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredTkaStudents.length > 0 ? (
                            filteredTkaStudents.map((s, idx) => (
                              <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4 font-mono text-slate-400 font-bold">
                                  {s.no}
                                </td>
                                <td className="py-3 px-4 font-mono font-bold text-slate-700 text-xs">
                                  {s.username}
                                </td>
                                <td className="py-3 px-4 font-black text-slate-900">
                                  {s.name}
                                </td>
                                <td className="py-3 px-4 font-bold text-blue-600">
                                  {s.lab}
                                </td>
                                <td className="py-3 px-4 font-mono text-xs text-slate-600">
                                  {s.idServer}
                                </td>
                                <td className="py-3 px-4 font-semibold text-slate-700">
                                  Sesi {s.sesi} ({s.pukul})
                                </td>
                                <td className="py-3 px-4">
                                  <button
                                    onClick={() => {
                                      setTkaSlide(s.page - 1);
                                      document.getElementById('tka-slider')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95"
                                  >
                                    <span>Lembar {s.page}</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={7} className="py-12 text-center text-slate-400 font-medium">
                                Tidak ada siswa yang cocok dengan kata kunci &quot;{tkaSearchQuery}&quot;
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Footer Navigation Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-2 gap-2">
                  <span>Catatan: Pastikan datang 15 menit sebelum sesi dimulai dan memakai seragam rapi.</span>
                  <button
                    onClick={() => {
                      setTkaSlide(0);
                      document.getElementById('tka-slider')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-blue-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Kembali ke Lembar 1 (Lab 1 Sesi 1)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Tata Tertib Pelaksanaan TKA */}
              <div className="p-5 md:p-6 bg-indigo-50/80 rounded-2xl border border-indigo-200 flex items-start gap-4 text-indigo-950">
                <ShieldCheck className="w-7 h-7 text-indigo-700 shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-xs md:text-sm leading-relaxed">
                  <span className="font-black block uppercase tracking-wide text-indigo-950">
                    Tata Tertib Peserta Tes Kemampuan Akademik (TKA) 26 - 27 Oktober 2026:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                    <li>Peserta wajib hadir <strong>15 menit</strong> sebelum waktu sesi dimulai. Keterlambatan tidak diberikan tambahan waktu.</li>
                    <li>Wajib menempati meja laboratorium komputer sesuai dengan <strong>ID Server</strong> dan nomor urut peserta yang tertera pada daftar hadir.</li>
                    <li>Dilarang membawa alat komunikasi, kamera, atau catatan ke dalam ruang laboratorium selama ujian berlangsung.</li>
                    <li>Segera laporkan kepada Pengawas Ujian atau Teknisi Laboratorium jika mengalami kendala login akun atau komputer mati.</li>
                  </ul>
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
              {zoomImageUrl === tkaAnbkDocument.imageUrl && (
                <span className="text-xs text-amber-300 font-black bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg hidden sm:inline">
                  Jadwal Resmi TKA - ANBK TA 2026-2027
                </span>
              )}
              {currentTkaSlideIndex !== -1 && (
                <span className="text-xs text-indigo-300 font-black bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg hidden sm:inline">
                  TKA Lembar {currentTkaSlideIndex + 1} / {tkaSlides.length}: {tkaSlides[currentTkaSlideIndex].badge}
                </span>
              )}
              <span className="text-xs text-slate-400 hidden md:inline">
                Skala: {Math.round(zoomScale * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {currentTkaSlideIndex !== -1 && (
                <>
                  <button
                    onClick={handleModalPrevTkaSlide}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer active:scale-95 touch-manipulation"
                    title="Lembar Sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                  <button
                    onClick={handleModalNextTkaSlide}
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
            {currentTkaSlideIndex !== -1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModalPrevTkaSlide();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl backdrop-blur-md transition z-30 cursor-pointer active:scale-95 touch-manipulation"
                  aria-label="Lembar Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModalNextTkaSlide();
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
            {currentTkaSlideIndex !== -1 && (
              <span className="text-blue-400 font-bold">Gunakan panah kiri/kanan untuk berganti lembar dokumen.</span>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default News;
