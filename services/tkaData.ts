export interface TkaSlide {
  id: string;
  pageNumber: number;
  title: string;
  subtitle: string;
  lab: string;
  idServer: string;
  sesi: number;
  pukul: string;
  tanggal: string;
  badge: string;
  imageUrl: string;
  description: string;
  totalPeserta: number;
}

export interface TkaStudent {
  no: number;
  username: string;
  name: string;
  lab: string;
  idServer: string;
  sesi: number;
  pukul: string;
  tanggal: string;
  page: number;
}

export const tkaSlides: TkaSlide[] = [
  {
    id: "tka-page-1",
    pageNumber: 1,
    title: "Daftar Peserta TKA • Lab 1 (Sesi 1)",
    subtitle: "ID Server: K01020018-AG1K • Pukul: 07:00 - 08:45 WIB (15 Murid)",
    lab: "Lab 1",
    idServer: "K01020018-AG1K",
    sesi: 1,
    pukul: "07:00 - 08:45 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 1 • Sesi 1",
    imageUrl: "/tka/page-1.svg",
    description: "Lembar 1: Daftar hadir peserta TKA di Lab 1 Sesi 1 (I Kadek Chandra Satrya s.d Khairul Annam).",
    totalPeserta: 15
  },
  {
    id: "tka-page-2",
    pageNumber: 2,
    title: "Daftar Peserta TKA • Lab 1 (Sesi 2)",
    subtitle: "ID Server: K01020018-AG1K • Pukul: 09:30 - 11:15 WIB (15 Murid)",
    lab: "Lab 1",
    idServer: "K01020018-AG1K",
    sesi: 2,
    pukul: "09:30 - 11:15 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 1 • Sesi 2",
    imageUrl: "/tka/page-2.svg",
    description: "Lembar 2: Daftar hadir peserta TKA di Lab 1 Sesi 2 (Marvel Diandra Saputra s.d Audry).",
    totalPeserta: 15
  },
  {
    id: "tka-page-3",
    pageNumber: 3,
    title: "Daftar Peserta TKA • Lab 2 (Sesi 1)",
    subtitle: "ID Server: K01020018-BQ4K • Pukul: 07:00 - 08:45 WIB (15 Murid)",
    lab: "Lab 2",
    idServer: "K01020018-BQ4K",
    sesi: 1,
    pukul: "07:00 - 08:45 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 2 • Sesi 1",
    imageUrl: "/tka/page-3.svg",
    description: "Lembar 3: Daftar hadir peserta TKA di Lab 2 Sesi 1 (Fathir Alinsky Canavaro s.d Andika Pratama).",
    totalPeserta: 15
  },
  {
    id: "tka-page-4",
    pageNumber: 4,
    title: "Daftar Peserta TKA • Lab 2 (Sesi 2)",
    subtitle: "ID Server: K01020018-BQ4K • Pukul: 09:30 - 11:15 WIB (15 Murid)",
    lab: "Lab 2",
    idServer: "K01020018-BQ4K",
    sesi: 2,
    pukul: "09:30 - 11:15 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 2 • Sesi 2",
    imageUrl: "/tka/page-4.svg",
    description: "Lembar 4: Daftar hadir peserta TKA di Lab 2 Sesi 2 (Fahri Pratama Mulya s.d Rizki Farel Novriansyah).",
    totalPeserta: 15
  },
  {
    id: "tka-page-5",
    pageNumber: 5,
    title: "Daftar Peserta TKA • Lab 3 (Sesi 1)",
    subtitle: "ID Server: K01020018-CQ6K • Pukul: 07:00 - 08:45 WIB (15 Murid)",
    lab: "Lab 3",
    idServer: "K01020018-CQ6K",
    sesi: 1,
    pukul: "07:00 - 08:45 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 3 • Sesi 1",
    imageUrl: "/tka/page-5.svg",
    description: "Lembar 5: Daftar hadir peserta TKA di Lab 3 Sesi 1 (Nayla Ceasary Arti Utomo s.d Christian Immanuel Purba).",
    totalPeserta: 15
  },
  {
    id: "tka-page-6",
    pageNumber: 6,
    title: "Daftar Peserta TKA • Lab 3 (Sesi 2)",
    subtitle: "ID Server: K01020018-CQ6K • Pukul: 09:30 - 11:15 WIB (14 Murid)",
    lab: "Lab 3",
    idServer: "K01020018-CQ6K",
    sesi: 2,
    pukul: "09:30 - 11:15 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab 3 • Sesi 2",
    imageUrl: "/tka/page-6.svg",
    description: "Lembar 6: Daftar hadir peserta TKA di Lab 3 Sesi 2 (Rizky Aditya s.d Sigit Wahyudi).",
    totalPeserta: 14
  },
  {
    id: "tka-page-7",
    pageNumber: 7,
    title: "Daftar Peserta TKA • Lab TL (Sesi 1)",
    subtitle: "ID Server: K01020018-DY7K • Pukul: 07:00 - 08:45 WIB (15 Murid)",
    lab: "Lab TL",
    idServer: "K01020018-DY7K",
    sesi: 1,
    pukul: "07:00 - 08:45 WIB",
    tanggal: "26 - 27 Oktober 2026",
    badge: "Lab TL • Sesi 1",
    imageUrl: "/tka/page-7.svg",
    description: "Lembar 7: Daftar hadir peserta TKA di Lab Teknik Logistik (TL) Sesi 1 (Alvino Pratama s.d Alex Rahman Hakim).",
    totalPeserta: 15
  }
];

