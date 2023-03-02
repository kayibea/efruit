import express, { Router } from "express";

import catchError from "../middlewares/catchError";
import * as fruitController from "../controllers/fruitController";

const router: Router = express.Router();

router.get("/", catchError(fruitController.getFruits));

export default router;
