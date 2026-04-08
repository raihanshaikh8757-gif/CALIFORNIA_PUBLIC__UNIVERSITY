import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectToDatabase } from "@/lib/db";
import { applySchema } from "@/lib/validations";
import { authOptions } from "@/lib/auth";
import { Application } from "@/models/Application";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = applySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }
    await connectToDatabase();
    const session = await getServerSession(authOptions);
    const application = await Application.create({
      ...parsed.data,
      userId: session?.user?.id || null,
    });
    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
