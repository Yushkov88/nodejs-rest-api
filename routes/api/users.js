const express = require("express");

const {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers");

const { controllerWrapper } = require("../../helpers");

const { validationBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validationBody(schemas.signupSchema),
  controllerWrapper(signup)
);

router.get("/verify/:verificationToken", controllerWrapper(verifyEmail));

router.post(
  "/verify",
  validationBody(schemas.verifyEmailSchema),
  controllerWrapper(resendVerifyEmail)
);

router.post(
  "/login",
  validationBody(schemas.loginSchema),
  controllerWrapper(login)
);

router.get("/logout", authenticate, controllerWrapper(logout));

router.get("/current", authenticate, controllerWrapper(current));

router.patch(
  "/",
  authenticate,
  validationBody(schemas.updateSubscriptionSchema),
  controllerWrapper(updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  controllerWrapper(updateAvatar)
);

module.exports = router;
