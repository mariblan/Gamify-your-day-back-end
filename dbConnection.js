import mongoose from "mongoose";

const dbConnection = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI);
};

export default dbConnection;
