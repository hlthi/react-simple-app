import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counterver2';
import user from './user';

export default combineReducers({
  router: routerReducer,
  counter,
  user,
});
