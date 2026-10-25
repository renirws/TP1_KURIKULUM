export interface TkaAnbkLabAssignment {
  lab: string;
  proktorName: string;
  proktorNumber: number;
  active: boolean;
}

export interface TkaAnbkShift {
  name: string;
  shiftCode: 'Shift I' | 'Shift II';
  waktu: string;
  durasi: string;
  mataUji: string;
  survey: string;
  labs: TkaAnbkLabAssignment[];
}

export interface TkaAnbkDaySchedule {
  id: string;
  hari: string;
  tanggalLengkap: string;
  tanggalRaw: string;
  mataUjiUtama: string;
  shifts: TkaAnbkShift[];
}

export interface ProktorItem {
  id: number;
  label: string;
  nama: string;
  jabatan: string;
  penugasan: string;
  color: string;
}

export interface TeknisiItem {
  id: number;
  label: string;
  nama: string;
  jabatan: string;
  tugas: string;
  color: string;
}

export const tkaAnbkDocument = {
  title: "JADWAL TKA - ANBK TAHUN PELAJARAN 2026-2027",
  subTitle: "SMK TANJUNG PRIOK 1 JAKARTA",
  nomorSurat: "Jadwal Resmi/TKA-ANBK/SMKTP01/X/2026",
  tanggalDiterbitkan: "Jakarta, 21 Oktober 2026",
  kepalaSekolah: "H. Andri Susanto, ST",
  wakilKurikulum: "Reni Widyastuti, M.Kom",
  imageUrl: "/assets/aistudio/jadwal_tka-anbk_2026-2027_c9ac7e6a.jpg",
  pdfDaftarSiswaUrl: "/assets/aistudio/DAFTAR_SISWA_TKA_9a5f3392.pdf",
  totalHari: 4,
  totalShift: 2,
  totalLab: 4,
  totalPeserta: 104
};

export const proktorList: ProktorItem[] = [
  {
    id: 1,
    label: "Proktor 1",
    nama: "Anggi Arini, S.Kom",
    jabatan: "Proktor Utama Ruang Lab 1",
    penugasan: "Standby Shift I & Shift II di Laboratorium 1 (Semua Hari)",
    color: "blue"
  },
  {
    id: 2,
    label: "Proktor 2",
    nama: "M. Arif, S.Kom",
    jabatan: "Proktor Utama Ruang Lab 2",
    penugasan: "Standby Shift I & Shift II di Laboratorium 2 (Semua Hari)",
    color: "indigo"
  },
  {
    id: 3,
    label: "Proktor 3",
    nama: "Husain",
    jabatan: "Proktor Utama Ruang Lab 3",
    penugasan: "Standby Shift I & Shift II di Laboratorium 3 (Semua Hari)",
    color: "purple"
  },
  {
    id: 4,
    label: "Proktor 4",
    nama: "Khairudin Arif, ST",
    jabatan: "Proktor Ruang Lab 4",
    penugasan: "Standby Shift I di Laboratorium 4 (Semua Hari)",
    color: "amber"
  }
];

export const teknisiList: TeknisiItem[] = [
  {
    id: 1,
    label: "Teknisi 1",
    nama: "Daniel Saarani, S.Ds",
    jabatan: "Teknisi Jaringan & Server Pusat",
    tugas: "Manajemen Server TKA, Jaringan LAN 4 Lab, dan sinkronisasi data klien",
    color: "emerald"
  },
  {
    id: 2,
    label: "Teknisi 2",
    nama: "Rizal",
    jabatan: "Teknisi Hardware & Troubleshooting",
    tugas: "Pemeliharaan PC Klien, UPS cadangan, peripheral, dan koneksi internet",
    color: "teal"
  }
];

