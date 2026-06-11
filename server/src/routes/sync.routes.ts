import { Router } from "express";
import { SyncEngine } from "../sync/sync-engine";

const router = Router();

router.post(
  "/sync",
  (req, res) => {

    const events =
      req.body.events || [];

    const result =
      SyncEngine.processEvents(
        events
      );

    res.json(result);
  }
);

export default router;