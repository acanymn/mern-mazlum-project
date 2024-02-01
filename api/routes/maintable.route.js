import express from "express";
import { mainTableController } from "../controllers/maintable.controller.js"

const router = express.Router();

router.get('/mainTable', mainTableController);

export default router;