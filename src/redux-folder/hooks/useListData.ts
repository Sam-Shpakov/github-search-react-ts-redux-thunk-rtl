import { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import allActions from '@/redux-folder/actions';
import type { RootState } from '@/redux-folder/store';

const useListData = () => {
  const getMainData = allActions.mainActions.getData;
  const dataMain = useSelector((state: RootState) => state.main, shallowEqual);
  const dispatch = useDispatch();
  const getData = useCallback(() => dispatch(getMainData()), [dispatch]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return { dataMain };
};

export default useListData;
