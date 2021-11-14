const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input BookTosave {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type SavedBook {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: String
    savedBooks: [SavedBook]
  }

  type Login {
    token: String!
    user: User!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Login
    signUp(username: String!, email: String!, password: String!): Login
    saveBook(book: BookTosave!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
