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
    createPost: async (_, { title, content }, { models }) => {
      return models.Blog.create({
        title,
        content
      });
    }
  }
};
