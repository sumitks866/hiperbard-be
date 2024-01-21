const Task = require("../../database/model/task");
const Project = require("../../database/model/project");

const getLatestTaskCode = async (projectId) => {
  if (!projectId) return "";
  const project = await Project.findById(projectId);
  if (!project) return "";
  const taskCount = await Task.countDocuments({ projectId });
  const nextTaskCounnt = taskCount + 1;
  return `${project.code}-${nextTaskCounnt}`;
};

async function createTask(taskData) {
  if (!taskData.projectId || !taskData.title) {
    throw new Error("Project, and title are required fields.");
  }
  try {
    const taskCode = await getLatestTaskCode(taskData.projectId);

    if (taskCode === "") {
      throw new Error("No project exists");
    }

    const task = new Task({ ...taskData, taskCode });
    const savedTask = await task.save();
    return savedTask;
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      const validationErrors = {};
      for (const key in error.errors) {
        validationErrors[key] = error.errors[key].message;
      }
      throw new Error("Validation Error", { validationErrors });
    }
    throw new Error("Internal Server Error");
  }
}

module.exports = createTask;
