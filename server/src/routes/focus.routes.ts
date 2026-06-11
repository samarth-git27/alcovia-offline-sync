import { Router } from "express";

import { FocusService } from "../services/focus.service";

const router = Router();

router.post(
  "/focus/complete",
  (req, res) => {

    const {
      durationMinutes,
      deviceId
    } = req.body;

    const result =
      FocusService.completeSession(
        durationMinutes,
        deviceId
      );

    res.json(result);
  }
);

router.post(
  "/focus/fail",
  (req, res) => {

    const {
      reason,
      deviceId
    } = req.body;

    const result =
      FocusService.failSession(
        reason,
        deviceId
      );

    res.json(result);
  }
);

export default router;