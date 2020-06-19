import Router from "express";
import userRoutes from "./UserRoutes";
import cropsRoutes from "./CropsRoutes";
import uploadImageRoutes from "./UploadImageRoutes";
import queriesRoutes from "./QueriesRoutes";

import {
  API_URL,
  USERS,
  CROPS,
  UPLOAD_IMAGE,
  QUERIES
} from "../constants/server.env";

const router = Router();
const USERS_URL = API_URL + USERS;
const CROPS_URL = API_URL + CROPS;
const QURIES_URL = API_URL + QUERIES;
const UPLOAD_IMAGE_URL = API_URL + UPLOAD_IMAGE;

router.use(UPLOAD_IMAGE_URL, uploadImageRoutes);
router.use(USERS_URL, userRoutes);
router.use(CROPS_URL, cropsRoutes);
router.use(QURIES_URL, queriesRoutes);

export default router;
