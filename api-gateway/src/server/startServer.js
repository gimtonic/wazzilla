import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import accessEnv from "#root/helpers/accessEnv";

import formatGraphQlErrors from "./formatGraphQLErrors";

const PORT = accessEnv("PORT", 8000);

const apolloServer = new ApolloServer({
  context: (a) => a,
  formatError: formatGraphQlErrors,
  resolvers,
  typeDefs,
});

const app = express();

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

app.listen(PORT, "0.0.0.0", () => {
  console.info(`API gateway listening on ${PORT}`);
});
