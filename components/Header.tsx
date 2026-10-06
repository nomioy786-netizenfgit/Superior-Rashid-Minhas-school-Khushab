'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Menu,
  X,
  Award,
  GraduationCap,
  Lock,
} from 'lucide-react';
import { initialSchoolInfo } from '@/lib/data';

export default function Header({
  onOpenAdmin,
}: {
  onOpenAdmin?: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Student Life', href: '#student-life' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a
              href={`tel:${initialSchoolInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{initialSchoolInfo.phone}</span>
            </a>
            <a
              href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">{initialSchoolInfo.whatsapp}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{initialSchoolInfo.address}, Khushab, Punjab</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-200">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Mon – Sat: 8:00 AM – 2:00 PM</span>
            </div>
            {onOpenAdmin ? (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-800"
                title="Open School Admin Portal"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Admin Portal</span>
              </button>
            ) : (
              <Link
                href="/admin"
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-800"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Admin Portal</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center text-amber-400 shadow-md border border-amber-500/50 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold text-emerald-950 tracking-tight leading-tight group-hover:text-emerald-800 transition-colors">
                Superior Rashid Minhas
              </span>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">
                School Khushab
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-800 relative py-1 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admission Open</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  Apply for Admission
                </a>
                <a
                  href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {initialSchoolInfo.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
