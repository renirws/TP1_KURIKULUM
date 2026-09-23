# Log Progress Perubahan & Pembaruan Sistem Kurikulum
**SMK TANJUNG PRIOK 1 Jakarta Utara — Tahun Ajaran 2026/2027**

Laporan ini disusun secara komprehensif, terstruktur, dan valid untuk memantau seluruh riwayat implementasi fitur baru, perbaikan bug, restrukturisasi antarmuka (UI/UX), optimasi SEO senior, serta pembersihan fitur agar sistem berjalan ringan, berkecepatan tinggi (*fast response*), dan ramah perangkat seluler (*mobile-friendly*).

---

## 📌 Rangkuman Riwayat Pembaruan Terkini

| No | Modul / Fitur | Status | Deskripsi Singkat | Halaman Terkait |
| :---: | :--- | :---: | :--- | :--- |
| 1 | **Pembaruan Jadwal Simulasi TKA Kelas XII** | ✅ Selesai | Mengganti tautan file jadwal utama TKA menjadi `1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od` dengan slider slide interaktif, swipe gesture mobile, zoom/pan, dan cetak PDF. | Halaman Siswa (`/siswa`) |
| 2 | **Link Unggah Soal STS Ganjil 26/27** | ✅ Selesai | Integrasi tautan resmi `https://s.id/UploadSoalSTSGanjil26-27` pada halaman unggah soal dengan tampilan mobile card dan panduan guru. | Halaman Unggah (`/unggah`) |
| 3 | **Penyederhanaan Modul Prakerin** | ✅ Selesai | Menghapus menu Cari Siswa/Lokasi dan Kelompok Guru; memfokuskan direktori pada 14 Halaman Slide Pembimbing & Lokasi Prakerin interaktif. | Halaman Siswa (`/siswa`) |
| 4 | **Migrasi Jurusan: Teknik Logistik (TL)** | ✅ Selesai | Mengubah seluruh penyebutan dan identitas jurusan dari Manajemen Logistik menjadi **Teknik Logistik** secara valid 100% pada UI, filter, dan Schema.org. | Seluruh Aplikasi |
| 5 | **Penghapusan Fitur Cek Keuangan & SPP** | ✅ Selesai | Menghapus tuntas seluruh form login wewenang, tabel tagihan SPP, filter status lunas, modal rincian, dan metadata terkait demi privasi, kecepatan, dan UI bersih. | Halaman Siswa (`/siswa`) & Home (`/`) |
| 6 | **Optimasi Mobile & SEO Senior** | ✅ Selesai | Peningkatan Core Web Vitals, Schema.org JSON-LD (School, WebSite, FAQPage), meta tag, dan navigasi ergonomis jempol (Bottom Nav). | Global (`index.html`, SEO) |
| 7 | **Fitur Cetak & Download PDF Mandiri** | ✅ Selesai | Tombol cetak dokumen sandboxed iframe otomatis orientasi landscape dengan kop resmi SMK Tanjung Priok 1. | Siswa (`/siswa`) & Guru (`/guru`) |
| 8 | **Migrasi Jadwal KBM Master ke Portal Guru** | ✅ Selesai | Pemindahan lembar KBM Master dari siswa ke guru dengan tabs selector dinamis demi kenyamanan UX. | Siswa (`/siswa`) & Guru (`/guru`) |
| 9 | **Menu Unduh SK Mengajar 2026/2027** | ✅ Selesai | Penambahan tautan folder Google Drive SK Mengajar resmi pada Kalender Berkas dan Portal Guru. | Berkas (`/berkas`) & Guru (`/guru`) |
| 10 | **Dokumentasi KOSP & Galeri Video Kegiatan** | ✅ Selesai | Integrasi Flipbook KOSP 2026-2027 pada Tautan Penting dan Video Kegiatan 8 Kebiasaan Anak Indonesia Hebat. | Tautan (`/tautan`) & Galeri (`/galeri`) |
| 11 | **Redesain Halaman Guru & Integrasi Ruang Guru** | ✅ Selesai | Menambahkan link Ruang Guru (`www.kurikulumsmktanjungpriok1.sch.id`), menghapus link RAKER, merapikan bagian kanan atas, dan mengoptimalkan responsivitas smartphone. | Halaman Guru (`/guru`) |
| 12 | **Pembaruan Link Login Ruang Guru** | ✅ Selesai | Memperbarui tautan portal Ruang Guru menjadi link login resmi `https://kurikulum.smktanjungpriok1.sch.id/login` pada seluruh kartu, SEO, dan direktori tautan penting. | Halaman Guru (`/guru`) & Tautan (`/tautan`) |
| 13 | **Slide Slider & Sistem Pencarian Seleksi TOEIC** | ✅ Selesai | Implementasi slider 5 lembar edaran & jadwal sesi TOEIC (24-25 September 2026), filter nama siswa/ruangan/sesi interaktif, peringatan wajib earphone, serta optimasi SEO & smartphone. | Warta (`/warta`) & Home (`/`) |

