const Task = require("../../domain/task");

async function updateTask(req, res) {
  const { taskId } = req.params;
  const { email: userEmail } = req.decodedToken;
  try {
    await Task.updateTask(taskId, req.body, userEmail);
    res.sendStatus(200);
  } catch (err) {
    console.log();
    res.sendStatus(422);
  }
}

module.exports = {
  updateTask,
};
