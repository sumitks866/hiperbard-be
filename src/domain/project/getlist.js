const Project = require("../../database/model/project");

async function getProjectsByCompany(companyId) {
  try {
    const projects = await Project.find({ companyId });
    return projects;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = getProjectsByCompany;
