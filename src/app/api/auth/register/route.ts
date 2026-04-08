import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";
import { registerSchema } from "@/lib/validations";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }
    await connectToDatabase();
    const exists = await User.findOne({ email: parsed.data.email });
    if (exists) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 409 },
      );
    }
    const hash = await bcrypt.hash(parsed.data.password, 12);
    await User.create({
      ...parsed.data,
      password: hash,
      role: "student",
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
