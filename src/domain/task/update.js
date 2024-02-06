const { ActivityType } = require("../../constants/constants");
const Task = require("../../database/model/task");
const { logActivity } = require("../activity");

async function updateTask(taskId, updateFields, actorEmail) {
  Object.keys(updateFields).forEach((field) => {
    if (!Task.schema.paths[field] || updateFields[field] === undefined) {
      delete updateFields[field];
    }
  });
  try {

    const existingTask = await Task.findById(taskId);

    const result = await Task.updateOne(
      { _id: taskId },
      { $set: updateFields }
    );

    if (updateFields.assigneeEmail && existingTask.assigneeEmail !== updateFields.assigneeEmail) {
      logActivity(taskId, ActivityType.ASSIGNEE_ADDED, actorEmail, {
        assigneeEmail: updateFields.assigneeEmail,
      });
    }

    if (updateFields.description && existingTask.description !== updateFields.description) {
      logActivity(taskId, ActivityType.DESCRIPTION_CHANGED, actorEmail, {});
    }

    if (updateFields.priority && existingTask.priority !== updateFields.priority) {
      logActivity(taskId, ActivityType.PRIORITY_CHANGED, actorEmail, {
        priority: updateFields.priority,
      });
    }

    if (updateFields.status && existingTask.status !== updateFields.status) {
      logActivity(taskId, ActivityType.STATUS_CHANGED, actorEmail, {
        status: updateFields.status,
      });
    }
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  updateTask,
};
