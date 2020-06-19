import {
  RECEIVE_CROPS_LIST,
  RECEIVE_CROPS_PH,
  RECEIVE_WEATHER,
  RECEIVE_CROPS_FOR_PLANTING,
  RECEIVE_CROP_PLANTABILITY,
  RECEIVE_FERTILIZERS
} from '../constants/cropsActionTypes';

const initialState = {
  crops: null,
  ph: null,
  temperature: null,
  plant: {
    ph: null,
    temp:null
  }
};

function cropsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CROPS_LIST:
      return {
        ...state,
        crops: action.payload
      };
    case RECEIVE_CROPS_PH:
      return {
        ...state,
        ph: action.payload
      };
    case RECEIVE_WEATHER:
      return {
        ...state,
        temperature: action.payload
      };
    case RECEIVE_CROPS_FOR_PLANTING:
      return {
        ...state,
        plants: action.payload
      };
    case RECEIVE_CROP_PLANTABILITY:
      return {
        ...state,
        plant: action.payload,
        fertilizers: []
      };
    case RECEIVE_FERTILIZERS:
        return {
          ...state,
          fertilizers: action.payload
        };
    default:
      return state;
  }
}

export default cropsReducer;
