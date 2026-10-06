'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { initialSchoolInfo } from '@/lib/data';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    'Hello Superior Rashid Minhas School Khushab, I want information about admission.'
  );

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <span>Chat with Admissions ({initialSchoolInfo.whatsapp})</span>
      </div>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${initialSchoolInfo.whatsappInternational}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Superior Rashid Minhas School Khushab"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 fill-current text-white relative z-10" />
      </a>
    </aside>
  );
}
