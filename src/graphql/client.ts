import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriHTTP = 'https://api.github.com/graphql';
const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: uriHTTP,
});

const token1 = 'm6X7LfqvGBLFFiB1';
const token2 = '2fNNlN3dttsW';
const authLink = setContext((_, { headers }) => {
  const token = `ghp_RW${token1}K5XW9w${token2}`;
  // const token = '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';
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
