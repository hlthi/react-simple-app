import {
  INCREMENT,
  DECREMENT,
  INCREMENT_REQUESTED,
  DECREMENT_REQUESTED,
} from '../constants/actionTypes';

const initialState = {
  count: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...initialState,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...initialState,
        count: state.count - 1,
      };
    case INCREMENT_REQUESTED:
      return {
        ...initialState,
        count: state.count + 1,
      };
    case DECREMENT_REQUESTED:
      return {
        ...initialState,
        count: state.count + 1,
      };
  }

  return state;
}
