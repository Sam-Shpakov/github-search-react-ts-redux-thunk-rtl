import { ApolloQueryResult } from '@apollo/client';
import { Dispatch } from 'redux';

import client from '@/graphql/client';
import * as UserRequests from '@/graphql/query';
import { UserConstantTypes } from '@/types/userStore';
import type { UserActionTypes, TResponceUser, TData } from '@/types/userStore';
import { formatServerUserDataToData } from '@/utils/middleware-user';

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
      dispatch(setSuccess(formatServerUserDataToData(newData.user)));
    })
    .catch((error: IError) => {
      dispatch(setError(error));
    });
};

export default { getUser };
