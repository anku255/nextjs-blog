import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPosts: [Post!]!
    getPostById(id: ID!): Post!
  }

  extend type Mutation {
    createPost(title: String!, content: String!): Post!
    deletePost(id: ID!): Post
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdOn: String!
  }
`;
