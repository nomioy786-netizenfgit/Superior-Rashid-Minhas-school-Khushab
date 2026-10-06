'use client';

import React from 'react';
import Image from 'next/image';
import { studentActivities } from '@/lib/data';

export default function StudentLife() {
  return (
    <section id="student-life" className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
            Holistic Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2 mb-4 tracking-tight">
            Vibrant Student Life &amp; Activities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Schooling at Superior Rashid Minhas extends far beyond the syllabus. We inspire leadership, teamwork, athletic rigor, and creative expression.
          </p>
        </div>

        {/* 6 Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {studentActivities.map((act) => (
            <div
              key={act.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/11] bg-slate-900"
            >
              <Image
                src={act.imageUrl}
                alt={act.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent group-hover:from-emerald-950/98 transition-colors duration-300" />

              {/* Text content pinned at bottom */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-1">
                  {act.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-amber-200 transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
