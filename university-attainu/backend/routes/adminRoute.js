const express = require("express");
const router = express.Router();
const admin = require('./../controllers/admin');


router.post("/assignment", admin.uploadUserPhoto, admin.assignment);
// router.get('/download/:id', admin.download);



module.exports = router;