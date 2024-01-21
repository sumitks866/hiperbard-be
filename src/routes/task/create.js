const Task = require("../../domain/task");

async function createTask(req, res) {
  try {
    const { projectId, title } = req.body;
    if (!projectId || !title) {
      return res
        .status(400)
        .json({ error: "Missing required fields in the request body." });
    }
    const savedTask = await Task.create(req.body);
    res.status(201).json(savedTask);
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: err.message });
  }
}

module.exports = createTask;
