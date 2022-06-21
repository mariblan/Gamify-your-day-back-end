import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
    minlength: 6,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  password: { type: String, required: true },
  progress: { type: Number, required: true, default: 0 },
  todayList: {
    type: [{ type: Schema.Types.ObjectId, ref: "task" }],
    required: true,
    default: [],
  }, // is this correct?
  todayCompleted: [{ type: Schema.Types.ObjectId, ref: "task" }],
  todaySuccess: [{ type: Schema.Types.ObjectId, ref: "task" }],
  todayFailed: [{ type: Schema.Types.ObjectId, ref: "task" }],
  favoriteList: [{ type: Schema.Types.ObjectId, ref: "task" }],
  active: { type: Boolean, required: true, default: true },
});

export default mongoose.model("user", userSchema);
