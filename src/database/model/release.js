const mongoose = require("mongoose");

const releaseSchema = new mongoose.Schema({
  version: {
    type: String,
    required: true,
  },
  notes: String,
  targetTasks: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Task",
    required: true,
  },
  dueDate: {
    type: Date,
  },
  labels: [String],
  status: {
    type: String,
    enum: ["planning", "in progress", "completed"],
    default: "planning",
  },
  type: {
    type: String,
    enum: ["major", "minor", "patch"],
    default: "patch",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Release = mongoose.model("Release", releaseSchema);

module.exports = Release;
