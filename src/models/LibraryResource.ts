import { Schema, model, models } from "mongoose";

const libraryResourceSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true },
);

export const LibraryResource =
  models.LibraryResource || model("LibraryResource", libraryResourceSchema);
