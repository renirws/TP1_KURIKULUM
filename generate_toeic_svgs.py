#!/usr/bin/env python3
import html

# --- PAGE 1: SURAT EDARAN RESMI ---
p1_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <rect width="800" height="1130" fill="#ffffff" />
  
  <!-- Kop Surat -->
  <g id="kop">
    <g transform="translate(55, 25)">
      <circle cx="36" cy="36" r="34" fill="#0284c7" />
      <polygon points="36,8 64,56 8,56" fill="#facc15" stroke="#0369a1" stroke-width="2"/>
      <circle cx="36" cy="38" r="16" fill="#0284c7" />
      <text x="36" y="42" font-size="9" font-family="Arial, sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">SMK TP 1</text>
      <path d="M16,62 Q36,70 56,62" fill="none" stroke="#facc15" stroke-width="4"/>
      <text x="36" y="67" font-size="7" font-family="Arial, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">DIKANTARA</text>
    </g>

    <text x="440" y="36" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle" letter-spacing="0.5">YAYASAN PENDIDIKAN JAKARTA UTARA</text>
    <text x="440" y="56" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">SEKOLAH MENENGAH KEJURUAN (SMK) “ TANJUNG PRIOK “ 1</text>
    <text x="440" y="72" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">STATUS : AKREDITASI A</text>
    <text x="440" y="86" font-size="10" fill="#334155" text-anchor="middle">Jl. Mangga No.3, Kel. Lagoa , Kec. Koja , Jakarta Utara Telpon : (021) 430 1192 Fax. 43905182</text>
    <text x="440" y="98" font-size="10" fill="#2563eb" text-anchor="middle">website : smktanjungpriok1.sch.id</text>

    <line x1="50" y1="108" x2="750" y2="108" stroke="#1e3a8a" stroke-width="2.5" />
    <line x1="50" y1="112" x2="750" y2="112" stroke="#1e3a8a" stroke-width="1" />
  </g>

  <!-- Surat Meta -->
  <g transform="translate(60, 135)" font-size="12" fill="#0f172a">
    <text x="0" y="0" font-weight="bold">No</text>
    <text x="60" y="0">: 08/SE/SMKTP01/IX/2026</text>
    
    <text x="0" y="22" font-weight="bold">Hal</text>
    <text x="60" y="22" font-weight="bold">: Pelaksanaan Seleksi Toeic Murid Kelas XI &amp; XII TA 2026/2027</text>

    <text x="0" y="55" font-weight="bold">Yth.</text>
    <text x="25" y="75">1. Bapak/Ibu Guru dan Wali Kelas XI &amp; XII</text>
    <text x="25" y="95">2. Orang Tua / Wali Murid Kelas XI &amp; XII</text>
    <text x="25" y="115">3. Murid Kelas XI &amp; XII (Semua Program Keahlian)</text>
    
    <text x="0" y="140">SMK Tanjung Priok 1 Jakarta</text>
    <text x="0" y="158">di Tempat</text>

    <text x="0" y="195">Dengan Hormat,</text>
    <text x="0" y="220" font-style="italic">Assallamuallaikum Warahmatullahi Wabarakatuh,</text>

    <text x="0" y="255">Dalam rangka pemetaan dan peningkatan kompetensi bahasa Inggris siswa, sekolah akan menyelenggarakan</text>
    <text x="0" y="275" font-weight="bold">Seleksi TOEIC (Test of English for International Communication) <tspan font-weight="normal">yang akan dilaksanakan pada:</tspan></text>
    
    <circle cx="30" cy="305" r="3" fill="#0f172a" />
    <text x="45" y="309" font-weight="bold">Hari, Tanggal: <tspan font-weight="bold" fill="#1e3a8a">Kamis &amp; Jum'at, 24 - 25 September 2026</tspan></text>

    <text x="0" y="340">Berkenaan dengan hal tersebut, berikut ketentuan pelaksanaan bagi masing-masing jenjang:</text>

    <text x="20" y="370" font-weight="bold">1. Siswa Kelas XII (Pelaksanaan Luring di Sekolah)</text>
    <circle cx="45" cy="395" r="2.5" fill="#475569" />
    <text x="60" y="399">Pelaksanaan tes bertempat di laboratorium/ruang yang telah ditentukan di sekolah. Dengan jadwal</text>
    <text x="60" y="417">yaitu <tspan font-weight="bold">Kamis, 24 September 2026</tspan> dengan dibagi 2 sesi sebagai berikut ini:</text>
    
    <circle cx="90" cy="442" r="2.5" fill="#1e293b" />
    <text x="105" y="446" font-weight="bold">Sesi 1 : Jam 07.00 – 09.00 WIB</text>
    
    <circle cx="90" cy="466" r="2.5" fill="#1e293b" />
    <text x="105" y="470" font-weight="bold">Sesi 2 : Jam 09.30 – 11.30 WIB</text>

    <circle cx="45" cy="498" r="2.5" fill="#475569" />
    <text x="60" y="502">Siswa <tspan font-weight="bold">wajib membawa earphone/headset pribadi</tspan> yang dapat berfungsi dengan baik untuk sesi</text>
    <text x="60" y="520"><tspan font-style="italic" font-weight="bold">Listening</tspan> &amp; hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <text x="20" y="555" font-weight="bold">2. Siswa Kelas XI (Pelaksanaan Luring di Sekolah)</text>
    <circle cx="45" cy="580" r="2.5" fill="#475569" />
    <text x="60" y="584">Pelaksanaan tes bertempat di laboratorium/ruang yang telah ditentukan di sekolah. Dengan jadwal</text>
    <text x="60" y="602">yaitu <tspan font-weight="bold">Jum'at, 25 September 2026</tspan> dengan dibagi 2 sesi sebagai berikut ini:</text>

    <circle cx="90" cy="627" r="2.5" fill="#1e293b" />
    <text x="105" y="631" font-weight="bold">Sesi 1 : Jam 07.00 – 09.00 WIB</text>

    <circle cx="90" cy="651" r="2.5" fill="#1e293b" />
    <text x="105" y="655" font-weight="bold">Sesi 2 : Jam 09.30 – 11.30 WIB</text>

    <circle cx="45" cy="683" r="2.5" fill="#475569" />
    <text x="60" y="687">Siswa <tspan font-weight="bold">wajib membawa earphone/headset pribadi</tspan> yang dapat berfungsi dengan baik untuk sesi</text>
    <text x="60" y="705"><tspan font-style="italic" font-weight="bold">Listening</tspan> &amp; hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <circle cx="45" cy="733" r="2.5" fill="#475569" />
    <text x="60" y="737">Hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <text x="20" y="775">Demikian Surat Edaran ini disampaikan. Mohon dukungan Orang Tua/Wali Murid agar pelaksanaan tes</text>
    <text x="0" y="795">berjalan dengan lancar dan tertib. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.</text>

    <text x="0" y="840">Jakarta, 22 September 2026</text>
    <text x="0" y="860">Ka. SMK Tanjung Priok 1</text>

    <g transform="translate(-10, 875)">
      <ellipse cx="65" cy="35" rx="55" ry="32" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="3 1" opacity="0.85" />
      <ellipse cx="65" cy="35" rx="51" ry="28" fill="none" stroke="#1d4ed8" stroke-width="1.2" opacity="0.85" />
      <text x="65" y="26" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">YAYASAN PENDIDIKAN</text>
      <text x="65" y="38" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">SMK TANJUNG PRIOK 1</text>
      <text x="65" y="50" font-size="7" font-family="Arial, sans-serif" fill="#1d4ed8" text-anchor="middle" opacity="0.9">JAKARTA UTARA</text>
      <path d="M60,35 Q100,20 120,40 Q135,15 170,40 L180,35" fill="none" stroke="#0f172a" stroke-width="2.5" />
    </g>

    <text x="0" y="970" font-weight="bold" text-decoration="underline">Andri Susanto, ST</text>
  </g>
