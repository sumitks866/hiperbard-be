const Project = require("../../domain/project");

async function createProject(req, res) {
  const { name, manager, companyId, code } = req.body;
  try {
    const result = await Project.create({ name, code, manager, companyId });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
}

module.exports = createProject;
