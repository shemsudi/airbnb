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
    res.json({ uuid: generatedUuid, lastPage: "structure" });
  }
);

router.post(
  "/structure",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { uuid, structure, lastPage } = req.body;
    try {
      const hosting = await Hosting.findOne({ uuid });
      hosting.structure = structure;
      hosting.lastPage = lastPage;
      await hosting.save();
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = router;
