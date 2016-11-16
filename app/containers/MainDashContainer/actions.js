/*
 *
 * BarChart actions
 *
 */

import {
  GET_API_URL,
  GET_LOCATION_LIST,
} from './constants';


export function getApiUrl(url){
   return {
      type: GET_API_URL,
      payload: {
          url
      }
  }
}

export function getLocationList(locationUrl){
	return{
		type: GET_LOCATION_LIST,
		payload: {
			locationUrl
		}
	}
}
