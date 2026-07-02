
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle, AlertTriangle, Printer, RefreshCw, User, Filter, CreditCard, ChevronRight, Info, HelpCircle, X } from 'lucide-react';
import { SEO } from '../components/SEO';

interface StudentData {
  no: number;
  nis: string;
  nama: string;
  sppBulan: number;
  sppRupiah: string;
  utsUasDu: string;
  ppdb: string;
  jumlah: string;
}

const Students: React.FC = () => {
  const scheduleLinks = {
    x: "https://drive.google.com/file/d/1HA0K05tP7fm4onhAEuRB-uPzUMbVWVVr/view?usp=drive_link",
    xi: "https://drive.google.com/file/d/1BGsX3s93xihuyhL-6AaW7PilVz7H6T6y/view?usp=drive_link",
    xii: "https://drive.google.com/file/d/1huNhbHXZ2t_0GwDG3Dc0q7PQLWb6250A/view?usp=drive_link"
  };
  
  // States for GSheet dynamic search
  const [selectedClass, setSelectedClass] = useState<'XI' | 'XII'>('XII');
  const [students, setStudents] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'lunas' | 'tunggakan'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  // Fetch GSheet data
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        // Determine sheet name based on selected class
        // Class XI uses 'KLS X 25/26' and Class XII uses 'KLS XI 25/26'
        const sheetName = selectedClass === 'XI' ? 'KLS X 25/26' : 'KLS XI 25/26';
        const encodedSheetName = encodeURIComponent(sheetName);
        
        // Fetch columns AC to AJ which contain Class XI / XII administration SPP arrears
        const res = await fetch(`https://docs.google.com/spreadsheets/d/1ZhVJ7BkCIu9SxIk8QD1Xyjh6kr4MZ7Ps/gviz/tq?tqx=out:json&sheet=${encodedSheetName}&range=AC2:AJ`);
        if (!res.ok) {
          throw new Error("Gagal mengambil data dari Google Sheets. Silakan periksa koneksi internet Anda.");
        }
        const text = await res.text();
        
        // Parse the gviz wrapper
        const jsonStart = text.indexOf('{');
        const jsonEnd = text.lastIndexOf('}') + 1;
        if (jsonStart === -1 || jsonEnd === -1) {
          throw new Error("Format data tidak valid.");
        }
        
        const jsonString = text.substring(jsonStart, jsonEnd);
        const data = JSON.parse(jsonString);
        const rows = data.table?.rows || [];
        
        const parsedStudents: StudentData[] = rows
          .map((row: any, idx: number) => {
            const cells = row.c;
            if (!cells || cells.length < 3) return null;
            
            const noVal = cells[0]?.v !== undefined ? Number(cells[0].v) : idx + 1;
            const nisVal = cells[1]?.v !== undefined && cells[1]?.v !== null ? String(cells[1].v).trim() : "-";
            const namaVal = cells[2]?.v !== undefined && cells[2]?.v !== null ? String(cells[2].v).trim() : "";
            
            if (!namaVal) return null;
            
            // Skip headers or totals
            const lowerName = namaVal.toLowerCase();
            if (
              lowerName === "nama" || 
              lowerName.includes("spp") || 
              lowerName.includes("daftar") || 
              lowerName.includes("tunggakan") || 
              lowerName.includes("tahun") ||
              lowerName.includes("jumlah") ||
              lowerName.includes("total") ||
              lowerName.includes("rekap")
            ) {
              return null;
            }
            
            const sppBulanVal = cells[3]?.v !== undefined && cells[3]?.v !== null ? Number(cells[3].v) : 0;
            const sppRupiahVal = cells[4]?.f || (cells[4]?.v !== undefined && cells[4]?.v !== null ? `Rp ${Number(cells[4].v).toLocaleString('id-ID')}` : "Rp -");
            const utsUasDuVal = cells[5]?.f || (cells[5]?.v !== undefined && cells[5]?.v !== null ? `Rp ${Number(cells[5].v).toLocaleString('id-ID')}` : "Rp -");
            const ppdbVal = cells[6]?.f || (cells[6]?.v !== undefined && cells[6]?.v !== null ? `Rp ${Number(cells[6].v).toLocaleString('id-ID')}` : "Rp -");
            const jumlahVal = cells[7]?.f || (cells[7]?.v !== undefined && cells[7]?.v !== null ? `Rp ${Number(cells[7].v).toLocaleString('id-ID')}` : "Rp -");
            
            return {
              no: noVal,
              nis: nisVal,
              nama: namaVal,
              sppBulan: sppBulanVal,
              sppRupiah: sppRupiahVal.trim(),
              utsUasDu: utsUasDuVal.trim(),
              ppdb: ppdbVal.trim(),
              jumlah: jumlahVal.trim()
            };
          })
          .filter((item: any): item is StudentData => item !== null);
          
        setStudents(parsedStudents);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching sheet:", err);
        setError(err.message || `Gagal memuat data administrasi Kelas ${selectedClass}.`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStudentData();
  }, [refreshTrigger, selectedClass]);

  // Helper to check if a student has cleared all debts
  const isLunas = (student: StudentData): boolean => {
    const totalClean = student.jumlah.replace(/[^0-9]/g, '');
    const totalAmount = parseInt(totalClean || '0', 10);
    return totalAmount === 0 || student.jumlah.includes('Rp -') || student.jumlah === '-';
  };

  // Filter students based on search query and status tab
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
      student.nis.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'lunas' ? isLunas(student) : !isLunas(student);
      
    return matchesSearch && matchesStatus;
  });

  // Stats Counters
  const totalCount = students.length;
  const lunasCount = students.filter(isLunas).length;
  const tunggakanCount = totalCount - lunasCount;

  // Print function
  const handlePrint = (student: StudentData) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Popup blocker aktif. Harap izinkan popup untuk mencetak slip tagihan.");
      return;
    }
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Slip Tagihan Administrasi - ${student.nama}</title>
          <style>
            body { font-family: 'Inter', sans-serif; padding: 40px; color: #1e293b; line-height: 1.5; }
            .header { text-align: center; border-bottom: 3px double #0f172a; padding-bottom: 20px; margin-bottom: 30px; }
            .school-name { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; letter-spacing: 1px; }
            .school-sub { font-size: 12px; color: #64748b; margin: 5px 0 0 0; font-weight: 500; }
            .title { text-align: center; font-size: 16px; font-weight: 700; text-transform: uppercase; margin-bottom: 30px; letter-spacing: 0.5px; }
            .meta-table { width: 100%; margin-bottom: 30px; border-collapse: collapse; }
            .meta-table td { padding: 6px 0; font-size: 14px; }
            .meta-label { width: 150px; color: #475569; font-weight: 500; }
            .meta-value { font-weight: 700; color: #0f172a; }
            .bill-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .bill-table th { background: #f1f5f9; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #475569; border-bottom: 2px solid #cbd5e1; }
            .bill-table td { padding: 14px 16px; font-size: 14px; border-bottom: 1px solid #e2e8f0; color: #334155; }
            .bill-table tr:last-child td { border-bottom: none; }
            .total-row { font-weight: 800; background: #f8fafc; }
            .total-row td { border-top: 2px solid #0f172a; font-size: 15px; color: #0f172a; }
            .status-badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; }
            .status-lunas { background: #d1fae5; color: #065f46; }
            .status-tunggakan { background: #fee2e2; color: #991b1b; }
            .footer-note { font-size: 11px; color: #64748b; text-align: center; margin-top: 50px; border-top: 1px dashed #cbd5e1; padding-top: 20px; }
            .signature-section { margin-top: 40px; display: flex; justify-content: space-between; }
            .sig-box { text-align: center; width: 200px; font-size: 13px; }
            .sig-space { height: 70px; }
            .sig-name { font-weight: 700; text-decoration: underline; }
            @media print {
              body { padding: 20px; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="school-name">SMK TANJUNG PRIOK 1</div>
            <div class="school-sub">YAYASAN DIKMENTI • TERAKREDITASI A</div>
            <div class="school-sub">Jl. Mangga No.3, Lagoa, Koja, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14270</div>
          </div>
          
          <div class="title">Rincian Administrasi Keuangan Mandiri Siswa</div>
          
          <table class="meta-table">
            <tr>
              <td class="meta-label">Nama Siswa</td>
              <td class="meta-value">: ${student.nama}</td>
              <td class="meta-label" style="text-align: right; width: 100px;">Tanggal Cetak</td>
              <td class="meta-value" style="text-align: right; width: 150px;">: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
            </tr>
            <tr>
              <td class="meta-label">NIS Siswa</td>
              <td class="meta-value">: ${student.nis}</td>
              <td class="meta-label" style="text-align: right;">Status Akhir</td>
              <td style="text-align: right;">
                : <span class="status-badge ${isLunas(student) ? 'status-lunas' : 'status-tunggakan'}">
                  ${isLunas(student) ? 'LUNAS' : 'ADA TUNGGAKAN'}
                </span>
              </td>
            </tr>
            <tr>
              <td class="meta-label">Jenjang / Kelas</td>
              <td class="meta-value">: Kelas ${selectedClass}</td>
              <td></td>
              <td></td>
            </tr>
          </table>
          
          <table class="bill-table">
            <thead>
              <tr>
                <th style="width: 50px;">No</th>
                <th>Deskripsi Kewajiban Administrasi</th>
                <th style="text-align: right; width: 200px;">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tunggakan SPP s.d Juni 2026 (${student.sppBulan} Bulan)</td>
                <td style="text-align: right; font-weight: 600;">${student.sppRupiah}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tunggakan UTS, UAS, DU DLL</td>
                <td style="text-align: right; font-weight: 600;">${student.utsUasDu}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tunggakan XI MK PPDB / Dana Rehab</td>
                <td style="text-align: right; font-weight: 600;">${student.ppdb}</td>
              </tr>
              <tr class="total-row">
                <td></td>
                <td>TOTAL TUNGGAKAN KEWAJIBAN</td>
                <td style="text-align: right;">${student.jumlah}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="font-size: 12px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <strong>Penting:</strong> Slip ini adalah laporan kontrol mandiri yang dihasilkan secara real-time dari database administrasi SMK Tanjung Priok 1. Jika terdapat ketidaksesuaian data, silakan lakukan konfirmasi dengan menyertakan bukti pembayaran (kuitansi) sah ke bagian Keuangan Sekolah (Tata Usaha).
          </div>

          <div class="signature-section">
            <div class="sig-box">
              <div>Siswa / Orang Tua,</div>
              <div class="sig-space"></div>
              <div style="font-weight: 700;">( .................................... )</div>
            </div>
            <div class="sig-box">
              <div>Jakarta, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              <div>Petugas Tata Usaha / Keuangan,</div>
              <div class="sig-space"></div>
              <div class="sig-name">Operator Keuangan Sekolah</div>
            </div>
          </div>
          
          <div class="footer-note">
            SMK Tanjung Priok 1 Jakarta • Sistem Layanan Keuangan Mandiri Real-time
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <SEO 
        title="Cek SPP Online & Portal Siswa SMK TANJUNG PRIOK 1 | Jadwal Pelajaran"
        description="Portal Siswa SMK Tanjung Priok 1 Jakarta Utara. Cek tagihan SPP online Kelas XI dan XII secara mandiri dan real-time dari database Google Sheets, unduh jadwal pelajaran KOSP terbaru, dan akses administrasi akademik."
        keywords="Cek SPP Online SMK Tanjung Priok 1, Portal Siswa SMK Tanjung Priok 1, Pembayaran SPP SMK, Jadwal Pelajaran SMK Tanjung Priok 1, SPP Kelas XI XII, SMK Jakarta Utara"
        canonical="https://tp1kurikulum.my.id/siswa"
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Portal Siswa</h1>
        <div className="w-20 h-1.5 bg-[#3b82f6] mx-auto mt-4 mb-4"></div>
        <p className="text-gray-500 text-lg">Akses cepat jadwal pelajaran dan administrasi terpadu.</p>
      </div>

      {/* Jadwal Pelajaran Section */}
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

      {/* NEW INTERACTIVE SPP ENGINE FOR CLASS XI & XII */}
      <div id="cek-spp" className="mb-20">
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-[#1e3a8a] to-blue-900 p-8 md:p-12 text-white relative">
            <div className="absolute top-6 right-8 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/30">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute"></span>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-200">Database Live & Valid</span>
            </div>
            
            <div className="max-w-3xl">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block">Fitur Pencarian Mandiri</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Cek Keuangan & SPP Real-time Kelas XI & XII</h2>
              <p className="text-slate-300 font-medium text-base leading-relaxed">
                Asisten pencarian terpadu siswa Kelas XI & XII. Silakan pilih kelas Anda di bawah, kemudian ketik Nama atau NIS Anda untuk memverifikasi detail tunggakan SPP, UTS, UAS, PPDB secara instan dan 100% valid bersumber langsung dari Google Sheet sekolah.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Class Selection Toggle */}
            <div className="flex bg-slate-100 p-1.5 rounded-3xl max-w-md mx-auto border border-slate-200 mb-10 shadow-inner">
              <button
                onClick={() => {
                  setSelectedClass('XI');
                  setSearchQuery('');
                }}
                className={`flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all cursor-pointer ${
                  selectedClass === 'XI'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>KELAS XI</span>
              </button>
              <button
                onClick={() => {
                  setSelectedClass('XII');
                  setSearchQuery('');
                }}
                className={`flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all cursor-pointer ${
                  selectedClass === 'XII'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>KELAS XII</span>
              </button>
            </div>

            {/* Stats Summary Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-700">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Siswa Terdata</div>
                  <div className="text-2xl font-black text-slate-800">{loading ? "..." : totalCount} Siswa</div>
                </div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-3xl flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Lunas Administrasi</div>
                  <div className="text-2xl font-black text-emerald-800">{loading ? "..." : lunasCount} Siswa</div>
                </div>
              </div>

              <div className="bg-amber-50/60 border border-amber-100 p-6 rounded-3xl flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-500 uppercase tracking-wider">Ada Kewajiban/Tunggakan</div>
                  <div className="text-2xl font-black text-amber-800">{loading ? "..." : tunggakanCount} Siswa</div>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-100">
              {/* Search Box */}
              <div className="relative w-full lg:max-w-md">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik Nama Lengkap atau NIS..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 inset-y-0 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status Filter Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-2xl w-full lg:w-auto">
                <button 
                  onClick={() => setStatusFilter('all')}
                  className={`flex-1 lg:flex-none px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${statusFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Semua
                </button>
                <button 
                  onClick={() => setStatusFilter('lunas')}
                  className={`flex-1 lg:flex-none px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${statusFilter === 'lunas' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Lunas
                </button>
                <button 
                  onClick={() => setStatusFilter('tunggakan')}
                  className={`flex-1 lg:flex-none px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${statusFilter === 'tunggakan' ? 'bg-white text-amber-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Belum Lunas
                </button>
              </div>

              {/* Refresh Button */}
              <button 
                onClick={() => setRefreshTrigger(prev => prev + 1)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 hover:bg-blue-100/70 px-4 py-2.5 rounded-2xl transition cursor-pointer self-start lg:self-auto"
                title="Refresh Data dari Google Sheets"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh Data</span>
              </button>
            </div>

            {/* Live Data List Area */}
            {loading ? (
              <div className="py-16 flex flex-col items-center justify-center space-y-4">
                <RefreshCw className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-slate-500 font-medium">Sedang menyinkronkan data dengan Google Sheets resmi...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center max-w-lg mx-auto">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-red-800 mb-2">Sinkronisasi Gagal</h4>
                <p className="text-red-600 text-sm mb-6 leading-relaxed">{error}</p>
                <button 
                  onClick={() => setRefreshTrigger(prev => prev + 1)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition"
                >
                  Coba Lagi
                </button>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h4 className="text-slate-700 font-bold text-lg">Siswa Tidak Ditemukan</h4>
                <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto leading-relaxed">
                  Tidak ada data siswa yang cocok dengan pencarian "{searchQuery}" atau filter status yang dipilih. Pastikan ejaan nama atau NIS sudah benar.
                </p>
              </div>
            ) : (
              <div>
                {/* Desktop View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 text-xs font-black uppercase tracking-wider">
                        <th className="py-4 px-4 w-12">No</th>
                        <th className="py-4 px-4">Nama Lengkap</th>
                        <th className="py-4 px-4">NIS</th>
                        <th className="py-4 px-4">Tunggakan SPP</th>
                        <th className="py-4 px-4">Total Kewajiban</th>
                        <th className="py-4 px-4">Status</th>
                        <th className="py-4 px-4 text-right w-24">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                      {filteredStudents.map((student, idx) => {
                        const lunas = isLunas(student);
                        return (
                          <tr key={idx} className="hover:bg-slate-50/50 transition">
                            <td className="py-4 px-4 text-slate-400 font-bold">{student.no}</td>
                            <td className="py-4 px-4 font-bold text-slate-800">{student.nama}</td>
                            <td className="py-4 px-4 text-slate-500 font-mono font-medium">{student.nis}</td>
                            <td className="py-4 px-4">
                              <span className="font-semibold text-slate-700">
                                {student.sppBulan > 0 ? `${student.sppBulan} bln (${student.sppRupiah})` : "-"}
                              </span>
                            </td>
                            <td className="py-4 px-4 font-black text-slate-900">{student.jumlah}</td>
                            <td className="py-4 px-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold leading-none ${lunas ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                {lunas ? 'Lunas' : 'Belum Lunas'}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <button 
                                onClick={() => setSelectedStudent(student)}
                                className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-bold transition cursor-pointer"
                              >
                                <span>Cek</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                  {filteredStudents.map((student, idx) => {
                    const lunas = isLunas(student);
                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="text-slate-400 font-bold text-xs block mb-1">NO. {student.no}</span>
                            <h4 className="font-bold text-slate-800 leading-tight">{student.nama}</h4>
                            <span className="text-slate-500 font-mono text-xs block mt-0.5">NIS: {student.nis}</span>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider leading-none ${lunas ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {lunas ? 'Lunas' : 'Belum Lunas'}
                          </span>
                        </div>
                        
                        <div className="border-t border-slate-200/50 pt-3 mt-1 flex justify-between items-center">
                          <div>
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Total Kewajiban</span>
                            <span className="font-black text-slate-900 text-base">{student.jumlah}</span>
                          </div>
                          <button 
                            onClick={() => setSelectedStudent(student)}
                            className="bg-white border border-slate-200 text-blue-600 font-bold text-xs px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-50 transition cursor-pointer"
                          >
                            Rincian
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Counter Footer */}
                <div className="mt-6 text-xs text-slate-400 font-bold text-right">
                  Menampilkan {filteredStudents.length} dari {students.length} total asesi siswa.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#0f172a] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black mb-6">Panduan Akses & Cek SPP</h3>
            <ul className="space-y-4 text-blue-100/80 font-medium">
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">1</span>
                Ketik nama lengkap atau NIS Anda pada kotak pencarian live di atas.
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">2</span>
                Klik tombol "Cek" atau "Rincian" untuk membuka rincian kewajiban pembayaran secara detail.
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1 flex-shrink-0">3</span>
                Gunakan tombol "Cetak Slip Tagihan" untuk mengunduh atau mencetak slip laporan tagihan mandiri asesi.
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Butuh Bantuan?
            </h4>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
              Jika data tidak sesuai dengan kuitansi pembayaran yang Anda miliki, silakan hubungi operator keuangan Tata Usaha sekolah dengan membawa kuitansi sah.
            </p>
            <div className="flex items-center text-blue-400 font-bold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (021) 4301192
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED STUDENT BILL MODAL */}
      <AnimatePresence>
        {selectedStudent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-lg w-full shadow-2xl border border-slate-100"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-slate-900 to-[#1e3a8a] text-white p-6 relative">
                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-3 mb-1">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Kartu Kontrol Keuangan Siswa</span>
                </div>
                <h3 className="text-xl font-black leading-tight mt-1">{selectedStudent.nama}</h3>
                <p className="text-xs text-slate-300 font-mono mt-1">NIS: {selectedStudent.nis} • Kelas {selectedClass}</p>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Kategori Kewajiban</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${isLunas(selectedStudent) ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                      {isLunas(selectedStudent) ? 'LUNAS' : 'ADA TUNGGAKAN'}
                    </span>
                  </div>

                  <div className="space-y-4.5">
                    {/* Item 1: SPP */}
                    <div className="flex justify-between items-start pb-3 border-b border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800 text-sm block">SPP s.d Juni 2026</span>
                        <span className="text-xs text-slate-400 font-medium">Tertunggak {selectedStudent.sppBulan} Bulan</span>
                      </div>
                      <span className="font-mono font-bold text-slate-700 text-sm">{selectedStudent.sppRupiah}</span>
                    </div>

                    {/* Item 2: UTS / UAS */}
                    <div className="flex justify-between items-start pb-3 border-b border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800 text-sm block">UTS, UAS, DU DLL</span>
                        <span className="text-xs text-slate-400 font-medium">Ujian & Daftar Ulang</span>
                      </div>
                      <span className="font-mono font-bold text-slate-700 text-sm">{selectedStudent.utsUasDu}</span>
                    </div>

                    {/* Item 3: PPDB */}
                    <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800 text-sm block">XI MK PPDB / Dana Rehab</span>
                        <span className="text-xs text-slate-400 font-medium">Gedung & Pembangunan</span>
                      </div>
                      <span className="font-mono font-bold text-slate-700 text-sm">{selectedStudent.ppdb}</span>
                    </div>

                    {/* Item Total */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-black text-slate-900 text-base uppercase">Total Kewajiban</span>
                      <span className="font-mono font-black text-rose-600 text-xl">{selectedStudent.jumlah}</span>
                    </div>
                  </div>
                </div>

                {/* Notice Alert */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Data di atas diperbarui secara berkala langsung dari sistem sekolah. Silakan cetak slip di bawah untuk bukti verifikasi mandiri.
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handlePrint(selectedStudent)}
                    className="flex items-center justify-center space-x-2 bg-[#0f172a] hover:bg-slate-800 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest transition shadow cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak Slip</span>
                  </button>
                  <button 
                    onClick={() => setSelectedStudent(null)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-4 rounded-2xl text-xs uppercase tracking-widest transition cursor-pointer"
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
