const express = require("express");
const router = express.Router();
const instructor = require("./../controllers/instructor");
const authController = require("./../controllers/authController");

router.post('/createMcq', authController.protect, authController.restrictTo, instructor.createMcq);

module.exports = router;