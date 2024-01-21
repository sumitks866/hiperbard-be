const Company = require("../../database/model/company");

async function getCompanyDetailsFromId(Ids) {
  try {
    const result = await Company.find(
      { _id: { $in: Ids } },
      {
        name: 1,
        adminEmails: 1,
        pathname: 1,
        id: { $toString: "$_id" },
      }
    );
    const companies = {};
    result.forEach((c) => {
      companies[c.id] = c;
    });
    return companies;
  } catch (error) {
    throw error;
  }
}

async function getCompanyDetailByPathname(pathname) {
  try {
    const company = await Company.findOne({ pathname }, { __v: 0 });
    return company;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  create: require("./create"),
  getCompanyDetailsFromId,
  getCompanyDetailByPathname,
};
