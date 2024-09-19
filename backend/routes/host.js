const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const router = Router();
const Hosting = require("../models/Hosting");
const passport = require("passport");
const { path } = require("path");
const multer = require("multer");
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
    const { uuid, structure } = req.body;
    try {
      const hosting = await Hosting.findOne({ uuid });
      hosting.structure = structure;
      hosting.lastPage = "privacyType";
      await hosting.save();
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.post(
  "/privacyType",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { uuid, privacyType } = req.body;
    try {
      const hosting = await Hosting.findOne({ uuid });
      hosting.privacyType = privacyType;
      hosting.lastPage = "location";
      await hosting.save();
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get(
  "/get-hosts",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const hosts = await Hosting.find({ user: req.user.id });
      res.status(200).json(hosts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.post(
  "/floor-plan",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { uuid, guests, bedrooms, beds, bathrooms } = req.body;
      const host = await Hosting.findOne({ uuid });

      host.guests = guests;
      host.bedrooms = bedrooms;
      host.beds = beds;
      host.bathrooms = bathrooms;
      host.lastPage = "amenites";

      await host.save();
      res.status(200).json({});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Internal server Eroor" });
    }
  }
);
router.post(
  "/amenities",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { uuid, amenities, uniqueAmenities, safetyAmenities } = req.body;
      const host = await Hosting.findOne({ uuid });

      host.amenities = amenities;
      host.uniqueAmenities = uniqueAmenities;
      host.safetyAmenities = safetyAmenities;
      host.lastPage = "photos";

      await host.save();
      res.status(200).json({});
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Internal server Eroor" });
    }
  }
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

router.post(
  "/addPhotos",
  passport.authenticate("jwt", { session: false }),
  upload.array("photos", 10),
  async (req, res) => {
    try {
      const { uuid } = req.body;
      const fireUrls = req.files.map((file) => {
        return `http://localhost:3000/uploads/${file.filename}`;
      });
      const host = await Hosting.findOne({ uuid });
      if (!host.photos) {
        host.photos = [];
      }
      host.photos = [...host.photos, ...fireUrls];
      await host.save();
      res.status(200).json({ photos: host.photos });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.delete("/deletePhoto/:index", async (req, res) => {
  try {
    const { index } = req.params;
    const { uuid } = req.query;
    const host = await Hosting.findOne({ uuid });
    console.log(host);
    if (!host.photos) {
      host.photos = [];
    }
    host.photos.splice(index, 1);
    console.log(host.photos);
    await host.save();
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/photos", async (req, res) => {
  try {
    const { uuid } = req.query;
    const host = await Hosting.findOne({ uuid });
    res.status(200).json({ photos: host.photos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
