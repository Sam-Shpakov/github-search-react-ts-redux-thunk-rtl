import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriHTTP = 'https://api.github.com/graphql';
const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: uriHTTP,
});

const authLink = setContext((_, { headers }) => {
  const token = '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';
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
