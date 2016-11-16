/*
 *
 * CorporatePartnershipsContainer actions
 *
 */

import {
  GET_API_URL,
  GET_LOCATION_LIST,
  SELECTED_LOCATION,
  RESIZE_CHART,
} from './constants';


export function getApiUrl(url){
   return {
      type: GET_API_URL,
      payload: {
          url
      }
  }
};

export function getLocationList(locationUrl){
	return{
		type: GET_LOCATION_LIST,
		payload: {
			locationUrl
		}
	}
};

export function selectLocation(selectedLocation){
  return{
    type: SELECTED_LOCATION,
    payload: {
      selectedLocation
    }
  }
};

export function ResizeWindow(width, height){
  return{
    type: RESIZE_CHART,
    payload: {
      width: width,
      height: height
    }
  }
};