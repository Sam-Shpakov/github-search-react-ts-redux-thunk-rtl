import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { useCallback } from 'react';

import allActions from '@/redux-folder/actions';
import type { RootState } from '@/redux-folder/store';

const useListData = () => {
  const getMainData = allActions.mainActions.searchUsers;
  const dataMain = useSelector((state: RootState) => state.main, shallowEqual);
  const dispatch = useDispatch();
  const getData = useCallback((user: string) => dispatch(getMainData(user)), [dispatch]);

  const searchUsers = (user: string) => {
    getData(user);
  };

  return { dataMain, searchUsers };
};

export default useListData;
