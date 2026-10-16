import { Router } from "express";
import { register } from "../controllers/userController.js";

const router = new Router();

router.post('/users', register);

export default router