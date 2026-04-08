import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { requireAdmin } from "@/lib/api";
import { Course } from "@/models/Course";

export async function GET() {
  await connectToDatabase();
  const courses = await Course.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ courses });
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  await connectToDatabase();
  const course = await Course.create(body);
  return NextResponse.json({ course }, { status: 201 });
}
