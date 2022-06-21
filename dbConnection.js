import mongoose from "mongoose";

const dbConnection = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI);
  // console.log(`Connected to database shard ${con.connection.host}`);
};

export default dbConnection;
