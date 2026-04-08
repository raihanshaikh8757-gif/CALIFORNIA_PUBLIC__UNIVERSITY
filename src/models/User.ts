import { Schema, model, models } from "mongoose";

export type UserRole = "student" | "admin";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "admin"], default: "student" },
    country: { type: String, default: "" },
  },
  { timestamps: true },
);

export const User = models.User || model("User", userSchema);
