import { gql } from '@apollo/client';

const ADD_CONNECTION_SETTING = gql`
  mutation addConnectionSetting(
    $ip: String!
    $requestFrequency: Int
    $mySQLPort: Int!
    $mongoPort: Int!
    $orderInTree: Int!
    $isStopped: Boolean!
    $requestBeginning: TimeSpan
  ) {
    addConnectionSetting(
      input: {
        ip: $ip
        requestFrequency: $requestFrequency
        mySQLPort: $mySQLPort
        mongoPort: $mongoPort
        orderInTree: $orderInTree
        isStopped: $isStopped
        requestBeginning: $requestBeginning
      }
    ) {
      id
      ip
      mySQLPort
      mongoPort
      requestBeginning
      lastRequestBegin
      lastRequestEnd
      orderInTree
      isStopped
      isGIS
    }
  }
`;

export default ADD_CONNECTION_SETTING;
