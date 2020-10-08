const nodemailer = require('nodemailer');
const config = require('dotenv').config();

const transConfig = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
  debug: true, // show debug output
  logger: true // log information in console
};

const sendMail = data => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(transConfig);

    let mailOptions = {
      from: `<${process.env.MAIL_USER}>`,
      to: process.env.MAIL_DEST_USER,
      subject: 'Hello from TODO list app ✔',
      html: `<h1>${data}</1>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: 'unable to send mail.', error });
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      resolve({ message: 'mail sended successfull.' });
    });
  });
};

module.exports = { sendMail };