</svg>"""

with open("public/toeic/page-1.svg", "w", encoding="utf-8") as f:
    f.write(p1_svg)

# Helper function to generate Table Box for Page 2 & Page 3
def make_table_box(x, y, lab_name, ruang_name, sesi_num, rows):
    header_html = f"""
    <g transform="translate({x}, {y})">
      <!-- Mini Kop -->
      <g transform="translate(0, 0)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#0f172a">{lab_name}</text>
        <g transform="translate(35, -15) scale(0.4)">
          <circle cx="36" cy="36" r="34" fill="#0284c7" />
          <polygon points="36,8 64,56 8,56" fill="#facc15" stroke="#0369a1" stroke-width="2"/>
        </g>
        <text x="175" y="-5" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#0f172a" text-anchor="middle">DAFTAR HADIR SISWA SELEKSI TOEIC</text>
        <text x="175" y="6" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#0f172a" text-anchor="middle">SMK TANJUNG PRIOK 1</text>
        <text x="175" y="17" font-family="Arial, sans-serif" font-size="8" fill="#0f172a" text-anchor="middle">TAHUN PELAJARAN 2026/2027</text>
      </g>

      <text x="45" y="33" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#0f172a">SESI : {sesi_num}</text>
      <text x="45" y="45" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#0f172a">RUANG : {ruang_name}</text>

      <!-- Table Structure -->
      <g transform="translate(0, 52)">
        <rect x="0" y="0" width="340" height="20" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
        <line x1="26" y1="0" x2="26" y2="20" stroke="#334155" stroke-width="1"/>
        <line x1="68" y1="0" x2="68" y2="20" stroke="#334155" stroke-width="1"/>
        <line x1="235" y1="0" x2="235" y2="20" stroke="#334155" stroke-width="1"/>
        <line x1="285" y1="0" x2="285" y2="20" stroke="#334155" stroke-width="1"/>

        <text x="13" y="13" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="#0f172a">NO URUT</text>
        <text x="47" y="13" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="#0f172a">NIS</text>
        <text x="151" y="13" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" text-anchor="middle" fill="#0f172a">NAMA PESERTA</text>
        <text x="260" y="13" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="#0f172a">KELAS</text>
        <text x="312" y="13" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="#0f172a">PARAF</text>
    """
    row_h = 16
    for idx, (name, kls) in enumerate(rows):
        cur_y = 20 + idx * row_h
        paraf_num = idx + 1
        align_x = 295 if (paraf_num % 2 == 1) else 325
        header_html += f"""
        <rect x="0" y="{cur_y}" width="340" height="{row_h}" fill="{'#ffffff' if idx%2==0 else '#fdfdfe'}" stroke="#334155" stroke-width="0.8"/>
        <line x1="26" y1="{cur_y}" x2="26" y2="{cur_y + row_h}" stroke="#334155" stroke-width="0.8"/>
        <line x1="68" y1="{cur_y}" x2="68" y2="{cur_y + row_h}" stroke="#334155" stroke-width="0.8"/>
        <line x1="235" y1="{cur_y}" x2="235" y2="{cur_y + row_h}" stroke="#334155" stroke-width="0.8"/>
        <line x1="285" y1="{cur_y}" x2="285" y2="{cur_y + row_h}" stroke="#334155" stroke-width="0.8"/>
        
        <text x="13" y="{cur_y + 11}" font-family="Arial, sans-serif" font-size="8" text-anchor="middle" fill="#0f172a">{idx+1}</text>
        <text x="47" y="{cur_y + 11}" font-family="Arial, sans-serif" font-size="7.5" text-anchor="middle" fill="#64748b"></text>
        <text x="73" y="{cur_y + 11}" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#0f172a">{html.escape(name[:32])}</text>
        <text x="260" y="{cur_y + 11}" font-family="Arial, sans-serif" font-size="7.5" text-anchor="middle" fill="#0f172a">{kls}</text>
        <text x="{align_x}" y="{cur_y + 11}" font-family="Arial, sans-serif" font-size="7" fill="#64748b">{paraf_num}</text>
        """
    total_y = 20 + len(rows) * row_h
    header_html += f"""
        <text x="315" y="{total_y + 15}" font-family="Arial, sans-serif" font-size="7" text-anchor="end" fill="#475569">Jakarta,  -</text>
        <text x="315" y="{total_y + 25}" font-family="Arial, sans-serif" font-size="7" text-anchor="end" fill="#475569">Pengawas</text>
      </g>
    </g>
    """
    return header_html

# --- PAGE 2: KELAS XII SESI 1 ---
p2_lab1 = [
    ("Andhika Wahid Syawaludin", "MK"), ("Fakhri Jazmi Raziq", "MK"), ("Hidayatur Raihan", "MK"),
    ("Iqbal Marvel Saputra", "MK"), ("Joshua Devis Morenza", "MK"), ("Juanito Sabono Elath", "MK"),
    ("Kevin Julivan", "MK"), ("Mochammad Dava Fladeyo", "MK"), ("Muhamad Vicky Pratama", "MK"),
    ("Muhammad Farhan Maulana", "MK"), ("Muhammad Riizqy Akbar", "MK"), ("Muhammad Rio Febrian", "MK"),
    ("Muhammad Zahran Kusuma", "MK"), ("Nabil Al Fajar Thaher", "MK"), ("Putra Fajar", "MK")
]
p2_lab2 = [
    ("Rayhanul Hakim", "MK"), ("Rifa Dwiky Padliansyah", "MK"), ("Rizki Farel Novriansyah", "MK"),
    ("Rizky Aditya", "MK"), ("Sava Alkeyza", "MK"), ("Sigit Wahyudi", "MK"),
    ("Alex Rahman Hakim", "MO 1"), ("Alvino Pratama", "MO 1"), ("Audry", "MO 1"),
    ("Aufa Dwi Akbar Prasetyo", "MO 1"), ("Chodori", "MO 1"), ("Dava Arya Pratama", "MO 1"),
    ("Descam Damuarta", "MO 1"), ("Fahri Fijra Armenda", "MO 1"), ("Fahri Pratama Mulya", "MO 1")
]
p2_lab3 = [
    ("Farhan Septiana Ramadani", "MO 1"), ("Farrel Ferdinand", "MO 1"), ("Farid Rodikin", "MO 1"),
    ("Farlie Lailatul Qodri Laturua", "MO 1"), ("Ibrahimovic Irwansyah", "MO 1"), ("Khoeru Dzikri", "MO 1"),
    ("Marvel Diandra Saputra", "MO 1"), ("Muhamad Aldi", "MO 1"), ("Muhamad Arif Albar", "MO 1"),
    ("Muhammad Aqil Ilham", "MO 1"), ("Muhammad Fathir Al-Qahtani", "MO 1"), ("Muhammad Firmansyah", "MO 1"),
    ("Muhammad Ibrahim Solihin Putra", "MO 1"), ("Muhammad Rasya Assidiq", "MO 1"), ("Muhammad Rizal Anwar", "MO 1")
]
p2_lab4 = [
    ("Muhammad Rizky Zulkarnain", "MO 1"), ("Muhammad Syahrul Ramadhan", "MO 1"), ("Nabil Syahputra", "MO 1"),
    ("Naufal Daffa Azis", "MO 1"), ("Nur Hasim", "MO 1"), ("Putra Nazar Muttaqin", "MO 1"),
    ("Rafi Ananda Saputra", "MO 1"), ("Rifqi Irfani", "MO 1"), ("Rizki Aulia Putra", "MO 1"),
    ("Tanzilal Noto Prawiro", "MO 1"), ("Yuda Saputra", "MO 1"), ("Ardiyanto", "MO 1"),
    ("Raffah", "MO 1"), ("Dhafa Yusuf Azhar", "MO 1")
]

p2_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <rect width="800" height="1130" fill="#ffffff" />
  
  <g transform="translate(45, 30)">
    <text x="0" y="0" font-size="12" fill="#0f172a">Lampiran : 08/SE/SMKTP01/IX/2026</text>
    
    <text x="355" y="25" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Daftar Siswa Kelas XII</text>
    <text x="355" y="48" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Kamis, 24 September 2026</text>
    
    <text x="0" y="70" font-size="13" font-weight="bold" fill="#0f172a">Sesi 1 :</text>
  </g>

  {make_table_box(45, 120, "LAB 1", "1", "1", p2_lab1)}
  {make_table_box(415, 120, "LAB 2", "2", "1", p2_lab2)}
  {make_table_box(45, 545, "LAB 3", "3", "1", p2_lab3)}
  {make_table_box(415, 545, "LAB 4", "4", "1", p2_lab4)}
</svg>"""

