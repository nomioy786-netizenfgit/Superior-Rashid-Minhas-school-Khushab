import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const initialLength = dataStore.messages.length;
  dataStore.messages = dataStore.messages.filter((item) => item.id !== id);

  if (dataStore.messages.length === initialLength) {
    return NextResponse.json({ success: false, error: "Message not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Message deleted successfully" });
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();
  const msg = dataStore.messages.find((item) => item.id === id);

  if (!msg) {
    return NextResponse.json({ success: false, error: "Message not found" }, { status: 404 });
  }

  if (body.status && ["unread", "read"].includes(body.status)) {
    msg.status = body.status;
  }

  return NextResponse.json({ success: true, data: msg });
}
