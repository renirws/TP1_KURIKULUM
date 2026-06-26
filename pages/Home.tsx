import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Compass, 
  ExternalLink, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Wrench, 
  Anchor, 
  Tv, 
  Truck,
  ArrowRight,
  CheckCircle2,
  FileText,
  CreditCard,
  MessageSquare
} from 'lucide-react';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeMajorTab, setActiveMajorTab] = useState<'tpk' | 'tkro' | 'dkv' | 'mlog'>('tpk');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // SEO-friendly FAQ Data to capture target search queries
  const faqData = [
    {
      question: "Bagaimana cara melakukan pengecekan administrasi & SPP secara real-time?",
      answer: "Siswa dan orang tua dapat mengecek status pembayaran SPP Kelas XI dan Kelas XII secara langsung melalui Portal Siswa di website ini. Cukup masukkan nama siswa di kolom pencarian untuk melihat data rincian tunggakan, uts, uas, dan status administrasi lainnya yang bersumber valid dari Google Spreadsheet tim keuangan sekolah."
    },
    {
      question: "Apa saja Program Keahlian / Jurusan unggulan di SMK Tanjung Priok 1?",
      answer: "Kami menyelenggarakan 4 konsentrasi keahlian berstandar industri nasional: Teknik Pemesinan Kapal (TPK), Teknik Kendaraan Ringan Otomotif (TKRO) yang bermitra dengan industri otomotif resmi, Desain Komunikasi Visual (DKV) dengan unit produksi PriokArt, serta Manajemen Logistik (MLOG) untuk manajemen supply chain modern."
    },
    {
      question: "Di mana lokasi kampus fisik SMK Tanjung Priok 1 Jakarta Utara?",
      answer: "Kampus kami berlokasi strategis di Jl. Mangga No.3, Lagoa, Koja, Jakarta Utara, DKI Jakarta (Kode Pos: 14270). Anda dapat melihat rute navigasi dan peta interaktif langsung di bagian bawah halaman beranda website ini."
    },
    {
      question: "Bagaimana sistem sertifikasi kompetensi keahlian bagi siswa?",
      answer: "Setiap siswa SMK Tanjung Priok 1 diuji langsung melalui Lembaga Sertifikasi Profesi Pihak Pertama (LSP-P1) berlisensi BNSP. Kelulusan siswa diakui secara nasional dengan diperolehnya Sertifikat Garuda Emas yang menjamin daya saing tinggi di pasar kerja internasional."
    },
    {
      question: "Bagaimana alur pendaftaran siswa baru (SPMB) tahun pelajaran 2026/2027?",
      answer: "Pendaftaran dapat diakses secara online melalui portal resmi ppdb2025.smktanjungpriok1.sch.id. Calon siswa diwajibkan mengikuti rangkaian Tes Minat Bakat online di tautan resmi kami untuk penyesuaian profil kompetensi jurusan pilihan."
    }
  ];

  // Majors Details for rich SEO content
  const majorsInfo = {
    tpk: {
      title: "Teknik Pemesinan Kapal (TPK)",
      tagline: "Satu-satunya di Jakarta Utara, mencetak ahli rekayasa & konstruksi perkapalan modern.",
      description: "Konsentrasi keahlian yang fokus pada teknik pengerjaan logam, gambar teknik perkapalan 2D & 3D (CAD/CAM), mesin perkakas, mesin bubut, serta sistem propulsi laut. Lulusan dipersiapkan untuk karir galangan kapal nasional, industri manufaktur alat berat, dan pelabuhan.",
      highlights: [
        "Satu-satunya kompetensi keahlian perkapalan di Jakarta Utara",
        "Praktek langsung dengan Mesin Bubut & CNC Industri",
        "Kerjasama PKL dengan PT Dok & Perkapalan Kodja Bahari (Persero)",
        "Sertifikasi Kompetensi BNSP Pemesinan tingkat nasional"
      ],
      icon: <Anchor className="w-8 h-8 text-blue-600" />
    },
    tkro: {
      title: "Teknik Kendaraan Ringan Otomotif (TKRO)",
      tagline: "Teknisi handal dengan penguasaan teknologi otomotif & sistem kontrol digital.",
      description: "Membekali siswa dengan kompetensi perawatan dan perbaikan mesin bensin/diesel, kelistrikan bodi otomotif, chasis, sistem transmisi otomatis, dan diagnosis engine scanner modern. Kurikulum diselaraskan dengan standar industri Astra dan pabrikan otomotif terkemuka.",
      highlights: [
        "Bengkel praktek standar diler resmi otomotif",
        "Penguasaan Engine EFI Scanner & Diagnosis Digital",
        "Penyelarasan kurikulum dengan Astra Honda Motor & Toyota",
        "Sertifikasi Teknisi Otomotif BNSP Garuda Emas"
      ],
      icon: <Wrench className="w-8 h-8 text-blue-600" />
    },
    dkv: {
      title: "Desain Komunikasi Visual (DKV)",
      tagline: "Kreator konten digital, desainer grafis, & praktisi multimedia profesional.",
      description: "Menghasilkan kreator visual yang kompeten di bidang fotografi industri, videografi, editing video, desain grafis komputer, ilustrasi digital, UI/UX, dan branding. Didukung oleh unit produksi Teaching Factory (PriokArt) untuk pengerjaan proyek komersial riil.",
      highlights: [
        "Fasilitas Studio Fotografi & Lab Multimedia ber-AC",
        "Terintegrasi Teaching Factory PriokArt (priokart.my.id)",
        "Menguasai Adobe Creative Suite, Blender 3D, & Figma",
        "Sertifikasi Desainer Grafis Pratama BNSP"
      ],
      icon: <Tv className="w-8 h-8 text-blue-600" />
    },
    mlog: {
      title: "Manajemen Logistik (MLOG)",
      tagline: "Pusat keunggulan rantai pasok, manajemen pergudangan & pelabuhan.",
      description: "Mempersiapkan tenaga ahli dalam pengelolaan inventory control, supply chain management, sistem administrasi ekspor-impor, pergudangan digital, dan operasional logistik pelabuhan internasional Tanjung Priok Jakarta Utara.",
      highlights: [
        "Berada di episentrum kawasan pelabuhan logistik Tanjung Priok",
        "Penguasaan aplikasi sistem WMS (Warehouse Management System)",
        "Kerjasama industri logistik multinasional & pelabuhan",
        "Sertifikasi Logistik Supply Chain BNSP"
      ],
      icon: <Truck className="w-8 h-8 text-blue-600" />
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Section - Premium & SEO Optimized */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-[#070b19] via-[#0f172a] to-[#1e3a8a] text-white py-20 px-4 overflow-hidden">
        {/* Abstract vector backgrounds */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Glow gradients for high luxury design */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black tracking-widest text-blue-400 uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Akreditasi A • SMK Pusat Keunggulan Jakarta Utara</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Sistem Informasi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Kurikulum Digital
                </span> <br />
                SMK Tanjung Priok 1
              </motion.h1>

              <motion.p 
                className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Pusat integrasi akademik resmi yang memfasilitasi administrasi keuangan SPP, bimbingan PKL industri, jadwal ujian, modul kurikulum merdeka, dan lisensi BNSP terlengkap untuk mencetak lulusan siap kerja.
              </motion.p>

              {/* Badges for majors directly in hero */}
              <motion.div 
                className="flex flex-wrap gap-2 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300">⚓ Pemesinan Kapal</span>
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300">⚙️ Otomotif TKRO</span>
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300">🎨 Multimedia DKV</span>
                <span className="bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300">📦 Manajemen Logistik</span>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Link 
                  to="/kurikulum" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <span>Eksplorasi Kurikulum (KOSP)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/siswa" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-black transition-all text-center cursor-pointer"
                >
                  Portal SPP & Keuangan Siswa
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                className="bg-gradient-to-tr from-slate-900 to-blue-900/60 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 px-4 py-1 rounded-bl-2xl font-black text-[10px] tracking-widest uppercase shadow">
                  SPMB 2026/2027
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Pendaftaran Siswa Baru</h3>
                    <p className="text-xs text-slate-400">Pendidikan vokasi terakreditasi A industri</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Lulusan tersalurkan langsung ke BUMN & Swasta</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Fasilitas Lab Industri standar diler resmi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Bimbingan karir intensif, PKL & LSP-P1 BNSP</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <a 
                    href="https://ppdb2025.smktanjungpriok1.sch.id" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition cursor-pointer shadow-md"
                  >
                    <span>Daftar Online di PPDB Resmi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://tesminatbakatsmktp01.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition cursor-pointer"
                  >
                    <span>Ikuti Tes Minat Bakat</span>
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statistics & Live Links - SEO Keywords Anchor */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
              <span className="p-2 bg-blue-500/10 text-blue-400 rounded-xl mb-2">
                <BookOpen className="w-5 h-5" />
              </span>
              <div className="text-3xl font-black text-blue-400">4</div>
              <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">Konsentrasi Keahlian</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
              <span className="p-2 bg-blue-500/10 text-blue-400 rounded-xl mb-2">
                <Users className="w-5 h-5" />
              </span>
              <div className="text-3xl font-black text-blue-400">119+</div>
              <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">Siswa Kelas XII (UKK)</div>
            </div>

            <a 
              href="https://www.priokart.my.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center hover:brightness-110 transition-all cursor-pointer group"
            >
              <span className="p-2 bg-white/10 text-white rounded-xl mb-2 group-hover:scale-110 transition">
                <Tv className="w-5 h-5" />
              </span>
              <div className="text-lg font-black tracking-tight leading-none text-white">Tefa DKV</div>
              <div className="text-[10px] uppercase tracking-widest font-black opacity-80 mt-1.5">PriokArt Portfolio</div>
            </a>

            <a 
              href="https://s.id/bimlappkl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white border border-slate-100 text-[#0f172a] p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-all cursor-pointer group"
            >
              <span className="p-2 bg-blue-50 text-blue-600 rounded-xl mb-2 group-hover:scale-110 transition">
                <Compass className="w-5 h-5" />
              </span>
              <div className="text-lg font-black tracking-tight leading-none text-blue-600">Bimbingan PKL</div>
              <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1.5">Panduan Praktik Kerja</div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Program Keahlian Unggulan (Interactive Showcase & Keyword Rich) */}
      <section className="py-24 bg-white" id="jurusan">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">Spesialisasi Kejuruan</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">4 Konsentrasi Keahlian Pilihan</h2>
            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
              Disusun berdasarkan standar SKKNI, Kurikulum Merdeka Mandiri Berbagi, serta didukung kerjasama sarana praktek industri terdepan.
            </p>
          </div>

          {/* Interactive tabs for majors */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2 bg-slate-50 p-3 rounded-3xl border border-slate-100">
              <button
                onClick={() => setActiveMajorTab('tpk')}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center space-x-4 border ${
                  activeMajorTab === 'tpk' 
                    ? 'bg-slate-900 text-white border-transparent shadow-lg' 
                    : 'bg-transparent text-slate-700 hover:bg-slate-200/50 border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${activeMajorTab === 'tpk' ? 'bg-blue-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm">Pemesinan Kapal</h4>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${activeMajorTab === 'tpk' ? 'text-blue-300' : 'text-slate-400'}`}>Satu-satunya di Jakut</span>
                </div>
              </button>

              <button
                onClick={() => setActiveMajorTab('tkro')}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center space-x-4 border ${
                  activeMajorTab === 'tkro' 
                    ? 'bg-slate-900 text-white border-transparent shadow-lg' 
                    : 'bg-transparent text-slate-700 hover:bg-slate-200/50 border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${activeMajorTab === 'tkro' ? 'bg-blue-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm">Kendaraan Ringan Otomotif</h4>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${activeMajorTab === 'tkro' ? 'text-blue-300' : 'text-slate-400'}`}>Standar Industri Astra</span>
                </div>
              </button>

              <button
                onClick={() => setActiveMajorTab('dkv')}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center space-x-4 border ${
                  activeMajorTab === 'dkv' 
                    ? 'bg-slate-900 text-white border-transparent shadow-lg' 
                    : 'bg-transparent text-slate-700 hover:bg-slate-200/50 border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${activeMajorTab === 'dkv' ? 'bg-blue-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm">Desain Komunikasi Visual</h4>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${activeMajorTab === 'dkv' ? 'text-blue-300' : 'text-slate-400'}`}>Teaching Factory PriokArt</span>
                </div>
              </button>

              <button
                onClick={() => setActiveMajorTab('mlog')}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center space-x-4 border ${
                  activeMajorTab === 'mlog' 
                    ? 'bg-slate-900 text-white border-transparent shadow-lg' 
                    : 'bg-transparent text-slate-700 hover:bg-slate-200/50 border-transparent'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${activeMajorTab === 'mlog' ? 'bg-blue-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm">Manajemen Logistik</h4>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${activeMajorTab === 'mlog' ? 'text-blue-300' : 'text-slate-400'}`}>Rantai Pasok Maritim</span>
                </div>
              </button>
            </div>

            {/* Major content panel (tab panel) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMajorTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow flex items-center justify-center text-blue-600">
                      {majorsInfo[activeMajorTab].icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase">KOMPETENSI LULUSAN</span>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mt-0.5">{majorsInfo[activeMajorTab].title}</h3>
                    </div>
                  </div>

                  <p className="text-blue-900/80 font-bold text-sm md:text-base leading-relaxed mb-4">
                    "{majorsInfo[activeMajorTab].tagline}"
                  </p>
                  
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    {majorsInfo[activeMajorTab].description}
                  </p>

                  <h5 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-4">Materi & Profil Praktek Utama</h5>
                  <div className="grid md:grid-cols-2 gap-3.5">
                    {majorsInfo[activeMajorTab].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-slate-700 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm font-semibold">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200 flex justify-end">
                    <Link 
                      to="/kurikulum" 
                      className="text-xs md:text-sm font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest flex items-center"
                    >
                      <span>Lihat Struktur Pelajaran & JP</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fitur Akademik & Layanan Digital Terpadu (Informatif, Elegant Bento Grid) */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100" id="portal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="bg-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">Sistem Terintegrasi</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Layanan & Akses Digital Mandiri</h2>
            <p className="text-gray-500 font-medium">Memudahkan siswa, guru, dan wali murid memantau administrasi pembelajaran resmi secara online.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SPP Portal Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Cek SPP Real-time Kelas XI & XII</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Pengecekan mandiri tunggakan SPP, dana pembangunan (PPDB), dan uang ujian akhir secara aman, transparan, dan terhubung langsung dari database keuangan sekolah.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/siswa" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Mulai Cek Keuangan</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* KOSP Curriculum */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Kurikulum & Alokasi JP</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Struktur mata pelajaran resmi Kurikulum Merdeka untuk semua jenjang (X, XI, XII). Dilengkapi alokasi Jam Pelajaran (JP) mingguan valid dan opsi unduh dokumen PDF sah.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/kurikulum" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Akses Struktur Pelajaran</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Prakerin Monitoring */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Praktik Kerja Industri (Prakerin)</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Panduan lengkap penulisan jurnal, jadwal bimbingan PKL, pengunggahan berkas laporan lisan, hingga informasi penempatan industri perkapalan & otomotif diler resmi.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/prakerin" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Panduan Prakerin</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* LSP Certification */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Sertifikasi BNSP & LSP-P1</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Lembaga Sertifikasi Profesi Pihak Pertama (LSP-P1) resmi SMK Tanjung Priok 1. Memfasilitasi ujian kompetensi siswa berlisensi nasional Badan Nasional Sertifikasi Profesi.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/tautan" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Buka Tautan LSP</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Academic Calendar */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Kalender Akademik Terintegrasi</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Akses jadwal aktif sekolah, libur semester nasional resmi DKI Jakarta, pelaksanaan Ujian USBK, UKK, kegiatan OSIS, dan pembagian rapor hasil belajar secara transparan.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/berkas" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Unduh Kalender</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Modul Generator PPM */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Modul Generator PPM</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  Layanan administrasi guru untuk mengunduh modul ajar terstandarisasi sekolah. Membantu efisiensi perencanaan pembelajaran yang interaktif dan komprehensif.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link to="/tautan" className="inline-flex items-center text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest cursor-pointer">
                  <span>Akses Modul Guru</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Warta & Agenda Terbaru (News Section) */}
      <section className="py-24 bg-white" id="warta">
        <div className="container mx-auto px-4">
          <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">Portal Berita Resmi</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 mt-2">Warta Akademik Terbaru</h2>
              <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                Menyajikan pengumuman jadwal UKK, pelaksanaan praktik PKL, sertifikasi LSP, dan agenda kurikulum SMK Tanjung Priok 1 secara berkala dan tepercaya.
              </p>
            </div>
            <Link to="/warta" className="group bg-blue-50 text-blue-600 font-black px-6 py-3.5 rounded-2xl flex items-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnnouncementCard 
              category="Utama"
              title="Jadwal Pelaksanaan UKK Mandiri Kelas XII"
              date="19 April 2026"
              excerpt="Pelaksanaan Uji Kompetensi Keahlian (UKK) Mandiri SMK Tanjung Priok 1 dilaksanakan tanggal 20 - 24 April 2026. Persiapkan diri Anda dengan maksimal."
              imageUrl="https://drive.google.com/thumbnail?id=1ydNqBuZEleKQ7uutqM4hvBI84CPPXRCw&sz=w1600"
              link="/warta"
            />
            <AnnouncementCard 
              category="Prakerin"
              title="Ujian Lisan Laporan Prakerin 2026"
              date="06 April 2026"
              excerpt="Evaluasi akhir Praktik Kerja Industri melalui paparan laporan dan tanya jawab lisan tgl 13 - 15 April 2026."
              imageUrl="https://drive.google.com/thumbnail?id=1Ya27lfM7idDYTs1RbCl_rR3Nm2Zu8UBo&sz=w1600"
              link="/prakerin"
            />
            <AnnouncementCard 
              category="SPMB"
              title="Tes Minat & Bakat Calon Siswa Baru"
              date="Mei 2026"
              excerpt="Bagi calon murid baru yang telah mendaftar, silakan mengikuti rangkaian Tes Minat Bakat secara online melalui portal resmi kami."
              imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
              link="https://tesminatbakatsmktp01.netlify.app/"
            />
          </div>
        </div>
      </section>

      {/* 6. Senior SEO Expert FAQ Section (Essential for Ranking & Schema) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="bg-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">F.A.Q & Pusat Bantuan</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-500 font-medium">Temukan jawaban cepat seputar kurikulum, keuangan siswa, pendaftaran PPDB, dan kemitraan industri.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:border-blue-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 cursor-pointer"
                >
                  <span className="font-bold text-[#0f172a] text-sm md:text-base leading-snug">{faq.question}</span>
                  <span className="flex-shrink-0 p-1 bg-slate-50 rounded-lg text-slate-400">
                    {activeFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-50 text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Wakasek Kurikulum Profile & Aspirations Form */}
      <section className="py-24 bg-white border-t border-gray-100" id="kontak">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Wakasek profile */}
          <div className="lg:col-span-6 space-y-8">
            <header className="relative space-y-2">
              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase inline-block">Tim Pimpinan</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">Wakil Kepala Sekolah Bidang Kurikulum</h2>
              <div className="w-32 h-2 bg-blue-600 mt-4 rounded-full"></div>
            </header>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-[3rem] shadow-xl border border-blue-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full -mr-24 -mt-24 transition-transform group-hover:scale-110 pointer-events-none"></div>
              
              <div className="w-28 h-28 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0 shadow-inner relative z-10">
                <Users className="w-12 h-12 text-slate-300" />
              </div>
              
              <div className="relative z-10 pt-2 w-full text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0f172a]">Reni Widyastuti, M.Kom</h3>
                  <p className="text-blue-600 font-black text-xs uppercase tracking-[0.15em] mt-1">Wakil Kepala Sekolah Bidang Kurikulum</p>
                </div>
                
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  "Sistem informasi kurikulum digital ini didesain guna meningkatkan transparansi akademik dan memudahkan akses cek SPP secara mandiri oleh siswa dan wali kelas secara real-time."
                </p>

                <div className="space-y-2 pt-2 text-left">
                  <div className="flex items-center p-3 bg-blue-50/50 rounded-2xl w-full hover:bg-blue-50 transition">
                    <Mail className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-xs text-slate-700 truncate">renimkom90@guru.smk.belajar.id</span>
                  </div>
                  <div className="flex items-center p-3 bg-slate-50 rounded-2xl w-full">
                    <Clock className="w-4 h-4 mr-3 text-slate-500 flex-shrink-0" />
                    <span className="font-bold text-xs text-[#0f172a]">Jam Layanan: Senin - Kamis | 06:30 - 14:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Aspirations */}
          <div className="lg:col-span-6 bg-[#0f172a] text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <MessageSquare className="w-48 h-48" />
            </div>
            
            <h3 className="text-3xl font-black mb-4 tracking-tight text-white">Hubungi Kami / Aspirasi</h3>
            <p className="text-blue-100/60 mb-8 font-medium leading-relaxed text-sm md:text-base">
              Kirimkan kritik, saran, atau pertanyaan Anda terkait kebijakan kurikulum, penempatan prakerin, maupun administrasi sekolah.
            </p>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Nama Lengkap Anda" 
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition placeholder:text-white/20 font-bold text-sm" 
              />
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition placeholder:text-white/20 font-bold text-sm" 
              />
              <textarea 
                placeholder="Isi pesan atau aspirasi Anda seputar kurikulum..." 
                rows={4} 
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition placeholder:text-white/20 font-bold text-sm"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black transition shadow-[0_20px_40px_rgba(59,130,246,0.25)] text-xs uppercase tracking-widest text-white cursor-pointer"
              >
                Kirim Aspirasi Akademik
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. Local SEO Map and Contact Info (Highly informative for rank improvement) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60" id="lokasi">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Map Frame */}
            <div className="lg:col-span-7 bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden aspect-video relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.070624838612!2d106.90163537580665!3d-6.115850693870635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m2!2sJl.+Mangga+No.3%2C+RT.3%2FRW.3%2C+Lagoa%2C+Kec.+Koja%2C+Jkt+Utara%2C+Daerah+Khusus+Ibukota+Jakarta+14270!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi SMK Tanjung Priok 1"
                className="rounded-3xl"
              ></iframe>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase inline-block">Lokasi Kampus Resmi</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Kunjungi SMK Tanjung Priok 1</h2>
              <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">
                Kami selalu terbuka untuk kunjungan industri, pendaftaran siswa baru secara offline, serta sesi konsultasi akademik kurikulum vokasi.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-blue-600 border border-slate-100 rounded-2xl shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Alamat Lengkap</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      Jl. Mangga No.3, RT.3/RW.3, Lagoa, Kec. Koja, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14270
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-blue-600 border border-slate-100 rounded-2xl shadow-sm flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Telepon & Fax</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      (021) 4301192
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-blue-600 border border-slate-100 rounded-2xl shadow-sm flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Email Resmi</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      smk1dikantara@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="https://maps.google.com/?q=SMK+Tanjung+Priok+1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-slate-900 text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition flex items-center space-x-2 shadow cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-blue-400" />
                  <span>Petunjuk Arah Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const AnnouncementCard: React.FC<{ category: string, title: string, date: string, excerpt: string, link?: string, imageUrl?: string }> = ({ category, title, date, excerpt, link, imageUrl }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  return (
    <article className="bg-white border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all group rounded-[2rem] flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{category}</span>
          <time className="flex items-center text-gray-400 text-[10px] font-semibold" dateTime={date}>
            <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
            {date}
          </time>
        </div>

        <h3 className="text-lg md:text-xl font-black text-slate-900 mt-4 group-hover:text-blue-600 transition leading-snug cursor-pointer">{title}</h3>
        
        {imageUrl && (
          <div className="relative mt-4 group">
            <div 
              className="aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Zoom Modal */}
            {isZoomed && (
              <div 
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 animate-in fade-in duration-200"
                onClick={() => setIsZoomed(false)}
              >
                <button 
                  className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[110]"
                  onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
                    referrerPolicy="no-referrer"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-slate-500 font-medium text-xs md:text-sm mt-4 leading-relaxed">{excerpt}</p>
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-50">
        {link ? (
          link.startsWith('http') ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-black text-slate-800 group-hover:text-blue-600 transition uppercase tracking-wider"
            >
              <span>Detail Berita</span> 
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition" />
            </a>
          ) : (
            <Link 
              to={link} 
              className="inline-flex items-center text-xs font-black text-slate-800 group-hover:text-blue-600 transition uppercase tracking-wider"
            >
              <span>Detail Berita</span> 
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition" />
            </Link>
          )
        ) : (
          <button className="inline-flex items-center text-xs font-black text-slate-800 group-hover:text-blue-600 transition uppercase tracking-wider">
            <span>Detail Berita</span> 
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition" />
          </button>
        )}
      </div>
    </article>
  );
};

export default Home;
