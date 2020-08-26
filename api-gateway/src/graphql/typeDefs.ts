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

  type NoteDelete {
    message: String!
  }

  type Mutation {
    registerUser(email: String!, password: String!): User!
    createNote(desc: String!): Note!
    editNote(id: ID!, desc: String!): Note!
    deleteNote(id: ID!): NoteDelete!
    shareNote(id: ID!): Note!
  }

  type Query {
    getNotes: [Note!]!
    getNoteByHashLink(hashLink: String!): Note
  }
`;

export default typeDefs;