with open("public/toeic/page-2.svg", "w", encoding="utf-8") as f:
    f.write(p2_svg)

# --- PAGE 3: KELAS XII SESI 2 ---
p3_lab1 = [
    ("Abian kautsar bahry", "DKV"), ("Ahmad Wildan Ramdani", "DKV"), ("Andika Pratama", "DKV"),
    ("Aqilla Yasmin", "DKV"), ("Christian Immanuel Purba", "DKV"), ("Fadhil Rifqi Khairan", "DKV"),
    ("Fathin Hafizh Darmawan", "DKV"), ("Gamaliel Josevanno Paskah Tumade", "DKV"), ("Julian Afdillah", "DKV"),
    ("Kalyca Tahara Azula Setiawan", "DKV"), ("Maurinho Gerrardi", "DKV"), ("Muhamad Rizky Januar Lattumamuwl", "DKV"),
    ("Muhammad Rasya Izhar Maliqy", "DKV"), ("Muhammad Rizky Ramadhan", "DKV"), ("Nayla Ceasarry Arti Utomo", "DKV")
]
p3_lab2 = [
    ("Nayra Alma Shafira", "DKV"), ("Pangeran faadhil Hizbullah", "DKV"), ("Putra Janabi Nurrisqi", "DKV"),
    ("Raihan Dwi Rahadi", "DKV"), ("Raihan Galih Pratama", "DKV"), ("Reval Setio", "DKV"),
    ("Septiawan Saputra Batah", "DKV"), ("Sesha Kurniasih", "DKV"), ("Silviana Febriyanti", "DKV"),
    ("Tiara Anggraeni", "DKV"), ("Yuliyana Putri", "DKV"), ("Arkan Ataya Ramadhan", "DKV"),
    ("Rifqi Arazzak", "DKV"), ("Afdhan Afdihillah Ruz", "TL"), ("Bangbang Irawan", "TL")
]
p3_lab3 = [
    ("Dzaky Abdul Aziz", "TL"), ("Fathir Alinsky Canavaro", "TL"), ("Hanifah Azzahra", "TL"),
    ("I Kadek Chandra Satrya", "TL"), ("Indra Damar Al-Sampurna", "TL"), ("Izhar Habib Musyaffa", "TL"),
    ("Khairul Annam", "TL"), ("Melia Putri", "TL"), ("Merisa Kumala Sari", "TL"),
    ("Mufli Muzaki Agusta", "TL"), ("Muhammad Firdaus Tri Saputra", "TL"), ("Muhammad Sofianyah", "TL"),
    ("Naufal Musyaffa", "TL"), ("Ria Sabitha Zein", "TL"), ("Tegar Setiawan", "TL")
]

