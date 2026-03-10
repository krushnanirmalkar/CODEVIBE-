const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const lessonRoutes = require('./lesson');
const progressRoutes = require('./progressRoutes');
const feedbackRoutes = require('./feedbackRoutes');
const executeRoutes = require('./executeRoutes'); 
const certificateRoutes = require("./certificateRoutes");

router.use('/feedback', feedbackRoutes);
router.use('/progress', progressRoutes);
router.use('/auth', authRoutes);
router.use('/lesson', lessonRoutes);
router.use('/execute', executeRoutes);
router.use('/certificate', certificateRoutes); 

module.exports = router;
