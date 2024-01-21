const Project = require("../../domain/project");

async function getProjectsByQuery(req, res) {
  const { email: manager } = req.decodedToken;
  try {
    const { query } = req;
    const projects = await Project.getList.getProjectsByQuery({
      ...query,
      manager,
    });
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllProjectsManagedBy(req, res) {
  const { email } = req.decodedToken;
  try {
    const projects = await Project.getList.getAllProjectsManagedBy(email);
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getProjectsByCompany(req, res) {
  const { companyID } = req.params;
  try {
    const projects = await Project.getList.getProjectsByCompany(companyID);
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
}

async function getProjectsByCompanyPathname(req, res) {
  const {companyPathname} = req.params;
  try {
    const projects = await Project.getList.getProjectsByCompanyPathname(companyID);
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
}

module.exports = {
  getProjectsByCompany: getProjectsByCompany,
  getAllProjectsManagedBy: getAllProjectsManagedBy,
  getProjectsByQuery: getProjectsByQuery,
  getProjectsByCompanyPathname
};
