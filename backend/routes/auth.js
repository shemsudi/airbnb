const express = require("express");
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

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
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/");
  }
);

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
router.get("/generate-uuid", (req, res) => {
  const generatedUuid = uuidv4(); // Generate UUID
  console.log(generatedUuid);
  res.json({ uuid: generatedUuid });
});

module.exports = router;
