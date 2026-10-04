#!/usr/bin/env python3
import html
import os

os.makedirs("public/toeic", exist_ok=True)

# ==============================================================================
# PAGE 1: SURAT EDARAN RESMI 09Rev/SE/SMKTP01/X/2026
# ==============================================================================
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
  <g transform="translate(60, 135)" font-size="12.5" fill="#0f172a">
    <text x="0" y="0" font-weight="bold">No</text>
    <text x="65" y="0">: 09Rev/SE/SMKTP01/X/2026</text>
    
    <text x="0" y="24" font-weight="bold">Hal</text>
    <text x="65" y="24" font-weight="bold">: Pelaksanaan Seleksi Toeic Murid Kelas XI &amp; XII Tahap 3 - TA 2026/2027</text>

    <text x="0" y="58" font-weight="bold">Yth.</text>
    <text x="25" y="80">1. Bapak/Ibu Guru dan Wali Kelas XI &amp; XII</text>
    <text x="25" y="102">2. Orang Tua / Wali Murid Kelas XI &amp; XII</text>
    <text x="25" y="124">3. Murid Kelas XI &amp; XII (Semua Program Keahlian)</text>
    
    <text x="0" y="152">SMK Tanjung Priok 1 Jakarta</text>
    <text x="0" y="172">di Tempat</text>

    <text x="0" y="210">Dengan Hormat,</text>
    <text x="0" y="235" font-style="italic">Assallamuallaikum Warahmatullahi Wabarakatuh,</text>

    <text x="0" y="270">Dalam rangka pemetaan dan peningkatan kompetensi bahasa Inggris siswa, sekolah akan menyelenggarakan</text>
    <text x="0" y="292" font-weight="bold">Seleksi TOEIC (Test of English for International Communication) <tspan font-weight="normal">yang akan dilaksanakan dengan rangkaian</tspan></text>
    <text x="0" y="312">berikut ini :</text>
    
    <!-- Poin 1: Siswa Kelas XII -->
    <circle cx="20" cy="342" r="3" fill="#0f172a" />
    <text x="35" y="346" font-weight="bold">Siswa Kelas XII (Pelaksanaan Luring di Sekolah)</text>
    
    <circle cx="55" cy="370" r="2.5" fill="#475569" />
    <text x="70" y="374">Pelaksanaan tes dilaksanakan pada hari <tspan font-weight="bold">Kamis, 15 Oktober 2026</tspan> dimana Tes dimulai pada :</text>
    
    <circle cx="105" cy="398" r="2" fill="#1e293b" />
    <text x="120" y="402" font-weight="bold">Sesi 1 jam 8.00 - 10.00 wib</text>
    
    <circle cx="105" cy="422" r="2" fill="#1e293b" />
    <text x="120" y="426" font-weight="bold">Sesi 2 jam 10.30 - 12.30 wib</text>

    <!-- Poin 2: Guru -->
    <circle cx="20" cy="458" r="3" fill="#0f172a" />
    <text x="35" y="462" font-weight="bold">Guru (Pelaksanaan Luring di Sekolah)</text>
    
    <circle cx="55" cy="486" r="2.5" fill="#475569" />
    <text x="70" y="490">Pelaksanaan tes bertempat di laboratorium/ruang yang telah ditentukan di sekolah. Dengan</text>
    <text x="70" y="510">jadwal yaitu <tspan font-weight="bold">Jum'at, 16 Oktober 2026</tspan> pada <tspan font-weight="bold">Sesi 3 jam 13.00 - 15.30 (Setelah KBM Khusus)</tspan></text>
    <text x="70" y="530">nama &amp; ruang tes terlampir.</text>

    <!-- Poin 3 & 4: Ketentuan Tambahan -->
    <circle cx="20" cy="564" r="3" fill="#0f172a" />
    <text x="35" y="568">Siswa &amp; Guru <tspan font-weight="bold">wajib membawa earphone/headset pribadi</tspan> yang dapat berfungsi dengan baik untuk sesi</text>
    <text x="35" y="588"><tspan font-style="italic" font-weight="bold">Listening</tspan> &amp; hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir</text>

    <circle cx="20" cy="618" r="3" fill="#0f172a" />
    <text x="35" y="622">Hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <text x="35" y="660">Demikian Surat Edaran ini disampaikan. Mohon dukungan Orang Tua/Wali Murid &amp; Guru agar</text>
    <text x="0" y="682">pelaksanaan tes berjalan dengan lancar dan tertib. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.</text>

    <text x="0" y="730">Jakarta, 5 Oktober 2026</text>
    <text x="0" y="752">Ka. SMK Tanjung Priok 1</text>

    <!-- Stampel & TTD -->
    <g transform="translate(-10, 770)">
      <ellipse cx="65" cy="35" rx="55" ry="32" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="3 1" opacity="0.85" />
      <ellipse cx="65" cy="35" rx="51" ry="28" fill="none" stroke="#1d4ed8" stroke-width="1.2" opacity="0.85" />
      <text x="65" y="26" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">YAYASAN PENDIDIKAN</text>
      <text x="65" y="38" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">SMK TANJUNG PRIOK 1</text>
      <text x="65" y="50" font-size="7" font-family="Arial, sans-serif" fill="#1d4ed8" text-anchor="middle" opacity="0.9">JAKARTA UTARA</text>
      <path d="M60,35 Q100,20 120,40 Q135,15 170,40 L180,35" fill="none" stroke="#0f172a" stroke-width="2.5" />
    </g>

    <text x="0" y="875" font-weight="bold" text-decoration="underline">Andri Susanto,ST</text>
  </g>
