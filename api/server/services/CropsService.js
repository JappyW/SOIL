import database from "../src/models";
import { Sequelize } from "sequelize";
const axios = require("axios");
const Op = Sequelize.Op;

class CropsService {
  static async getAllCrops() {
    try {
      return await database.crops.findAll();
    } catch (e) {
      console.error(e);
    }
  }

  static async getCropById(id) {
    try {
      return await database.crops.findByPk(id);
    } catch (e) {
      console.error(e);
    }
  }

  static async getUserByName(name) {
    try {
      return await database.crops.findOne({ where: { name } });
    } catch (e) {
      console.error(e);
    }
  }

  static async getCropsPH(payload) {
    try {
      const data = payload.body;
      const response = await axios.get(
        "https://rest.soilgrids.org/query?lon=" +
          data.lng +
          "&lat=" +
          data.lat +
          "&attributes=PHIKCL"
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  static async getWeather(payload) {
    try {
      const data = payload.body;
      const response = await axios.get(
        "https://api.weatherbit.io/v2.0/forecast/daily?&lon=" +
          data.lng +
          "&lat=" +
          data.lat +
          "&days=16&key=bdf918ddf5a64a7c8092dc8b6aadfa2c"
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  static async getCropsForPlanting(payload) {
    try {
      const crops = payload.body.crops;
      const ph = this.getAveragePH(payload.body.ph);
      const temp = this.getAverageTemp(payload.body.temperature);
      return await database.crops.findAll({
        where: {
          bestPhMin: { [Op.lt]: ph },
          bestPhMax: { [Op.gt]: ph },
          family: {
            [Op.notIn]: [crops[0].family, crops[1].family, crops[2].family]
          },
          bestTempMin: { [Op.lt]: temp },
          bestTempMax: { [Op.gt]: temp }
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async getCropPlantabilityPH(payload) {
    try {
      const crop = payload.body.crop[0];
      const ph = this.getAveragePH(payload.body.ph);
      return await database.crops.findAll({
        where: {
          bestPhMin: { [Op.lt]: ph },
          bestPhMax: { [Op.gt]: ph },
          name: crop.name
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async getCropPlantabilityTemp(payload) {
    try {
      const crop = payload.body.crop[0];
      const temp = this.getAverageTemp(payload.body.temperature);
      return await database.crops.findAll({
        where: {
          bestTempMin: { [Op.lt]: temp },
          bestTempMax: { [Op.gt]: temp },
          name: crop.name
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async getFertilizers(payload) {
    try {
      const bestPhMax = payload.body.bestPhMax;
      const bestPhMin = payload.body.bestPhMin;
      const ph = this.getAveragePH(payload.body.ph);
      if (ph > bestPhMax) {
        return await database.fertilizers.findAll({
          where: {
            ph: "lowers"
          }
        });
      } else if (ph < bestPhMin){
        return await database.fertilizers.findAll({
          where: {
            ph: "raises"
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  static getAveragePH(ph) {
    let phAverage = 0;
    for (let key in ph) {
      phAverage += ph[key];
    }
    phAverage = phAverage / (Object.keys(ph).length * 10);
    return phAverage;
  }

  static getAverageTemp(temp) {
    let tempAverage = 0;
    temp.map(item => (tempAverage += item));
    tempAverage = tempAverage / temp.length;
    return tempAverage;
  }
}

export default CropsService;
