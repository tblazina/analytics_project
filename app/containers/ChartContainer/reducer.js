/*
 *
 * BarChart reducer
 *
 */

import {
DATA_LOADED, GET_API_URL, GET_DATA,
} from './constants';


const update = (state, mutations) =>
  Object.assign({}, state, mutations)


const initialState = {
  data: []
};

function chartContainerReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {

    case DATA_LOADED:
      return update(state, {data: action.data.data});

    default:
      return state;
  }
}

export default chartContainerReducer;
