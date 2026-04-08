import { Schema, model, models } from "mongoose";

const certificationSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    issuer: { type: String, required: true },
    badge: { type: String, required: true },
  },
  { timestamps: true },
);

export const Certification =
  models.Certification || model("Certification", certificationSchema);
