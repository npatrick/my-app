const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create the Express application:
const app = express();

// obj will contain key-value pairs, value can be str or arr
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/sendemail', (req, res) => {
	console.log('POST COMING: ', req.body);
	res.status(req.body ? 200 : 500).send('Message Sent!');
});

app.listen(port, () => console.log('Listening on port 3001!'));
