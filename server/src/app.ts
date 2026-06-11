import express from "express";
import cors from "cors";

import syncRoutes from "./routes/sync.routes";
import focusRoutes from "./routes/focus.routes";
import syllabusRoutes from "./routes/syllabus.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", syncRoutes);

app.use("/api", focusRoutes);

app.use("/api", syllabusRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Alcovia Offline Sync Backend Running"
  });
});

export default app;