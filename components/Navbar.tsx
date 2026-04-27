
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // Using a direct link format for Google Drive thumbnail/preview for better reliability
  const logoUrl = "https://drive.google.com/thumbnail?id=1aVGydXBLShtJ0v7HrEutC1V8zEMMbGOd&sz=w200";

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Warta Berita', path: '/warta' },
    { name: 'Kurikulum', path: '/kurikulum' },
    { name: 'Siswa', path: '/siswa' },
    { name: 'Guru', path: '/guru' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Tautan', path: '/tautan' },
    { name: 'Unggah & Unduh Berkas', path: '/berkas' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-md border-b-4 border-[#3b82f6]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white p-1 shadow-sm rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center">
               <img 
                src={logoUrl} 
                alt="Logo SMK Tanjung Priok 1" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/64?text=ST1";
                }}
              />
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-black text-[#0f172a] leading-tight">SMK TANJUNG PRIOK 1</span>
              <p className="text-xs text-[#3b82f6] uppercase tracking-widest font-black italic">Excellent and Professional</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-black uppercase tracking-tighter transition-all duration-300 rounded-xl ${
                  isActive(link.path)
                    ? 'text-white bg-[#3b82f6] shadow-lg shadow-blue-500/20'
                    : 'text-[#0f172a] hover:text-[#3b82f6] hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Menu (Medium Screens) */}
          <div className="hidden md:flex xl:hidden items-center space-x-1">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-2 text-[10px] font-black uppercase tracking-tighter transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-white bg-[#3b82f6]'
                    : 'text-[#0f172a] hover:text-[#3b82f6]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/tautan" className="px-2 py-2 text-[10px] font-black uppercase tracking-tighter text-[#3b82f6] animate-pulse">Lainnya</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0f172a] hover:text-[#3b82f6] focus:outline-none"
            >
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-50 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-bold rounded-lg mb-1 ${
                  isActive(link.path) ? 'bg-[#3b82f6] text-white' : 'text-[#0f172a] hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
