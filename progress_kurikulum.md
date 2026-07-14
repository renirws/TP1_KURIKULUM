# Laporan Progress Perubahan & Pembaruan Sistem Kurikulum
**SMK TANJUNG PRIOK 1 Jakarta Utara — Tahun Ajaran 2026/2027**

Laporan ini disusun secara sistematis, terukur, dan valid untuk memantau seluruh riwayat implementasi fitur baru, perbaikan bug, restrukturisasi antarmuka (UI/UX), serta optimalisasi sistem agar berjalan responsif (*fast response*) dan ramah perangkat seluler (*mobile-friendly*).

---

## 📌 Rangkuman Eksekutif Pembaruan Sistem

| Kategori Fitur | Status | Deskripsi | Halaman Terkait |
| :--- | :---: | :--- | :--- |
| **Menu Unduh SK Mengajar** | ✅ Selesai | Integrasi tautan Drive SK Mengajar resmi TA 2026/2027. | Berkas & Halaman Guru |
| **Koreksi Bulan Kalender** | ✅ Selesai | Penomoran bulan akademik valid (Ganjil mulai 07, Genap mulai 01). | Unduh Berkas (Kalender) |
| **Fitur Cetak & Simpan PDF** | ✅ Selesai | Penambahan tombol cetak instan landscape & download file. | Siswa (`/siswa`) & Guru (`/guru`) |
| **Migrasi Jadwal KBM Master** | ✅ Selesai | Pemindahan Jadwal KBM Master dari siswa ke guru demi efisiensi UX. | Siswa & Guru |
| **Optimasi Mobile Friendly** | ✅ Selesai | Desain Bottom Nav ergonomis & Sheet Menu untuk pengalaman seluler. | Global (`App.tsx`) |
| **Pembaruan Jadwal KBM & Zoom** | ✅ Selesai | Pembaruan Jadwal KBM Utama TA 2026/2027 serta sistem zoom & seret interaktif. | Siswa & Guru |
| **Sourcing Data Keuangan Siswa** | ✅ Selesai | Pembaruan database keuangan kelas XI & XII bersumber tab baru 2026/2027. | Halaman Siswa (`/siswa`) |
| **Menu Pembimbing Prakerin** | ✅ Selesai | Slideshow interaktif berisi rincian 14 halaman Pembimbing Prakerin dengan fitur zoom/seret. | Halaman Siswa (`/siswa`) |
| **Fast-Response Animation** | ✅ Selesai | Transisi halaman mulus menggunakan Framer Motion. | Seluruh Router |

---

## 🛠️ Rincian Teknis & Riwayat Implementasi

### 1. Menu Unduh SK Mengajar TA 2026/2027
* **Tujuan**: Memfasilitasi guru untuk mengunduh Surat Keputusan (SK) Mengajar resmi secara langsung untuk kebutuhan administrasi dan sertifikasi pendidik.
* **Tautan Sumber**: `https://drive.google.com/drive/folders/1VqkRmZRZbykY16aoJFe9Hvytuf4ZH5aH?usp=drive_link`
* **Implementasi**:
  * Ditambahkan ke daftar dokumen utama pada halaman **Unduh Berkas / Kalender Akademik** (`/berkas`).
  * Dibuat modul kartu bergradasi premium khusus (**SK Mengajar Card**) pada sidebar halaman **Guru** (`/guru`) yang langsung mengarah ke Google Drive terkait.

---

### 2. Validasi Penomoran Bulan Kalender Akademik
* **Masalah**: Sebelumnya, penomoran bulan ganjil dimulai dari angka 1 dan seterusnya, serta genap dimulai dari angka 7. Hal ini membingungkan karena tahun ajaran baru (Semester Ganjil) resmi dimulai pada bulan **Juli** (bulan ke-7) dan Semester Genap dimulai bulan **Januari** (bulan ke-1).
* **Solusi & Perbaikan**:
  * Mengubah formula penomoran bulan interaktif di `/pages/AcademicCalendar.tsx`.
  * **Semester Ganjil**: Sekarang menampilkan penomoran valid dimulai dari **07** (Juli), **08** (Agustus), dst.
  * **Semester Genap**: Menampilkan penomoran valid dimulai dari **01** (Januari), **02** (Februari), dst.
  * Menghilangkan segala bentuk kebingungan bagi pembaca kalender pendidikan digital.

---

