import { combineReducers } from 'redux';

import mainReducer from '@/redux-folder/reducer/mainReducer';

export default combineReducers({
  main: mainReducer,
});
