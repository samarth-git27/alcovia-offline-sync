import { Router } from "express";

import { OfflineQueue }
from "../queue/offline-queue";

const router = Router();

router.get(
  "/queue",
  (req, res) => {

    res.json({
      size:
        OfflineQueue.size(),

      events:
        OfflineQueue.getAll()
    });
  }
);

export default router;