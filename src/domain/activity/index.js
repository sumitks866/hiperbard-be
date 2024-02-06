const Activity = require("../../database/model/activity");

async function logActivity(taskId, type, actorEmail, data) {
  try {
    const newActivity = new Activity({
      taskId,
      type,
      actorEmail,
      data,
    });

    await newActivity.save();
  } catch (error) {
    console.error("Error logging activity:", error);
  }
}

async function getActivities(taskId) {
  try {
    const activities = await Activity.find({ taskId: taskId }).sort({
      timestamp: -1,
    });
    return activities;
  } catch (error) {
    console.error("Error retrieving activities:", error);
    throw error;
  }
}

module.exports = {
  logActivity,
  getActivities,
};
