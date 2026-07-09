import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink, 
  FolderOpen, 
  X, 
  Calendar, 
  Maximize2,
  BookOpen,
  Clock,
  Download,
  Award,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface ScheduleImage {
  originalUrl: string;
  directUrl: string;
  title: string;
}

const TEACHER_SCHEDULE_IMAGES: ScheduleImage[] = [
  {
    originalUrl: "https://drive.google.com/file/d/11cLe9qVMsaqLv9HnACmJvCs_VJxOXvIz/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/11cLe9qVMsaqLv9HnACmJvCs_VJxOXvIz",
    title: "Halaman 1 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1FXNyO3UXJgIePQ3751sTMV1u4O95im-B/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1FXNyO3UXJgIePQ3751sTMV1u4O95im-B",
    title: "Halaman 2 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1cJ6cT6-gXY-fWMB-4HEREpIdzIrn1onI/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1cJ6cT6-gXY-fWMB-4HEREpIdzIrn1onI",
    title: "Halaman 3 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1XPA2UL-pXGpP5zoglPnDVdtGU3KoXtce/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1XPA2UL-pXGpP5zoglPnDVdtGU3KoXtce",
    title: "Halaman 4 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1Kp8G895Tb2X2UvaEYT-op77B4T0YJ2Q2/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1Kp8G895Tb2X2UvaEYT-op77B4T0YJ2Q2",
    title: "Halaman 5 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1QBKRVO8b__W9LpXMUYE5KSnBx8Np9dDr/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1QBKRVO8b__W9LpXMUYE5KSnBx8Np9dDr",
    title: "Halaman 6 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/18nQ7rjDuRdkKIaUdBF-8K3_YYH5F2nQw/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/18nQ7rjDuRdkKIaUdBF-8K3_YYH5F2nQw",
    title: "Halaman 7 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1ZyzfkkY_0O3ULwr7QlurbXwmBSNtpJmu/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1ZyzfkkY_0O3ULwr7QlurbXwmBSNtpJmu",
    title: "Halaman 8 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1O96p2YObGAkjqOW-4aVHVp--tNFIPndW/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1O96p2YObGAkjqOW-4aVHVp--tNFIPndW",
    title: "Halaman 9 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1UinfrhlKPtA3aiZ3fh4Jc8mpkoPDsS4O/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1UinfrhlKPtA3aiZ3fh4Jc8mpkoPDsS4O",
    title: "Halaman 10 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/14Z6e3XLfEHbfHIpwPfyy1XM4FU_1OUWs/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/14Z6e3XLfEHbfHIpwPfyy1XM4FU_1OUWs",
    title: "Halaman 11 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1f5SHDVOxWqzX4FLAxcCZaUaH8ul-zSdf/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1f5SHDVOxWqzX4FLAxcCZaUaH8ul-zSdf",
    title: "Halaman 12 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1QSWwqq8aqrL84QI6U2txSJQcs_nSXesA/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1QSWwqq8aqrL84QI6U2txSJQcs_nSXesA",
    title: "Halaman 13 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1UYwgpjDFLLzQYrT-lK-oAjAyBqWM8RtX/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1UYwgpjDFLLzQYrT-lK-oAjAyBqWM8RtX",
    title: "Halaman 14 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1fBPbE8bfQZL1-taxxA07L3Nljz20S9tJ/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1fBPbE8bfQZL1-taxxA07L3Nljz20S9tJ",
    title: "Halaman 15 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1sjwTmAoP8ljH2COpymylDg0HfyEzLdM6/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1sjwTmAoP8ljH2COpymylDg0HfyEzLdM6",
    title: "Halaman 16 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1qvrSUT11kL56QxSZyT6_aSKKh_NEymEV/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1qvrSUT11kL56QxSZyT6_aSKKh_NEymEV",
    title: "Halaman 17 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1UOozplmKgiKKiF87mdkH76EehV9Kioa5/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1UOozplmKgiKKiF87mdkH76EehV9Kioa5",
    title: "Halaman 18 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1G04kVSEWtJlxvVBm17t5W4SIfeBksFYr/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1G04kVSEWtJlxvVBm17t5W4SIfeBksFYr",
    title: "Halaman 19 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1sZ7BjtDAOJJMubo78Znc2dgrkY46dFxT/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1sZ7BjtDAOJJMubo78Znc2dgrkY46dFxT",
    title: "Halaman 20 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/19cibj-g5DCXmfT1jL8_GT2KsS5hrMATr/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/19cibj-g5DCXmfT1jL8_GT2KsS5hrMATr",
    title: "Halaman 21 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1rJNBfMgbBAF7u6jxY-3ZiyjP9CJloh3v/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1rJNBfMgbBAF7u6jxY-3ZiyjP9CJloh3v",
    title: "Halaman 22 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1oB-2xbF3rGnaS7jr1P75GyBplND7TyX0/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1oB-2xbF3rGnaS7jr1P75GyBplND7TyX0",
    title: "Halaman 23 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1dv9bk0M1hLaG9cFbJQ2_1_j3mgf9cbmQ/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1dv9bk0M1hLaG9cFbJQ2_1_j3mgf9cbmQ",
    title: "Halaman 24 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1CZ7CHDcUizNvD1RrAQXQQJz6OL8aNuIp/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1CZ7CHDcUizNvD1RrAQXQQJz6OL8aNuIp",
    title: "Halaman 25 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1QJfOXPOWzjX6hWgsN4B2lCUEBJGVMkFE/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1QJfOXPOWzjX6hWgsN4B2lCUEBJGVMkFE",
    title: "Halaman 26 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1PHsenjYEevFkjePgHWVbidc53IFhVwlC/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1PHsenjYEevFkjePgHWVbidc53IFhVwlC",
    title: "Halaman 27 • Jadwal Mengajar Guru"
  },
  {
    originalUrl: "https://drive.google.com/file/d/1YDEnWyWouENWIo_xB5cy7P1KZ7WdRFEY/view?usp=drive_link",
    directUrl: "https://lh3.googleusercontent.com/d/1YDEnWyWouENWIo_xB5cy7P1KZ7WdRFEY",
    title: "Halaman 28 • Jadwal Mengajar Guru"
  }
];

