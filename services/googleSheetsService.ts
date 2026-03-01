
import { Student, PaymentRecord, ExamSchedule } from '../types';

const MOCK_STUDENTS: Student[] = [
  { nis: '2024001', name: 'Ahmad Fauzi', class: 'XII DKV 1', major: 'Desain Komunikasi Visual' },
  { nis: '2024002', name: 'Siti Aminah', class: 'XII DKV 1', major: 'Desain Komunikasi Visual' },
  { nis: '2024003', name: 'Budi Santoso', class: 'XI TKRO 2', major: 'Teknik Kendaraan Ringan Otomotif' },
  { nis: '2024004', name: 'Dewi Lestari', class: 'X PK 1', major: 'Pemesinan Kapal' },
];

const MOCK_PAYMENTS: PaymentRecord[] = [
  { nis: '2024001', month: 'Januari 2024', status: 'Lunas', amount: 250000, datePaid: '2024-01-05' },
  { nis: '2024001', month: 'Februari 2024', status: 'Belum Lunas', amount: 250000 },
  { nis: '2024002', month: 'Januari 2024', status: 'Lunas', amount: 250000, datePaid: '2024-01-10' },
];

const MOCK_EXAMS: ExamSchedule[] = [
  { id: '1', subject: 'Matematika Teknik', date: '2024-03-20', time: '07:30 - 09:30', room: 'Bengkel PK', class: 'XII PK 1' },
  { id: '2', subject: 'Bahasa Inggris', date: '2024-03-20', time: '10:00 - 12:00', room: 'Aula', class: 'Semua Jurusan' },
  { id: '3', subject: 'Dasar Desain Grafis', date: '2024-03-21', time: '07:30 - 10:30', room: 'Lab DKV', class: 'XI DKV 1' },
];

export const sheetsService = {
  getStudents: async (filterClass?: string): Promise<Student[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (filterClass) return MOCK_STUDENTS.filter(s => s.class === filterClass);
    return MOCK_STUDENTS;
  },

  getStudentByNis: async (nis: string): Promise<Student | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_STUDENTS.find(s => s.nis === nis);
  },

  getPayments: async (nis: string): Promise<PaymentRecord[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_PAYMENTS.filter(p => p.nis === nis);
  },

  getExamSchedules: async (): Promise<ExamSchedule[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_EXAMS;
  }
};
