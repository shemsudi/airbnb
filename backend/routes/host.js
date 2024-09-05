const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const router = Router();
const Hosting = require("../models/Hosting");
const passport = require("passport");
router.get(
  "/generate-uuid",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const generatedUuid = uuidv4(); // Generate UUID
    const hosting = new Hosting({
      uuid: generatedUuid,
      user: req.user.id,
      lastPage: "structure",
    });
    await hosting.save();
    console.log(generatedUuid);
    res.json({ uuid: generatedUuid });
  }
);

module.exports = router;
