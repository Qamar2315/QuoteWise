import mongoose, { Schema, Document, InferSchemaType } from "mongoose";

// Define Mongoose schema for Quote
const QuoteSchema: Schema = new Schema({
  content: { type: String, required: true },
  userPrompt: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  favorites: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

type QuoteModel = InferSchemaType<typeof QuoteSchema>;

export { QuoteModel };

// Create and export Quote model
export default mongoose.model<QuoteModel>("Quote", QuoteSchema);