---

## 🛠️ Rincian Pembaruan & Detail Implementasi

### 1. Pembaruan Jadwal Utama Simulasi TKA Kelas XII
* **Permintaan**: Mengubah berkas tautan jadwal dari file `1GMDrC4x9i53lyHEXZVwviNPci3tX_14F` menjadi `1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od` dengan penyajian slider slide yang rapi, *user-friendly*, dan responsif di smartphone.
* **Tindakan yang Dilakukan**:
  * Memperbarui tautan `SCHEDULE_IMAGES.TKA[0]` di `/pages/Students.tsx` ke ID berkas Google Drive baru `1OwtC54QBn-NKfoV0I_W1a9ViB5Spt4Od`.
  * Memastikan thumbnail dan gambar asli di-render menggunakan resolusi tinggi (`directUrl` berparameter `=s0`).
  * Menyediakan navigasi slide visual, swipe sentuh (*touch swipe gesture*), indikator halaman aktif, opsi lompat cepat (*jump selector*), serta tombol zoom, pan, dan cetak PDF langsung dari layar HP.

---

### 2. Penambahan Link Unggah Soal STS Ganjil TA 2026/2027
* **Permintaan**: Menambahkan tautan `https://s.id/UploadSoalSTSGanjil26-27` di halaman unggah soal dengan tampilan *mobile* dan *user-friendly*.
* **Tindakan yang Dilakukan**:
  * Menambahkan kartu aksi unggah utama pada halaman **Unggah Berkas/Soal** (`/pages/Upload.tsx`).
  * Mendesain kartu responsif dengan tombol CTA mencolok, ikon `UploadCloud`, indikator batas waktu, serta tips format dokumen soal yang ramah layar sentuh ponsel.

---

### 3. Perbaikan & Penyederhanaan Modul Prakerin pada Halaman Siswa
* **Permintaan**: Menghapus menu "Cari Siswa/Lokasi" dan menu "Kelompok Guru" pada bagian Bimbingan & Lokasi Prakerin di halaman siswa, tanpa menyebabkan gangguan pada fitur lainnya serta tetap memperhatikan *mobile filter* dan standar UI/UX.
* **Tindakan yang Dilakukan**:
  * Mengeliminasi tab query pencarian live GSheet dan accordion kelompok guru yang membebani memori browser.
  * Mempertahankan dan memaksimalkan **Slide Pembimbing & Lokasi Prakerin (14 Halaman)** lengkap dengan resolusi tinggi, kontrol swipe/slide geser, modal pembesar (lightbox), navigasi seret (*drag-pan*), serta cetak PDF mandiri berorientasi *landscape*.
  * Menata ulang header modul dengan gaya bento-card modern berkontras tinggi dan padding yang proporsional.

---

### 4. Validasi 100% Migrasi Jurusan: Teknik Logistik (TL)
* **Permintaan**: Mengubah jurusan "Manajemen Logistik" menjadi **"Teknik Logistik" (TL)** secara valid dan menyeluruh 100%.
* **Tindakan yang Dilakukan**:
  * Memperbarui seluruh referensi jurusan di `/pages/Students.tsx`, `/pages/Home.tsx`, `/components/SEO.tsx`, dan `index.html`.
  * Menyesuaikan singkatan program keahlian menjadi **TL (Teknik Logistik)** pada filter jurusan, badge rombel siswa, kartu kejuruan, dan deskripsi keahlian kurikulum.
  * Memverifikasi data skema terstruktur JSON-LD Schema.org agar entitas `EducationalOrganization` mencantumkan konsentrasi Teknik Logistik secara resmi.

---

