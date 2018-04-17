import { FETCH_POST_FAIL, FETCH_POST_FETCHING, FETCH_POST_SUCCESS } from '../constants/actionTypes';

/**
 * Initial state
 * @type {{isFetching: boolean, isFail: boolean, isSuccess: boolean, posts: Array}}
 */
const initialState = {
  isFetching: false,
  isFail: false,
  isSuccess: false,
  posts: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * If the fetch post runs successfully.
     */
    case FETCH_POST_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isFetching: false,
        posts: action.payload,
      };
    /**
     * While the fetch post
     */
    case FETCH_POST_FETCHING:
      return {
        ...initialState,
        isFetching: true,
      };
    /**
     * If the fect post failed.
     */
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
