require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const deviceRoutes = require("./routes/devices");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/api/devices", deviceRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
