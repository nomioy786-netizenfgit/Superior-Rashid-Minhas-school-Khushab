'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Check,
  ChevronRight,
  BookOpen,
  Calendar,
  X,
  MessageCircle,
} from 'lucide-react';
import { academicGrades, AcademicGrade, initialSchoolInfo } from '@/lib/data';

export default function Academics() {
  const [selectedGrade, setSelectedGrade] = useState<AcademicGrade | null>(null);

  return (
    <section id="academics" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
            Curriculum &amp; Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2 mb-4 tracking-tight">
            Academic Excellence at Every Stage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our educational framework is tailored to the developmental stages of children, fostering curiosity in early years and high-stakes board competence in secondary years.
          </p>
        </div>

        {/* 4 Academic Grade Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {academicGrades.map((grade) => (
            <div
              key={grade.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-emerald-600 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={grade.imageUrl}
                  alt={grade.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-emerald-950/90 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {grade.ageGroup}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1">
                  {grade.subTitle}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-800 transition-colors">
                  {grade.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {grade.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  {grade.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedGrade(grade)}
                  className="mt-auto w-full inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-900 text-emerald-900 hover:text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grade Details Modal */}
      {selectedGrade && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedGrade(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                {selectedGrade.subTitle} &middot; {selectedGrade.ageGroup}
              </span>
              <h3 className="text-2xl font-extrabold text-emerald-950 mt-1">
                {selectedGrade.title}
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedGrade.description}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
                Key Learning Outcomes &amp; Focus
              </h4>
              <div className="space-y-2">
                {selectedGrade.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2.5">
                Core Subjects Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedGrade.subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-800 text-xs font-medium px-3 py-1 rounded-lg"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href="#admissions"
                onClick={() => setSelectedGrade(null)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
              >
                Inquire for {selectedGrade.title}
              </a>
              <a
                href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20admission%20in%20${encodeURIComponent(selectedGrade.title)}%20at%20Superior%20Rashid%20Minhas%20School%20Khushab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-xs hover:text-emerald-900"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
