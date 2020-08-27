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

  type UserSession {
    id: ID!
    expiresAt: Date!
    user: User!
  }

  type UserSessionDelete {
    message: String!
  }

  type Mutation {
    registerUser(email: String!, password: String!): User!
    loginUser(email: String!, password: String!): UserSession!
    createNote(desc: String!): Note!
    editNote(id: ID!, desc: String!): Note!
    deleteNote(id: ID!): NoteDelete!
    shareNote(id: ID!): Note!
    logoutUser: UserSessionDelete!
  }

  type Query {
    getNotes: [Note!]!
    getNoteByHashLink(hashLink: String!): Note
  }
`;

export default typeDefs;