</svg>"""

with open("public/toeic/page-1.svg", "w", encoding="utf-8") as f:
    f.write(p1_svg)

# ==============================================================================
# HELPER FUNCTION FOR TABLE PAGES (PAGE 2 - 8)
# Matching uploaded PNG table styles exactly
# ==============================================================================
def make_participant_table_svg(title, date_str, room_session_str, col_header, rows):
    height = max(1130, 220 + len(rows) * 55)
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 {height}" width="100%" height="100%" style="background:#ffffff; font-family: Calibri, 'Segoe UI', Arial, sans-serif;">
  <rect width="800" height="{height}" fill="#ffffff" />
  
  <!-- Header Text -->
  <g transform="translate(400, 45)" text-anchor="middle">
    <text y="0" font-size="20" font-weight="bold" fill="#000000" letter-spacing="0.5">{title}</text>
    <line x1="-340" y1="20" x2="340" y2="20" stroke="#e2e8f0" stroke-width="1"/>
    <text y="50" font-size="18" font-weight="bold" fill="#000000">{date_str}</text>
    <line x1="-340" y1="70" x2="340" y2="70" stroke="#e2e8f0" stroke-width="1"/>
    <text y="100" font-size="18" font-weight="bold" fill="#000000">{room_session_str}</text>
  </g>

  <!-- Table Grid -->
  <g transform="translate(60, 180)">
    <!-- Table Header Row -->
    <rect x="0" y="0" width="680" height="50" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>
    <line x1="80" y1="0" x2="80" y2="50" stroke="#000000" stroke-width="1.8"/>
    <line x1="510" y1="0" x2="510" y2="50" stroke="#000000" stroke-width="1.8"/>

    <text x="40" y="32" font-size="15" font-weight="bold" text-anchor="middle" fill="#000000">NO.</text>
    <text x="295" y="32" font-size="15" font-weight="bold" text-anchor="middle" fill="#000000">{col_header}</text>
    <text x="595" y="32" font-size="15" font-weight="bold" text-anchor="middle" fill="#000000">PARAF</text>
    """
    
    row_h = 52
    for idx, name in enumerate(rows):
        cur_y = 50 + idx * row_h
        bg_color = "#ffffff" if idx % 2 == 0 else "#fbfcfd"
        svg += f"""
    <rect x="0" y="{cur_y}" width="680" height="{row_h}" fill="{bg_color}" stroke="#000000" stroke-width="1.2"/>
    <line x1="80" y1="{cur_y}" x2="80" y2="{cur_y + row_h}" stroke="#000000" stroke-width="1.2"/>
    <line x1="510" y1="{cur_y}" x2="510" y2="{cur_y + row_h}" stroke="#000000" stroke-width="1.2"/>

    <text x="40" y="{cur_y + 32}" font-size="16" fill="#000000" text-anchor="middle">{idx + 1}</text>
    <text x="95" y="{cur_y + 32}" font-size="16" fill="#000000" font-weight="500">{html.escape(name)}</text>
    <text x="525" y="{cur_y + 32}" font-size="12" fill="#cbd5e1">{idx + 1}</text>
        """

    svg += """
  </g>
</svg>"""
    return svg

