import { ApolloQueryResult } from '@apollo/client';
import { Dispatch } from 'redux';

import client from '@/graphql/client';
import * as UserRequests from '@/graphql/query';
import { UserActionTypes, UserConstantTypes, TResponceUser, TData } from '@/types/userStore';
import { formatServerDataToData } from '@/utils/middleware-data';

const setLoading = (): UserActionTypes => ({
  type: UserConstantTypes.GET_DATA_LOADING,
});

const setError = (error: IError): UserActionTypes => ({
  type: UserConstantTypes.GET_DATA_ERROR,
  error: error.message || 'Unexpected Error!!!',
});

const setSuccess = (data: TData): UserActionTypes => ({
  type: UserConstantTypes.GET_DATA_SUCCESS,
  payload: data,
});

const getUser = (username: string) => (dispatch: Dispatch<UserActionTypes>) => {
  dispatch(setLoading());

  client
    .query({
      query: UserRequests.FETCH_USER_QUERY,
      fetchPolicy: 'no-cache',
      variables: {
        username,
      },
    })
    .then(({ data }: ApolloQueryResult<any>) => {
      const newData = data as TResponceUser;
      dispatch(setSuccess(formatServerDataToData(newData.user)));
    })
    .catch((error: IError) => {
      dispatch(setError(error));
    });
};

export default { getUser };
