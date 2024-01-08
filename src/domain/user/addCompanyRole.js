const User = require("../../database/model/user");

async function addUserRoleToCompany(email, companyId, role) {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const roleIndex = user.companyRoles.findIndex(
      (role) => role.companyId === companyId
    );

    if (roleIndex !== -1) {
      user.companyRoles[roleIndex] = role;
    } else {
      user.companyRoles.push({ companyId, role });
    }

    await user.save();
  } catch (err) {
    throw err;
  }
}

module.exports = addUserRoleToCompany;