### 5. Penghapusan Menyeluruh Fitur Cek Keuangan & SPP Siswa
* **Permintaan**: Menghapus fitur cek keuangan & SPP di halaman siswa secara tuntas agar website tetap *fast response*, *clean*, dan nyaman digunakan pada smartphone.
* **Tindakan yang Dilakukan**:
  * **Halaman Siswa (`/pages/Students.tsx`)**:
    * Menghapus seluruh blok formulir login otorisasi (input email akun wewenang, password, tombol validasi).
    * Menghapus tabel data tagihan SPP Kelas X, XI, XII (baik versi desktop maupun kartu mobile).
    * Menghapus filter status keuangan (Semua, Lunas, Belum Lunas) dan modal rincian slip tagihan.
    * Menghapus seksi petunjuk pembayaran dan kontak bantuan TU keuangan.
    * Membersihkan state, fungsi bantuan, dan import ikon yang tidak lagi digunakan.
  * **Halaman Utama (`/pages/Home.tsx`)**:
    * Menghapus kartu promosi SPP, badge cek tagihan, FAQ seputar keuangan siswa, dan tombol navigasi terkait.
  * **Pembersihan SEO & Schema (`/components/SEO.tsx` & `index.html`)**:
    * Menghapus kata kunci dan metadata terkait SPP, menggantinya dengan fokus kurikulum: **Jadwal Pelajaran KBM**, **Simulasi TKA Kelas XII**, dan **Direktori Bimbingan Prakerin**.
  * **Hasil UI/UX & Kinerja**:
    * Halaman dimuat secara instan (*fast response*), ringan tanpa *payload* lembar spreadsheet eksternal, hemat kuota mobile, dan bebas dari distorsi tata letak.

---

### 6. Desain Ergonomis Mobile-First & Navigasi Cepat
* **Bottom Navigation Bar (`/components/BottomNav.tsx`)**:
  * Mengambang di bagian bawah layar ponsel untuk akses satu ketukan ke Beranda, Warta, Siswa, dan Guru.
  * Menu *Slide-Up Sheet* modern dengan akses cepat ke Galeri, Tautan, Kalender, dan Kontak resmi.
* **Page Transitions (`/components/PageWrapper.tsx`)**:
  * Menggunakan Framer Motion (`motion/react`) untuk transisi antar-halaman yang halus tanpa *flicker*.
* **Area Sentuh (Touch Targets)**:
  * Seluruh tombol dan kontrol navigasi dirancang dengan tinggi minimum 44px agar nyaman dioperasikan satu tangan di smartphone.

---

### 7. Perbaikan Halaman Guru: Integrasi Portal Ruang Guru, Penghapusan Link Raker, & Optimasi Mobile
* **Permintaan**: Perbaiki halaman guru, bagian kanan atas (yang berwarna putih) mohon diperbaiki dengan desain yg bagus sehingga rapih dan easy use. Bagian link raker juga dihilangkan. Tambahkan link ruang guru yaitu `www.kurikulumsmktanjungpriok1.sch.id`. Buat responsif dan kompatibel untuk smartphone. Simpan semua perubahan pada log `progress.md`.
* **Tindakan yang Dilakukan**:
  * **Integrasi Link Ruang Guru**:
    * Menambahkan tautan resmi `https://www.kurikulumsmktanjungpriok1.sch.id` sebagai pintu gerbang utama kurikulum, silabus pembelajaran, dan modul pembelajaran daring pendidik.
    * Menampilkan badge domain resmi ber-styling monospace berlatar kontras dengan tombol aksi langsung `BUKA RUANG GURU`.
  * **Restrukturisasi Bagian Kanan Atas (Header & Sidebar)**:
    * Mengganti kartu putih lama dengan kartu modern bergradasi elegan, pencahayaan aksen halus, ikon `Globe` & `ArrowUpRight`, serta indikator status "Aktif" (pulse dot).
    * Menyediakan tautan pintas (*Akses Cepat*) langsung ke Tool Ajar Guru, Unggah Soal STS, dan SK Mengajar.
    * Menghadirkan kartu sorotan utama **Portal Ruang Guru** pada urutan pertama di bilah sisi (*sidebar*) lengkap dengan label `LINK UTAMA KURIKULUM`.
  * **Penghapusan Tautan RAKER**:
    * Menghapus tuntas kartu tautan "RAKER Guru TP01" (`https://s.id/RAKER_TP01`) dari bilah sisi dan variabel terkait di kode program.
    * Memperbarui deskripsi SEO dan kata kunci di `Teachers.tsx` agar bersih dari referensi Raker yang sudah ditiadakan.
  * **Penyempurnaan Form Izin Guru**:
    * Meremajakan tampilan kartu "Form Izin Guru" dengan batas tegas (*slate-200*), bayangan lembut, badge `LAYANAN RESMI` berikon `ShieldCheck`, serta tombol ramah sentuhan `ISI FORM IZIN GURU`.
  * **Responsivitas & Kompatibilitas Smartphone**:
    * Menambahkan kelas pelindung `overflow-x-hidden`, `w-full`, dan `min-w-0` pada grid induk dan seluruh kartu kolom untuk mencegah distorsi atau *horizontal scrolling* di layar kecil (320px–480px).
    * Mengoptimalkan ukuran *touch target* (min. 44px–48px) pada tombol aksi, navigasi slide, dan selector halaman agar sangat ergonomis bagi jempol pengguna ponsel (*easy-to-use*).

