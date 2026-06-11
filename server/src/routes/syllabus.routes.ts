import { Router } from "express";

import { SyllabusService }
from "../services/syllabus.service";

const router = Router();

router.post(
  "/tasks/update",
  (req, res) => {

    const {
      taskId,
      status,
      deviceId,
      lamportClock
    } = req.body;

    const task =
      SyllabusService.updateTaskStatus(
        taskId,
        status,
        deviceId,
        lamportClock
      );

    res.json(task);
  }
);

router.get(
  "/subjects/:id/progress",
  (req, res) => {

    const progress =
      SyllabusService.getSubjectProgress(
        req.params.id
      );

    res.json({
      progress
    });
  }
);

export default router;