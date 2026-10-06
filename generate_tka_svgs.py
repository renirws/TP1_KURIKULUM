#!/usr/bin/env python3
import os
import html

os.makedirs("public/tka", exist_ok=True)

# Tut Wuri Handayani SVG symbol
TUT_WURI_LOGO = """
<g transform="translate(30, 20) scale(0.65)">
  <!-- Outer Pentagon & Wing Motif -->
  <circle cx="50" cy="50" r="46" fill="#0284c7" stroke="#0f172a" stroke-width="2"/>
  <path d="M50 12 L84 75 L16 75 Z" fill="#facc15" stroke="#0369a1" stroke-width="2"/>
  <!-- Belencong / Torch / Wings -->
  <circle cx="50" cy="46" r="16" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
  <path d="M50 32 L56 50 L44 50 Z" fill="#ef4444"/>
  <path d="M22 68 Q50 82 78 68" fill="none" stroke="#ffffff" stroke-width="4"/>
  <text x="50" y="86" font-size="8" font-family="'Arial', sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">TUT WURI HANDAYANI</text>
</g>
"""

PAGES_DATA = [
    {
        "page": 1,
        "lab": "Lab 1",
        "id_server": "K01020018-AG1K / Lab 1",
        "sesi": 1,
        "pukul": "07:00-08:45",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800018", "I KADEK CHANDRA SATRYA"),
            ("2", "K0102001800027", "BangBang Irawan"),
            ("3", "K0102001800036", "DZAKY ABDUL AZIZ"),
            ("4", "K0102001800045", "MUHAMMAD SOFIANSYAH"),
            ("5", "K0102001800054", "AFDHAN AFDIILLAH RUZ"),
            ("6", "K0102001800063", "NAUFAL MUSYAFFA"),
            ("7", "K0102001800072", "TEGAR SETIAWAN"),
            ("8", "K0102001800089", "MUHAMMAD FIRDAUS TRI SAPUTRA"),
            ("9", "K0102001800098", "MUFLIH MUZAKI AGUSTA"),
            ("10", "K0102001800107", "IZHAR HABIB MUSYAFFA"),
            ("11", "K0102001800116", "INDRA DAMAR AL - SAMPURNA"),
            ("12", "K0102001800125", "MERISA KUMALA SARI"),
            ("13", "K0102001800134", "RIA SABITHA ZEIN"),
            ("14", "K0102001800143", "MELIA PUTRI"),
            ("15", "K0102001800152", "KHAIRUL ANNAM"),
        ]
    },
    {
        "page": 2,
        "lab": "Lab 1",
        "id_server": "K01020018-AG1K / Lab 1",
        "sesi": 2,
        "pukul": "09:30-11:15",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800614", "MARVEL DIANDRA SAPUTRA"),
            ("2", "K0102001800623", "FARREL FERDINAND"),
            ("3", "K0102001800632", "MUHAMAD ALDI"),
            ("4", "K0102001800649", "NUR HASIM"),
            ("5", "K0102001800658", "ARDIYANTO"),
            ("6", "K0102001800667", "FAHRI FIJRA ARMENDA"),
            ("7", "K0102001800676", "CHODHORI"),
            ("8", "K0102001800685", "FARHAN SEPTIANA RAMADANI"),
            ("9", "K0102001800694", "MUHAMMAD RASYA ASSIDIQ"),
            ("10", "K0102001800703", "DHAFA YUSUF AZHAR"),
            ("11", "K0102001800712", "NAUFAL DAFFA AZIZ"),
            ("12", "K0102001800729", "MUHAMMAD FIRMANSYAH"),
            ("13", "K0102001800738", "IBRAHIMOVIC IRWANSYAH"),
            ("14", "K0102001800747", "MUHAMMAD AQIL ILHAM"),
            ("15", "K0102001800756", "AUDRY"),
        ]
    },
    {
        "page": 3,
        "lab": "Lab 2",
        "id_server": "K01020018-BQ4K / Lab 2",
        "sesi": 1,
        "pukul": "07:00-08:45",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800169", "FATHIR ALINSKY CANAVARO"),
            ("2", "K0102001800178", "HANIFAH AZZAHRA"),
            ("3", "K0102001800187", "FATHIN HAFIZH DARMAWAN"),
            ("4", "K0102001800196", "SILVIANA FEBRIYANTI"),
            ("5", "K0102001800205", "AHMAD WILDAN RAMDANI"),
            ("6", "K0102001800214", "AQILLA YASMIN"),
            ("7", "K0102001800223", "FADHIL RIFQI KHAIRAN"),
            ("8", "K0102001800232", "PUTRA JANABI NURRISQI"),
            ("9", "K0102001800249", "MAURINHO GERRARDI"),
            ("10", "K0102001800258", "Julian Afdillah"),
            ("11", "K0102001800267", "MUHAMMAD RASYA IZHAR MALIQY"),
            ("12", "K0102001800276", "TIARA ANGGRAENI"),
            ("13", "K0102001800285", "PANGERAN FAADHIL HIZBULLAH"),
            ("14", "K0102001800294", "ARKAN ATAYA RAMADHAN"),
            ("15", "K0102001800303", "ANDIKA PRATAMA"),
        ]
    },
    {
        "page": 4,
        "lab": "Lab 2",
        "id_server": "K01020018-BQ4K / Lab 2",
        "sesi": 2,
        "pukul": "09:30-11:15",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800765", "FAHRI PRATAMA MULYA"),
            ("2", "K0102001800774", "FARLIE LAILATUL QODRI LATURUA"),
            ("3", "K0102001800783", "RIZSKI AULIA PUTRA"),
            ("4", "K0102001800792", "TANZILAL NOTO PRAWIRO"),
            ("5", "K0102001800809", "Dava Arya Pratama"),
            ("6", "K0102001800818", "FARID RODIKIN"),
            ("7", "K0102001800827", "MUHAMAD ARIF ALBAR"),
            ("8", "K0102001800836", "MUHAMMAD RIZAL ANWAR"),
            ("9", "K0102001800845", "FAKHRI JAZMI RAZIQ"),
            ("10", "K0102001800854", "Iqbal Marvel Saputra"),
            ("11", "K0102001800863", "JUANITO SABONO ELATH"),
            ("12", "K0102001800872", "MOCHAMMAD DAVA FLADYO"),
            ("13", "K0102001800889", "SAVA ALKEYZA"),
            ("14", "K0102001800898", "NABIL AL FAJAR THAHER"),
            ("15", "K0102001800907", "RIZKI FAREL NOVRIANSYAH"),
        ]
    },
    {
        "page": 5,
        "lab": "Lab 3",
        "id_server": "K01020018-CQ6K / Lab 3",
        "sesi": 1,
        "pukul": "07:00-08:45",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800312", "NAYLA CEASARY ARTI UTOMO"),
            ("2", "K0102001800329", "YULIYANA PUTRI"),
            ("3", "K0102001800338", "REVAL SETIO"),
            ("4", "K0102001800347", "MUHAMAD RIZKY JANUAR LATTUMANUWIJ"),
            ("5", "K0102001800356", "SEPTIAWAN SAPUTRA BATAH"),
            ("6", "K0102001800365", "NAYRA ALMA SHAFIRA"),
            ("7", "K0102001800374", "GAMALIEL JOSEVANNO PASKAH TUMADE"),
            ("8", "K0102001800383", "SESHA KURNIASIH"),
            ("9", "K0102001800392", "ABIAN KAUTSAR BAHRY"),
            ("10", "K0102001800409", "KALYCA TAHARA AZULA SETIAWAN"),
            ("11", "K0102001800418", "RIFQI ARRAZZAQ"),
            ("12", "K0102001800427", "M. Rizky Ramadhan Labuwatu"),
            ("13", "K0102001800436", "RAIHAN GALIH PRATAMA"),
            ("14", "K0102001800445", "RAIHAN DWI RAHADI"),
            ("15", "K0102001800454", "CHRISTIAN IMMANUEL PURBA"),
        ]
    },
    {
        "page": 6,
        "lab": "Lab 3",
        "id_server": "K01020018-CQ6K / Lab 3",
        "sesi": 2,
        "pukul": "09:30-11:15",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800916", "RIZKY ADITYA"),
            ("2", "K0102001800925", "Rayhanul Hakim"),
            ("3", "K0102001800934", "KEVIN JULIVAN"),
            ("4", "K0102001800943", "ANDHIKA WAHID SYAWALUDIN"),
            ("5", "K0102001800952", "MUHAMMAD FARHAN MAULANA"),
            ("6", "K0102001800969", "MUHAMMAD RIO FEBRIAN"),
            ("7", "K0102001800978", "RIFA DWIKY PADLIANSYAH"),
            ("8", "K0102001800987", "HIDAYATUR RAIHAN"),
            ("9", "K0102001800996", "JOSHUA DEVIS MORENZA"),
            ("10", "K0102001801005", "MUHAMMAD RIZQY AKBAR"),
            ("11", "K0102001801014", "PUTERA FAZAR RAMADHAN"),
            ("12", "K0102001801023", "Muhamad Vickry Pratama"),
            ("13", "K0102001801032", "MUHAMMAD ZAHRAN KUSUMA"),
            ("14", "K0102001801049", "SIGIT WAHYUDI"),
        ]
    },
    {
        "page": 7,
        "lab": "Lab TL",
        "id_server": "K01020018-DY7K / Lab TL",
        "sesi": 1,
        "pukul": "07:00-08:45",
        "hari": "Senin - Selasa",
        "tanggal": "26 - 27 Oktober 2026",
        "peserta": [
            ("1", "K0102001800463", "ALVINO PRATAMA"),
            ("2", "K0102001800472", "AUFA DWI AKBAR PRASETYO"),
            ("3", "K0102001800489", "DESCAM DANUARTA"),
            ("4", "K0102001800498", "MUHAMMAD SAHRUL RAMADHAN"),
            ("5", "K0102001800507", "Nabil Syahputra"),
            ("6", "K0102001800516", "Muhammad Rizky Zulkarnain"),
            ("7", "K0102001800525", "MUHAMMAD IBRAHIM SOLIHIN PUTRA"),
            ("8", "K0102001800534", "KHOERU DZIKRI"),
            ("9", "K0102001800543", "YUDA SAPUTRA"),
            ("10", "K0102001800552", "MUHAMMAD FATHIR AL QAHTANI"),
            ("11", "K0102001800569", "RIFQI IRFANI"),
            ("12", "K0102001800578", "PUTRA NAZAR MUTTAQIN"),
            ("13", "K0102001800587", "RAFAH WAHYUDI"),
            ("14", "K0102001800596", "Rafi Ananda Saputra"),
            ("15", "K0102001800605", "ALEX RAHMAN HAKIM"),
        ]
    }
]

