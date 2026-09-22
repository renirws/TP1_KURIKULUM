
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Download, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  FolderOpen, 
  ExternalLink, 
  Calendar, 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Briefcase, 
  ChevronDown, 
  Clock, 
  BookOpen, 
  Phone, 
  MapPin, 
  FileText,
  CheckCircle2,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface ScheduleImage {
  originalUrl: string;
  directUrl: string;
  title: string;
}

const SCHEDULE_IMAGES: Record<'X' | 'XI' | 'XII' | 'TKA' | 'PRAKERIN', ScheduleImage[]> = {
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
  ],
  TKA: [
    {
      originalUrl: "https://drive.google.com/file/d/1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od=s0",
      title: "Surat & Jadwal Utama Simulasi Ke-1 TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/13gmYelKKtinBgqzzfXIQPV5WKV5OXJP8/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/13gmYelKKtinBgqzzfXIQPV5WKV5OXJP8=s0",
      title: "Pembagian Sesi 1 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1FVe3uTAV8apy4jA5zzpewQbwDKtEa9B6/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1FVe3uTAV8apy4jA5zzpewQbwDKtEa9B6=s0",
      title: "Pembagian Sesi 2 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1EFKBqFtDx3XTyxz4uV1DG-_ZMFeR_90C/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1EFKBqFtDx3XTyxz4uV1DG-_ZMFeR_90C=s0",
      title: "Pembagian Sesi 3 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1L3XIXBciuCSUvMloX2lGZ41RNMDy97nO/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1L3XIXBciuCSUvMloX2lGZ41RNMDy97nO=s0",
      title: "Pembagian Sesi 4 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1NFHzpIPkkjlH3rRAZk-n_FR5MRW00J1A/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1NFHzpIPkkjlH3rRAZk-n_FR5MRW00J1A=s0",
      title: "Pembagian Sesi 5 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1DE1dHikvJbUcLo96eQVWN-cREBQ6n8vA/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1DE1dHikvJbUcLo96eQVWN-cREBQ6n8vA=s0",
      title: "Pembagian Sesi 6 • TKA Kelas XII"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1LzOZClaMIkkBt7Ar9AHjtC3VYIzgK0ZM/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1LzOZClaMIkkBt7Ar9AHjtC3VYIzgK0ZM=s0",
      title: "Pembagian Sesi 7 • TKA Kelas XII"
    }
  ],
  PRAKERIN: [
    {
      originalUrl: "https://drive.google.com/file/d/1E7NrOV32Yn8-D_TX8Xi5Ts8MSOaY3hNH/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1E7NrOV32Yn8-D_TX8Xi5Ts8MSOaY3hNH=s0",
      title: "Halaman 1 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1QLM-W5_4liuSCaYB6BPvMiG36qpaOTNE/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1QLM-W5_4liuSCaYB6BPvMiG36qpaOTNE=s0",
      title: "Halaman 2 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1XUYPwfIWO1tQSu_gtDUnMK0MTQeYhXMV/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1XUYPwfIWO1tQSu_gtDUnMK0MTQeYhXMV=s0",
      title: "Halaman 3 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1fY75EQ2XjzS8UlMTHYM66YLyVbwPUjMk/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1fY75EQ2XjzS8UlMTHYM66YLyVbwPUjMk=s0",
      title: "Halaman 4 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1G5WIU1nbGBulWl4Zp62dtQqCzCZeh5s5/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1G5WIU1nbGBulWl4Zp62dtQqCzCZeh5s5=s0",
      title: "Halaman 5 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1DJ2wG3xaMl2JA_1cKVqmKfLqiDZQjJj4/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1DJ2wG3xaMl2JA_1cKVqmKfLqiDZQjJj4=s0",
      title: "Halaman 6 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1f2TYG46zS4YYHGG78PaJ64wpNwMi74pg/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1f2TYG46zS4YYHGG78PaJ64wpNwMi74pg=s0",
      title: "Halaman 7 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1pCZrO5oCjRM6nEtIbaZtuRmYzzw3adq4/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1pCZrO5oCjRM6nEtIbaZtuRmYzzw3adq4=s0",
      title: "Halaman 8 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1elEwl7YxqDIUsDHyyiNXQAoEqaxPE9yu/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1elEwl7YxqDIUsDHyyiNXQAoEqaxPE9yu=s0",
      title: "Halaman 9 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1CEW757wrAyWybLGNnb2ynvAOdUuw9a1M/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1CEW757wrAyWybLGNnb2ynvAOdUuw9a1M=s0",
      title: "Halaman 10 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1UqctThHNwPtKJySCOStfTJDaHTXcZ8PU/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1UqctThHNwPtKJySCOStfTJDaHTXcZ8PU=s0",
      title: "Halaman 11 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1z4zyzni50_G3TBvKEsLY_3GZdGEGAa7r/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1z4zyzni50_G3TBvKEsLY_3GZdGEGAa7r=s0",
      title: "Halaman 12 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1_g2Sk8zXT2aAUmgL1YMxW9s9XkKasKKb/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1_g2Sk8zXT2aAUmgL1YMxW9s9XkKasKKb=s0",
      title: "Halaman 13 • Pembimbing Prakerin"
    },
    {
      originalUrl: "https://drive.google.com/file/d/1nRloN5unPLv5Xmk9RR8sCDXG-hY3bFCD/view?usp=drive_link",
      directUrl: "https://lh3.googleusercontent.com/d/1nRloN5unPLv5Xmk9RR8sCDXG-hY3bFCD=s0",
      title: "Halaman 14 • Pembimbing Prakerin"
    }
  ]
};