---

### 8. Pembaruan Tautan Ruang Guru ke Portal Login Resmi
* **Permintaan**: Perbaiki ruang guru dengan link `https://kurikulum.smktanjungpriok1.sch.id/login`.
* **Tindakan yang Dilakukan**:
  * **Pembaruan Endpoint URL Utama**:
    * Mengganti URL `ruangGuruLink` di `pages/Teachers.tsx` menjadi `https://kurikulum.smktanjungpriok1.sch.id/login`.
    * Memperbarui label teks domain/link pada kartu header kanan atas dan bilah sisi (*sidebar*) menjadi `kurikulum.smktanjungpriok1.sch.id/login`.
    * Mengubah teks tombol aksi menjadi `LOGIN RUANG GURU` untuk kejelasan fungsional bahwa halaman ini mengarahkan langsung ke portal autentikasi kurikulum.
  * **Sinkronisasi Metadata SEO**:
    * Memperbarui `description` dan `keywords` pada komponen `<SEO />` di `Teachers.tsx` agar mengacu pada endpoint login resmi `kurikulum.smktanjungpriok1.sch.id/login`.
  * **Integrasi pada Halaman Tautan Penting (`/tautan`)**:
    * Menambahkan entri kartu `PORTAL RUANG GURU (LOGIN KURIKULUM)` di `pages/ExternalLinks.tsx` dengan tautan langsung ke `https://kurikulum.smktanjungpriok1.sch.id/login` guna mempermudah akses cepat bagi guru dan staf.

---

