import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Play, X, ExternalLink, Calendar, Film, Sparkles } from 'lucide-react';

type Category = 'Semua' | 'Akademik' | 'Fasilitas' | 'Kegiatan' | 'Prestasi';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  videoUrl?: string;
  embedUrl?: string;
  date?: string;
  objectPosition?: string;
  imageClassName?: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const [activeVideo, setActiveVideo] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 14,
      title: '8 Kebiasaan Anak Indonesia Hebat',
      category: 'Kegiatan',
      imageUrl: 'https://lh3.googleusercontent.com/d/1hBLuqaYavFFkcrECnNTaOyro3jBPU0dQ=w800',
      description: 'Dokumentasi video pelaksanaan kegiatan "8 Kebiasaan Anak Indonesia Hebat" di SMK Tanjung Priok 1 pada Jum\'at, 7 Agustus 2026. Menanamkan kedisiplinan, kepemimpinan, dan nilai karakter unggul bagi seluruh siswa.',
      date: "Jum'at, 7 Agustus 2026",
      videoUrl: 'https://drive.google.com/file/d/1hBLuqaYavFFkcrECnNTaOyro3jBPU0dQ/view?usp=drivesdk',
      embedUrl: 'https://drive.google.com/file/d/1hBLuqaYavFFkcrECnNTaOyro3jBPU0dQ/preview'
    },
    {
      id: 13,
      title: 'Kunjungan Industri TKRO',
      category: 'Kegiatan',
      imageUrl: 'https://lh3.googleusercontent.com/d/1A1_lWr-eiOhFx6Nxt_4t9iNCMts0A61a',
      description: 'Persiapan Prakerin siswa kelas XI TKRO melalui rangkaian kegiatan Kelas Industri untuk penyelarasan kompetensi dengan dunia kerja (4 Mei 2026).',
      date: 'Senin, 4 Mei 2026',
      objectPosition: 'object-center',
      imageClassName: 'object-contain bg-slate-900'
    },
    {
      id: 12,
      title: 'Dokumentasi UKK Kelas XII 2026',
      category: 'Kegiatan',
      imageUrl: 'https://img.youtube.com/vi/0GJjyaMwVvA/maxresdefault.jpg',
      description: 'Dokumentasi pelaksanaan Ujian Kompetensi Keahlian (UKK) yang diikuti oleh 119 siswa dari 4 jurusan unggulan pada 20-24 April 2026.',
      date: '20 - 24 April 2026',
      videoUrl: 'https://youtu.be/0GJjyaMwVvA',
      embedUrl: 'https://www.youtube.com/embed/0GJjyaMwVvA?autoplay=1'
    },
    {
      id: 11,
      title: 'Video Dokumentasi USBK 2025/2026',
      category: 'Kegiatan',
      imageUrl: 'https://img.youtube.com/vi/mFUSgLlnTOo/maxresdefault.jpg',
      description: 'Melihat kembali suasana pelaksanaan Ujian Satuan Pendidikan Berbasis Komputer Tahun Pelajaran 2025/2026.',
      date: 'TA 2025/2026',
      videoUrl: 'https://youtube.com/shorts/mFUSgLlnTOo?si=21KQ8fGrB9lGtDIj',
      embedUrl: 'https://www.youtube.com/embed/mFUSgLlnTOo?autoplay=1'
    },
    {
      id: 8,
      title: 'Ujian Lisan Prakerin',
      category: 'Akademik',
      imageUrl: 'https://drive.google.com/thumbnail?id=19xD-FUnemb355H10wfQZhfX6jGHPjC7W&sz=w800',
      description: 'Tahap akhir evaluasi Praktik Kerja Industri melalui presentasi dan tanya jawab lisan.'
    },
    {
      id: 1,
      title: 'Bengkel TKRO STAPONE',
      category: 'Fasilitas',
      imageUrl: 'https://drive.google.com/thumbnail?id=1L030MsvLbTTDp_WvtvedQNIuyXeo0GRa&sz=w800',
      description: 'Fasilitas praktik bengkel otomotif standar industri untuk Teknik Kendaraan Ringan.'
    },
    {
      id: 2,
      title: 'Pembelajaran Deep Learning',
      category: 'Akademik',
      imageUrl: 'https://drive.google.com/thumbnail?id=1Zk3JiA_WEflBir3NWJt_D01PGV7by3Vb&sz=w800',
      description: 'Suasana kelas kolaboratif dengan metode Deep Learning.'
    },
    {
      id: 5,
      title: 'Lab Desain Komunikasi Visual',
      category: 'Fasilitas',
      imageUrl: 'https://drive.google.com/thumbnail?id=1qiDIzUOyvYmaZiaZjvXGjnbHzQVgRImy&sz=w800',
      description: 'Studio komputer modern dengan spesifikasi tinggi untuk kreativitas digital DKV.'
    },
    {
      id: 9,
      title: 'Workshop Pemesinan Kapal',
      category: 'Fasilitas',
      imageUrl: 'https://drive.google.com/thumbnail?id=1LFs8MTESyUuoFwvgg62-LsHLRhYcHamf&sz=w800',
      description: 'Bengkel spesialis perkapalan dengan peralatan lengkap untuk mengasah keterampilan teknik mesin.'
    },
    {
      id: 10,
      title: 'Laboratorium Teknik Logistik',
      category: 'Fasilitas',
      imageUrl: 'https://drive.google.com/thumbnail?id=1Vvn-SKN_JOp_43havUf_60bDhrSV8LX-&sz=w800',
      description: 'Ruang praktik simulasi manajemen rantai pasok dan pergudangan modern.'
    },
    {
      id: 6,
      title: 'Kunjungan Industri',
      category: 'Kegiatan',
      imageUrl: 'https://drive.google.com/thumbnail?id=1PmL6TcxPijslBLrN13RFepX6_NPVeoXk&sz=w800',
      description: 'Mengenal langsung dunia kerja di mitra perusahaan.'
    }
  ];

  const filteredItems = activeCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories: Category[] = ['Semua', 'Akademik', 'Fasilitas', 'Kegiatan', 'Prestasi'];

  const handleOpenVideo = (item: GalleryItem) => {
    if (item.videoUrl) {
      setActiveVideo(item);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      <SEO 
        title="Galeri Dokumentasi & Video Kegiatan | SMK TANJUNG PRIOK 1"
        description="Galeri foto dan dokumentasi video kegiatan SMK Tanjung Priok 1 Jakarta Utara, termasuk Pelaksanaan 8 Kebiasaan Anak Indonesia Hebat (7 Agustus 2026), UKK, USBK, dan Kunjungan Industri."
        keywords="Galeri SMK Tanjung Priok 1, 8 Kebiasaan Anak Indonesia Hebat, Dokumentasi SMK Tanjung Priok 1, Video Kegiatan SMK, Galeri Foto Kurikulum, Kegiatan Siswa SMK"
        canonical="https://tp1kurikulum.my.id/galeri"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Galeri Dokumentasi SMK Tanjung Priok 1",
          "description": "Kumpulan foto dan dokumentasi video kegiatan akademik, fasilitas, dan kebiasaan siswa SMK Tanjung Priok 1 Jakarta Utara."
        }}
      />

      <div className="text-center mb-12 md:mb-16">
        <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Dokumentasi Resmi Sekolah</span>
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
          Galeri & Dokumentasi Kegiatan
        </h1>
        <div className="w-24 h-1.5 bg-[#3b82f6] mx-auto mt-4 mb-5 rounded-full"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Melihat lebih dekat aktivitas, fasilitas, video kegiatan siswa, dan berbagai pencapaian civitas akademika SMK Tanjung Priok 1.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 md:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#0f172a] text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200/80 hover:border-blue-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image & Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-slate-900">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${item.imageClassName || 'object-cover'} ${item.objectPosition || 'object-center'}`}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Badges Top */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {item.category}
                    </span>
                    {item.videoUrl && (
                      <span className="bg-rose-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1 animate-pulse">
                        <Film className="w-3 h-3" />
                        Video
                      </span>
                    )}
                  </div>

                  {item.date && (
                    <span className="bg-slate-900/90 text-slate-200 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      <span>{item.date}</span>
                    </span>
                  )}
                </div>

                {/* Play Button Overlay */}
                {item.videoUrl && (
                  <button 
                    onClick={() => handleOpenVideo(item)}
                    className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer"
                    aria-label={`Putar video ${item.title}`}
                  >
                    <div className="bg-white/95 text-rose-600 p-4 sm:p-5 rounded-full shadow-2xl transform scale-90 group-hover/btn:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white/80">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </button>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>

            {item.videoUrl && (
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <button 
                  onClick={() => handleOpenVideo(item)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200/80 hover:border-transparent font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Putar Video Dokumentasi</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Featured Video Callout */}
      <div className="mt-16 md:mt-24 bg-[#0f172a] rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
           <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
             <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
           </svg>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="max-w-xl">
            <span className="inline-block bg-red-600/30 text-red-400 border border-red-500/30 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Kanal Youtube Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tight">Dokumentasi Video Lengkap</h2>
            <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-medium mb-6 md:mb-8">
              Saksikan berbagai video profil jurusan, kegiatan perayaan, simulasi UKK, serta dokumentasi kegiatan siswa SMK Tanjung Priok 1 melalui kanal resmi Kurikulum.
            </p>
            <a 
              href="https://www.youtube.com/@KurikulumSMKTP01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
              <span>KUNJUNGI KANAL YOUTUBE</span>
            </a>
          </div>
          <div className="hidden lg:block w-72 h-72 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 text-white w-full max-w-4xl rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl my-auto relative flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-rose-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {activeVideo.category}
                  </span>
                  {activeVideo.date && (
                    <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {activeVideo.date}
                    </span>
                  )}
                </div>
                <h3 className="font-black text-lg sm:text-xl text-white leading-tight">
                  {activeVideo.title}
                </h3>
              </div>

              <button 
                onClick={() => setActiveVideo(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2.5 rounded-full transition cursor-pointer flex-shrink-0"
                aria-label="Tutup video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Frame */}
            <div className="relative w-full aspect-video bg-black flex-shrink-0">
              {activeVideo.embedUrl ? (
                <iframe 
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <Film className="w-12 h-12 text-slate-600 mb-3" />
                  <p className="text-slate-400 text-sm mb-4">Pemutar bawaan tidak tersedia secara langsung untuk format link ini.</p>
                  <a 
                    href={activeVideo.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase px-5 py-2.5 rounded-xl transition"
                  >
                    <span>Buka Video di Tab Baru</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer / Description */}
            <div className="p-5 sm:p-6 bg-slate-900/90 overflow-y-auto">
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                {activeVideo.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500">
                  SMK Tanjung Priok 1 Jakarta Utara
                </span>
                {activeVideo.videoUrl && (
                  <a 
                    href={activeVideo.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-extrabold text-xs transition cursor-pointer"
                  >
                    <span>Buka Sumber Asli</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
