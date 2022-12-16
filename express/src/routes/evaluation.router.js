import express from "express";
import {
  getEvaluations,
  createEvaluation,
} from "../controllers/evaluation.controller.js";

const router = express.Router();

router.get("/", getEvaluations);
router.post("/create", createEvaluation);

export default router;
