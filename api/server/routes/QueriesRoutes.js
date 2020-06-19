import Router from 'express';
import QueriesController from '../controllers/QueriesController';
const router = Router();

router.post('/cropscheck', QueriesController.getUserCropsCheckQueries);
router.post('/checkcrop', QueriesController.getUserCheckCropQueries);
router.post('/addcropscheckquery', QueriesController.addCropsCheckQuery);
router.post('/addcheckcropquery', QueriesController.addCheckCropQuery);

export default router;
