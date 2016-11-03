/*
 *
 * BarChart actions
 *
 */

import {
  GET_API_URL,
} from './constants';


export function getApiUrl(url){
   return {
      type: GET_API_URL,
      payload: {
          url
      }
  }
}

