const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = [
    {
      device: "Thermostat",
      value: 20 + Math.random() * 5,
      timestamp: Date.now(),
    },
    {
      device: "Air Quality Monitor",
      value: 50 + Math.random() * 20,
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
