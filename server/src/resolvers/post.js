export default {
  Post: {
    author: async (parent, args, context) => {
      return context.models.User.findById(parent.author);
    }
  }
};
