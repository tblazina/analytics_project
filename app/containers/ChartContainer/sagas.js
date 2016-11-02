import { take, call, put, select, fork, takeEvery, takeLatest, cancelled} from 'redux-saga/effects';
import * as axios from 'axios';
import {DATA_LOADED,
        LOAD_DATA_ERROR,
        DATA_FETCH_FAILED,
        GET_DATA,
        LOAD_URL} from './constants';
// Individual exports for testing

const API_ENDPOINT= 'http://localhost:8000/d3/location-category-sales'

// export const fetchData = () => {
//   return axios.get(API_ENDPOINT).then(function (response) {
//     return response.json().then( json => {
//     	return json
//     })
//   })
// };

export const fetchData = () => {
  return axios.get(API_ENDPOINT);
};


export function* loadData() {
  try{
  const data = yield fetchData();
  yield put({type: DATA_LOADED, data})}    // 
  catch (error){
		yield put({type: LOAD_DATA_ERROR })
	}
}


export function* watchForLoadData(){
	while(true){
		yield take('LOAD_DATA');  
		yield fork(loadData)
	}
}


// function* watcherGetChartData() {
//   try {
//        // continually listen for GET_DATA action
//       const { payload: { url } } = yield take(GET_DATA);
//       const apiData = yield call(fetchData, url);
//       console.log('fuck')
//       // put the data in Redux
//       yield put(getDataSuccess({ data: apiData}));

//     } finally {
//       if (yield cancelled()) {
//         console.log('watcher cancelled');
//       }
//     } // also deal with failure!! (not shown here)
//   }





// All sagas to be loaded
export default [
  loadData,
  watchForLoadData,
  // watcherGetChartData,
  // stateLog

];
