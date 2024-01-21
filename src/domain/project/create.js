const mongoose = require("mongoose");
const Company = require("../../database/model/company");
const Project = require("../../database/model/project");

async function createProject({ name, code, manager, companyId }) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const newProject = new Project({
      name,
      manager,
      companyId,
      code,
    });
    const savedProject = await newProject.save({ session });

    await Company.findByIdAndUpdate(
      companyId,
      { $push: { projects: savedProject._id } },
      { new: true, session }
    );

    await session.commitTransaction();
    await session.endSession();

    return savedProject;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = createProject;
