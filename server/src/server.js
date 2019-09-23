
const express = require('express');     // Require express
const app = express();                  // Make app with express
const PORT = process.env.PORT || 3001;  // Set port to .env or default
const dbConnection = require('./db/index.js');  // Require the database connection for server to access
const routes = require('./routes');    // Require the routes to use for api endpoints
const path = require('path');           // Lets us use __dirname as the relative filepath from this file

// Middlewares
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '100mb' }));

// If its production environment...
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../../client/build')));        // Specify the location of static files
	app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html')); // Return our index.html page when home "/" route is hit
	  });
	  //wtf why need include this?  make this true SPA so this doesn't be neede
	app.get('/dashboard', (req, res) => {
		res.sendFile(path.join(__dirname, '../../client/build', "index.html"));
	});
}

if (process.env.NODE_ENV !== 'production') {
	app.get('/', (req, res) => {
		res.sendStatus(200)
	})
}

app.get('/test', (req, res) => res.send('Hello world!'));   // Basic response for testing server

app.use(routes);    // Link routes

// Error handler
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Turn server on