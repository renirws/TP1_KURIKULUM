
import React from 'react';

const Teachers: React.FC = () => {
  const scheduleLink = "https://drive.google.com/file/d/1KHZ1hRPjJ0gW2JZTFyPhijMphjVFwirD/view?usp=drive_link";
  const adminToolLink = "https://s.id/ToolAjarGuru";
  const permissionFormLink = "https://forms.gle/FMQBg8EemZeRpwdT6";
  const rakerLink = "https://s.id/RAKER_TP01";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0f172a] text-white pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="bg-[#3b82f6] text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block shadow-lg">
              Portal Pendidik
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
              Ruang Guru <br/>
              <span className="text-blue-400">SMK Tanjung Priok 1</span>
            </h1>
            <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Pusat kendali administrasi pembelajaran, jadwal mengajar, dan koordinasi kurikulum terpadu untuk seluruh tenaga pendidik.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Featured Schedule Card - MAIN ATTRACTION */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-blue-100 group transition-all hover:shadow-blue-100/50">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 md:p-14 text-white relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-10 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black mb-4">Jadwal Mengajar</h2>
                  <p className="text-blue-100 text-lg mb-10 font-medium opacity-90 max-w-md">
                    Semester Genap Tahun Ajaran 2025/2026. Pastikan kehadiran tepat waktu dan pengisian jurnal mengajar dilakukan setiap hari.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={scheduleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-xl flex items-center space-x-4 transform hover:scale-105 active:scale-95"
                    >
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>BUKA JADWAL</span>
                    </a>
                    
                    <a 
                      href={adminToolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl flex items-center space-x-4 transform hover:scale-105 active:scale-95 border-2 border-blue-400"
                    >
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <span>ADMINISTRASI GURU</span>
                    </a>

                    <a 
                      href={rakerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-900/60 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-900 transition-all shadow-xl flex items-center space-x-4 transform hover:scale-105 active:scale-95 border-2 border-blue-300"
                    >
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span>RAKER GURU</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-14 bg-white grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-[#0f172a] text-lg mb-1">Jam Operasional</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">Senin - Kamis : 06:30 - 15:45 WIB & Jumat: 06:30 - 15:30 WIB</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-[#0f172a] text-lg mb-1">Piket Harian</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">Koordinasi piket diatur dalam lampiran jadwal utama.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Cards */}
          <div className="space-y-8">
            {/* Tool Ajar Guru Card */}
            <div className="bg-[#0f172a] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group border border-blue-500/30">
              <div className="absolute bottom-0 right-0 p-4 opacity-5 transform group-hover:-rotate-12 transition-transform">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Tool Ajar Guru</h3>
              <p className="text-blue-100/70 text-sm font-medium mb-6 leading-relaxed">
                Akses cepat perangkat pembelajaran, administrasi kelas, dan laporan kinerja guru.
              </p>
              <a 
                href={adminToolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 text-center text-white font-black rounded-2xl hover:bg-blue-500 transition-all text-xs tracking-widest uppercase shadow-lg transform active:scale-95"
              >
                ADMINISTRASI GURU
              </a>
            </div>

            {/* RAKER Guru Card - NEW */}
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
                Akses dokumen, materi, pembagian tugas, dan hasil keputusan Rapat Kerja (RAKER) Guru SMK Tanjung Priok 1.
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

            {/* Form Izin Guru Card - NEW */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-[#0f172a] relative overflow-hidden group border border-gray-100 hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Form Izin Guru</h3>
              <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">
                Formulir pengajuan izin meninggalkan tugas atau ketidakhadiran bagi tenaga pendidik.
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

        {/* Integration Policy */}
        <div className="mt-24 bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100 shadow-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-blue-600"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-[#0f172a] mb-6">Pakta Integritas Guru</h2>
            <p className="text-gray-500 mb-12 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Dedikasi dalam memberikan materi ajar yang relevan dengan kebutuhan industri saat ini melalui pendekatan Deep Learning. Pengumpulan administrasi mengajar dilakukan secara berkala demi menjaga mutu pendidikan.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-blue-50/50 p-10 rounded-[2.5rem] w-full md:w-72 border border-blue-100 group transition hover:bg-white hover:shadow-xl">
                <span className="text-5xl font-black text-blue-600 block mb-2">100%</span>
                <p className="text-[#0f172a] font-bold uppercase tracking-widest text-[10px] opacity-60">ADMINISTRASI LENGKAP</p>
              </div>
              <div className="bg-blue-50/50 p-10 rounded-[2.5rem] w-full md:w-72 border border-blue-100 group transition hover:bg-white hover:shadow-xl">
                <span className="text-5xl font-black text-blue-600 block mb-2">56+</span>
                <p className="text-[#0f172a] font-bold uppercase tracking-widest text-[10px] opacity-60">KEGIATAN AKADEMIK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
