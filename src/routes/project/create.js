const Project = require("../../domain/project");

async function createProject(req, res) {
  const { name, manager, companyId } = req.body;
  try {
    const result = await Project.create({ name, manager, companyId });
    res.status(201).json({
      name: result.name,
      code: result.code,
      manager: result.manager,
      companyId: result.companyId,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
}

module.exports = createProject;