for pdata in PAGES_DATA:
    page_num = pdata["page"]
    lab = pdata["lab"]
    id_server = pdata["id_server"]
    sesi = pdata["sesi"]
    pukul = pdata["pukul"]
    hari = pdata["hari"]
    tanggal = pdata["tanggal"]
    peserta_list = pdata["peserta"]

    rows_svg = []
    y_start = 222
    row_height = 23

    for idx, (no, uname, name) in enumerate(peserta_list):
        y = y_start + idx * row_height
        bg_color = "#f8fafc" if idx % 2 == 1 else "#ffffff"
        
        # signature display alternating 1., 2.
        sig_num = f"{no}."
        sig_x = 560 if int(no) % 2 == 1 else 620

        row = f"""
        <rect x="25" y="{y}" width="750" height="{row_height}" fill="{bg_color}" stroke="#0f172a" stroke-width="0.8"/>
        <line x1="65" y1="{y}" x2="65" y2="{y + row_height}" stroke="#0f172a" stroke-width="0.8"/>
        <line x1="200" y1="{y}" x2="200" y2="{y + row_height}" stroke="#0f172a" stroke-width="0.8"/>
        <line x1="535" y1="{y}" x2="535" y2="{y + row_height}" stroke="#0f172a" stroke-width="0.8"/>
        <line x1="685" y1="{y}" x2="685" y2="{y + row_height}" stroke="#0f172a" stroke-width="0.8"/>
        
        <text x="45" y="{y + 16}" font-size="10.5" text-anchor="middle" font-family="'Courier New', monospace" font-weight="bold" fill="#0f172a">{no}</text>
        <text x="75" y="{y + 16}" font-size="10.5" font-family="'Courier New', monospace" font-weight="bold" fill="#0f172a">{html.escape(uname)}</text>
        <text x="210" y="{y + 16}" font-size="10.5" font-family="'Arial', sans-serif" font-weight="bold" fill="#0f172a">{html.escape(name)}</text>
        <text x="{sig_x}" y="{y + 16}" font-size="10" font-family="'Arial', sans-serif" fill="#64748b">{sig_num}</text>
        """
        rows_svg.append(row)

    rows_rendered = "\n".join(rows_svg)

    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="100%" height="100%" style="background:#ffffff; font-family: 'Arial', sans-serif;">
  <rect width="800" height="1130" fill="#ffffff" />
  
  <!-- Outer border line like formal exam doc -->
  <rect x="15" y="15" width="770" height="1100" fill="none" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Tut Wuri Handayani Logo -->
  {TUT_WURI_LOGO}

  <!-- Header Title -->
  <g text-anchor="middle" font-family="'Arial', sans-serif">
    <text x="420" y="42" font-size="14.5" font-weight="bold" fill="#0f172a" letter-spacing="0.5">DAFTAR HADIR PESERTA</text>
    <text x="420" y="62" font-size="15.5" font-weight="bold" fill="#0f172a" letter-spacing="0.5">TES KEMAMPUAN AKADEMIK (TKA) SMK</text>
    <text x="420" y="80" font-size="13.5" font-weight="bold" fill="#0f172a" letter-spacing="0.5">TAHUN 2026</text>
  </g>

  <!-- Metadata Information Grid -->
  <!-- Left column -->
  <g font-size="11" font-family="'Arial', sans-serif" fill="#0f172a">
    <text x="30" y="115" font-weight="normal">KOTA/KABUPATEN</text>
    <text x="175" y="115">:  <tspan font-weight="bold">KOTA JAKARTA UTARA</tspan></text>
    <line x1="185" y1="117" x2="490" y2="117" stroke="#0f172a" stroke-width="0.7"/>

    <text x="30" y="137" font-weight="normal">SEKOLAH/MADRASAH</text>
    <text x="175" y="137">:  <tspan font-weight="bold">SMKS TANJUNG PRIOK 1 JAKARTA</tspan></text>
    <line x1="185" y1="139" x2="490" y2="139" stroke="#0f172a" stroke-width="0.7"/>

    <text x="30" y="159" font-weight="normal">ID SERVER / RUANG</text>
    <text x="175" y="159">:  <tspan font-weight="bold">{id_server}</tspan></text>
    <line x1="185" y1="161" x2="490" y2="161" stroke="#0f172a" stroke-width="0.7"/>

    <text x="30" y="181" font-weight="normal">HARI</text>
    <text x="175" y="181">:  <tspan font-weight="bold">{hari}</tspan></text>
    <text x="250" y="181">TANGGAL :  <tspan font-weight="bold">{tanggal}</tspan></text>
    <line x1="185" y1="183" x2="245" y2="183" stroke="#0f172a" stroke-width="0.7"/>
    <line x1="315" y1="183" x2="490" y2="183" stroke="#0f172a" stroke-width="0.7"/>
  </g>

  <!-- Right column -->
  <g font-size="11" font-family="'Arial', sans-serif" fill="#0f172a">
    <text x="510" y="115" font-weight="normal">KODE</text>
    <text x="560" y="115">:  <tspan font-weight="bold">02</tspan></text>
    <line x1="570" y1="117" x2="680" y2="117" stroke="#0f172a" stroke-width="0.7"/>

    <text x="510" y="137" font-weight="normal">KODE</text>
    <text x="560" y="137">:  <tspan font-weight="bold">0018</tspan></text>
    <line x1="570" y1="139" x2="680" y2="139" stroke="#0f172a" stroke-width="0.7"/>

    <text x="510" y="159" font-weight="normal">SESI</text>
    <text x="560" y="159">:  <tspan font-weight="bold" fill="#2563eb">{sesi}</tspan></text>
    <line x1="570" y1="161" x2="680" y2="161" stroke="#0f172a" stroke-width="0.7"/>

    <text x="510" y="181" font-weight="normal">PUKUL</text>
    <text x="560" y="181">:  <tspan font-weight="bold">{pukul} WIB</tspan></text>
    <line x1="570" y1="183" x2="680" y2="183" stroke="#0f172a" stroke-width="0.7"/>
  </g>

  <!-- Table Header -->
  <g font-family="'Arial', sans-serif" font-weight="bold" font-size="11" fill="#0f172a">
    <rect x="25" y="196" width="750" height="26" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="65" y1="196" x2="65" y2="222" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="200" y1="196" x2="200" y2="222" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="535" y1="196" x2="535" y2="222" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="685" y1="196" x2="685" y2="222" stroke="#0f172a" stroke-width="1.2"/>

    <text x="45" y="213" text-anchor="middle">No.</text>
    <text x="132" y="213" text-anchor="middle">Username</text>
    <text x="367" y="213" text-anchor="middle">Nama Peserta</text>
    <text x="610" y="213" text-anchor="middle">Tanda Tangan</text>
    <text x="735" y="213" text-anchor="middle">Keterangan</text>
  </g>

  <!-- Rows -->
  {rows_rendered}

  <!-- Footnotes & Signature Section -->
  <g transform="translate(30, 580)" font-family="'Arial', sans-serif" font-size="10" fill="#0f172a">
    <text x="0" y="0" font-weight="bold" font-style="italic">Keterangan :</text>
    <text x="0" y="16">1. Dibuat rangkap 3 (tiga), masing-masing untuk sekolah, kota/kab dan Provinsi.</text>
    <text x="0" y="30">2. Pengawas ruang menyilang Nama Peserta yang tidak hadir.</text>
    <text x="0" y="44">3. Daftar hadir untuk pusat di upload melalui laman TKA.</text>

    <!-- Attendance Count Box -->
    <rect x="0" y="60" width="280" height="60" fill="none" stroke="#0f172a" stroke-width="0.8"/>
    <line x1="0" y1="80" x2="280" y2="80" stroke="#0f172a" stroke-width="0.8"/>
    <line x1="0" y1="100" x2="280" y2="100" stroke="#0f172a" stroke-width="0.8"/>
    <text x="8" y="74">Jumlah Peserta yang Seharusnya Hadir  :  ______  peserta</text>
    <text x="8" y="94">Jumlah Peserta yang Tidak Hadir       :  ______  peserta</text>
    <text x="8" y="114">Jumlah Peserta Hadir                  :  ______  peserta</text>

    <!-- Signatures -->
    <text x="450" y="60" font-weight="bold" text-anchor="middle">Proktor</text>
    <text x="450" y="115" text-anchor="middle">( ______________________________ )</text>
    <text x="380" y="130">NIP.</text>

    <text x="630" y="60" font-weight="bold" text-anchor="middle">Pengawas</text>
    <text x="630" y="115" text-anchor="middle">( ______________________________ )</text>
    <text x="560" y="130">NIP.</text>
  </g>

  <!-- Bottom Ministry Banner -->
  <g transform="translate(25, 1020)">
    <rect x="0" y="0" width="750" height="32" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
    <rect x="0" y="0" width="30" height="32" fill="#0f172a" opacity="0.05" stroke="#0f172a" stroke-width="0.8"/>
    <rect x="720" y="0" width="30" height="32" fill="#0f172a" opacity="0.05" stroke="#0f172a" stroke-width="0.8"/>
    <text x="375" y="21" font-size="12" font-family="'Arial', sans-serif" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="1">
      KEMENTERIAN PENDIDIKAN DASAR DAN MENENGAH
    </text>
  </g>
</svg>"""

    filepath = f"public/tka/page-{page_num}.svg"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated {filepath}")

print("All 7 TKA pages generated successfully!")