export const tkaStudents: TkaStudent[] = [
  // --- LEMBAR 1: LAB 1 - SESI 1 (15 Murid) ---
  { no: 1, username: "K0102001800018", name: "I KADEK CHANDRA SATRYA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 2, username: "K0102001800027", name: "BangBang Irawan", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 3, username: "K0102001800036", name: "DZAKY ABDUL AZIZ", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 4, username: "K0102001800045", name: "MUHAMMAD SOFIANSYAH", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 5, username: "K0102001800054", name: "AFDHAN AFDIILLAH RUZ", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 6, username: "K0102001800063", name: "NAUFAL MUSYAFFA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 7, username: "K0102001800072", name: "TEGAR SETIAWAN", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 8, username: "K0102001800089", name: "MUHAMMAD FIRDAUS TRI SAPUTRA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 9, username: "K0102001800098", name: "MUFLIH MUZAKI AGUSTA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 10, username: "K0102001800107", name: "IZHAR HABIB MUSYAFFA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 11, username: "K0102001800116", name: "INDRA DAMAR AL - SAMPURNA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 12, username: "K0102001800125", name: "MERISA KUMALA SARI", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 13, username: "K0102001800134", name: "RIA SABITHA ZEIN", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 14, username: "K0102001800143", name: "MELIA PUTRI", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },
  { no: 15, username: "K0102001800152", name: "KHAIRUL ANNAM", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 1 },

  // --- LEMBAR 2: LAB 1 - SESI 2 (15 Murid) ---
  { no: 16, username: "K0102001800614", name: "MARVEL DIANDRA SAPUTRA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 17, username: "K0102001800623", name: "FARREL FERDINAND", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 18, username: "K0102001800632", name: "MUHAMAD ALDI", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 19, username: "K0102001800649", name: "NUR HASIM", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 20, username: "K0102001800658", name: "ARDIYANTO", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 21, username: "K0102001800667", name: "FAHRI FIJRA ARMENDA", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 22, username: "K0102001800676", name: "CHODHORI", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 23, username: "K0102001800685", name: "FARHAN SEPTIANA RAMADANI", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 24, username: "K0102001800694", name: "MUHAMMAD RASYA ASSIDIQ", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 25, username: "K0102001800703", name: "DHAFA YUSUF AZHAR", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 26, username: "K0102001800712", name: "NAUFAL DAFFA AZIZ", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 27, username: "K0102001800729", name: "MUHAMMAD FIRMANSYAH", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 28, username: "K0102001800738", name: "IBRAHIMOVIC IRWANSYAH", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 29, username: "K0102001800747", name: "MUHAMMAD AQIL ILHAM", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },
  { no: 30, username: "K0102001800756", name: "AUDRY", lab: "Lab 1", idServer: "K01020018-AG1K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 2 },

  // --- LEMBAR 3: LAB 2 - SESI 1 (15 Murid) ---
  { no: 31, username: "K0102001800169", name: "FATHIR ALINSKY CANAVARO", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 32, username: "K0102001800178", name: "HANIFAH AZZAHRA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 33, username: "K0102001800187", name: "FATHIN HAFIZH DARMAWAN", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 34, username: "K0102001800196", name: "SILVIANA FEBRIYANTI", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 35, username: "K0102001800205", name: "AHMAD WILDAN RAMDANI", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 36, username: "K0102001800214", name: "AQILLA YASMIN", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 37, username: "K0102001800223", name: "FADHIL RIFQI KHAIRAN", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 38, username: "K0102001800232", name: "PUTRA JANABI NURRISQI", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 39, username: "K0102001800249", name: "MAURINHO GERRARDI", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 40, username: "K0102001800258", name: "Julian Afdillah", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 41, username: "K0102001800267", name: "MUHAMMAD RASYA IZHAR MALIQY", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 42, username: "K0102001800276", name: "TIARA ANGGRAENI", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 43, username: "K0102001800285", name: "PANGERAN FAADHIL HIZBULLAH", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 44, username: "K0102001800294", name: "ARKAN ATAYA RAMADHAN", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },
  { no: 45, username: "K0102001800303", name: "ANDIKA PRATAMA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 3 },

  // --- LEMBAR 4: LAB 2 - SESI 2 (15 Murid) ---
  { no: 46, username: "K0102001800765", name: "FAHRI PRATAMA MULYA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 47, username: "K0102001800774", name: "FARLIE LAILATUL QODRI LATURUA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 48, username: "K0102001800783", name: "RIZSKI AULIA PUTRA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 49, username: "K0102001800792", name: "TANZILAL NOTO PRAWIRO", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 50, username: "K0102001800809", name: "Dava Arya Pratama", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 51, username: "K0102001800818", name: "FARID RODIKIN", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 52, username: "K0102001800827", name: "MUHAMAD ARIF ALBAR", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 53, username: "K0102001800836", name: "MUHAMMAD RIZAL ANWAR", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 54, username: "K0102001800845", name: "FAKHRI JAZMI RAZIQ", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 55, username: "K0102001800854", name: "Iqbal Marvel Saputra", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 56, username: "K0102001800863", name: "JUANITO SABONO ELATH", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 57, username: "K0102001800872", name: "MOCHAMMAD DAVA FLADYO", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 58, username: "K0102001800889", name: "SAVA ALKEYZA", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 59, username: "K0102001800898", name: "NABIL AL FAJAR THAHER", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },
  { no: 60, username: "K0102001800907", name: "RIZKI FAREL NOVRIANSYAH", lab: "Lab 2", idServer: "K01020018-BQ4K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 4 },

  // --- LEMBAR 5: LAB 3 - SESI 1 (15 Murid) ---
  { no: 61, username: "K0102001800312", name: "NAYLA CEASARY ARTI UTOMO", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 62, username: "K0102001800329", name: "YULIYANA PUTRI", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 63, username: "K0102001800338", name: "REVAL SETIO", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 64, username: "K0102001800347", name: "MUHAMAD RIZKY JANUAR LATTUMANUWIJ", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 65, username: "K0102001800356", name: "SEPTIAWAN SAPUTRA BATAH", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 66, username: "K0102001800365", name: "NAYRA ALMA SHAFIRA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 67, username: "K0102001800374", name: "GAMALIEL JOSEVANNO PASKAH TUMADE", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 68, username: "K0102001800383", name: "SESHA KURNIASIH", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 69, username: "K0102001800392", name: "ABIAN KAUTSAR BAHRY", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 70, username: "K0102001800409", name: "KALYCA TAHARA AZULA SETIAWAN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 71, username: "K0102001800418", name: "RIFQI ARRAZZAQ", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 72, username: "K0102001800427", name: "M. Rizky Ramadhan Labuwatu", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 73, username: "K0102001800436", name: "RAIHAN GALIH PRATAMA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 74, username: "K0102001800445", name: "RAIHAN DWI RAHADI", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },
  { no: 75, username: "K0102001800454", name: "CHRISTIAN IMMANUEL PURBA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 5 },

  // --- LEMBAR 6: LAB 3 - SESI 2 (14 Murid) ---
  { no: 76, username: "K0102001800916", name: "RIZKY ADITYA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 77, username: "K0102001800925", name: "Rayhanul Hakim", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 78, username: "K0102001800934", name: "KEVIN JULIVAN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 79, username: "K0102001800943", name: "ANDHIKA WAHID SYAWALUDIN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 80, username: "K0102001800952", name: "MUHAMMAD FARHAN MAULANA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 81, username: "K0102001800969", name: "MUHAMMAD RIO FEBRIAN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 82, username: "K0102001800978", name: "RIFA DWIKY PADLIANSYAH", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 83, username: "K0102001800987", name: "HIDAYATUR RAIHAN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 84, username: "K0102001800996", name: "JOSHUA DEVIS MORENZA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 85, username: "K0102001801005", name: "MUHAMMAD RIZQY AKBAR", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 86, username: "K0102001801014", name: "PUTERA FAZAR RAMADHAN", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 87, username: "K0102001801023", name: "Muhamad Vickry Pratama", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 88, username: "K0102001801032", name: "MUHAMMAD ZAHRAN KUSUMA", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },
  { no: 89, username: "K0102001801049", name: "SIGIT WAHYUDI", lab: "Lab 3", idServer: "K01020018-CQ6K", sesi: 2, pukul: "09:30 - 11:15 WIB", tanggal: "26 - 27 Oktober 2026", page: 6 },

  // --- LEMBAR 7: LAB TL - SESI 1 (15 Murid) ---
  { no: 90, username: "K0102001800463", name: "ALVINO PRATAMA", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 91, username: "K0102001800472", name: "AUFA DWI AKBAR PRASETYO", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 92, username: "K0102001800489", name: "DESCAM DANUARTA", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 93, username: "K0102001800498", name: "MUHAMMAD SAHRUL RAMADHAN", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 94, username: "K0102001800507", name: "Nabil Syahputra", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 95, username: "K0102001800516", name: "Muhammad Rizky Zulkarnain", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 96, username: "K0102001800525", name: "MUHAMMAD IBRAHIM SOLIHIN PUTRA", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 97, username: "K0102001800534", name: "KHOERU DZIKRI", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 98, username: "K0102001800543", name: "YUDA SAPUTRA", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 99, username: "K0102001800552", name: "MUHAMMAD FATHIR AL QAHTANI", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 100, username: "K0102001800569", name: "RIFQI IRFANI", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 101, username: "K0102001800578", name: "PUTRA NAZAR MUTTAQIN", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 102, username: "K0102001800587", name: "RAFAH WAHYUDI", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 103, username: "K0102001800596", name: "Rafi Ananda Saputra", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 },
  { no: 104, username: "K0102001800605", name: "ALEX RAHMAN HAKIM", lab: "Lab TL", idServer: "K01020018-DY7K", sesi: 1, pukul: "07:00 - 08:45 WIB", tanggal: "26 - 27 Oktober 2026", page: 7 }
];
