import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";
import { GalleryItem } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: dataStore.gallery,
    total: dataStore.gallery.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, category, imageUrl, caption } = body;

    if (!title || !imageUrl) {
      return NextResponse.json(
        { success: false, error: "Title and Image URL are required." },
        { status: 400 }
      );
    }

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: title.trim(),
      category: category || "Campus",
      imageUrl: imageUrl.trim(),
      caption: (caption || title).trim(),
    };

    dataStore.gallery.unshift(newItem);

    return NextResponse.json({
      success: true,
      message: "Gallery image added successfully",
      data: newItem,
    });
  } catch (error) {
    console.error("Error adding gallery image:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add image." },
      { status: 500 }
    );
  }
}
