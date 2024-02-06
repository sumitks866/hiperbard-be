const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task", // Assuming your task model is named 'Task'
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "task_created",
      "assignee_added",
      "description_changed",
      "priority_changed",
      "status_changed",
      "related_task_added",
      "comment_added",
    ],
  },
  actorEmail: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    // required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
