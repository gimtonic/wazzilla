import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";

// @ts-ignore
import resolvers from "@src/graphql/resolvers";
// @ts-ignore
import typeDefs from "@src/graphql/typeDefs";

import formatGraphQlErrors from "./formatGraphQLErrors";

const PORT = 8000;

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
