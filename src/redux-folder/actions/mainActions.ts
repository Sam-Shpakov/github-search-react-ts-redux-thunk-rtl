import { ApolloQueryResult } from '@apollo/client';
import { Dispatch } from 'redux';

import client from '@/graphql/client';
import * as UserRequests from '@/graphql/query';
import { MainConstantTypes } from '@/types/mainStore';
import type { MainActionTypes, TResponceUsers, TData } from '@/types/mainStore';
import { formatServerUsersDataToData } from '@/utils/middleware-users';

const setLoading = (): MainActionTypes => ({
  type: MainConstantTypes.GET_DATA_LOADING,
});

const setError = (error: IError): MainActionTypes => ({
  type: MainConstantTypes.GET_DATA_ERROR,
  error: error.message || 'Unexpected Error!!!',
});

const setSuccess = (data: TData[]): MainActionTypes => ({
  type: MainConstantTypes.GET_DATA_SUCCESS,
  payload: data,
});

const searchUsers = (user: string) => (dispatch: Dispatch<MainActionTypes>) => {
  dispatch(setLoading());

  client
    .query({
      query: UserRequests.FETCH_USERS_QUERY,
      fetchPolicy: 'no-cache',
      variables: {
        user,
      },
    })
    .then(({ data }: ApolloQueryResult<any>) => {
      const newData = data as TResponceUsers;
      dispatch(setSuccess(formatServerUsersDataToData(newData.search.nodes)));
    })
    .catch((error: IError) => {
      dispatch(setError(error));
    });
};

export default { searchUsers };
