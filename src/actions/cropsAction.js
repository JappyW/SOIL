import {
  REQUEST_CROPS_LIST,
  RECEIVE_CROPS_LIST,
  REQUEST_CROPS_PH,
  RECEIVE_CROPS_PH,
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  REQUEST_CROPS_FOR_PLANTING,
  RECEIVE_CROPS_FOR_PLANTING,
  REQUEST_CROP_PLANTABILITY,
  RECEIVE_CROP_PLANTABILITY,
  REQUEST_FERTILIZERS,
  RECEIVE_FERTILIZERS,
  REQUEST_ADD_USER_CHECK_CROP_QUERY,
  RECEIVE_ADD_USER_CHECK_CROP_QUERY,
  REQUEST_ADD_USER_CROPS_CHECK_QUERY,
  RECEIVE_ADD_USER_CROPS_CHECK_QUERY
} from '../constants/cropsActionTypes';

export const requestCropsFromDataBase = () => ({
  type: REQUEST_CROPS_LIST
});
export const receiveCropsFromDataBase = payload => ({
  type: RECEIVE_CROPS_LIST,
  payload
});

export const requestCropsPH = payload => ({
  type: REQUEST_CROPS_PH,
  payload
});
export const receiveCropsPH = payload => ({
  type: RECEIVE_CROPS_PH,
  payload
});

export const requestWeather = payload => ({
  type: REQUEST_WEATHER,
  payload
});
export const receiveWeather = payload => ({
  type: RECEIVE_WEATHER,
  payload
});

export const requestCropsForPlanting = payload => ({
  type: REQUEST_CROPS_FOR_PLANTING,
  payload
});
export const receiveCropsForPlanting = payload => ({
  type: RECEIVE_CROPS_FOR_PLANTING,
  payload
});

export const requestCropPlantability = payload => ({
  type: REQUEST_CROP_PLANTABILITY,
  payload
});
export const receiveCropPlantability = payload => ({
  type: RECEIVE_CROP_PLANTABILITY,
  payload
});

export const requestFertilizers = payload => ({
  type: REQUEST_FERTILIZERS,
  payload
});
export const receiveFertilizers = payload => ({
  type: RECEIVE_FERTILIZERS,
  payload
});

export const requestAddUserCheckCropQuery = payload => ({
  type: REQUEST_ADD_USER_CHECK_CROP_QUERY,
  payload
});
export const receiveAddUserCheckCropQuery = payload => ({
  type: RECEIVE_ADD_USER_CHECK_CROP_QUERY,
  payload
});

export const requestAddUserCropsCheckQuery = payload => ({
  type: REQUEST_ADD_USER_CROPS_CHECK_QUERY,
  payload
});
export const receiveAddUserCropsCheckQuery = payload => ({
  type: RECEIVE_ADD_USER_CROPS_CHECK_QUERY,
  payload
});

