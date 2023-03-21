const express = require('express');

const html = require('./routes/html');
const api = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
app.use('/api', api);
app.use('/', html);


// Start the server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});