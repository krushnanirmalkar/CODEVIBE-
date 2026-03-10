const express = require("express");
const { 
  getAllLessons, 
  getLesson, 
  completeLesson 
} = require("../../controller/Lesson/lessoncontroller");

const router = express.Router();

router.get("/", getAllLessons);
router.get("/:id", getLesson);
router.post("/:id/complete", completeLesson);

module.exports = router;