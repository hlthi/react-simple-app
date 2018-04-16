import { FETCH_POST_FAIL, FETCH_POST_FETCHING, FETCH_POST_SUCCESS } from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isFail: false,
  isSuccess: false,
  posts: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isFetching: false,
        posts: action.payload,
      };
    case FETCH_POST_FETCHING:
      return {
        ...initialState,
        isFetching: true,
      };
    case FETCH_POST_FAIL:
      return {
        ...initialState,
        isFail: true,
        isFetching: false,
      };
    default:
      return state;
  }
}
