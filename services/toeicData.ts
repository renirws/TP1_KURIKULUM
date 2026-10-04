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
  role: 'Semua' | 'Murid' | 'Guru';
}

export interface ToeicParticipant {
  no: number;
  name: string;
  role: 'Murid' | 'Guru';
  lab: string;
  sesi: number;
  tanggal: string;
  hari: string;
  waktu: string;
}

export const toeicSlides: ToeicSlide[] = [
  {
    id: "toeic-page-1",
    pageNumber: 1,
    title: "Surat Edaran SE9REV_TOEIC GURU DAN MURID",
    subtitle: "Nomor: 09Rev/SE/SMKTP01/X/2026 • Ka. SMK H. Andri Susanto, ST",
    date: "15 - 16 Oktober 2026",
    session: "Semua Sesi",
    badge: "SE9REV_TOEIC GURU DAN MURID",
    imageUrl: "/toeic/page-1.svg",
    description: "Surat Edaran resmi pelaksanaan seleksi TOEIC Tahap 3 Tahun Pelajaran 2026/2027 untuk Murid & Guru. Wajib membawa earphone/headset pribadi dan hadir tepat waktu.",
    role: "Semua"
  },
  {
    id: "toeic-page-2",
    pageNumber: 2,
    title: "Daftar Murid • LAB 1 DKV - Sesi 1",
    subtitle: "Kamis, 15 Oktober 2026 • Sesi 1: 08.00 - 10.00 WIB (15 Murid)",
    date: "15 Oktober 2026",
    session: "Sesi 1 (08.00 - 10.00 WIB)",
    badge: "Murid • Lab 1 DKV",
    imageUrl: "/toeic/page-2.svg",
    description: "Daftar peserta seleksi TOEIC Tahap 3 Murid Kelas XII bertempat di LAB 1 DKV Sesi 1 (Afdhan Afdhillah Ruz s.d Christian Immanuel Purba).",
    role: "Murid"
  },
  {
    id: "toeic-page-3",
    pageNumber: 3,
    title: "Daftar Murid • LAB 2 DKV - Sesi 1",
    subtitle: "Kamis, 15 Oktober 2026 • Sesi 1: 08.00 - 10.00 WIB (15 Murid)",
    date: "15 Oktober 2026",
    session: "Sesi 1 (08.00 - 10.00 WIB)",
    badge: "Murid • Lab 2 DKV",
    imageUrl: "/toeic/page-3.svg",
    description: "Daftar peserta seleksi TOEIC Tahap 3 Murid Kelas XII bertempat di LAB 2 DKV Sesi 1 (Dzaky Abdul Aziz s.d Kalyca Tahara Azula Setiawan).",
    role: "Murid"
  },
  {
    id: "toeic-page-4",
    pageNumber: 4,
    title: "Daftar Murid • LAB 4 DKV - Sesi 1",
    subtitle: "Kamis, 15 Oktober 2026 • Sesi 1: 08.00 - 10.00 WIB (15 Murid)",
    date: "15 Oktober 2026",
    session: "Sesi 1 (08.00 - 10.00 WIB)",
    badge: "Murid • Lab 4 DKV",
    imageUrl: "/toeic/page-4.svg",
    description: "Daftar peserta seleksi TOEIC Tahap 3 Murid Kelas XII bertempat di LAB 4 DKV Sesi 1 (Kevin Julivan s.d Muhammad Rio Febrian).",
    role: "Murid"
  },
  {
    id: "toeic-page-5",
    pageNumber: 5,
    title: "Daftar Murid • LAB TL - Sesi 1",
    subtitle: "Kamis, 15 Oktober 2026 • Sesi 1: 08.00 - 10.00 WIB (15 Murid)",
    date: "15 Oktober 2026",
    session: "Sesi 1 (08.00 - 10.00 WIB)",
    badge: "Murid • Lab TL",
    imageUrl: "/toeic/page-5.svg",
    description: "Daftar peserta seleksi TOEIC Tahap 3 Murid Kelas XII bertempat di LAB Teknik Logistik (TL) Sesi 1 (Muhammad Rizal Anwar s.d Putra Nazar Muttaqin).",
    role: "Murid"
  },
  {
    id: "toeic-page-6",
    pageNumber: 6,
    title: "Daftar Murid • LAB 1 DKV - Sesi 2",
    subtitle: "Kamis, 15 Oktober 2026 • Sesi 2: 10.30 - 12.30 WIB (9 Murid)",
    date: "15 Oktober 2026",
    session: "Sesi 2 (10.30 - 12.30 WIB)",
    badge: "Murid • Lab 1 DKV Sesi 2",
    imageUrl: "/toeic/page-6.svg",
    description: "Daftar peserta seleksi TOEIC Tahap 3 Murid Kelas XII bertempat di LAB 1 DKV Sesi 2 (Rafah Wahyudi s.d Rafi Ananda Saputra).",
    role: "Murid"
  },
  {
    id: "toeic-page-7",
    pageNumber: 7,
    title: "Daftar Guru Peserta • LAB 1 DKV - Sesi 3",
    subtitle: "Jum'at, 16 Oktober 2026 • Sesi 3: 13.00 - 15.30 WIB (15 Guru)",
    date: "16 Oktober 2026",
    session: "Sesi 3 (13.00 - 15.30 WIB)",
    badge: "Guru • Lab 1 DKV",
    imageUrl: "/toeic/page-7.svg",
    description: "Daftar Bapak/Ibu Guru peserta tes seleksi TOEIC Tahap 3 bertempat di LAB 1 DKV Sesi 3 setelah KBM Khusus (H. Andri Susanto, ST s.d Triana Susana S.Pd).",
    role: "Guru"
  },
  {
    id: "toeic-page-8",
    pageNumber: 8,
    title: "Daftar Guru Peserta • LAB 2 DKV - Sesi 3",
    subtitle: "Jum'at, 16 Oktober 2026 • Sesi 3: 13.00 - 15.30 WIB (14 Guru)",
    date: "16 Oktober 2026",
    session: "Sesi 3 (13.00 - 15.30 WIB)",
    badge: "Guru • Lab 2 DKV",
    imageUrl: "/toeic/page-8.svg",
    description: "Daftar Bapak/Ibu Guru peserta tes seleksi TOEIC Tahap 3 bertempat di LAB 2 DKV Sesi 3 setelah KBM Khusus (Citra Indrawati, S.Pd s.d Danang Wisudhana, ST).",
    role: "Guru"
  }
];

