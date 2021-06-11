const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

//user profile
router.get("/getUserProfile", authController.protect, userController.getUserProfile);


// forgot password &reset password route
router.post("/forgotPassword", authController.forgotPassword); //will receive email address
router.patch("/resetPassword/:token", authController.resetPassword); //will receive the token

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

router.patch("/userUpdate", authController.protect, userController.userUpdate);
router.delete("/deactivateUser", authController.protect, userController.deactivateUser);


// .post(userController.creatUser);

router.get("/downloadFile/:id", authController.protect, userController.downloadFile);

router.get("/allques", authController.protect, userController.allques);

module.exports = router;
