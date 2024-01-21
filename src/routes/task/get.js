const Task = require("../../domain/task");

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

module.exports = {
  getSingleTaskByCode,
  getTasks,
};
