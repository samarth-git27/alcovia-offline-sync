import { Router } from "express";

import { SyncEngine }
from "../sync/sync-engine";

const router = Router();

router.post(
  "/sync",
  (req, res) => {

    const {
      deviceId,
      events
    } = req.body;

    const result =
      SyncEngine.processEvents(
        deviceId,
        events || []
      );

    res.json(result);
  }
);

export default router;