### 3. Fitur Cetak Mandiri & Simpan PDF (Print / Download)
* **Tujuan**: Memudahkan siswa maupun guru untuk mencetak atau menyimpan jadwal pelajaran mingguan yang tampil di slideshow ke dalam format PDF ukuran penuh tanpa merusak tata letak web.
* **Implementasi**:
  * Membuat fungsi `handlePrintSchedule(imageUrl, title)` menggunakan metode pencetakan iframe latar belakang (sandboxed).
  * Menghasilkan dokumen cetak dengan orientasi *landscape* otomatis, menyertakan kop resmi SMK Tanjung Priok 1 Jakarta Utara, serta merender gambar jadwal beresolusi tinggi.
  * Menyediakan dua aksi cepat pada bagian kontrol slideshow utama dan tampilan popup (lightbox) gambar:
    1. **Cetak / PDF** (Warna Emerald): Membuka dialog print sistem untuk langsung mencetak atau menyimpannya sebagai PDF.
    2. **Unduh File** (Warna Biru): Membuka file gambar asli dalam tab baru untuk disimpan secara langsung.

---

### 4. Restrukturisasi & Migrasi Jadwal KBM Master
* **Tujuan**: Memisahkan jadwal kurikulum tingkat tinggi (Master KBM) dari ranah konsumsi siswa harian dan menempatkannya pada ruang kerja guru agar lebih ergonomis dan sesuai dengan prinsip UI/UX sekolah terpadu.
* **Implementasi**:
  * Menghapus opsi tab 'Jadwal KBM' dan data berkas KBM Master dari halaman **Siswa** (`/siswa`). Halaman siswa kini fokus penuh pada Jadwal Pelajaran Kelas X, XI, dan XII.
  * Mengintegrasikan Jadwal KBM Utama (Master) ke dalam halaman **Guru** (`/guru`) dengan menerapkan sistem tab navigasi modern:
    * **Tab Jadwal Mengajar**: Menampilkan slideshow jadwal masing-masing guru (28 Halaman).
    * **Tab Jadwal KBM Utama**: Menampilkan lembar jadwal KBM Master 2026/2027 satu pintu.
  * Kontrol slideshow seperti dropdown lompat halaman (*direct jump select*), tombol navigasi slide, indikator halaman, serta tombol cetak PDF menyesuaikan secara otomatis secara dinamis dan responsif berdasarkan tab yang aktif.

---

### 5. Optimasi Mobile-First & Pengalaman Responsif Tinggi (*Fast Response*)
* **Tujuan**: Memastikan pengguna merasa sangat nyaman berinteraksi melalui smartphone atau tablet dengan kecepatan navigasi tinggi dan tata letak yang ergonomis (mudah dijangkau oleh jempol tangan).
* **Implementasi**:
  * **Bottom Navigation Bar (`/components/BottomNav.tsx`)**:
    * Mengimplementasikan bar navigasi melayang modern di bagian bawah layar untuk ukuran mobile.
    * Menyediakan akses satu-sentuhan ke 4 halaman utama: **Beranda**, **Warta**, **Siswa**, dan **Guru**.
    * Menyediakan tombol **Menu** interaktif yang membuka *Slide-Up Bottom Sheet* modern yang memuat navigasi sekunder seperti Kurikulum, Galeri, Tautan Pintar, Unduh Berkas, PPDB, serta kontak langsung sekolah (Telepon & Email).
  * **Page Transition Manager (`/components/PageWrapper.tsx`)**:
    * Membungkus seluruh rute halaman dengan animasi transisi mikro yang elegan menggunakan `motion`.
    * Memberikan efek perpindahan halaman yang halus, bebas flicktring (*fast response*), serta mengeliminasi kesan kaku pada browser smartphone.
  * **Ajustment Layout & Padding**:
    * Menambahkan padding bawah (`pb-16 md:pb-0`) pada elemen utama untuk menghindari tumpang tindih elemen halaman dengan Bottom Nav mobile.

---

### 6. Pembaruan Jadwal KBM Utama & Zoom Interaktif Premium
* **Tujuan**: Memperbarui berkas jadwal KBM utama menggunakan materi kurikulum terbaru, serta mengimplementasikan fitur pembesaran gambar (*active zoom & pan*) tingkat tinggi demi kemudahan membaca detail jadwal pelajaran yang sangat padat pada HP / Smartphone maupun Desktop.
* **Tautan Sumber Terbaru**: `https://drive.google.com/file/d/1flgflS4Bg_oVYBUudsSjYJ24QwtkJp-0/view?usp=drive_link`
* **Implementasi**:
  * **Pembalikan Kualitas Gambar & Resolusi**: Mengganti berkas lama dengan gambar resolusi tinggi (`directUrl` Google Drive menggunakan parameter `=s0` untuk memuat ukuran asli tanpa kompresi).
  * **Sistem Zoom & Panning Dinamis**:
    * Menambahkan tombol Zoom In (`+`), Zoom Out (`-`), dan Reset Zoom di bagian atas layar lightbox modal.
    * Menyediakan navigasi seret (*drag-and-pan*) menggunakan mouse maupun sapuan jari (*touch gesture*) untuk menggeser gambar saat dizoom secara responsif dan bebas hambatan.
    * Otomatis mereset tingkat pembesaran ketika berpindah slide halaman atau menutup lightbox untuk menjaga kenyamanan penggunaan (*UX flow*).
  * **Cakupan Pengalaman**: Fitur ini diimplementasikan secara identik pada slideshow halaman **Guru** (`/guru`) serta halaman **Siswa** (`/siswa`).
  
