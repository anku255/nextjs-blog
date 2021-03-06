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
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
