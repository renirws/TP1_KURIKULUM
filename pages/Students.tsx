
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle, AlertTriangle, Printer, Download, RefreshCw, User, Filter, CreditCard, ChevronRight, ChevronLeft, Info, HelpCircle, X, Lock, Key, LogOut, Eye, EyeOff, ShieldCheck, FolderOpen, ExternalLink, Calendar, Maximize2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
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

interface AuthorizedUser {
  id: string;
  password: string;
  nama: string;
}

interface ScheduleImage {
  originalUrl: string;
  directUrl: string;
  title: string;
}

const SCHEDULE_IMAGES: Record<'X' | 'XI' | 'XII', ScheduleImage[]> = {
  X: [
    {
      originalUrl: "https://drive.google.com/file/d/1uEM6mriBBxHkN6QsM7nNXWQ41pzJjKYJ/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1uEM6mriBBxHkN6QsM7nNXWQ41pzJjKYJ",
      title: "Halaman 1 • Jadwal KBM Kelas X"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1rnduZL9sr7u1EaV5zBEUL5ffgnHyJfhJ/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1rnduZL9sr7u1EaV5zBEUL5ffgnHyJfhJ",
      title: "Halaman 2 • Jadwal KBM Kelas X"
    },
    {
      originalUrl: "https://drive.google.com/file/d/12MxWLhNqXZA_DVndRfibwGSXvdyxF9K2/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/12MxWLhNqXZA_DVndRfibwGSXvdyxF9K2",
      title: "Halaman 3 • Jadwal KBM Kelas X"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1sv5PLyebS6Aalb4sssoU9Eu76S4KxBhI/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1sv5PLyebS6Aalb4sssoU9Eu76S4KxBhI",
      title: "Halaman 4 • Jadwal KBM Kelas X"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1zxZLVy6k8ZAtYTdCdM4N9JMAas-tLWhZ/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1zxZLVy6k8ZAtYTdCdM4N9JMAas-tLWhZ",
      title: "Halaman 5 • Jadwal KBM Kelas X"
    }
  ],
  XI: [
    {
      originalUrl: "https://drive.google.com/file/d/13VrgMS65Nm3iEXWi_dlN6rxjnn7rbTOU/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/13VrgMS65Nm3iEXWi_dlN6rxjnn7rbTOU",
      title: "Halaman 1 • Jadwal KBM Kelas XI"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1kIqAB_WWz0VUbOpxhowHIfNiW75CZBhg/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1kIqAB_WWz0VUbOpxhowHIfNiW75CZBhg",
      title: "Halaman 2 • Jadwal KBM Kelas XI"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1pKHe78yDLIsa_pAda7_iRDsNYn2_Zlwv/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1pKHe78yDLIsa_pAda7_iRDsNYn2_Zlwv",
      title: "Halaman 3 • Jadwal KBM Kelas XI"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1ddlnimSnF0HOjkt62CAwSflClMc1gslD/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1ddlnimSnF0HOjkt62CAwSflClMc1gslD",
      title: "Halaman 4 • Jadwal KBM Kelas XI"
    }
  ],
  XII: [
    {
      originalUrl: "https://drive.google.com/file/d/1iFA39x_n2R0H11n9h0kWK-ih1ia5jB6t/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1iFA39x_n2R0H11n9h0kWK-ih1ia5jB6t",
      title: "Halaman 1 • Jadwal KBM Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/18PnY9oahXQh6pJzCIg05tEYij9cdEOpd/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/18PnY9oahXQh6pJzCIg05tEYij9cdEOpd",
      title: "Halaman 2 • Jadwal KBM Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1K0ViEwC9ueV5wUoLuX9gvdrpUFQ4i320/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1K0ViEwC9ueV5wUoLuX9gvdrpUFQ4i320",
      title: "Halaman 3 • Jadwal KBM Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/13-MPs6TUA6Z8brUJI54EgcthLJLwkqCy/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/13-MPs6TUA6Z8brUJI54EgcthLJLwkqCy",
      title: "Halaman 4 • Jadwal KBM Kelas XII"
    }
  ]
};

