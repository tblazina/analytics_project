import { take, call, race, put, select, fork, cancel, cancelled} from 'redux-saga/effects';
import {takeEvery, takeLatest} from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as axios from 'axios';
import {GET_LOCATION_LIST,
        LOCATION_LIST_FETCH_SUCCESS,
        DATA_FETCH_SUCCESS_1,
        DATA_FETCH_SUCCESS_2,
        DATA_FETCH_SUCCESS_3,
        DATA_FETCH_SUCCESS_4,
        DATA_FETCH_SUCCESS_5,
        LOAD_DATA_ERROR,
        GET_API_URL,
        INITIAL_LOCATION,
    } from './constants';


// Individual exports for testing

function* watchForLocationList() {   
    yield fork(takeEvery, GET_LOCATION_LIST, getLocationList);
}

export function* getLocationList(action){
    let locations = yield fetchData(action.payload.locationUrl);
    yield put({type: LOCATION_LIST_FETCH_SUCCESS, locations});
    let selectedLocation = locations.data[0].locationname

    yield put({type: INITIAL_LOCATION, selectedLocation})

}


export const fetchData = (url) => {
  return axios.get(url);
};

export function* loadData(action) {

    try{
        for(let j = 0; j < action.payload.url.length; j++){

        if (j ===0){
            let corporateDashboardData1 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_1, corporateDashboardData1});
            }

        if (j ===1){
            let corporateDashboardData2 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_2, corporateDashboardData2});
            }

        if (j ===2){
            let corporateDashboardData3 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_3, corporateDashboardData3});
            }

        if (j ===3){
            let corporateDashboardData4 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_4, corporateDashboardData4});
            }

        if (j ===4){
            let corporateDashboardData5 = yield fetchData(action.payload.url[j]);
            yield put({type: DATA_FETCH_SUCCESS_5, corporateDashboardData5});
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

function* mainCorporatePartnerships() {
    // Fork watcher so we can continue execution

    const watcher = yield fork(watchForLoadData);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);

}


// All sagas to be loaded
export default [
  mainCorporatePartnerships,
  watchForLocationList
];
