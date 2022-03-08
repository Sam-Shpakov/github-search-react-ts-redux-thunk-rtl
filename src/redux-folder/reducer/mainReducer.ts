import { MainConstantTypes } from '@/types/mainStore';
import type { MainActionTypes, IStateMain } from '@/types/mainStore';

const defaultState: IStateMain = {
  error: '',
  loading: false,
  data: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const mainReducer = (state: IStateMain = defaultState, action: MainActionTypes): IStateMain => {
  switch (action.type) {
    case MainConstantTypes.GET_DATA_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case MainConstantTypes.GET_DATA_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case MainConstantTypes.GET_DATA_SUCCESS:
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

export default mainReducer;
