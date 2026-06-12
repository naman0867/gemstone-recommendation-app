const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use(
  "/api/recommendations",
  recommendationRoutes
);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Humara Pandit API Running",
  });
});

// IMPORTANT FOR VERCEL
module.exports = app;