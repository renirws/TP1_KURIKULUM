import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Globe, 
  BookOpen, 
  Award, 
  Sparkles, 
  FileText, 
  Upload, 
  Search, 
  Copy, 
  Check, 
  BookMarked, 
  Filter, 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  Download, 
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  ExternalLink as ExternalLinkIcon,
  Sparkle
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  category: 'buku' | 'ujian' | 'guru' | 'siswa';
  tag: string;
  featured?: boolean;
  officialBadge?: string;
  actionText?: string;
}

const ExternalLinks: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const links: LinkItem[] = [
    {
      id: "buku-kemendikdasmen",
      title: "KATALOG BUKU KEMENDIKDASMEN RI",
      description: "Portal resmi Sistem Informasi Perbukuan Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) RI. Akses dan unduh gratis ribuan Buku Teks Utama Kurikulum Merdeka, Buku Panduan Guru, serta Buku Pengayaan terverifikasi untuk SMK, SMA, SMP, dan SD.",
      url: "https://buku.kemendikdasmen.go.id/katalog",
      icon: <BookMarked className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-600",
      category: "buku",
      tag: "Kemendikdasmen RI",
      featured: true,
      officialBadge: "Katalog Resmi Nasional",
      actionText: "Buka Katalog Buku"
    },
    {
      id: "upload-sts",
      title: "UNGGAH SOAL STS GANJIL TA 2026-2027",
      description: "Portal resmi pengiriman dan penyerahan naskah soal Sumatif Tengah Semester (STS) Ganjil Tahun Pelajaran 2026-2027 untuk Bapak/Ibu Guru SMK Tanjung Priok 1.",
      url: "https://s.id/UploadSoalSTSGanjil26-27",
      icon: <Upload className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      category: "ujian",
      tag: "Pengumpulan Soal",
      officialBadge: "Guru TP1",
      actionText: "Kirim Naskah Soal"
    },
    {
      id: "ruang-guru",
      title: "PORTAL RUANG GURU (LOGIN KURIKULUM)",
      description: "Portal resmi login sistem informasi kurikulum terpadu, manajemen administrasi guru, jurnal pembelajaran, rekap absensi, silabus, dan penilaian akademik SMK Tanjung Priok 1.",
      url: "https://kurikulum.smktanjungpriok1.sch.id/login",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-700",
      category: "guru",
      tag: "Ruang Guru",
      featured: true,
      officialBadge: "Sistem Guru TP1",
      actionText: "Login Ruang Guru"
    },
    {
      id: "kosp-2026",
      title: "KOSP SMK TANJUNG PRIOK 1 TAHUN AJARAN 2026-2027",
      description: "Dokumen Kurikulum Operasional Satuan Pendidikan (KOSP) SMK Tanjung Priok 1 Jakarta Utara Tahun Ajaran 2026-2027 berbasis Kurikulum Merdeka secara lengkap, resmi, dan interaktif (Flipbook).",
      url: "https://online.fliphtml5.com/hblai/erro/",
      icon: <FileText className="w-8 h-8" />,
      color: "from-rose-500 to-red-600",
      category: "buku",
      tag: "KOSP 2026-2027",
      officialBadge: "Dokumen Kurikulum",
      actionText: "Baca Flipbook KOSP"
    },
    {
      id: "modul-generator",
      title: "Modul Generator & Pembuatan PPM",
      description: "Asisten cerdas berbasis web untuk membantu guru merumuskan, menyusun, dan menghasilkan Program Pengembangan Pembelajaran (PPM) serta Modul Ajar Kurikulum Merdeka secara otomatis, cepat, dan terstandar.",
      url: "https://sites.google.com/view/modulgeneratesmktp1/moodul-generator",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-violet-500 to-fuchsia-600",
      category: "buku",
      tag: "Modul Generator",
      officialBadge: "Alat Bantu Guru",
      actionText: "Buka Modul Generator"
    },
    {
      id: "tefa-dkv",
      title: "Tefa DKV (Teaching Factory)",
      description: "Portal resmi Teaching Factory Program Keahlian Desain Komunikasi Visual SMK Tanjung Priok 1 (PriokArt). Showcase karya kreatif siswa, portofolio multimedia, dan layanan jasa industri.",
      url: "https://www.priokart.my.id",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      category: "siswa",
      tag: "Teaching Factory",
      officialBadge: "Karya Siswa",
      actionText: "Kunjungi PriokArt"
    },
    {
      id: "sim-pkl",
      title: "Bimbingan PKL & Prakerin",
      description: "Sistem informasi manajemen (SIM PKL) dan panduan bimbingan Praktik Kerja Lapangan / Prakerin untuk siswa-siswi SMK Tanjung Priok 1 bersama mitra industri maritim & manufaktur.",
      url: "https://simpkl.smktanjungpriok1.sch.id",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      category: "siswa",
      tag: "SIM PKL",
      officialBadge: "Vokasi Industri",
      actionText: "Akses SIM PKL"
    },
    {
      id: "tes-spmb",
      title: "Tes Minat Bakat SPMB 2026/2027",
      description: "Uji instrumen peminatan dan tes bakat bagi calon peserta didik baru SMK Tanjung Priok 1 sebagai tahapan seleksi penerimaan murid baru (SPMB).",
      url: "https://tesminatbakatsmktp01.netlify.app/",
      icon: <ExternalLink className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      category: "ujian",
      tag: "SPMB 2026",
      officialBadge: "Seleksi Murid Baru",
      actionText: "Mulai Tes Minat Bakat"
    },
    {
      id: "lsp-bnsp",
      title: "Sertifikasi Kompetensi LSP-P1 BNSP",
      description: "Portal pendaftaran dan verifikasi asesi (siswa) untuk uji sertifikasi kompetensi kerja berlisensi Badan Nasional Sertifikasi Profesi (BNSP) di LSP-P1 SMK Tanjung Priok 1.",
      url: "https://lspsmktanjungpriok1.netlify.app/",
      icon: <Award className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      category: "siswa",
      tag: "LSP BNSP",
      officialBadge: "Sertifikasi Profesi",
      actionText: "Daftar Sertifikasi"
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Tautan' },
    { id: 'buku', label: 'Buku & Kurikulum' },
    { id: 'ujian', label: 'Ujian & Penilaian' },
    { id: 'guru', label: 'Portal Guru' },
    { id: 'siswa', label: 'Siswa & Industri' }
  ];

  const filteredLinks = useMemo(() => {
    return links.filter(link => {
      const matchCategory = selectedCategory === 'all' || link.category === selectedCategory;
      const matchSearch = 
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.url.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = (id: string, url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const faqs = [
    {
      q: "Bagaimana cara mengakses dan mengunduh buku di Katalog Kemendikdasmen RI?",
      a: "Kunjungi portal resmi https://buku.kemendikdasmen.go.id/katalog melalui tombol tautan di atas. Pilih jenjang 'SMK', tentukan Program Keahlian atau mata pelajaran umum (Fase E untuk Kelas X, Fase F untuk Kelas XI & XII), lalu klik 'Unduh PDF' untuk mendapatkan Buku Teks Utama Siswa atau Buku Panduan Guru secara legal dan gratis."
    },
    {
      q: "Apakah seluruh buku di Katalog Kemendikdasmen berlisensi gratis?",
      a: "Ya. Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) RI menyediakan seluruh buku teks resmi Kurikulum Merdeka untuk mendukung akses pendidikan merata bagi seluruh satuan pendidikan dan siswa di Indonesia tanpa dipungut biaya."
    },
    {
      q: "Siapa yang dapat mengakses Portal Ruang Guru SMK Tanjung Priok 1?",
      a: "Portal Ruang Guru dikhususkan bagi Dewan Guru dan Tenaga Kependidikan SMK Tanjung Priok 1 untuk administrasi silabus, presensi harian, nilai sumatif, dan input KOSP. Login dapat diakses di https://kurikulum.smktanjungpriok1.sch.id/login."
    },
    {
      q: "Bagaimana alur pengumpulan naskah soal STS Ganjil TA 2026/2027?",
      a: "Bapak/Ibu Guru pengampu mata pelajaran dapat mengunggah kisi-kisi, naskah soal, dan kunci jawaban melalui tautan Google Drive / formulir resmi 'UNGGAH SOAL STS GANJIL' dengan tenggat waktu yang telah ditetapkan tim kurikulum."
    },
    {
      q: "Apakah aplikasi web ini dapat diakses secara mobile layaknya aplikasi (APK)?",
      a: "Benar! Website kurikulum SMK Tanjung Priok 1 dirancang dengan arsitektur Mobile-First PWA (Progressive Web App). Anda dapat menambahkan website ini ke layar utama ponsel (Add to Home Screen) untuk menikmati pengalaman akses cepat, responsif, dan ringan tanpa perlu mengunduh file APK secara terpisah."
    }
  ];

  // Schema.org Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
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
            "name": "Tautan Penting & Katalog Buku Kemendikdasmen",
            "item": "https://tp1kurikulum.my.id/tautan"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://tp1kurikulum.my.id/tautan#page",
        "url": "https://tp1kurikulum.my.id/tautan",
        "name": "Direktori Tautan Resmi & Katalog Buku Kemendikdasmen | SMK Tanjung Priok 1",
        "description": "Koleksi portal resmi pendidikan, Katalog Buku Kurikulum Merdeka Kemendikdasmen RI, Sistem Ruang Guru, Pengumpulan Soal STS, LSP BNSP, dan SIM PKL.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Kurikulum SMK Tanjung Priok 1",
          "url": "https://tp1kurikulum.my.id"
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": links.length,
          "itemListElement": links.map((item, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": item.title,
            "description": item.description,
            "url": item.url
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://tp1kurikulum.my.id/tautan#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 md:py-16">
      <SEO 
        title="Tautan Penting & Katalog Buku Kemendikdasmen | SMK TANJUNG PRIOK 1"
        description="Akses resmi Katalog Buku Kemendikdasmen RI Kurikulum Merdeka, Portal Ruang Guru, Unggah Soal STS Ganjil, KOSP 2026-2027, SIM PKL, LSP BNSP, dan Modul Generator."
        keywords="Katalog Buku Kemendikdasmen, Buku Kurikulum Merdeka Kemendikdasmen, Buku Teks Siswa SMK, Tautan Penting SMK Tanjung Priok 1, Portal Ruang Guru SMK, Upload Soal STS Ganjil, KOSP SMK Tanjung Priok 1, SIM PKL SMK Tanjung Priok 1, LSP BNSP"
        canonical="https://tp1kurikulum.my.id/tautan"
        schemaMarkup={jsonLdData}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-semibold">
          <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-blue-600 font-bold">Tautan Penting & Katalog Buku</span>
        </nav>

        {/* Hero Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkle className="w-3.5 h-3.5 text-blue-600" />
            <span>Pusat Sumber Belajar & Layanan Digital</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            Direktori Tautan & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Katalog Buku Resmi</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed font-medium"
          >
            Akses langsung ke Katalog Buku Kurikulum Merdeka Kemendikdasmen RI, portal administrasi guru, pengumpulan soal STS, dokumen KOSP, hingga sertifikasi kompetensi kejuruan.
          </motion.p>
        </header>

        {/* Quick Highlights / Stats Bar for Trust & Mobile Engagement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10"
        >
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-black text-slate-900">Kemendikdasmen</div>
              <div className="text-[11px] text-slate-500 font-semibold">Katalog Buku Resmi</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-black text-slate-900">100% Valid</div>
              <div className="text-[11px] text-slate-500 font-semibold">Tautan Terverifikasi</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-black text-slate-900">Guru & Siswa</div>
              <div className="text-[11px] text-slate-500 font-semibold">Layanan Akademik</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-black text-slate-900">Akses Cepat</div>
              <div className="text-[11px] text-slate-500 font-semibold">Responsif & Mobile</div>
            </div>
          </div>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <section aria-label="Pencarian dan Filter Tautan" className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200/90 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <label htmlFor="search-tautan" className="sr-only">Cari Tautan atau Buku</label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="search-tautan"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tautan, buku kemendikdasmen, kosp, login..."
                className="w-full pl-11 pr-10 py-3 text-sm bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Bersihkan pencarian"
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Result counter indicator */}
            <div className="text-xs font-bold text-slate-500 self-start md:self-center">
              Menampilkan <span className="text-blue-600 font-black">{filteredLinks.length}</span> portal
            </div>
          </div>

          {/* Category Filter Pills (Mobile Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-100 no-scrollbar">
            <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Kategori:
            </span>
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight whitespace-nowrap transition-all duration-200 shrink-0 ${
                    active 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Primary Link Cards Grid */}
        <section aria-label="Daftar Tautan Resmi" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, index) => (
                <motion.article
                  key={link.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className={`relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col justify-between overflow-hidden group ${
                    link.featured 
                      ? 'border-blue-300 ring-2 ring-blue-500/10' 
                      : 'border-slate-200/80 hover:border-blue-200'
                  }`}
                >
                  {/* Subtle Background Gradient Accents */}
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${link.color} opacity-10 rounded-bl-[4rem] group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                  <div>
                    {/* Top Meta Badges */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          {link.tag}
                        </span>
                        {link.officialBadge && (
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {link.officialBadge}
                          </span>
                        )}
                      </div>

                      {/* Copy Link Button */}
                      <button
                        onClick={() => handleCopyLink(link.id, link.url)}
                        title="Salin Tautan"
                        aria-label={`Salin tautan ${link.title}`}
                        className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 active:scale-90 transition-all border border-transparent hover:border-blue-100"
                      >
                        {copiedId === link.id ? (
                          <span className="flex items-center text-xs font-bold text-emerald-600 gap-1">
                            <Check className="w-4 h-4" />
                            <span className="hidden sm:inline">Tersalin</span>
                          </span>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {link.title}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {link.description}
                    </p>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]" title={link.url}>
                      {link.url.replace(/^https?:\/\//, '')}
                    </div>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm ${
                        link.featured
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                          : 'bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10'
                      }`}
                    >
                      <span>{link.actionText || 'Kunjungi Portal'}</span>
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full bg-white rounded-3xl p-12 text-center border border-slate-200">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-black text-slate-800 mb-2">Tautan Tidak Ditemukan</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Tidak ada tautan atau portal yang sesuai dengan kata kunci &quot;{searchQuery}&quot;. Silakan coba kata kunci lain.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  Reset Filter & Pencarian
                </button>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* Featured Educational Guide: Cara Mengakses Katalog Kemendikdasmen (High SEO Value & Rich Snippet Content) */}
        <section aria-label="Panduan Akses Katalog Buku Kemendikdasmen" className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 md:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs uppercase tracking-wider font-bold mb-2">
                  Panduan Resmi Guru & Murid
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  Cara Mengunduh Buku Kurikulum Merdeka di Katalog Kemendikdasmen
                </h2>
              </div>
              <a
                href="https://buku.kemendikdasmen.go.id/katalog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all self-start md:self-auto shrink-0 shadow-lg shadow-teal-500/20"
              >
                <span>Buka Katalog Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                  1
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">Buka Katalog Resmi</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Akses portal resmi di <span className="text-teal-300">buku.kemendikdasmen.go.id/katalog</span> melalui smartphone atau browser laptop.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                  2
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">Pilih Jenjang SMK</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gunakan menu filter untuk memilih jenjang <strong>SMK</strong> dan tentukan fase belajar (Fase E untuk Kelas X, Fase F untuk Kelas XI & XII).
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                  3
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">Pilih Program Keahlian</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pilih mata pelajaran umum atau konsentrasi kejuruan (Pemesinan Kapal, Otomotif TKRO, DKV, dan Logistik).
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                  4
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">Unduh PDF Gratis</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pilih &quot;Buku Teks Siswa&quot; atau &quot;Buku Panduan Guru&quot;. Klik tombol unduh PDF resmi secara gratis dan 100% legal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section with Google Rich Snippet JSON-LD */}
        <section aria-label="Pertanyaan yang Sering Diajukan" className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-2">
              FAQ & Informasi Bantuan
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Pertanyaan Seputar Layanan & Tautan Kurikulum
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-2">
              Informasi lengkap terkait akses buku teks Kemendikdasmen RI, portal guru, dan penilaian akademik.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 md:p-5 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 md:p-5 pt-0 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* SEO In-Depth Content Section (Crucial for Top Search Engine Ranking) */}
        <section className="bg-slate-100/70 rounded-3xl p-6 md:p-8 border border-slate-200 text-slate-600 text-xs md:text-sm leading-relaxed">
          <h2 className="text-lg md:text-xl font-black text-slate-900 mb-3">
            Ekosistem Pembelajaran Digital Terintegrasi SMK Tanjung Priok 1 Jakarta Utara
          </h2>
          <p className="mb-3">
            Sebagai Sekolah Menengah Kejuruan yang berfokus pada pencetakan lulusan profesional, <strong>SMK Tanjung Priok 1</strong> mengintegrasikan sistem pembelajaran modern berbasis <strong>Kurikulum Merdeka</strong> dan platform digital nasional. Melalui kolaborasi dengan <strong>Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) RI</strong>, seluruh siswa dan pendidik dapat mengakses referensi buku teks utama, perangkat ajar, dan modul ajar terstandar secara terbuka dan terpercaya.
          </p>
          <p>
            Selain itu, tautan layanan penunjang seperti <strong>Teaching Factory (Tefa) DKV PriokArt</strong>, <strong>Sistem Informasi Bimbingan Praktik Kerja Lapangan (SIM PKL)</strong>, dan uji sertifikasi kerja <strong>LSP-P1 BNSP</strong> memastikan kompetensi peserta didik terasah selaras dengan kebutuhan dunia usaha dan dunia industri (DUDI).
          </p>
        </section>
      </div>
    </main>
  );
};

export default ExternalLinks;
