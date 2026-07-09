import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Download, 
  Upload, 
  Info, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Check, 
  MapPin, 
  HelpCircle, 
  Filter, 
  CheckCircle2, 
  School,
  ChevronRight,
  TrendingUp,
  Map,
  Award,
  BookMarked,
  X,
  ZoomIn,
  ExternalLink
} from 'lucide-react';

// Type definitions for calendar items
type CategoryType = 'HBE' | 'LS' | 'MPLS' | 'ANBK' | 'STS_SAS' | 'UKK' | 'LHB_LHR' | 'LU' | 'CUTI';

interface CalendarDay {
  dayNum: number | null;
  type?: CategoryType;
  label?: string;
}

interface MonthConfig {
  name: string;
  year: number;
  weeks: (CalendarDay | null)[][]; // Matrix of 5 or 6 weeks x 7 days (Senin - Minggu)
  agendas: { date: number; label: string; type: CategoryType }[];
}

const AcademicCalendar: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<'GANJIL' | 'GENAP'>('GANJIL');
  const [activeFilter, setActiveFilter] = useState<CategoryType | 'ALL'>('ALL');
  const [hoveredDayInfo, setHoveredDayInfo] = useState<{ month: string; date: number; label: string; type: string } | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const teacherDriveLink = "https://drive.google.com/drive/folders/1HxQQYr6xHylifV_ry07JH1vM3Bw2m5Bk?usp=drive_link";
  const usPrakLink = "https://s.id/UsPrak25-26";
  const dispensasiUploadLink = "https://forms.gle/ADw1HZ3FYqqu68Jd8";
  
  const downloadableFiles = [
    { 
      name: 'Kalender Pendidikan SMK Tanjung Priok 1 TA 2026/2027', 
      type: 'PDF Resmi', 
      size: '1.4 MB', 
      icon: <CalendarIcon className="w-6 h-6 text-indigo-600" />,
      url: 'https://drive.google.com/file/d/1uFnH7dkIHS6-JWC7H3Q7dHd5V93wqAJ2/view?usp=drive_link'
    },
    { 
      name: 'Jadwal KBM SMK Tanjung Priok 1 TA 2026/2027', 
      type: 'Gambar Utama', 
      size: '1.8 MB', 
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      url: 'https://drive.google.com/file/d/1uTrdPi4q_V3eZNlgHEnfSXTQcetX3PVU/view?usp=drive_link'
    },
    { 
      name: 'SK Mengajar Guru SMK Tanjung Priok 1 TA 2026/2027', 
      type: 'Folder Google Drive', 
      size: 'Multi-Files', 
      icon: <Award className="w-6 h-6 text-purple-600" />,
      url: 'https://drive.google.com/drive/folders/1VqkRmZRZbykY16aoJFe9Hvytuf4ZH5aH?usp=drive_link'
    },
    { 
      name: 'Format Pembelajaran Jarak Jauh (PJJ) & Blended Learning', 
      type: 'DOCX', 
      size: '2.5 MB', 
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      url: 'https://docs.google.com/document/d/1smqs3wWq-DMsx4-beqjUZFIR4QfIzHzA/edit?usp=sharing&ouid=117287714725195940315&rtpof=true&sd=true'
    },
    { 
      name: 'Formulir Dispensasi & Perizinan Siswa Resmi', 
      type: 'PDF', 
      size: '0.4 MB', 
      icon: <BookMarked className="w-6 h-6 text-emerald-600" />,
      url: 'https://drive.google.com/file/d/1pYKS0GbzDzoWpQ51L9Sy5UMTywtJ8-u_/view?usp=sharing'
    },
  ];

  // Category mapping helper
  const categoryMeta: Record<CategoryType, { name: string; bg: string; text: string; dot: string }> = {
    HBE: { name: 'Hari Belajar Efektif', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-800', dot: 'bg-emerald-500' },
    LS: { name: 'Libur Semester', bg: 'bg-blue-50 border-blue-200', text: 'text-blue-800', dot: 'bg-blue-500' },
    MPLS: { name: 'Masa Pengenalan Lingkungan Sekolah', bg: 'bg-amber-100 border-amber-300', text: 'text-amber-900', dot: 'bg-amber-500' },
    ANBK: { name: 'Simulasi / Pelaksanaan ANBK', bg: 'bg-lime-50 border-lime-200', text: 'text-lime-800', dot: 'bg-lime-500' },
    STS_SAS: { name: 'Asesmen Akhir Semester / STS', bg: 'bg-slate-200 border-slate-300', text: 'text-slate-800', dot: 'bg-slate-600' },
    UKK: { name: 'Uji Kompetensi Keahlian (UKK)', bg: 'bg-yellow-100 border-yellow-300', text: 'text-yellow-900', dot: 'bg-yellow-500' },
    LHB_LHR: { name: 'Libur Nasional / Hari Raya', bg: 'bg-orange-100 border-orange-200', text: 'text-orange-800', dot: 'bg-orange-500' },
    LU: { name: 'Libur Akhir Pekan (Sabtu/Minggu)', bg: 'bg-rose-50 border-rose-100', text: 'text-rose-600', dot: 'bg-rose-500' },
    CUTI: { name: 'Cuti Bersama Nasional', bg: 'bg-red-50 border-red-200', text: 'text-red-800', dot: 'bg-red-500' }
  };

  // Semester Ganjil 2026 Config Array
  const ganjilMonths: MonthConfig[] = [
    {
      name: 'JULI',
      year: 2026,
      weeks: [
        [null, null, { dayNum: 1 }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4, type: 'LU' }, { dayNum: 5, type: 'LU' }],
        [{ dayNum: 6 }, { dayNum: 7 }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10 }, { dayNum: 11, type: 'LU' }, { dayNum: 12, type: 'LU' }],
        [{ dayNum: 13, type: 'MPLS', label: 'MPLS' }, { dayNum: 14 }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18, type: 'LU' }, { dayNum: 19, type: 'LU' }],
        [{ dayNum: 20, type: 'ANBK', label: 'Simulasi ANBK' }, { dayNum: 21 }, { dayNum: 22 }, { dayNum: 23 }, { dayNum: 24 }, { dayNum: 25, type: 'LU' }, { dayNum: 26, type: 'LU' }],
        [{ dayNum: 27, type: 'ANBK', label: 'Gladi Bersih ANBK' }, { dayNum: 28 }, { dayNum: 29 }, { dayNum: 30 }, { dayNum: 31, type: 'UKK', label: 'Sosialisasi KJP' }]
      ],
      agendas: [
        { date: 13, label: 'MPLS (Masa Pengenalan Lingkungan Sekolah)', type: 'MPLS' },
        { date: 20, label: 'Simulasi Asesmen Nasional (ANBK)', type: 'ANBK' },
        { date: 27, label: 'Gladi Bersih ANBK Utama', type: 'ANBK' },
        { date: 31, label: 'Sosialisasi Pendebitan KJP Kelas X & XI', type: 'UKK' }
      ]
    },
    {
      name: 'AGUSTUS',
      year: 2026,
      weeks: [
        [null, null, null, null, null, { dayNum: 1, type: 'LU' }, { dayNum: 2, type: 'LU' }],
        [{ dayNum: 3, type: 'ANBK', label: 'Pelaksanaan ANBK' }, { dayNum: 4 }, { dayNum: 5 }, { dayNum: 6 }, { dayNum: 7 }, { dayNum: 8, type: 'LU' }, { dayNum: 9, type: 'LU' }],
        [{ dayNum: 10 }, { dayNum: 11 }, { dayNum: 12 }, { dayNum: 13 }, { dayNum: 14, type: 'LHB_LHR', label: 'Persiapan HUT RI' }, { dayNum: 15, type: 'LU' }, { dayNum: 16, type: 'LU' }],
        [{ dayNum: 17, type: 'LHB_LHR', label: 'HUT Kemerdekaan RI' }, { dayNum: 18 }, { dayNum: 19 }, { dayNum: 20 }, { dayNum: 21 }, { dayNum: 22, type: 'LU' }, { dayNum: 23, type: 'LU' }],
        [{ dayNum: 24 }, { dayNum: 25, type: 'LHB_LHR', label: 'Maulid Nabi SAW' }, { dayNum: 26 }, { dayNum: 27 }, { dayNum: 28 }, { dayNum: 29, type: 'LU' }, { dayNum: 30, type: 'LU' }],
        [{ dayNum: 31 }]
      ],
      agendas: [
        { date: 3, label: 'Pelaksanaan ANBK Utama Gelombang 1', type: 'ANBK' },
        { date: 14, label: 'Persiapan & Upacara Gladi HUT Kemerdekaan RI', type: 'LHB_LHR' },
        { date: 17, label: 'Upacara Peringatan Hari Kemerdekaan RI Ke-81', type: 'LHB_LHR' },
        { date: 25, label: 'Hari Raya Maulid Nabi Muhammad SAW 1448 H', type: 'LHB_LHR' }
      ]
    },
    {
      name: 'SEPTEMBER',
      year: 2026,
      weeks: [
        [null, { dayNum: 1 }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5, type: 'LU' }, { dayNum: 6, type: 'LU' }],
        [{ dayNum: 7 }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10 }, { dayNum: 11 }, { dayNum: 12, type: 'LU' }, { dayNum: 13, type: 'LU' }],
        [{ dayNum: 14 }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18 }, { dayNum: 19, type: 'LU' }, { dayNum: 20, type: 'LU' }],
        [{ dayNum: 21, type: 'STS_SAS', label: 'STS Ganjil' }, { dayNum: 22 }, { dayNum: 23 }, { dayNum: 24 }, { dayNum: 25 }, { dayNum: 26, type: 'LU' }, { dayNum: 27, type: 'LU' }],
        [{ dayNum: 28 }, { dayNum: 29 }, { dayNum: 30 }]
      ],
      agendas: [
        { date: 21, label: 'Sumatif Tengah Semester (STS) Ganjil Kelas X, XI, XII', type: 'STS_SAS' }
      ]
    },
    {
      name: 'OKTOBER',
      year: 2026,
      weeks: [
        [null, null, null, { dayNum: 1 }, { dayNum: 2 }, { dayNum: 3, type: 'LU' }, { dayNum: 4, type: 'LU' }],
        [{ dayNum: 5 }, { dayNum: 6 }, { dayNum: 7 }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10, type: 'LU' }, { dayNum: 11, type: 'LU' }],
        [{ dayNum: 12, type: 'ANBK', label: 'Simulasi TKA 1' }, { dayNum: 13 }, { dayNum: 14 }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17, type: 'LU' }, { dayNum: 18, type: 'LU' }],
        [{ dayNum: 19 }, { dayNum: 20 }, { dayNum: 21 }, { dayNum: 22 }, { dayNum: 23 }, { dayNum: 24, type: 'LU' }, { dayNum: 25, type: 'LU' }],
        [{ dayNum: 26 }, { dayNum: 27 }, { dayNum: 28 }, { dayNum: 29 }, { dayNum: 30 }, { dayNum: 31, type: 'LU' }]
      ],
      agendas: [
        { date: 12, label: 'Simulasi Tes Kemampuan Akademik (TKA) Ke-1 Kelas XII', type: 'ANBK' }
      ]
    },
    {
      name: 'NOVEMBER',
      year: 2026,
      weeks: [
        [null, null, null, null, null, null, { dayNum: 1, type: 'LU' }],
        [{ dayNum: 2, type: 'ANBK', label: 'Pelaksanaan TKA' }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5 }, { dayNum: 6 }, { dayNum: 7, type: 'LU' }, { dayNum: 8, type: 'LU' }],
        [{ dayNum: 9, type: 'UKK', label: 'Projek 8 dpl' }, { dayNum: 10 }, { dayNum: 11 }, { dayNum: 12 }, { dayNum: 13 }, { dayNum: 14, type: 'LU' }, { dayNum: 15, type: 'LU' }],
        [{ dayNum: 16 }, { dayNum: 17 }, { dayNum: 18 }, { dayNum: 19 }, { dayNum: 20 }, { dayNum: 21, type: 'LU' }, { dayNum: 22, type: 'LU' }],
        [{ dayNum: 23, type: 'UKK', label: 'Simulasi 1 Ujikom' }, { dayNum: 24 }, { dayNum: 25 }, { dayNum: 26 }, { dayNum: 27 }, { dayNum: 28, type: 'LU' }, { dayNum: 29, type: 'LU' }],
        [{ dayNum: 30 }]
      ],
      agendas: [
        { date: 2, label: 'Pelaksanaan Tes Kemampuan Akademik (TKA) Gelombang Utama', type: 'ANBK' },
        { date: 9, label: 'Projek 8 dpl / Penguatan Program Kejuruan Terpadu', type: 'UKK' },
        { date: 23, label: 'Simulasi Ke-1 Ujian Sertifikasi Kompetensi (UjiKom) Nasional', type: 'UKK' }
      ]
    },
    {
      name: 'DESEMBER',
      year: 2026,
      weeks: [
        [null, { dayNum: 1 }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5, type: 'LU' }, { dayNum: 6, type: 'LU' }],
        [{ dayNum: 7, type: 'STS_SAS', label: 'SAS Ganjil' }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10 }, { dayNum: 11 }, { dayNum: 12, type: 'LU' }, { dayNum: 13, type: 'LU' }],
        [{ dayNum: 14 }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18, type: 'LS', label: 'Pembagian LHBS' }, { dayNum: 19, type: 'LU' }, { dayNum: 20, type: 'LU' }],
        [{ dayNum: 21, type: 'LS' }, { dayNum: 22, type: 'LS' }, { dayNum: 23, type: 'LS' }, { dayNum: 24, type: 'CUTI', label: 'Cuti Natal' }, { dayNum: 25, type: 'LHB_LHR', label: 'Hari Natal' }, { dayNum: 26, type: 'LU' }, { dayNum: 27, type: 'LU' }],
        [{ dayNum: 28, type: 'LS' }, { dayNum: 29, type: 'LS' }, { dayNum: 30, type: 'LS' }, { dayNum: 31, type: 'LS' }]
      ],
      agendas: [
        { date: 7, label: 'Sumatif Akhir Semester (SAS) Ganjil Seluruh Tingkatan', type: 'STS_SAS' },
        { date: 18, label: 'Pembagian Laporan Hasil Belajar Siswa (LHBS) Ganjil', type: 'LS' },
        { date: 24, label: 'Cuti Bersama Hari Raya Natal', type: 'CUTI' },
        { date: 25, label: 'Hari Raya Natal 2026', type: 'LHB_LHR' }
      ]
    }
  ];

  // Semester Genap 2027 Config Array
  const genapMonths: MonthConfig[] = [
    {
      name: 'JANUARI',
      year: 2027,
      weeks: [
        [null, null, null, null, { dayNum: 1, type: 'LHB_LHR', label: 'Tahun Baru' }, { dayNum: 2, type: 'LU' }, { dayNum: 3, type: 'LU' }],
        [{ dayNum: 4, type: 'HBE', label: 'Masuk Efektif' }, { dayNum: 5 }, { dayNum: 6 }, { dayNum: 7 }, { dayNum: 8 }, { dayNum: 9, type: 'LU' }, { dayNum: 10, type: 'LU' }],
        [{ dayNum: 11, type: 'UKK', label: 'US Praktek XII' }, { dayNum: 12 }, { dayNum: 13 }, { dayNum: 14 }, { dayNum: 15 }, { dayNum: 16, type: 'LU' }, { dayNum: 17, type: 'LU' }],
        [{ dayNum: 18, type: 'UKK', label: 'Simulasi 2 Ujikom' }, { dayNum: 19 }, { dayNum: 20 }, { dayNum: 21 }, { dayNum: 22 }, { dayNum: 23, type: 'LU' }, { dayNum: 24, type: 'LU' }],
        [{ dayNum: 25 }, { dayNum: 26 }, { dayNum: 27 }, { dayNum: 28 }, { dayNum: 29 }, { dayNum: 30, type: 'LU' }, { dayNum: 31, type: 'LU' }]
      ],
      agendas: [
        { date: 1, label: 'Tahun Baru Masehi 2027', type: 'LHB_LHR' },
        { date: 4, label: 'Hari Pertama Masuk Sekolah & KBM Efektif Semester Genap', type: 'HBE' },
        { date: 11, label: 'Ujian Sekolah (US) Praktik Utama Kelas XII', type: 'UKK' },
        { date: 18, label: 'Simulasi Ke-2 Ujian Sertifikasi Kompetensi (UjiKom) Nasional', type: 'UKK' }
      ]
    },
    {
      name: 'FEBRUARI',
      year: 2027,
      weeks: [
        [{ dayNum: 1 }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5, type: 'UKK', label: 'Ajang Karya' }, { dayNum: 6, type: 'LU' }, { dayNum: 7, type: 'LU' }],
        [{ dayNum: 8, type: 'HBE', label: 'Awal Puasa' }, { dayNum: 9 }, { dayNum: 10, type: 'HBE', label: 'Awal Puasa' }, { dayNum: 11 }, { dayNum: 12 }, { dayNum: 13, type: 'LU' }, { dayNum: 14, type: 'LU' }],
        [{ dayNum: 15, type: 'UKK', label: 'Simulasi 3 Ujikom' }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18 }, { dayNum: 19 }, { dayNum: 20, type: 'LU' }, { dayNum: 21, type: 'LU' }],
        [{ dayNum: 22 }, { dayNum: 23 }, { dayNum: 24, type: 'STS_SAS', label: 'SAS XII & STS' }, { dayNum: 25 }, { dayNum: 26 }, { dayNum: 27, type: 'LU' }, { dayNum: 28, type: 'LU' }]
      ],
      agendas: [
        { date: 5, label: 'Ajang Karya & Pameran US Praktik Unggulan', type: 'UKK' },
        { date: 8, label: 'Kegiatan Permulaan Puasa Ramadan 1448 H (KBM Disesuaikan)', type: 'HBE' },
        { date: 15, label: 'Simulasi Akhir / Ke-3 Ujian Sertifikasi Kompetensi (UjiKom)', type: 'UKK' },
        { date: 24, label: 'Sumatif Akhir Semester (SAS) Kelas XII & Sumatif Tengah Semester (STS) Kelas X & XI', type: 'STS_SAS' }
      ]
    },
    {
      name: 'MARET',
      year: 2027,
      weeks: [
        [{ dayNum: 1, type: 'STS_SAS', label: 'SAS & STS' }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5 }, { dayNum: 6, type: 'LU' }, { dayNum: 7, type: 'LU' }],
        [{ dayNum: 8 }, { dayNum: 9 }, { dayNum: 10 }, { dayNum: 11 }, { dayNum: 12 }, { dayNum: 13, type: 'LU' }, { dayNum: 14, type: 'LU' }],
        [{ dayNum: 15, type: 'LHB_LHR', label: 'Libur Hari Raya' }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18 }, { dayNum: 19 }, { dayNum: 20, type: 'LU' }, { dayNum: 21, type: 'LU' }],
        [{ dayNum: 22 }, { dayNum: 23 }, { dayNum: 24 }, { dayNum: 25 }, { dayNum: 26 }, { dayNum: 27, type: 'LU' }, { dayNum: 28, type: 'LU' }],
        [{ dayNum: 29, type: 'UKK', label: 'US TEORI XII' }, { dayNum: 30 }, { dayNum: 31 }]
      ],
      agendas: [
        { date: 1, label: 'Lanjutan Sumatif Akhir Semester (SAS) Kelas XII & STS Kelas X-XI', type: 'STS_SAS' },
        { date: 15, label: 'Prakiraan Libur Nasional / Cuti Bersama Sekitar Idul Fitri 1448 H', type: 'LHB_LHR' },
        { date: 29, label: 'Ujian Sekolah (US) Teori Utama Kelas XII', type: 'UKK' }
      ]
    },
    {
      name: 'APRIL',
      year: 2027,
      weeks: [
        [null, null, null, { dayNum: 1, type: 'STS_SAS', label: 'US TEORI' }, { dayNum: 2 }, { dayNum: 3, type: 'LU' }, { dayNum: 4, type: 'LU' }],
        [{ dayNum: 5 }, { dayNum: 6 }, { dayNum: 7, type: 'STS_SAS', label: 'Laporan PKL' }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10, type: 'LU' }, { dayNum: 11, type: 'LU' }],
        [{ dayNum: 12 }, { dayNum: 13 }, { dayNum: 14, type: 'UKK', label: 'LSP / LSK' }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17, type: 'LU' }, { dayNum: 18, type: 'LU' }],
        [{ dayNum: 19, type: 'UKK', label: 'Sertifikasi LSP' }, { dayNum: 20 }, { dayNum: 21 }, { dayNum: 22 }, { dayNum: 23 }, { dayNum: 24, type: 'LU' }, { dayNum: 25, type: 'LU' }],
        [{ dayNum: 26 }, { dayNum: 27 }, { dayNum: 28 }, { dayNum: 29, type: 'UKK', label: 'Rapat Lulus' }, { dayNum: 30 }]
      ],
      agendas: [
        { date: 1, label: 'Penyelesaian US Teori Utama Kelas XII', type: 'STS_SAS' },
        { date: 7, label: 'Ujian Lisan Pertanggungjawaban Laporan PKL Kelas XII', type: 'STS_SAS' },
        { date: 14, label: 'Ujian Sertifikasi Keahlian Berlisensi BNSP LSP-P1 / LSK Terakreditasi', type: 'UKK' },
        { date: 29, label: 'Rapat Pleno Dewan Guru Kelulusan Siswa Tingkat Kelas XII', type: 'UKK' }
      ]
    },
    {
      name: 'MEI',
      year: 2027,
      weeks: [
        [null, null, null, null, null, { dayNum: 1, type: 'LU' }, { dayNum: 2, type: 'LU' }],
        [{ dayNum: 3, type: 'UKK', label: 'Pengumuman Lulus' }, { dayNum: 4 }, { dayNum: 5 }, { dayNum: 6 }, { dayNum: 7 }, { dayNum: 8, type: 'LU' }, { dayNum: 9, type: 'LU' }],
        [{ dayNum: 10 }, { dayNum: 11 }, { dayNum: 12 }, { dayNum: 13 }, { dayNum: 14 }, { dayNum: 15, type: 'LU' }, { dayNum: 16, type: 'LU' }],
        [{ dayNum: 17 }, { dayNum: 18 }, { dayNum: 19 }, { dayNum: 20, type: 'LHB_LHR', label: 'Libur Nasional' }, { dayNum: 21 }, { dayNum: 22, type: 'LU' }, { dayNum: 23, type: 'LU' }],
        [{ dayNum: 24 }, { dayNum: 25 }, { dayNum: 26 }, { dayNum: 27 }, { dayNum: 28 }, { dayNum: 29, type: 'LU' }, { dayNum: 30, type: 'LU' }],
        [{ dayNum: 31 }]
      ],
      agendas: [
        { date: 3, label: 'Prakiraan Rilis Resmi Pengumuman Kelulusan Siswa Kelas XII Melalui Portal Digital', type: 'UKK' },
        { date: 20, label: 'Libur Nasional Keagamaan / Hari Raya Kenaikan', type: 'LHB_LHR' }
      ]
    },
    {
      name: 'JUNI',
      year: 2027,
      weeks: [
        [null, { dayNum: 1 }, { dayNum: 2 }, { dayNum: 3 }, { dayNum: 4 }, { dayNum: 5, type: 'LU' }, { dayNum: 6, type: 'LU' }],
        [{ dayNum: 7, type: 'STS_SAS', label: 'SAS Genap' }, { dayNum: 8 }, { dayNum: 9 }, { dayNum: 10 }, { dayNum: 11 }, { dayNum: 12, type: 'LU' }, { dayNum: 13, type: 'LU' }],
        [{ dayNum: 14 }, { dayNum: 15 }, { dayNum: 16 }, { dayNum: 17 }, { dayNum: 18 }, { dayNum: 19, type: 'LU' }, { dayNum: 20, type: 'LU' }],
        [{ dayNum: 21, type: 'LS' }, { dayNum: 22, type: 'LS' }, { dayNum: 23, type: 'LS' }, { dayNum: 24, type: 'LS' }, { dayNum: 25, type: 'LS', label: 'Pembagian LHBS' }, { dayNum: 26, type: 'LU' }, { dayNum: 27, type: 'LU' }],
        [{ dayNum: 28, type: 'LS' }, { dayNum: 29, type: 'LS' }, { dayNum: 30, type: 'LS' }]
      ],
      agendas: [
        { date: 7, label: 'Sumatif Akhir Semester (SAS) Genap / Kenaikan Kelas X - XI', type: 'STS_SAS' },
        { date: 25, label: 'Pembagian Laporan Hasil Belajar Siswa (LHBS) Semester Genap', type: 'LS' },
        { date: 26, label: 'Mulai Libur Akhir Tahun Ajaran 2026/2027 (Hingga Juli 2027)', type: 'LS' }
      ]
    }
  ];

  const currentMonths = selectedSemester === 'GANJIL' ? ganjilMonths : genapMonths;

  // Custom filter checking logic for cell highlighting
  const isHighlighted = (dayType: CategoryType | undefined) => {
    if (activeFilter === 'ALL') return true;
    return dayType === activeFilter;
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Dynamic SEO JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          "name": "SMK Tanjung Priok 1 Jakarta Utara",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Mangga No. 3, Koja",
            "addressLocality": "Jakarta Utara",
            "addressRegion": "DKI Jakarta",
            "postalCode": "14260",
            "addressCountry": "ID"
          },
          "url": "https://smktanjungpriok1.sch.id",
          "logo": "https://drive.google.com/thumbnail?id=1aVGydXBLShtJ0v7HrEutC1V8zEMMbGOd&sz=w200",
          "image": "https://drive.google.com/thumbnail?id=1MtVR3nnr0g8nkLo2kZQc_afBTspy8qOG&sz=w1600",
          "telephone": "+62214301192",
          "email": "smk1dikantara@gmail.com",
          "hasMap": "https://maps.google.com",
          "description": "Kalender Pendidikan Resmi SMK Tanjung Priok 1 Jakarta Utara Tahun Ajaran 2026/2027 Kurikulum Merdeka Terakreditasi A.",
          "offers": {
            "@type": "Offer",
            "name": "Pendaftaran Siswa Baru (PPDB)",
            "url": "https://smktanjungpriok1.sch.id/ppdb"
          }
        })}
      </script>

      {/* SEO Optimized Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-grid)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-blue-300 uppercase">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Pusat Data Akademik & Informasi Resmi 2026/2027</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
            Kalender Akademik Pendidikan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              SMK Tanjung Priok 1 Jakarta Utara
            </span>
          </h1>

          <p className="text-slate-300 font-medium text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
            Selamat datang di portal informasi operasional pengajaran, asesmen kompetensi, serta hari libur nasional resmi untuk Tahun Ajaran 2026/2027. Disusun terpadu sesuai panduan Kementerian Pendidikan DKI Jakarta & Penyelarasan Industri.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-bold text-slate-300">
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Kurikulum Merdeka 2026/2027</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Sekolah Pusat Keunggulan (SMK PK)</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Terakreditasi A Unggul</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* Interactive Controls Card */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border border-slate-100 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Semester Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">Pilih Semester Akademik</label>
              <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full sm:w-auto">
                <button
                  onClick={() => setSelectedSemester('GANJIL')}
                  className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-black transition-all ${
                    selectedSemester === 'GANJIL'
                      ? 'bg-indigo-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  SEMESTER GANJIL (2026)
                </button>
                <button
                  onClick={() => setSelectedSemester('GENAP')}
                  className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-black transition-all ${
                    selectedSemester === 'GENAP'
                      ? 'bg-indigo-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  SEMESTER GENAP (2027)
                </button>
              </div>
            </div>

            {/* Filter by Category */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" /> Filter Penandaan Agenda
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter('ALL')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black border transition ${
                    activeFilter === 'ALL'
                      ? 'bg-slate-900 text-white border-slate-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Tampilkan Semua
                </button>
                {Object.entries(categoryMeta).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key as CategoryType)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition flex items-center space-x-2 ${
                      activeFilter === key
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-900 shadow-sm ring-1 ring-indigo-300'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${value.dot}`}></span>
                    <span>{value.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Hover Information Banner (Interactive Feature) */}
        {hoveredDayInfo && (
          <div className="bg-indigo-50 border-l-4 border-indigo-600 text-indigo-950 p-4 rounded-2xl mb-8 flex items-center justify-between animate-fade-in">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <p className="text-xs font-black uppercase text-indigo-700 tracking-wider">Detail Agenda Terpilih</p>
                <h4 className="text-sm font-bold">
                  {hoveredDayInfo.date} {hoveredDayInfo.month} {selectedSemester === 'GANJIL' ? '2026' : '2027'} : {hoveredDayInfo.label}
                </h4>
              </div>
            </div>
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-indigo-200/50">
              {hoveredDayInfo.type}
            </span>
          </div>
        )}

        {/* The 6-Month Grid Calendar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentMonths.map((month, mIdx) => (
            <div key={mIdx} className="bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
              
              {/* Month Header */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-5 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black tracking-tight">{month.name}</h3>
                  <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-wider">{month.year}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-mono text-xs font-bold">
                  {(selectedSemester === 'GANJIL' ? mIdx + 7 : mIdx + 1).toString().padStart(2, '0')}
                </div>
              </div>

              {/* Day Name Headers */}
              <div className="p-4 bg-slate-50 border-b border-slate-100 grid grid-cols-7 gap-1 text-center font-black text-[10px] text-slate-500 uppercase tracking-widest">
                <div>Sen</div>
                <div>Sel</div>
                <div>Rab</div>
                <div>Kam</div>
                <div>Jum</div>
                <div>Sab</div>
                <div className="text-red-500">Min</div>
              </div>

              {/* Date Grid */}
              <div className="p-4 grid grid-cols-7 gap-1 bg-white">
                {month.weeks.map((week, wIdx) => (
                  <React.Fragment key={wIdx}>
                    {week.map((day, dIdx) => {
                      if (!day) {
                        return <div key={dIdx} className="aspect-square"></div>;
                      }

                      // Check if matches active filter
                      const matchesFilter = isHighlighted(day.type);
                      
                      // Setup specific styling classes
                      let cellClass = "aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold relative transition-all duration-200 cursor-help ";
                      let innerLabel = day.label;

                      if (day.type === 'LU') {
                        cellClass += "bg-rose-50 text-red-600 hover:bg-rose-100";
                      } else if (day.type === 'MPLS') {
                        cellClass += "bg-amber-100 text-amber-950 border border-amber-300 shadow-sm";
                      } else if (day.type === 'ANBK') {
                        cellClass += "bg-lime-100 text-lime-900 border border-lime-300 shadow-sm";
                      } else if (day.type === 'STS_SAS') {
                        cellClass += "bg-slate-200 text-slate-800 border border-slate-300 shadow-sm";
                      } else if (day.type === 'UKK') {
                        cellClass += "bg-yellow-100 text-yellow-950 border border-yellow-300 shadow-sm";
                      } else if (day.type === 'LHB_LHR') {
                        cellClass += "bg-orange-100 text-orange-950 border border-orange-300 shadow-sm";
                      } else if (day.type === 'CUTI') {
                        cellClass += "bg-red-50 text-red-900 border border-red-200 shadow-sm";
                      } else if (day.type === 'LS') {
                        cellClass += "bg-blue-100 text-blue-900 border border-blue-300 shadow-sm";
                      } else if (day.type === 'HBE') {
                        cellClass += "bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-sm";
                      } else {
                        cellClass += "text-slate-800 hover:bg-slate-100";
                      }

                      // Apply opacity reduction if active filter doesn't match
                      if (!matchesFilter) {
                        cellClass += " opacity-25 scale-95";
                      }

                      return (
                        <div
                          key={dIdx}
                          className={cellClass}
                          onMouseEnter={() => {
                            if (day.label) {
                              setHoveredDayInfo({
                                month: month.name,
                                date: day.dayNum || 0,
                                label: day.label || '',
                                type: day.type ? categoryMeta[day.type].name : 'Hari Efektif'
                              });
                            }
                          }}
                          onMouseLeave={() => setHoveredDayInfo(null)}
                        >
                          <span className={day.type === 'LU' ? 'text-red-600' : ''}>
                            {day.dayNum}
                          </span>
                          {day.type && day.type !== 'LU' && (
                            <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-slate-900/60"></span>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              {/* Monthly Agenda List Footer */}
              <div className="p-5 bg-slate-50/50 border-t border-slate-100 flex-grow">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Agenda & Kegiatan</h4>
                {month.agendas.length > 0 ? (
                  <div className="space-y-2.5">
                    {month.agendas.map((agenda, aIdx) => (
                      <div 
                        key={aIdx} 
                        className={`p-2.5 rounded-xl border text-xs leading-relaxed font-semibold transition ${
                          activeFilter === 'ALL' || activeFilter === agenda.type 
                            ? 'bg-white border-slate-100 shadow-sm text-slate-700' 
                            : 'opacity-40 bg-slate-50 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`w-2 h-2 rounded-full ${categoryMeta[agenda.type].dot}`}></span>
                          <span className="font-mono text-[10px] font-black text-slate-500">Tanggal {agenda.date}</span>
                        </div>
                        <p className="pl-4">{agenda.label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic font-medium py-2">Belum ada agenda khusus bulan ini.</p>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Legend Information Box */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-slate-100 mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-950">Panduan & Keterangan Kode Kalender</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Legenda Penandaan Warna Kalender Pendidikan 2026/2027</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categoryMeta).map(([key, value]) => (
              <div key={key} className={`p-4 rounded-2xl border ${value.bg} flex items-start space-x-3`}>
                <div className={`w-3.5 h-3.5 rounded-full mt-1 ${value.dot} shrink-0`}></div>
                <div>
                  <h4 className={`text-xs font-black ${value.text}`}>{key}</h4>
                  <p className="text-xs font-semibold text-slate-500 mt-1 leading-relaxed">{value.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 bg-slate-50/50 p-6 rounded-3xl text-xs font-semibold text-slate-500 leading-relaxed space-y-2">
            <div className="flex items-center space-x-2 font-black text-slate-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Catatan Penyesuaian Operasional Sekolah:</span>
            </div>
            <p className="pl-6">• Penyelenggaraan kalender pendidikan di atas mengikuti acuan standar dinas pendidikan daerah provinsi DKI Jakarta Tahun Pelajaran 2026/2027.</p>
            <p className="pl-6">• Untuk agenda keagamaan nasional seperti Idul Fitri, Maulid Nabi, dan hari libur keagamaan lainnya akan disesuaikan kembali mengikuti Keputusan Menteri Agama dan Surat Keputusan Bersama (SKB) 3 Menteri terbaru.</p>
            <p className="pl-6">• Siswa dan orang tua dihimbau untuk selalu memeriksa pembaruan berkas berkala melalui portal sekolah online ini.</p>
          </div>
        </div>

        {/* Jadwal KBM Master Section - Premium Interactive Showcase */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Text description on Left */}
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 border border-amber-200/50 px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dokumen Akademik Utama</span>
              </span>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Jadwal Kegiatan Belajar Mengajar (KBM) <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                    SMK Tanjung Priok 1 TA 2026/2027
                  </span>
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  Berikut merupakan bagan matriks jadwal Kegiatan Belajar Mengajar (KBM) resmi yang berlaku di SMK Tanjung Priok 1 Jakarta Utara untuk Tahun Pelajaran 2026/2027. Bagan ini memetakan seluruh alokasi jam pelajaran, perpindahan ruang kelas (moving class), serta jadwal mengajar efektif untuk seluruh mata pelajaran umum, kejuruan, koding, dan muatan lokal.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Transparansi Akademik:</strong> Memudahkan siswa, guru, dan orang tua memantau jadwal harian secara terintegrasi.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Responsif & Tajam:</strong> Gambar jadwal KBM dapat diperbesar langsung lewat fitur lighbox resolusi tinggi.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setLightboxImage({ 
                    url: "https://lh3.googleusercontent.com/d/1uTrdPi4q_V3eZNlgHEnfSXTQcetX3PVU", 
                    title: "Jadwal KBM SMK Tanjung Priok 1 TA 2026/2027" 
                  })}
                  className="bg-[#0f172a] hover:bg-amber-600 text-white font-black py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2 shadow-md cursor-pointer"
                >
                  <ZoomIn className="w-4.5 h-4.5" />
                  <span>Perbesar Jadwal</span>
                </button>
                
                <a
                  href="https://drive.google.com/file/d/1uTrdPi4q_V3eZNlgHEnfSXTQcetX3PVU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-4 px-6 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 border border-slate-200 cursor-pointer"
                >
                  <ExternalLink className="w-4.5 h-4.5 text-slate-600" />
                  <span>Buka di Google Drive</span>
                </a>
              </div>
            </div>

            {/* Interactive Image Box on Right */}
            <div className="w-full lg:w-[450px] shrink-0">
              <div 
                className="bg-slate-50 rounded-[2rem] p-4 border border-slate-100 shadow-lg relative group/stage overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxImage({ 
                  url: "https://lh3.googleusercontent.com/d/1uTrdPi4q_V3eZNlgHEnfSXTQcetX3PVU", 
                  title: "Jadwal KBM SMK Tanjung Priok 1 TA 2026/2027" 
                })}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1uTrdPi4q_V3eZNlgHEnfSXTQcetX3PVU" 
                    alt="Jadwal KBM SMK Tanjung Priok 1 TA 2026/2027"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-all duration-500 group-hover/stage:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Overlay Dark */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/stage:bg-slate-950/20 transition-all duration-300" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 right-4 bg-slate-950/80 text-white px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md flex items-center space-x-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Klik Untuk Memperbesar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Double-Panel: Download and Upload Portal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Download Center Card */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Pusat Unduhan Dokumen</h3>
            </div>

            <div className="grid gap-4">
              {downloadableFiles.map((file, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition flex items-center justify-between group">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition">
                      {file.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-indigo-900 transition">{file.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                        {file.type} • {file.size}
                      </p>
                    </div>
                  </div>
                  <a 
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-50 rounded-2xl text-indigo-600 hover:bg-indigo-900 hover:text-white transition shadow-sm"
                    aria-label={`Unduh ${file.name}`}
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Portal Card */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Upload className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Sistem Unggah Berkas</h3>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl border-b-8 border-indigo-600">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <School className="w-32 h-32" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block bg-indigo-600 text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
                  PORTAL AKADEMIK TERPADU
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black">Pengiriman Berkas, Tugas & Perizinan</h4>
                  <p className="text-indigo-200/80 font-medium text-xs leading-relaxed">
                    Unggah tugas praktik mandiri, dokumen pendukung perizinan siswa, atau laporan guru ke server sekolah. Gunakan akun email institusi resmi Anda.
                  </p>
                </div>

                <div className="flex flex-col space-y-3 pt-2">
                  <a 
                    href={teacherDriveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-2xl font-black text-center text-sm transition shadow-lg hover:scale-[1.02] active:scale-[0.98] border-b-4 border-indigo-900"
                  >
                    AKSES PORTAL GURU (GOOGLE DRIVE)
                  </a>
                  
                  <a 
                    href={usPrakLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-slate-900 hover:bg-slate-50 py-4 rounded-2xl font-black text-center text-sm transition shadow-lg hover:scale-[1.02] active:scale-[0.98] border-b-4 border-slate-300"
                  >
                    KIRIM DATA USPRAK TA 2026/2027
                  </a>

                  <a 
                    href={dispensasiUploadLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 rounded-2xl font-black text-center text-sm transition shadow-lg hover:scale-[1.02] active:scale-[0.98] border-b-4 border-emerald-900"
                  >
                    UNGGAH SURAT DISPENSASI & IZIN SISWA
                  </a>
                </div>

                <div className="py-3 px-4 border border-white/10 bg-white/5 rounded-2xl text-center">
                  <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">Verifikasi email sekolah @smktp01.sch.id diperlukan</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Educational Banner Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center space-x-3">
            <span className="w-1.5 h-7 bg-indigo-600 rounded-full"></span>
            <span>Galeri & Dokumentasi Kegiatan Akademik Utama</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src="https://drive.google.com/thumbnail?id=1ER7ri91mX-q9QZFjxqWzFPYYLlXSGnua&sz=w800" 
                  alt="Evaluasi Belajar Digital SMK Tanjung Priok 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Evaluasi Belajar Digital
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-black text-slate-900 mb-2">Asesmen Sekolah Berbasis Komputer & Tablet</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Mendukung transformasi digital nasional, pelaksanaan Asesmen Akhir Semester (SAS) di sekolah kami menggunakan sistem terkomputerisasi yang andal, aman, dan efisien demi transparansi akademik.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src="https://drive.google.com/thumbnail?id=19xD-FUnemb355H10wfQZhfX6jGHPjC7W&sz=w800" 
                  alt="Uji Kompetensi Keahlian SMK Tanjung Priok 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-indigo-900/95 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Sertifikasi Industri
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-black text-slate-900 mb-2">Ujian Kompetensi Keahlian Bersama Asesor BNSP</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  Membekali lulusan dengan kesiapan kerja tinggi melalui Sertifikasi Lisensi Badan Nasional Sertifikasi Profesi (BNSP) di bidang Otomotif, Pemesinan Kapal, DKV, dan Logistik Port-Commerce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Senior SEO & Educational Information Section */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="seo-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#seo-pattern)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-indigo-300 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Analisis Akademik & Strategi Unggulan SMK PK</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                Pusat Kalender Pendidikan Resmi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  SMK Tanjung Priok 1 Jakarta Utara 2026/2027
                </span>
              </h2>
              
              <p className="text-slate-300 font-medium text-xs md:text-sm max-w-5xl leading-relaxed">
                Sebagai lembaga pendidikan kejuruan berlisensi Sekolah Pusat Keunggulan (SMK PK) DKI Jakarta, SMK Tanjung Priok 1 merancang Kalender Pendidikan Akademik TA 2026/2027 dengan cermat demi memaksimalkan porsi pengajaran teoritis dan praktis secara berimbang. Penyelarasan program pembelajaran kejuruan ini mengacu langsung pada standar yang dirumuskan oleh Dinas Pendidikan Provinsi DKI Jakarta serta diselaraskan dengan kebutuhan kemitraan diler otomotif resmi, galangan kapal nasional, dan sistem logistik maritim terpadu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-md font-black text-white mb-2">Orientasi Kompetensi Masa Depan</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Melalui kalender akademik yang sistematis, kami menyusun rangkaian ujian sertifikasi kompetensi (UjiKom) berlisensi LSP-P1 BNSP, guna menjamin kompetensi lulusan kami terserap optimal di industri kerja global.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-md font-black text-white mb-2">Akselerasi Teaching Factory (TeFa)</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Pembagian waktu belajar dirancang fleksibel untuk menopang program Teaching Factory (TeFa), di mana siswa memperoleh pengalaman praktis komersial secara langsung, melatih aspek kemandirian dan etos kewirausahaan profesional.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-md font-black text-white mb-2">Efektif & Tanggap Kurikulum</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Kami mengadopsi pembelajaran modern berbasis platform pendidikan cerdas (koding & AI) untuk memperkaya kurikulum vokasi, melatih para siswa agar tanggap teknologi di era otomasi manufaktur terkini.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-slate-400">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Pendidikan Karakter Pancasila</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Link and Match Industri Maritim & Astra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Bursa Kerja Khusus (BKK) Aktif Mandiri</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal for KBM/Calendar Schedule */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
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
                    <p className="text-xs text-slate-400 font-medium">Tahun Ajaran 2026/2027 • SMK Tanjung Priok 1</p>
                  </div>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Stage */}
                <div className="flex-1 overflow-auto bg-slate-950 p-6 flex items-center justify-center min-h-[300px]">
                  <img
                    src={lightboxImage.url}
                    alt={lightboxImage.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex flex-wrap gap-4 items-center justify-between">
                  <p className="text-xs text-slate-400 font-medium">
                    Sistem Penyelarasan Kalender Akademik Resmi • Hubungi Tata Usaha Sekolah bila terdapat perbedaan data.
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href={lightboxImage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center space-x-2 transition cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Buka Tab Baru</span>
                    </a>
                    <button
                      onClick={() => setLightboxImage(null)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
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
    </div>
  );
};

export default AcademicCalendar;
