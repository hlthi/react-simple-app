import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import post from './post';
import selectedUser from './selectedUser';
import pie from './pie';

/**
 * Combine all reducers.
 * Ex. state.post coming here.
 */
export default combineReducers({
  router: routerReducer,
  user,
  post,
  selectedUser,
  pie,
});
