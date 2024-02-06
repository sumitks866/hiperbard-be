const Activity = require("../../domain/activity");

async function logTaskActivity(req, res) {
  try {
    const { taskId } = req.params;
    const { type, actorId, data } = req.body;

    if (!type || !actorId) {
      return res.status(400).json({ error: "Type and actorId are required." });
    }

    await Activity.logActivity(
      mongoose.Types.ObjectId(taskId),
      type,
      mongoose.Types.ObjectId(actorId),
      data
    );

    res.sendStatus(200);
  } catch (error) {
    console.error("Error in activity logging route:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  logTaskActivity,
};
