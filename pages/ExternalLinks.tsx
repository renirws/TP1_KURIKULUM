import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, BookOpen } from 'lucide-react';

const ExternalLinks: React.FC = () => {
  const links = [
    {
      title: "Tefa DKV (Teaching Factory)",
      description: "Portal resmi Teaching Factory Program Keahlian Desain Komunikasi Visual SMK Tanjung Priok 1. Showcase karya siswa dan layanan jasa kreatif.",
      url: "https://www.priokart.my.id",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      tag: "Project"
    },
    {
      title: "Bimbingan PKL",
      description: "Sistem informasi dan panduan bimbingan Praktik Kerja Lapangan (PKL) untuk siswa-siswi SMK Tanjung Priok 1.",
      url: "https://simpkl.smktanjungpriok1.sch.id",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      tag: "Akademik"
    },
    {
      title: "Tes Minat Bakat SPMB",
      description: "Uji minat dan bakat bagi calon peserta didik baru SMK Tanjung Priok 1 sebagai bagian dari rangkaian pendaftaran.",
      url: "https://tesminatbakatsmktp01.netlify.app/",
      icon: <ExternalLink className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      tag: "SPMB"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#3b82f6] font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Resources & Portals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#0f172a] tracking-tight mb-6"
          >
            Tautan <span className="text-[#3b82f6]">Penting</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-medium max-w-2xl mx-auto"
          >
            Akses cepat ke portal khusus, sistem bimbingan, dan platform eksternal pendukung kegiatan belajar mengajar di SMK Tanjung Priok 1.
          </motion.p>
        </header>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-start"
            >
              {/* Animated Background Decor */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${link.color} opacity-5 rounded-bl-[5rem] group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-500`}>
                {link.icon}
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-[#3b82f6] bg-blue-50 px-3 py-1 rounded-full mb-4">
                {link.tag}
              </span>

              <h2 className="text-2xl font-black text-[#0f172a] mb-4 group-hover:text-[#3b82f6] transition-colors">
                {link.title}
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                {link.description}
              </p>

              <div className="mt-auto flex items-center text-[#0f172a] font-black text-sm group-hover:translate-x-2 transition-transform duration-300">
                Kunjungi Situs
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* SEO Content Section */}
        <section className="max-w-4xl mx-auto mt-24 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-black text-[#0f172a] mb-6">Integrasi Digital Kurikulum</h2>
          <div className="prose prose-blue max-w-none text-gray-500 font-medium">
            <p className="mb-4">
              Sebagai bagian dari upaya digitalisasi pendidikan, SMK Tanjung Priok 1 mengembangkan ekosistem pendukung yang memudahkan kolaborasi antar industri, guru, dan siswa. 
              <strong> Teaching Factory (Tefa)</strong> di program keahlian DKV merupakan cerminan dari kurikulum berbasis produk yang nyata dan kompetitif.
            </p>
            <p>
              Program <strong>PKL (Praktik Kerja Lapangan)</strong> juga didukung dengan sistem bimbingan online untuk memastikan monitoring kompetensi siswa di industri berjalan secara efektif dan terdokumentasi dengan baik.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExternalLinks;
