import {
  TEST_ACTION_SAGA,
  TEST_ACTION,
  FETCH_DATA_SAGA,
  FETCH_DATA,
  FETCH_SINGLE_DATA_SAGA,
  FETCH_SINGLE_DATA,
  POST_DATA_SAGA,
  POST_DATA
} from "../Types";
import { takeEvery, put, call } from "redux-saga/effects";
import Api from "../../Apis/Api";
//-------------workers sagas--------------

// TEST SAGA

function* test() {
  yield put({ type: TEST_ACTION });
}

function* fetchData(action) {
  const {DataList}=action;
  // const response = yield call(Api.fetchData);
  // console.log("response", response);
  console.log("Response from saga",DataList);
  yield put({ type: FETCH_DATA ,payload:DataList});
}
function* fetchSingleData(action) {
  const { id } = action;
  const response = yield call(Api.fetchSingleData, id);
  console.log("response", response.data);
  yield put({ type: FETCH_SINGLE_DATA , payload:response.data });
}

function* postData(action) {
  const {data}=action;
  const response = yield call(Api.postData,data);
  console.log("responseeeee", response);
  yield put({ type: POST_DATA ,payload:response.data });

 
}
//-------------watchers sagas-------------

export default function* rootSaga() {
  yield takeEvery(TEST_ACTION_SAGA, test);
  yield takeEvery(FETCH_DATA_SAGA, fetchData);
  yield takeEvery(FETCH_SINGLE_DATA_SAGA, fetchSingleData);
  yield takeEvery(POST_DATA_SAGA, postData);
}
