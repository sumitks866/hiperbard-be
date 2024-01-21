const Project = require("../../domain/project");

async function getProjectByCode(req, res) {
  const { projectID } = req.params;
  const { email: manager } = req.decodedToken;
  try {
    const project = await Project.get(projectID, manager);
    if (!project) {
      return res.status(404).json({ err: "Project not found" });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(404).json({ err: "Unable to find project" });
  }
}

module.exports = getProjectByCode;
