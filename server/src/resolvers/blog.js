import sanitizeHtml from "sanitize-html";

import { getUserId } from "../utils";

export default {
  Query: {
    getPostById: async (parent, args, { models }) => {
      try {
        return models.Blog.findOne({ _id: args.id, published: true });
      } catch (err) {
        return new Error("Failed to find a blog post with that id");
      }
    },
    getAllPosts: async (parent, args, context) => {
      const userId = getUserId(context);
      const user = await context.models.User.findById(userId);
      if (user.userType !== "ADMIN") {
        throw new Error("Only admin can see this page");
      }
      return context.models.Blog.find().sort([["createdOn", -1]]);
    },
    getLatestPosts: async (parent, args, { models }) => {
      const skip = args.skip || 0;
      const limit = args.first || 10;
      return models.Blog.find({ published: true })
        .skip(skip)
        .limit(limit)
        .sort([["createdOn", -1]]);
    },
    getPopularPosts: async (parent, args, { models }) => {
      const skip = args.skip ? args.skip + 7 : 7; // skip first 7 posts as latest
      const limit = args.first || 10;
      return models.Blog.find({ published: true })
        .skip(skip)
        .limit(limit)
        .sort([["createdOn", -1]]);
    }
  },
  Mutation: {
    createPost: async (_, { title, imageURL, content }, context) => {
      const userId = getUserId(context);
      const blog = await context.models.Blog.create({
        title,
        imageURL,
        content: sanitizeHtml(content),
        author: userId
      });
      const user = await context.models.User.findById(userId);
      user.posts.push(blog._id);
      await user.save();
      return blog;
    },
    deletePost: async (_, { id }, { models }) => {
      const deletedPost = await models.Blog.findByIdAndDelete(id);
      if (!deletedPost)
        return new Error("Failed to delete the post with that id");
      return deletedPost;
    },
    updatePost: async (_, { id, ...update }, context) => {
      const userId = getUserId(context);
      const user = await context.models.User.findById(userId);
      if (user.userType !== "ADMIN") {
        throw new Error("Only admin can update posts.");
      }
      const updatedPost = await context.models.Blog.findByIdAndUpdate(
        id,
        update,
        {
          new: true
        }
      );
      if (!updatedPost)
        return new Error("Failed to update the post with that id");
      return updatedPost;
    }
  }
};
