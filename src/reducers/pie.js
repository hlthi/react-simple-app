import { PIE_DATA_ADD, PIE_DATA_REMOVE, PIE_UPDATE_ACTIVE_INDEX } from '../constants/actionTypes';

/**
 * Initial state
 * @type {{datas: Array, activeIndex: number}}
 */
const initialState = {
  datas: [],
  activeIndex: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    /**
     * When data is added.
     */
    case PIE_DATA_ADD:
      initialState.datas = [...initialState.datas, action.payload];
      return {
        ...initialState,
      };
    /**
     * When data is removed.
     */
    case PIE_DATA_REMOVE:
      initialState.activeIndex = 0;
      initialState.datas = initialState.datas.filter((data, i) => data.id !== action.payload);
      return {
        ...initialState,
      };
    /**
     * When pie chart active index changed.
     */
    case PIE_UPDATE_ACTIVE_INDEX:
      initialState.activeIndex = action.payload;
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
