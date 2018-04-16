import {
  DECREMENT,
  DECREMENT_REQUESTED,
  INCREMENT,
  INCREMENT_REQUESTED,
} from '../constants/actionTypes';

export const incrementCounter = () => {
  console.log('Increment Request : ');
  return {
    type: INCREMENT,
    payload: '',
  };
};

export const decrementCounter = () => {
  console.log('Increment Request : ');
  return {
    type: DECREMENT,
    payload: '',
  };
};

export const incrementRequested = () => dispatch => {
  console.log('Increment Async Request : ', dispatch);

  setTimeout(
    () =>
      dispatch({
        type: INCREMENT_REQUESTED,
        payload: '',
      }),
    3000,
  );
};

export const decrementRequested = () => dispatch => {
  console.log('Increment Async Request : ', dispatch);

  setTimeout(
    () =>
      dispatch({
        type: DECREMENT_REQUESTED,
        payload: '',
      }),
    3000,
  );
};
