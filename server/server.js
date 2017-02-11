const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create the Express application:
const app = express();

// requirements for sending email function
const getOAuth2Client = require('./getoauth2client.js');
const sendMail = require('./send_mail.js');

// obj will contain key-value pairs, value can be str or arr
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/sendemail', (req, res) => {
	console.log('POST COMING: ', req.body);
	let name = req.body.name;
	let emailaddress = req.body.email;
	let subject = req.body.subject;
	let msg = req.body.message;

	getOAuth2Client(function(err, oauth2Client) {
	  if (err) {
	    console.log('err:', err);
	  } else {
	    sendMail(name, emailaddress, subject, msg, oauth2Client, function(err, results) {
	      if (err) {
	        console.log('err: ', err);
	      } else {
	        console.log(results);
	      }
	    });
	  }
	});

	res.status(req.body ? 200 : 500).send('Message Sent!');
});

app.listen(port, () => console.log('Listening on port 3001!'));
