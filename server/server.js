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

// CORS FIX
app.use(
  cors({
    origin: [
      "https://gemstone-recommendation-app-wng1.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.use(
  "/api/recommendations",
  recommendationRoutes
);

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Humara Pandit API Running",
  });
});

// Export for Vercel
module.exports = app;