import { gql } from '@apollo/client';

const SUBSCRIPTION_CONNECTION_SETTINGS = gql`
  subscription subscribeGetTree {
    onConnectionSettingChanged {
      id
      name
      orderInTree
      isGIS
      gISGRSs {
        id
        name
        devices {
          id
          name
          devType
          lines {
            id
            lineNum
          }
        }
      }
    }
  }
`;

export default SUBSCRIPTION_CONNECTION_SETTINGS;
