const _ = require("lodash");
const Project = require("../../database/model/project");
const Company = require("../../database/model/company");

async function getProjectsByQuery({ name, code, manager, companyId }) {
  const filteredFields = _.omitBy(
    { name, code, manager, companyId },
    _.isUndefined
  );

  try {
    const projects = await Project.find(
      { ...filteredFields },
      {
        _id: 0,
        id: { $toString: "$_id" },
        name: 1,
        code: 1,
        manager: 1,
        companyId: 1,
      }
    );
    return projects;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getAllProjectsManagedBy(email) {
  try {
    const projects = await getProjectsByQuery({ manager: email });
    return projects;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getProjectsByCompany(companyId) {
  try {
    const projects = await getProjectsByQuery({ companyId });
    return projects;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getProjectsByCompanyPathname(pathname) {
  try {
    const company = await Company.findOne({ pathname }, { _id: 1 });
    console.log({ company });
    const projects = await getProjectsByQuery({ companyId: company._id });
    return projects;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getProjectsByCompany: getProjectsByCompany,
  getAllProjectsManagedBy: getAllProjectsManagedBy,
  getProjectsByQuery: getProjectsByQuery,
  getProjectsByCompanyPathname,
};
