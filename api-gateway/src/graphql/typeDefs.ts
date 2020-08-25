import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
  }

  type Mutation {
    registerUser(email: String!, password: String!): User!
  }
  type Query {
    userSession: User!
  }
`;

export default typeDefs;
