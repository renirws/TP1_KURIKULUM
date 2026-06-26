
import React, { useState, useEffect } from 'react';
import { sheetsService } from '../services/googleSheetsService';
import { ExamSchedule, Major } from '../types';
import { BookOpen, Award, Calendar, Download, ChevronRight, Clock, Shield, Sparkles, AlertCircle, Anchor, Settings, Image as ImageIcon, Truck, Check } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [examSchedules, setExamSchedules] = useState<ExamSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMajor, setSelectedMajor] = useState<Major>(Major.TKRO);
  const [selectedGrade, setSelectedGrade] = useState<'X' | 'XI' | 'XII'>('X');

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

  const majorIcons: Record<string, React.ReactNode> = {
    [Major.PK]: <Anchor className="w-6 h-6" />,
    [Major.TKRO]: <Settings className="w-6 h-6 animate-spin-slow" />,
    [Major.DKV]: <ImageIcon className="w-6 h-6" />,
    [Major.TL]: <Truck className="w-6 h-6" />
  };

  const majorDescriptions: Record<string, string> = {
    [Major.PK]: "Membekali siswa dengan kompetensi pengoperasian, perawatan, dan perbaikan mesin-mesin kapal, sistem kelistrikan kapal, serta fabrikasi logam maritim yang tersertifikasi.",
    [Major.TKRO]: "Menghasilkan teknisi otomotif profesional yang ahli dalam pemeliharaan mesin kendaraan ringan, sistem sasis, kelistrikan body, sistem injeksi (EFI), hingga diagnosis kelistrikan canggih.",
    [Major.DKV]: "Mengembangkan kreativitas digital siswa di bidang desain grafis, ilustrasi, fotografi, videografi, periklanan, hingga pembuatan animasi 2D/3D berstandar industri kreatif.",
    [Major.TL]: "Menguasai tata kelola pergudangan, manajemen inventaris, moda transportasi, logistik kepelabuhanan, hingga sistem informasi logistik modern berbasis teknologi industri."
  };

  const calendarLink = "https://drive.google.com/file/d/1uFnH7dkIHS6-JWC7H3Q7dHd5V93wqAJ2/view?usp=drive_link";

  // Detailed TKRO curriculum structures from the images
  const renderTKROCurriculum = () => {
    if (selectedGrade === 'X') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.1 Struktur Kurikulum Kelas X TKRO</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas X</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti (ditambah Fiqih & Al-Qur'an)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Seni</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">576 <span className="text-blue-700/70 text-xs">(16)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Informatika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">216 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                
                {/* Dasar Program Keahlian TKRO breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Dasar Program Keahlian TKRO, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 5.1 Gambar Teknik <span className="text-slate-400 font-mono font-bold">(3 JP)</span></div>
                      <div>• 5.2 Pekerjaan Dasar Otomotif <span className="text-slate-400 font-mono font-bold">(3 JP)</span></div>
                      <div>• 5.3 Dasar Teknik Otomotif <span className="text-slate-400 font-mono font-bold">(3 JP)</span></div>
                      <div>• 5.4 Bisnis & Wirausaha <span className="text-slate-400 font-mono font-bold">(3 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 valign-top align-top">
                    <div className="h-5">432 <span className="text-slate-400 font-medium text-xs">(12)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Koding & Kecerdasan Artificial</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1152 <span className="text-blue-700/70 text-xs">(32)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS X (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1728 <span className="text-indigo-200 text-xs">(48)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XI') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.2 Struktur Kurikulum Kelas XI TKRO</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XI</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">432 <span className="text-blue-700/70 text-xs">(12)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>

                {/* Kelompok Konsentrasi Keahlian breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Sistem Engine <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.2 Electrical <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.3 Chassis & Pemindah Daya <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">648 <span className="text-slate-400 font-medium text-xs">(18)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">180 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1332 <span className="text-blue-700/70 text-xs">(37)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XI (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1764 <span className="text-indigo-200 text-xs">(49)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XII') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.3 Struktur Kurikulum Kelas XII TKRO</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XII</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu Semester 5 & 6 (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum (Semester 5)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black">144 <span className="text-blue-700/70 text-xs">(8)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan (Semester 5 & 6)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kelompok Konsentrasi Keahlian Lanjut (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">720 <span className="text-slate-400 font-medium text-xs">(20)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">90 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition bg-emerald-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-800 block">Praktik Kerja Lapangan (PKL)</span>
                    <span className="text-xs text-slate-400 font-medium block mt-0.5">Dilaksanakan Full pada Semester 6 di Industri Mitra Resmi</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-emerald-700">792 <span className="text-emerald-500 font-medium text-xs">(44)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1512 <span className="text-blue-700/70 text-xs">(44/41)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XII (SEMESTER 5 + SEMESTER 6)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1656 <span className="text-indigo-200 text-xs">JP</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Detailed PK curriculum structures from the images
  const renderPKCurriculum = () => {
    if (selectedGrade === 'X') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.4 Struktur Kurikulum Kelas X MK</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas X</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti (ditambah Fiqih & Al-Qur'an)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Seni</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">576 <span className="text-blue-700/70 text-xs">(16)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Informatika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">216 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                
                {/* Dasar Program Keahlian MK breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Dasar Program Keahlian MK, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 5.1 Gambar Teknik <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                      <div>• 5.2 Pengetahuan Dasar Perkapalan <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                      <div>• 5.3 Pekerjaan Dasar Teknik <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">432 <span className="text-slate-400 font-medium text-xs">(12)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Koding & Kecerdasan Artificial</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1152 <span className="text-blue-700/70 text-xs">(32)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS X (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1728 <span className="text-indigo-200 text-xs">(48)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XI') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.5 Struktur Kurikulum Kelas XI MK</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XI</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">432 <span className="text-blue-700/70 text-xs">(12)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>

                {/* Kelompok Konsentrasi Keahlian breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Pekerjaan Pelat & Sistem Pemipaan Kapal <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.2 Elemen Mesin & Penggerak Kapal <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.3 Pekerjaan Mesin Perkakas <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">648 <span className="text-slate-400 font-medium text-xs">(18)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">180 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1332 <span className="text-blue-700/70 text-xs">(37)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XI (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1764 <span className="text-indigo-200 text-xs">(49)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XII') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.6 Struktur Kurikulum Kelas XII MK</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XII</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu Semester 5 & 6 (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum (Semester 5)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black">144 <span className="text-blue-700/70 text-xs">(8)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan (Semester 5 & 6)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                
                {/* Kelompok Konsentrasi Keahlian Lanjut breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian Lanjut (Semester 5), terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Elemen Mesin & Penggerak Kapal <span className="text-slate-400 font-mono font-bold">(7 JP)</span></div>
                      <div>• 3.2 Pekerjaan Mesin Perkakas <span className="text-slate-400 font-mono font-bold">(8 JP)</span></div>
                      <div>• 3.3 Pekerjaan Mesin Fluida <span className="text-slate-400 font-mono font-bold">(5 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">720 <span className="text-slate-400 font-medium text-xs">(20)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">90 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition bg-emerald-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-800 block">Praktik Kerja Lapangan (PKL)</span>
                    <span className="text-xs text-slate-400 font-medium block mt-0.5">Dilaksanakan Full pada Semester 6 di Industri Mitra Resmi</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-emerald-700">792 <span className="text-emerald-500 font-medium text-xs">(44)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1512 <span className="text-blue-700/70 text-xs">(44/41)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XII (SEMESTER 5 + SEMESTER 6)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1656 <span className="text-indigo-200 text-xs">JP</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Detailed DKV curriculum structures from the images
  const renderDKVCurriculum = () => {
    if (selectedGrade === 'X') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.7 Struktur Kurikulum Kelas X DKV</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas X</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti (ditambah Fiqih & Al-Qur'an)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Seni</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">576 <span className="text-blue-700/70 text-xs">(16)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Informatika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">216 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                
                {/* Dasar Program Keahlian DKV breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Dasar Program Keahlian DKV, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 5.1 Dasar Desain Komunikasi Visual <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                      <div>• 5.2 Sketsa Ilustrasi <span className="text-slate-400 font-mono font-bold">(2 JP)</span></div>
                      <div>• 5.3 Typography <span className="text-slate-400 font-mono font-bold">(1 JP)</span></div>
                      <div>• 5.4 Fotografi <span className="text-slate-400 font-mono font-bold">(2 JP)</span></div>
                      <div>• 5.5 Komputer Grafis <span className="text-slate-400 font-mono font-bold">(3 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">432 <span className="text-slate-400 font-medium text-xs">(12)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Koding & Kecerdasan Artificial</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1152 <span className="text-blue-700/70 text-xs">(32)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS X (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1728 <span className="text-indigo-200 text-xs">(48)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XI') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.8 Struktur Kurikulum Kelas XI DKV</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XI</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">432 <span className="text-blue-700/70 text-xs">(12)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>

                {/* Kelompok Konsentrasi Keahlian breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Desain Grafis Percetakan <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.2 Animasi <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.3 Audio Video <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">648 <span className="text-slate-400 font-medium text-xs">(18)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">180 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1332 <span className="text-blue-700/70 text-xs">(37)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XI (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1764 <span className="text-indigo-200 text-xs">(49)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XII') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.9 Struktur Kurikulum Kelas XII DKV</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XII</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu Semester 5 & 6 (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum (Semester 5)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black">144 <span className="text-blue-700/70 text-xs">(8)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan (Semester 5 & 6)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                
                {/* Kelompok Konsentrasi Keahlian Lanjut breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian Lanjut (Semester 5), terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Desain Grafis Publikasi <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 3.2 Motion Grafik <span className="text-slate-400 font-mono font-bold">(8 JP)</span></div>
                      <div>• 3.3 Audio Video <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">720 <span className="text-slate-400 font-medium text-xs">(20)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">90 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition bg-emerald-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-800 block">Praktik Kerja Lapangan (PKL)</span>
                    <span className="text-xs text-slate-400 font-medium block mt-0.5">Dilaksanakan Full pada Semester 6 di Industri Mitra Resmi</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-emerald-700">792 <span className="text-emerald-500 font-medium text-xs">(44)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1512 <span className="text-blue-700/70 text-xs">(44/41)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XII (SEMESTER 5 + SEMESTER 6)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1656 <span className="text-indigo-200 text-xs">JP</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Detailed TL curriculum structures from the images
  const renderTLCurriculum = () => {
    if (selectedGrade === 'X') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.10 Struktur Kurikulum Kelas X TL</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas X</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti (ditambah Fiqih & Al-Qur'an)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Seni</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">576 <span className="text-blue-700/70 text-xs">(16)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Informatika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Projek Ilmu Pengetahuan Alam dan Sosial (IPAS)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">216 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                
                {/* Dasar Program Keahlian TL breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Dasar Program Keahlian TL, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 5.1 Dasar - dasar Logistik <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                      <div>• 5.2 Material Handling Equipment <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                      <div>• 5.3 Pengelolaan Gudang & K3LH <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">432 <span className="text-slate-400 font-medium text-xs">(12)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Koding & Kecerdasan Artificial</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1152 <span className="text-blue-700/70 text-xs">(32)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS X (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1728 <span className="text-indigo-200 text-xs">(48)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XI') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.11 Struktur Kurikulum Kelas XI TL</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XI</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu per Tahun (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Sejarah</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum</td>
                  <td className="py-4 px-6 text-right font-mono font-black">432 <span className="text-blue-700/70 text-xs">(12)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>

                {/* Kelompok Konsentrasi Keahlian breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian, terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 5.4 Aktivitas Pergudangan <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 5.5 Pengemasan Barang <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                      <div>• 5.6 Perdagangan Internasional <span className="text-slate-400 font-mono font-bold">(6 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">648 <span className="text-slate-400 font-medium text-xs">(18)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">180 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">144 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1332 <span className="text-blue-700/70 text-xs">(37)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XI (UMUM + KEJURUAN)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1764 <span className="text-indigo-200 text-xs">(49)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (selectedGrade === 'XII') {
      return (
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-black text-slate-800">Tabel 3.12 Struktur Kurikulum Kelas XII TL</span>
            <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                  <th className="py-4 px-6 w-16 text-center">No</th>
                  <th className="py-4 px-6">Mata Pelajaran Kelas XII</th>
                  <th className="py-4 px-6 text-right w-64">Alokasi Waktu Semester 5 & 6 (JP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {/* Kelompok Umum */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum (Semester 5)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama dan Budi Pekerti</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila dan Kewarganegaraan</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">54 <span className="text-slate-400 font-medium text-xs">(3)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Umum (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black">144 <span className="text-blue-700/70 text-xs">(8)</span></td>
                </tr>

                {/* Kelompok Kejuruan */}
                <tr className="bg-slate-100/80 font-black text-slate-800">
                  <td colSpan={3} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan (Semester 5 & 6)</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Matematika (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">72 <span className="text-slate-400 font-medium text-xs">(4)</span></td>
                </tr>
                
                {/* Kelompok Konsentrasi Keahlian Lanjut breakdown */}
                <tr className="hover:bg-slate-50/50 transition bg-slate-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800 block">Kelompok Konsentrasi Keahlian Lanjut (Semester 5), terdiri dari:</span>
                    <div className="mt-2.5 ml-4 space-y-1.5 border-l-2 border-slate-200 pl-4 text-xs font-semibold text-slate-500">
                      <div>• 3.1 Teknik Pengiriman Barang <span className="text-slate-400 font-mono font-bold">(8 JP)</span></div>
                      <div>• 3.2 Sistem Informasi Logistik <span className="text-slate-400 font-mono font-bold">(8 JP)</span></div>
                      <div>• 3.3 Sistem Pengadaan <span className="text-slate-400 font-mono font-bold">(4 JP)</span></div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900 align-top">
                    <div className="h-5">720 <span className="text-slate-400 font-medium text-xs">(20)</span></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Kreatif, Inovasi & KWH (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">90 <span className="text-slate-400 font-medium text-xs">(5)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">5</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Mata Pelajaran Pilihan (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">108 <span className="text-slate-400 font-medium text-xs">(6)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">6</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Muatan Lokal (Semester 5)</td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">36 <span className="text-slate-400 font-medium text-xs">(2)</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition bg-emerald-50/30">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">7</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-800 block">Praktik Kerja Lapangan (PKL)</span>
                    <span className="text-xs text-slate-400 font-medium block mt-0.5">Dilaksanakan Full pada Semester 6 di Industri Mitra Resmi</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-black text-emerald-700">792 <span className="text-emerald-500 font-medium text-xs">(44)</span></td>
                </tr>
                <tr className="bg-blue-50/70 font-black text-blue-900">
                  <td colSpan={2} className="py-4 px-6 text-right uppercase tracking-wider text-xs">Jumlah Kelompok Kejuruan</td>
                  <td className="py-4 px-6 text-right font-mono font-black">1512 <span className="text-blue-700/70 text-xs">(44/41)</span></td>
                </tr>

                {/* Total Alokasi */}
                <tr className="bg-indigo-900 text-white font-black">
                  <td colSpan={2} className="py-5 px-6 text-right uppercase tracking-wider text-sm">TOTAL ALOKASI KELAS XII (SEMESTER 5 + SEMESTER 6)</td>
                  <td className="py-5 px-6 text-right font-mono text-base font-black">1656 <span className="text-indigo-200 text-xs">JP</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  // Generic curriculum fallback for other majors with real-looking data
  const renderFallbackCurriculum = () => {
    return (
      <div className="space-y-6">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
          <span className="text-sm font-black text-slate-800">Struktur Kurikulum {selectedMajor} - Kelas {selectedGrade}</span>
          <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">TA 2026/2027</span>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider">
                <th className="py-4 px-6 w-16 text-center">No</th>
                <th className="py-4 px-6">Mata Pelajaran</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6 text-right w-64">Alokasi JP / Minggu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr className="bg-slate-100/80 font-black text-slate-800">
                <td colSpan={4} className="py-3.5 px-6 uppercase tracking-wider text-xs">A. Kelompok Umum</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Agama & Budi Pekerti</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">Umum (A)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">3 JP / Minggu</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Pancasila</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">Umum (A)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">2 JP / Minggu</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                <td className="py-4 px-6 font-bold text-slate-700">Bahasa Indonesia</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">Umum (A)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">4 JP / Minggu</td>
              </tr>
              {selectedGrade !== 'XII' && (
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                  <td className="py-4 px-6 font-bold text-slate-700">Pendidikan Jasmani, Olah Raga dan Kesehatan</td>
                  <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-slate-100 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full">Umum (A)</span></td>
                  <td className="py-4 px-6 text-right font-mono font-black text-slate-900">3 JP / Minggu</td>
                </tr>
              )}
              
              <tr className="bg-slate-100/80 font-black text-slate-800">
                <td colSpan={4} className="py-3.5 px-6 uppercase tracking-wider text-xs">B. Kelompok Kejuruan</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">1</td>
                <td className="py-4 px-6 font-bold text-slate-700">Matematika</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-blue-50 border border-blue-100 text-blue-600 px-2.5 py-1 rounded-full">Keahlian (B)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">4 JP / Minggu</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">2</td>
                <td className="py-4 px-6 font-bold text-slate-700">Bahasa Inggris</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-blue-50 border border-blue-100 text-blue-600 px-2.5 py-1 rounded-full">Keahlian (B)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">4 JP / Minggu</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">3</td>
                <td className="py-4 px-6 font-bold text-slate-700">Produktif Konsentrasi: {selectedMajor}</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-indigo-50 border border-indigo-100 text-indigo-600 px-2.5 py-1 rounded-full">Konsentrasi</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-indigo-700">{selectedGrade === 'XII' ? '20' : '12'} JP / Minggu</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="py-4 px-6 text-center font-bold text-slate-400">4</td>
                <td className="py-4 px-6 font-bold text-slate-700">Projek Kreatif & Kewirausahaan</td>
                <td className="py-4 px-6"><span className="text-[10px] font-black tracking-wider uppercase bg-blue-50 border border-blue-100 text-blue-600 px-2.5 py-1 rounded-full">Keahlian (B)</span></td>
                <td className="py-4 px-6 text-right font-mono font-black text-slate-900">5 JP / Minggu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-16 text-center">
        <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block">Portal Kurikulum Resmi</span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] mt-2">Program & Konsentrasi Keahlian</h1>
        <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Selamat datang di Pusat Informasi Kurikulum Operasional Sekolah (KOSP) SMK Tanjung Priok 1 Jakarta. Kami membekali siswa dengan kompetensi kejuruan unggulan yang terstandarisasi Industri Mitra Resmi.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-10 items-start">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black uppercase text-gray-400 mb-4 tracking-wider">Konsentrasi Keahlian</h3>
            <div className="space-y-2">
              {Object.entries(Major).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMajor(value as Major)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold text-sm transition-all flex items-center space-x-3 border ${
                    selectedMajor === value 
                      ? 'bg-gradient-to-r from-slate-900 to-[#1e3a8a] text-white border-transparent shadow-lg shadow-blue-900/10' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-100'
                  }`}
                >
                  <span className={`p-1.5 rounded-xl transition-colors ${selectedMajor === value ? 'text-blue-300' : 'text-slate-400'}`}>
                    {majorIcons[value as Major]}
                  </span>
                  <span className="leading-tight">{value}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="bg-gradient-to-br from-slate-950 to-blue-950 text-white p-6 rounded-3xl shadow-lg border border-slate-800">
            <div className="flex items-center space-x-2 text-blue-400 mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">KOSP Unggulan</span>
            </div>
            <h4 className="font-bold text-sm mb-1">Kurikulum Deep Learning</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Menerapkan metode pembelajaran mendalam berbasis projek (PjBL) agar siswa menguasai problem-solving nyata di lapangan kerja.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-10">
          {/* Major Spotlight */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                {majorIcons[selectedMajor]}
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">PROFIL KOMPETENSI</span>
                <h2 className="text-2xl font-black text-slate-900 leading-none mt-1">{selectedMajor}</h2>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
              {majorDescriptions[selectedMajor]}
            </p>
          </div>

          {/* Structure Section */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-5 py-2.5 rounded-bl-3xl font-black text-xs uppercase tracking-wider shadow-md">
              KOSP Terstruktur
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-black text-slate-900 flex items-center">
                <span className="w-2.5 h-8 bg-blue-600 mr-4 rounded-full"></span>
                Struktur Kurikulum
              </h2>

              {/* Class Selection Toggle inside the Curriculum block */}
              <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setSelectedGrade('X')}
                  className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    selectedGrade === 'X'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Kelas X
                </button>
                <button
                  onClick={() => setSelectedGrade('XI')}
                  className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    selectedGrade === 'XI'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Kelas XI
                </button>
                <button
                  onClick={() => setSelectedGrade('XII')}
                  className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    selectedGrade === 'XII'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Kelas XII
                </button>
              </div>
            </div>

            {/* Render exact or fallback tables */}
            {selectedMajor === Major.TKRO 
              ? renderTKROCurriculum() 
              : selectedMajor === Major.PK 
                ? renderPKCurriculum() 
                : selectedMajor === Major.DKV
                  ? renderDKVCurriculum()
                  : selectedMajor === Major.TL
                    ? renderTLCurriculum()
                    : renderFallbackCurriculum()}

            {/* Download PDF Button */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-slate-400">
                <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-xs font-semibold leading-relaxed">
                  Struktur kurikulum operasional di atas bersifat sah dan valid serta dapat diunduh dalam format PDF resmi.
                </p>
              </div>
              
              <a 
                href={majorLinks[selectedMajor]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition shadow-lg shadow-blue-500/20 whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>UNDUH PDF RESMI</span>
              </a>
            </div>
          </div>

          {/* Academic Calendar Section */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-10 overflow-hidden relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-black text-[#0f172a] flex items-center">
                <span className="w-2.5 h-8 bg-slate-900 mr-4 rounded-full"></span>
                Kalender Akademik
              </h2>
              <div className="flex items-center text-xs font-black text-blue-700 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2.5 animate-pulse"></span>
                SEMESTER GENAP 2025/2026
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-black text-slate-900">Agenda Akademik Semester Genap</h3>
                <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">
                  Pantau seluruh aktivitas proses belajar-mengajar, agenda pelaksanaan ujian (UKK/USBK), praktik kerja lapangan industri, hingga hari libur nasional resmi sekolah.
                </p>
              </div>
              <a 
                href={calendarLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition shadow-md flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>LIHAT KALENDER</span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-2xl text-xs text-amber-800 border border-amber-100 flex items-start space-x-3 font-semibold leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Catatan Penting:</strong> Tanggal pelaksanaan agenda akademik dapat menyesuaikan dengan surat keputusan kepala sekolah atau instruksi dari Dinas Pendidikan DKI Jakarta.
              </p>
            </div>
          </div>

          {/* Senior SEO & Informational Section for Search Engine Optimization */}
          <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="seo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#seo-grid)" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-blue-300 uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Informasi Kurikulum & Penyelarasan Industri Terpadu</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Pusat Informasi Kurikulum Merdeka & Vokasi Unggulan <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    SMK Tanjung Priok 1 Jakarta Utara
                  </span>
                </h2>
                <p className="text-slate-300 font-medium text-xs md:text-sm max-w-4xl leading-relaxed">
                  Sebagai Sekolah Menengah Kejuruan Pusat Keunggulan (SMK PK) terakreditasi A di wilayah Koja, Jakarta Utara, SMK Tanjung Priok 1 menyelenggarakan program pendidikan kejuruan bermutu tinggi. Melalui implementasi Kurikulum Merdeka, proses pembelajaran difokuskan pada penguasaan kompetensi praktis, pembentukan karakter luhur Pancasila, serta penyelarasan industri secara menyeluruh (Link and Match 8+i).
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">1. Kurikulum Industri Selaras</h3>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                    Setiap program keahlian mulai dari Teknik Pemesinan Kapal, TKRO, DKV, hingga Manajemen Logistik, menyusun kurikulum operasional yang disahkan langsung oleh mitra diler, industri pelabuhan, dan galangan kapal resmi nasional.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">2. Sertifikasi LSP-P1 BNSP</h3>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                    Siswa tidak hanya menerima ijazah kelulusan biasa, tetapi juga diuji oleh asesor profesional berlisensi BNSP (Badan Nasional Sertifikasi Profesi) untuk meraih sertifikat Garuda Emas kompetensi keahlian yang diakui global.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">3. Teaching Factory (TeFa)</h3>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                    Menghadirkan atmosfer industri riil ke dalam lingkungan sekolah melalui pengerjaan proyek komersial (PriokArt DKV, Bengkel Resmi TKRO, Pabrikasi Logas TPK) untuk melatih kemandirian dan jiwa kewirausahaan siswa sejak dini.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-slate-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Kurikulum Merdeka 2026/2027</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>SMK Pusat Keunggulan DKI Jakarta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Bursa Kerja Khusus (BKK) Aktif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Mitra Industri Galangan & Otomotif Astra</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
