const Project = require("../../domain/project");

async function getProjectsByCompany(req, res) {
  const { companyID } = req.params;
  try {
    const projects = await Project.getList(companyID);
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
}

module.exports = getProjectsByCompany;
