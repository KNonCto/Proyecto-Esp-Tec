import express from "express";
import {
  getSubjects,
  getSubject,
  createSubject,
} from "../controllers/subject.controller.js";

const router = express.Router();

router.get("/", getSubjects);
router.get("/:id", getSubject);
router.post("/create", createSubject);

export default router;
