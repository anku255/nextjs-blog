import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello From GraphQL"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log("Server running at http://localhost:4000");
});
