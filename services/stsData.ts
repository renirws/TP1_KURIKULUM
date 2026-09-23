export interface STSProctor {
  code: string;
  name: string;
}

export interface STSSubject {
  code: string;
  name: string;
}

export interface STSScheduleSlot {
  day: string;
  date: string;
  jam: number;
  time: string;
  isRest?: boolean;
  classSubjects: {
    [classCode: string]: string; // subject code e.g. "07", "-"
  };
  roomProctors: {
    [roomNumber: number]: string; // proctor code e.g. "03", "-"
  };
}

export interface STSSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
  description: string;
}

export const stsSlides: STSSlide[] = [
  {
    id: "sts-page-1",
    title: "Matriks Jadwal Asesmen & Pengawas STS",
    subtitle: "Jadwal Pelaksanaan 28 September – 2 Oktober 2026 (Kelas X, XI, XII)",
    badge: "Lembar 1: Jadwal Utama",
    imageUrl: "/sts/page-1.svg",
    description: "Matriks lengkap mata pelajaran uji per jam, per hari, alokasi kelas (X DKV, MK, MO, TL; XI DKV, MK, MO, TL; XII DKV, MK, MO, TL), dan kode pengawas di Ruang 1 s.d 13."
  },
  {
    id: "sts-page-2",
    title: "Daftar Kode & Nama Pengawas Ruang (22 Guru)",
    subtitle: "Lampiran Halaman 2: Kode Pengawas 01-22 & Kode Mapel 01-06",
    badge: "Lembar 2: Kode Pengawas",
    imageUrl: "/sts/page-2.svg",
    description: "Daftar 22 Bapak/Ibu Guru pengawas ruang ujian STS Ganjil beserta kode referensi KD 01 s.d KD 22 dan daftar mata pelajaran umum pembuka."
  },
  {
    id: "sts-page-3",
    title: "Daftar Kode & Nama Mata Pelajaran Diujikan (Bagian 1)",
    subtitle: "Lampiran Halaman 2: Kode Mapel KD 07 s.d KD 52",
    badge: "Lembar 3: Mapel Kejuruan I",
    imageUrl: "/sts/page-3.svg",
    description: "Rincian mata pelajaran normatif, adaptif, dan kejuruan konsentrasi DKV, TKRO, Teknik Pemesinan Kapal (TPK), Matematika, Bahasa Inggris, dan Informatika."
  },
  {
    id: "sts-page-4",
    title: "Daftar Kode Mata Pelajaran (Bagian 2) & Lembar Pengesahan",
    subtitle: "Lampiran Halaman 2: Kode Mapel KD 53 s.d KD 69 & Pengesahan Kepala Sekolah",
    badge: "Lembar 4: Mapel II & Sah",
    imageUrl: "/sts/page-4.svg",
    description: "Rincian mata pelajaran Teknik Logistik, Muatan Lokal seni kriya & budaya lokal, PKK/KWH, mapel pilihan serta tanda tangan resmi Kepala Sekolah dan Waka Kurikulum."
  }
];

export const stsProctors: STSProctor[] = [
  { code: "01", name: "ABAS BASUKI S.Pd" },
  { code: "02", name: "Agus Bachtiar, S.Pd" },
  { code: "03", name: "Anggi Arini Widiastuti,S.Kom" },
  { code: "04", name: "ANNIKE K ST" },
  { code: "05", name: "Azrichan S.Si" },
  { code: "06", name: "CHASIELDA ULUM AL DHIEN,ST" },
  { code: "07", name: "CITRA INDRAWATI, S.Pd" },
  { code: "08", name: "Danang Wisudhana, ST" },
  { code: "09", name: "DANIEL SAARANI S.Ds" },
  { code: "10", name: "DEWI FITRIANI SE" },
  { code: "11", name: "DIMAS ARIANTO SE" },
  { code: "12", name: "EVRI SANDHA" },
  { code: "13", name: "FEBY PURNAMA S.Pd" },
  { code: "14", name: "HUSAIN" },
  { code: "15", name: "ISTI NURFIDA, S.Pd" },
  { code: "16", name: "JOJI SETIONO, S.Pd" },
  { code: "17", name: "KHAIRUDDIN ARIF, ST" },
  { code: "18", name: "KHOLID AFIFUDIN S.Pd" },
  { code: "19", name: "M. ARIF. S.Kom" },
  { code: "20", name: "N. ERNI KUSTINI, S.Pdi" },
  { code: "21", name: "Tias Hadaning, S.Pd" },
  { code: "22", name: "TRIANA SUSANA S.Pd" }
];

