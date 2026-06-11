const Recommendation = require("../models/Recommendation");
const getZodiacSign = require("../utils/zodiac");
const gemstoneMap = require("../utils/gemstoneMap");

const createRecommendation = async (req, res) => {
  try {
    const { birthDate, purpose } = req.body;

    const zodiac = getZodiacSign(birthDate);

    const recommendation = gemstoneMap[zodiac];

    const savedRecommendation =
      await Recommendation.create({
        userId: req.user.id,
        birthDate,
        purpose,
        zodiac,
        gemstone: recommendation.gemstone,
        explanation: recommendation.explanation,
      });

    res.status(201).json({
      success: true,
      data: savedRecommendation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRecommendationHistory = async (
  req,
  res
) => {
  try {
    const recommendations =
      await Recommendation.find({
        userId: req.user.id,
      }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: recommendations.length,
      data: recommendations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRecommendation,
  getRecommendationHistory,
};