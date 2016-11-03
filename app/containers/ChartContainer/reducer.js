/*
 *
 * BarChart reducer
 *
 */

import {
DATA_FETCH_SUCCESS_1,
DATA_FETCH_SUCCESS_2,
DATA_FETCH_SUCCESS_3,
DATA_FETCH_SUCCESS_4,
DATA_FETCH_SUCCESS_5,
} from './constants';

import { LOCATION_CHANGE } from 'react-router-redux';



const update = (state, mutations) =>
  Object.assign({}, state, mutations)


const initialState = {
  dashboardData1: [],
  dashboardData2: [],
  dashboardData3: [],
};

function chartContainerReducer(state = initialState, action) {

  switch (action.type) {

  case DATA_FETCH_SUCCESS_1:
    return state.set('dashboardData1', action.dashboardData1.data)
    // return update(state, {dashboardData1: action.dashboardData1.data})

  case DATA_FETCH_SUCCESS_2:
      return update(state, {dashboardData2: action.dashboardData2.data})
    // return update(state, {data: action.data.data});
    // return {...state, mainDashData: [...state.mainDashData, ...action.mainDashData.data]}

  case LOCATION_CHANGE:
    return  initialState

  default:
    return state;
  }
}

export default chartContainerReducer;


    // case DATA_LOADED:
    //   return update(state, {data: action.data.data});


// return {...state, [entryId]: {...state[entryId], [entryName]: [...state[entryId][entryName], uniqueEntry]
//   }
// };