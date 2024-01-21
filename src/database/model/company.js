const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pathname: {
    type: String,
    required: true,
    unique: true,
  },
  adminEmails: {
    type: [String],
    default: [],
  },
  employeeEmails: {
    type: [String],
    default: [],
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

companySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

companySchema.set('toJSON', {
  virtuals: true
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
