import express from "express";
import { createTeam, getAllTeams, getTeam, updateTeam } from "../controllers/team.js";

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:teamId", getTeam);
router.post("/", createTeam);
router.patch("/", updateTeam);

export default router;
