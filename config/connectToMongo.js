import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

function connectToMongo() {
  mongoose
    .connect(process.env.MONGO_DB_STRING)
    .then(() => {
      console.log("Connected to MongoDB".green);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connectToMongo;
