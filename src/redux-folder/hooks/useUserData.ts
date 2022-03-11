import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { useCallback, useEffect } from 'react';

import allActions from '@/redux-folder/actions';
import type { RootState } from '@/redux-folder/store';

const useUserData = (username: string) => {
  const getUserData = allActions.userActions.getUser;
  const userData = useSelector((state: RootState) => state.user, shallowEqual);
  const dispatch = useDispatch();
  const getData = useCallback((user: string) => dispatch(getUserData(user)), [dispatch]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData(username);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return { userData };
};

export default useUserData;
