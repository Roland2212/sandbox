import express from "express";
import { createSprint, getAllSprints, updateSprint } from "../controllers/sprint.js";

const router = express.Router();

router.get("/", getAllSprints);
router.post("/", createSprint);
router.patch("/", updateSprint);

export default router;
