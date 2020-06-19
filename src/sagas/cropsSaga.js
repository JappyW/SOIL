import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_CROPS_LIST,
  REQUEST_CROPS_PH,
  REQUEST_CROPS_FOR_PLANTING,
  REQUEST_CROP_PLANTABILITY,
  REQUEST_FERTILIZERS,
  REQUEST_ADD_USER_CHECK_CROP_QUERY,
  REQUEST_ADD_USER_CROPS_CHECK_QUERY
} from '../constants/cropsActionTypes';

import {
  getCropsList,
  getCropsPH,
  getWeather,
  getCropsForPlanting,
  getCropPlantability,
  getFertilizers,
  getAddUserCropsCheckQuery,
  getAddUserCheckCropQuery
} from '../api/cropsApi';
import {
  receiveCropsFromDataBase,
  receiveCropsPH,
  receiveWeather,
  receiveCropsForPlanting,
  receiveCropPlantability,
  receiveFertilizers,
  receiveAddUserCheckCropQuery,
  receiveAddUserCropsCheckQuery
} from '../actions/cropsAction';

function* workerGetCropsFromDatabase(action) {
  try {
    const response = yield call(getCropsList);
    yield put(receiveCropsFromDataBase(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetCropsFromDatabase() {
  yield takeLatest(REQUEST_CROPS_LIST, workerGetCropsFromDatabase);
}

function* workerGetCropsPH(action) {
  try {
    const response = yield call(getCropsPH, action.payload);
    yield put(receiveCropsPH(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetCropsPH() {
  yield takeLatest(REQUEST_CROPS_PH, workerGetCropsPH);
}

function* workerGetWeather(action) {
  try {
    const response = yield call(getWeather, action.payload);
    yield put(receiveWeather(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetWeather() {
  yield takeLatest(REQUEST_CROPS_PH, workerGetWeather);
}

function* workerGetCropsForPlanting(action) {
  try {
    const response = yield call(getCropsForPlanting, action.payload);
    yield put(receiveCropsForPlanting(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetCropsForPlanting() {
  yield takeLatest(REQUEST_CROPS_FOR_PLANTING, workerGetCropsForPlanting);
}

function* workerGetCropPlantability(action) {
  try {
    const response = yield call(getCropPlantability, action.payload);
    yield put(receiveCropPlantability(response));
    if (!response.ph) {
      yield put({
        type: REQUEST_FERTILIZERS,
        payload: {
          bestPhMax: action.payload.crop[0].bestPhMax,
          bestPhMin: action.payload.crop[0].bestPhMin,
          ph: action.payload.ph
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetCropPlantability() {
  yield takeLatest(REQUEST_CROP_PLANTABILITY, workerGetCropPlantability);
}

function* workerGetFertilizers(action) {
  try {
    const response = yield call(getFertilizers, action.payload);
    yield put(receiveFertilizers(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherGetFertilizers() {
  yield takeLatest(REQUEST_FERTILIZERS, workerGetFertilizers);
}

function* workerAddUserCheckCropQuery(action) {
  try {
    const response = yield call(getAddUserCheckCropQuery, action.payload);
    yield put(receiveAddUserCheckCropQuery(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherAddUserCheckCropQuery() {
  yield takeLatest(REQUEST_ADD_USER_CHECK_CROP_QUERY, workerAddUserCheckCropQuery);
}

function* workerAddUserCropsCheckQuery(action) {
  try {
    const response = yield call(getAddUserCropsCheckQuery, action.payload);
    yield put(receiveAddUserCropsCheckQuery(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherAddUserCropsCheckQuery() {
  yield takeLatest(REQUEST_ADD_USER_CROPS_CHECK_QUERY, workerAddUserCropsCheckQuery);
}
