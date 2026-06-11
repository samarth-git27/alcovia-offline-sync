import { Router } from "express";

import { devices } from "../storage/devices";

const router = Router();

router.get(
  "/devices",
  (req, res) => {

    res.json(devices);
  }
);

router.post(
  "/devices/:id/toggle",
  (req, res) => {

    const id = req.params.id;

    if (!devices[id as keyof typeof devices]) {

      return res.status(404).json({
        error: "Device not found"
      });
    }

    devices[id as keyof typeof devices].online =
      !devices[id as keyof typeof devices].online;

    res.json(
      devices[id as keyof typeof devices]
    );
  }
);

export default router;