p3_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <rect width="800" height="1130" fill="#ffffff" />
  
  <g transform="translate(45, 30)">
    <text x="0" y="15" font-size="13" font-weight="bold" fill="#0f172a">Sesi 2 :</text>
  </g>

  {make_table_box(45, 75, "LAB 1", "1", "2", p3_lab1)}
  {make_table_box(415, 75, "LAB 2", "2", "2", p3_lab2)}
  {make_table_box(160, 510, "LAB 3", "3", "2", p3_lab3)}

  <!-- Catatan Bawah -->
  <g transform="translate(180, 995)">
    <rect x="-10" y="-18" width="460" height="28" fill="#fef08a" stroke="#eab308" stroke-width="1.5" rx="4"/>
    <text x="220" y="0" font-family="Arial, sans-serif" font-size="12" font-weight="bold" font-style="italic" fill="#854d0e" text-anchor="middle">
      Catatan : pembagian Murid Kelas XII / Lab &amp; sesi seperti TKA
    </text>
  </g>
</svg>"""

with open("public/toeic/page-3.svg", "w", encoding="utf-8") as f:
    f.write(p3_svg)

# --- HELPER FOR FULL-WIDTH TABLE (PAGE 4 & 5) ---
def make_full_table(rows, sesi_label, date_label):
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: Arial, sans-serif;">
  <rect width="800" height="1130" fill="#ffffff" />

  <!-- Title Header -->
  <text x="400" y="45" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Daftar Siswa Kelas XI</text>
  <text x="400" y="68" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">{date_label}</text>
  <text x="50" y="95" font-size="13" font-weight="bold" fill="#0f172a">{sesi_label}</text>

  <!-- Table Header -->
  <g transform="translate(50, 110)">
    <rect x="0" y="0" width="700" height="24" fill="#0284c7" />
    <line x1="280" y1="0" x2="280" y2="24" stroke="#ffffff" stroke-width="1"/>
    <line x1="390" y1="0" x2="390" y2="24" stroke="#ffffff" stroke-width="1"/>
    <line x1="450" y1="0" x2="450" y2="24" stroke="#ffffff" stroke-width="1"/>
    <line x1="560" y1="0" x2="560" y2="24" stroke="#ffffff" stroke-width="1"/>
    <line x1="650" y1="0" x2="650" y2="24" stroke="#ffffff" stroke-width="1"/>

    <text x="140" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Name</text>
    <text x="335" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">NISN</text>
    <text x="420" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Kelas</text>
    <text x="505" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Kode Peserta</text>
    <text x="605" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">LAB</text>
    <text x="675" y="16" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">SESI</text>
  """
    row_h = 15.5 if len(rows) > 40 else 24
    font_s = 8 if len(rows) > 40 else 9.5
    for idx, r in enumerate(rows):
        cur_y = 24 + idx * row_h
        bg = "#ffffff" if idx % 2 == 0 else "#f8fafc"
        svg += f"""
    <rect x="0" y="{cur_y}" width="700" height="{row_h}" fill="{bg}" stroke="#cbd5e1" stroke-width="0.6"/>
    <line x1="280" y1="{cur_y}" x2="280" y2="{cur_y+row_h}" stroke="#cbd5e1" stroke-width="0.6"/>
    <line x1="390" y1="{cur_y}" x2="390" y2="{cur_y+row_h}" stroke="#cbd5e1" stroke-width="0.6"/>
    <line x1="450" y1="{cur_y}" x2="450" y2="{cur_y+row_h}" stroke="#cbd5e1" stroke-width="0.6"/>
    <line x1="560" y1="{cur_y}" x2="560" y2="{cur_y+row_h}" stroke="#cbd5e1" stroke-width="0.6"/>
    <line x1="650" y1="{cur_y}" x2="650" y2="{cur_y+row_h}" stroke="#cbd5e1" stroke-width="0.6"/>

    <text x="10" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" font-weight="bold" fill="#0f172a">{html.escape(r['name'])}</text>
    <text x="335" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" fill="#334155" text-anchor="middle">{r['nisn']}</text>
    <text x="420" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" fill="#334155" text-anchor="middle">{r['kelas']}</text>
    <text x="505" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" fill="#334155" text-anchor="middle">{r['kode']}</text>
    <text x="605" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" font-weight="bold" fill="#0284c7" text-anchor="middle">{r['lab']}</text>
    <text x="675" y="{cur_y + row_h*0.7:.1f}" font-size="{font_s}" font-weight="bold" fill="#0f172a" text-anchor="middle">{r['sesi']}</text>
        """
    svg += """
  </g>
</svg>"""
    return svg

