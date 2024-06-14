const express = require("express");
const passport = require("passport");
const {
  verifyPhone,
  verifyOTP,
  completeRegistration,
  sendEmailConfirmation,
} = require("../controllers/authController");
const router = express.Router();

router.post("/login", verifyPhone);
router.post("/verify", verifyOTP);
router.post("/complete-registration", completeRegistration);
router.post("/send-email-confirmation", sendEmailConfirmation);
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
