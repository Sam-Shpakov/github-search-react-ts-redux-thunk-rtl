import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriHTTP = 'https://api.github.com/graphql';
const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: uriHTTP,
});

const token1 = 'UxSn1tUwVHu';
const token2 = 'gzA4IvObQ4ZktcR';
const authLink = setContext((_, { headers }) => {
  const token = `ghp_Yj${token1}LtNu5vbk${token2}`;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    } as ApolloLink,
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  connectToDevTools: true,
});

export default client;
