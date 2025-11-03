import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!MONGO_URI) {
    console.log("exrror MONGO_URI is not in environment variables");
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb conection successfull!!");
  } catch (error) {
    console.error("MongoDb connection failed", error);
  }
};

export default connectDB;
