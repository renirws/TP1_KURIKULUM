
import React from 'react';
import { Link } from 'react-router-dom';

const Students: React.FC = () => {
  const scheduleLinks = {
    x: "https://drive.google.com/file/d/1HA0K05tP7fm4onhAEuRB-uPzUMbVWVVr/view?usp=drive_link",
    xi: "https://drive.google.com/file/d/1BGsX3s93xihuyhL-6AaW7PilVz7H6T6y/view?usp=drive_link",
    xii: "https://drive.google.com/file/d/1huNhbHXZ2t_0GwDG3Dc0q7PQLWb6250A/view?usp=drive_link"
  };
  
  const adminLinks = [
    {
      grade: "Kelas X",
      description: "Portal administrasi, absensi, dan rekapan SPP khusus untuk siswa jenjang kelas sepuluh semua jurusan.",
      link: "https://docs.google.com/spreadsheets/d/1Ak0zQ53sA8_Dz9do96gIWG9tZgmPAfEz8eaXT0NhfLw/edit?usp=drive_link",
      color: "from-blue-500 to-blue-700"
    },
    {
      grade: "Kelas XI",
      description: "Portal administrasi, absensi, dan rekapan SPP khusus untuk siswa jenjang kelas sebelas semua jurusan.",
      link: "https://docs.google.com/spreadsheets/d/1u1PchsvKZ1JqmLVfIVB-uFbnwfmNcejBHj8UdtlEzlA/edit?usp=drive_link",
      color: "from-[#0f172a] to-[#1e40af]"
    },
    {
      grade: "Kelas XII",
      description: "Portal administrasi, absensi, dan rekapan SPP khusus untuk siswa jenjang kelas dua belas semua jurusan.",
      link: "https://docs.google.com/spreadsheets/d/1-MiFmd6tsr5Q3694OqAOHSMriLNubx5DkdNoW5XJO5s/edit?usp=drive_link",
      color: "from-[#3b82f6] to-[#1d4ed8]"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Portal Siswa</h1>
        <div className="w-20 h-1.5 bg-[#3b82f6] mx-auto mt-4 mb-4"></div>
        <p className="text-gray-500 text-lg">Akses cepat jadwal pelajaran dan administrasi terpadu.</p>
      </div>

      {/* Jadwal Pelajaran Section - Updated with 3 Links */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e40af] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform">
            <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="text-center md:text-left mb-8">
              <span className="bg-[#3b82f6] text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block">Update Terkini</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Jadwal Mata Pelajaran</h2>
              <p className="text-blue-100/80 font-medium text-lg leading-relaxed max-w-2xl">
                Unduh jadwal kegiatan belajar mengajar terbaru Tahun Ajaran 2025/2026 sesuai dengan jenjang kelas Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ScheduleDownloadButton label="KELAS X" link={scheduleLinks.x} />
              <ScheduleDownloadButton label="KELAS XI" link={scheduleLinks.xi} />
              <ScheduleDownloadButton label="KELAS XII" link={scheduleLinks.xii} />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-black text-[#0f172a] flex items-center">
          <span className="w-2 h-8 bg-[#3b82f6] mr-4 rounded-full"></span>
          Administrasi & SPP
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {adminLinks.map((item, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group">
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            
            <h2 className="text-3xl font-black text-[#0f172a] mb-4 uppercase">{item.grade}</h2>
            <p className="text-gray-500 font-medium mb-8 leading-relaxed text-sm">
              {item.description}
            </p>
            
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full bg-gradient-to-r ${item.color} text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:brightness-110 transition shadow-md flex items-center justify-center space-x-2`}
            >
              <span>BUKA DATABASE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>


      {/* Info Section */}
      <div className="mt-20 bg-[#0f172a] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black mb-6">Panduan Akses Data</h3>
            <ul className="space-y-4 text-blue-100/80 font-medium">
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">1</span>
                Pastikan Anda telah masuk (login) ke akun Google yang terdaftar.
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">2</span>
                Klik tombol "Buka Database" sesuai dengan jenjang kelas Anda.
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">3</span>
                Gunakan fitur filter (Ctrl+F) untuk mencari data berdasarkan Nama atau NIS.
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Butuh Bantuan?
            </h4>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
              Jika data tidak muncul atau link tidak dapat diakses, silakan hubungi operator sekolah di Bagian Tata Usaha pada jam operasional kerja.
            </p>
            <div className="flex items-center text-blue-400 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (021) 4301192
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleDownloadButton: React.FC<{ label: string, link: string }> = ({ label, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#0f172a] px-6 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center space-x-3 transform hover:scale-105 active:scale-95 border-b-4 border-blue-500"
  >
    <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    <span>{label}</span>
  </a>
);

export default Students;
