const Company = require("../../database/model/company");

async function createCompanySpace(name, adminEmail) {
  if (!adminEmail) {
    throw new Error("Admin email required");
  }
  const company = new Company({ name, adminEmails: [adminEmail] });
  try {
    const savedCompany = await company.save();
    return savedCompany;
  } catch (err) {
    throw new Error(`Error creating company: ${error.message}`);
  }
}

module.exports = createCompanySpace