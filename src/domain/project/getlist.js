const _ = require("lodash");
const Task = require("../../database/model/task");
const Activity = require("../../database/model/activity");
const Project = require("../../database/model/project");
const Company = require("../../database/model/company");
const { getTasks } = require("../task");

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

async function getProjectActvities(projectId) {
  try {
    const tasks = await Task.find({ projectId }, { _id: 1 });
    const projectActivities = await Activity.aggregate([
      {
        $match: {
          taskId: {
            $in: tasks.map((task) => task._id),
          },
        },
      },
      {
        $lookup: {
          from: "tasks",
          localField: "taskId",
          foreignField: "_id",
          as: "task",
        },
      },
      {
        $unwind: "$task",
      },
      {
        $sort: { timestamp: -1 },
      },
      {
        $project: {
          _id: 1,
          actorEmail: 1,
          taskId: 1,
          type: 1,
          data: 1,
          timestamp: 1,
          task: {
            _id: 1,
            taskCode: 1,
          },
        },
      },
    ]);

    return projectActivities;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  getProjectsByCompany: getProjectsByCompany,
  getAllProjectsManagedBy: getAllProjectsManagedBy,
  getProjectsByQuery,
  getProjectsByCompanyPathname,
  getProjectActvities,
};
