const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const Recaptcha = require('recaptcha');

const recaptcha = new Recaptcha({
	secret: 'SECRET_KEY',
	verbose: true
});

// Create the Express application:
const app = express();


// requirements for sending email function
const getOAuth2Client = require('./getoauth2client.js');
const sendMail = require('./send_mail.js');

// obj will contain key-value pairs, value can be str or arr
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build', 'index.html')));

app.post('/check', (req, res) => {
	const userResponse = req.query['g-recaptcha-response'];

	recaptcha.checkResponse(userResponse, (error, response) => {
		if(error) {
			// an internal error
			res.status(400).render('400', {
				message: error.toString()
			});
			return;
		}
		if(response.success) {
			// return json
		} else {
			// return json
		}
	})
});

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

// pings the app every 15 mins
setInterval(() => http.get('http://www.neilromana.com'), 900000);

app.listen(PORT, () => console.log('Listening on PORT 3001!'));
