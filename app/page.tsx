'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSchool from '@/components/AboutSchool';
import Academics from '@/components/Academics';
import Facilities from '@/components/Facilities';
import StudentLife from '@/components/StudentLife';
import Gallery from '@/components/Gallery';
import Admissions from '@/components/Admissions';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import AdminPortal from '@/components/AdminPortal';
import { initialGallery, GalleryItem } from '@/lib/data';

export default function HomePage() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGallery);

  // Sync gallery from server store
  const refreshGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setGalleryItems(data.data);
      }
    } catch (err) {
      console.error('Failed to load gallery items:', err);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (!ignore && data.success && Array.isArray(data.data)) {
          setGalleryItems(data.data);
        }
      } catch (err) {
        console.error('Failed to load gallery items:', err);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 1. Header with Top Info Bar & Sticky Nav */}
      <Header onOpenAdmin={() => setAdminOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Why Choose Us (5 cards) */}
        <WhyChooseUs />

        {/* 4. About School */}
        <AboutSchool />

        {/* 5. Academics */}
        <Academics />

        {/* 6. Facilities */}
        <Facilities />

        {/* 7. Student Life */}
        <StudentLife />

        {/* 8. Photo Gallery with Filter & Lightbox */}
        <Gallery items={galleryItems} />

        {/* 9. Admissions Section */}
        <Admissions onInquirySubmitted={refreshGallery} />

        {/* 10. Contact Section with Map */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenAdmin={() => setAdminOpen(true)} />

      {/* 12. Floating WhatsApp Button (Fixed Bottom-Right) */}
      <FloatingWhatsApp />

      {/* 13. Admin Portal Modal */}
      <AdminPortal
        isOpen={adminOpen}
        onClose={() => {
          setAdminOpen(false);
          refreshGallery();
        }}
      />
    </div>
  );
}
