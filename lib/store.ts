import { initialSchoolInfo, initialGallery, GalleryItem, SchoolInfo } from "./data";

export interface AdmissionInquiry {
  id: string;
  studentName: string;
  fatherName: string;
  classApplying: string;
  phone: string;
  email: string;
  message: string;
  status: "new" | "reviewed" | "contacted";
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: "unread" | "read";
  createdAt: string;
}

// In-memory data store for server runtime
class SchoolDataStore {
  private static instance: SchoolDataStore;
  public settings: SchoolInfo = { ...initialSchoolInfo };
  public admissions: AdmissionInquiry[] = [
    {
      id: "ADM-1001",
      studentName: "Muhammad Ali Raza",
      fatherName: "Tariq Mahmood",
      classApplying: "Grade 9 (Science)",
      phone: "03001234567",
      email: "tariq.m@example.com",
      message: "Looking for admission in Science group with computer science elective. Previous school percentage 88%.",
      status: "reviewed",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: "ADM-1002",
      studentName: "Ayesha Fatima",
      fatherName: "Zahid Imran",
      classApplying: "Primary Classes (Grade 3)",
      phone: "03217654321",
      email: "zahid.imran@example.com",
      message: "Need school van service from College Road area Khushab. Please confirm seat availability.",
      status: "new",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "ADM-1003",
      studentName: "Hamza Rehman",
      fatherName: "Abdul Rehman",
      classApplying: "Early Education (Playgroup)",
      phone: "03459876543",
      email: "arehman.khushab@example.com",
      message: "Child age is 3.5 years. Would like to know the campus visit timing and fee structure.",
      status: "new",
      createdAt: new Date().toISOString(),
    },
  ];

  public messages: ContactMessage[] = [
    {
      id: "MSG-2001",
      name: "Malik Irfan",
      phone: "03335551234",
      email: "irfan.malik@example.com",
      message: "Assalam-o-Alaikum, does the school offer preparation for BISE Sargodha scholarship examinations?",
      status: "read",
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
    {
      id: "MSG-2002",
      name: "Sobia Parveen",
      phone: "03417885841",
      email: "sobia.p@example.com",
      message: "Kindly share the morning assembly timings and winter schedule for middle school.",
      status: "unread",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
  ];

  public gallery: GalleryItem[] = [...initialGallery];

  private constructor() {}

  public static getInstance(): SchoolDataStore {
    if (!SchoolDataStore.instance) {
      SchoolDataStore.instance = new SchoolDataStore();
    }
    return SchoolDataStore.instance;
  }
}

export const dataStore = SchoolDataStore.getInstance();
