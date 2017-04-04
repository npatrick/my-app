const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

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

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../build')));

app.post('/sendemail', (req, res) => {
	console.log('POST COMING: ', req.body);
	let name = req.body.name;
	let emailaddress = req.body.email;
	let subject = req.body.subject;
	let msg = req.body.message;

	getOAuth2Client(function(err, oauth2Client) {
	  if (err) {
	    console.log('err:', err);
	    res.status(500).send('Internal Server Error');
	  } else {
	    sendMail(name, emailaddress, subject, msg, oauth2Client, function(err, results) {
	      if (err) {
	        console.log('err: ', err);
	      } else {
	      	console.log('SERVER SIDE RESULT: ', results);
	        res.status(200).send('Sent!');
	      }
	    });
	  }
	});
});
// http://d3f55881babrh0.cloudfront.net/songspace-rec.mp4
app.get('/songspace', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../build/assets/videos/songspace-rec.mp4'));
});

// http://d3f55881babrh0.cloudfront.net/truescore-rec.mp4
app.get('/truescore', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '../build/assets/videos/truescore-rec.mp4'));
})

// pings the app every 15 mins
setInterval(() => http.get('http://www.neilromana.com'), 900000);

app.listen(PORT, () => console.log('Listening on PORT 3001!'));
