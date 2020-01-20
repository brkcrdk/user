const mainUrl = `https://jsonplaceholder.typicode.com`;
const resolverFunctions = {
  //Main Search querys
  Query: {
    persons: () => {
      return axios.get(`${mainUrl}/users`).then((res) => res.data);
    },
    person: (parent, { userId }) => {
      return axios.get(`${mainUrl}/users/${userId}`).then((res) => res.data);
    },
    post: (parent, { postId }) => {
      return axios.get(`${mainUrl}/posts/${postId}`);
    }
  },
  //Nested Searchs
  Person: {
    posts: (parent) => {
      return axios
        .get(`${mainUrl}/posts?userId=${parent.id}`)
        .then((res) => res.data);
    }
  },
  Post: {
    comments: (parent) => {
      return axios
        .get(`${mainUrl}/comments?postId=${parent.id}`)
        .then((res) => res.data);
    }
  }
};

module.exports = resolverFunctions;
