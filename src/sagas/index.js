import { all, fork } from 'redux-saga/effects';
import {
  watcherGetOAuthGoogle,
  watcherGetSignIn,
  watcherGetSignUp,
  watcherGetCheckAuth,
  watcherGetSignOut,
  watcherDispatchAuthSignedIn,
  watcherGetUserData,
  watcherGetDashboard,
  watcherGetEditProfile,
  watcherVerifyUser,
  watcherGetVerificationEmail,
  watcherGetChangePassword,
  watcherGetValidationPassword,
  watcherGetSendRecoveryEmail,
  watcherRecoverPassword
} from './authSaga';
import {
  watcherGetCropsFromDatabase,
  watcherGetCropsPH,
  watcherGetWeather,
  watcherGetCropsForPlanting,
  watcherGetCropPlantability,
  watcherGetFertilizers,
  watcherAddUserCropsCheckQuery,
  watcherAddUserCheckCropQuery
} from './cropsSaga';
import uploadSaga from "./uploadSaga";
import {  watcherGetUserCheckCropQueries,
  watcherGetUserCropsCheckQueries} from "./listOfUserQueriesSaga"

export default function* rootSaga() {
  yield all([
    fork(watcherGetOAuthGoogle),
    fork(watcherGetSignIn),
    fork(watcherGetSignUp),
    fork(watcherGetCheckAuth),
    fork(watcherGetSignOut),
    fork(watcherDispatchAuthSignedIn),
    fork(watcherGetUserData),
    fork(watcherGetDashboard),
    fork(watcherGetEditProfile),
    fork(watcherVerifyUser),
    fork(watcherGetVerificationEmail),
    fork(watcherGetChangePassword),
    fork(watcherGetSendRecoveryEmail),
    fork(watcherRecoverPassword),
    fork(watcherGetValidationPassword),
    fork(watcherGetCropsFromDatabase),
    fork(watcherGetCropsPH),
    fork(watcherGetWeather),
    fork(watcherGetCropsForPlanting),
    fork(watcherGetCropPlantability),
    fork(watcherGetFertilizers),
    fork(uploadSaga),
    fork(watcherGetUserCheckCropQueries),
    fork(watcherGetUserCropsCheckQueries),
    fork(watcherAddUserCropsCheckQuery),
    fork(watcherAddUserCheckCropQuery),
  ]);
}
