import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[650px] overflow-hidden bg-gradient-to-br from-[#1a3a5a] via-[#1a3a5a] to-[#059669]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white space-y-6 relative z-10">
              <span className="bg-[#059669]/20 backdrop-blur-md text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-emerald-400/30 inline-block animate-in fade-in slide-in-from-left duration-700">
                Pusat Informasi Kurikulum Digital
              </span>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                Mencetak SDM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Kompeten</span><br />
                & Berkarakter
              </h1>
              <p className="text-lg md:text-xl text-emerald-50/80 leading-relaxed max-w-2xl font-medium">
                Selamat datang di platform resmi Bidang Kurikulum SMK TANJUNG PRIOK 1. Akses pembaruan akademik, jadwal ujian nasional (USBK/UKK), dan administrasi siswa secara transparan.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                <Link to="/kurikulum" className="bg-[#059669] hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-black transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(5,150,105,0.3)]">
                  Eksplorasi Kurikulum
                </Link>
                <Link to="/siswa" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl font-black transition-all transform hover:scale-105">
                  Portal Siswa
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating background blobs for depth */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>
      </section>

      {/* Statistics & Quick Links Section */}
      <section className="relative z-20 -mt-10 md:-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#1a3a5a] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-white/5">
              <div className="text-3xl font-black text-emerald-400">4</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Program Keahlian</div>
            </div>
            <div className="bg-[#1a3a5a] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-white/5">
              <div className="text-3xl font-black text-emerald-400">119</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Siswa XII (UKK)</div>
            </div>
            <a href="https://stapone.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-white/10 hover:bg-emerald-700 transition-all group">
              <div className="text-xl font-black mb-1 group-hover:scale-110 transition-transform">Tefa DKV</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Portal Kreatif Siswa</div>
            </a>
            <a href="https://s.id/bimlappkl" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a3a5a] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-gray-100 hover:bg-gray-50 transition-all group">
              <div className="text-xl font-black mb-1 group-hover:scale-110 transition-transform text-[#059669]">Bimbingan PKL</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Sisfo Praktik Industri</div>
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white" id="warta">
        <div className="container mx-auto px-4">
          <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Warta Kurikulum</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Informasi terkini mengenai agenda akademik, pengumuman ujian, dan kegiatan pengembangan kompetensi siswa SMK Tanjung Priok 1.
              </p>
            </div>
            <Link to="/warta" className="group bg-emerald-50 text-[#059669] font-black px-6 py-3 rounded-2xl flex items-center hover:bg-[#059669] hover:text-white transition-all duration-300">
              Lihat Semua Berita
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* News cards remain but with semantic structure inside card */}
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
          </div>
        </div>
      </section>

      {/* Quick Access Bento Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1a3a5a] mb-4">Akses Cepat <span className="text-[#059669]">Digital</span></h2>
            <p className="text-gray-500 font-medium">Portal khusus pendukung kurikulum dan kreativitas siswa SMK Tanjung Priok 1.</p>
          </header>
          
          <div className="grid md:grid-cols-12 gap-6 auto-rows-[240px]">
            {/* Tefa DKV - Large Bento Item */}
            <a 
              href="https://stapone.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              <div className="relative z-10 h-full flex flex-col">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4">Teaching Factory</span>
                <h3 className="text-3xl md:text-5xl font-black mb-4 group-hover:translate-x-2 transition-transform">Tefa DKV Portofolio</h3>
                <p className="text-purple-100 max-w-lg font-medium">Showcase karya terbaik siswa Desain Komunikasi Visual dan layanan jasa kreatif profesional.</p>
                <div className="mt-auto flex items-center font-black text-sm group-hover:translate-x-2 transition-transform">
                  Kunjungi Portal <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            </a>

            {/* PKL Bimbingan - Tall Bento Item */}
            <a 
              href="https://s.id/bimlappkl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-4 bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl group hover:border-[#059669] transition-all duration-500 flex flex-col"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#059669] mb-8 group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-[#1a3a5a] mb-4">Bimbingan PKL</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">Sistem monitoring dan panduan digital Praktik Kerja Lapangan.</p>
              <div className="mt-auto flex items-center text-[#059669] font-black text-sm group-hover:translate-x-2 transition-transform">
                Buka Panduan <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Good for SEO Keywords */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Mengapa Memilih SMK Tanjung Priok 1?</h2>
            <p className="text-gray-600 text-lg">Kami berkomitmen menghubungkan pendidikan akademik dengan tuntutan dunia kerja industri modern.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-100 transform hover:-translate-y-2 transition duration-500">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.7.7a2 2 0 000 2.828l1.414 1.414a2 2 0 002.828 0l.7-.7a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022zM16 3H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Program Unggulan</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pemesinan Kapal, TKRO, DKV, dan Teknik Logistik dengan kurikulum yang diselaraskan dengan mitra industri besar.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-100 transform hover:-translate-y-2 transition duration-500">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Sertifikasi Kompetensi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Siswa dibekali dengan sertifikasi BNSP dan pengakuan dari industri untuk persiapan karir tingkat global.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-100 transform hover:-translate-y-2 transition duration-500">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-black mb-4">Teaching Factory</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Fasilitas praktek standar industri yang memungkinkan siswa bekerja dalam simulasi produksi nyata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <header className="relative inline-block">
              <h2 className="text-5xl font-black tracking-tight text-[#1a3a5a]">Tim Kurikulum</h2>
              <div className="w-32 h-2 bg-emerald-500 mt-4 rounded-full"></div>
            </header>
            
            <article className="flex items-start space-x-8 bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-bl-full -mr-24 -mt-24 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 pt-2 w-full">
                <h3 className="text-3xl font-black text-[#1a3a5a]">Reni Widyastuti, M.Kom</h3>
                <p className="text-emerald-600 font-black text-xs uppercase tracking-[0.2em] mt-2 italic">Wakil Kepala Sekolah Bidang Kurikulum</p>
                <div className="mt-10 space-y-4">
                  <div className="flex items-center p-4 bg-emerald-50 rounded-2xl w-fit group-hover:bg-[#059669] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span className="font-bold text-sm">renimkom90@guru.smk.belajar.id</span>
                  </div>
                  <div className="flex items-center p-4 bg-slate-50 rounded-2xl w-fit">
                    <svg className="w-5 h-5 mr-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="font-bold text-sm text-[#1a3a5a]">Senin - Kamis | 06:30 - 14:45</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          <aside className="bg-[#1a3a5a] text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h3 className="text-4xl font-black mb-8 relative z-10 tracking-tight">Kirim Aspirasi</h3>
            <p className="text-emerald-100/60 mb-10 font-medium leading-relaxed">Saluran komunikasi terbuka untuk kritik, saran, atau pertanyaan seputar program kurikulum.</p>
            <form className="space-y-4 relative z-10">
              <input type="text" placeholder="Nama Lengkap" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition placeholder:text-white/20 font-bold" />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition placeholder:text-white/20 font-bold" />
              <textarea placeholder="Pesan Anda..." rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#059669] focus:bg-white/10 transition placeholder:text-white/20 font-bold"></textarea>
              <button className="w-full bg-[#059669] py-5 rounded-2xl font-black hover:bg-emerald-700 transition shadow-[0_20px_40px_rgba(5,150,105,0.2)] text-lg uppercase tracking-widest">Kirim Pesan</button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
};

const AnnouncementCard: React.FC<{ category: string, title: string, date: string, excerpt: string, link?: string, videoUrl?: string, imageUrl?: string }> = ({ category, title, date, excerpt, link, videoUrl, imageUrl }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  return (
    <article className="bg-white border-t-4 border-[#059669] p-8 shadow-sm hover:shadow-xl transition-all group rounded-b-2xl flex flex-col h-full">
      <div className="flex-grow">
        <span className="text-xs font-black uppercase bg-emerald-100 text-[#059669] px-3 py-1 rounded-full">{category}</span>
        <h3 className="text-xl font-bold text-[#1a3a5a] mt-5 group-hover:text-[#059669] transition cursor-pointer leading-tight">{title}</h3>
        <time className="flex items-center text-gray-400 text-xs mt-3" dateTime={date}>
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          {date}
        </time>
        
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
  </article>
  );
};

export default Home;
