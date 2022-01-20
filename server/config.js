const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const hbs = require('nodemailer-handlebars')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL, // your email address to send email from
    pass: process.env.PASS // your gmail account password
  }
});

transporter.use('compile', hbs({
    viewEngine: {
        defaultLayout: false
    },
    viewPath: './views/'
}))

module.exports = transporter;