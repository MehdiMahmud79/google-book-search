const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type SavedBook {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: String
    savedBooks: [SavedBook]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
