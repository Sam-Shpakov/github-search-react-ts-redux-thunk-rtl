import { gql } from '@apollo/client';

const FETCH_USER_QUERY = gql`
  query GitHubUserProfile($username: String!) {
    user(login: $username) {
      id
      avatarUrl
      name
      login
      location
      company
      bio
      websiteUrl
      url
      followers(first: 100) {
        totalCount
        edges {
          node {
            id
            name
            login
          }
        }
      }
      following(first: 100) {
        totalCount
      }
      repositories(first: 100, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            name
            owner {
              id
            }
            description
            url
            isFork
            forkCount
            stargazerCount
            pushedAt
            licenseInfo {
              name
            }
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export default FETCH_USER_QUERY;
