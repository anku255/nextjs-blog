import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