const AUTHORIZED_USERS: AuthorizedUser[] = [
  { id: "Andri@Kval.com", password: "123456", nama: "H. Andri Susanto, ST" },
  { id: "ARUM@Kval.com", password: "123456", nama: "ARUM DHAMAYANTI, SE" },
  { id: "ELANG@Kval.com", password: "123456", nama: "ELANG WIDYA P. ST" },
  { id: "RENI@Kval.com", password: "123456", nama: "RENI WIDIASTUTI , M.Kom" },
  { id: "DANU@Kval.com", password: "123456", nama: "DANU WIBOWO S.Pd" },
  { id: "KHOLID@Kval.com", password: "123456", nama: "KHOLID AFIFUDIN S.Pd" },
  { id: "ANNIKE@Kval.com", password: "123456", nama: "ANNIKE K. ST" },
  { id: "ANGGI@Kval.com", password: "123456", nama: "ANGGI ARINI W. S.Kom" },
  { id: "KHAIRUDDIN@Kval.com", password: "123456", nama: "KHAIRUDDIN ARIF, ST" },
  { id: "SILVANY@Kval.com", password: "123456", nama: "SILVANY,S.Pd" },
  { id: "KUSNADI@Kval.com", password: "123456", nama: "KUSNADI ST" },
  { id: "DEWI@Kval.com", password: "123456", nama: "DEWI FITRIANI SE" },
  { id: "ISTI@Kval.com", password: "123456", nama: "ISTI NURFIDA, S.Pd" },
  { id: "Azrichan@Kval.com", password: "123456", nama: "Azrichan S.Si" },
  { id: "TRIANA@Kval.com", password: "123456", nama: "TRIANA SUSANA S.Pd" },
  { id: "CITRA@Kval.com", password: "123456", nama: "CITRA INDRAWATI, S.Pd" },
  { id: "HUSAIN@Kval.com", password: "123456", nama: "HUSAIN" },
  { id: "JOJI@Kval.com", password: "123456", nama: "JOJI SETIONO, S.Pd" },
  { id: "CHASIELDA@Kval.com", password: "123456", nama: "CHASIELDA ULUM AL DHIEN" },
  { id: "ERNI@Kval.com", password: "123456", nama: "N. ERNI KUSTINI, S.Pdi" },
  { id: "ABAS@Kval.com", password: "123456", nama: "ABAS BASUKI S.Pd" },
  { id: "DANIEL@Kval.com", password: "123456", nama: "DANIEL SAARANI S.Ds" },
  { id: "DIMAS@Kval.com", password: "123456", nama: "DIMAS ARIANTO SE" },
  { id: "ARIF@Kval.com", password: "123456", nama: "M. ARIF. S.Kom" },
  { id: "EVRI@Kval.com", password: "123456", nama: "EVRI SANDHA" },
  { id: "FEBY@Kval.com", password: "123456", nama: "FEBY PURNAMA S.Pd" },
  { id: "Tias@Kval.com", password: "123456", nama: "Tias Hadaning, S.Pd" },
  { id: "AgusB@Kval.com", password: "123456", nama: "Agus Bachtiar,S.Pd" },
  { id: "Danang@Kval.com", password: "123456", nama: "Danang Wisudhana,ST" }
];

