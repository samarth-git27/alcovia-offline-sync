import { Router }
from "express";

import { NotificationService }
from "../notifications/notification.service";

const router = Router();

router.post(
  "/notify",
  async (
    req,
    res
  ) => {

    const {
      eventId,
      message
    } = req.body;

    const result =
      await NotificationService.notify(
        eventId,
        message
      );

    res.json(
      result
    );
  }
);

export default router;