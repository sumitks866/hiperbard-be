const express = require("express");
const router = express.Router();

const createTask = require("./create");
const { getTasks, getSingleTaskByCode } = require("./get");
const { updateTask } = require("./update");
const requireAuth = require("../../middleware/authMiddleware");

router.post("/", requireAuth, createTask);
router.get("/:projectId", requireAuth, getTasks);
router.get("/:projectId/:taskCode", requireAuth, getSingleTaskByCode);

router.put("/:taskId", requireAuth, updateTask);

module.exports = router;
