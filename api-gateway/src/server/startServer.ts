import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";

import resolvers from "@graphql/resolvers";
import typeDefs from "@graphql/typeDefs";
import formatGraphQlErrors from "./formatGraphQLErrors";

const PORT = Number(process.env.PORT);

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
