import axios from 'axios';
import { FETCH_USER_FETCHING, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../constants/actionTypes';

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER_FETCHING,
  });

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data);
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
