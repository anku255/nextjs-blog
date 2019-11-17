import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { connectDb } from "./models";

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: () => {
    return { models };
  }
});

server.applyMiddleware({ app, path: "/graphql" });

connectDb()
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log("Server running at http://localhost:4000");
    });
  })
  .catch(() => console.log("Failed to connect to the database"));
