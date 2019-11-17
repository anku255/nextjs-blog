import mongoose from "mongoose";

import Blog from "./Blog";

const connectDb = async () => {
  if (process.env.DATABASE_URL) {
    return mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true
    });
  }
};

const models = { Blog };

export { connectDb };

export default models;
