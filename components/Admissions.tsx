'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  Sparkles,
  ClipboardList,
} from 'lucide-react';
import { initialSchoolInfo } from '@/lib/data';

export default function Admissions({
  onInquirySubmitted,
}: {
  onInquirySubmitted?: () => void;
}) {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    classApplying: '',
    phone: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit admission inquiry.');
      }

      setSuccessInfo({
        inquiryId: data.inquiryId,
        message: data.message,
      });

      setFormData({
        studentName: '',
        fatherName: '',
        classApplying: '',
        phone: '',
        email: '',
        message: '',
      });

      if (onInquirySubmitted) {
        onInquirySubmitted();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Superior Rashid Minhas School Khushab, I want information about admission.'
  );

  return (
    <section id="admissions" className="py-20 lg:py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Admissions Information & Quick Steps */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Open {initialSchoolInfo.academicYear}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Admissions Open
            </h2>

            <p className="text-amber-200 text-base sm:text-lg font-semibold mb-6">
              Give your child the opportunity to learn, grow and build a successful future.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              We welcome prospective students and parents to discover our vibrant learning community. Early admissions enjoy preference in school transport routes and elective seat reservations.
            </p>

            {/* Steps Guide */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300">Submit Inquiry Form</h4>
                  <p className="text-xs text-slate-300">Fill in the online form or send us a WhatsApp message.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300">Campus Tour &amp; Diagnostic Check</h4>
                  <p className="text-xs text-slate-300">Visit our campus on College Road, Khushab and meet subject teachers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300">Enrollment &amp; Uniform Pack</h4>
                  <p className="text-xs text-slate-300">Complete standard documentation and join the Superior family.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Apply via WhatsApp</span>
              </a>

              <a
                href={`tel:${initialSchoolInfo.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{initialSchoolInfo.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Admission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-emerald-950">
                    Admission Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast response guaranteed within 24 hours
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <ClipboardList className="w-5 h-5" />
                </div>
              </div>

              {/* Success Alert */}
              {successInfo && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Registered!</span>
                  </div>
                  <p className="text-xs text-emerald-800 mb-2">
                    {successInfo.message}
                  </p>
                  <div className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-lg border border-emerald-300 inline-block">
                    Reference Code: {successInfo.inquiryId}
                  </div>
                  <div className="mt-3">
                    <a
                      href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=Assalam-o-Alaikum,%20I%20have%20submitted%20an%20admission%20inquiry%20(Ref:%20${successInfo.inquiryId})%20for%20Superior%20Rashid%20Minhas%20School%20Khushab.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Notify School on WhatsApp now</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Father / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Class Applying For *
                    </label>
                    <select
                      name="classApplying"
                      required
                      value={formData.classApplying}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white"
                    >
                      <option value="">Select target class...</option>
                      <option value="Playgroup / Nursery">Early Education (Playgroup / Nursery)</option>
                      <option value="Prep Class">Prep Class</option>
                      <option value="Primary (Grade 1 - 5)">Primary Classes (Grade 1 – 5)</option>
                      <option value="Middle (Grade 6 - 8)">Middle Classes (Grade 6 – 8)</option>
                      <option value="Grade 9 (Science / Bio)">Grade 9 (Science - Biology)</option>
                      <option value="Grade 9 (Science / Computer)">Grade 9 (Science - Computer)</option>
                      <option value="Grade 10 (Matriculation)">Grade 10 (Matriculation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 03417885841"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. parent@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Prior School (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention any queries regarding van routes, previous marks, or special requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm bg-slate-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-5 h-5" />
                      <span>Submit Admission Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
