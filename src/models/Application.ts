import { Schema, model, models } from "mongoose";

const applicationSchema = new Schema(
  {
    userId: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    program: { type: String, required: true },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["submitted", "reviewing", "accepted", "rejected"],
      default: "submitted",
    },
  },
  { timestamps: true },
);

export const Application =
  models.Application || model("Application", applicationSchema);
