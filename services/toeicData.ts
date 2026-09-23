export interface ToeicSlide {
  id: string;
  pageNumber: number;
  title: string;
  subtitle: string;
  date: string;
  session: string;
  badge: string;
  imageUrl: string;
  description: string;
}

export interface ToeicParticipant {
  no: number;
  name: string;
  nisn: string;
  kelas: string;
  kodePeserta: string;
  lab: string;
  ruang: string;
  sesi: number;
  tanggal: string;
  hari: string;
  waktu: string;
  jenjang: 'Kelas XI' | 'Kelas XII';
}

export const toeicSlides: ToeicSlide[] = [
  {
    id: "toeic-page-1",
    pageNumber: 1,
    title: "Surat Edaran Resmi Seleksi TOEIC TA 2026/2027",
    subtitle: "Nomor: 08/SE/SMKTP01/IX/2026 • Ka. SMK Andri Susanto, ST",
    date: "24 - 25 September 2026",
    session: "Semua Sesi",
    badge: "Surat Edaran",
    imageUrl: "/toeic/page-1.svg",
    description: "Surat Edaran resmi pelaksanaan seleksi TOEIC (Test of English for International Communication) untuk Kelas XI & XII. Wajib membawa earphone pribadi dan hadir tepat waktu."
  },
  {
    id: "toeic-page-2",
    pageNumber: 2,
    title: "Daftar Siswa Kelas XII • Sesi 1 (Kamis, 24 Sept 2026)",
    subtitle: "Sesi 1: 07.00 - 09.00 WIB • LAB 1, LAB 2, LAB 3, LAB 4",
    date: "24 September 2026",
    session: "Sesi 1 (07.00 - 09.00 WIB)",
    badge: "Kelas XII • Sesi 1",
    imageUrl: "/toeic/page-2.svg",
    description: "Daftar hadir dan pembagian ruangan tes seleksi TOEIC Kelas XII Sesi 1 untuk Jurusan MK & MO 1 (59 Peserta didik)."
  },
  {
    id: "toeic-page-3",
    pageNumber: 3,
    title: "Daftar Siswa Kelas XII • Sesi 2 (Kamis, 24 Sept 2026)",
    subtitle: "Sesi 2: 09.30 - 11.30 WIB • LAB 1, LAB 2, LAB 3",
    date: "24 September 2026",
    session: "Sesi 2 (09.30 - 11.30 WIB)",
    badge: "Kelas XII • Sesi 2",
    imageUrl: "/toeic/page-3.svg",
    description: "Daftar hadir dan pembagian ruangan tes seleksi TOEIC Kelas XII Sesi 2 untuk Jurusan DKV & TL (45 Peserta didik)."
  },
  {
    id: "toeic-page-4",
    pageNumber: 4,
    title: "Daftar Siswa Kelas XI • Sesi 1 (Jum'at, 25 Sept 2026)",
    subtitle: "Sesi 1: 07.00 - 09.00 WIB • LAB 1-DKV, LAB 2-DKV, LAB 4-DKV, LAB TL",
    date: "25 September 2026",
    session: "Sesi 1 (07.00 - 09.00 WIB)",
    badge: "Kelas XI • Sesi 1",
    imageUrl: "/toeic/page-4.svg",
    description: "Tabel nomor peserta, NISN, kelas, dan penempatan ruangan seleksi TOEIC Kelas XI Sesi 1 (59 Peserta didik)."
  },
  {
    id: "toeic-page-5",
    pageNumber: 5,
    title: "Daftar Siswa Kelas XI • Sesi 2 (Jum'at, 25 Sept 2026)",
    subtitle: "Sesi 2: 09.30 - 11.30 WIB • LAB 1-DKV, LAB 2-DKV",
    date: "25 September 2026",
    session: "Sesi 2 (09.30 - 11.30 WIB)",
    badge: "Kelas XI • Sesi 2",
    imageUrl: "/toeic/page-5.svg",
    description: "Tabel nomor peserta, NISN, kelas, dan penempatan ruangan seleksi TOEIC Kelas XI Sesi 2 (29 Peserta didik)."
  }
];

