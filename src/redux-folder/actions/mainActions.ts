import { Dispatch } from 'redux';

// import type { RootState } from '@/redux-folder/store';
import { fetchData } from '@/services';
import { MainActionTypes, MainConstantTypes, TData, IResponse } from '@/types/mainStore';
import { formatServerDataToData } from '@/utils/middleware-data';

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

const getData = () => async (dispatch: Dispatch<MainActionTypes>) => {
  dispatch(setLoading());
  try {
    const response = await fetchData<IResponse>();
    dispatch(setSuccess(formatServerDataToData(response.data)));
    dispatch(setSuccess([]));
  } catch (e) {
    dispatch(setError(e as IError));
  }
};

export default { getData };
