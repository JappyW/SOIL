import { call, put, takeLatest } from "redux-saga/effects"
import { getUserCropsCheckQueries, getUserCheckCropQueries } from "../api/listOfUserQueriesApi"
import { receiveUserCropsCheckQueries, receiveUserCheckCropQueries } from "../actions/listOfUserQueriesAction"
import { REQUEST_USER_CROPS_CHECK_QUERIES, REQUEST_USER_CHECK_CROP_QUERIES } from "../constants/actionTypes"

export function* watcherGetUserCropsCheckQueries() {
  yield takeLatest(REQUEST_USER_CROPS_CHECK_QUERIES, workerGetUserCropsCheckQueries)
}

function* workerGetUserCropsCheckQueries(action) {
  try {
    const response = yield call(getUserCropsCheckQueries, action.payload)
    yield put(receiveUserCropsCheckQueries(response))
  } catch (e) {
    console.error(e)
  }
}

export function* watcherGetUserCheckCropQueries() {
  yield takeLatest(REQUEST_USER_CHECK_CROP_QUERIES, workerGetUserCheckCropQueries)
}

function* workerGetUserCheckCropQueries(action) {
  try {
    const response = yield call(getUserCheckCropQueries, action.payload)
    yield put(receiveUserCheckCropQueries(response))
  } catch (e) {
    console.error(e)
  }
}