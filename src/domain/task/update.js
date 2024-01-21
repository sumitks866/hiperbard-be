const Task = require("../../database/model/task");

async function updateTask(taskId, updateFields) {
  Object.keys(updateFields).forEach((field) => {
    if (!Task.schema.paths[field] || updateFields[field] === undefined) {
      delete updateFields[field];
    }
  });
  try {
    const result = await Task.updateOne(
      { _id: taskId },
      { $set: updateFields }
    );
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  updateTask,
};
