import { Router } from "express";
import wethear from "../controllers/weatherFetch.controller.js";

const router = Router();

router.post("/", wethear.fetchWethear);

export default router;