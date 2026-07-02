import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Sistem Informasi Kurikulum SMK TANJUNG PRIOK 1 | Portal Akademik & SPP Online",
  description = "Pusat Informasi Kurikulum SMK TANJUNG PRIOK 1. Akses jadwal pelajaran, kalender akademik, bimbingan PKL, sertifikasi LSP, modul generator PPM, serta cek SPP & keuangan siswa secara mandiri dan real-time.",
  keywords = "SMK Tanjung Priok 1, Kurikulum SMK, Cek SPP Online SMK Tanjung Priok 1, LSP SMK Tanjung Priok 1, Modul Generator PPM, UKK 2026, USBK 2026, SPMB 2026, SMK Jakarta Utara, Pendidikan Vokasi",
  canonical = "https://tp1kurikulum.my.id/",
  ogImage = "https://tp1kurikulum.my.id/og-image.jpg"
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, value);
      } else {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        }
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
    };

    // Update standard SEO metas
    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);

    // Update OpenGraph metas
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', canonical);
    updateMetaTag('meta[property="og:image"]', 'content', ogImage);

    // Update Twitter card metas
    updateMetaTag('meta[property="twitter:title"]', 'content', title);
    updateMetaTag('meta[property="twitter:description"]', 'content', description);
    updateMetaTag('meta[property="twitter:image"]', 'content', ogImage);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonical);
      document.head.appendChild(linkCanonical);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};
