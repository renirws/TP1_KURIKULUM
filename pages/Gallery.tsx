
import React, { useState } from 'react';

type Category = 'Semua' | 'Akademik' | 'Fasilitas' | 'Kegiatan' | 'Prestasi';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  videoUrl?: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');

  const galleryItems: GalleryItem[] = [
    {
      id: 12,
      title: 'Dokumentasi UKK Kelas XII 2026',
      category: 'Kegiatan',
      imageUrl: 'https://img.youtube.com/vi/0GJjyaMwVvA/maxresdefault.jpg',
      description: 'Dokumentasi pelaksanaan Ujian Kompetensi Keahlian (UKK) yang diikuti oleh 119 siswa dari 4 jurusan unggulan pada 20-24 April 2026.',
      videoUrl: 'https://youtu.be/0GJjyaMwVvA'
    },
    {
      id: 11,
      title: 'Video Dokumentasi USBK 2025/2026',
      category: 'Kegiatan',
      imageUrl: 'https://img.youtube.com/vi/mFUSgLlnTOo/maxresdefault.jpg',
      description: 'Melihat kembali suasana pelaksanaan Ujian Satuan Pendidikan Berbasis Komputer Tahun Pelajaran 2025/2026.',
      videoUrl: 'https://youtube.com/shorts/mFUSgLlnTOo?si=21KQ8fGrB9lGtDIj'
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

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a]">Galeri Dokumentasi</h1>
        <div className="w-24 h-1.5 bg-[#3b82f6] mx-auto mt-6 mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Melihat lebih dekat aktivitas, fasilitas, dan berbagai pencapaian civitas akademika SMK Tanjung Priok 1.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#0f172a] text-white shadow-xl scale-105'
                : 'bg-white text-gray-500 hover:bg-blue-50 border border-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#3b82f6] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {item.category}
                </span>
                {item.videoUrl && (
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Video
                  </span>
                )}
              </div>
              {item.videoUrl && (
                <a 
                  href={item.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="bg-white/90 p-5 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </a>
              )}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-[#0f172a] mb-2 group-hover:text-[#3b82f6] transition-colors flex items-center justify-between">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-4">
                {item.description}
              </p>
              {item.videoUrl && (
                <a 
                  href={item.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 font-black text-xs uppercase tracking-widest hover:text-red-700 transition"
                >
                  Tonton Video Dokumentasi
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18"></path></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Video / Live Action Call */}
      <div className="mt-24 bg-[#0f172a] rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
             <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
           </svg>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Dokumentasi Video</h2>
            <p className="text-blue-100/70 text-lg leading-relaxed font-medium mb-8">
              Saksikan berbagai video profil jurusan, kegiatan perayaan, dan testimonial alumni melalui kanal YouTube resmi kami.
            </p>
            <a 
              href="https://www.youtube.com/@KurikulumSMKTP01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
              <span>TONTON DI YOUTUBE</span>
            </a>
          </div>
          <div className="hidden lg:block w-72 h-72 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
