import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
  }

  type Note {
    id: ID!
    userId: ID!
    desc: String!
    hashLink: String
    createdAt: Date!
    updatedAt: Date
  }

  type Mutation {
    registerUser(email: String!, password: String!): User!
    createNote(desc: String!): Note!
  }

  type Query {
    getNotes: [Note!]!
  }
`;

export default typeDefs;
