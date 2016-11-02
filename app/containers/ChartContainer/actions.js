/*
 *
 * BarChart actions
 *
 */

import {
  LOAD_DATA,
  LOAD_DATA_ERROR,
  MAKE_API_REQUEST,
  DATA_FETCH_SUCCEEDED,
  DATA_FETCH_FAILED,
} from './constants';


export function loadData(){
	return {
		type: LOAD_DATA
	}
}

// export function loadDataError(){
// 	return {
// 		type: LOAD_DATA_ERROR
// 	}
// }

// export function getData(data){
//   return {
//     type: GET_DATA,
//     data: data
//   }
// }

export function dispatchMyAction(url){
   type: DISPATCH_ACTION,
   url
}

// export function makeApiRequest(url){
// return{
//     type: MAKE_API_REQUEST,
//     url
//     }
// }
