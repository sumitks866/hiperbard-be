const { isUndefined } = require("lodash");
const Task = require("../../database/model/task");

async function getTaskByCodeAndProjectId(taskCode, projectId) {
  try {
    const task = await Task.findOne({ projectId, taskCode }, { __v: 0 });
    return task;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getTasks(projectId, fields) {
  const filteredFields = {};
  Object.keys(fields).forEach((field) => {
    if (Task.schema.paths[field] && !isUndefined(fields[field])) {
      filteredFields[field] = fields[field];
    }
  });

  try {
    const tasks = await Task.find({ ...fields, projectId }, { __v: 0 });
    return tasks;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  getTaskByCodeAndProjectId,
  getTasks,
};