### 9. Implementasi Slide Slider Berita Pelaksanaan Seleksi TOEIC (24-25 September 2026)
* **Permintaan**: Buatkan slide slider untuk gambar terlampir sebagai isi di warta kurikulum. Berita tentang pelaksanaan TOEIC (nama siswa, sesi & Ruangan). Pelaksanaan tgl 24 September 2026 untuk kelas XII dan 25 September 2026 untuk kelas XI. Murid hadir tepat waktu dan membawa earphone pribadi. Tampilan clean, rapih, easy use dan compatible for smartphone. Simpan semua perubahan pada log `progress.md`.
* **Tindakan yang Dilakukan**:
  * **Penyusunan Data & Aset Vektor Berkualitas Tinggi**:
    * Mengonversi dokumen fisik edaran resmi dan 4 lembar lampiran daftar hadir peserta ujian menjadi aset SVG vektor mandiri (`/public/toeic/page-1.svg` s.d. `page-5.svg`) yang tajam, ringan, serta dapat di-zoom tanpa pecah.
    * Membangun modul data `services/toeicData.ts` yang mendata secara lengkap 5 slide dokumen dan seluruh 187 data siswa peserta TOEIC (nama, kelas, NISN, hari, tanggal, sesi, waktu tes, dan laboratorium).
  * **Komponen Slide Slider Interaktif (`pages/News.tsx`)**:
    * Menampilkan slider geser interaktif beranimasi halus (`motion/react` & `AnimatePresence`) untuk 5 lembar dokumen:
      * **Lembar 1**: Surat Edaran Resmi Seleksi TOEIC TA 2026/2027 (No. 08/SE/SMKTP01/IX/2026).
      * **Lembar 2**: Lampiran Pembagian Ruangan & Sesi 1 Kelas XII (Kamis, 24 Sept 2026 • 07.00 - 09.00 WIB).
      * **Lembar 3**: Lampiran Pembagian Ruangan & Sesi 2 Kelas XII (Kamis, 24 Sept 2026 • 09.30 - 11.30 WIB).
      * **Lembar 4**: Lampiran Pembagian Ruangan & Sesi 1 Kelas XI (Jum'at, 25 Sept 2026 • 07.00 - 09.00 WIB).
      * **Lembar 5**: Lampiran Pembagian Ruangan & Sesi 2 Kelas XI (Jum'at, 25 Sept 2026 • 09.30 - 11.30 WIB).
    * Mendukung gesture geser layar sentuh (*touch swipe*), tombol navigasi panah kiri/kanan, thumbnail lompat cepat (*quick jump pill buttons*), dan indikator lembar aktif (`1 / 5`).
    * Fitur **Zoom Resolusi Tinggi** interaktif (*modal lightbox*) dengan pembesaran 100% hingga 400%, navigasi seret (*drag & pan*), dan reset ukuran.
    * Fitur **Cetak / PDF Otomatis** menggunakan modul sandboxed printing iframe berorientasi portrait rapi dengan judul dan identitas resmi sekolah.
  * **Highlight Informasi Penting & Kebijakan Ujian**:
    * **Peringatan Wajib Earphone**: Banner sorotan merah muda (*rose*) dan kartu aturan yang mengingatkan murid wajib membawa earphone/headset pribadi yang berfungsi normal untuk sesi *Listening*.
    * **Jadwal Per Jenjang**:
      * Kamis, 24 September 2026: Khusus Siswa/i Kelas XII.
      * Jum'at, 25 September 2026: Khusus Siswa/i Kelas XI.
    * **Ketepatan Waktu**: Wajib hadir 15 menit sebelum sesi dimulai (Sesi 1: 07.00 - 09.00 WIB, Sesi 2: 09.30 - 11.30 WIB).
    * **Lokasi Ujian**: Laboratorium Komputer SMK Tanjung Priok 1 (LAB 1, LAB 2, LAB 3, LAB 4, dan LAB TL).
  * **Alat Pencarian Interaktif Peserta ("Cek Sesi, Ruangan & Jadwal Anda")**:
    * Pencarian nama siswa secara instan (*real-time live filter*) berdasarkan nama atau NISN.
    * Filter cerdas per jenjang (Kelas XII / Kelas XI) dan per sesi (Sesi 1 / Sesi 2).
    * Tampilan kartu mobile-friendly yang ringkas dan tabel desktop yang memuat nama, kelas, sesi, waktu, ruangan LAB, dan status earphone.
  * **Sorotan Berita di Beranda (`pages/Home.tsx`)**:
    * Menambahkan kartu pengumuman featured "Pelaksanaan Seleksi TOEIC Kelas XI & XII" pada grid Warta Akademik Beranda yang langsung terhubung ke jangkar `/warta#toeic`.
  * **Optimasi SEO Senior & Aksesibilitas Smartphone**:
    * Sinkronisasi meta title, keywords, dan meta description Google Search Engine dengan istilah pencarian kunci: *Seleksi TOEIC SMK Tanjung Priok 1*, *Jadwal TOEIC 24-25 September 2026*, *Ruangan Lab TOEIC*, *Wajib Earphone Pribadi*.
    * Struktur antarmuka bebas distorsi, *zero horizontal overflow*, ramah jempol (*touch-friendly*), dan kontras teks memenuhi standar WCAG AA.

---

## 📈 Verifikasi & Validasi Sistem

| Pengecekan | Metode Uji | Hasil |
| :--- | :--- | :---: |
| **Linting & Tipe TypeScript** | `npm run lint` (`tsc --noEmit`) | **0 Error / 0 Warning (Lolos 100%)** |
| **Production Build** | `npm run build` (Vite) | **Berhasil (`Build succeeded`)** |
| **Responsivitas Perangkat** | Mobile (320px - 480px), Tablet (768px), Desktop (1024px+) | **Responsif & Bebas Overflow** |
| **SEO & Schema.org** | Google Rich Results JSON-LD (`School`, `WebSite`, `FAQPage`) | **Valid & Bebas Sintaks Kadaluarsa** |

---
*Log progress ini diperbarui secara berkala dan terdokumentasi di repositori proyek.*
