
import React from 'react';

const AcademicCalendar: React.FC = () => {
  const teacherDriveLink = "https://drive.google.com/drive/folders/1HxQQYr6xHylifV_ry07JH1vM3Bw2m5Bk?usp=drive_link";
  const usPrakLink = "https://s.id/UsPrak25-26";
  const dispensasiUploadLink = "https://forms.gle/ADw1HZ3FYqqu68Jd8";
  
  const downloadableFiles = [
    { 
      name: 'Kalender Akademik 2025-2026', 
      type: 'PDF', 
      size: '1.2 MB', 
      icon: '📅',
      url: 'https://drive.google.com/file/d/1uFnH7dkIHS6-JWC7H3Q7dHd5V93wqAJ2/view?usp=drive_link'
    },
    { 
      name: 'Format PJJ', 
      type: 'DOCX', 
      size: '2.5 MB', 
      icon: '📖',
      url: 'https://docs.google.com/document/d/1smqs3wWq-DMsx4-beqjUZFIR4QfIzHzA/edit?usp=sharing&ouid=117287714725195940315&rtpof=true&sd=true'
    },
    { 
      name: 'Formulir Dispensasi Siswa', 
      type: 'PDF', 
      size: '0.4 MB', 
      icon: '📝',
      url: 'https://drive.google.com/file/d/1pYKS0GbzDzoWpQ51L9Sy5UMTywtJ8-u_/view?usp=sharing'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a5a]">Unggah & Unduh Berkas</h1>
        <div className="w-20 h-1.5 bg-[#059669] mt-4 mb-4"></div>
        <p className="text-gray-500 text-lg">Pusat pertukaran dokumen digital untuk civitas akademika SMK Tanjung Priok 1.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Download Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black text-[#1a3a5a] flex items-center">
            <span className="w-2 h-8 bg-[#059669] mr-4 rounded-full"></span>
            Pusat Unduhan
          </h3>
          <div className="grid gap-4">
            {downloadableFiles.map((file, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition flex items-center justify-between group">
                <div className="flex items-center space-x-5">
                  <div className="text-3xl bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    {file.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a5a]">{file.name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                      {file.type} • {file.size}
                    </p>
                  </div>
                </div>
                <a 
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 rounded-2xl text-[#059669] hover:bg-[#059669] hover:text-white transition shadow-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black text-[#1a3a5a] flex items-center">
            <span className="w-2 h-8 bg-[#1a3a5a] mr-4 rounded-full"></span>
            Unggah Dokumen
          </h3>
          <div className="bg-[#1a3a5a] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-block bg-emerald-500 text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-2 shadow-lg">
                PORTAL ADMINISTRASI & UJIAN
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black leading-tight">Pengumpulan Berkas & Tugas</h4>
                <p className="text-emerald-100/70 font-medium text-sm leading-relaxed">
                  Silakan pilih layanan unggah sesuai dengan kebutuhan Anda. Pastikan dokumen yang diunggah telah sesuai dengan format yang ditentukan.
                </p>
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href={teacherDriveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#059669] py-5 rounded-2xl font-black text-center text-lg hover:bg-emerald-700 transition shadow-xl transform active:scale-95 border-b-4 border-emerald-900"
                >
                  AKSES DRIVE UNGGAH GURU
                </a>
                
                <a 
                  href={usPrakLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#1a3a5a] py-5 rounded-2xl font-black text-center text-lg hover:bg-emerald-50 transition shadow-xl transform active:scale-95 border-b-4 border-emerald-400"
                >
                  UNGGAH USPRAK 25-26
                </a>

                <a 
                  href={dispensasiUploadLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-center text-lg hover:bg-emerald-500 transition shadow-xl transform active:scale-95 border-b-4 border-emerald-800"
                >
                  UNGGAH DISPENSASI
                </a>
              </div>
              
              <div className="py-6 px-6 border border-white/10 bg-white/5 rounded-3xl text-center">
                 <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Gunakan Akun Belajar.id / Google Sekolah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Documentation Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-black text-[#1a3a5a] mb-8 flex items-center">
          <span className="w-2 h-8 bg-emerald-500 mr-4 rounded-full"></span>
          Dokumentasi Kegiatan Akademik
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://drive.google.com/thumbnail?id=1ER7ri91mX-q9QZFjxqWzFPYYLlXSGnua&sz=w800" 
                alt="Ujian Sekolah Berbasis Komputer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#1a3a5a] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Evaluasi Digital
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-[#1a3a5a] mb-2">Ujian Sekolah Berbasis Komputer</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Penerapan sistem ujian digital yang transparan dan akuntabel untuk mengukur pencapaian standar kompetensi lulusan secara teoritis.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://drive.google.com/thumbnail?id=19xD-FUnemb355H10wfQZhfX6jGHPjC7W&sz=w800" 
                alt="Ujian Lisan Prakerin" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#059669] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Uji Kompetensi
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-[#1a3a5a] mb-2">Ujian Lisan Prakerin</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Presentasi hasil Praktik Kerja Industri sebagai bentuk pertanggungjawaban pengalaman kerja nyata di mitra industri perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Info */}
      <div className="mt-20 bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 flex items-center space-x-8">
        <div className="bg-[#059669] text-white p-5 rounded-3xl shadow-lg flex-shrink-0">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-black text-[#1a3a5a] mb-2">Keamanan Data Terjamin</h4>
          <p className="text-gray-500 font-medium leading-relaxed">
            Penyimpanan digital sekolah dikonfigurasi untuk privasi tinggi. Pastikan Anda masuk menggunakan akun yang memiliki izin akses resmi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
