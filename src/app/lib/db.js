import mongoose from "mongoose";
const MONGODBURI = process.env.MONGODBURI;

if (!MONGODBURI) {
  throw new Error(
    "Please define  MONGODBURI environment variable inside .env.local"
  );
}
const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(MONGODBURI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
  export default connectToDB;