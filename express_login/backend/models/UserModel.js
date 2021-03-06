const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  surname: String,
  dateOfBirth: Date,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;