# ==============================================================================
# DATA TABLES FOR PAGES 2 - 8
# ==============================================================================

# Page 2: LAB 1 DKV - SESI 1 (Murid - 15 Orang)
p2_rows = [
    "AFDHAN AFDIILLAH RUZ",
    "AHMAD WILDAN RAMDANI",
    "ALEX RAHMAN HAKIM",
    "ALVINO PRATAMA",
    "ANDHIKA WAHID SYAWALUDIN",
    "ANDIKA PRATAMA",
    "AQILLA YASMIN",
    "ARDIYANTO",
    "ARKAN ATAYA RAMADHAN",
    "AUDRY",
    "AUFA DWI AKBAR PRASETYO",
    "BAYU TIRTA MAULANA",
    "BangBang Irawan",
    "CHODHORI",
    "CHRISTIAN IMMANUEL PURBA"
]
with open("public/toeic/page-2.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 1 DKV - SESI 1", "NAMA MURID", p2_rows))

# Page 3: LAB 2 DKV - SESI 1 (Murid - 15 Orang)
p3_rows = [
    "DZAKY ABDUL AZIZ",
    "FADHIL RIFQI KHAIRAN",
    "FAHRI FIJRA ARMENDA",
    "FAKHRI JAZMI RAZIQ",
    "FARHAN SEPTIANA RAMADANI",
    "FARREL FERDINAND",
    "FATHIN HAFIZH DARMAWAN",
    "GAMALIEL JOSEVANNO PASKAH TUMADE",
    "HANIFAH AZZAHRA",
    "IBRAHIMOVIC IRWANSYAH",
    "IZHAR HABIB MUSYAFFA",
    "Iqbal Marvel Saputra",
    "JOSHUA DEVIS MORENZA",
    "JUANITO SABONO ELATH",
    "KALYCA TAHARA AZULA SETIAWAN"
]
with open("public/toeic/page-3.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 2 DKV - SESI 1", "NAMA MURID", p3_rows))

# Page 4: LAB 4 DKV - SESI 1 (Murid - 15 Orang)
p4_rows = [
    "KEVIN JULIVAN",
    "KHAIRUL ANNAM",
    "MARVEL DIANDRA SAPUTRA",
    "MELIA PUTRI",
    "MERISA KUMALA SARI",
    "MUFLIH MUZAKI AGUSTA",
    "MUHAMAD ALDI",
    "MUHAMAD RIZKY JANUAR LATTUMANUWIJ",
    "MUHAMMAD AQIL ILHAM",
    "MUHAMMAD FARHAN MAULANA",
    "MUHAMMAD FIRDAUS TRI SAPUTRA",
    "MUHAMMAD IBRAHIM SOLIHIN PUTRA",
    "MUHAMMAD RASYA ASSIDIQ",
    "MUHAMMAD RASYA IZHAR MALIQY",
    "MUHAMMAD RIO FEBRIAN"
]
with open("public/toeic/page-4.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 4 DKV - SESI 1", "NAMA MURID", p4_rows))

