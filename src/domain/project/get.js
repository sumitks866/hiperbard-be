const Project = require("../../database/model/project");

async function getProjectByCode(code, manager) {
  try {
    const project = await Project.findOne(
      { code, manager },
      {
        _id: 0,
        id: { $toString: "$_id" },
        name: 1,
        code: 1,
        manager: 1,
        companyId: 1,
      }
    );
    return project;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = getProjectByCode;