export const stsSubjects: { [code: string]: string } = {
  "01": "KODING & AI",
  "02": "PENDIDIKAN PANCASILA",
  "03": "BAHASA INDONESIA",
  "04": "PENJASORKES",
  "05": "SEJARAH INDONESIA",
  "06": "SENI (musik, rupa, teater, tari)",
  "07": "Pendidikan Agama",
  "08": "Pendidikan Agama",
  "09": "Pendidikan Pancasila & Kewarganegaraan (PKN)",
  "10": "Bahasa Indonesia",
  "11": "Penjasorkes",
  "12": "Sejarah Indonesia",
  "13": "Pendidikan Agama",
  "14": "Pendidikan Pancasila & Kewarganegaraan (PKN)",
  "15": "Bahasa Indonesia",
  "16": "Matematika",
  "17": "Bahasa Inggris",
  "18": "Informatika",
  "19": "IPAS (Ilmu Pengetahuan Alam & Sosial)",
  "20": "Matematika",
  "21": "Bahasa Inggris",
  "22": "Matematika",
  "23": "Bahasa Inggris",
  "24": "1. Dasar Desain Komunikasi Visual",
  "25": "2. Sketsa Ilustrasi",
  "26": "3. Typography",
  "27": "4. Dasar Fotografi",
  "28": "5. Komputer Grafis",
  "29": "DESAIN GRAFIS PERCETAKAN",
  "30": "ANIMASI",
  "31": "AUDIO VIDEO",
  "32": "DESAIN GRAFIS Publikasi",
  "33": "Motion Grafik",
  "34": "AUDIO VIDEO",
  "35": "1. Gambar Teknik",
  "36": "2. Pekerjaan Dasar Otomotif",
  "37": "3. Dasar - Dasar Teknik Otomotif",
  "38": "4. Bisnis & Wirausaha Otomotif",
  "39": "SISTEM ENGINE TKRO",
  "40": "SISTEM ELECTRICAL TKRO",
  "41": "SISTEM CHASIS & PEMINDAHAN DAYA TKRO",
  "42": "SISTEM ENGINE TKRO",
  "43": "SISTEM ELECTRICAL TKRO",
  "44": "SISTEM CHASIS & PEMINDAHAN DAYA TKRO",
  "45": "1. Gambar Teknik",
  "46": "2. Pengetahuan Dasar Perkapalan",
  "47": "3. Pekerjaan Dasar Teknik",
  "48": "PEKERJAAN PELAT DAN SISTIM PEMIPAAN KAPAL",
  "49": "ELEMEN MESIN DAN PENGGERAK KAPAL",
  "50": "PEKERJAAN MESIN PERKAKAS",
  "51": "ELEMEN MESIN DAN PENGGERAK KAPAL",
  "52": "PEKERJAAN MESIN PERKAKAS",
  "53": "PEKERJAAN MESIN FLUIDA",
  "54": "1. Dasar - dasar Logistik",
  "55": "2. Material Handling Equipment",
  "56": "3. Pengelolaan Gudang & K3LH",
  "57": "Aktivitas Pergudangan",
  "58": "Pengemasan Barang",
  "59": "Perdagangan Internasional",
  "60": "TEKNIK PENGIRIMAN BARANG",
  "61": "Sistem Informasi Logistik",
  "62": "Sistem Pengadaan",
  "63": "MAPEL MULOK : Seni Kriya",
  "64": "MUATAN LOKAL (MULOK) Seni Kriya",
  "65": "Kreatifitas, Inovasi & KWH",
  "66": "Kreatifitas, Inovasi dan KWH",
  "67": "MAPEL MULOK : Pengembangan Produk Kreatif Budaya Lokal",
  "68": "MAPEL PILIHAN",
  "69": "MAPEL PILIHAN"
};

