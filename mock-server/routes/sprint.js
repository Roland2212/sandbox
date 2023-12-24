import express from "express";
import { createSprint, getAllSprints, getSprint, updateSprint } from "../controllers/sprint.js";

const router = express.Router();

router.get("/:teamId/sprints", getAllSprints);
router.get("/:teamId/sprints/:sprintId", getSprint);
router.post("/:teamId/sprints", createSprint);
router.patch("/:teamId/sprints/:sprintId", updateSprint);

export default router;
