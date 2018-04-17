import { PIE_DATA_ADD, PIE_DATA_REMOVE, PIE_UPDATE_ACTIVE_INDEX } from '../constants/actionTypes';

/**
 * Add data to pie data.
 * @param pieData {id : 1 name : "xyz" , value:300}
 * @returns {{type: string, payload: *}}
 */
export const addPieData = pieData => ({
  type: PIE_DATA_ADD,
  payload: pieData,
});

/**
 * Remove data from pie
 * @param pieDataId number ex. 1
 * @returns {{type: string, payload: *}}
 */
export const removePieData = pieDataId => ({
  type: PIE_DATA_REMOVE,
  payload: pieDataId,
});

/**
 * Updata mouse index for pie graph.
 * @param activeIndex number
 * @returns {{type: string, payload: *}}
 */
export const updatePieIndex = activeIndex => ({
  type: PIE_UPDATE_ACTIVE_INDEX,
  payload: activeIndex,
});
