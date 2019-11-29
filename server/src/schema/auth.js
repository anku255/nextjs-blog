import { gql } from "apollo-server-express";

export default gql`
  extend type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type User {
    id: ID!
    name: String!
    email: String!
    userType: USERTYPE!
    createdOn: String!
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