import { combineReducers } from 'redux';

import mainReducer from '@/redux-folder/reducer/mainReducer';
import userReducer from '@/redux-folder/reducer/userReducer';

export default combineReducers({
  main: mainReducer,
  user: userReducer,
});
