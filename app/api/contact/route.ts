import { NextRequest, NextResponse } from "next/server";
import { dataStore, ContactMessage } from "@/lib/store";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: dataStore.messages,
    total: dataStore.messages.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide Name, Phone number, and Message." },
        { status: 400 }
      );
    }

    const newMessage: ContactMessage = {
      id: `MSG-${Math.floor(2000 + Math.random() * 8000)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: (email || "").trim(),
      message: message.trim(),
      status: "unread",
      createdAt: new Date().toISOString(),
    };

    dataStore.messages.unshift(newMessage);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Your message has been received and our school administration will respond soon.",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error submitting contact message:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
