import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { requireAdmin } from "@/lib/api";
import { Partner } from "@/models/Partner";

export async function GET() {
  await connectToDatabase();
  const partners = await Partner.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ partners });
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  await connectToDatabase();
  const partner = await Partner.create(body);
  return NextResponse.json({ partner }, { status: 201 });
}
