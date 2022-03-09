import { gql } from '@apollo/client';

const FETCH_ALARMS_QUERY = gql`
  query getAlarms($lineIds: [ID!], $startTime: DateTime!, $endTime: DateTime!) {
    alarms(lineIds: $lineIds, startTime: $startTime, endTime: $endTime) {
      lineId
      alarms {
        id
        sensor
        recordTime
        data_Field_Int
        data_Field_Float
        data_Field_String
        alarmCode {
          describle
        }
      }
    }
  }
`;

export default FETCH_ALARMS_QUERY;