# --- DATA PAGE 4: KELAS XI SESI 1 (59 SISWA) ---
p4_rows = [
    {"name": "ACHMAD GALIH AL MAGHZUMY", "nisn": "0098610075", "kelas": "XI", "kode": "0098610075", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ADITYA BINTANG FADILLAH", "nisn": "0097555983", "kelas": "XI", "kode": "0097555983", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ADLI NOVENDRI PRATAMA", "nisn": "0099565453", "kelas": "XI", "kode": "0099565453", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ADLY FAIZI", "nisn": "0108669026", "kelas": "XI", "kode": "0108669026", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "AHMAD AL FAJRI", "nisn": "0093913695", "kelas": "XI", "kode": "0093913695", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "AHMAD FIRDIYAN", "nisn": "0094648843", "kelas": "XI", "kode": "0094648843", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "AHMAD ROHMAN", "nisn": "0089684684", "kelas": "XI", "kode": "0089684684", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "AHMAD SAPUTRA PRATAMA PRIYONO", "nisn": "0096032711", "kelas": "XI", "kode": "0096032711", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "AIRA PUTRI", "nisn": "0097182451", "kelas": "XI", "kode": "0097182451", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ALFIAN AKBARUDDIN", "nisn": "0096443990", "kelas": "XI", "kode": "0096443990", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ALIF HIDAYAH TULLAH", "nisn": "0102771016", "kelas": "XI", "kode": "0102771016", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ALIF NAUFAL SETIADI", "nisn": "0097901389", "kelas": "XI", "kode": "0097901389", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ALPINO RAMADON", "nisn": "0092730634", "kelas": "XI", "kode": "0092730634", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ANDRI PARSAORAN SIMBOLON", "nisn": "0099112632", "kelas": "XI", "kode": "0099112632", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ANDRIAN PRATAMA", "nisn": "0094001024", "kelas": "XI", "kode": "0094001024", "lab": "LAB 1 - DKV", "sesi": "1"},
    {"name": "ANGGARA", "nisn": "0097477374", "kelas": "XI", "kode": "0097477374", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "ARIF RAHMAN HAKIM", "nisn": "0088599620", "kelas": "XI", "kode": "0088599620", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "ARIFIN ILHAM", "nisn": "0093433967", "kelas": "XI", "kode": "0093433967", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "ATHAYA IKHSAN", "nisn": "0106258705", "kelas": "XI", "kode": "0106258705", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "AUREL CAHYA DININGRUM", "nisn": "0096762346", "kelas": "XI", "kode": "0096762346", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "AZKA ARDIANSYAH", "nisn": "0095596099", "kelas": "XI", "kode": "0095596099", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "BALKAN HARDIYANSYACH", "nisn": "0092078961", "kelas": "XI", "kode": "0092078961", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "BAYU RIZKY PRASETYO", "nisn": "0103913398", "kelas": "XI", "kode": "0103913398", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "BAYU TIRTA MAULANA", "nisn": "0092153475", "kelas": "XI", "kode": "0092153475", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "BRYAN PRATAMA MA'AFI", "nisn": "0101437672", "kelas": "XI", "kode": "0101437672", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "CHRISTIAN MARKUS JOHARI SIMANGUNSON", "nisn": "0091187863", "kelas": "XI", "kode": "0091187863", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "DALVIN OKTAVIAN ZULISMAN", "nisn": "3096204378", "kelas": "XI", "kode": "3096204378", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "DARRELL AKMAL ZAHWAN", "nisn": "0098615139", "kelas": "XI", "kode": "0098615139", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "DHAFA RADHITYANSYAH", "nisn": "0094768155", "kelas": "XI", "kode": "0094768155", "lab": "LAB 2 - DKV", "sesi": "1"},
    {"name": "DIFAH USDIANSYAH", "nisn": "0095795551", "kelas": "XI", "kode": "0095795551", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "ENDA FRIYANSAH", "nisn": "0084405530", "kelas": "XI", "kode": "0084405530", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FACHREL HARDIANSYAH", "nisn": "0093292004", "kelas": "XI", "kode": "0093292004", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FACHRI AULIA AZRA", "nisn": "0086557307", "kelas": "XI", "kode": "0086557307", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FAHRI EKA GUNAWAN", "nisn": "0092538205", "kelas": "XI", "kode": "0092538205", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FARHAN PUTRA RAMADHAN", "nisn": "0091089379", "kelas": "XI", "kode": "0091089379", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FATHAN NUGROHO", "nisn": "0101231159", "kelas": "XI", "kode": "0101231159", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FATHIR", "nisn": "3091077926", "kelas": "XI", "kode": "3091077926", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FATTAN RIZQI SONDAKH", "nisn": "0092975912", "kelas": "XI", "kode": "0092975912", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FERDIANSYAH PUTRA SUSILO", "nisn": "0085881952", "kelas": "XI", "kode": "0085881952", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "FIRJATULLAH PRATAMA", "nisn": "0093452477", "kelas": "XI", "kode": "0093452477", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "GALANG RAMADHAN", "nisn": "0072801642", "kelas": "XI", "kode": "0072801642", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "HEKMAYAR SYAH MASOOD", "nisn": "0099496824", "kelas": "XI", "kode": "0099496824", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "JATMIKO DWI HESTIAN", "nisn": "0096857903", "kelas": "XI", "kode": "0096857903", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "KANYA ARTHA MOLY", "nisn": "0095651031", "kelas": "XI", "kode": "0095651031", "lab": "LAB 4 - DKV", "sesi": "1"},
    {"name": "KEVIN APRILIO CORNELIUS", "nisn": "0103875760", "kelas": "XI", "kode": "0103875760", "lab": "LAB TL", "sesi": "1"},
    {"name": "KEVIN PUTRA PRATAMA JUMASTAN", "nisn": "0109613986", "kelas": "XI", "kode": "0109613986", "lab": "LAB TL", "sesi": "1"},
    {"name": "LINGGA MAHARDIKA", "nisn": "0098471977", "kelas": "XI", "kode": "0098471977", "lab": "LAB TL", "sesi": "1"},
    {"name": "MARVEL HAMONONGAN", "nisn": "0092868414", "kelas": "XI", "kode": "0092868414", "lab": "LAB TL", "sesi": "1"},
    {"name": "MERSI", "nisn": "0073901066", "kelas": "XI", "kode": "0073901066", "lab": "LAB TL", "sesi": "1"},
    {"name": "MOCHAMMAD REYVAN FACHRI GUNAWAN", "nisn": "0083775913", "kelas": "XI", "kode": "0083775913", "lab": "LAB TL", "sesi": "1"},
    {"name": "MOHAMMAD BILAL SUBIAKTO", "nisn": "0098016568", "kelas": "XI", "kode": "0098016568", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUGIONO PUTRA HARTANTO", "nisn": "0105750453", "kelas": "XI", "kode": "0105750453", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMMAD AKBAR SUMADI", "nisn": "0092857131", "kelas": "XI", "kode": "0092857131", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD ADITYA HARAHAP", "nisn": "0105904342", "kelas": "XI", "kode": "0105904342", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD ADRIAN AL BASRI", "nisn": "0096254884", "kelas": "XI", "kode": "0096254884", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD DAVIN", "nisn": "0086603374", "kelas": "XI", "kode": "0086603374", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD FAUZAN RAMADHAN", "nisn": "0091090341", "kelas": "XI", "kode": "0091090341", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD PASHA", "nisn": "0089216653", "kelas": "XI", "kode": "0089216653", "lab": "LAB TL", "sesi": "1"},
    {"name": "MUHAMAD REVAN RAMADHAN", "nisn": "0096512318", "kelas": "XI", "kode": "0096512318", "lab": "LAB TL", "sesi": "1"}
]

p4_svg = make_full_table(p4_rows, "Sesi 1 :", "Jum’at, 25 September 2026")
with open("public/toeic/page-4.svg", "w", encoding="utf-8") as f:
    f.write(p4_svg)

# --- DATA PAGE 5: KELAS XI SESI 2 (29 SISWA) ---
p5_rows = [
    {"name": "MUHAMMAD AULYA DHUHAN FAZHRI", "nisn": "0099346411", "kelas": "XI", "kode": "0099346411", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD FARREL MAHARDIKA", "nisn": "0094080765", "kelas": "XI", "kode": "0094080765", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD ICHWAN RADITIYA", "nisn": "3101277018", "kelas": "XI", "kode": "3101277018", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "Muhammad Khaerul Azzam", "nisn": "0104536015", "kelas": "XI", "kode": "0104536015", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD LATANDRE ABDULLAH KAMIL", "nisn": "0092799002", "kelas": "XI", "kode": "0092799002", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD RAEHAN ADHIDTIO", "nisn": "0087620797", "kelas": "XI", "kode": "0087620797", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD RAFFAN ADLIANSYAH", "nisn": "0098099123", "kelas": "XI", "kode": "0098099123", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD RAIHAN", "nisn": "0103560917", "kelas": "XI", "kode": "0103560917", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD RIFAEL HERDYANSYAH", "nisn": "0099282628", "kelas": "XI", "kode": "0099282628", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD RIZKY APRIANSYAH", "nisn": "0102339197", "kelas": "XI", "kode": "0102339197", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUHAMMAD SYAWALUDDIN NURFADILLAH", "nisn": "0086489033", "kelas": "XI", "kode": "0086489033", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "Mukti Andika Hamzah", "nisn": "0099265800", "kelas": "XI", "kode": "0099265800", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "MUSTARI AHMAD", "nisn": "0099688466", "kelas": "XI", "kode": "0099688466", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "NAUFAL DAFFA TANRYSAU", "nisn": "0092408553", "kelas": "XI", "kode": "0092408553", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "NAUFAL RAFIF AKMAL", "nisn": "0083336272", "kelas": "XI", "kode": "0083336272", "lab": "LAB 1 - DKV", "sesi": "2"},
    {"name": "NEVILLE OKTAVIANUS POLLO", "nisn": "0096576330", "kelas": "XI", "kode": "0096576330", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "NIKITA RIANA", "nisn": "0097052216", "kelas": "XI", "kode": "0097052216", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RAFA BINTANG PRATAMA", "nisn": "3139988141", "kelas": "XI", "kode": "3139988141", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RAFKA FABRIANSYAH PUTRA", "nisn": "0101719545", "kelas": "XI", "kode": "0101719545", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RAFLY SUTRISTA", "nisn": "0075597019", "kelas": "XI", "kode": "0075597019", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RAKA MAIRINO LIANTARA", "nisn": "0091295953", "kelas": "XI", "kode": "0091295953", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RAMADAN AKBAR", "nisn": "0098997474", "kelas": "XI", "kode": "0098997474", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "REYHAN VIRGIANSYAH", "nisn": "0097023009", "kelas": "XI", "kode": "0097023009", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "RIVAI RAMDHANI", "nisn": "0088917058", "kelas": "XI", "kode": "0088917058", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "SETIAWAN", "nisn": "0095029876", "kelas": "XI", "kode": "0095029876", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "SUHRO ARDI", "nisn": "0096501768", "kelas": "XI", "kode": "0096501768", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "SYAHRIL SAPUTRA", "nisn": "0081687784", "kelas": "XI", "kode": "0081687784", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "SYEFIRA NURI MAULIDA", "nisn": "0103247330", "kelas": "XI", "kode": "0103247330", "lab": "LAB 2 - DKV", "sesi": "2"},
    {"name": "SYIFA AULIA AZ ZAHRA", "nisn": "0089263550", "kelas": "XI", "kode": "0089263550", "lab": "LAB 2 - DKV", "sesi": "2"}
]

p5_svg = make_full_table(p5_rows, "Sesi 2 :", "Jum’at, 25 September 2026")
with open("public/toeic/page-5.svg", "w", encoding="utf-8") as f:
    f.write(p5_svg)

print("All 5 TOEIC SVG pages successfully generated!")
