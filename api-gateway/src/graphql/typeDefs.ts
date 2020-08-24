import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type UserSession {
    id: ID!
    createdAt: Date!
    expiresAt: Date!
  }

  type Query {
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
