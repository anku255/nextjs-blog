import mongoose from "mongoose";

import User from "./User";
import Blog from "./Blog";

const connectDb = async () => {
  if (process.env.DATABASE_URL) {
    return mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true
    });
  }
};

const models = { User, Blog };

export { connectDb };

export default models;
