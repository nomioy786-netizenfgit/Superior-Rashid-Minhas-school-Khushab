'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Award,
  Users,
  Cpu,
  Trophy,
  CheckCircle,
  X,
  BookOpen,
  Heart,
  Target,
  ArrowRight,
} from 'lucide-react';

export default function AboutSchool() {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    {
      num: '35+',
      label: 'Experienced Faculty',
      sub: 'Dedicated subject specialists',
      icon: Users,
    },
    {
      num: '100%',
      label: 'Modern Learning',
      sub: 'Computer & science lab access',
      icon: Cpu,
    },
    {
      num: '1,500+',
      label: 'Student Development',
      sub: 'Thriving alumni community',
      icon: Trophy,
    },
    {
      num: 'A+ Grade',
      label: 'Quality Education',
      sub: 'Consistent BISE Board results',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus Imagery & Legacy Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                alt="Superior Rashid Minhas School Khushab Campus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-emerald-950/90 backdrop-blur-md text-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-xl max-w-xs">
                <div className="text-3xl font-extrabold text-amber-400 leading-none mb-1">
                  15+ Years
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  Serving Khushab with Academic Integrity & Distinction
                </div>
              </div>
            </div>

            {/* Small accent image card */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80"
                alt="Classroom learning"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content & Statistics */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
              Welcome to Superior School
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-2 mb-6 tracking-tight leading-tight">
              About Superior Rashid Minhas School
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              At <strong>Superior Rashid Minhas School Khushab</strong>, we are committed to shaping the intellectual, moral, and emotional foundation of each student. Inspired by the dedication and valor of Pilot Officer Rashid Minhas (Shaheed), our institution strives to instill unwavering discipline, moral integrity, and academic ambition in every boy and girl.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We move beyond rote memorization with interactive teaching techniques, conceptual reasoning, science practical demonstrations, and dedicated character Tarbiyah. Our experienced teachers foster an engaging, child-friendly atmosphere where curiosity is celebrated and students are prepared for secondary board success and future leadership.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s, index) => {
                const Icon = s.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 border-l-4 border-l-emerald-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-emerald-700" />
                      <span className="text-xl sm:text-2xl font-black text-emerald-950">
                        {s.num}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {s.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read More Modal Trigger & Admission CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow hover:shadow-md transition-all cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href="#academics"
                className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm hover:text-amber-600 transition-colors py-2 px-3"
              >
                <span>View Academic Tiers &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Interactive Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-emerald-950">
                  Principal&apos;s Welcome &amp; Core Philosophy
                </h3>
                <span className="text-xs text-amber-600 font-semibold uppercase">
                  Superior Rashid Minhas School Khushab
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
              <p>
                <strong>Respected Parents &amp; Students,</strong>
              </p>
              <p>
                Education is not merely the transmission of facts from textbooks to exam papers; it is the deliberate cultivation of intellect, character, humility, and moral purpose. At Superior Rashid Minhas School Khushab, we take immense pride in fostering an environment where every young learner is cherished, encouraged, and guided toward both academic brilliance and compassionate citizenship.
              </p>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 my-4">
                <h4 className="font-bold text-emerald-950 flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-emerald-700" />
                  Our Core Pillars:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Conceptual Mastery:</strong> We eliminate cramming through practical demonstrations, regular testing drills, and student-centered inquiry.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Character &amp; Islamic Tarbiyah:</strong> Morning assemblies, Hadith reflection, declamations, and civic honesty are woven into our daily routine.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Safe &amp; Motivating Environment:</strong> Strict student safeguarding, CCTV monitoring, and dedicated female teaching staff for junior sections.</span>
                  </li>
                </ul>
              </div>

              <p>
                We invite you to visit our campus in Khushab, meet our passionate faculty, inspect our computer and science laboratories, and witness first-hand why so many families trust us with their children&apos;s future.
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-emerald-950">Principal &amp; Management</div>
                  <div className="text-xs text-slate-500">Superior Rashid Minhas School Khushab</div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
