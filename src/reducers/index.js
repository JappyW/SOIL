import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboard";
import cropsReducer from "./cropsReducer";
import userQueries from "./userCabinetQueriesReducer";
import upload from './uploadFile';


const rootReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  upload,
  dash: dashboardReducer,
  soil: cropsReducer,
  userQueries
});

export default rootReducers;
