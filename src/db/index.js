import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    const dbReply = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("DB connection succesful !!");
    console.log(`DB host: ${dbReply.connection.host}`);
    //console.log(dbReply);
  } catch (error) {
    console.log("DB connection issue: db/index.js", error);
    process.exit(1);
  }
};

export default connectDB;
