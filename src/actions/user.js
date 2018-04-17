import axios from 'axios';
import {
  FETCH_USER_FETCHING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  SELECTED_USER_ADD,
  SELECTED_USER_REMOVE,
} from '../constants/actionTypes';

/**
 * Fetch user from rest endpoint.
 * @returns {Function}
 */
export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER_FETCHING,
  });

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_USER_FAIL,
        payload: error,
      });
    });
};

/**
 * add selected user in table to store
 * @param userId number ex.1
 * @returns {{type: string, payload: *}}
 */
export const selectedUserAdd = userId => ({
  type: SELECTED_USER_ADD,
  payload: userId,
});

/**
 * add selected user in table to store
 * @param userId number ex.1
 * @returns {{type: string, payload: *}}
 */
export const selectedUserRemove = userId => ({
  type: SELECTED_USER_REMOVE,
  payload: userId,
});