# Page 5: LAB TL - SESI 1 (Murid - 15 Orang)
p5_rows = [
    "MUHAMMAD RIZAL ANWAR",
    "MUHAMMAD SAHRUL RAMADHAN",
    "MUHAMMAD SOFIANSYAH",
    "MUHAMMAD ZAHRAN KUSUMA",
    "Muhammad Rizky Ramadhan Labuwatu",
    "NABIL AL FAJAR THAHER",
    "NAUFAL DAFFA AZIZ",
    "NAUFAL MUSYAFFA",
    "NAYLA CEASARY ARTI UTOMO",
    "NAYRA ALMA SHAFIRA",
    "NUR HASIM",
    "PANGERAN FAADHIL HIZBULLAH",
    "PUTERA FAZAR RAMADHAN",
    "PUTRA JANABI NURRISQI",
    "PUTRA NAZAR MUTTAQIN"
]
with open("public/toeic/page-5.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB TL - SESI 1", "NAMA MURID", p5_rows))

# Page 6: LAB 1 DKV- SESI 2 (Murid - 9 Orang)
p6_rows = [
    "RAFAH WAHYUDI",
    "RAIHAN DWI RAHADI",
    "RAIHAN GALIH PRATAMA",
    "REVAL SETIO",
    "RIA SABITHA ZEIN",
    "RIFA DWIKY PADLIANSYAH",
    "RIFQI ARRAZZAQ",
    "RIFQI IRFANI",
    "Rafi Ananda Saputra"
]
with open("public/toeic/page-6.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 1 DKV - SESI 2", "NAMA MURID", p6_rows))

# Page 7: GURU_LAB 1 DKV- SESI 3 (Guru - 15 Orang)
p7_rows = [
    "H. Andri Susanto, ST",
    "ARUM DHAMAYANTI, SE",
    "ELANG WIDYA P. ST",
    "RENI WIDIASTUTI , M.Kom",
    "DANU WIBOWO S.Pd",
    "KHOLID AFIFUDIN S.Pd",
    "ANNIKE K ST",
    "ANGGI ARINI W. S.Kom",
    "KHAIRUDDIN ARIF, ST",
    "SILVANY,S.Pd",
    "KUSNADI ST",
    "DEWI FITRIANI SE",
    "ISTI NURFIDA, S.Pd",
    "Azrichan S.Si",
    "TRIANA SUSANA S.Pd"
]
with open("public/toeic/page-7.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR GURU PESERTA TOEIC", "JUM'AT, 16 OKTOBER 2026", "LAB 1 DKV - SESI 3", "NAMA GURU", p7_rows))

# Page 8: GURU_LAB 2 DKV- SESI 3 (Guru - 14 Orang)
p8_rows = [
    "CITRA INDRAWATI, S.Pd",
    "HUSAIN",
    "JOJI SETIONO, S.Pd",
    "CHASIELDA ULUM AL DHIEN",
    "N. ERNI KUSTINI, S.Pdi",
    "ABAS BASUKI S.Pd",
    "DANIEL SAARANI S.Ds",
    "DIMAS ARIANTO SE",
    "M. ARIF. S.Kom",
    "EVRI SANDHA",
    "FEBY PURNAMA S.Pd",
    "Tias Hadaning, S.Pd",
    "Agus Bachtiar,S.Pd",
    "Danang Wisudhana,ST"
]
with open("public/toeic/page-8.svg", "w", encoding="utf-8") as f:
    f.write(make_participant_table_svg("DAFTAR GURU PESERTA TOEIC", "JUM'AT, 16 OKTOBER 2026", "LAB 2 DKV - SESI 3", "NAMA GURU", p8_rows))

print("All 8 TOEIC Tahap 3 SVGs successfully generated!")