const Students: React.FC = () => {
  // Auth state for protecting SPP table
  const [authUser, setAuthUser] = useState<{ id: string; nama: string } | null>(() => {
    try {
      const saved = localStorage.getItem('spp_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    const trimmedUsername = loginUsername.trim().toLowerCase();
    const trimmedPassword = loginPassword.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setLoginError('Harap isi Username dan Password terlebih dahulu.');
      return;
    }

    const matchedUser = AUTHORIZED_USERS.find(
      u => u.id.toLowerCase() === trimmedUsername && u.password === trimmedPassword
    );

    if (matchedUser) {
      const userData = { id: matchedUser.id, nama: matchedUser.nama };
      setAuthUser(userData);
      try {
        localStorage.setItem('spp_auth_user', JSON.stringify(userData));
      } catch (e) {
        console.error('Failed to save auth state', e);
      }
      setLoginUsername('');
      setLoginPassword('');
    } else {
      setLoginError('Username atau Password tidak valid! Silakan periksa kembali kredensial Anda dari daftar akses resmi sekolah.');
    }
  };

  const handleLogout = () => {
    setAuthUser(null);
    try {
      localStorage.removeItem('spp_auth_user');
    } catch (e) {
      console.error('Failed to clear auth state', e);
    }
  };
  const scheduleLinks = {
    x: "https://drive.google.com/drive/folders/1gzdpZi8M3eKUJii83yJ66My3Kpv70weh?usp=sharing",
    xi: "https://drive.google.com/drive/folders/1GnU-z4b1ewqco5PAqIp655z2xAbhE7dQ?usp=drive_link",
    xii: "https://drive.google.com/drive/folders/1vptz9TwsOxxjrxWmZRHl_ayNxw8VyK3X?usp=drive_link"
  };
  
  // States for GSheet dynamic search
  const [selectedClass, setSelectedClass] = useState<'XI' | 'XII'>('XII');
  
  // States for Schedule Slideshow
  const [activeScheduleIndex, setActiveScheduleIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<ScheduleImage | null>(null);

  // States for Lightbox Zoom & Pan
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const openLightbox = (image: ScheduleImage) => {
    setLightboxImage(image);
    handleResetZoom();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - panOffset.x, y: touch.clientY - panOffset.y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPanOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const [students, setStudents] = useState<StudentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'lunas' | 'tunggakan'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  const handleClassChange = (idx: number) => {
    setSlideDirection(idx > activeScheduleIndex ? 1 : -1);
    setActiveScheduleIndex(idx);
    setActiveImageIndex(0);
  };

  // Fetch GSheet data
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        // Determine sheet name based on selected class
        // Class XI uses 'KLS XI 26/27' and Class XII uses 'KLS XII 26/27'
        const sheetName = selectedClass === 'XI' ? 'KLS XI 26/27' : 'KLS XII 26/27';
        const encodedSheetName = encodeURIComponent(sheetName);
        
        // Fetch columns AA to AH which contain Class XI / XII administration SPP arrears
        const res = await fetch(`https://docs.google.com/spreadsheets/d/1ZhVJ7BkCIu9SxIk8QD1Xyjh6kr4MZ7Ps/gviz/tq?tqx=out:json&sheet=${encodedSheetName}&range=AA2:AH`);
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

  const handlePrintSchedule = (imageUrl: string, title: string) => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.zIndex = '-9999';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>
              @page {
                size: landscape;
                margin: 10mm;
              }
              body {
                margin: 0;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: sans-serif;
                background-color: #fff;
              }
              h2 {
                margin: 0 0 5px 0;
                color: #0f172a;
                font-size: 18px;
                text-align: center;
              }
              p {
                margin: 0 0 15px 0;
                color: #64748b;
                font-size: 12px;
                text-align: center;
              }
              img {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
              }
            </style>
          </head>
          <body>
            <h2>${title}</h2>
            <p>SMK Tanjung Priok 1 Jakarta Utara • Tahun Ajaran 2026/2027</p>
            <img src="${imageUrl}" referrerpolicy="no-referrer" />
            <script>
              const img = document.querySelector('img');
              const doPrint = () => {
                window.focus();
                window.print();
                setTimeout(() => {
                  if (window.frameElement) {
                    window.frameElement.remove();
                  }
                }, 1000);
              };
              if (img.complete) {
                doPrint();
              } else {
                img.onload = doPrint;
                img.onerror = doPrint;
              }
            </script>
          </body>
        </html>
      `);
      doc.close();
    }
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase mb-4 inline-block shadow-sm">
                Tahun Ajaran 2026/2027
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Jadwal Mata Pelajaran</h2>
              <p className="text-blue-100/80 font-medium text-base leading-relaxed max-w-2xl">
                Akses lembar cetak jadwal resmi sekolah Tahun Ajaran 2026/2027 sesuai tingkatan kelas Anda secara praktis melalui slide interaktif di bawah ini.
              </p>
            </div>
            
            {/* Custom Tab Selectors with Premium Glassmorphism & High Contrast */}
            <div className="flex bg-slate-900/50 p-1.5 rounded-[2rem] max-w-xl mx-auto border border-slate-700/30 mb-8 shadow-inner relative z-20">
              {['Kelas X', 'Kelas XI', 'Kelas XII'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => handleClassChange(idx)}
                  className={`flex-1 py-3 text-xs md:text-sm font-black rounded-2xl uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeScheduleIndex === idx
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Interactive Slideshow viewport for Schedule Images */}
            {(() => {
              const classKeys: ('X' | 'XI' | 'XII')[] = ['X', 'XI', 'XII'];
              const activeClassKey = classKeys[activeScheduleIndex];
              const activeImages = SCHEDULE_IMAGES[activeClassKey];
              const totalImages = activeImages.length;
              const currentImage = activeImages[activeImageIndex] || activeImages[0];
              
              return (
                <div className="relative max-w-3xl mx-auto">
                  {/* Outer description */}
                  <div className="text-center mb-5">
                    <p className="text-blue-200/90 text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2">
                      <Calendar className="w-4.5 h-4.5 text-blue-400" />
                      {currentImage.title}
                    </p>
                  </div>

                  {/* Main Image Stage Card */}
                  <div className="bg-white rounded-[2.5rem] p-4 md:p-6 border border-slate-100 shadow-2xl relative group overflow-hidden">
                    {/* Image Display Panel */}
                    <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center group/stage">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${activeClassKey}-${activeImageIndex}`}
                          src={currentImage.directUrl}
                          alt={currentImage.title}
                          referrerPolicy="no-referrer"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className="max-w-full max-h-full object-contain cursor-zoom-in transition-all duration-300 hover:scale-[1.01]"
                          onClick={() => openLightbox(currentImage)}
                        />
                      </AnimatePresence>

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />

                      {/* Quick Action Overlays inside image stage */}
                      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2 opacity-90 group-hover/stage:opacity-100 transition-opacity">
                        <button
                          onClick={() => openLightbox(currentImage)}
                          className="bg-slate-900/80 hover:bg-blue-600 text-white p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-md flex items-center space-x-1.5 text-xs font-bold cursor-pointer"
                          title="Perbesar Gambar"
                        >
                          <ZoomIn className="w-4 h-4" />
                          <span className="hidden sm:inline">Perbesar</span>
                        </button>

                        <a
                          href={currentImage.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-md flex items-center space-x-1.5 text-xs font-bold cursor-pointer"
                          title="Buka di Google Drive"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Buka Drive</span>
                        </a>
                      </div>

                      {/* Image Navigation Arrows Overlaid on Stage */}
                      <button
                        onClick={() => {
                          const prevIdx = (activeImageIndex - 1 + totalImages) % totalImages;
                          setActiveImageIndex(prevIdx);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-slate-900/60 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                        aria-label="Halaman Sebelumnya"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => {
                          const nextIdx = (activeImageIndex + 1) % totalImages;
                          setActiveImageIndex(nextIdx);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-slate-900/60 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                        aria-label="Halaman Berikutnya"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Floating Indicator of Current Slide */}
                      <div className="absolute top-4 left-4 z-20 bg-slate-900/70 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                        Halaman {activeImageIndex + 1} / {totalImages}
                      </div>
                    </div>

                    {/* Thumbnail Strip / Navigation Indicator */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                      {activeImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                            activeImageIndex === idx
                              ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                              : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                          }`}
                        >
                          Hal {idx + 1}
                        </button>
                      ))}
                    </div>

                    {/* Print / Save PDF Quick Actions Panel */}
                    <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Fitur Cetak Mandiri
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          Ingin mencetak halaman jadwal ini atau menyimpannya sebagai berkas PDF?
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                        <button
                          onClick={() => handlePrintSchedule(currentImage.directUrl, currentImage.title)}
                          className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm hover:shadow-md"
                          title="Cetak Jadwal Pelajaran"
                        >
                          <Printer className="w-4 h-4" />
                          <span>Cetak / PDF</span>
                        </button>
                        <a
                          href={currentImage.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm hover:shadow-md"
                          title="Unduh Berkas Gambar"
                        >
                          <Download className="w-4 h-4" />
                          <span>Unduh File</span>
                        </a>
                      </div>
                    </div>

                    {/* Drive Folder Direct Access Button below the slideshow */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Akses Dokumen Utama
                        </span>
                        <span className="text-sm font-black text-slate-800">
                          Folder Drive Jadwal KBM {activeClassKey} TA 2026/2027
                        </span>
                      </div>
                      
                      <a
                        href={activeScheduleIndex === 0 ? scheduleLinks.x : activeScheduleIndex === 1 ? scheduleLinks.xi : scheduleLinks.xii}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 hover:bg-blue-600 text-white font-black py-3.5 px-5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-xs uppercase tracking-wider cursor-pointer shadow-sm hover:shadow-md"
                      >
                        <FolderOpen className="w-4 h-4 text-blue-400" />
                        <span>Buka Folder Drive Utama</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>

                  {/* Dot Indicators for Outer Class Navigation */}
                  <div className="flex justify-center space-x-3 mt-8">
                    {['Kelas X', 'Kelas XI', 'Kelas XII'].map((cl, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleClassChange(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeScheduleIndex === idx
                            ? 'w-8 bg-blue-500'
                            : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                        }`}
                        title={`Pilih Jadwal ${cl}`}
                        aria-label={`Pilih Jadwal ${cl}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
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
            {!authUser ? (
              <div className="max-w-xl mx-auto py-4">
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/20">
                    <Lock className="w-8 h-8" />
                  </div>

                  <div className="text-center mb-8">
                    <span className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-700 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Proteksi Privasi Siswa</span>
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Akses Terbatas: Tabel Data SPP
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 font-medium leading-relaxed">
                      Sesuai prosedur keamanan data keuangan, tabel rincian SPP Kelas XI &amp; XII hanya dapat ditampilkan setelah verifikasi wewenang. Silakan masukkan Username &amp; Password akun resmi Anda.
                    </p>
                  </div>

                  {loginError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl mb-6 flex items-start space-x-3 text-xs md:text-sm">
                      <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block mb-0.5">Gagal Masuk</span>
                        <span>{loginError}</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                        Username / ID Akun (Email)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          value={loginUsername}
                          onChange={(e) => setLoginUsername(e.target.value)}
                          placeholder="Contoh: RENI@Kval.com / Andri@Kval.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                          <Key className="w-5 h-5" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Masukkan password akun Anda..."
                          className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-300 rounded-2xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm tracking-wide uppercase"
                    >
                      <span>Masuk &amp; Tampilkan Tabel Data</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-slate-200/80">
                    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-xs text-blue-900 space-y-1">
                      <div className="font-extrabold flex items-center space-x-1 text-blue-800">
                        <Info className="w-4 h-4 flex-shrink-0" />
                        <span>Informasi Kredensial Resmi:</span>
                      </div>
                      <p className="text-blue-700 leading-relaxed">
                        Gunakan username sesuai tabel autorisasi yang terdaftar di sekolah (misal: <strong className="font-mono">Andri@Kval.com</strong>, <strong className="font-mono">RENI@Kval.com</strong>, <strong className="font-mono">ARUM@Kval.com</strong>, <strong className="font-mono">KHOLID@Kval.com</strong>, dsb).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Welcome Banner when logged in */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 md:p-8 rounded-3xl mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-blue-800/40 relative overflow-hidden">
                  <div className="flex items-center space-x-5 relative z-10">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 text-blue-300 shadow-inner flex-shrink-0">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-300 px-3 py-0.5 rounded-full border border-emerald-500/30">
                          Akses Terverifikasi
                        </span>
                        <span className="text-xs text-blue-300 font-mono">({authUser.id})</span>
                      </div>
                      <h4 className="text-xl font-black text-white tracking-tight">
                        Selamat Datang, {authUser.nama}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">
                        Status Wewenang: Wali Kelas / Guru / Staf Keuangan — Akses Penuh Database SPP
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-2xl text-xs font-extrabold tracking-wider uppercase transition shadow-lg shadow-rose-600/20 cursor-pointer flex-shrink-0 self-stretch md:self-auto justify-center"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Keluar / Lock</span>
                  </button>
                </div>

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
              </>
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

        {/* Schedule Image Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setLightboxImage(null);
                handleResetZoom();
              }}
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
                  onClick={() => {
                    setLightboxImage(null);
                    handleResetZoom();
                  }}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image View Stage with Interactive Zoom and Panning */}
              <div 
                className="p-6 flex-1 flex items-center justify-center bg-slate-950 overflow-hidden relative select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {/* Floating Zoom Controls Overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-slate-900/90 border border-slate-700/60 rounded-full px-4 py-2 flex items-center space-x-3.5 shadow-xl backdrop-blur-md">
                  <button
                    onClick={() => {
                      setZoomScale(prev => Math.max(1, prev - 0.25));
                      if (zoomScale <= 1.25) setPanOffset({ x: 0, y: 0 });
                    }}
                    disabled={zoomScale <= 1}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4.5 h-4.5" />
                  </button>
                  <span className="text-white font-mono text-xs font-bold select-none min-w-[3rem] text-center">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    onClick={() => {
                      setZoomScale(prev => Math.min(3.5, prev + 0.25));
                    }}
                    disabled={zoomScale >= 3.5}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4.5 h-4.5" />
                  </button>
                  {zoomScale > 1 && (
                    <button
                      onClick={handleResetZoom}
                      className="p-1 text-blue-400 hover:text-blue-300 transition cursor-pointer border-l border-slate-700 pl-3 flex items-center justify-center"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                  }}
                >
                  <img
                    src={lightboxImage.directUrl}
                    alt={lightboxImage.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[65vh] object-contain rounded-lg select-none pointer-events-none"
                    style={{
                      transform: `scale(${zoomScale}) translate(${panOffset.x / zoomScale}px, ${panOffset.y / zoomScale}px)`,
                      transition: isDragging ? 'none' : 'transform 0.15s ease-out'
                    }}
                  />
                </div>

                {/* Left/Right controls within lightbox */}
                {(() => {
                  const classKeys: ('X' | 'XI' | 'XII')[] = ['X', 'XI', 'XII'];
                  const activeClassKey = classKeys[activeScheduleIndex];
                  const activeImages = SCHEDULE_IMAGES[activeClassKey];
                  const totalImages = activeImages.length;
                  
                  return (
                    <>
                      <button
                        onClick={() => {
                          const prevIdx = (activeImageIndex - 1 + totalImages) % totalImages;
                          setActiveImageIndex(prevIdx);
                          setLightboxImage(activeImages[prevIdx]);
                          handleResetZoom();
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800/80 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-20"
                        aria-label="Halaman Sebelumnya"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        onClick={() => {
                          const nextIdx = (activeImageIndex + 1) % totalImages;
                          setActiveImageIndex(nextIdx);
                          setLightboxImage(activeImages[nextIdx]);
                          handleResetZoom();
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-800/80 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-20"
                        aria-label="Halaman Berikutnya"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  );
                })()}
              </div>

              {/* Action bar */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider text-left">
                  Tips: Gunakan tombol zoom (+/-) di atas atau seret gambar untuk melihat detail lebih jelas.
                </span>
                
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => handlePrintSchedule(lightboxImage.directUrl, lightboxImage.title)}
                    className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak / PDF</span>
                  </button>

                  <a
                    href={lightboxImage.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka Resolusi Asli</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      setLightboxImage(null);
                      handleResetZoom();
                    }}
                    className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Selesai
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

export default Students;
