const Project = require("../../database/model/project");

async function createProject({ name, manager, companyId }) {
  try {
    const newProject = new Project({
      name,
      manager,
      companyId,
    });
    const savedProject = await newProject.save();
    return savedProject;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = createProject;
