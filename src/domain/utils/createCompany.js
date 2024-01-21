const mongoose = require("mongoose");
const Company = require("../../database/model/company");
const User = require("../../database/model/user");

async function createCompany(name, pathname, adminEmail) {
  if (!adminEmail || !pathname || !name) {
    throw new Error("Workspace name, pathname and admin email are required.");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Step 1: Create a new company
    const newCompany = await Company.create(
      [{ name, pathname, adminEmails: [adminEmail] }],
      { session }
    );

    // Step 2: Update User schema by adding company and roles
    await User.findOneAndUpdate(
      { email: adminEmail },
      {
        $push: {
          companyRoles: {
            companyId: newCompany[0]._id,
            role: "admin",
          },
        },
      },
      { new: true, session }
    );

    await session.commitTransaction();
    await session.endSession();

    return {
      role: "admin",
      companyId: newCompany[0]._id,
      companyName: newCompany[0].name,
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(error.message);
  }
}

module.exports = createCompany;
