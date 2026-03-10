// controller/certificate/certificatecontroller.js
const Progress = require('../../models/progress');

const calculateFeedback = (score) => {
  if (score >= 90) return "Outstanding performance! Keep it up!";
  if (score >= 75) return "Great job! You have a solid understanding.";
  if (score >= 50) return "Good effort! Keep practicing to improve.";
  return "Needs improvement. Let's work together on tougher areas.";
};

exports.getCertificateInfo = async (req, res) => {
  try {
    const { email, courseName } = req.body;

    if (!email || !courseName) {
      return res.status(400).json({ message: "Email and courseName required" });
    }

    const progress = await Progress.findOne({ email });
    if (!progress) return res.status(404).json({ message: "User not found" });

    const score = progress.scores?.[courseName] || 0; // Assuming you have scores in Progress schema
    const completedLessons = progress.completedLessons.length;

    const feedbackMessage = calculateFeedback(score);

    res.json({
      studentName: progress.username || "Student",
      courseName,
      score,
      completedLessons,
      feedbackMessage,
      certificateImageUrl: "url or base64 of generated cert image"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
