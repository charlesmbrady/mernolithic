
const express = require('express');     // Require express
const app = express();                  // Make app with express
const PORT = process.env.PORT || 3001;  // Set port to .env or default
const dbConnection = require('./db/index.js');  // Require the database connection for server to access
const router = express.Router();

app.get('/test', (req, res) => res.send('Hello world!'));   // Basic response for testing server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Turn server on