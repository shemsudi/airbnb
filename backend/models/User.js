const { Schema, mongoose } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isOptOutMarketing: { type: Boolean },
  birthday: { type: Date, required: true },

  created_at: {
    type: Date,
    default: Date.now,
  },
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