export const tkaAnbkSchedule: TkaAnbkDaySchedule[] = [
  {
    id: "senin",
    hari: "Senin",
    tanggalLengkap: "Senin, 26 Oktober 2026",
    tanggalRaw: "26/10/2026",
    mataUjiUtama: "Bahasa Indonesia & Survey Karakter",
    shifts: [
      {
        name: "Shift I (Pagi)",
        shiftCode: "Shift I",
        waktu: "07.00 - 09.00 WIB",
        durasi: "120 Menit",
        mataUji: "Bahasa Indonesia",
        survey: "Survey Karakter",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "Khairudin Arif, ST", proktorNumber: 4, active: true }
        ]
      },
      {
        name: "Shift II (Siang)",
        shiftCode: "Shift II",
        waktu: "09.30 - 11.30 WIB",
        durasi: "120 Menit",
        mataUji: "Bahasa Indonesia",
        survey: "Survey Karakter",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "-", proktorNumber: 0, active: false }
        ]
      }
    ]
  },
  {
    id: "selasa",
    hari: "Selasa",
    tanggalLengkap: "Selasa, 27 Oktober 2026",
    tanggalRaw: "27/10/2026",
    mataUjiUtama: "Bahasa Inggris & Survey Lingkungan Belajar",
    shifts: [
      {
        name: "Shift I (Pagi)",
        shiftCode: "Shift I",
        waktu: "07.00 - 09.00 WIB",
        durasi: "120 Menit",
        mataUji: "Bahasa Inggris",
        survey: "Survey Lingkungan Belajar",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "Khairudin Arif, ST", proktorNumber: 4, active: true }
        ]
      },
      {
        name: "Shift II (Siang)",
        shiftCode: "Shift II",
        waktu: "09.30 - 11.30 WIB",
        durasi: "120 Menit",
        mataUji: "Bahasa Inggris",
        survey: "Survey Lingkungan Belajar",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "-", proktorNumber: 0, active: false }
        ]
      }
    ]
  },
  {
    id: "rabu",
    hari: "Rabu",
    tanggalLengkap: "Rabu, 28 Oktober 2026",
    tanggalRaw: "28/10/2026",
    mataUjiUtama: "Matematika",
    shifts: [
      {
        name: "Shift I (Pagi)",
        shiftCode: "Shift I",
        waktu: "07.00 - 09.00 WIB",
        durasi: "120 Menit",
        mataUji: "Matematika",
        survey: "-",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "Khairudin Arif, ST", proktorNumber: 4, active: true }
        ]
      },
      {
        name: "Shift II (Siang)",
        shiftCode: "Shift II",
        waktu: "09.30 - 11.30 WIB",
        durasi: "120 Menit",
        mataUji: "Matematika",
        survey: "-",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "-", proktorNumber: 0, active: false }
        ]
      }
    ]
  },
  {
    id: "kamis",
    hari: "Kamis",
    tanggalLengkap: "Kamis, 29 Oktober 2026",
    tanggalRaw: "29/10/2026",
    mataUjiUtama: "Projek Kreatif & KWH & PPKN",
    shifts: [
      {
        name: "Shift I (Pagi)",
        shiftCode: "Shift I",
        waktu: "07.00 - 09.00 WIB",
        durasi: "120 Menit",
        mataUji: "Projek Kreatif & Kewirausahaan (KWH) & PPKN",
        survey: "-",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "Khairudin Arif, ST", proktorNumber: 4, active: true }
        ]
      },
      {
        name: "Shift II (Siang)",
        shiftCode: "Shift II",
        waktu: "09.30 - 11.30 WIB",
        durasi: "120 Menit",
        mataUji: "Projek Kreatif & Kewirausahaan (KWH) & PPKN",
        survey: "-",
        labs: [
          { lab: "Lab 1", proktorName: "Anggi Arini, S.Kom", proktorNumber: 1, active: true },
          { lab: "Lab 2", proktorName: "M. Arif, S.Kom", proktorNumber: 2, active: true },
          { lab: "Lab 3", proktorName: "Husain", proktorNumber: 3, active: true },
          { lab: "Lab 4", proktorName: "-", proktorNumber: 0, active: false }
        ]
      }
    ]
  }
];
