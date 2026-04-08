import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { requireAdmin } from "@/lib/api";
import { LibraryResource } from "@/models/LibraryResource";

export async function GET() {
  await connectToDatabase();
  const resources = await LibraryResource.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ resources });
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  await connectToDatabase();
  const resource = await LibraryResource.create(body);
  return NextResponse.json({ resource }, { status: 201 });
}
