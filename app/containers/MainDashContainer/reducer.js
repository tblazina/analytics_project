/*
 *
 * MainDashContainer reducer
 *
 */

import {
LOCATION_LIST_FETCH_SUCCESS,
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
  mainDashboardData1: [],
  mainDashboardData2: [],
  mainDashboardData3: [],
  mainDashboardData4: [],
  locations: []
};

function mainDashContainerReducer(state = initialState, action) {

  switch (action.type) {
  // case LOCATION_CHANGE:
  //   return  initialState

  case LOCATION_LIST_FETCH_SUCCESS:
    return update(state, {locations: action.locations.data})

  case DATA_FETCH_SUCCESS_1:
    return update(state, {mainDashboardData1: action.mainDashboardData1.data})

  case DATA_FETCH_SUCCESS_2:
    return update(state, {mainDashboardData2: action.mainDashboardData2.data})

  case DATA_FETCH_SUCCESS_3:
    return update(state, {mainDashboardData3: action.mainDashboardData3.data})

  case DATA_FETCH_SUCCESS_4:
    return update(state, {mainDashboardData4: action.mainDashboardData4.data})

    // return update(state, {data: action.data.data});
    // return {...state, mainDashData: [...state.mainDashData, ...action.mainDashData.data]}

  // This will make it so if you navigate away from the page it will clear the data


  default:
    return state;
  }
}

export default mainDashContainerReducer;


    // case DATA_LOADED:
    //   return update(state, {data: action.data.data});


// return {...state, [entryId]: {...state[entryId], [entryName]: [...state[entryId][entryName], uniqueEntry]
//   }
// };