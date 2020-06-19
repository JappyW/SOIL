import CropsService from '../services/CropsService';
import { util, validateResponse } from './ResponseWrapper';
import {
  CROPS_FOR_PLANTING,
  CROPS_LIST,
  WEATHER,
  CROPS_PH,
  CROP_PLANTABILITY,
  CROP_UNPLANTABLE_TEMP,
  CROP_UNPLANTABLE_PH,
  CROP_UNPLANTABLE_TEMP_AND_PH,
  FERTILIZERS
} from '../constants/controller.env';
const STATUS = require('../constants/status.code.env');

class CropsController {
  static async getAllCrops(req, res) {
    try {
      const crops = await CropsService.getAllCrops();
      util.setSuccess(STATUS.SUCCESS, CROPS_LIST, {crops});
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getCropsPH(req, res) {
    try {
      const ph = await CropsService.getCropsPH(req);
      util.setSuccess(STATUS.SUCCESS, CROPS_PH, ph);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getWeather(req, res) {
    try {
      const weather = await CropsService.getWeather(req);
      util.setSuccess(STATUS.SUCCESS, WEATHER, weather);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getCropsForPlanting(req, res) {
    try {
      const plant = await CropsService.getCropsForPlanting(req);
      util.setSuccess(STATUS.SUCCESS, CROPS_FOR_PLANTING, plant);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getCropPlantability(req, res) {
    try {
      const ph = await CropsService.getCropPlantabilityPH(req);
      const temp = await CropsService.getCropPlantabilityTemp(req);
      if (ph.length > 0 && temp.length > 0) {
        const data = Object.assign({}, temp[0].dataValues, {temp: true, ph: true});
        util.setSuccess(STATUS.SUCCESS, CROP_PLANTABILITY, data);
      } else if (ph.length == 0 && temp.length > 0) {
        util.setSuccess(STATUS.SUCCESS, CROP_UNPLANTABLE_PH, {temp: true, ph: false});
      } else if (temp.length == 0 && ph.length > 0) {
        util.setSuccess(STATUS.SUCCESS, CROP_UNPLANTABLE_TEMP, {temp: false, ph: true});
      } else {
        util.setSuccess(STATUS.SUCCESS, CROP_UNPLANTABLE_TEMP_AND_PH, {temp: false, ph: false});
      }
      return util.send(res);
    } catch (e) {
      console.log(e);
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getFertilizers(req, res) {
    try {
      const fert = await CropsService.getFertilizers(req);
      util.setSuccess(STATUS.SUCCESS, FERTILIZERS, fert);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

}
export default CropsController;
