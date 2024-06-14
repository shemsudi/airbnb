const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
  phone: { type: String, required: true },
  email: { type: String },
  name: { type: String },
  birthday: { type: Date },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