---

### 7. Pembaruan Sourcing Data Keuangan Siswa Kelas XI & XII TA 2026/2027
* **Tujuan**: Menghubungkan portal pemeriksaan administrasi keuangan siswa mandiri secara langsung ke database lembar tab terbaru Google Sheets tahun ajaran 2026/2027 untuk menjaga keakuratan, kevalidan, serta kemutakhiran informasi.
* **Tautan Sumber Database**: `https://docs.google.com/spreadsheets/d/1ZhVJ7BkCIu9SxIk8QD1Xyjh6kr4MZ7Ps/edit`
* **Implementasi**:
  * **Penyesuaian Tab Sheet & Kategori**:
    * **Kelas XI**: Sekarang ditarik dari lembar tab `KLS XI 26/27` (sebelumnya `KLS X 25/26`).
    * **Kelas XII**: Sekarang ditarik dari lembar tab `KLS XII 26/27` (sebelumnya `KLS XI 25/26`).
  * **Koreksi Kolom API (Gviz query)**:
    * Karena struktur baris di tab baru mengalami penyesuaian posisi, rentang query dimigrasikan dari `AC2:AJ` menjadi `AA2:AH`.
    * Kolom `AA` memuat NO, `AB` memuat NIS, `AC` memuat NAMA, dan dilanjutkan rentang rincian SPP, UTS, UAS, DU, PPDB, hingga Jumlah Tunggakan Terakhir pada kolom `AH`.
    * Pemetaan indeks cells dipertahankan secara dinamis tanpa merusak fitur slip cetak mandiri.
  
---

### 8. Integrasi Menu & Slideshow Pembimbing Prakerin Premium
* **Tujuan**: Menyediakan menu khusus Pembimbing Prakerin (Praktek Kerja Industri) pada portal siswa, menampilkan rincian nama dan data pembimbing dalam bentuk slideshow interaktif bersumber dari berkas gambar resolusi tinggi (14 halaman) agar mudah diakses secara cepat dan mobile-friendly.
* **Tautan Sumber Gambar Google Drive**:
  * Halaman 1 s.d 14 bersumber dari berkas Google Drive resmi sekolah yang dimigrasikan menggunakan parameter direct link `=s0` untuk mempertahankan kualitas visual orisinal tanpa kompresi saat dilakukan pembesaran detail.
* **Implementasi**:
  * **Penyediaan Tab Tambahan**: Menambahkan tab pilihan "Pembimbing Prakerin" bersanding secara harmonis di sebelah Kelas X, XI, XII.
  * **Optimasi Layout Grid Responsif (UI/UX)**:
    * Mengubah barisan tab pemilih menggunakan format adaptif `grid grid-cols-2 sm:flex` dengan target sentuh (*touch target*) minimal 44px yang sangat ergonomis untuk pengguna HP / Smartphone.
    * Menyediakan penanda halaman (*indicator slide active*) serta tombol navigasi kiri-kanan berukuran pas di jempol tangan.
  * **Sistem Zoom & Seret Interaktif**:
    * Didukung penuh oleh fitur *panning & active scaling* modal lightbox sehingga siswa dapat membaca tulisan-tulisan kecil di lembar pembimbing secara mudah dengan gerakan cubit/seret jari (*pinch & pan gesture*) maupun geseran mouse (*click & drag*).
    * Terintegrasi dengan fitur cetak mandiri lanskap (*landscape PDF print support*).

---

## 📈 Verifikasi Sistem

* **Linter Status**: `tsc --noEmit` berhasil dilewati tanpa error 100% (Hijau/Lolos).
* **Production Build Status**: Proses kompilasi Vite dan bundel server berjalan lancar (`Build succeeded`).
* **Responsivitas**: Layout adaptif dari ukuran layar sekecil 320px hingga resolusi desktop ultra-lebar.

---
*Catatan: Dokumen ini disimpan di dalam direktori utama sebagai `/progress_kurikulum.md` dan dapat diakses kapan saja untuk kebutuhan monitoring berkala.*
