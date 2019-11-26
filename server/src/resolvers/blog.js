export default {
  Query: {
    getPostById: async (parent, args, { models }) => {
      try {
        return await models.Blog.findById(args.id);
      } catch (err) {
        return new Error("Failed to find a blog post with that id");
      }
    },
    getAllPosts: async (parent, args, { models }) => {
      return models.Blog.find();
    }
  },
  Mutation: {
    createPost: async (_, { title, imageURL, content }, { models }) => {
      return models.Blog.create({
        title,
        imageURL,
        content
      });
    },
    deletePost: async (_, { id }, { models }) => {
      const deletedPost = await models.Blog.findByIdAndDelete(id);
      if (!deletedPost)
        return new Error("Failed to delete the post with that id");
      return deletedPost;
    }
  }
};
