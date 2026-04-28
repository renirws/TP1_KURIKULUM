
import React, { useState, useEffect } from 'react';
import { sheetsService } from '../services/googleSheetsService';
import { ExamSchedule, Major } from '../types';

const Curriculum: React.FC = () => {
  const [examSchedules, setExamSchedules] = useState<ExamSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMajor, setSelectedMajor] = useState<Major>(Major.DKV);

  useEffect(() => {
    const loadData = async () => {
      const exams = await sheetsService.getExamSchedules();
      setExamSchedules(exams);
      setLoading(false);
    };
    loadData();
  }, []);

  const majorLinks: Record<string, string> = {
    [Major.PK]: "https://drive.google.com/file/d/17iEw5k7WUyPCZoIRtWjCMqpkGJWS5bSi/view?usp=drive_link",
    [Major.TKRO]: "https://drive.google.com/file/d/1ySXJ6C2xllFLeeHrNG-BFSTjYJIJlHxC/view?usp=drive_link",
    [Major.DKV]: "https://drive.google.com/file/d/1kxlv5HRHcs6d9SnuGXk8URka4LAWDgOg/view?usp=drive_link",
    [Major.TL]: "https://drive.google.com/file/d/1KJw8Y_0nGOzLGNwCOSrtS89b2W40meW1/view?usp=drive_link"
  };

  const calendarLink = "https://drive.google.com/file/d/1uFnH7dkIHS6-JWC7H3Q7dHd5V93wqAJ2/view?usp=drive_link";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Program Keahlian</h1>
        <div className="w-20 h-1.5 bg-[#3b82f6] mt-4 mb-4"></div>
        <p className="text-gray-500 text-lg max-w-2xl">Jelajahi kompetensi keahlian unggulan di SMK Tanjung Priok 1 yang telah terstandarisasi Industri dengan pendekatan Deep Learning.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-12">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-xs font-black uppercase text-gray-400 px-4 mb-4 tracking-tighter">Pilih Konsentrasi</h3>
          {Object.entries(Major).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedMajor(value as Major)}
              className={`w-full text-left px-5 py-4 rounded-xl font-bold transition-all border ${
                selectedMajor === value 
                  ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-lg translate-x-2' 
                  : 'bg-white hover:bg-blue-50 text-[#0f172a] border-gray-100'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-12">
          {/* Structure Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-50 p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#3b82f6] text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">Kurikulum Deep Learning</div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8 flex items-center">
              <span className="w-2 h-8 bg-[#3b82f6] mr-4 rounded-full"></span>
              Struktur Kurikulum
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 border-b text-sm font-black text-[#3b82f6]">MATA PELAJARAN</th>
                    <th className="px-6 py-4 border-b text-sm font-black text-[#3b82f6]">KATEGORI</th>
                    <th className="px-6 py-4 border-b text-sm font-black text-[#3b82f6]">DURASI (JP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <CurriculumRow subject="Pendidikan Agama & Budi Pekerti" category="Umum (A)" hours={3} />
                  <CurriculumRow subject="Pendidikan Pancasila" category="Umum (A)" hours={2} />
                  <CurriculumRow subject="Bahasa Indonesia" category="Umum (A)" hours={4} />
                  <CurriculumRow subject="Matematika" category="Keahlian (B)" hours={4} />
                  <CurriculumRow subject={`Produktif: ${selectedMajor}`} category="Konsentrasi" hours={12} />
                  <CurriculumRow subject="Projek Kreatif & Kewirausahaan" category="Keahlian (B)" hours={5} />
                </tbody>
              </table>
            </div>
            <div className="mt-10">
              <a 
                href={majorLinks[selectedMajor]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#3b82f6] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-xl transform hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                <span>UNDUH STRUKTUR KURIKULUM</span>
              </a>
              <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest italic">
                *Struktur kurikulum tersedia dalam format PDF untuk konsentrasi {selectedMajor}
              </p>
            </div>
          </div>

          {/* Academic Calendar Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-50 p-10 overflow-hidden relative">
             <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#0f172a] flex items-center">
                <span className="w-2 h-8 bg-[#0f172a] mr-4 rounded-full"></span>
                Kalender Akademik
              </h2>
              <div className="flex items-center text-xs font-bold text-[#0f172a] bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                TA 2025/2026 GENAP
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-black text-[#0f172a]">Kalender Akademik Semester Genap</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Akses jadwal lengkap kegiatan belajar mengajar, agenda ujian, praktik industri, dan hari libur sekolah untuk Tahun Ajaran 2025/2026 Semester Genap.
                </p>
              </div>
              <a 
                href={calendarLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-2xl flex items-center space-x-3 whitespace-nowrap"
              >
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>LIHAT KALENDER</span>
              </a>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl text-sm text-blue-800 border border-blue-100 flex items-start">
              <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <p className="font-bold italic">
                Informasi jadwal dapat berubah sewaktu-waktu sesuai kebijakan sekolah dan dinas terkait. Silakan unduh versi terbaru secara berkala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CurriculumRow: React.FC<{ subject: string, category: string, hours: number }> = ({ subject, category, hours }) => (
  <tr className="hover:bg-gray-50 transition">
    <td className="px-6 py-5 text-[#1a3a5a] font-bold">{subject}</td>
    <td className="px-6 py-5">
      <span className="text-xs font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-full uppercase">{category}</span>
    </td>
    <td className="px-6 py-5 text-gray-600 font-bold text-sm">{hours} Jam / Minggu</td>
  </tr>
);

export default Curriculum;
