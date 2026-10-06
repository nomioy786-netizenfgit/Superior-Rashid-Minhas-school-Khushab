import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: dataStore.settings,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    dataStore.settings = {
      ...dataStore.settings,
      ...body,
    };
    return NextResponse.json({
      success: true,
      message: "School settings updated successfully",
      data: dataStore.settings,
    });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
