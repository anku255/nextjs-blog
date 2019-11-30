import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPosts: [Post!]!
    getLatestPosts(skip: Int, first: Int): [Post!]!
    getPostById(id: ID!): Post!
  }

  extend type Mutation {
    createPost(title: String!, imageURL: String!, content: String!): Post!
    deletePost(id: ID!): Post
    updatePost(
      id: ID!
      title: String
      imageURL: String
      published: Boolean
      content: String
    ): Post!
  }

  type Post {
    id: ID!
    title: String!
    imageURL: String!
    published: Boolean!
    content: String!
    createdOn: String!
  }
`;
