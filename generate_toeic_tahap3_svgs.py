#!/usr/bin/env python3
import html
import os

os.makedirs("/public/toeic-tahap3", exist_ok=True)

# -------------------------------------------------------------
# SLIDE 1: SURAT EDARAN RESMI 09Rev/SE/SMKTP01/X/2026
# -------------------------------------------------------------
slide1_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <rect width="800" height="1130" fill="#ffffff" />
  
  <!-- Kop Surat -->
  <g id="kop">
    <g transform="translate(50, 20)">
      <circle cx="36" cy="36" r="34" fill="#0284c7" />
      <polygon points="36,8 64,56 8,56" fill="#facc15" stroke="#0369a1" stroke-width="2"/>
      <circle cx="36" cy="38" r="16" fill="#0284c7" />
      <text x="36" y="42" font-size="9" font-family="Arial, sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">SMK TP 1</text>
      <path d="M16,62 Q36,70 56,62" fill="none" stroke="#facc15" stroke-width="4"/>
      <text x="36" y="67" font-size="7" font-family="Arial, sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle">DIKANTARA</text>
    </g>

    <text x="440" y="32" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle" letter-spacing="0.5">YAYASAN PENDIDIKAN JAKARTA UTARA</text>
    <text x="440" y="52" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">SEKOLAH MENENGAH KEJURUAN (SMK) “ TANJUNG PRIOK “ 1</text>
    <text x="440" y="68" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">STATUS : AKREDITASI A</text>
    <text x="440" y="82" font-size="10" fill="#334155" text-anchor="middle">Jl. Mangga No.3, Kel. Lagoa , Kec. Koja , Jakarta Utara Telpon : (021) 430 1192 Fax. 43905182</text>
    <text x="440" y="94" font-size="10" fill="#2563eb" text-anchor="middle">website : smktanjungpriok1.sch.id</text>

    <line x1="50" y1="104" x2="750" y2="104" stroke="#1e3a8a" stroke-width="2.5" />
    <line x1="50" y1="108" x2="750" y2="108" stroke="#1e3a8a" stroke-width="1" />
  </g>

  <!-- Surat Meta -->
  <g transform="translate(55, 130)" font-size="12" fill="#0f172a">
    <text x="0" y="0" font-weight="bold">No</text>
    <text x="70" y="0">: 09Rev/SE/SMKTP01/X/2026</text>
    
    <text x="0" y="22" font-weight="bold">Hal</text>
    <text x="70" y="22" font-weight="bold">: Pelaksanaan Seleksi Toeic Murid Kelas XI &amp; XII Tahap 3 - TA 2026/2027</text>

    <text x="0" y="52" font-weight="bold">Yth.</text>
    <text x="25" y="72">1. Bapak/Ibu Guru dan Wali Kelas XI &amp; XII</text>
    <text x="25" y="92">2. Orang Tua / Wali Murid Kelas XI &amp; XII</text>
    <text x="25" y="112">3. Murid Kelas XI &amp; XII (Semua Program Keahlian)</text>
    
    <text x="0" y="136">SMK Tanjung Priok 1 Jakarta</text>
    <text x="0" y="154">di Tempat</text>

    <text x="0" y="190">Dengan Hormat,</text>
    <text x="0" y="214" font-style="italic">Assallamuallaikum Warahmatullahi Wabarakatuh,</text>

    <text x="0" y="248">Dalam rangka pemetaan dan peningkatan kompetensi bahasa Inggris siswa, sekolah akan menyelenggarakan</text>
    <text x="0" y="268" font-weight="bold">Seleksi TOEIC (Test of English for International Communication) <tspan font-weight="normal">yang akan dilaksanakan dengan ramgkaian</tspan></text>
    <text x="0" y="286">berikut ini :</text>
    
    <!-- Poin 1: Siswa Kelas XII -->
    <circle cx="20" cy="315" r="3" fill="#0f172a" />
    <text x="35" y="319" font-weight="bold">Siswa Kelas XII (Pelaksanaan Luring di Sekolah)</text>
    
    <circle cx="50" cy="342" r="2.5" fill="none" stroke="#0f172a" stroke-width="1.5" />
    <text x="65" y="346">Pelaksanaan tes dilaksanakan pada hari <tspan font-weight="bold">Kamis, 15 Oktober 2026</tspan> dimana Tes dimulai pada :</text>
    
    <circle cx="85" cy="370" r="2.5" fill="#0f172a" />
    <text x="100" y="374" font-weight="bold">Sesi 1 jam 8.00 - 10.00 wib</text>
    
    <circle cx="85" cy="396" r="2.5" fill="#0f172a" />
    <text x="100" y="400" font-weight="bold">Sesi 2 jam 10.30 - 12.30 wib</text>

    <!-- Poin 2: Guru -->
    <circle cx="20" cy="430" r="3" fill="#0f172a" />
    <text x="35" y="434" font-weight="bold">Guru (Pelaksanaan Luring di Sekolah)</text>
    
    <circle cx="50" cy="458" r="2.5" fill="#0f172a" />
    <text x="65" y="462">Pelaksanaan tes bertempat di laboratorium/ruang yang telah ditentukan di sekolah. Dengan</text>
    <text x="65" y="480">jadwal yaitu <tspan font-weight="bold">Jum'at , 16 Oktober 2026</tspan> pada <tspan font-weight="bold">Sesi 3 jam 13.00 - 15.30 (Setelah KBM</tspan></text>
    <text x="65" y="498"><tspan font-weight="bold">Khusus)</tspan> nama &amp; ruang tes terlampir.</text>

    <!-- Poin 3 & 4: Kewajiban -->
    <circle cx="20" cy="528" r="3" fill="#0f172a" />
    <text x="35" y="532">Siswa &amp; Guru <tspan font-weight="bold">wajib membawa earphone/headset pribadi</tspan> yang dapat berfungsi dengan baik untuk sesi</text>
    <text x="35" y="550"><tspan font-style="italic" font-weight="bold">Listening</tspan> &amp; hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <circle cx="20" cy="578" r="3" fill="#0f172a" />
    <text x="35" y="582">Hadir tepat waktu sesuai dengan pembagian sesi jadwal terlampir.</text>

    <text x="0" y="620">Demikian Surat Edaran ini disampaikan. Mohon dukungan Orang Tua/Wali Murid &amp; Guru agar</text>
    <text x="0" y="640">pelaksanaan tes berjalan dengan lancar dan tertib. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.</text>

    <!-- Penutup & TTD -->
    <text x="0" y="688">Jakarta, 5 Oktober 2026</text>
    <text x="0" y="708">Ka. SMK Tanjung Priok 1</text>

    <!-- Cap dan Tanda Tangan -->
    <g transform="translate(0, 720)">
      <!-- Stempel Yayasan / Sekolah -->
      <ellipse cx="65" cy="40" rx="55" ry="32" fill="none" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="3 1" opacity="0.85" />
      <ellipse cx="65" cy="40" rx="50" ry="28" fill="none" stroke="#1d4ed8" stroke-width="1.2" opacity="0.85" />
      <text x="65" y="32" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">YAYASAN PENDIDIKAN</text>
      <text x="65" y="44" font-size="8" font-family="Arial, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle" opacity="0.9">SMK TANJUNG PRIOK 1</text>
      <text x="65" y="55" font-size="7" font-family="Arial, sans-serif" fill="#1d4ed8" text-anchor="middle" opacity="0.9">JAKARTA UTARA</text>

      <!-- Signature Path -->
      <path d="M 40,55 Q 60,10 80,60 T 120,40 Q 140,45 160,35 M 90,45 L 140,55" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" />
    </g>

    <text x="0" y="810" font-weight="bold">Andri Susanto,ST</text>
  </g>
