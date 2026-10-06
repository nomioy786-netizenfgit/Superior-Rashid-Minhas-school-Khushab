import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const initialLength = dataStore.admissions.length;
  dataStore.admissions = dataStore.admissions.filter((item) => item.id !== id);

  if (dataStore.admissions.length === initialLength) {
    return NextResponse.json({ success: false, error: "Inquiry not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Inquiry deleted successfully" });
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();
  const inquiry = dataStore.admissions.find((item) => item.id === id);

  if (!inquiry) {
    return NextResponse.json({ success: false, error: "Inquiry not found" }, { status: 404 });
  }

  if (body.status && ["new", "reviewed", "contacted"].includes(body.status)) {
    inquiry.status = body.status;
  }

  return NextResponse.json({ success: true, data: inquiry });
}
