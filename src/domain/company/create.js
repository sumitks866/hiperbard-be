const Company = require("../../database/model/company");

async function createCompanySpace(name, pathname, adminEmail) {
  if (!adminEmail || !pathname) {
    throw new Error("Workspace name, pathname and admin email are required.");
  }
  console.log({ name, pathname, adminEmail });
  const company = new Company({ name, pathname, adminEmails: [adminEmail] });
  try {
    const savedCompany = await company.save();
    return savedCompany;
  } catch (err) {
    throw new Error(`Error creating company: ${err.message}`);
  }
}

module.exports = createCompanySpace;