export const roomInfo = [
  { room: 1, classCode: "X-DKV-1", name: "Kelas X DKV 1" },
  { room: 2, classCode: "X-MK-1", name: "Kelas X Mesin Kapal 1" },
  { room: 3, classCode: "X-MO-1", name: "Kelas X Otomotif 1" },
  { room: 4, classCode: "X-MO-2", name: "Kelas X Otomotif 2" },
  { room: 5, classCode: "X-TL-1", name: "Kelas X Logistik 1" },
  { room: 6, classCode: "XI-DKV-1", name: "Kelas XI DKV 1" },
  { room: 7, classCode: "XI-MK-1", name: "Kelas XI Mesin Kapal 1" },
  { room: 8, classCode: "XI-MO-1", name: "Kelas XI Otomotif 1" },
  { room: 9, classCode: "XI-TL-1", name: "Kelas XI Logistik 1" },
  { room: 10, classCode: "XII-DKV-1", name: "Kelas XII DKV 1" },
  { room: 11, classCode: "XII-MK-1", name: "Kelas XII Mesin Kapal 1" },
  { room: 12, classCode: "XII-MO-1", name: "Kelas XII Otomotif 1" },
  { room: 13, classCode: "XII-TL-1", name: "Kelas XII Logistik 1" }
];

