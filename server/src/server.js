
const express = require('express');     // Require express
const app = express();                  // Make app with express
const PORT = process.env.PORT || 3001;  // Set port to .env or default
const dbConnection = require('./db/index.js');  // Require the database connection for server to access
const router = express.Router();

// Middlewares
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '100mb' }));

// If its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	app.use('/static', express.static(path.join(__dirname, '../../client/build/')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../../client/build/'));
	});
}

app.get('/test', (req, res) => res.send('Hello world!'));   // Basic response for testing server

// Error handler
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Turn server on