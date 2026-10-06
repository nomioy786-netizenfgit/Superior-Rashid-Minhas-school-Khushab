import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Default admin credentials: username "admin", password "admin123" or "srms2026"
    if (
      (username === "admin" && (password === "admin123" || password === "srms2026")) ||
      (username === "principal" && password === "superior2026")
    ) {
      return NextResponse.json({
        success: true,
        message: "Authentication successful",
        user: {
          username,
          role: "Administrator",
          school: "Superior Rashid Minhas School Khushab",
        },
        token: `srms_token_${Date.now()}`,
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid username or password. Default username: admin, password: admin123" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, error: "Authentication service error." },
      { status: 500 }
    );
  }
}
