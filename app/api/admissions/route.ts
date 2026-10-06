import { NextRequest, NextResponse } from "next/server";
import { dataStore, AdmissionInquiry } from "@/lib/store";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: dataStore.admissions,
    total: dataStore.admissions.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { studentName, fatherName, classApplying, phone, email, message } = body;

    if (!studentName || !fatherName || !classApplying || !phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Student Name, Father Name, Class, Phone)." },
        { status: 400 }
      );
    }

    const newInquiry: AdmissionInquiry = {
      id: `ADM-${Math.floor(1000 + Math.random() * 9000)}`,
      studentName: studentName.trim(),
      fatherName: fatherName.trim(),
      classApplying: classApplying.trim(),
      phone: phone.trim(),
      email: (email || "").trim(),
      message: (message || "").trim(),
      status: "new",
      createdAt: new Date().toISOString(),
    };

    dataStore.admissions.unshift(newInquiry);

    return NextResponse.json({
      success: true,
      message: "Admission inquiry submitted successfully! Our admissions office will contact you shortly.",
      inquiryId: newInquiry.id,
      data: newInquiry,
    });
  } catch (error) {
    console.error("Error submitting admission:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or contact via WhatsApp." },
      { status: 500 }
    );
  }
}
