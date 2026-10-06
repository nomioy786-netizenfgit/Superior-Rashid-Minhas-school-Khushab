'use client';

import React, { useState } from 'react';
import {
  Award,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ChevronRight,
  Send,
  Check,
  Facebook,
  Instagram,
  Youtube,
  Lock,
} from 'lucide-react';
import { initialSchoolInfo } from '@/lib/data';

export default function Footer({
  onOpenAdmin,
}: {
  onOpenAdmin?: () => void;
}) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics & Syllabus', href: '#academics' },
    { label: 'Campus Facilities', href: '#facilities' },
    { label: 'Student Life', href: '#student-life' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Admissions 2026', href: '#admissions' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-emerald-950 text-slate-300 pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-emerald-900/70">
          {/* Col 1: School Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-800 text-amber-400 flex items-center justify-center border border-amber-500/50 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight">
                  Superior Rashid Minhas
                </span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  School Khushab
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Providing quality education, character development and a supportive learning environment for the students of Khushab, Punjab. Dedicated to academic brilliance and moral integrity.
            </p>

            {/* Social Media Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-500 text-slate-200 hover:text-emerald-950 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-500 text-slate-200 hover:text-emerald-950 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-500 text-slate-200 hover:text-emerald-950 flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${initialSchoolInfo.whatsappInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366]/80 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{initialSchoolInfo.address}, Khushab, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 font-semibold"
                >
                  WhatsApp: {initialSchoolInfo.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${initialSchoolInfo.phone}`}
                  className="hover:text-amber-400"
                >
                  {initialSchoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`mailto:${initialSchoolInfo.email}`}
                  className="hover:text-amber-400"
                >
                  {initialSchoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Admin Access (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-l-2 border-amber-400 pl-2">
              School Bulletin
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe for academic updates, exam announcements, and holiday schedules.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-emerald-900/50 border border-emerald-800 rounded-l-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-3 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-r-lg flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              {onOpenAdmin ? (
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin &amp; Staff Login</span>
                </button>
              ) : (
                <a
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin &amp; Staff Login</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; 2026 Superior Rashid Minhas School Khushab. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Affiliated with BISE Sargodha</span>
            <span>&middot;</span>
            <span>Khushab, Punjab, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