export const stsScheduleDays = [
  {
    day: "Senin",
    date: "28 September 2026",
    hariKe: "Hari 1",
    sessions: [
      {
        jam: 1,
        time: "07:00 - 08:30 WIB",
        matpel: {
          "X-DKV-1": "07", "X-MK-1": "07", "X-MO-1": "07", "X-MO-2": "07", "X-TL-1": "07",
          "XI-DKV-1": "07", "XI-MK-1": "07", "XI-MO-1": "07", "XI-TL-1": "07",
          "XII-DKV-1": "07", "XII-MK-1": "07", "XII-MO-1": "07", "XII-TL-1": "07"
        },
        proctors: {
          1: "03", 2: "13", 3: "05", 4: "21", 5: "10", 6: "14", 7: "01", 8: "20", 9: "07", 10: "11", 11: "18", 12: "08", 13: "17"
        }
      },
      {
        jam: 2,
        time: "08:40 - 10:00 WIB",
        matpel: {
          "X-DKV-1": "02", "X-MK-1": "02", "X-MO-1": "02", "X-MO-2": "02", "X-TL-1": "02",
          "XI-DKV-1": "09", "XI-MK-1": "09", "XI-MO-1": "09", "XI-TL-1": "09",
          "XII-DKV-1": "14", "XII-MK-1": "14", "XII-MO-1": "14", "XII-TL-1": "14"
        },
        proctors: {
          1: "03", 2: "13", 3: "05", 4: "21", 5: "10", 6: "14", 7: "01", 8: "20", 9: "07", 10: "11", 11: "18", 12: "08", 13: "17"
        }
      },
      {
        jam: 3,
        time: "10:30 - 12:00 WIB",
        matpel: {
          "X-DKV-1": "03", "X-MK-1": "03", "X-MO-1": "03", "X-MO-2": "03", "X-TL-1": "03",
          "XI-DKV-1": "10", "XI-MK-1": "10", "XI-MO-1": "10", "XI-TL-1": "10",
          "XII-DKV-1": "15", "XII-MK-1": "15", "XII-MO-1": "15", "XII-TL-1": "15"
        },
        proctors: {
          1: "07", 2: "03", 3: "13", 4: "05", 5: "21", 6: "10", 7: "14", 8: "01", 9: "20", 10: "18", 11: "11", 12: "17", 13: "08"
        }
      }
    ]
  },
  {
    day: "Selasa",
    date: "29 September 2026",
    hariKe: "Hari 2",
    sessions: [
      {
        jam: 1,
        time: "07:00 - 08:30 WIB",
        matpel: {
          "X-DKV-1": "16", "X-MK-1": "16", "X-MO-1": "16", "X-MO-2": "16", "X-TL-1": "16",
          "XI-DKV-1": "20", "XI-MK-1": "20", "XI-MO-1": "20", "XI-TL-1": "20",
          "XII-DKV-1": "22", "XII-MK-1": "22", "XII-MO-1": "22", "XII-TL-1": "22"
        },
        proctors: {
          1: "12", 2: "22", 3: "16", 4: "21", 5: "17", 6: "01", 7: "04", 8: "20", 9: "07", 10: "03", 11: "11", 12: "06", 13: "09"
        }
      },
      {
        jam: 2,
        time: "08:30 - 10:00 WIB",
        matpel: {
          "X-DKV-1": "05", "X-MK-1": "05", "X-MO-1": "05", "X-MO-2": "05", "X-TL-1": "05",
          "XI-DKV-1": "12", "XI-MK-1": "12", "XI-MO-1": "12", "XI-TL-1": "12",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "12", 2: "22", 3: "16", 4: "21", 5: "17", 6: "01", 7: "04", 8: "20", 9: "07", 10: "-", 11: "-", 12: "-", 13: "-"
        }
      },
      {
        jam: 3,
        time: "10:30 - 12:00 WIB",
        matpel: {
          "X-DKV-1": "17", "X-MK-1": "17", "X-MO-1": "17", "X-MO-2": "17", "X-TL-1": "17",
          "XI-DKV-1": "21", "XI-MK-1": "21", "XI-MO-1": "21", "XI-TL-1": "21",
          "XII-DKV-1": "23", "XII-MK-1": "23", "XII-MO-1": "23", "XII-TL-1": "23"
        },
        proctors: {
          1: "07", 2: "12", 3: "22", 4: "16", 5: "21", 6: "17", 7: "01", 8: "04", 9: "20", 10: "09", 11: "06", 12: "03", 13: "11"
        }
      }
    ]
  },
  {
    day: "Rabu",
    date: "30 September 2026",
    hariKe: "Hari 3",
    sessions: [
      {
        jam: 1,
        time: "07:00 - 08:30 WIB",
        matpel: {
          "X-DKV-1": "06", "X-MK-1": "06", "X-MO-1": "06", "X-MO-2": "06", "X-TL-1": "06",
          "XI-DKV-1": "11", "XI-MK-1": "11", "XI-MO-1": "11", "XI-TL-1": "11",
          "XII-DKV-1": "64", "XII-MK-1": "64", "XII-MO-1": "64", "XII-TL-1": "64"
        },
        proctors: {
          1: "14", 2: "08", 3: "13", 4: "12", 5: "22", 6: "15", 7: "16", 8: "18", 9: "06", 10: "09", 11: "20", 12: "04", 13: "10"
        }
      },
      {
        jam: 2,
        time: "08:30 - 10:00 WIB",
        matpel: {
          "X-DKV-1": "04", "X-MK-1": "04", "X-MO-1": "04", "X-MO-2": "04", "X-TL-1": "04",
          "XI-DKV-1": "63", "XI-MK-1": "63", "XI-MO-1": "63", "XI-TL-1": "63",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "14", 2: "08", 3: "13", 4: "12", 5: "22", 6: "15", 7: "16", 8: "18", 9: "06", 10: "09", 11: "20", 12: "04", 13: "10"
        }
      },
      {
        jam: 3,
        time: "10:15 - 11:30 WIB",
        matpel: {
          "X-DKV-1": "18", "X-MK-1": "18", "X-MO-1": "18", "X-MO-2": "18", "X-TL-1": "18",
          "XI-DKV-1": "29", "XI-MK-1": "48", "XI-MO-1": "39", "XI-TL-1": "57",
          "XII-DKV-1": "32", "XII-MK-1": "51", "XII-MO-1": "42", "XII-TL-1": "60"
        },
        proctors: {
          1: "06", 2: "14", 3: "08", 4: "13", 5: "12", 6: "22", 7: "15", 8: "16", 9: "18", 10: "20", 11: "10", 12: "09", 13: "04"
        }
      },
      {
        jam: 4,
        time: "11:30 - 12:30 WIB",
        matpel: {
          "X-DKV-1": "28", "X-MK-1": "-", "X-MO-1": "-", "X-MO-2": "-", "X-TL-1": "-",
          "XI-DKV-1": "-", "XI-MK-1": "-", "XI-MO-1": "-", "XI-TL-1": "-",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "06", 2: "-", 3: "-", 4: "-", 5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-", 11: "-", 12: "-", 13: "-"
        }
      }
    ]
  },
  {
    day: "Kamis",
    date: "1 Oktober 2026",
    hariKe: "Hari 4",
    sessions: [
      {
        jam: 1,
        time: "07:00 - 08:30 WIB",
        matpel: {
          "X-DKV-1": "19", "X-MK-1": "19", "X-MO-1": "19", "X-MO-2": "19", "X-TL-1": "19",
          "XI-DKV-1": "68", "XI-MK-1": "68", "XI-MO-1": "68", "XI-TL-1": "68",
          "XII-DKV-1": "69", "XII-MK-1": "69", "XII-MO-1": "69", "XII-TL-1": "69"
        },
        proctors: {
          1: "19", 2: "08", 3: "02", 4: "04", 5: "17", 6: "15", 7: "03", 8: "07", 9: "21", 10: "09", 11: "11", 12: "18", 13: "10"
        }
      },
      {
        jam: 2,
        time: "08:40 - 10:00 WIB",
        matpel: {
          "X-DKV-1": "26", "X-MK-1": "47", "X-MO-1": "37", "X-MO-2": "37", "X-TL-1": "54",
          "XI-DKV-1": "30", "XI-MK-1": "49", "XI-MO-1": "40", "XI-TL-1": "58",
          "XII-DKV-1": "33", "XII-MK-1": "52", "XII-MO-1": "43", "XII-TL-1": "61"
        },
        proctors: {
          1: "19", 2: "08", 3: "02", 4: "04", 5: "17", 6: "15", 7: "03", 8: "07", 9: "21", 10: "09", 11: "11", 12: "18", 13: "10"
        }
      },
      {
        jam: 3,
        time: "10:15 - 11:30 WIB",
        matpel: {
          "X-DKV-1": "27", "X-MK-1": "01", "X-MO-1": "38", "X-MO-2": "38", "X-TL-1": "54",
          "XI-DKV-1": "31", "XI-MK-1": "50", "XI-MO-1": "41", "XI-TL-1": "59",
          "XII-DKV-1": "34", "XII-MK-1": "53", "XII-MO-1": "44", "XII-TL-1": "62"
        },
        proctors: {
          1: "21", 2: "19", 3: "08", 4: "02", 5: "04", 6: "17", 7: "15", 8: "03", 9: "07", 10: "11", 11: "09", 12: "10", 13: "18"
        }
      },
      {
        jam: 4,
        time: "11:30 - 12:30 WIB",
        matpel: {
          "X-DKV-1": "01", "X-MK-1": "-", "X-MO-1": "01", "X-MO-2": "01", "X-TL-1": "-",
          "XI-DKV-1": "-", "XI-MK-1": "-", "XI-MO-1": "-", "XI-TL-1": "-",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "21", 2: "-", 3: "08", 4: "02", 5: "04", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-", 11: "-", 12: "-", 13: "-"
        }
      }
    ]
  },
  {
    day: "Jumat",
    date: "2 Oktober 2026",
    hariKe: "Hari 5",
    sessions: [
      {
        jam: 1,
        time: "07:00 - 08:30 WIB",
        matpel: {
          "X-DKV-1": "25", "X-MK-1": "46", "X-MO-1": "36", "X-MO-2": "36", "X-TL-1": "56",
          "XI-DKV-1": "65", "XI-MK-1": "65", "XI-MO-1": "65", "XI-TL-1": "65",
          "XII-DKV-1": "66", "XII-MK-1": "66", "XII-MO-1": "66", "XII-TL-1": "66"
        },
        proctors: {
          1: "19", 2: "02", 3: "06", 4: "16", 5: "22", 6: "15", 7: "12", 8: "20", 9: "10", 10: "03", 11: "01", 12: "08", 13: "17"
        }
      },
      {
        jam: 2,
        time: "08:30 - 10:00 WIB",
        matpel: {
          "X-DKV-1": "67", "X-MK-1": "67", "X-MO-1": "67", "X-MO-2": "67", "X-TL-1": "67",
          "XI-DKV-1": "-", "XI-MK-1": "-", "XI-MO-1": "-", "XI-TL-1": "-",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "19", 2: "02", 3: "06", 4: "16", 5: "22", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-", 11: "-", 12: "-", 13: "-"
        }
      },
      {
        jam: 3,
        time: "10:15 - 11:30 WIB",
        matpel: {
          "X-DKV-1": "24", "X-MK-1": "45", "X-MO-1": "35", "X-MO-2": "35", "X-TL-1": "-",
          "XI-DKV-1": "-", "XI-MK-1": "-", "XI-MO-1": "-", "XI-TL-1": "-",
          "XII-DKV-1": "-", "XII-MK-1": "-", "XII-MO-1": "-", "XII-TL-1": "-"
        },
        proctors: {
          1: "10", 2: "19", 3: "02", 4: "06", 5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-", 11: "-", 12: "-", 13: "-"
        }
      }
    ]
  }
];

