const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    unique: true,
    trim: true,
  },
  manager: {
    type: String,
    required: true,
    trim: true,
  },
  companyId: {
    type: String,
    trim: true,
    required: true,
    ref: "Company",
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
