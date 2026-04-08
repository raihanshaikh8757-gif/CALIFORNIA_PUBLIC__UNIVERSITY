import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    tuition: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export const Course = models.Course || model("Course", courseSchema);