</svg>"""

with open("/public/toeic-tahap3/slide-1-se.svg", "w") as f:
    f.write(slide1_svg)

# -------------------------------------------------------------
# HELPER TO GENERATE ATTENDANCE TABLE SLIDE SVG
# -------------------------------------------------------------
def make_table_slide(main_title, date_str, room_session_str, names, col_title="NAMA MURID"):
    # Target size 500 x 1060 (proportion of the user table images)
    row_count = len(names)
    row_height = 40
    start_y = 175
    total_height = start_y + (row_count * row_height) + 40

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 {total_height}" width="100%" height="100%" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <rect width="500" height="{total_height}" fill="#ffffff" />

  <!-- Headers -->
  <text x="250" y="40" font-size="16" font-weight="bold" fill="#000000" text-anchor="middle" letter-spacing="0.5">{html.escape(main_title)}</text>
  <line x1="5" y1="56" x2="495" y2="56" stroke="#e2e8f0" stroke-width="1.5" />

  <text x="250" y="86" font-size="15" font-weight="bold" fill="#000000" text-anchor="middle">{html.escape(date_str)}</text>
  <line x1="5" y1="106" x2="495" y2="106" stroke="#e2e8f0" stroke-width="1.5" />

  <text x="250" y="138" font-size="15" font-weight="bold" fill="#000000" text-anchor="middle">{html.escape(room_session_str)}</text>

  <!-- Table Header -->
  <g transform="translate(5, {start_y - 35})">
    <!-- Outer borders -->
    <rect x="0" y="0" width="490" height="35" fill="#ffffff" stroke="#000000" stroke-width="1.5" />
    <line x1="45" y1="0" x2="45" y2="35" stroke="#000000" stroke-width="1.5" />
    <line x1="355" y1="0" x2="355" y2="35" stroke="#000000" stroke-width="1.5" />

    <text x="22" y="23" font-size="13" font-weight="bold" fill="#000000" text-anchor="middle">NO.</text>
    <text x="200" y="23" font-size="13" font-weight="bold" fill="#000000" text-anchor="middle">{html.escape(col_title)}</text>
    <text x="425" y="23" font-size="13" font-weight="bold" fill="#000000" text-anchor="middle">PARAF</text>
  </g>
"""
    y = start_y
    for i, name in enumerate(names):
        no_str = str(i + 1)
        svg += f"""
  <g transform="translate(5, {y})">
    <rect x="0" y="0" width="490" height="{row_height}" fill="#ffffff" stroke="#000000" stroke-width="1.2" />
    <line x1="45" y1="0" x2="45" y2="{row_height}" stroke="#000000" stroke-width="1.2" />
    <line x1="355" y1="0" x2="355" y2="{row_height}" stroke="#000000" stroke-width="1.2" />

    <text x="22" y="26" font-size="13" fill="#000000" text-anchor="middle">{no_str}</text>
    <text x="55" y="26" font-size="13" fill="#000000" font-weight="400">{html.escape(name)}</text>
  </g>"""
        y += row_height

    svg += "\n</svg>"
    return svg

