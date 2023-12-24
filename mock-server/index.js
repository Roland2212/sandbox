import express from "express";
import cors from "cors";

import teamRoutes from "./routes/team.js";
import sprintRoutes from "./routes/sprint.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/teams", teamRoutes);
app.use("/api/teams", sprintRoutes);

const PORT = 5200;

app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`));
