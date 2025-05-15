import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  const DB_NAME = process.env.DB_NAME;

  if (!MONGO_URI || !DB_NAME) {
    console.error("MONGO_URI or DB_NAME is not defined in environment variables.");
    process.exit(1);
  }

  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
    console.log(` MongoDB connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
