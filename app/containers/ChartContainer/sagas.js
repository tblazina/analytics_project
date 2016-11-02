import { take, call, put, select, fork, takeEvery, cancelled} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import * as axios from 'axios';
import {LOAD_DATA,
        DATA_LOADED,
        LOAD_DATA_ERROR,
        LOAD_URL,
        GET_API_URL
    } from './constants';
// Individual exports for testing

const API_ENDPOINT= 'http://localhost:8000/d3/location-category-sales'


export const fetchData = (url) => {
  return axios.get(url);
};

export function* loadData(action) {
  try{
  const data = yield fetchData(action.payload.url);
  yield put({type: DATA_LOADED, data})    // This is the action creator which is passed to the reducer.js to pull the data, put dispatches it to the store
  yield put({type: LOAD_DATA_SUCCESS})}
  catch (error){
		yield put({type: LOAD_DATA_ERROR })
	}
}

function* watchForLoadData() {
  yield* takeLatest(GET_API_URL, loadData);
}

export function* testSaga(action){
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
  testSaga,
  // watcherGetChartData,

];
