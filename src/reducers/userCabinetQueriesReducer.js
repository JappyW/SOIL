import {
  RECEIVE_USER_CHECK_CROP_QUERIES,
  RECEIVE_USER_CROPS_CHECK_QUERIES,
} from "../constants/actionTypes";

const initialState = {
  orders: [],
  errorMessage: "",
};

function userCabinetQueriesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_CHECK_CROP_QUERIES:
      return {
        ...state,
        queries: action.payload,
      };
    case RECEIVE_USER_CROPS_CHECK_QUERIES:
      return {
        ...state,
        queries: action.payload,
      };
    default:
      return state;
  }
}

export default userCabinetQueriesReducer;
