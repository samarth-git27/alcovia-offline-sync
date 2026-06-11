import express from "express";
import cors from "cors";

import syncRoutes from "./routes/sync.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", syncRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Alcovia Offline Sync Backend Running"
  });
});

export default app;