import { Schema, model, models } from "mongoose";

const partnerSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    website: { type: String, required: true },
  },
  { timestamps: true },
);

export const Partner = models.Partner || model("Partner", partnerSchema);
