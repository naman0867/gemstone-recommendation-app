const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  createRecommendation,
  getRecommendationHistory,
} = require(
  "../controllers/recommendationController"
);

router.post(
  "/",
  authMiddleware,
  createRecommendation
);

router.get(
  "/history",
  authMiddleware,
  getRecommendationHistory
);

module.exports = router;