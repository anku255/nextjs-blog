import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 4000 }, () => {
  console.log("Server running at http://localhost:4000");
});
