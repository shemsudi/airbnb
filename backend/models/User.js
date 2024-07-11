const { Schema, mongoose } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  email: { type: String },
  name: { type: String },
  birthday: { type: Date },

  created_at: {
    type: Date,
    default: Date.now,
  },
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
