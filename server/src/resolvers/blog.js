export default {
  Query: {
    getAllPosts: () => {
      return [
        {
          id: 1,
          title: "A Blog Post",
          content: "Blog post content"
        }
      ];
    }
  }
};
