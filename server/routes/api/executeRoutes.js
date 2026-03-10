// routes/api/executeRoutes.js
const express = require("express");
const { executeCode } = require("../../controller/execute/executeController");

const router = express.Router();

// POST => /api/compiler/:language
router.post("/:language", executeCode);

module.exports = router;
