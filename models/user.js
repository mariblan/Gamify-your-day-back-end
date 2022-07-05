import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    match: /^[A-Za-z]+$/,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  progress: { type: Number, required: true, default: 0 },
  todayList: [{ type: mongoose.ObjectId, ref: "task" }],
  todayCompleted: [
    {
      type: mongoose.Mixed,
      taskId: { type: String, required: true },
      taskName: { type: String, required: true },
      sliderValue: { type: Number, required: true },
      difficulty: { type: String, required: true },
      reward: { type: Number, required: true },
      category: { type: String, required: true },
      time: { type: String, required: true },
    },
  ],
  todaySuccess: [
    {
      type: mongoose.Mixed,
      taskId: { type: String, required: true },
      taskName: { type: String, required: true },
      sliderValue: { type: Number, required: true },
      difficulty: { type: String, required: true },
      reward: { type: Number, required: true },
      category: { type: String, required: true },
      time: { type: String, required: true },
    },
  ],
  todayFailed: [
    {
      type: mongoose.Mixed,
      taskId: { type: String, required: true },
      taskName: { type: String, required: true },
      sliderValue: { type: Number, required: true },
      difficulty: { type: String, required: true },
      reward: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  favoriteList: [{ type: mongoose.ObjectId, ref: "task" }],
  // todayList: [{ type: Schema.Types.ObjectId, ref: "task" }],
  // todayCompleted: [{ type: Schema.Types.ObjectId, ref: "task" }],
  // todaySuccess: [{ type: Schema.Types.ObjectId, ref: "task" }],
  // todayFailed: [{ type: Schema.Types.ObjectId, ref: "task" }],
  // favoriteList: [{ type: Schema.Types.ObjectId, ref: "task" }],
  active: { type: Boolean, required: true, default: true },
});

export default mongoose.model("user", userSchema);
