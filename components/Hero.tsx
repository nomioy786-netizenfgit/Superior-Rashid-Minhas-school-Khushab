'use client';

import React from 'react';
import {
  GraduationCap,
  Compass,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  BookOpen,
  FlaskConical,
  Bus,
} from 'lucide-react';
import { initialSchoolInfo } from '@/lib/data';

export default function Hero() {
  const highlights = [
    { label: 'Registered Institution', icon: CheckCircle2 },
    { label: 'BISE Sargodha Syllabus', icon: BookOpen },
    { label: 'Modern Science & IT Labs', icon: FlaskConical },
    { label: 'Safe School Transport', icon: Bus },
  ];

  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Dark Green/Navy Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transform transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-slate-950/85" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Admissions announcement banner */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions Open &middot; Academic Session {initialSchoolInfo.academicYear}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Superior Rashid Minhas School{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Khushab
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-bold text-amber-300 mb-4 tracking-tight">
            Building Bright Minds, Inspiring Future Leaders
          </p>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
            Providing quality education, character development and a supportive learning environment for the students of Khushab.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <GraduationCap className="w-5 h-5 text-white" />
              <span>Apply for Admission</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-semibold text-sm px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <Compass className="w-5 h-5 text-amber-300" />
              <span>Explore Our School</span>
            </a>

            <a
              href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Hello%20Superior%20Rashid%20Minhas%20School%20Khushab,%20I%20want%20information%20about%20admission.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
