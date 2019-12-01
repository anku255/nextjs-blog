import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    fblogin(facebookId: String!, email: String!, name: String!): AuthPayload
  }

  type User {
    id: ID!
    name: String!
    email: String!
    userType: USERTYPE!
    createdOn: String!
    posts: [Post!]!
  }

  enum USERTYPE {
    ADMIN
    USER
  }

  type AuthPayload {
    token: String
    user: User
  }
`;
