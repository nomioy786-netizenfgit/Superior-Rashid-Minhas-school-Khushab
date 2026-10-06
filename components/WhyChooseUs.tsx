'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  Monitor,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { featuresList } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  Monitor,
  ShieldCheck,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
            Educational Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2 mb-4 tracking-tight">
            Why Choose Superior Rashid Minhas School?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide a balanced ecosystem where academic rigor, ethical Tarbiyah, and modern scientific discovery work hand in hand.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuresList.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || GraduationCap;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200/80 hover:border-amber-400 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                <div className="w-13 h-13 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-900 group-hover:text-amber-400 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-[11px] font-bold text-amber-600 tracking-wider uppercase mb-1">
                  0{index + 1} &middot; {feature.badge}
                </div>

                <h3 className="text-lg font-bold text-emerald-950 mb-2.5 group-hover:text-emerald-800 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
