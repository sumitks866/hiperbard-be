const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRoleSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  companyRoles: [userRoleSchema],
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Minimum password length is 6 characters"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.username && this.email) {
    const username = this.email.split("@")[0];
    this.username = username;
  }

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

module.exports = mongoose.model("User", userSchema);
