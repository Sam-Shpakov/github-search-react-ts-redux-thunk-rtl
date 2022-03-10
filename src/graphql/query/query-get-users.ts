import { gql } from '@apollo/client';

const FETCH_USERS_QUERY = gql`
  query SearchTop100Users($user: String!) {
    search(query: $user, type: USER, first: 100) {
      nodes {
        ... on User {
          id
          name
          login
          avatarUrl
          url
          bio
        }
      }
    }
  }
`;

export default FETCH_USERS_QUERY;
