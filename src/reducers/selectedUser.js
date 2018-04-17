import { SELECTED_USER_ADD, SELECTED_USER_REMOVE } from '../constants/actionTypes';

/**
 * Initial state
 * @type {{selectedIds: Array}}
 */
const initialState = {
  selectedIds: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * When user is selected.
     */
    case SELECTED_USER_ADD:
      initialState.selectedIds = [...initialState.selectedIds, action.payload];
      return {
        ...initialState,
      };
    /**
     * When user is removed
     */
    case SELECTED_USER_REMOVE:
      initialState.selectedIds = initialState.selectedIds.filter(
        (data, i) => data !== action.payload,
      );
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
