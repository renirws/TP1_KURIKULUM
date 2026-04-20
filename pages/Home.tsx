import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Diperbarui tanpa gambar latar belakang, menggunakan gradien profesional */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-[#1a3a5a] via-[#1a3a5a] to-[#059669]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white space-y-6 relative z-10">
              <span className="bg-[#059669] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg border border-white/20 inline-block">Pusat Informasi Akademik</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">Mencetak SDM <span className="text-[#059669]">Kompeten</span> & Berkarakter</h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl">Sistem Informasi Kurikulum Terpadu SMK TANJUNG PRIOK 1. Akses informasi akademik, jadwal ujian, dan administrasi sekolah secara digital dan transparan.</p>
              <div className="flex flex-wrap gap-4 pt-6">
                <Link to="/kurikulum" className="bg-[#059669] hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition transform hover:scale-105 shadow-xl">
                  Program Keahlian
                </Link>
                <Link to="/siswa" className="bg-white hover:bg-gray-100 text-[#1a3a5a] px-10 py-4 rounded-full font-bold transition transform hover:scale-105 shadow-xl">
                  Portal Siswa
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#059669]/20 to-transparent"></div>
      </section>

      {/* Featured Announcements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5a]">Warta Berita</h2>
              <div className="w-24 h-2 bg-[#059669] mt-3"></div>
            </div>
            <Link to="/kurikulum" className="text-[#059669] font-bold hover:underline mt-4 md:mt-0 flex items-center">
              Lihat Program Keahlian
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnnouncementCard 
              category="Penting"
              title="Jadwal Pelaksanaan UKK Kelas XII"
              date="19 April 2026"
              excerpt="Pelaksanaan Uji Kompetensi Keahlian (UKK) Mandiri SMK Tanjung Priok 1 dilaksanakan tanggal 20 - 24 April 2026. Wajib membawa seragam praktik sesuai kejuruan."
              imageUrl="https://drive.google.com/thumbnail?id=1ydNqBuZEleKQ7uutqM4hvBI84CPPXRCw&sz=w1600"
              link="/warta"
            />
            <AnnouncementCard 
              category="Prakerin"
              title="Ujian Lisan Laporan Prakerin Kelas XII"
              date="06 April 2026"
              excerpt="Pelaksanaan Ujian Lisan Prakerin Siswa/i Kelas XII SMK Tanjung Priok 1 dilaksanakan tgl 13 April - 15 April 2026. Harap hadir tepat waktu dengan seragam Hitam Putih."
              imageUrl="https://drive.google.com/thumbnail?id=1Ya27lfM7idDYTs1RbCl_rR3Nm2Zu8UBo&sz=w1600"
              link="/prakerin"
            />
            <AnnouncementCard 
              category="USBK 2026"
              title="Daftar Peserta & Jadwal Sesi USBK"
              date="01 April 2026"
              excerpt="Berikut adalah pembagian sesi peserta USBK SMK Tanjung Priok 1. Sesi 1: 07.00 - 09.00 WIB | Sesi 2: 09.30 - 11.30 WIB. Silakan klik gambar untuk memperbesar daftar peserta."
              imageUrl="https://drive.google.com/thumbnail?id=1Ot3cnGnmRfueWIq8_Y6bharn-aecpN-l&sz=w1600"
              link="/warta"
            />
            <AnnouncementCard 
              category="Asesmen"
              title="Jadwal Pelaksanaan USBK Kelas XII"
              date="11 Maret 2026"
              excerpt="Informasi jadwal pelaksanaan Ujian Satuan Pendidikan Berbasis Komputer (USBK) untuk siswa kelas XII yang akan dilaksanakan pada tanggal 6 - 10 April 2026."
              imageUrl="https://drive.google.com/thumbnail?id=1TwFCjtcxnUcbSzCYFs06gvorXyzuoCFC&sz=w1600"
            />
            <AnnouncementCard 
              category="Ujian Sekolah Praktek"
              title="Ajang Karya Ujian Sekolah Praktek"
              date="6 Februari 2026"
              excerpt="Seluruh siswa tingkat akhir diharapkan melakukan Ujian praktek dengan hasil yang akan ditampilkan berupa Bazar di SMK Tanjung Priok 1"
              link="https://youtu.be/aqp0mi8VGNA"
            />
            <AnnouncementCard 
              category="Kurikulum"
              title="Implementasi Teaching Factory di Bengkel TKRO"
              date="21 Januari 2026"
              excerpt="Program sinkronisasi kurikulum dengan mitra industri otomotif dari PT. Pertamina Enduro sedang berlangsung "
            />
            <AnnouncementCard 
              category="Umum"
              title="Penerimaan Peserta Didik Baru (PPDB) 2026"
              date="01 Januari 2026"
              excerpt="Informasi lengkap syarat dan jadwal pendaftaran untuk empat program keahlian unggulan kami. Kunjungi portal pendaftaran resmi kami  https://ppdb2025.smktanjungpriok1.sch.id "
            />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold text-[#1a3a5a]">Bidang Kurikulum</h2>
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#059669]"></div>
            </div>
            
            <div className="flex items-start space-x-8 bg-white p-10 rounded-3xl shadow-sm border border-emerald-100 relative overflow-hidden group min-h-[220px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 pt-2 w-full">
                <h3 className="text-3xl font-black text-[#1a3a5a]">Reni Widyastuti, M.Kom</h3>
                <p className="text-[#059669] font-bold text-lg mt-1 italic tracking-tight">Wakil Kepala Sekolah Bidang Kurikulum</p>
                <div className="mt-8 space-y-4 text-base text-gray-600 font-medium">
                  <div className="flex items-center p-3 bg-emerald-50 rounded-2xl w-fit">
                    <svg className="w-5 h-5 mr-3 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span className="font-bold">renimkom90@guru.smk.belajar.id</span>
                  </div>
                  <div className="flex items-center p-3 bg-slate-50 rounded-2xl w-fit">
                    <svg className="w-5 h-5 mr-3 text-[#1a3a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="font-bold">Senin - Kamis| 06:30 - 14:45 & Jumat | 06:30 - 14:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a3a5a] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h3 className="text-3xl font-bold mb-8 relative z-10">Layanan Aspirasi</h3>
            <form className="space-y-5 relative z-10">
              <input type="text" placeholder="Nama Lengkap" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition" />
              <input type="email" placeholder="Email" className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition" />
              <textarea placeholder="Pesan atau Pertanyaan Seputar Akademik" rows={4} className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition"></textarea>
              <button className="w-full bg-[#059669] py-4 rounded-2xl font-bold hover:bg-emerald-700 transition shadow-lg text-lg">Kirim Masukan</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const AnnouncementCard: React.FC<{ category: string, title: string, date: string, excerpt: string, link?: string, videoUrl?: string, imageUrl?: string }> = ({ category, title, date, excerpt, link, videoUrl, imageUrl }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  return (
    <div className="bg-white border-t-4 border-[#059669] p-8 shadow-sm hover:shadow-xl transition-all group rounded-b-2xl flex flex-col h-full">
      <div className="flex-grow">
        <span className="text-xs font-black uppercase bg-emerald-100 text-[#059669] px-3 py-1 rounded-full">{category}</span>
        <h3 className="text-xl font-bold text-[#1a3a5a] mt-5 group-hover:text-[#059669] transition cursor-pointer leading-tight">{title}</h3>
        <div className="flex items-center text-gray-400 text-xs mt-3">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          {date}
        </div>
        
        {imageUrl && (
          <>
            <div 
              className="mt-4 aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-sm cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
                  className="absolute top-6 right-6 text-white hover:text-[#059669] transition-colors z-[110]"
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
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                    referrerPolicy="no-referrer"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </>
        )}

        {videoUrl && (
        <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-inner">
          <iframe 
            width="100%" 
            height="100%" 
            src={videoUrl} 
            title={title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      <p className="text-gray-600 text-sm mt-5 leading-relaxed">{excerpt}</p>
    </div>
    
    <div className="mt-8">
      {link ? (
        link.startsWith('http') ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-bold text-[#1a3a5a] group-hover:text-[#059669] transition"
          >
            Detail Berita 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        ) : (
          <Link 
            to={link} 
            className="flex items-center text-sm font-bold text-[#1a3a5a] group-hover:text-[#059669] transition"
          >
            Detail Berita 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        )
      ) : (
        <button className="flex items-center text-sm font-bold text-[#1a3a5a] group-hover:text-[#059669] transition">
          Detail Berita 
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      )}
    </div>
  </div>
  );
};

export default Home;
