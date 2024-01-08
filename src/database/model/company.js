const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
//   id: {
//     type: String,
//     unique: true,
//   },
  name: {
    type: String,
    required: true,
  },
  adminEmails: {
    type: [String],
    default: [],
  },
  employeeEmails: {
    type: [String],
    default: [],
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
