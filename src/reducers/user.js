import { FETCH_USER_FAIL, FETCH_USER_FETCHING, FETCH_USER_SUCCESS } from '../constants/actionTypes';

/**
 * Initial state
 * @type {{isFetching: boolean, isFail: boolean, isSuccess: boolean, users: Array}}
 */
const initialState = {
  isFetching: false,
  isFail: false,
  isSuccess: false,
  users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * If the fetch user runs successfully.
     */
    case FETCH_USER_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isFetching: false,
        users: action.payload,
      };
    /**
     * While the fetch user
     */
    case FETCH_USER_FETCHING:
      return {
        ...initialState,
        isFetching: true,
      };
    /**
     * If the fect post failed.
     */
    case FETCH_USER_FAIL:
      return {
        ...initialState,
        isFail: true,
        isFetching: false,
      };
    default:
      return state;
  }
}