export const getProctorNameByCode = (code: string): string => {
  if (!code || code === '-') return '-';
  const p = stsProctors.find(item => item.code === code);
  return p ? p.name : `Pengawas (${code})`;
};

export const getSubjectNameByCode = (code: string): string => {
  if (!code || code === '-') return '-';
  return stsSubjects[code] || `Mapel (${code})`;
};

export interface RoomClassMap {
  room: number;
  className: string;
  jenjang: string;
  jurusan: string;
}

export const roomClassMapping: RoomClassMap[] = [
  { room: 1, className: "X-DKV-1", jenjang: "Kelas X", jurusan: "Desain Komunikasi Visual" },
  { room: 2, className: "X-MK-1", jenjang: "Kelas X", jurusan: "Teknik Pemesinan Kapal" },
  { room: 3, className: "X-MO-1", jenjang: "Kelas X", jurusan: "Teknik Kendaraan Ringan Otomotif 1" },
  { room: 4, className: "X-MO-2", jenjang: "Kelas X", jurusan: "Teknik Kendaraan Ringan Otomotif 2" },
  { room: 5, className: "X-TL-1", jenjang: "Kelas X", jurusan: "Teknik Logistik" },
  { room: 6, className: "XI-DKV-1", jenjang: "Kelas XI", jurusan: "Desain Komunikasi Visual" },
  { room: 7, className: "XI-MK-1", jenjang: "Kelas XI", jurusan: "Teknik Pemesinan Kapal" },
  { room: 8, className: "XI-MO-1", jenjang: "Kelas XI", jurusan: "Teknik Kendaraan Ringan Otomotif" },
  { room: 9, className: "XI-TL-1", jenjang: "Kelas XI", jurusan: "Teknik Logistik" },
  { room: 10, className: "XII-DKV-1", jenjang: "Kelas XII", jurusan: "Desain Komunikasi Visual" },
  { room: 11, className: "XII-MK-1", jenjang: "Kelas XII", jurusan: "Teknik Pemesinan Kapal" },
  { room: 12, className: "XII-MO-1", jenjang: "Kelas XII", jurusan: "Teknik Kendaraan Ringan Otomotif" },
  { room: 13, className: "XII-TL-1", jenjang: "Kelas XII", jurusan: "Teknik Logistik" }
];
