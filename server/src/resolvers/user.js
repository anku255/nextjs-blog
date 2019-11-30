export default {
  User: {
    posts: async (parent, args, context) => {
      const user = await context.models.User.findById(parent.id)
        .populate("posts")
        .select("posts");
      return user.posts;
    }
  }
};
