import { HOST } from "./apiUrl";

export const ordersAction = {
  BOOK_ROOM: "BOOK_ROOM",
  CHECK_ROOM: "CHECK_ROOM",
  REQUEST_GET_DATA: "REQUEST_GET_DATA",
  RECEIVE_GET_DATA: "RECEIVE_GET_DATA",
  RECEIVE_POST_RESULT: "RECEIVE_POST_RESULT",
  SEND_ERROR: "SEND_ERROR",
  CLEAR_POST_RESULT: "CLEAR_POST_RESULT",
};
export const TOGGLE_MODAL = "TOGGLE_MODAL";
/* END OF ORDERS ACTIONS */

export const TOGGLE_MODAL_CAROUSEL = "TOGGLE_MODAL_CAROUSEL";
export const TOGGLE_MODAL_FEEDBACK = "TOGGLE_MODAL_FEEDBACK";

/* IMAGE UPLOAD ACTIONS */
export const UPLOAD_ACTIONS = {
  UPLOAD_FILES: "UPLOAD_FILES",
  UPLOAD_FILES_START: "UPLOAD_FILES_START",
  UPLOAD_FILES_PROGRESS: "UPLOAD_FILES_PROGRESS",
  UPLOAD_FILES_SUCCESS: "UPLOAD_FILES_SUCCESS",
  UPLOAD_FILES_FAILED: "UPLOAD_FILES_FAILED",
};
export const LOAD_FILE = "LOAD_FILE";
export const RECEIVE_IMAGE_PROFILE = "RECEIVE_IMAGE_PROFILE";
export const CLEAR_REDUX_FIELD = "CLEAR_REDUX_FIELD";
export const UPLOAD_PROFILE_PATH = "profile";
export const UPLOAD_COLLECTION_PATH = "collection";
export const UPLOAD_COLLECTION_SUCCESS = "UPLOAD_COLLECTION_SUCCESS";
export const UPLOAD_COLLECTION_ERROR = "UPLOAD_COLLECTION_ERROR";

/* END OF IMAGE UPLOAD ACTIONS */

export const SELECT_FINISH_DATE = "SELECT_FINISH_DATE";
export const SELECT_START_DATE = "SELECT_START_DATE";
export const SELECT_ROOM_TYPE = "SELECT_ROOM_TYPE";
export const REQUEST_GET_HOTELS = "REQUEST_GET_HOTELS";
export const RECEIVE_GET_HOTELS = "RECEIVE_GET_HOTELS";
export const REQUEST_GET_HOTELDETAILS = "REQUEST_GET_HOTELDETAILS";
export const RECEIVE_GET_HOTELDETAILS = "RECEIVE_SELECTED_HOTEL";
export const REQUEST_GET_FEEDBACK_BY_HOTEL_ID =
  "REQUEST_GET_FEEDBACK_BY_HOTEL_ID";
export const RECEIVE_GET_FEEDBACK_BY_HOTEL_ID =
  "RECEIVE_GET_FEEDBACK_BY_HOTEL_ID";
export const RECEIVE_GET_COMFORTS = "RECEIVE_GET_COMFORTS";
export const REQUEST_GET_COMFORTS = "REQUEST_GET_COMFORTS";
export const RECEIVE_COMFORTS_DELETED = "RECEIVE_COMFORTS_DELETED";
export const REQUEST_COMFORTS_DELETED = "REQUEST_COMFORTS_DELETED";
export const RECEIVE_COMFORT_ADDED = "RECEIVE_COMFORT_ADDED";
export const REQUEST_COMFORT_ADDED = "REQUEST_COMFORT_ADDED";

export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const HOTEL_URL = "hotels";
export const USERS = HOST + "/users";
export const UPLOAD_PATH = "uploadImages";
export const STAR_RATING_COLOR = "#ffb400";
export const STAR_RATING_DIMENSION = "14px";
export const STAR_NUMBER = 5;
export const SEARCH_URL = "search";
export const REQUEST_SEARCH_HOTELS = "REQUEST_SEARCH_HOTELS";
export const RECEIVE_SEARCH_HOTELS = "RECEIVE_SEARCH_HOTELS";
export const REQUEST_SEARCH_TIPS = "REQUEST_SEARCH_TIPS";
export const RECEIVE_SEARCH_TIPS = "RECEIVE_SEARCH_TIPS";
export const INPUT_SEARCH_STRING = "INPUT_SEARCH_STRING";
export const INPUT_ROOM_TYPE = "INPUT_ROOM_TYPE";
export const CLEAR_SEARCH_INPUTS = "CLEAR_SEARCH_INPUTS";

export const RECEIVE_RESPONSE_POST_CREATE_HOTEL =
  "RECEIVE_RESPONSE_POST_CREATE_HOTEL";
export const REQUEST_POST_CREATE_HOTEL = "REQUEST_POST_CREATE_HOTEL";

export const REQUEST_CURRENT_PAGE = "REQUEST_CURRENT_PAGE";
export const RECEIVE_CURRENT_PAGE = "RECEIVE_CURRENT_PAGE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const ZOOM = 14;
export const MAP_HEIGHT = "400px";
export const CENTER_LAT = 48.2922504;
export const CENTER_LNG = 25.9338641;
export const LOCALITY = "locality";
export const ROUTE = "route";
export const STREET_NUMBER = "street_number";
export const COUNTRY = "country";
export const ACCURACY_LAT = 0.0018;
export const API_KEY = "AIzaSyApxOcW3__A2M3SPHCGNV7QuLxMupc-i-g";
export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
export const HOTELS_COMFORTS_URL = "hotels/comforts";
export const HOTELS_FEEDBACK_URL = "hotels/feedback";

