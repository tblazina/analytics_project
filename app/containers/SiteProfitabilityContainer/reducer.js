/*
 *
 * SiteProfitabilityContainer reducer
 *
 */

import { DATA_FETCH_SUCCESS_1,
DATA_FETCH_SUCCESS_2,
DATA_FETCH_SUCCESS_3,
DATA_FETCH_SUCCESS_4,
DATA_FETCH_SUCCESS_5,
LOCATION_LIST_FETCH_SUCCESS,
INITIAL_LOCATION,
SELECTED_LOCATION,
RESIZE_CHART,
} from './constants';

const update = (state, mutations) =>
  Object.assign({}, state, mutations)



const initialState = {
  siteProfitabilityData1: [],
  siteProfitabilityData2: [],
  siteProfitabilityData3: [],
  siteProfitabilityData4: [],
  locations: [],
  selectedLocation: '',
  outerWidth: 0,
  outerHeight: 0,
};

function siteProfitabilityContainerReducer(state = initialState, action) {
  switch (action.type) {

  case LOCATION_LIST_FETCH_SUCCESS:
    return update(state, {locations: action.locations.data})

  case DATA_FETCH_SUCCESS_1:
      
     return update(state, {siteProfitabilityData1: action.siteProfitabilityData1.data})

  case DATA_FETCH_SUCCESS_2:
      return update(state, {siteProfitabilityData2: action.siteProfitabilityData2.data})

  case DATA_FETCH_SUCCESS_3:
      return update(state, {siteProfitabilityData3: action.siteProfitabilityData3.data})

  case DATA_FETCH_SUCCESS_4:
      return update(state, {siteProfitabilityData4: action.siteProfitabilityData4.data})

  case INITIAL_LOCATION:
      return update(state, {selectedLocation: action.selectedLocation})
  
  case SELECTED_LOCATION:
      return update(state, {selectedLocation: action.payload.selectedLocation})

  case RESIZE_CHART:
      return update(state, {outerWidth: action.payload.width, outerHeight: action.payload.height})

    // return update(state, {data: action.data.data});
    // return {...state, mainDashData: [...state.mainDashData, ...action.mainDashData.data]}

  // case LOCATION_CHANGE:
  //   return  initialState

  default:
    return state;
	}	
}

export default siteProfitabilityContainerReducer;