const Teachers: React.FC = () => {
  const scheduleLink = "https://drive.google.com/file/d/1KHZ1hRPjJ0gW2JZTFyPhijMphjVFwirD/view?usp=drive_link";
  const adminToolLink = "https://s.id/ToolAjarGuru";
  const permissionFormLink = "https://forms.gle/FMQBg8EemZeRpwdT6";
  const rakerLink = "https://s.id/RAKER_TP01";
  const skMengajarLink = "https://drive.google.com/drive/folders/1VqkRmZRZbykY16aoJFe9Hvytuf4ZH5aH?usp=drive_link";

  // States for Teacher Schedule Slideshow
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<ScheduleImage | null>(null);
  const [showThumbnailGrid, setShowThumbnailGrid] = useState<boolean>(false);

  const totalImages = TEACHER_SCHEDULE_IMAGES.length;
  const currentImage = TEACHER_SCHEDULE_IMAGES[activeImageIndex];

  const handleNextPage = () => {
    setActiveImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrevPage = () => {
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title="Jadwal Mengajar Guru SMK Tanjung Priok 1 TA 2026/2027 | Portal Pendidik"
        description="Portal resmi khusus tenaga pendidik SMK Tanjung Priok 1 Jakarta Utara. Dapatkan update instan Jadwal Mengajar Guru TA 2026/2027 terlengkap, sistem penugasan piket, administrasi kelas, form izin guru, serta link Rapat Kerja (RAKER)."
        keywords="Jadwal Mengajar Guru, SMK Tanjung Priok 1, Ruang Guru SMK Tanjung Priok 1, Kurikulum SMK Tanjung Priok 1, Raker Guru TP01, Administrasi Guru, Perangkat Pembelajaran, Portal Pendidik Vokasi"
      />

      {/* Header Section */}
      <div className="bg-[#0f172a] text-white pt-20 pb-32 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="bg-blue-600 text-white px-4.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block shadow-lg border border-blue-400/20">
              Portal Pendidik • Official
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white tracking-tight">
              Ruang Guru <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                SMK Tanjung Priok 1
              </span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Pusat kendali administrasi pembelajaran, jadwal mengajar terlengkap, dan media koordinasi kurikulum terpadu bagi seluruh Tenaga Pendidik Profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-20 pb-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Featured Schedule Card - MAIN ATTRACTION WITH SLIDESHOW */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100/80 transition-all hover:shadow-blue-500/5">
              
              {/* Header Gradient Panel of Slideshow */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-110 pointer-events-none">
                  <Calendar className="w-56 h-56 text-blue-400" />
                </div>

                <div className="relative z-10">
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase mb-3.5 inline-block">
                    Update TA 2026/2027 • Terbaru
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">Jadwal Mengajar Guru</h2>
                  <p className="text-slate-300 text-sm md:text-base mb-0 font-semibold opacity-90 max-w-2xl leading-relaxed">
                    Akses lembar cetak jadwal resmi sekolah Tahun Ajaran 2026/2027 secara praktis melalui slide interaktif di bawah ini. Pastikan kehadiran tepat waktu demi kenyamanan KBM.
                  </p>
                </div>
              </div>

              {/* Interactive Photo Stage of teaching schedule */}
              <div className="p-6 md:p-10 bg-slate-50 border-b border-slate-100">
                {/* Meta details of active page */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Dokumen Terpilih
                    </span>
                    <h3 className="text-base font-black text-slate-800 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      {currentImage.title}
                    </h3>
                  </div>

                  {/* Dropdown Selector for direct jumping (Essential UX for 28 pages!) */}
                  <div className="flex items-center space-x-2">
                    <label htmlFor="page-select" className="text-xs font-bold text-slate-500 whitespace-nowrap">
                      Lompat Ke:
                    </label>
                    <div className="relative">
                      <select
                        id="page-select"
                        value={activeImageIndex}
                        onChange={(e) => setActiveImageIndex(Number(e.target.value))}
                        className="appearance-none bg-white border border-slate-200 hover:border-blue-500 text-slate-800 font-extrabold text-xs px-4 py-2 pr-10 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                      >
                        {TEACHER_SCHEDULE_IMAGES.map((img, idx) => (
                          <option key={idx} value={idx}>
                            Halaman {idx + 1}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* The main Image Container Frame */}
                <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-3xl bg-slate-950 flex items-center justify-center border border-slate-200 shadow-inner group/stage">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={currentImage.directUrl}
                      alt={currentImage.title}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="max-w-full max-h-full object-contain cursor-zoom-in transition-transform duration-300 hover:scale-[1.015]"
                      onClick={() => setLightboxImage(currentImage)}
                    />
                  </AnimatePresence>

                  {/* Dark gradient shadow inside image display */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                  {/* Image Overlaid Actions */}
                  <div className="absolute bottom-5 right-5 z-20 flex items-center space-x-2.5 opacity-90 group-hover/stage:opacity-100 transition-opacity">
                    <button
                      onClick={() => setLightboxImage(currentImage)}
                      className="bg-slate-900/80 hover:bg-blue-600 text-white p-3.5 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-md flex items-center space-x-1.5 text-xs font-bold cursor-pointer border border-white/10"
                      title="Perbesar Jadwal"
                    >
                      <ZoomIn className="w-4.5 h-4.5 text-blue-300" />
                      <span className="hidden sm:inline">Perbesar</span>
                    </button>

                    <a
                      href={currentImage.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900/80 hover:bg-slate-800 text-white p-3.5 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-md flex items-center space-x-1.5 text-xs font-bold cursor-pointer border border-white/10"
                      title="Buka Drive Asli"
                    >
                      <ExternalLink className="w-4.5 h-4.5 text-slate-300" />
                      <span className="hidden sm:inline">Buka Drive</span>
                    </a>
                  </div>

                  {/* Navigation Arrows Inside Stage */}
                  <button
                    onClick={handlePrevPage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-900/65 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                    aria-label="Sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNextPage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-900/65 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                    aria-label="Berikutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Floating Halaman Badge */}
                  <div className="absolute top-5 left-5 z-20 bg-slate-900/85 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                    Halaman {activeImageIndex + 1} / {totalImages}
                  </div>
                </div>

                {/* Desktop and Mobile Thumbnail / Page Selector Strip */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                      Semua Lembar Jadwal ({totalImages} Halaman)
                    </span>
                    <button
                      onClick={() => setShowThumbnailGrid(!showThumbnailGrid)}
                      className="text-xs font-black text-blue-600 hover:text-blue-800 transition flex items-center gap-1.5"
                    >
                      <LayoutGrid className="w-4 h-4" />
                      <span>{showThumbnailGrid ? "Sembunyikan Grid" : "Tampilkan Semua Halaman"}</span>
                    </button>
                  </div>

                  {/* Grid of buttons for pages */}
                  <AnimatePresence>
                    {showThumbnailGrid ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-slate-100 rounded-2xl p-4 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-2 mb-4 overflow-hidden border border-slate-200"
                      >
                        {TEACHER_SCHEDULE_IMAGES.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setActiveImageIndex(idx);
                              setShowThumbnailGrid(false);
                            }}
                            className={`py-2 rounded-xl text-xs font-black transition-all border ${
                              activeImageIndex === idx
                                ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            P{idx + 1}
                          </button>
                        ))}
                      </motion.div>
                    ) : (
                      // Compact Horizontal Scrolling Strip
                      <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                        {TEACHER_SCHEDULE_IMAGES.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 border ${
                              activeImageIndex === idx
                                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                            }`}
                          >
                            Hal {idx + 1}
                          </button>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Row: Official Drive Folder Link & Tips */}
              <div className="p-8 md:p-10 bg-white grid md:grid-cols-2 gap-6 items-center">
                <div className="text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Format Dokumen
                  </span>
                  <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                    Setiap berkas jadwal merupakan salinan resmi resolusi tinggi dari Kalender Kurikulum SMK Tanjung Priok 1 TA 2026/2027.
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a 
                    href={scheduleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center space-x-2.5 transition-all duration-300 text-xs uppercase tracking-wider cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <FolderOpen className="w-4.5 h-4.5 text-blue-400" />
                    <span>Buka Folder Drive Utama</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

            </div>

            {/* Jam Operasional & Piket Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[2.2rem] p-8 border border-slate-100 shadow-md flex items-start space-x-5">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-[#0f172a] text-lg mb-1">Jam Operasional</h4>
                  <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                    Senin - Kamis : 06:30 - 15:45 WIB <br />
                    Jumat: 06:30 - 15:30 WIB
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[2.2rem] p-8 border border-slate-100 shadow-md flex items-start space-x-5">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-[#0f172a] text-lg mb-1">Piket Harian</h4>
                  <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                    Koordinasi piket, administrasi absensi kelas, dan pengkondisian diatur detail dalam lampiran jadwal utama.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="space-y-8">
            {/* SK Mengajar Card */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-950 p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group border border-purple-500/30">
              <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform">
                <Award className="w-32 h-32 text-purple-400" />
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-purple-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-purple-300 mb-3 border border-purple-400/30">
                <span>DOKUMEN UTAMA</span>
              </div>
              <h3 className="text-2xl font-black mb-3">SK Mengajar TA 2026/2027</h3>
              <p className="text-purple-100/70 text-sm font-medium mb-6 leading-relaxed">
                Unduh Surat Keputusan (SK) Mengajar resmi untuk kelengkapan administrasi, pemberkasan, dan sertifikasi pendidik tahun pelajaran 2026/2027.
              </p>
              <a 
                href={skMengajarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-purple-600 text-center text-white font-black rounded-2xl hover:bg-purple-500 transition-all text-xs tracking-widest uppercase shadow-lg transform active:scale-95 border-b-4 border-purple-800"
              >
                UNDUH SK MENGAJAR
              </a>
            </div>

            {/* Tool Ajar Guru Card */}
            <div className="bg-[#0f172a] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group border border-blue-500/30">
              <div className="absolute bottom-0 right-0 p-4 opacity-5 transform group-hover:-rotate-12 transition-transform">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Tool Ajar Guru</h3>
              <p className="text-blue-100/70 text-sm font-medium mb-6 leading-relaxed">
                Akses cepat perangkat pembelajaran, administrasi kelas, jurnal digital, dan laporan kinerja guru terpadu.
              </p>
              <a 
                href={adminToolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 text-center text-white font-black rounded-2xl hover:bg-blue-500 transition-all text-xs tracking-widest uppercase shadow-lg transform active:scale-95 border-b-4 border-blue-800"
              >
                ADMINISTRASI GURU
              </a>
            </div>

            {/* RAKER Guru Card */}
            <div className="bg-gradient-to-br from-blue-900 to-[#0f172a] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group border border-blue-400/40">
              <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-blue-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-300 mb-3 border border-blue-400/30">
                <span>AGENDA RESMI</span>
              </div>
              <h3 className="text-2xl font-black mb-3">RAKER Guru TP01</h3>
              <p className="text-blue-100/70 text-sm font-medium mb-6 leading-relaxed">
                Akses dokumen keputusan rapat, pembagian beban jam mengajar, dan program strategis Rapat Kerja (RAKER) Guru SMK Tanjung Priok 1.
              </p>
              <a 
                href={rakerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-500 text-center text-white font-black rounded-2xl hover:bg-blue-400 transition-all text-xs tracking-widest uppercase shadow-lg transform active:scale-95 border-b-4 border-blue-700"
              >
                BUKA LINK RAKER
              </a>
            </div>

            {/* Form Izin Guru Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-[#0f172a] relative overflow-hidden group border border-gray-100 hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Form Izin Guru</h3>
              <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                Isi formulir resmi pengajuan izin meninggalkan jam pelajaran atau ketidakhadiran bagi tenaga pendidik secara daring.
              </p>
              <a 
                href={permissionFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#0f172a] text-center text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-xs tracking-widest uppercase shadow-lg transform active:scale-95 border-b-4 border-blue-500"
              >
                ISI FORM IZIN
              </a>
            </div>
          </div>
        </div>

        {/* Integration Policy / Pakta Integritas */}
        <div className="mt-24 bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100 shadow-md">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-1.5 bg-blue-600 rounded-b-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-[#0f172a] mb-6 tracking-tight">Pakta Integritas Guru</h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto text-lg leading-relaxed font-semibold">
              Dedikasi penuh dalam menyalurkan ilmu pengetahuan relevan dengan kebutuhan industri masa depan melalui pendekatan Deep Learning secara kreatif, adaptif, dan penuh komitmen.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-blue-50/40 p-10 rounded-[2.5rem] w-full md:w-72 border border-blue-100/60 group transition hover:bg-white hover:shadow-xl">
                <span className="text-5xl font-black text-blue-600 block mb-2">100%</span>
                <p className="text-[#0f172a] font-black uppercase tracking-wider text-[11px] opacity-60">ADMINISTRASI LENGKAP</p>
              </div>
              <div className="bg-blue-50/40 p-10 rounded-[2.5rem] w-full md:w-72 border border-blue-100/60 group transition hover:bg-white hover:shadow-xl">
                <span className="text-5xl font-black text-blue-600 block mb-2">56+</span>
                <p className="text-[#0f172a] font-black uppercase tracking-wider text-[11px] opacity-60">KEGIATAN AKADEMIK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Schedule Image Zoom */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-slate-950/96 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col border border-slate-800 shadow-2xl z-10"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-800/80 flex justify-between items-center bg-slate-950/40">
                <div className="text-left">
                  <h4 className="text-white font-black text-sm uppercase tracking-wider">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold">Tahun Ajaran 2026/2027 • SMK Tanjung Priok 1</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image View Stage */}
              <div className="p-6 flex-1 flex items-center justify-center bg-slate-950 overflow-hidden relative">
                <img
                  src={lightboxImage.directUrl}
                  alt={lightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[60vh] object-contain rounded-xl"
                />

                {/* Left/Right Controls inside Lightbox */}
                <button
                  onClick={() => {
                    const prevIdx = (activeImageIndex - 1 + totalImages) % totalImages;
                    setActiveImageIndex(prevIdx);
                    setLightboxImage(TEACHER_SCHEDULE_IMAGES[prevIdx]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800/80 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <button
                  onClick={() => {
                    const nextIdx = (activeImageIndex + 1) % totalImages;
                    setActiveImageIndex(nextIdx);
                    setLightboxImage(TEACHER_SCHEDULE_IMAGES[nextIdx]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800/80 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider text-left">
                  Tips: Gunakan cubit layar (zoom) pada HP / Smartphone untuk memperbesar detail jadwal.
                </span>
                
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <a
                    href={lightboxImage.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-slate-800 hover:bg-slate-700 text-white font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700"
                  >
                    <ExternalLink className="w-4.5 h-4.5 text-blue-400" />
                    <span>Resolusi Asli</span>
                  </a>
                  
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Teachers;
