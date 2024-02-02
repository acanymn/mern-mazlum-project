import express  from "express";
import { authPasswordController } from '../controllers/authpassword.controller.js'

const router = express.Router();

router.post("/auth",authPasswordController);

export default router;