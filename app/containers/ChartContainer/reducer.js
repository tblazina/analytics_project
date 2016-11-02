/*
 *
 * BarChart reducer
 *
 */

import {
LOAD_DATA_SUCCESS, GET_API_URL, GET_DATA, DATA_LOADED
} from './constants';


const update = (state, mutations) =>
  Object.assign({}, state, mutations)


const initialState = {
  data: []
};

function chartContainerReducer(state = initialState, action) {

  switch (action.type) {

    case DATA_LOADED:
      return update(state, {data: action.data.data});

    default:
      return state;
  }
}

export default chartContainerReducer;
