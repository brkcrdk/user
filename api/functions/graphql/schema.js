const { gql } = require("apollo-server-express");

const schema = gql`
  type Persons {
    id: Int
    name: String
  }

  type Person {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
    posts: [Post]
  }
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
  }
  type Company {
    name: String
    catchPhrase: String
  }
  type Post {
    id: Int
    title: String
    body: String
    comments: [Comment]
  }
  type Comment {
    id: Int
    name: String
    email: String
    body: String
  }
  type Query {
    persons: [Persons]
    person(userId: Int!): Person
    post(postId: Int!): Post
  }
`;

module.exports = schema;
