const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
  school: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  work: {
    type: String,
    required: false,
  },
  languages: [
    {
      type: String,
      required: false,
    },
  ],
  decadeBorn: {
    type: String,
    required: false,
  },
  favoriteSongHighSchool: {
    type: String,
    required: false,
  },
  obsessedWith: {
    type: String,
    required: false,
  },
  funFact: {
    type: String,
    required: false,
  },
  mostUselessSkill: {
    type: String,
    required: false,
  },
  biographyTitle: {
    type: String,
    required: false,
  },
  spendTooMuchTime: {
    type: String,
    required: false,
  },
  pets: {
    type: String,
    required: false,
  },
  aboutYou: {
    type: String,
    required: false,
  },
  interests: [
    {
      type: String,
      required: false,
    },
  ],
  placesVisited: [
    {
      type: String,
      required: false,
    },
  ],

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

profileSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
