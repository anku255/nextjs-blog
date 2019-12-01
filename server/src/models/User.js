import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  },
  userType: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  },
  posts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }]
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

export default User;
