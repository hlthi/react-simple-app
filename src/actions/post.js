import axios from 'axios';
import { FETCH_POST_FAIL, FETCH_POST_FETCHING, FETCH_POST_SUCCESS } from '../constants/actionTypes';

export const fetchPost = () => dispatch => {
  dispatch({
    type: FETCH_POST_FETCHING,
  });

  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response.data);
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_POST_FAIL,
        payload: error,
      });
    });
};
