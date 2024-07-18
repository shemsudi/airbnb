const { Schema, mongoose } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  birthday: { type: Date, required: true },

  created_at: {
    type: Date,
    default: Date.now,
  },
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
