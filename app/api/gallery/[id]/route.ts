import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const initialLength = dataStore.gallery.length;
  dataStore.gallery = dataStore.gallery.filter((item) => item.id !== id);

  if (dataStore.gallery.length === initialLength) {
    return NextResponse.json({ success: false, error: "Image not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Gallery image removed successfully" });
}