export const toeicParticipants: ToeicParticipant[] = [
  // KELAS XII - SESI 1 (Kamis, 24 September 2026) - LAB 1 (Ruang 1)
  { no: 1, name: "Andhika Wahid Syawaludin", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Fakhri Jazmi Raziq", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Hidayatur Raihan", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Iqbal Marvel Saputra", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Joshua Devis Morenza", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Juanito Sabono Elath", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Kevin Julivan", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Mochammad Dava Fladeyo", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Muhamad Vicky Pratama", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Muhammad Farhan Maulana", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Muhammad Riizqy Akbar", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Muhammad Rio Febrian", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Muhammad Zahran Kusuma", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Nabil Al Fajar Thaher", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Putra Fajar", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 1 (Kamis, 24 September 2026) - LAB 2 (Ruang 2)
  { no: 1, name: "Rayhanul Hakim", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Rifa Dwiky Padliansyah", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Rizki Farel Novriansyah", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Rizky Aditya", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Sava Alkeyza", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Sigit Wahyudi", nisn: "-", kelas: "MK", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Alex Rahman Hakim", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Alvino Pratama", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Audry", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Aufa Dwi Akbar Prasetyo", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Chodori", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Dava Arya Pratama", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Descam Damuarta", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Fahri Fijra Armenda", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Fahri Pratama Mulya", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 1 (Kamis, 24 September 2026) - LAB 3 (Ruang 3)
  { no: 1, name: "Farhan Septiana Ramadani", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Farrel Ferdinand", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Farid Rodikin", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Farlie Lailatul Qodri Laturua", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Ibrahimovic Irwansyah", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Khoeru Dzikri", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Marvel Diandra Saputra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Muhamad Aldi", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Muhamad Arif Albar", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Muhammad Aqil Ilham", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Muhammad Fathir Al-Qahtani", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Muhammad Firmansyah", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Muhammad Ibrahim Solihin Putra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Muhammad Rasya Assidiq", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Muhammad Rizal Anwar", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 1 (Kamis, 24 September 2026) - LAB 4 (Ruang 4)
  { no: 1, name: "Muhammad Rizky Zulkarnain", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Muhammad Syahrul Ramadhan", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Nabil Syahputra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Naufal Daffa Azis", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Nur Hasim", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Putra Nazar Muttaqin", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Rafi Ananda Saputra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Rifqi Irfani", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Rizki Aulia Putra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Tanzilal Noto Prawiro", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Yuda Saputra", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Ardiyanto", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Raffah", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Dhafa Yusuf Azhar", nisn: "-", kelas: "MO 1", kodePeserta: "-", lab: "LAB 4", ruang: "Ruang 4", sesi: 1, tanggal: "24 September 2026", hari: "Kamis", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 2 (Kamis, 24 September 2026) - LAB 1 (Ruang 1)
  { no: 1, name: "Abian kautsar bahry", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Ahmad Wildan Ramdani", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Andika Pratama", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Aqilla Yasmin", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Christian Immanuel Purba", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Fadhil Rifqi Khairan", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Fathin Hafizh Darmawan", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Gamaliel Josevanno Paskah Tumade", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Julian Afdillah", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Kalyca Tahara Azula Setiawan", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Maurinho Gerrardi", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Muhamad Rizky Januar Lattumamuwl", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Muhammad Rasya Izhar Maliqy", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Muhammad Rizky Ramadhan", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Nayla Ceasarry Arti Utomo", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 1", ruang: "Ruang 1", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 2 (Kamis, 24 September 2026) - LAB 2 (Ruang 2)
  { no: 1, name: "Nayra Alma Shafira", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Pangeran faadhil Hizbullah", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Putra Janabi Nurrisqi", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "Raihan Dwi Rahadi", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Raihan Galih Pratama", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Reval Setio", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Septiawan Saputra Batah", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Sesha Kurniasih", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Silviana Febriyanti", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Tiara Anggraeni", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Yuliyana Putri", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Arkan Ataya Ramadhan", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Rifqi Arazzak", nisn: "-", kelas: "DKV", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Afdhan Afdihillah Ruz", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Bangbang Irawan", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 2", ruang: "Ruang 2", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },

  // KELAS XII - SESI 2 (Kamis, 24 September 2026) - LAB 3 (Ruang 3)
  { no: 1, name: "Dzaky Abdul Aziz", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 2, name: "Fathir Alinsky Canavaro", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 3, name: "Hanifah Azzahra", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 4, name: "I Kadek Chandra Satrya", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 5, name: "Indra Damar Al-Sampurna", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 6, name: "Izhar Habib Musyaffa", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 7, name: "Khairul Annam", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 8, name: "Melia Putri", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 9, name: "Merisa Kumala Sari", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 10, name: "Mufli Muzaki Agusta", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 11, name: "Muhammad Firdaus Tri Saputra", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 12, name: "Muhammad Sofianyah", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 13, name: "Naufal Musyaffa", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 14, name: "Ria Sabitha Zein", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },
  { no: 15, name: "Tegar Setiawan", nisn: "-", kelas: "TL", kodePeserta: "-", lab: "LAB 3", ruang: "Ruang 3", sesi: 2, tanggal: "24 September 2026", hari: "Kamis", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XII" },

  // KELAS XI - SESI 1 (Jum'at, 25 September 2026)
  { no: 1, name: "ACHMAD GALIH AL MAGHZUMY", nisn: "0098610075", kelas: "XI", kodePeserta: "0098610075", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 2, name: "ADITYA BINTANG FADILLAH", nisn: "0097555983", kelas: "XI", kodePeserta: "0097555983", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 3, name: "ADLI NOVENDRI PRATAMA", nisn: "0099565453", kelas: "XI", kodePeserta: "0099565453", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 4, name: "ADLY FAIZI", nisn: "0108669026", kelas: "XI", kodePeserta: "0108669026", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 5, name: "AHMAD AL FAJRI", nisn: "0093913695", kelas: "XI", kodePeserta: "0093913695", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 6, name: "AHMAD FIRDIYAN", nisn: "0094648843", kelas: "XI", kodePeserta: "0094648843", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 7, name: "AHMAD ROHMAN", nisn: "0089684684", kelas: "XI", kodePeserta: "0089684684", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 8, name: "AHMAD SAPUTRA PRATAMA PRIYONO", nisn: "0096032711", kelas: "XI", kodePeserta: "0096032711", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 9, name: "AIRA PUTRI", nisn: "0097182451", kelas: "XI", kodePeserta: "0097182451", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 10, name: "ALFIAN AKBARUDDIN", nisn: "0096443990", kelas: "XI", kodePeserta: "0096443990", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 11, name: "ALIF HIDAYAH TULLAH", nisn: "0102771016", kelas: "XI", kodePeserta: "0102771016", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 12, name: "ALIF NAUFAL SETIADI", nisn: "0097901389", kelas: "XI", kodePeserta: "0097901389", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 13, name: "ALPINO RAMADON", nisn: "0092730634", kelas: "XI", kodePeserta: "0092730634", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 14, name: "ANDRI PARSAORAN SIMBOLON", nisn: "0099112632", kelas: "XI", kodePeserta: "0099112632", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 15, name: "ANDRIAN PRATAMA", nisn: "0094001024", kelas: "XI", kodePeserta: "0094001024", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 16, name: "ANGGARA", nisn: "0097477374", kelas: "XI", kodePeserta: "0097477374", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 17, name: "ARIF RAHMAN HAKIM", nisn: "0088599620", kelas: "XI", kodePeserta: "0088599620", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 18, name: "ARIFIN ILHAM", nisn: "0093433967", kelas: "XI", kodePeserta: "0093433967", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 19, name: "ATHAYA IKHSAN", nisn: "0106258705", kelas: "XI", kodePeserta: "0106258705", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 20, name: "AUREL CAHYA DININGRUM", nisn: "0096762346", kelas: "XI", kodePeserta: "0096762346", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 21, name: "AZKA ARDIANSYAH", nisn: "0095596099", kelas: "XI", kodePeserta: "0095596099", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 22, name: "BALKAN HARDIYANSYACH", nisn: "0092078961", kelas: "XI", kodePeserta: "0092078961", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 23, name: "BAYU RIZKY PRASETYO", nisn: "0103913398", kelas: "XI", kodePeserta: "0103913398", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 24, name: "BAYU TIRTA MAULANA", nisn: "0092153475", kelas: "XI", kodePeserta: "0092153475", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 25, name: "BRYAN PRATAMA MA'AFI", nisn: "0101437672", kelas: "XI", kodePeserta: "0101437672", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 26, name: "CHRISTIAN MARKUS JOHARI SIMANGUNSON", nisn: "0091187863", kelas: "XI", kodePeserta: "0091187863", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 27, name: "DALVIN OKTAVIAN ZULISMAN", nisn: "3096204378", kelas: "XI", kodePeserta: "3096204378", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 28, name: "DARRELL AKMAL ZAHWAN", nisn: "0098615139", kelas: "XI", kodePeserta: "0098615139", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 29, name: "DHAFA RADHITYANSYAH", nisn: "0094768155", kelas: "XI", kodePeserta: "0094768155", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 30, name: "DIFAH USDIANSYAH", nisn: "0095795551", kelas: "XI", kodePeserta: "0095795551", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 31, name: "ENDA FRIYANSAH", nisn: "0084405530", kelas: "XI", kodePeserta: "0084405530", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 32, name: "FACHREL HARDIANSYAH", nisn: "0093292004", kelas: "XI", kodePeserta: "0093292004", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 33, name: "FACHRI AULIA AZRA", nisn: "0086557307", kelas: "XI", kodePeserta: "0086557307", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 34, name: "FAHRI EKA GUNAWAN", nisn: "0092538205", kelas: "XI", kodePeserta: "0092538205", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 35, name: "FARHAN PUTRA RAMADHAN", nisn: "0091089379", kelas: "XI", kodePeserta: "0091089379", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 36, name: "FATHAN NUGROHO", nisn: "0101231159", kelas: "XI", kodePeserta: "0101231159", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 37, name: "FATHIR", nisn: "3091077926", kelas: "XI", kodePeserta: "3091077926", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 38, name: "FATTAN RIZQI SONDAKH", nisn: "0092975912", kelas: "XI", kodePeserta: "0092975912", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 39, name: "FERDIANSYAH PUTRA SUSILO", nisn: "0085881952", kelas: "XI", kodePeserta: "0085881952", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 40, name: "FIRJATULLAH PRATAMA", nisn: "0093452477", kelas: "XI", kodePeserta: "0093452477", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 41, name: "GALANG RAMADHAN", nisn: "0072801642", kelas: "XI", kodePeserta: "0072801642", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 42, name: "HEKMAYAR SYAH MASOOD", nisn: "0099496824", kelas: "XI", kodePeserta: "0099496824", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 43, name: "JATMIKO DWI HESTIAN", nisn: "0096857903", kelas: "XI", kodePeserta: "0096857903", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 44, name: "KANYA ARTHA MOLY", nisn: "0095651031", kelas: "XI", kodePeserta: "0095651031", lab: "LAB 4 - DKV", ruang: "LAB 4", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 45, name: "KEVIN APRILIO CORNELIUS", nisn: "0103875760", kelas: "XI", kodePeserta: "0103875760", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 46, name: "KEVIN PUTRA PRATAMA JUMASTAN", nisn: "0109613986", kelas: "XI", kodePeserta: "0109613986", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 47, name: "LINGGA MAHARDIKA", nisn: "0098471977", kelas: "XI", kodePeserta: "0098471977", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 48, name: "MARVEL HAMONONGAN", nisn: "0092868414", kelas: "XI", kodePeserta: "0092868414", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 49, name: "MERSI", nisn: "0073901066", kelas: "XI", kodePeserta: "0073901066", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 50, name: "MOCHAMMAD REYVAN FACHRI GUNAWAN", nisn: "0083775913", kelas: "XI", kodePeserta: "0083775913", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 51, name: "MOHAMMAD BILAL SUBIAKTO", nisn: "0098016568", kelas: "XI", kodePeserta: "0098016568", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 52, name: "MUGIONO PUTRA HARTANTO", nisn: "0105750453", kelas: "XI", kodePeserta: "0105750453", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 53, name: "MUHAMMAD AKBAR SUMADI", nisn: "0092857131", kelas: "XI", kodePeserta: "0092857131", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 54, name: "MUHAMAD ADITYA HARAHAP", nisn: "0105904342", kelas: "XI", kodePeserta: "0105904342", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 55, name: "MUHAMAD ADRIAN AL BASRI", nisn: "0096254884", kelas: "XI", kodePeserta: "0096254884", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 56, name: "MUHAMAD DAVIN", nisn: "0086603374", kelas: "XI", kodePeserta: "0086603374", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 57, name: "MUHAMAD FAUZAN RAMADHAN", nisn: "0091090341", kelas: "XI", kodePeserta: "0091090341", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 58, name: "MUHAMAD PASHA", nisn: "0089216653", kelas: "XI", kodePeserta: "0089216653", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },
  { no: 59, name: "MUHAMAD REVAN RAMADHAN", nisn: "0096512318", kelas: "XI", kodePeserta: "0096512318", lab: "LAB TL", ruang: "LAB TL", sesi: 1, tanggal: "25 September 2026", hari: "Jum'at", waktu: "07.00 – 09.00 WIB", jenjang: "Kelas XI" },

  // KELAS XI - SESI 2 (Jum'at, 25 September 2026)
  { no: 1, name: "MUHAMMAD AULYA DHUHAN FAZHRI", nisn: "0099346411", kelas: "XI", kodePeserta: "0099346411", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 2, name: "MUHAMMAD FARREL MAHARDIKA", nisn: "0094080765", kelas: "XI", kodePeserta: "0094080765", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 3, name: "MUHAMMAD ICHWAN RADITIYA", nisn: "3101277018", kelas: "XI", kodePeserta: "3101277018", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 4, name: "Muhammad Khaerul Azzam", nisn: "0104536015", kelas: "XI", kodePeserta: "0104536015", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 5, name: "MUHAMMAD LATANDRE ABDULLAH KAMIL", nisn: "0092799002", kelas: "XI", kodePeserta: "0092799002", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 6, name: "MUHAMMAD RAEHAN ADHIDTIO", nisn: "0087620797", kelas: "XI", kodePeserta: "0087620797", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 7, name: "MUHAMMAD RAFFAN ADLIANSYAH", nisn: "0098099123", kelas: "XI", kodePeserta: "0098099123", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 8, name: "MUHAMMAD RAIHAN", nisn: "0103560917", kelas: "XI", kodePeserta: "0103560917", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 9, name: "MUHAMMAD RIFAEL HERDYANSYAH", nisn: "0099282628", kelas: "XI", kodePeserta: "0099282628", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 10, name: "MUHAMMAD RIZKY APRIANSYAH", nisn: "0102339197", kelas: "XI", kodePeserta: "0102339197", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 11, name: "MUHAMMAD SYAWALUDDIN NURFADILLAH", nisn: "0086489033", kelas: "XI", kodePeserta: "0086489033", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 12, name: "Mukti Andika Hamzah", nisn: "0099265800", kelas: "XI", kodePeserta: "0099265800", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 13, name: "MUSTARI AHMAD", nisn: "0099688466", kelas: "XI", kodePeserta: "0099688466", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 14, name: "NAUFAL DAFFA TANRYSAU", nisn: "0092408553", kelas: "XI", kodePeserta: "0092408553", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 15, name: "NAUFAL RAFIF AKMAL", nisn: "0083336272", kelas: "XI", kodePeserta: "0083336272", lab: "LAB 1 - DKV", ruang: "LAB 1", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 16, name: "NEVILLE OKTAVIANUS POLLO", nisn: "0096576330", kelas: "XI", kodePeserta: "0096576330", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 17, name: "NIKITA RIANA", nisn: "0097052216", kelas: "XI", kodePeserta: "0097052216", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 18, name: "RAFA BINTANG PRATAMA", nisn: "3139988141", kelas: "XI", kodePeserta: "3139988141", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 19, name: "RAFKA FABRIANSYAH PUTRA", nisn: "0101719545", kelas: "XI", kodePeserta: "0101719545", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 20, name: "RAFLY SUTRISTA", nisn: "0075597019", kelas: "XI", kodePeserta: "0075597019", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 21, name: "RAKA MAIRINO LIANTARA", nisn: "0091295953", kelas: "XI", kodePeserta: "0091295953", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 22, name: "RAMADAN AKBAR", nisn: "0098997474", kelas: "XI", kodePeserta: "0098997474", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 23, name: "REYHAN VIRGIANSYAH", nisn: "0097023009", kelas: "XI", kodePeserta: "0097023009", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 24, name: "RIVAI RAMDHANI", nisn: "0088917058", kelas: "XI", kodePeserta: "0088917058", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 25, name: "SETIAWAN", nisn: "0095029876", kelas: "XI", kodePeserta: "0095029876", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 26, name: "SUHRO ARDI", nisn: "0096501768", kelas: "XI", kodePeserta: "0096501768", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 27, name: "SYAHRIL SAPUTRA", nisn: "0081687784", kelas: "XI", kodePeserta: "0081687784", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 28, name: "SYEFIRA NURI MAULIDA", nisn: "0103247330", kelas: "XI", kodePeserta: "0103247330", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" },
  { no: 29, name: "SYIFA AULIA AZ ZAHRA", nisn: "0089263550", kelas: "XI", kodePeserta: "0089263550", lab: "LAB 2 - DKV", ruang: "LAB 2", sesi: 2, tanggal: "25 September 2026", hari: "Jum'at", waktu: "09.30 – 11.30 WIB", jenjang: "Kelas XI" }
];