export const toeicParticipants: ToeicParticipant[] = [
  // --- MURID: KAMIS, 15 OKTOBER 2026 ---
  // LAB 1 DKV - SESI 1 (08.00 - 10.00 WIB)
  { no: 1, name: "AFDHAN AFDIILLAH RUZ", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 2, name: "AHMAD WILDAN RAMDANI", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 3, name: "ALEX RAHMAN HAKIM", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 4, name: "ALVINO PRATAMA", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 5, name: "ANDHIKA WAHID SYAWALUDIN", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 6, name: "ANDIKA PRATAMA", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 7, name: "AQILLA YASMIN", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 8, name: "ARDIYANTO", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 9, name: "ARKAN ATAYA RAMADHAN", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 10, name: "AUDRY", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 11, name: "AUFA DWI AKBAR PRASETYO", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 12, name: "BAYU TIRTA MAULANA", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 13, name: "BangBang Irawan", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 14, name: "CHODHORI", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 15, name: "CHRISTIAN IMMANUEL PURBA", role: "Murid", lab: "LAB 1 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },

  // LAB 2 DKV - SESI 1 (08.00 - 10.00 WIB)
  { no: 16, name: "DZAKY ABDUL AZIZ", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 17, name: "FADHIL RIFQI KHAIRAN", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 18, name: "FAHRI FIJRA ARMENDA", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 19, name: "FAKHRI JAZMI RAZIQ", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 20, name: "FARHAN SEPTIANA RAMADANI", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 21, name: "FARREL FERDINAND", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 22, name: "FATHIN HAFIZH DARMAWAN", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 23, name: "GAMALIEL JOSEVANNO PASKAH TUMADE", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 24, name: "HANIFAH AZZAHRA", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 25, name: "IBRAHIMOVIC IRWANSYAH", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 26, name: "IZHAR HABIB MUSYAFFA", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 27, name: "Iqbal Marvel Saputra", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 28, name: "JOSHUA DEVIS MORENZA", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 29, name: "JUANITO SABONO ELATH", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 30, name: "KALYCA TAHARA AZULA SETIAWAN", role: "Murid", lab: "LAB 2 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },

  // LAB 4 DKV - SESI 1 (08.00 - 10.00 WIB)
  { no: 31, name: "KEVIN JULIVAN", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 32, name: "KHAIRUL ANNAM", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 33, name: "MARVEL DIANDRA SAPUTRA", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 34, name: "MELIA PUTRI", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 35, name: "MERISA KUMALA SARI", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 36, name: "MUFLIH MUZAKI AGUSTA", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 37, name: "MUHAMAD ALDI", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 38, name: "MUHAMAD RIZKY JANUAR LATTUMANUWIJ", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 39, name: "MUHAMMAD AQIL ILHAM", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 40, name: "MUHAMMAD FARHAN MAULANA", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 41, name: "MUHAMMAD FIRDAUS TRI SAPUTRA", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 42, name: "MUHAMMAD IBRAHIM SOLIHIN PUTRA", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 43, name: "MUHAMMAD RASYA ASSIDIQ", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 44, name: "MUHAMMAD RASYA IZHAR MALIQY", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 45, name: "MUHAMMAD RIO FEBRIAN", role: "Murid", lab: "LAB 4 DKV", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },

  // LAB TL - SESI 1 (08.00 - 10.00 WIB)
  { no: 46, name: "MUHAMMAD RIZAL ANWAR", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 47, name: "MUHAMMAD SAHRUL RAMADHAN", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 48, name: "MUHAMMAD SOFIANSYAH", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 49, name: "MUHAMMAD ZAHRAN KUSUMA", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 50, name: "Muhammad Rizky Ramadhan Labuwatu", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 51, name: "NABIL AL FAJAR THAHER", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 52, name: "NAUFAL DAFFA AZIZ", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 53, name: "NAUFAL MUSYAFFA", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 54, name: "NAYLA CEASARY ARTI UTOMO", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 55, name: "NAYRA ALMA SHAFIRA", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 56, name: "NUR HASIM", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 57, name: "PANGERAN FAADHIL HIZBULLAH", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 58, name: "PUTERA FAZAR RAMADHAN", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 59, name: "PUTRA JANABI NURRISQI", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },
  { no: 60, name: "PUTRA NAZAR MUTTAQIN", role: "Murid", lab: "LAB TL", sesi: 1, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "08.00 – 10.00 WIB" },

  // LAB 1 DKV - SESI 2 (10.30 - 12.30 WIB)
  { no: 61, name: "RAFAH WAHYUDI", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 62, name: "RAIHAN DWI RAHADI", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 63, name: "RAIHAN GALIH PRATAMA", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 64, name: "REVAL SETIO", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 65, name: "RIA SABITHA ZEIN", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 66, name: "RIFA DWIKY PADLIANSYAH", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 67, name: "RIFQI ARRAZZAQ", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 68, name: "RIFQI IRFANI", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },
  { no: 69, name: "Rafi Ananda Saputra", role: "Murid", lab: "LAB 1 DKV", sesi: 2, tanggal: "15 Oktober 2026", hari: "Kamis", waktu: "10.30 – 12.30 WIB" },

  // --- GURU: JUM'AT, 16 OKTOBER 2026 ---
  // GURU LAB 1 DKV - SESI 3 (13.00 - 15.30 WIB)
  { no: 70, name: "H. Andri Susanto, ST", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 71, name: "ARUM DHAMAYANTI, SE", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 72, name: "ELANG WIDYA P. ST", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 73, name: "RENI WIDIASTUTI , M.Kom", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 74, name: "DANU WIBOWO S.Pd", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 75, name: "KHOLID AFIFUDIN S.Pd", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 76, name: "ANNIKE K ST", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 77, name: "ANGGI ARINI W. S.Kom", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 78, name: "KHAIRUDDIN ARIF, ST", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 79, name: "SILVANY,S.Pd", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 80, name: "KUSNADI ST", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 81, name: "DEWI FITRIANI SE", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 82, name: "ISTI NURFIDA, S.Pd", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 83, name: "Azrichan S.Si", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 84, name: "TRIANA SUSANA S.Pd", role: "Guru", lab: "LAB 1 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },

  // GURU LAB 2 DKV - SESI 3 (13.00 - 15.30 WIB)
  { no: 85, name: "CITRA INDRAWATI, S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 86, name: "HUSAIN", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 87, name: "JOJI SETIONO, S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 88, name: "CHASIELDA ULUM AL DHIEN", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 89, name: "N. ERNI KUSTINI, S.Pdi", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 90, name: "ABAS BASUKI S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 91, name: "DANIEL SAARANI S.Ds", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 92, name: "DIMAS ARIANTO SE", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 93, name: "M. ARIF. S.Kom", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 94, name: "EVRI SANDHA", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 95, name: "FEBY PURNAMA S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 96, name: "Tias Hadaning, S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 97, name: "Agus Bachtiar,S.Pd", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" },
  { no: 98, name: "Danang Wisudhana,ST", role: "Guru", lab: "LAB 2 DKV", sesi: 3, tanggal: "16 Oktober 2026", hari: "Jum'at", waktu: "13.00 – 15.30 WIB" }
];