# SLIDE 2: LAB 1 DKV - SESI 1 (15 Siswa)
names_slide2 = [
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
s2 = make_table_slide("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 1 DKV - SESI 1", names_slide2)
with open("/public/toeic-tahap3/slide-2-lab1-sesi1.svg", "w") as f:
    f.write(s2)

# SLIDE 3: LAB 1 DKV - SESI 2 (9 Siswa)
names_slide3 = [
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
s3 = make_table_slide("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 1 DKV - SESI 2", names_slide3)
with open("/public/toeic-tahap3/slide-3-lab1-sesi2.svg", "w") as f:
    f.write(s3)

# SLIDE 4: LAB 2 DKV - SESI 1 (15 Siswa)
names_slide4 = [
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
s4 = make_table_slide("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 2 DKV - SESI 1", names_slide4)
with open("/public/toeic-tahap3/slide-4-lab2-sesi1.svg", "w") as f:
    f.write(s4)

# SLIDE 5: LAB 4 DKV - SESI 1 (15 Siswa)
names_slide5 = [
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
s5 = make_table_slide("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB 4 DKV - SESI 1", names_slide5)
with open("/public/toeic-tahap3/slide-5-lab4-sesi1.svg", "w") as f:
    f.write(s5)

# SLIDE 6: LAB TL - SESI 1 (15 Siswa)
names_slide6 = [
    "MUHAMMAD RIZAL ANWAR",
    "MUHAMMAD SAHRUL RAMADHAN",
    "MUHAMMAD SOFIANSYAH",
    "49. MUHAMMAD ZAHRAN KUSUMA",
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
s6 = make_table_slide("DAFTAR PESERTA TOEIC TAHAP 3", "KAMIS, 15 OKTOBER 2026", "LAB TL - SESI 1", names_slide6)
with open("/public/toeic-tahap3/slide-6-labtl-sesi1.svg", "w") as f:
    f.write(s6)

# SLIDE 7: GURU_LAB 1 DKV - SESI 3 (15 Guru)
names_slide7 = [
    "H. Andri Susanto, ST",
    "ARUM DHAMAYANTI, SE",
    "ELANG WIDYA P. ST",
    "RENI WIDIASTUTI , M.Kom",
    "DANU WIBOWO S.Pd",
    "KHOLID AFIFUDIN S.Pd",
    "ANNIKE K  ST",
    "ANGGI ARINI W. S.Kom",
    "KHAIRUDDIN ARIF, ST",
    "SILVANY,S.Pd",
    "KUSNADI ST",
    "DEWI FITRIANI SE",
    "ISTI NURFIDA, S.Pd",
    "Azrichan S.Si",
    "TRIANA SUSANA S.Pd"
]
s7 = make_table_slide("DAFTAR GURU PESERTA TOEIC", "JUM'AT, 16 OKTOBER 2026", "LAB 1 DKV - SESI 3", names_slide7, col_title="NAMA MURID")
with open("/public/toeic-tahap3/slide-7-guru-lab1-sesi3.svg", "w") as f:
    f.write(s7)

# SLIDE 8: GURU_LAB 2 DKV - SESI 3 (14 Guru)
names_slide8 = [
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
s8 = make_table_slide("DAFTAR GURU PESERTA TOEIC", "JUM'AT, 16 OKTOBER 2026", "LAB 2 DKV - SESI 3", names_slide8, col_title="NAMA MURID")
with open("/public/toeic-tahap3/slide-8-guru-lab2-sesi3.svg", "w") as f:
    f.write(s8)

print("Generated 8 SVG slides successfully in /public/toeic-tahap3/")
