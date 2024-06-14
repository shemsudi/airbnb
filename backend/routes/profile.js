const express = require("express");
const passport = require("passport");
const router = express.Router();
const Profile = require("../models/Profile.js");

router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const ProfileFields = {};
    ProfileFields.user = req.user.id;
    if (req.profileImage) ProfileFields.profileImage = req.profileImage;
    if (req.school) ProfileFields.school = req.school;
    if (req.location) ProfileFields.location = req.location;
    if (req.decadeBorn) ProfileFields.decadeBorn = req.decadeBorn;
    if (req.obsessedWith) ProfileFields.obsessedWith = req.obsessedWith;
    if (req.work) ProfileFields.work = req.work;
    if (req.funFact) ProfileFields.funFact = req.funFact;
    if (req.mostUselessSkill)
      ProfileFields.mostUselessSkill = req.mostUselessSkill;
    if (req.biographyTitle) ProfileFields.biographyTitle = req.biographyTitle;
    if (req.spendTooMuchTime)
      ProfileFields.spendTooMuchTime = req.spendTooMuchTime;
    if (req.pets) ProfileFields.pets = req.pets;
    if (req.aboutYou) ProfileFields.aboutYou = req.aboutYou;

    const user_id = req.user.id;
    Profile.findOne({ user: user_id }).then((profile) => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: req.body },
          { new: true }
        ).then((profile) => {
          res.json(profile);
        });
      } else {
        new Profile(ProfileFields).save().then((profile) => res.json(profile));
      }
    });
  }
);
router.get("/profile/:user_id", (req, res) => {
  let errors = {};

  Profile.findOne({ user: req.params.user_id }).then((profile) => {
    if (!profile) {
      errors.noprofile = "there is no profile by this id ";
      res.json(errors);
    }
    res.json(profile);
  });
});

module.exports = router;
