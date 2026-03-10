// routes/index.js
const express = require("express");
const apiRoutes = require("./api");

const router = express.Router();

router.use("/api", apiRoutes);

// fallback if no route matches
router.use((req, res) => {
  res.status(404).json({ message: "The route you are trying to access does not exist" });
});

module.exports = router;
