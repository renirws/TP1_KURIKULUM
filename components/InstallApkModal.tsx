import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Smartphone, 
  X, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Share2, 
  PlusSquare, 
  ExternalLink,
  Laptop,
  Check
} from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallApkModal: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed as PWA / APK)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for beforeinstallprompt event
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsOpen(false);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // If prompt is not available, show the modal guide
      setIsOpen(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Floating Install Pill for Mobile & Desktop - Positioned above BottomNav on mobile */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2.5 border-2 border-white/40 cursor-pointer backdrop-blur-md"
          aria-label="Pasang APK Resmi SMK Tanjung Priok 1"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <Smartphone className="w-4 h-4 text-white" />
          <span className="text-xs tracking-wider uppercase">Pasang APK Mobile</span>
        </motion.button>
      </div>

      {/* Modal Dialog for APK & PWA installation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 my-8"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0f172a] via-blue-900 to-indigo-950 p-6 text-white relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1aVGydXBLShtJ0v7HrEutC1V8zEMMbGOd&sz=w200" 
                      alt="Logo SMK Tanjung Priok 1" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-300" />
                      Aplikasi Resmi
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      APK Kurikulum TP1 Mobile
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                  Pasang aplikasi di layar utama ponsel pintar Anda untuk akses instan tanpa membuka peramban secara manual.
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {/* Benefits Pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-start space-x-2.5">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-black text-slate-800 block">Sangat Cepat</span>
                      <span className="text-[10px] text-slate-500 leading-tight block">Ukuran &lt; 5MB, tanpa kuota berat</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-start space-x-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-black text-slate-800 block">Aman &amp; Resmi</span>
                      <span className="text-[10px] text-slate-500 leading-tight block">Terverifikasi sekolah</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                {deferredPrompt ? (
                  <button
                    onClick={handleInstallClick}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-blue-500/25 flex items-center justify-center space-x-2 transition-all transform active:scale-95 cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Pasang APK Sekarang (1-Klik)</span>
                  </button>
                ) : null}

                {/* Step-by-Step Instructions */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block">
                    {isIOS ? 'Panduan Pasang di iPhone / iPad (Safari)' : 'Panduan Pasang di Android (Google Chrome)'}
                  </span>

                  {isIOS ? (
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3 text-xs text-slate-700">
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <p>Buka halaman ini menggunakan peramban <strong>Safari</strong> di iPhone Anda.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <p className="flex items-center gap-1.5 flex-wrap">
                          Ketuk ikon <strong>Bagikan (Share)</strong> <Share2 className="w-3.5 h-3.5 text-blue-600 inline" /> di bilah bawah layar.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                        <p className="flex items-center gap-1.5 flex-wrap">
                          Gulir ke bawah lalu pilih <PlusSquare className="w-3.5 h-3.5 text-blue-600 inline" /> <strong>"Tambahkan ke Layar Utama"</strong> (Add to Home Screen).
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3 text-xs text-slate-700">
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <p>Ketuk tombol <strong>menu titik tiga (⋮)</strong> di sudut kanan atas peramban Chrome.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <p>Pilih opsi <strong>"Pasang aplikasi"</strong> atau <strong>"Tambahkan ke Layar Utama"</strong> (Install App).</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                        <p>Konfirmasi klik <strong>"Instal"</strong>. Ikon APK resmi akan langsung muncul di beranda ponsel Anda!</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Copy Link & Share */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-semibold truncate">
                    https://tp1kurikulum.my.id/
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shrink-0"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-black">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-slate-500" />
                        <span>Salin Tautan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
