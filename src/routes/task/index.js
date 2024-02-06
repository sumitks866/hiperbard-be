const express = require("express");
const router = express.Router();

const createTask = require("./create");
const {
  getTasks,
  getSingleTaskByCode,
  getCommentsForTask,
  getTaskActivities,
} = require("./get");
const { updateTask } = require("./update");

// const { logTaskActivity } = require("../activity/activity");
const requireAuth = require("../../middleware/authMiddleware");

router.get("/:taskId/activity", requireAuth, getTaskActivities);
router.post("/", requireAuth, createTask);

router.get("/:projectId", requireAuth, getTasks);
router.get("/:taskId/comments", requireAuth, getCommentsForTask);
router.get("/:projectId/:taskCode", requireAuth, getSingleTaskByCode);
router.put("/:taskId", requireAuth, updateTask);

module.exports = router;
