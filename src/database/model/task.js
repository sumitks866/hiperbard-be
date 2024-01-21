const mongoose = require("mongoose");
const {
  TaskType,
  TaskPriority,
  TaskStatus,
} = require("../../constants/constants");

const taskSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  taskCode: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
  },
  type: { type: String, enum: Object.values(TaskType), required: true },
  title: { type: String, required: true },
  description: { type: String },
  storyPoints: { type: String, enum: ["1", "3", "5", "8", "13", "21"] },
  assigneeEmail: { type: String },
  reporterEmail: {
    type: String,
    ref: "User",
    required: true,
  },
  qaContactEmail: { type: String },
  priority: { type: String, enum: Object.values(TaskPriority) },
  fixVersion: { type: String },
  labels: [{ type: String }],
  acceptanceCriteria: { type: String },
  stargazers: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  relatedTaskIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  commentsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

taskSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

taskSchema.set("toJSON", {
  virtuals: true,
});

taskSchema.pre("save", function (next) {
  if (!this.status) {
    this.status = "New";
  }
  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
