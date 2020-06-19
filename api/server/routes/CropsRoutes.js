import Router from 'express';
import CropsController from '../controllers/CropsController';
const router = Router();

router.get('/all', CropsController.getAllCrops);
router.post('/checkcrops', CropsController.getCropsPH);
router.post('/cropcheck', CropsController.getCropPlantability);
router.post('/checkweather', CropsController.getWeather);
router.post('/plant', CropsController.getCropsForPlanting);
router.post('/fertilizers', CropsController.getFertilizers);



export default router;
