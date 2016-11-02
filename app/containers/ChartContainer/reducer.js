/*
 *
 * BarChart reducer
 *
 */

import {
DATA_LOADED, MAKE_API_REQUEST, GET_DATA,
} from './constants';


const update = (state, mutations) =>
  Object.assign({}, state, mutations)


const initialState = {
  data: []
};

function chartContainerReducer(state = initialState, action) {
  switch (action.type) {

    case DATA_LOADED:
      return update(state, {data: action.data});

    default:
      return state;
  }
}

export default chartContainerReducer;
