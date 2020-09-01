import { ApolloServer } from "apollo-server-express";
//@ts-ignore
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import resolvers from "@graphql/resolvers";
import typeDefs from "@graphql/typeDefs";
import formatGraphQlErrors from "./formatGraphQLErrors";

const apolloServer = new ApolloServer({
  context: (req) => req,
  formatError: formatGraphQlErrors,
  resolvers,
  typeDefs,
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

export { app };
