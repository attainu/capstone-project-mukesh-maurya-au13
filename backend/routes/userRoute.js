const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// forgot password &reset password route
router.post("/forgotPassword", authController.forgotPassword); //will receive email address
router.patch("/resetPassword/:token", authController.resetPassword); //will receive the token

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

router.patch("/userUpdate", authController.protect, userController.userUpdate);
router.delete("/deleteUser", authController.protect, userController.deleteUser);


// .post(userController.creatUser);

router.get("/download/:id", authController.protect, userController.download);

router.get("/allques", authController.protect, userController.allques);

module.exports = router;
