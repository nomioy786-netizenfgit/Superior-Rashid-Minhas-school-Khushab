'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AdminPortal from '@/components/AdminPortal';

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <AdminPortal isOpen={isOpen} onClose={() => (window.location.href = '/')} />
      <div className="text-center text-slate-400 text-sm mt-4">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Superior Rashid Minhas School Website</span>
        </Link>
      </div>
    </div>
  );
}
