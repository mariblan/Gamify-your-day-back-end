import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = Schema({
  taskName: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Za-z]+$/,
    minlength: 4,
    maxlength: 40,
  },
  taskTime: {
    minEasy: { type: Number, required: true },
    maxEasy: { type: Number, required: true },
    minMedium: { type: Number, required: true },
    maxMedium: { type: Number, required: true },
    minHard: { type: Number, required: true },
    maxHard: { type: Number, required: true },
  },
  taskDescriptions: {
    easy: { type: String, match: /^[A-Za-z]+$/, minlength: 4, maxlength: 40 },
    medium: { type: String, match: /^[A-Za-z]+$/, minlength: 4, maxlength: 40 },
    hard: { type: String, match: /^[A-Za-z]+$/, minlength: 4, maxlength: 40 },
  },
  category: { type: String, required: true, default: "miscellaneous" },
});

export default mongoose.model("task", taskSchema);
