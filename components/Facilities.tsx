'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  Bus,
  CheckCircle2,
} from 'lucide-react';
import { schoolFacilities } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  Bus,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
            Campus Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2 mb-4 tracking-tight">
            Our Modern Campus Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            State-of-the-art resources designed to foster intellectual discovery, athletic energy, scientific curiosity, and student well-being.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolFacilities.map((facility) => {
            const Icon = iconMap[facility.iconName] || Sparkles;
            return (
              <div
                key={facility.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={facility.imageUrl}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-emerald-950/90 text-amber-400 flex items-center justify-center shadow-md backdrop-blur-sm border border-amber-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-emerald-950 mb-2 group-hover:text-emerald-800 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-200/60 space-y-1.5">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
