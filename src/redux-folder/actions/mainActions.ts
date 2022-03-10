import { ApolloQueryResult } from '@apollo/client';
import { Dispatch } from 'redux';

import client from '@/graphql/client';
import * as UserRequests from '@/graphql/query';
import { MainActionTypes, MainConstantTypes, TResponceUsers, TData } from '@/types/mainStore';

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
      dispatch(setSuccess(newData.search.nodes));
    })
    .catch((error: IError) => {
      dispatch(setError(error));
    });
};

export default { searchUsers };
