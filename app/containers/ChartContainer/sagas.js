import { take, call, race, put, select, fork, cancel, cancelled} from 'redux-saga/effects';
import {takeEvery, takeLatest} from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as axios from 'axios';
import {DATA_FETCH_SUCCESS_1,
        DATA_FETCH_SUCCESS_2,
        DATA_FETCH_SUCCESS_3,
        DATA_FETCH_SUCCESS_4,
        DATA_FETCH_SUCCESS_5,
        LOAD_DATA_ERROR,
        GET_API_URL
    } from './constants';
// Individual exports for testing


export const fetchData = (url) => {
  return axios.get(url);
};

export function* loadData(action) {

    try{
        for(let j = 0; j < action.payload.url.length; j++){

        if (j ===0){
            let dashboardData1 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_1, dashboardData1});
            }

        if (j ===1){
            let dashboardData2 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_2, dashboardData2});
            }

        if (j ===2){
            let dashboardData3 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_2, dashboardData3});
            }

        if (j ===3){
            let dashboardData4 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_2, dashboardData4});
            }

        if (j ===4){
            let dashboardData5 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_2, dashboardData5});
            }

        
        };
    }
    catch (error){
		yield put({type: LOAD_DATA_ERROR })
	}
}

function* watchForLoadData() {   
    yield fork(takeEvery, GET_API_URL, loadData);
}

function* main() {
    // Fork watcher so we can continue execution

    const watcher = yield fork(watchForLoadData);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
    console.log('worked')
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
  // loadData,
  main,
  // watcherGetChartData,

];



