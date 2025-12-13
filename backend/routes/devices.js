const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = [
    {
      device: "Thermostat",
      value: Math.floor(Math.random() * (90 - 60 + 1)) + 60,
      timestamp: Date.now(),
    },
    {
      device: "Air Quality Monitor",
      value: 40 + Math.random() * 20,
      timestamp: Date.now(),
    },
    {
      device: "Room Occupancy",
      value: Math.floor(Math.random() * 10),
      timestamp: Date.now(),
    },
  ];
  res.json(data);
});

module.exports = router;
