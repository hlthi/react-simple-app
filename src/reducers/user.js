import {
  FETCH_USER_FAIL,
  FETCH_USER_FETCHING,
  FETCH_USER_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isFail: false,
  isSuccess: false,
  users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isFetching: false,
        users: action.payload,
      };
    case FETCH_USER_FETCHING:
      return {
        ...initialState,
        isFetching: true,
      };
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