const Students: React.FC = () => {
  const scheduleLinks = {
    x: "https://drive.google.com/drive/folders/1gzdpZi8M3eKUJii83yJ66My3Kpv70weh?usp=sharing",
    xi: "https://drive.google.com/drive/folders/1GnU-z4b1ewqco5PAqIp655z2xAbhE7dQ?usp=drive_link",
    xii: "https://drive.google.com/drive/folders/1vptz9TwsOxxjrxWmZRHl_ayNxw8VyK3X?usp=drive_link"
  };
  
  
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


  // State for Bimbingan Prakerin Slideshow
  const [prakerinSlideIndex, setPrakerinSlideIndex] = useState<number>(0);

  const handleClassChange = (idx: number) => {
    setSlideDirection(idx > activeScheduleIndex ? 1 : -1);
    setActiveScheduleIndex(idx);
    setActiveImageIndex(0);
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
        title="Portal Siswa SMK TANJUNG PRIOK 1 | Jadwal Pelajaran, Simulasi TKA & Prakerin"
        description="Portal Siswa SMK Tanjung Priok 1 Jakarta Utara. Unduh dan pantau jadwal pelajaran KBM Kelas X, XI, XII, jadwal simulasi TKA, serta akses informasi pembimbingan & lokasi Prakerin tahun ajaran 2026/2027."
        keywords="Portal Siswa SMK Tanjung Priok 1, Jadwal Pelajaran SMK Tanjung Priok 1, Jadwal KBM SMK, Simulasi TKA SMK Tanjung Priok 1, Prakerin SMK Tanjung Priok 1, PKL SMK Tanjung Priok 1, SMK Jakarta Utara"
        canonical="https://tp1kurikulum.my.id/siswa"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Portal Siswa SMK Tanjung Priok 1 | Jadwal KBM, Simulasi TKA & Prakerin",
          "description": "Layanan portal akademik siswa resmi SMK Tanjung Priok 1 Jakarta Utara. Dilengkapi jadwal pelajaran KBM interaktif, simulasi TKA Kelas XII, serta informasi direktori pembimbingan dan lokasi Prakerin.",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Kurikulum SMK Tanjung Priok 1",
            "url": "https://tp1kurikulum.my.id/"
          },
          "provider": {
            "@type": "EducationalOrganization",
            "name": "SMK Tanjung Priok 1 Jakarta Utara",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Mangga No.3, Lagoa, Koja",
              "addressLocality": "Jakarta Utara",
              "addressRegion": "DKI Jakarta",
              "postalCode": "14270",
              "addressCountry": "ID"
            }
          }
        }}
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Portal Siswa</h1>
        <div className="w-20 h-1.5 bg-[#3b82f6] mx-auto mt-4 mb-4"></div>
        <p className="text-gray-500 text-lg">Akses cepat jadwal pelajaran, simulasi TKA, dan bimbingan Prakerin.</p>
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
            <div className="flex bg-slate-900/50 p-1.5 rounded-[2rem] max-w-2xl mx-auto border border-slate-700/30 mb-8 shadow-inner relative z-20 gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap">
              {['Kelas X', 'Kelas XI', 'Kelas XII', 'Simulasi TKA XII'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => handleClassChange(idx)}
                  className={`flex-1 py-3 px-2 text-xs md:text-sm font-black rounded-2xl uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeScheduleIndex === idx
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105 z-10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Interactive Slideshow viewport for Schedule Images */}
            {(() => {
              const classKeys: ('X' | 'XI' | 'XII' | 'TKA')[] = ['X', 'XI', 'XII', 'TKA'];
              const activeClassKey = classKeys[activeScheduleIndex] || 'X';
              const activeImages = SCHEDULE_IMAGES[activeClassKey] || SCHEDULE_IMAGES['X'];
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
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={(_, info) => {
                            if (info.offset.x < -40) {
                              const nextIdx = (activeImageIndex + 1) % totalImages;
                              setActiveImageIndex(nextIdx);
                            } else if (info.offset.x > 40) {
                              const prevIdx = (activeImageIndex - 1 + totalImages) % totalImages;
                              setActiveImageIndex(prevIdx);
                            }
                          }}
                          className="max-w-full max-h-full object-contain cursor-zoom-in transition-all duration-300 hover:scale-[1.01] active:cursor-grabbing"
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

      {/* SECTION: PORTAL BIMBINGAN & LOKASI PRAKERIN */}
      <div id="prakerin-bimbingan" className="mb-16">
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-slate-800">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform">
            <Briefcase className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center md:text-left mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase mb-4 inline-block shadow-sm">
                Dokumen Resmi • TA 2026/2027
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Bimbingan &amp; Lokasi Prakerin</h2>
              <p className="text-slate-300 font-medium text-base leading-relaxed max-w-2xl">
                Daftar resmi pembimbing, penempatan instansi/perusahaan (DUDI), dan asesi Prakerin SMK Tanjung Priok 1 Tahun Ajaran 2026/2027. Akses seluruh lembar (14 Halaman) langsung melalui penampil interaktif di bawah.
              </p>
            </div>

            {/* Embedded Slideshow Viewport for Prakerin Images */}
            {(() => {
              const activeImages = SCHEDULE_IMAGES['PRAKERIN'];
              const totalImages = activeImages.length;
              const currentImage = activeImages[prakerinSlideIndex] || activeImages[0];
              
              return (
                <div className="bg-white rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-slate-100 shadow-2xl relative overflow-hidden">
                  <div className="relative max-w-3xl mx-auto">
                    {/* Top Toolbar: Dropdown Jump Selector & Prev/Next for Mobile & Desktop */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
                      <div className="flex items-center space-x-2 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="relative flex-1">
                          <select
                            value={prakerinSlideIndex}
                            onChange={(e) => setPrakerinSlideIndex(Number(e.target.value))}
                            className="w-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-extrabold py-2.5 pl-3 pr-8 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer transition appearance-none"
                            aria-label="Pilih Halaman Pembimbing Prakerin"
                          >
                            {activeImages.map((img, idx) => (
                              <option key={idx} value={idx}>
                                {img.title} (Halaman {idx + 1} dari {totalImages})
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Quick Pagination Counter and Arrows */}
                      <div className="flex items-center justify-between sm:justify-end space-x-2">
                        <span className="text-[11px] font-black text-slate-500 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 uppercase tracking-wider">
                          Hal {prakerinSlideIndex + 1} / {totalImages}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            onClick={() => {
                              const prevIdx = (prakerinSlideIndex - 1 + totalImages) % totalImages;
                              setPrakerinSlideIndex(prevIdx);
                            }}
                            className="w-9 h-9 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 rounded-xl flex items-center justify-center transition cursor-pointer font-bold border border-slate-200"
                            title="Halaman Sebelumnya"
                            aria-label="Halaman Sebelumnya"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              const nextIdx = (prakerinSlideIndex + 1) % totalImages;
                              setPrakerinSlideIndex(nextIdx);
                            }}
                            className="w-9 h-9 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 rounded-xl flex items-center justify-center transition cursor-pointer font-bold border border-slate-200"
                            title="Halaman Berikutnya"
                            aria-label="Halaman Berikutnya"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Main Image Stage Card */}
                    <div className="bg-[#0f172a] rounded-[2rem] p-2 md:p-4 border border-slate-800 shadow-xl relative group/stage overflow-hidden">
                      {/* Image Display Panel */}
                      <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`prakerin-${prakerinSlideIndex}`}
                            src={currentImage.directUrl}
                            alt={currentImage.title}
                            referrerPolicy="no-referrer"
                            className="max-w-full max-h-full object-contain cursor-zoom-in rounded-lg select-none"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => openLightbox(currentImage)}
                          />
                        </AnimatePresence>

                        {/* Zoom overlay button */}
                        <button
                          onClick={() => openLightbox(currentImage)}
                          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/80 hover:bg-emerald-600 text-white p-2.5 rounded-xl border border-white/10 backdrop-blur-md cursor-pointer transition shadow hover:scale-105 z-10 flex items-center space-x-1 text-xs font-bold"
                          title="Perbesar / Zoom Layar Penuh"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Perbesar</span>
                        </button>

                        {/* Image Navigation Arrows Overlaid on Stage */}
                        <button
                          onClick={() => {
                            const prevIdx = (prakerinSlideIndex - 1 + totalImages) % totalImages;
                            setPrakerinSlideIndex(prevIdx);
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-slate-900/70 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all opacity-90 sm:opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                          aria-label="Halaman Sebelumnya"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() => {
                            const nextIdx = (prakerinSlideIndex + 1) % totalImages;
                            setPrakerinSlideIndex(nextIdx);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-slate-900/70 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all opacity-90 sm:opacity-0 group-hover/stage:opacity-100 backdrop-blur-md cursor-pointer shadow-lg hover:scale-105"
                          aria-label="Halaman Berikutnya"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Floating Indicator of Current Slide */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-slate-900/80 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                          Halaman {prakerinSlideIndex + 1} / {totalImages}
                        </div>
                      </div>

                      {/* Touch-Friendly Horizontal Scrub Bar */}
                      <div className="mt-3 sm:mt-4 overflow-x-auto pb-1 scrollbar-thin">
                        <div className="flex items-center justify-start sm:justify-center gap-1.5 min-w-max px-1">
                          {activeImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setPrakerinSlideIndex(idx)}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                                prakerinSlideIndex === idx
                                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                              }`}
                            >
                              Hal {idx + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions Panel */}
                    <div className="mt-5 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-700">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Cetak &amp; Unduh Berkas
                        </span>
                        <span className="text-xs font-bold text-slate-700">
                          {currentImage.title}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                        <button
                          onClick={() => handlePrintSchedule(currentImage.directUrl, currentImage.title)}
                          className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow-sm active:scale-95"
                        >
                          <Printer className="w-4 h-4" />
                          <span>Cetak / PDF</span>
                        </button>
                        <a
                          href={currentImage.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow-sm active:scale-95"
                        >
                          <Download className="w-4 h-4" />
                          <span>Unduh File</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>


      {/* Schedule Image Lightbox Modal */}
      <AnimatePresence>
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
                  const isPrakerinLightbox = lightboxImage.title.includes('Pembimbing Prakerin') || lightboxImage.title.includes('Prakerin');
                  const classKeys: ('X' | 'XI' | 'XII' | 'TKA')[] = ['X', 'XI', 'XII', 'TKA'];
                  const activeImages = isPrakerinLightbox ? SCHEDULE_IMAGES['PRAKERIN'] : (SCHEDULE_IMAGES[classKeys[activeScheduleIndex]] || SCHEDULE_IMAGES['X']);
                  const totalImages = activeImages.length;
                  const currentIdx = isPrakerinLightbox ? prakerinSlideIndex : activeImageIndex;
                  
                  return (
                    <>
                      <button
                        onClick={() => {
                          const prevIdx = (currentIdx - 1 + totalImages) % totalImages;
                          if (isPrakerinLightbox) {
                            setPrakerinSlideIndex(prevIdx);
                          } else {
                            setActiveImageIndex(prevIdx);
                          }
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
                          const nextIdx = (currentIdx + 1) % totalImages;
                          if (isPrakerinLightbox) {
                            setPrakerinSlideIndex(nextIdx);
                          } else {
                            setActiveImageIndex(nextIdx);
                          }
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
