const Task = require("../../domain/task");

async function updateTask(req, res) {
  const { taskId } = req.params;
  try {
    await Task.updateTask(taskId, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log();
    res.sendStatus(422);
  }
}

module.exports = {
  updateTask,
};
