import { gql } from '@apollo/client';

const FETCH_USERS_QUERY = gql`
  query GitHubUserProfile($username: String!) {
    user(login: $username) {
      name
      company
      bio
      twitterUsername
      websiteUrl
      url
      repositories(first: 100, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            name
            description
            url
          }
        }
      }
    }
  }
`;

export default FETCH_USERS_QUERY;
