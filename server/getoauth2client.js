const fs = require('fs');
const googleAuth = require('google-auth-library');

module.exports = function getOAuth2Client(cb) {
  // Load client secrets
  fs.readFile('client_secret.json', function(err, data) {
    if (err) {
      return cb(err);
    }
    let credentials = JSON.parse(data);
    let clientSecret = credentials.installed.client_secret;
    let clientId = credentials.installed.client_id;
    let redirectUrl = credentials.installed.redirect_uris[0];
    let auth = new googleAuth();
    let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Load credentials
    fs.readFile('gmail-credentials.json', function(err, token) {
      if (err) {
        return cb(err);
      } else {
        oauth2Client.credentials = JSON.parse(token);
        return cb(null, oauth2Client);
      }
    });
  });
};
