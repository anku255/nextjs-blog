import { gql } from "apollo-server-express";

// TODO: Remove extend and test
export default gql`
  extend type Query {
    getAllPosts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
  }
`;
