
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const footerLogoUrl = "https://drive.google.com/thumbnail?id=1jzEQMGw4tEbkBsubQ3HB5Xg__X_0lIFA&sz=w200";

  return (
    <footer className="bg-[#1a3a5a] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white p-2 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={footerLogoUrl} 
                  alt="Logo SMK Tanjung Priok 1" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/64?text=ST1";
                  }}
                />
              </div>
              <h2 className="text-2xl font-black tracking-tighter">SMK TANJUNG <br/>PRIOK 1</h2>
            </div>
            <p className="text-base text-gray-400 leading-relaxed font-medium">
              Membangun kompetensi global dengan integrasi kurikulum industri dan nilai karakter budi pekerti luhur melaui pendekatan Deep Learning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-black mb-8 border-b-2 border-[#059669] pb-3 inline-block uppercase tracking-widest text-xs">Menu Cepat</h3>
            <ul className="space-y-4 text-base text-gray-400 font-bold">
              <li><Link to="/kurikulum" className="hover:text-emerald-400 transition-all flex items-center">
                <span className="w-1 h-1 bg-[#059669] mr-3 rounded-full"></span>Kurikulum Deep Learning</Link>
              </li>
              <li><Link to="/siswa" className="hover:text-emerald-400 transition-all flex items-center">
                <span className="w-1 h-1 bg-[#059669] mr-3 rounded-full"></span>Data & Administrasi</Link>
              </li>
              <li><Link to="/guru" className="hover:text-emerald-400 transition-all flex items-center">
                <span className="w-1 h-1 bg-[#059669] mr-3 rounded-full"></span>Jadwal & Ruang Guru</Link>
              </li>
              <li><Link to="/galeri" className="hover:text-emerald-400 transition-all flex items-center">
                <span className="w-1 h-1 bg-[#059669] mr-3 rounded-full"></span>Galeri Dokumentasi</Link>
              </li>
              <li><Link to="/berkas" className="hover:text-emerald-400 transition-all flex items-center">
                <span className="w-1 h-1 bg-[#059669] mr-3 rounded-full"></span>Unggah & Unduh Berkas</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-black mb-8 border-b-2 border-[#059669] pb-3 inline-block uppercase tracking-widest text-xs">Jejaring Sosial</h3>
            <div className="flex space-x-4">
              <SocialIcon color="bg-blue-800" label="F" />
              <SocialIcon color="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600" label="IG" />
              <SocialIcon color="bg-red-700" label="YT" />
            </div>
            <p className="text-sm text-gray-500 mt-8 font-medium">Ikuti aktivitas harian dan prestasi siswa kami melalui platform sosial resmi.</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black mb-8 border-b-2 border-[#059669] pb-3 inline-block uppercase tracking-widest text-xs">Kontak Kami</h3>
            <address className="not-italic text-sm text-gray-400 space-y-4 font-bold">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Jl. Mangga No. 3, Kel. Lagoa, Jakarta Utara</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>(021) 4301192</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="break-all">smk1dikantara@gmail.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-black text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} TIM IT SMK TANJUNG PRIOK 1</p>
          <p className="mt-4 md:mt-0">MADE WITH PASSION FOR EDUCATION</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ color: string, label: string }> = ({ color, label }) => (
  <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white cursor-pointer hover:scale-110 transition shadow-lg`}>
    {label}
  </div>
);
