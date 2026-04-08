import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { requireAdmin } from "@/lib/api";
import { Certification } from "@/models/Certification";

export async function GET() {
  await connectToDatabase();
  const certifications = await Certification.find()
    .sort({ createdAt: -1 })
    .lean();
  return NextResponse.json({ certifications });
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  await connectToDatabase();
  const certification = await Certification.create(body);
  return NextResponse.json({ certification }, { status: 201 });
}
