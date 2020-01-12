// const { ApolloServer, gql } = require("apollo-server");
// const axios = require("axios");
// const typeDefs = gql`
//   type Persons {
//     id: Int
//     name: String
//   }

//   type Person {
//     id: Int
//     name: String
//     username: String
//     email: String
//     address: Address
//     phone: String
//     website: String
//     company: Company
//     posts: [Post]
//   }
//   type Address {
//     street: String
//     suite: String
//     city: String
//     zipcode: String
//   }
//   type Company {
//     name: String
//     catchPhrase: String
//   }
//   type Post {
//     id: Int
//     title: String
//     body: String
//     comments: [Comment]
//   }
//   type Comment {
//     id: Int
//     name: String
//     email: String
//     body: String
//   }
//   # QUERY
//   type Query {
//     persons: [Persons]
//     person(userId: Int!): Person
//     post(postId: Int!): Post
//   }
// `;

// const resolvers = {
//   // Main search
//   Query: {
//     persons: () => {
//       return axios
//         .get(`https://jsonplaceholder.typicode.com/users`)
//         .then(res => res.data);
//     },
//     person: (parent, { userId }) => {
//       return axios
//         .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(res => res.data);
//     },
//     post: (parent, { postId }) => {
//       return axios
//         .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then(res => res.data);
//     }
//   },
//   // Nested Searchs
//   Person: {
//     posts: parent => {
//       return axios
//         .get(`https://jsonplaceholder.typicode.com/posts?userId=${parent.id}`)
//         .then(res => res.data);
//     }
//   },
//   Post: {
//     comments: parent => {
//       return axios
//         .get(
//           `https://jsonplaceholder.typicode.com/comments?postId=${parent.id}`
//         )
//         .then(res => res.data);
//     }
//   }
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
