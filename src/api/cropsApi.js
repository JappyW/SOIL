import axios from 'axios';
import {
  CHECK_CROPS,
  CROPS,
  QUERIES,
  ALL,
  CHECK_WEATHER,
  PLANT,
  CROP_CHECK,
  FERTILIZERS,
  ADD_CHECK_CROP_QUERY,
  ADD_CROPS_CHECK_QUERY
} from '../constants/apiUrl';

export const getCropsList = async () => {
  const response = await axios.get(`${CROPS}${ALL}`);
  return response.data.data.crops;
};

export const getCropsPH = async data => {
  const response = await axios.post(`${CROPS}${CHECK_CROPS}`, data);
  return response.data.data.properties.PHIKCL.M;
};

export const getWeather = async data => {
  const response = await axios.post(`${CROPS}${CHECK_WEATHER}`, data);
  return response.data.data.data.map(item => item.temp);
};

export const getCropsForPlanting = async data => {
  const response = await axios.post(`${CROPS}${PLANT}`, data);
  return response.data.data;
};

export const getCropPlantability = async data => {
  const response = await axios.post(`${CROPS}${CROP_CHECK}`, data);
  return response.data.data;
};

export const getFertilizers = async data => {
  const response = await axios.post(`${CROPS}${FERTILIZERS}`, data);
  return response.data.data;
};

export const getAddUserCheckCropQuery = async data => {
  const response = await axios.post(`${QUERIES}${ADD_CHECK_CROP_QUERY}`, data);
  return response.data.data;
};

export const getAddUserCropsCheckQuery = async data => {
  const response = await axios.post(`${QUERIES}${ADD_CROPS_CHECK_QUERY}`, data);
  return response.data.data;
};
