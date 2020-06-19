import QueriesService from "../services/QueriesService";
import { util } from "./ResponseWrapper";
import { CROPS_CHECK_QUERIES_LIST, CHECK_CROP_QUERIES_LIST } from "../constants/controller.env";
const STATUS = require("../constants/status.code.env");

class CropsController {
  static async getUserCropsCheckQueries(req, res) {
    try {
      const email = req.body.data;
      const queries = await QueriesService.getUserCropsCheckQueries(email);
      util.setSuccess(STATUS.SUCCESS, CROPS_CHECK_QUERIES_LIST, queries);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async getUserCheckCropQueries(req, res) {
    try {
      const email = req.body.data;
      const queries = await QueriesService.getUserCheckCropQueries(email);
      util.setSuccess(STATUS.SUCCESS, CHECK_CROP_QUERIES_LIST, queries);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async addCropsCheckQuery(req, res) {
    try {
        const query = {
            type: "CROPS_CHECK", 
            ph: req.body.ph,
            temp: req.body.temp,
            email: req.body.email,
            crops: Object.assign({}, req.body.crops),
            plants: req.body.plants ? Object.assign({}, req.body.plants) : {},
            fertilizers: req.body.fertilizers ? Object.assign({}, req.body.fertilizers) : {},
            hint: req.body.hint ? req.body.hint : null,
            date: req.body.date
        }
      await QueriesService.addCropsCheckQuery(query);
      util.setSuccess(STATUS.SUCCESS, "ADD_CROPS_CHECK_QUERY_SUCCESS", null);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async addCheckCropQuery(req, res) {
    try {
        const query = {
            type: "CHECK_CROP", 
            ph: req.body.ph,
            temp: req.body.temp,
            email: req.body.email,
            crops: Object.assign({}, req.body.crops),
            plants: req.body.plants ? Object.assign({}, req.body.plants) : {},
            fertilizers: req.body.fertilizers ? Object.assign({}, req.body.fertilizers) : {},
            hint: req.body.hint ? req.body.hint : null,
            date: req.body.date
        }
        console.log(query)
      await QueriesService.addCheckCropQuery(query);
      util.setSuccess(STATUS.SUCCESS, "ADD_CHECK_CROP_QUERY_SUCCESS", null);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }
}
export default CropsController;