export const CROPS_CHECK = "CROPS_CHECK";
export const CHECK_CROP = "CHECK_CROP";
export const SUCCESS = "success";
export const OK_STATUS = "200";
export const EMAIL_NOT_VERIFIED = "Email wasnt verified";

export const feedbacksActions = {
  REQUEST_USER_ORDERS: "REQUEST_USER_ORDERS",
  RECEIVE_USER_ORDERS: "RECEIVE_USER_ORDERS",
  REQUEST_USER_FEEDBACKS: "REQUEST_USER_FEEDBACKS",
  RECEIVE_USER_FEEDBACKS: "RECEIVE_USER_FEEDBACKS",
  REQUEST_POST_USER_FEEDBACK: "REQUEST_POST_USER_FEEDBACK",
  RECEIVE_POST_USER_FEEDBACK: "RECEIVE_POST_USER_FEEDBACK",
  INPUT_FEEDBACK_STAR: "INPUT_FEEDBACK_STAR",
  INPUT_FEEDBACK_MESSAGE: "INPUT_FEEDBACK_STAR",
};

export const REQUEST_GET_INACTIVE_HOTELS = "REQUEST_GET_INACTIVE_HOTELS";
export const RECEIVE_GET_INACTIVE_HOTELS = "RECEIVE_GET_INACTIVE_HOTELS";
export const REQUEST_USER_ORDERS = "REQUEST_USER_ORDERS";
export const RECEIVE_USER_ORDERS = "RECEIVE_USER_ORDERS";

export const ADMIN = "/admin";

export const STATUS = "/status";

export const HOTEL = "/hotel";

export const EMAIL = "/email";

export const FORM = "/form";

export const REQUEST_UPDATE_STATUS_HOTEL = "REQUEST_UPDATE_STATUS_HOTEL";
export const RECEIVE_UPDATE_STATUS_HOTEL = "RECEIVE_UPDATE_STATUS_HOTEL";

export const STATUS_HOTELS = {
  ACTIVE: "ACTIVATED",
  INACTIVE: "INACTIVE",
  REJECT: "REJECT",
  SUSPEND: "WAITINGFORAPPROVAL",
};

export const INACTIVE = "/inactive";
export const ACTIVE = "/active";

export const REQUEST_GET_HOTEL_AND_OWNER_INFO =
  "REQUEST_GET_HOTEL_AND_OWNER_INFO";
export const RECEIVE_GET_HOTEL_AND_OWNER_INFO =
  "RECEIVE_GET_HOTEL_AND_OWNER_INFO";

export const REQUEST_USER_CROPS_CHECK_QUERIES =
  "REQUEST_USER_CROPS_CHECK_QUERIES";
export const RECEIVE_USER_CROPS_CHECK_QUERIES =
  "RECEIVE_USER_CROPS_CHECK_QUERIES";
export const REQUEST_USER_CHECK_CROP_QUERIES =
  " REQUEST_USER_CHECK_CROP_QUERIES";
export const RECEIVE_USER_CHECK_CROP_QUERIES =
  "RECEIVE_USER_CHECK_CROP_QUERIES";

/* HOTEL_MANAGEMENT ACTIONS */
export const CHANGE_HOTEL_MANAGEMENT_SUB_PAGE =
  "CHANGE_HOTEL_MANAGEMENT_SUB_PAGE";
export const REQUEST_GET_LIST_OWNER_HOTELS = "REQUEST_GET_LIST_OWNER_HOTELS";
export const RECEIVE_GET_LIST_OWNER_HOTELS = "RECEIVE_GET_LIST_OWNER_HOTELS";
/* END OF HOTEL_MANAGEMENT ACTIONS */

export const REQUEST_PAY_FOR_ORDER = "REQUEST_PAY_FOR_ORDER";
export const RECEIVE_PAY_FOR_ORDER = "RECEIVE_PAY_FOR_ORDER";
export const RECEIVE_PAY_FOR_ORDER_ERROR = "RECEIVE_PAY_FOR_ORDER_ERROR";

export const REQUEST_GET_LIST_ACTIVE_HOTELS = "REQUEST_GET_LIST_ACTIVE_HOTELS";
export const RECEIVE_GET_LIST_ACTIVE_HOTELS = "RECEIVE_GET_LIST_ACTIVE_HOTELS";

export const REQUEST_SEND_OWNER_MESSAGE = "REQUEST_SEND_OWNER_MESSAGE";
export const RECEIVE_SEND_OWNER_MESSAGE = "RECEIVE_SEND_OWNER_MESSAGE";

export const REQUEST_GET_COUNT_INACTIVE_HOTELS =
  "REQUEST_GET_COUNT_INACTIVE_HOTELS";
export const RECEIVE_GET_COUNT_INACTIVE_HOTELS =
  "RECEIVE_GET_COUNT_INACTIVE_HOTELS";

export const REQUEST_GET_LIST_SUSPEND_HOTELS =
  "REQUEST_GET_LIST_SUSPEND_HOTELS";
export const RECEIVE_GET_LIST_SUSPEND_HOTELS =
  "RECEIVE_GET_LIST_SUSPEND_HOTELS";

export const LOADING = "LOADING";

/* MANAGE HOTEL ROOMS ACTIONS */
export const REQUEST_GET_LIST_ROOMS_IN_ONE_HOTEL =
  "REQUEST_GET_LIST_ROOMS_IN_ONE_HOTEL";
export const RECEIVE_GET_LIST_ROOMS_IN_ONE_HOTEL =
  "RECEIVE_GET_LIST_ROOMS_IN_ONE_HOTEL";
/* END OF MANAGE HOTEL ROOMS ACTIONS */

export { HOST };