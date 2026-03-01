
export interface Student {
  nis: string;
  name: string;
  class: string;
  major: string;
}

export interface PaymentRecord {
  nis: string;
  month: string;
  status: 'Lunas' | 'Belum Lunas';
  amount: number;
  datePaid?: string;
}

export interface ExamSchedule {
  id: string;
  subject: string;
  date: string;
  time: string;
  room: string;
  class: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Kurikulum' | 'Ujian' | 'Umum';
  content: string;
}

export enum Major {
  PK = 'Pemesinan Kapal',
  TKRO = 'Teknik Kendaraan Ringan Otomotif',
  DKV = 'Desain Komunikasi Visual',
  TL = 'Teknik Logistik'
}
