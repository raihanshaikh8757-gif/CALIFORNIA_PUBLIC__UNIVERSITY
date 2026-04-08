import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import { ContactMessage } from "@/models/ContactMessage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }
    await connectToDatabase();
    const message = await ContactMessage.create(parsed.data);
    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
