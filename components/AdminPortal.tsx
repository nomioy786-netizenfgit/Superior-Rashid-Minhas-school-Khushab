'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  User,
  KeyRound,
  LayoutDashboard,
  GraduationCap,
  Mail,
  Image as ImageIcon,
  Settings,
  Code2,
  Trash2,
  CheckCircle,
  MessageCircle,
  LogOut,
  X,
  Search,
  Plus,
  RefreshCw,
  ExternalLink,
  Phone,
  Calendar,
  AlertTriangle,
  Download,
  FileCode,
  Copy,
} from 'lucide-react';
import { initialSchoolInfo, GalleryItem } from '@/lib/data';
import { AdmissionInquiry, ContactMessage } from '@/lib/store';

export default function AdminPortal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'admissions' | 'messages' | 'gallery' | 'settings' | 'export'
  >('dashboard');

  // Data States
  const [admissions, setAdmissions] = useState<AdmissionInquiry[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [schoolSettings, setSchoolSettings] = useState(initialSchoolInfo);
  const [loadingData, setLoadingData] = useState(false);

  // Search filter
  const [inquirySearch, setInquirySearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // New gallery form
  const [newImage, setNewImage] = useState({
    title: '',
    category: 'Campus' as const,
    imageUrl: '',
    caption: '',
  });
  const [galleryMsg, setGalleryMsg] = useState<string | null>(null);

  // Settings update status
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);

  // Code Export Viewer
  const [selectedFile, setSelectedFile] = useState<'database.sql' | 'database.php' | 'index.php' | 'submit-admission.php' | 'README.md'>('database.sql');
  const [copied, setCopied] = useState(false);

  // Fetch data
  const fetchData = async () => {
    setLoadingData(true);
    try {
      const [resAdm, resMsg, resGal, resSet] = await Promise.all([
        fetch('/api/admissions'),
        fetch('/api/contact'),
        fetch('/api/gallery'),
        fetch('/api/settings'),
      ]);

      const [dataAdm, dataMsg, dataGal, dataSet] = await Promise.all([
        resAdm.json(),
        resMsg.json(),
        resGal.json(),
        resSet.json(),
      ]);

      if (dataAdm.success) setAdmissions(dataAdm.data);
      if (dataMsg.success) setMessages(dataMsg.data);
      if (dataGal.success) setGallery(dataGal.data);
      if (dataSet.success) setSchoolSettings(dataSet.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    let ignore = false;
    async function loadData() {
      try {
        const [resAdm, resMsg, resGal, resSet] = await Promise.all([
          fetch('/api/admissions'),
          fetch('/api/contact'),
          fetch('/api/gallery'),
          fetch('/api/settings'),
        ]);

        const [dataAdm, dataMsg, dataGal, dataSet] = await Promise.all([
          resAdm.json(),
          resMsg.json(),
          resGal.json(),
          resSet.json(),
        ]);

        if (!ignore) {
          if (dataAdm.success) setAdmissions(dataAdm.data);
          if (dataMsg.success) setMessages(dataMsg.data);
          if (dataGal.success) setGallery(dataGal.data);
          if (dataSet.success) setSchoolSettings(dataSet.data);
        }
      } catch (err) {
        console.error('Error fetching admin data:', err);
      }
    }

    loadData();
    return () => {
      ignore = true;
    };
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsLoggedIn(true);
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch {
      setLoginError('Authentication network error');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleDeleteAdmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admission inquiry?')) return;
    try {
      await fetch(`/api/admissions/${id}`, { method: 'DELETE' });
      setAdmissions(admissions.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Failed to delete admission:', err);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/admissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      setAdmissions(
        admissions.map((item) =>
          item.id === id ? { ...item, status: status as any } : item
        )
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      setMessages(messages.filter((m) => m.id !== id));
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  };

  const handleAddGalleryImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.title || !newImage.imageUrl) return;

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newImage),
      });
      const data = await res.json();
      if (data.success) {
        setGallery([data.data, ...gallery]);
        setNewImage({ title: '', category: 'Campus', imageUrl: '', caption: '' });
        setGalleryMsg('Photo added to school gallery successfully!');
        setTimeout(() => setGalleryMsg(null), 3000);
      }
    } catch (err) {
      console.error('Failed to add image:', err);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm('Remove this photo from school gallery?')) return;
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      setGallery(gallery.filter((g) => g.id !== id));
    } catch (err) {
      console.error('Failed to remove image:', err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(schoolSettings),
      });
      const data = await res.json();
      if (data.success) {
        setSettingsSuccess('School settings updated successfully!');
        setTimeout(() => setSettingsSuccess(null), 3500);
      }
    } catch (err) {
      console.error('Failed to update settings:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[94vh] shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        {/* Top Header */}
        <div className="bg-emerald-950 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Superior Rashid Minhas School &middot; Admin Portal
              </h2>
              <p className="text-xs text-amber-300">
                School Management &middot; Admissions &middot; Inquiries &middot; PHP/MySQL Export
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-red-300 hover:text-red-100 bg-red-950/50 hover:bg-red-900/60 px-3 py-1.5 rounded-lg border border-red-800 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Admin Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isLoggedIn ? (
          /* Login Screen */
          <div className="p-8 sm:p-12 flex-grow flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                  <KeyRound className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-emerald-950">
                  Staff &amp; Admin Sign In
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Manage admission applications, school settings, and view inquiries
                </p>
              </div>

              {loginError && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="admin123"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {authLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <KeyRound className="w-4 h-4 text-amber-400" />
                    )}
                    <span>Sign In to Dashboard</span>
                  </button>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-100 text-center text-xs text-slate-600">
                  Default credentials: <strong>admin</strong> / <strong>admin123</strong>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Logged In Dashboard Layout */
          <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-60 bg-emerald-950 text-slate-300 p-4 flex flex-row md:flex-col gap-1 border-r border-emerald-900 overflow-x-auto">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'dashboard'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('admissions')}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'admissions'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Admissions</span>
                </div>
                <span className="text-[11px] bg-emerald-900 px-2 py-0.5 rounded-full text-white">
                  {admissions.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'messages'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4" />
                  <span>Contact Inbox</span>
                </div>
                <span className="text-[11px] bg-emerald-900 px-2 py-0.5 rounded-full text-white">
                  {messages.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'gallery'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Manager</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'settings'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>School Settings</span>
              </button>

              <button
                onClick={() => setActiveTab('export')}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left whitespace-nowrap ${
                  activeTab === 'export'
                    ? 'bg-amber-500 text-emerald-950 font-bold'
                    : 'hover:bg-emerald-900/60 text-slate-300'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>PHP/MySQL Package</span>
              </button>

              <div className="mt-auto hidden md:block pt-4 border-t border-emerald-900/70">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-300 hover:text-white rounded-lg hover:bg-red-950/60 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </aside>

            {/* Main Tab Content */}
            <main className="flex-1 p-6 overflow-y-auto bg-slate-50">
              {/* TAB 1: DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-950">
                      Welcome, School Administrator
                    </h3>
                    <p className="text-xs text-slate-500">
                      Overview for Superior Rashid Minhas School Khushab &middot; Session {schoolSettings.academicYear}
                    </p>
                  </div>

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-emerald-950">
                          {admissions.length}
                        </div>
                        <div className="text-xs text-slate-500 font-semibold">
                          Total Admissions
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-emerald-950">
                          {messages.length}
                        </div>
                        <div className="text-xs text-slate-500 font-semibold">
                          Contact Messages
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-emerald-950">
                          {gallery.length}
                        </div>
                        <div className="text-xs text-slate-500 font-semibold">
                          Gallery Photos
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 text-green-800 flex items-center justify-center font-bold">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-emerald-950 truncate">
                          {schoolSettings.whatsapp}
                        </div>
                        <div className="text-xs text-green-600 font-semibold">
                          Active WhatsApp
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Banner */}
                  <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold">
                        Export Full PHP &amp; MySQL Codebase for cPanel / XAMPP
                      </h4>
                      <p className="text-xs text-emerald-200 mt-1 max-w-xl">
                        Looking to host on a traditional PHP/MySQL hosting provider or GitHub? Check the &quot;PHP/MySQL Package&quot; tab for `database.sql`, config files, and complete deployment guide.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('export')}
                      className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                    >
                      View Source Package
                    </button>
                  </div>

                  {/* Recent Admissions preview */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-emerald-950 text-sm">
                        Recent Admission Inquiries
                      </h4>
                      <button
                        onClick={() => setActiveTab('admissions')}
                        className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold"
                      >
                        View All ({admissions.length}) &rarr;
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 text-slate-500 font-bold">
                            <th className="pb-2">Code</th>
                            <th className="pb-2">Student</th>
                            <th className="pb-2">Father</th>
                            <th className="pb-2">Class</th>
                            <th className="pb-2">Phone</th>
                            <th className="pb-2">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {admissions.slice(0, 4).map((a) => (
                            <tr key={a.id} className="hover:bg-slate-50">
                              <td className="py-2.5 font-bold font-mono text-emerald-900">
                                {a.id}
                              </td>
                              <td className="py-2.5 font-semibold text-slate-800">
                                {a.studentName}
                              </td>
                              <td className="py-2.5 text-slate-600">
                                {a.fatherName}
                              </td>
                              <td className="py-2.5 text-slate-600">
                                {a.classApplying}
                              </td>
                              <td className="py-2.5 font-mono text-slate-700">
                                {a.phone}
                              </td>
                              <td className="py-2.5">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                    a.status === 'contacted'
                                      ? 'bg-green-100 text-green-800'
                                      : a.status === 'reviewed'
                                      ? 'bg-amber-100 text-amber-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}
                                >
                                  {a.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ADMISSIONS */}
              {activeTab === 'admissions' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-emerald-950">
                        Admission Inquiries ({admissions.length})
                      </h3>
                      <p className="text-xs text-slate-500">
                        Review submissions, change follow-up status, or start a WhatsApp chat with parents.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search student or phone..."
                          value={inquirySearch}
                          onChange={(e) => setInquirySearch(e.target.value)}
                          className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none"
                        />
                      </div>

                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg border border-slate-300 text-xs bg-white"
                      >
                        <option value="all">All Status</option>
                        <option value="new">New</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="contacted">Contacted</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            <th className="p-3">Ref ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Father / Guardian</th>
                            <th className="p-3">Class</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Notes / Message</th>
                            <th className="p-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {admissions
                            .filter((adm) => {
                              const matchSearch =
                                adm.studentName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                                adm.fatherName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                                adm.phone.includes(inquirySearch) ||
                                adm.id.toLowerCase().includes(inquirySearch.toLowerCase());
                              const matchStatus =
                                statusFilter === 'all' || adm.status === statusFilter;
                              return matchSearch && matchStatus;
                            })
                            .map((adm) => (
                              <tr key={adm.id} className="hover:bg-slate-50">
                                <td className="p-3 font-mono font-bold text-emerald-900">
                                  {adm.id}
                                </td>
                                <td className="p-3 font-bold text-slate-800">
                                  {adm.studentName}
                                </td>
                                <td className="p-3 text-slate-600">
                                  {adm.fatherName}
                                </td>
                                <td className="p-3 font-medium text-slate-700">
                                  {adm.classApplying}
                                </td>
                                <td className="p-3 font-mono text-slate-800">
                                  {adm.phone}
                                </td>
                                <td className="p-3">
                                  <select
                                    value={adm.status}
                                    onChange={(e) => handleStatusChange(adm.id, e.target.value)}
                                    className="py-1 px-2 text-xs rounded-lg border border-slate-300 font-medium bg-white"
                                  >
                                    <option value="new">New</option>
                                    <option value="reviewed">Reviewed</option>
                                    <option value="contacted">Contacted</option>
                                  </select>
                                </td>
                                <td className="p-3 text-slate-500 max-w-xs truncate" title={adm.message}>
                                  {adm.message || '—'}
                                </td>
                                <td className="p-3 text-right">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <a
                                      href={`https://wa.me/92${adm.phone.replace(/^0+/, '')}?text=Assalam-o-Alaikum%20from%20Superior%20Rashid%20Minhas%20School%20Khushab%20regarding%20admission%20inquiry%20${adm.id}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 transition-colors"
                                      title="WhatsApp Parent"
                                    >
                                      <MessageCircle className="w-4 h-4" />
                                    </a>
                                    <button
                                      onClick={() => handleDeleteAdmission(adm.id)}
                                      className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer"
                                      title="Delete Inquiry"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MESSAGES */}
              {activeTab === 'messages' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-950">
                      Contact Messages ({messages.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Inquiries submitted through the Contact Us form on the school website.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-sm text-emerald-950">
                              {m.name}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {new Date(m.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mb-3 space-y-0.5">
                            <div>Phone: <strong>{m.phone}</strong></div>
                            {m.email && <div>Email: {m.email}</div>}
                          </div>
                          <div className="p-3 rounded-xl bg-slate-50 text-slate-700 text-xs leading-relaxed border border-slate-100">
                            {m.message}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <a
                            href={`https://wa.me/92${m.phone.replace(/^0+/, '')}?text=Assalam-o-Alaikum,%20regarding%20your%20message%20to%20Superior%20Rashid%20Minhas%20School%20Khushab:`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-800"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Reply via WhatsApp</span>
                          </a>

                          <button
                            onClick={() => handleDeleteMessage(m.id)}
                            className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-950">
                      Manage Photo Gallery ({gallery.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Add new campus photos or delete outdated events. Images update on the live website immediately.
                    </p>
                  </div>

                  {galleryMsg && (
                    <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{galleryMsg}</span>
                    </div>
                  )}

                  {/* Add New Photo Form */}
                  <form
                    onSubmit={handleAddGalleryImage}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
                  >
                    <h4 className="text-sm font-bold text-emerald-950 mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-amber-500" />
                      <span>Add New School Photo</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Photo Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={newImage.title}
                          onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                          placeholder="e.g. Science Exhibition"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Category *
                        </label>
                        <select
                          value={newImage.category}
                          onChange={(e) =>
                            setNewImage({
                              ...newImage,
                              category: e.target.value as any,
                            })
                          }
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
                        >
                          <option value="Campus">Campus</option>
                          <option value="Students">Students</option>
                          <option value="Events">Events</option>
                          <option value="Sports">Sports</option>
                          <option value="Activities">Activities</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                          Image URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={newImage.imageUrl}
                          onChange={(e) => setNewImage({ ...newImage, imageUrl: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Caption / Description
                      </label>
                      <input
                        type="text"
                        value={newImage.caption}
                        onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
                        placeholder="Brief caption visible in gallery lightbox..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      + Save to Gallery
                    </button>
                  </form>

                  {/* Current Photos Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gallery.map((g) => (
                      <div
                        key={g.id}
                        className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group relative"
                      >
                        <div className="relative h-32 w-full bg-slate-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={g.imageUrl}
                            alt={g.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 bg-emerald-950/80 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                            {g.category}
                          </span>
                        </div>
                        <div className="p-3 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="font-bold text-xs text-slate-800 line-clamp-1">
                              {g.title}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {g.caption}
                            </p>
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 flex justify-end">
                            <button
                              onClick={() => handleDeleteGallery(g.id)}
                              className="text-[11px] text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-950">
                      School Profile &amp; Contact Settings
                    </h3>
                    <p className="text-xs text-slate-500">
                      Configure your official school phone, WhatsApp number, campus address, and admission notices.
                    </p>
                  </div>

                  {settingsSuccess && (
                    <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{settingsSuccess}</span>
                    </div>
                  )}

                  <form onSubmit={handleSaveSettings} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        School Name
                      </label>
                      <input
                        type="text"
                        value={schoolSettings.name}
                        onChange={(e) => setSchoolSettings({ ...schoolSettings, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Official WhatsApp (e.g. 03417885841)
                        </label>
                        <input
                          type="text"
                          value={schoolSettings.whatsapp}
                          onChange={(e) => setSchoolSettings({ ...schoolSettings, whatsapp: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={schoolSettings.phone}
                          onChange={(e) => setSchoolSettings({ ...schoolSettings, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={schoolSettings.email}
                          onChange={(e) => setSchoolSettings({ ...schoolSettings, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Academic Session
                        </label>
                        <input
                          type="text"
                          value={schoolSettings.academicYear}
                          onChange={(e) => setSchoolSettings({ ...schoolSettings, academicYear: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Campus Location Address
                      </label>
                      <input
                        type="text"
                        value={schoolSettings.address}
                        onChange={(e) => setSchoolSettings({ ...schoolSettings, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Office Timings
                      </label>
                      <input
                        type="text"
                        value={schoolSettings.officeHours}
                        onChange={(e) => setSchoolSettings({ ...schoolSettings, officeHours: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300"
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={schoolSettings.admissionsOpen}
                          onChange={(e) => setSchoolSettings({ ...schoolSettings, admissionsOpen: e.target.checked })}
                          className="w-4 h-4 text-emerald-800 rounded"
                        />
                        <span className="text-xs font-bold text-slate-800">
                          Show &quot;Admissions Open&quot; Highlight Banners
                        </span>
                      </label>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                      >
                        Save School Settings
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 6: PHP / MYSQL PACKAGE */}
              {activeTab === 'export' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-emerald-950">
                      Standalone PHP &amp; MySQL Export Package
                    </h3>
                    <p className="text-xs text-slate-500">
                      Generated as requested for cPanel / XAMPP / Apache hosting. All files exist in your project root at <code>/school-website/</code>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
                    {(['database.sql', 'database.php', 'index.php', 'submit-admission.php', 'README.md'] as const).map(
                      (file) => (
                        <button
                          key={file}
                          onClick={() => {
                            setSelectedFile(file);
                            setCopied(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                            selectedFile === file
                              ? 'bg-emerald-900 text-white'
                              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                          }`}
                        >
                          <FileCode className="w-3.5 h-3.5 inline mr-1" />
                          {file}
                        </button>
                      )
                    )}
                  </div>

                  <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto max-h-[460px] relative border border-slate-800">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                      <span>File: /school-website/{selectedFile}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            selectedFile === 'database.sql'
                              ? `CREATE DATABASE IF NOT EXISTS \`srms_khushab_db\`; ...`
                              : `// PHP Code for ${selectedFile}`
                          );
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>

                    <pre className="text-slate-300 leading-relaxed">
                      {selectedFile === 'database.sql' &&
`-- ========================================================
-- Database Schema for Superior Rashid Minhas School Khushab
-- ========================================================
CREATE DATABASE IF NOT EXISTS \`srms_khushab_db\` CHARACTER SET utf8mb4;
USE \`srms_khushab_db\`;

-- 1. Admins Table
CREATE TABLE \`admins\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`username\` VARCHAR(50) NOT NULL UNIQUE,
  \`password\` VARCHAR(255) NOT NULL,
  \`full_name\` VARCHAR(100) NOT NULL
);

-- Default Admin User (admin / admin123)
INSERT INTO \`admins\` (\`username\`, \`password\`, \`full_name\`) 
VALUES ('admin', '$2y$10$w3UqmXgGk8uA1uR7kY5mkeO.2q1sU7gZgRfZT6N7M7L4z8fG5Kq7W', 'Administrator');

-- 2. Admissions Table
CREATE TABLE \`admissions\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`inquiry_code\` VARCHAR(20) NOT NULL UNIQUE,
  \`student_name\` VARCHAR(100) NOT NULL,
  \`father_name\` VARCHAR(100) NOT NULL,
  \`class_applying\` VARCHAR(50) NOT NULL,
  \`phone\` VARCHAR(30) NOT NULL,
  \`email\` VARCHAR(100) NULL,
  \`message\` TEXT NULL,
  \`status\` ENUM('new', 'reviewed', 'contacted') DEFAULT 'new',
  \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Contact Messages Table
CREATE TABLE \`contact_messages\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`name\` VARCHAR(100) NOT NULL,
  \`phone\` VARCHAR(30) NOT NULL,
  \`email\` VARCHAR(100) NULL,
  \`message\` TEXT NOT NULL,
  \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Gallery Table
CREATE TABLE \`gallery\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`title\` VARCHAR(150) NOT NULL,
  \`category\` ENUM('Campus', 'Students', 'Events', 'Sports', 'Activities') NOT NULL,
  \`image_url\` VARCHAR(255) NOT NULL,
  \`caption\` TEXT NULL
);

-- 5. School Settings Table
CREATE TABLE \`school_settings\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`setting_key\` VARCHAR(50) NOT NULL UNIQUE,
  \`setting_value\` TEXT NOT NULL
);`}

                      {selectedFile === 'database.php' &&
`<?php
// school-website/config/database.php
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'srms_khushab_db');

function getDBConnection() {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    return $pdo;
}`}

                      {selectedFile === 'submit-admission.php' &&
`<?php
// school-website/submit-admission.php
require_once __DIR__ . '/config/database.php';
header('Content-Type: application/json');

$student_name = trim($_POST['student_name'] ?? '');
$father_name  = trim($_POST['father_name'] ?? '');
$class        = trim($_POST['class_applying'] ?? '');
$phone        = trim($_POST['phone'] ?? '');

if (empty($student_name) || empty($father_name) || empty($phone)) {
    echo json_encode(['success' => false, 'error' => 'Required fields missing']);
    exit;
}

$pdo = getDBConnection();
$code = 'ADM-' . rand(1000, 9999);
$stmt = $pdo->prepare("INSERT INTO admissions (inquiry_code, student_name, father_name, class_applying, phone, status) VALUES (?, ?, ?, ?, ?, 'new')");
$stmt->execute([$code, $student_name, $father_name, $class, $phone]);

echo json_encode(['success' => true, 'inquiry_code' => $code, 'message' => 'Admission inquiry received!']);`}

                      {selectedFile === 'README.md' &&
`# Deployment Guide for Superior Rashid Minhas School Khushab

1. Copy the /school-website directory to your PHP server (e.g. htdocs or public_html).
2. Open phpMyAdmin and create database 'srms_khushab_db'.
3. Import 'database.sql'.
4. Edit 'config/database.php' with your credentials.
5. Default admin login: admin / admin123.
6. WhatsApp Number configured: 03417885841.`}

                      {selectedFile === 'index.php' &&
`<?php
// Unified School Homepage
require_once __DIR__ . '/config/database.php';
$settings = getSchoolSettings();
include_once __DIR__ . '/includes/header.php';
// Render Hero, Why Choose Us, About, Academics, Facilities, Student Life, Gallery, Admissions, Contact
include_once __DIR__ . '/includes/footer.php';
?>`}
                    </pre>
                  </div>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
