import express from "express";
import cors from "cors";

import focusRoutes
from "./routes/focus.routes";

import syllabusRoutes
from "./routes/syllabus.routes";

import syncRoutes
from "./routes/sync.routes";

import queueRoutes
from "./routes/queue.routes";

import deviceRoutes
from "./routes/device.routes";

import notificationRoutes
from "./routes/notification.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get(
  "/",
  (req, res) => {

    res.json({
      message:
        "Alcovia Offline Sync Backend Running"
    });
  }
);

app.use(
  "/api",
  focusRoutes
);

app.use(
  "/api",
  syllabusRoutes
);

app.use(
  "/api",
  syncRoutes
);

app.use(
  "/api",
  queueRoutes
);

app.use(
  "/api",
  deviceRoutes
);

app.use(
  "/api",
  notificationRoutes
);

export default app;