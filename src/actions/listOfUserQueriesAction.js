import {
  REQUEST_USER_CROPS_CHECK_QUERIES,
  RECEIVE_USER_CROPS_CHECK_QUERIES,
  REQUEST_USER_CHECK_CROP_QUERIES,
  RECEIVE_USER_CHECK_CROP_QUERIES,
} from "../constants/actionTypes"

export const requestUserCropsCheckQueries = payload => ({
  type: REQUEST_USER_CROPS_CHECK_QUERIES,
  payload
})
export const receiveUserCropsCheckQueries = payload => ({
  type: RECEIVE_USER_CROPS_CHECK_QUERIES,
  payload
})

export const requestUserCheckCropQueries = payload => ({
  type: REQUEST_USER_CHECK_CROP_QUERIES,
  payload
})

export const receiveUserCheckCropQueries = payload => ({
  type: RECEIVE_USER_CHECK_CROP_QUERIES,
  payload
})
