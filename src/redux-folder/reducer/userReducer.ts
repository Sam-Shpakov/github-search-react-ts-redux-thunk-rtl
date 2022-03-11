import { UserConstantTypes } from '@/types/userStore';
import type { UserActionTypes, IStateUser, TData } from '@/types/userStore';

const defaultState: IStateUser = {
  error: '',
  loading: false,
  data: {} as TData,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const userReducer = (state: IStateUser = defaultState, action: UserActionTypes): IStateUser => {
  switch (action.type) {
    case UserConstantTypes.GET_DATA_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case UserConstantTypes.GET_DATA_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case UserConstantTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
