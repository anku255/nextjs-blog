const dev = process.env.NODE_ENV !== "production";

module.exports = {
  env: {
    SERVER_URL: dev
      ? "http://localhost:4000/graphql"
      : "http://localhost:4000/graphql"
  }
};
