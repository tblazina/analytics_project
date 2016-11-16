/*
 *
 * CorporatePartnershipsContainer reducer
 *
 */

import {
DATA_FETCH_SUCCESS_1,
DATA_FETCH_SUCCESS_2,
DATA_FETCH_SUCCESS_3,
DATA_FETCH_SUCCESS_4,
DATA_FETCH_SUCCESS_5,
LOCATION_LIST_FETCH_SUCCESS,
INITIAL_LOCATION,
SELECTED_LOCATION,
RESIZE_CHART,
} from './constants';

import { LOCATION_CHANGE } from 'react-router-redux';



const update = (state, mutations) =>
  Object.assign({}, state, mutations)


const initialState = {
  corporateDashboardData1: [],
  corporateDashboardData2: [],
  corporateDashboardData3: [],
  corporateDashboardData4: [],
  locations: [],
  selectedLocation: '',
  width: window.innerWidth,
  height: window.innerHeight,
};

function corporatePartnershipsContainerReducer(state = initialState, action) {

  switch (action.type) {

  case LOCATION_LIST_FETCH_SUCCESS:
    return update(state, {locations: action.locations.data})

  case DATA_FETCH_SUCCESS_1:
      
     return update(state, {corporateDashboardData1: action.corporateDashboardData1.data})

  case DATA_FETCH_SUCCESS_2:
      return update(state, {corporateDashboardData2: action.corporateDashboardData2.data})

  case DATA_FETCH_SUCCESS_3:
      return update(state, {corporateDashboardData3: action.corporateDashboardData3.data})

  case DATA_FETCH_SUCCESS_4:
      return update(state, {corporateDashboardData4: action.corporateDashboardData4.data})

  case INITIAL_LOCATION:
      return update(state, {selectedLocation: action.selectedLocation})
  
  case SELECTED_LOCATION:
      return update(state, {selectedLocation: action.payload.selectedLocation})

  case RESIZE_CHART:
      return update(state, {width: action.payload.width, height: action.payload.height})

    // return update(state, {data: action.data.data});
    // return {...state, mainDashData: [...state.mainDashData, ...action.mainDashData.data]}

  // case LOCATION_CHANGE:
  //   return  initialState

  default:
    return state;
  }
}

export default corporatePartnershipsContainerReducer;
