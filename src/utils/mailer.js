const nodemailer = require("nodemailer");
const config = require("../../config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.MAIL_ADD,
    pass: config.PASS,
  },
});

async function sendMail(to, subject, content) {
  const res = await transporter.sendMail({
    from: config.MAIL_ADD,
    to,
    subject,
    html: content,
  });
  return res;
}

module.exports = {
  transporter,
  sendMail,
};
