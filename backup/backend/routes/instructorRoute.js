const express = require("express");
const router = express.Router();
const instructor = require("./../controllers/instructor");
const authController = require("./../controllers/authController");

router.post('/createMcq', authController.protect, authController.restrictTo, instructor.createMcq);
router.post('/createAttendance', authController.protect, authController.restrictTo, instructor.createAttendance);

module.exports = router;