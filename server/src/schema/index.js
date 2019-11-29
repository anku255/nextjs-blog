import { gql } from "apollo-server-express";

import authSchema from "./auth";
import blogSchema from "./blog";

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, authSchema, blogSchema];
