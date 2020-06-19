import axios from "axios";
import { QUERIES, CROPS_CHECK_URL,
  CHECK_CROP_URL, } from "../constants/apiUrl";

export const getUserCheckCropQueries = async (data) => {
  const response = await axios.post(`${QUERIES}/${CHECK_CROP_URL}`, {
    data,
  });
  return response.data.data;
};

export const getUserCropsCheckQueries = async (data) => {
  const response = await axios.post(`${QUERIES}/${CROPS_CHECK_URL}`, {
    data,
  });
  return response.data.data;
};
