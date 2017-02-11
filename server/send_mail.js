const fs = require('fs');
const google = require('googleapis');

module.exports = function sendMail(name, emailAddress, subject, msg, auth, cb) {
  const gmailClass = google.gmail('v1');

  let email_lines = [];

  email_lines.push('From: "www.neilromana.com" <npatrick.romana@gmail.com>');
  email_lines.push('To: npatrick.romana@gmail.com');
  email_lines.push('Content-type: text/html;charset=iso-8859-1');
  email_lines.push('MIME-Version: 1.0');
  email_lines.push('Subject: ' + subject);
  email_lines.push('');
  email_lines.push('<b>Name</b>: ' + name + '<br/>');
  email_lines.push('<b>Email</b>: ' + emailAddress + '<br/><br/>');
  email_lines.push(msg);

  let email = email_lines.join('\r\n').trim();

  let base64EncodedEmail = new Buffer(email).toString('base64');
  base64EncodedEmail = base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');

  gmailClass.users.messages.send({
    auth: auth,
    userId: 'me',
    resource: {
      raw: base64EncodedEmail
    }
  }, cb);
};
