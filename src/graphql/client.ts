import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriHTTP = 'https://wishboard-server.herokuapp.com/graphql';
const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: uriHTTP,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = 'UserUtils.getTokenFromLocalStorage()';
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
