const mongoose = require("mongoose");
const Task = require("../../domain/task");
const Comment = require("../../domain/comment");
const { getActivities } = require("../../domain/activity");

async function getSingleTaskByCode(req, res) {
  const { projectId, taskCode } = req.params;
  try {
    if (!projectId || !taskCode) {
      return res
        .status(400)
        .json({ error: "Required project ID and Task Code" });
    }
    const task = await Task.getTaskByCodeAndProjectId(taskCode, projectId);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
}

async function getTasks(req, res) {
  const { projectId } = req.params;
  try {
    if (!projectId) {
      return res.status(400).json({ error: "Required project ID" });
    }

    const tasks = await Task.getTasks(projectId, req.query);
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Something went wrong" });
  }
}

async function getCommentsForTask(req, res) {
  const { taskId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    if (!taskId) {
      return res.status(400).json({ error: "Required task ID" });
    }
    const offset = (page - 1) * pageSize;
    const comments = await Comment.getCommentsForTask(taskId, {
      offset,
      limit: pageSize,
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getTaskActivities(req, res) {
  try {
    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const activities = await getActivities(taskId);
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getSingleTaskByCode,
  getTasks,
  getCommentsForTask,
  getTaskActivities,
};
