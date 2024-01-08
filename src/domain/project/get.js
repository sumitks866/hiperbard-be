const Project = require("../../database/model/project");

async function getProjectByCode(code) {
  try {
    const project = await Project.findOne({ code });
    return project;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = getProjectByCode;
