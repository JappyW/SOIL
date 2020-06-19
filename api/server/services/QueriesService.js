import database from "../src/models";

class QueriesService {
  static async getUserCropsCheckQueries(email) {
    try {
      return await database.queries.findAll({
          where: {email, type: "CROPS_CHECK"}
      });
    } catch (e) {
      console.error(e);
    }
  }
  static async getUserCheckCropQueries(email) {
    try {
      return await database.queries.findAll({
          where: {email, type: "CHECK_CROP"}
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async addCropsCheckQuery(query) {
    try {
      const queryRecord = await database.queries.create(query);
      return queryRecord;
    } catch (e) {
      console.error(e);
    }
  }

  static async addCheckCropQuery(query) {
    try {
      const queryRecord = await database.queries.create(query);
      return queryRecord;
    } catch (e) {
      console.error(e);
    }
  }
}

export default QueriesService;
