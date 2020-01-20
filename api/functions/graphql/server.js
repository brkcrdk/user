const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const schema = require("./schema");
const resolvers = require("./resolver");

function gqlServer() {
  const app = express();
  app.use(cors());
  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    playground: true
  });

  apolloServer.applyMiddleware({ app, path: "/", cors: true });

  return app;
}

module.exports = gqlServer;
